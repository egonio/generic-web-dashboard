import { Injectable } from '@angular/core';
import * as UploadDetailsViewModels from './upload-details.viewmodel';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UploadDetailsService {

  constructor( private http: HttpClient) { }

  async getUploadDetails() {
    const temp = await this.http.get<UploadDetailsViewModels.UploadDetails>(' ' + '/media-attachments/get-upload-details').toPromise();
    return temp;
  }

}
