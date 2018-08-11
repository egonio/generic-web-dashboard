import { UploadDetailsService } from './../../services/upload-details.service';
import * as UploadDetailsViewModels from './../../services/upload-details.viewmodel';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import * as ViewModel from '../report.viewmodel';
import { ReportsService } from '../report.service';
import { Router } from '@angular/router';
import * as sha1 from 'js-sha1';


@Component({
  selector: 'app-report-new',
  templateUrl: './report-new.component.html',
  styleUrls: ['./report-new.component.css']
})
export class ReportNewComponent implements OnInit {
  constructor(private reportService: ReportsService, private router: Router, private uploadDetailsService: UploadDetailsService) {}

  newReportForm: FormGroup;
  newReport: ViewModel.CreateReport;
  imageFile;
  imagePreview;
  uploadDetails;
  reportID ;
  imageType;
  imageName;


  ngOnInit() {
    this.newReportForm = new FormGroup({
      title: new FormControl('', Validators.required),
      apartment: new FormControl('', Validators.required),
      submitterName: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
    //this.getUploadDetails();
  }

  async createNewReport() {
    try {
      this.newReport = this.newReportForm.value;
      this.newReport.status = 'NEW';
      const temp = await this.reportService.createNewReport(this.newReport) as { newId: string };
      this.reportID = temp.newId;
      this.newReportForm.reset();
      console.log(this.reportID);
    } catch (error) {}
  }

  onChooseMedia(event: any) {
    const reader = new FileReader();
    reader.onload = (temp: ProgressEvent) => {
      this.imagePreview = (<FileReader>temp.target).result;
    };
    reader.readAsDataURL(event.target.files[0]);
    this.imageFile = event.target.files[0];
    this.imageType = this.imageFile.type;
    this.imageName = this.imageFile.name;
  }

  async getUploadDetails() {
    try {
      this.uploadDetails = await this.uploadDetailsService.getUploadDetails();
    } catch (error) {}
  }

  createHash(file: any) {
    return sha1(file);
  }

  async uploadToB2() {
    this.getUploadDetails();
    const hash =  this.createHash(this.imageFile);
    const temp = await this.reportService.uploadToB2(this.uploadDetails, this.imageFile, hash);
    console.log(temp);
  }

  async uploadImage() {
    const temp = this.reportService.uploadImageForReport(this.reportID, this.imageType, this.imageName, this.imageFile);
    console.log(temp);
  }

}
