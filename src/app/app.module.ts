import { ReportsService } from './report/report.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportComponent } from './report/report.component';
import { ReportListComponent } from './report/report-list/report-list.component';
import { ReportDetailsComponent } from './report/report-details/report-details.component';
import { ReportNewComponent } from './report/report-new/report-new.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { MainContentComponent } from './dashboard/main-content/main-content.component';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ReportComponent,
    ReportListComponent,
    ReportDetailsComponent,
    ReportNewComponent,
    HeaderComponent,
    SidebarComponent,
    MainContentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ReportsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
