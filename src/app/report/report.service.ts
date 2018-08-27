import { UploadDetails } from './../services/upload-details.viewmodel';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as ViewModels from './report.viewmodel';
import * as UploadDetailsViewModels from './../services/upload-details.viewmodel';

@Injectable()
export class ReportsService {

  reportsChanged = new Subject<ViewModels.Report[]>();

  private reports: ViewModels.Report[];

  private mockReports: ViewModels.Report[] = [
    {
      id: '1',
      title: 'Bedroom door handle broken',
      submitterName: 'Eldon Gonio',
      apartment: '302',
      phoneNumber: '123-456-7890',
      email: 'email@email.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc omni virtuti vitium contrario nomine opponitur. Tamen a proposito, inquam, aberramus. Sin laboramus, quisest, qui alienae modum statuat industriae? Itaque nostrum est-quod nostrum dico, artis est-ad ea principia,quae accepimus. Duo Reges: constructio interrete. Quis animo aequo videt eum, quem inpure ac flagitiose putet vivere?',
      status: 'NEW',
      createdAt: new Date(),
      mediaAttachments: []
    },
    {
      id: '2',
      title: 'Loud Neighbors, can\'t sleep',
      submitterName: 'Kersten Chernerwerth',
      apartment: '14G',
      phoneNumber: '987-654-3210',
      email: 'email@email.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc omni virtuti vitium contrario nomine opponitur. Tamen a proposito, inquam, aberramus. Sin laboramus, quisest, qui alienae modum statuat industriae? Itaque nostrum est-quod nostrum dico, artis est-ad ea principia,quae accepimus. Duo Reges: constructio interrete. Quis animo aequo videt eum, quem inpure ac flagitiose putet vivere?',
      status: 'NEW',
      createdAt: new Date(),
      mediaAttachments: []
    },
    {
      id: '3',
      title: 'Leaky Faucet -  Need new Pipes',
      submitterName: 'Pern Kno',
      apartment: '609',
      phoneNumber: '111-222-333',
      email: 'email@email.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc omni virtuti vitium contrario nomine opponitur. Tamen a proposito, inquam, aberramus. Sin laboramus, quisest, qui alienae modum statuat industriae? Itaque nostrum est-quod nostrum dico, artis est-ad ea principia,quae accepimus. Duo Reges: constructio interrete. Quis animo aequo videt eum, quem inpure ac flagitiose putet vivere?',
      status: 'ONGOING',
      createdAt: new Date(),
      mediaAttachments: []
    },
    {
      id: '4',
      title: 'Broken Tiles',
      submitterName: 'John Smith',
      apartment: '105',
      phoneNumber: '222-333-4567',
      email: 'email@email.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc omni virtuti vitium contrario nomine opponitur. Tamen a proposito, inquam, aberramus. Sin laboramus, quisest, qui alienae modum statuat industriae? Itaque nostrum est-quod nostrum dico, artis est-ad ea principia,quae accepimus. Duo Reges: constructio interrete. Quis animo aequo videt eum, quem inpure ac flagitiose putet vivere?',
      status: 'ONGOING',
      createdAt: new Date(),
      mediaAttachments: []
    },
    {
      id: '5',
      title: 'Door Lock Broken',
      submitterName: 'Mister Schmuckles',
      apartment: '1013',
      phoneNumber: '123-421-3214',
      email: 'email@email.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc omni virtuti vitium contrario nomine opponitur. Tamen a proposito, inquam, aberramus. Sin laboramus, quisest, qui alienae modum statuat industriae? Itaque nostrum est-quod nostrum dico, artis est-ad ea principia,quae accepimus. Duo Reges: constructio interrete. Quis animo aequo videt eum, quem inpure ac flagitiose putet vivere?',
      status: 'COMPLETED',
      createdAt: new Date(),
      mediaAttachments: []
    },
    {
      id: '6',
      title: 'Fridge Stopped Working',
      submitterName: 'Kno Ayce',
      apartment: '713',
      phoneNumber: '567-123-4123',
      email: 'email@email.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc omni virtuti vitium contrario nomine opponitur. Tamen a proposito, inquam, aberramus. Sin laboramus, quisest, qui alienae modum statuat industriae? Itaque nostrum est-quod nostrum dico, artis est-ad ea principia,quae accepimus. Duo Reges: constructio interrete. Quis animo aequo videt eum, quem inpure ac flagitiose putet vivere?',
      status: 'COMPLETED',
      createdAt: new Date(),
      mediaAttachments: []
    }
  ];

  constructor(private http: HttpClient) {}

  private async getReportsHTTP() {

  }


  async getReport(id: string) {

    const temp = await this.mockReports.find(element => {
      return element.id === id;
    });
    return temp;
   /*
    const temp = await this.http
      .get<ViewModels.Report>(this.URL + '/reports/' + id)
      .toPromise();
    return temp;
    */
  }

  async getReports() {

    // Mock Reports
    this.reportsChanged.next(this.mockReports);
    /*
    try {
      this.reports = await this.getReportsHTTP();
      this.reportsChanged.next(this.reports);
    } catch (error) {
      console.log(error);
    }
    */
  }


  async createNewReport(newReport: ViewModels.CreateReport) {
    console.log('create new report');
  }


  async uploadImageForReport(
    id: string,
    type: string,
    imageName: string,
    imageFile: any
  ) {
    return null;
  }

  async getConfig() {
    return null;
  }

  /*
updateReport(id: string, status: string) {
  this.reports.find(x => x.id === id).status = status;
  this.reportsChanged.next(this.getReports());
}

addNewReport( report: Report) {
  this.reports.push(report);
  this.reportsChanged.next(this.getReports());
}
*/
}
