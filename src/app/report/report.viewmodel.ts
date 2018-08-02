export interface Report {
  id: string;
  apartment: string;
  createdAt: Date;
  description: string;
  email: string;
  phoneNumber: string;
  status: string;
  submitterName: string;
  title: string;
}


export interface CreateReport {
  apartment: string;
  description: string;
  email: string;
  phoneNumber: string;
  submitterName: string;
  title: string;
  status: string;
}

export const COMPLETED = 'COMPLETED';
export const NEW = 'NEW';
export const INPROGRESS = 'INPROGRESS';
