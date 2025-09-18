export interface Role {
  roleName: string;
}

export interface RealEStateUser {
  id: number;
  email: string;
  password: string;
  phoneNumber: string;
  roles: Role[];
}

// ==================== ADMIN ====================
export interface Admin extends RealEStateUser {
  adminName: string;
}

// ==================== AGENCY ====================
export interface Agency extends RealEStateUser {
  agencyName: string;
  agencyAddress: string;
  agencyPinCode: number;
  city: string;
  state: string;
  fbUrl: string;
  instagramUrl: string;
  twitterUrl: string;
  registrationDate: string;
  status: string;
  agents: Agent[];
}

// ==================== AGENT ====================
export interface Agent extends RealEStateUser {
  agentName: string;
  address: string;
  pincode: number;
  city: string;
  state: string;
  agency: Agency;
  registrationDate: string;
  status: string;
  customers: Customer[];
  leads:Lead[];
  revenues:Revenue[];
  totalRevenue:number;
  leadsCount:number;


}

// ==================== CUSTOMER ====================
export interface Customer extends RealEStateUser {
  customerName: string;
  address: string;
  pincode: number;
  city: string;
  state: string;
  agent: Agent;
  registrationDate: string;
  status: string;
  agencyName: string;
}

//======================Venture========================
export interface Venture {
  ventureId: number;
  ventureName: string;
  ventureSize: string;
  ventureStatus:string;
  totalPlots: number;
  availablePlots: number;
  bookedPlots: number;
  soldPlots: number;
  address: string;
  city: string;
  state: string;
  phno: number;
  price:number,
  pincode: number;
  plots: Plots[];
  visit:Visit[];
}

//=======================Plots============================
export interface Plots {
  plotNumber: number;
  plotSize: number;
  price: number;
  status: 'AVAILABLE' | 'BOOKED' | 'SOLD'; // Enum-like
  location: string;
  facing: string;
  cornerPlot: boolean;
}

//======================Leads===================
export interface Lead{
agentName: any;
leadId:number,
leadName:string,
phoneNumber:string,
email:string,
leadSource:string,
interestedIn:string,
preferredLocation:string,
estimatedBudget:number,
leadStatus:string,
followUp:String,
leadNotes:string,
agent:Agent,
visits:Visit[],
token:Token[],
venture:Venture[]
}


export interface Visit{
  visitId:number,
  propertyType:string,
  propertyName:string,
  visitDate:string,
  visitTime:string,
  notes:string,
  customerFeedback:string,
  nextStep:string,
  status:string,
  reason:string,
  lead:Lead,
  leadName:string,
  venture:Venture | null;
}

export interface AgentUpdateRequest {
  email: string,
  phoneNumber: string,
  address: string,
  city: string,
  state: string,
  pincode: string,
}

export interface Token{
  tokenid:number,
	amount:number,
	transactionMode:string,
	agencyStatus:string,
	tokenDeadLine:Date,
  agentName:string,
  finalStatus:string,
  lead:Lead,
  visits:Visit[],
  venture:Venture | null;
  finalAmount:number;
}

// plots-details.dto.ts
export interface PlotsDetailsDto {
  countOfPlots: number;
  countOfAvailablePlots: number;
  countOfAssignedPlots: number;
  countOfBookedPlots: number;
  countOfSoldPlots: number;
  countOfUnAssignedPlots: number;
}

// =======================Post ===============================

export interface Post {
  id?: number;
  type: string;
  title: string;
  message: string;
  audience: string;
  priority: string;
  startDate: string;
  endDate?: string;
  department?: string;
  postedBy: string;
  attachmentPath?: string;
  agency?: Agency; // Optional: include if backend returns agency info with post
}



export interface TokennDto {
   tokenid: number;
  amount: number;
  transactionMode: string;
  agencyStatus: string;
  tokenDeadLine: string;
  agentName:string;
  finalStatus:string;
  finalAmount:number;
   venture:Venture | null;
  lead: {
    agentName: string;
    leadName: string;
    email?: string;
    phone?: string;
  };
}


export interface Review  {

 id :number;
 reviewText: string;
 agent:Agent;
 agency:Agency;
 createdAt:string;
 rating:number;
 response:string;
}



export interface Revenue{
  revenueId:number;
  revenue:number;
  transactionDate:string;
  agent:Agent;
}




