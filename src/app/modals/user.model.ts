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
    status:string;
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
    status:string;
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
    status:string;
    agencyName: string;
  }
  