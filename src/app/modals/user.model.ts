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
  totalPlots: number;
  availablePlots: number;
  bookedPlots: number;
  soldPlots: number;
  address: string;
  city: string;
  state: string;
  phno: number;
  pincode: number;
  plots: Plots[];
}

//=======================Plots============================
export interface Plots {
  plotNumber: string;
  plotSize: number;
  price: number;
  status: 'AVAILABLE' | 'BOOKED' | 'SOLD'; // Enum-like
  location: string;
  facing: string;
  cornerPlot: boolean;
}

//======================Leads===================
export interface Lead{
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
token:Token[]
}


export interface Visit{
  visitId:number,
  propertyType:string,
  visitDate:string,
  visitTime:string,
  notes:string,
  customerFeedback:string,
  nextStep:string,
  status:string,
  reason:string,
  lead:Lead,
  leadName:string
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
  lead:Lead,
  visits:Visit[];
}
