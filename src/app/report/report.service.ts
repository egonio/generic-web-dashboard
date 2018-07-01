import { Injectable } from '@angular/core';
import { Report } from './report.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as ViewModels from './report.viewmodel';

@Injectable()
export class ReportsService {
  URL = 'http://192.168.1.100:5000/';


  reportsChanged = new Subject<ViewModels.Report[]>();

  private reports: ViewModels.Report[];

  /*
  private reports: Report[] = [
    new Report(
      '1',
      'Door Hand Broken',
      'Eldon Goni0',
       '302',
       '4162746176',
      'email@email.com',
      'The bedroom door handle broke. Need a new handle and lock',
      'NEW',
      'June 30, 2018'
    ),
    new Report(
      '2',
      'Fridge not working',
      'Matt Welke',
       '1013',
       '4182637561',
      'email@email.com',
      'The fridge door has stopped working. Please Halp',
      'IN PROGRESS',
      'July 2, 2018'
    ),
    new Report(
      '3',
      'Kitchen Light not working',
      'Mister Schmuckles',
      '2214',
      '1234567890',
      'email@email.com',
      'Kitchen light bulb is dead. Need a new bulb',
      'COMPLETED',
      'June 12, 2018'
    )
  ];
  */

constructor(private http: HttpClient) {}


private getReportsHTTP() {
  /*
  return this.reports.slice();
  */
  console.log('Get Reports at ' + this.URL + 'api/reports');
  return this.http.get<ViewModels.Report[]>(this.URL + 'api/reports').toPromise();
}

async getReports() {
  console.log('get reports start');
  try {
    console.log('try starting');
    console.log( await this.getReportsHTTP());
    this.reports = await this.getReportsHTTP();
    this.reportsChanged.next(this.reports);
    console.log(this.reports);

  } catch (error) {
    console.log(error);
  }
}

/*
getReport(id: string) {
  return this.getReports().find( x => x.id === id);
}

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