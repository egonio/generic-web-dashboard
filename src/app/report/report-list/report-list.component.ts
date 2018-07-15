import { Router } from '@angular/router';
import { ReportsService } from './../report.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import * as ViewModels from '../report.viewmodel';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent implements OnInit {

  reports: ViewModels.Report[];
  subscription: Subscription;

  constructor(private reportService: ReportsService, private router: Router) {  }

  async ngOnInit() {
    this.subscription  = this.reportService.reportsChanged
      .subscribe(
        (reports: ViewModels.Report[]) => {
          this.reports = reports;
        }
      );
    await this.reportService.getReports();
  }

  goToDetails (id: string) {
    this.router.navigate(['/report/detail', id]);
  }

}
