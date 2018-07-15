import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as ViewModels from '../report.viewmodel';
import { ReportsService } from '../report.service';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.css']
})
export class ReportDetailsComponent implements OnInit, OnDestroy {
  id: string;
  private sub: any;
  report: ViewModels.Report;
  constructor(private route: ActivatedRoute, private reportService: ReportsService) { }

  async ngOnInit() {
    try {
      this.sub = this.route.params.subscribe(params => {
        this.id = params['id'];
     });
     this.report = await this.reportService.getReport(this.id);
    } catch (error) {

    }

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
