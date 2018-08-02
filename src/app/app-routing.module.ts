import { ReportListComponent } from './report/report-list/report-list.component';
import { ReportComponent } from './report/report.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportNewComponent } from './report/report-new/report-new.component';
import { ReportDetailsComponent } from './report/report-details/report-details.component';
import { MainDashComponent } from './main-dash/main-dash.component';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: MainDashComponent },
  { path: 'reports', component: ReportComponent,
    children : [
      { path: '', redirectTo: 'list', pathMatch: 'full'},
      { path: 'list', component: ReportListComponent},
      { path: 'create-new', component: ReportNewComponent },
      { path: ':id', component: ReportDetailsComponent},
     ]
  },
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
