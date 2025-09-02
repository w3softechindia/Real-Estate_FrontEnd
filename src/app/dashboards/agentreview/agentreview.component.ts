import { Component } from '@angular/core'
import { AgenttopbarComponent } from '../agenttopbar/agenttopbar.component'
import { AgentdashboardComponent } from '../agentdashboardsidebar/agentdashboard.component'
import { CommonModule } from '@angular/common'
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { RealEStateService } from '@/app/services/real-estate.service'
import { AuthService } from '@/app/authorization/auth.service'
import { Review } from '@/app/modals/user.model'

@Component({
  selector: 'app-agentreview',
  standalone: true,
  imports: [
    AgenttopbarComponent,
    AgentdashboardComponent,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './agentreview.component.html',
  styleUrl: './agentreview.component.scss',
})
export class AgentreviewComponent {
  reviewForm!: FormGroup
  showModal: boolean = false
  reviews: any[] = []
  review!: Review
  agentEmail!: string
  response!: string
  reviewId!:number;

  constructor(
    private fb: FormBuilder,
    private service: RealEStateService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    // ✅ Initialize the form
    this.reviewForm = this.fb.group({
      res: ['', Validators.required],
    })

    this.loadReviews()
  }

  // ✅ Fetch reviews from backend
  loadReviews(): void {
    this.agentEmail = this.auth.getEmail()
    this.service.getReviews(this.agentEmail).subscribe({
      next: (data) => {
        console.log('reviews ' ,data);
        // Transform API response into simpler table data
        this.reviews=data;
      },
      error: (err) => console.error('Error loading reviews', err),
    })
  }

  openSendModal(review: Review) {
    this.reviewId = review.id
    console.log(review);
    this.showModal = true
  }

  sendResponse() {
    console.log('output :',this.reviewId, this.response);
    this.service
      .sendReviewResponse(this.reviewId, this.response)
      .subscribe((data: any) => {
        this.review = data
        alert('Response Sent Succesfully.......')
      })
    this.showModal = false
    this.response='';
  }

  closePropertyModal() {
    this.showModal = false
    this.response='';
  }
}
