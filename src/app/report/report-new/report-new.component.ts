import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl} from '@angular/forms';
import * as ViewModel from '../report.viewmodel';
import { ReportsService } from '../report.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-new',
  templateUrl: './report-new.component.html',
  styleUrls: ['./report-new.component.css']
})
export class ReportNewComponent implements OnInit {
  newReportForm: FormGroup;
  newReport: ViewModel.CreateReport;
  constructor( private reportService: ReportsService, private router: Router) { }

  ngOnInit() {
    this.newReportForm = new FormGroup ({
      title: new FormControl('', Validators.required),
      apartment: new FormControl('', Validators.required),
      submitterName: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  }

  createNewReport() {
    try {
      this.newReport = this.newReportForm.value;
      this.newReport.status = 'New';
      console.log(this.newReport);
      this.newReportForm.reset();
      this.reportService.createNewReport(this.newReport);
      this.router.navigate(['/report']);
    } catch (error) {
      console.log(error);
    }


  }

}

