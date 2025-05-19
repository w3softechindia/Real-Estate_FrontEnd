import { Agent } from '@/app/modals/user.model'
import { RealEStateService } from '@/app/services/real-estate.service'
import { SearchService } from '@/app/services/search-service'
import { CommonModule } from '@angular/common'
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core'
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap'
import { agentData } from '@views/agents/data'
import { Subscription } from 'rxjs'

@Component({
  selector: 'agent-data',
  standalone: true,
  imports: [NgbPaginationModule, CommonModule],
  templateUrl: './agent-data.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AgentDataComponent implements OnInit {

  agentList = agentData
  agents: Agent[] = [];
  filteredAgents: Agent[] = [];
  private searchSub!: Subscription;

  constructor(private service: RealEStateService, private searchService: SearchService) { }

  ngOnInit(): void {
    this.getAllAgents();

    this.searchSub = this.searchService.searchTerm$.subscribe(term => {
      console.log('Filtering for:', term);
      this.filteredAgents = this.filterAgents(term);
      console.log('Filtered:', this.filteredAgents);
    });
  }

  private getAllAgents() {
    this.service.getAllAgents().subscribe((data: any[]) => {
      this.agents = data;
      this.page=1;
      console.log('Agents :', data);
      this.filteredAgents = this.filterAgents(this.searchService.getSearchTerm());
    })
  }

  private filterAgents(term: string): Agent[] {
    const lowerTerm = term.toLowerCase();
    return this.agents.filter(agent =>
      (agent.agentName || '').toLowerCase().includes(lowerTerm) ||
      (agent.address || '').toLowerCase().includes(lowerTerm) ||
      (agent.email || '').toLowerCase().includes(lowerTerm)
    );
  }

  ngOnDestroy(): void {
    this.searchSub.unsubscribe();
  }

  agent!: Agent;
  showModal = false;

  openDetailsModal(agent: Agent): void {
    this.agent = agent;
    this.showModal = true;
  }

  page = 1;
  pageSize = 7; // or any number of items per page you prefer

  get paginatedAgents(): Agent[] {
    const start = (this.page - 1) * this.pageSize;
    return this.filteredAgents.slice(start, start + this.pageSize);
  }

  onPageChange() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
