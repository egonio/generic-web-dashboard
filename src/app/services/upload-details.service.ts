import { Injectable } from '@angular/core';
import * as UploadDetailsViewModels from './upload-details.viewmodel';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UploadDetailsService {

  constructor( private http: HttpClient) { }
  ip = 'https://192.168.1.100:5001/api';
  heroku = 'https://property-app-back-end.herokuapp.com/api';
  URL = this.heroku;

  async getUploadDetails() {
    const temp = await this.http.get<UploadDetailsViewModels.UploadDetails>(this.URL + '/media-attachments/get-upload-details').toPromise();
    return temp;
  }

}
