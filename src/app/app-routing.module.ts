import { ReportComponent } from './report/report.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportNewComponent } from './report/report-new/report-new.component';
import { ReportDetailsComponent } from './report/report-details/report-details.component';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/reports', pathMatch: 'full' },
  { path: 'reports', component: ReportComponent },
  { path: 'report/create-new', component: ReportNewComponent },
  { path: 'report/detail/:id', component: ReportDetailsComponent},
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
