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
  reports: ViewModels.ReportUi[];
  subscription: Subscription;
  COMPLETED = ViewModels.COMPLETED;
  ONGOING = ViewModels.ONGOING;
  NEW = ViewModels.NEW;
  showHidden = false;
  filters = {
    new: true,
    ongoing: false,
    completed: false
  };

  constructor(private reportService: ReportsService, private router: Router) {}

  async ngOnInit() {
    console.log(this.filters.new);
    this.subscription = this.reportService.reportsChanged.subscribe(
      (reports: ViewModels.Report[]) => {
        this.reports = reports.map(report => {
          const newObj: ViewModels.ReportUi = {
            ...report,
            uiDetailsToggle: false
          };
          return newObj;
        });
      }
    );
    await this.reportService.getReports();
  }

  uiDetailsToggle(id: string) {
    const temp = this.reports.find(reportUi => {
      return reportUi.id === id;
    });
    temp.uiDetailsToggle = !temp.uiDetailsToggle;
  }

  changeFilter(filter: string) {
    this.filters[filter] = !this.filters[filter];
  }

  goToDetails(id: string) {
    this.router.navigate(['/reports', id]);
  }

  isCompleted(report: ViewModels.Report) {
    return report.status === ViewModels.COMPLETED;
  }
}
