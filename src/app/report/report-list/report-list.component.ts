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
  imageURLConfig;
  filters = {
    new: true,
    ongoing: false,
    completed: false
  };

  constructor(private reportService: ReportsService, private router: Router) {}

  async ngOnInit() {
    this.subscription = this.reportService.reportsChanged.subscribe(
      (reports: ViewModels.Report[]) => {
        this.reports = reports.map(report => {
          const newObj: ViewModels.ReportUi = {
            ...report,
            uiDetailsToggle: false,
            numberOfImages: report.mediaAttachments.length
          };
          return newObj;
        });
      }
    );
    await this.reportService.getReports();
    const temp = await this.reportService.getConfig() as { b2ApiDownloadFileByIdBaseUrl: string }
    this.imageURLConfig = temp.b2ApiDownloadFileByIdBaseUrl;
    console.log(this.reports);

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
