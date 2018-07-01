import { ReportComponent } from './report/report.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportNewComponent } from './report/report-new/report-new.component';

const appRoutes: Routes = [
  { path: 'report', component: ReportComponent },
  { path: 'report/create-new', component: ReportNewComponent },
  { path: '',   redirectTo: '/report', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
