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
  mediaAttachments: MediaAttachment[];
}

export interface MediaAttachment {
  fileId: string;
  fileName: string;
  contentType: string;
  fileSizeBytes: number;
}

export interface ReportUi {
  id: string;
  apartment: string;
  createdAt: Date;
  description: string;
  email: string;
  phoneNumber: string;
  status: string;
  submitterName: string;
  title: string;
  mediaAttachments: MediaAttachment[];
  uiDetailsToggle: boolean;
  numberOfImages: number;
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
export const ONGOING = 'ONGOING';
