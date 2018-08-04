import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as ViewModels from './report.viewmodel';

@Injectable()
export class ReportsService {
  ip = 'https://192.168.1.100:5001/';
  heroku = 'https://property-app-back-end.herokuapp.com/';
  URL = this.heroku;

  reportsChanged = new Subject<ViewModels.Report[]>();

  private reports: ViewModels.Report[];

  private sdoigjnsidg: string;

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
      createdAt: new Date()
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
      createdAt: new Date()
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
      status: 'INPROGRESS',
      createdAt: new Date()
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
      status: 'INPROGRESS',
      createdAt: new Date()
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
      createdAt: new Date()
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
      createdAt: new Date()
    }
  ];

  constructor(private http: HttpClient) {}

  private async getReportsHTTP() {
    function deserializeReport(report: ViewModels.Report) {
      const r = { ...report };

      r.createdAt = new Date(report.createdAt as any);

      return r;
    }
    return (await this.http
      .get<ViewModels.Report[]>(this.URL + 'api/reports')
      .toPromise()).map(deserializeReport);
  }

  async getReport(id: string): Promise<ViewModels.Report> {
    const temp = await this.mockReports.find(element => {
      return element.id === id;
    });
    /* ###### REMOVE THIS COMMENT
  const temp = await (this.http.get<ViewModels.Report>(this.URL + 'api/reports/' + id).toPromise());
  */
    return temp;
  }

  async getReports() {
    // Mock Reports
    this.reportsChanged.next(this.mockReports);

    /* ####### REMOVE THIS COMMENT
  try {
    this.reports = await this.getReportsHTTP();
    this.reportsChanged.next(this.reports);
    console.log(this.reports);

  } catch (error) {
    console.log(error);
  }
  */
  }

  async createNewReport(newReport: ViewModels.CreateReport) {
    await this.http.post(this.URL + 'api/reports', newReport).toPromise();
    await this.getReports();
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
