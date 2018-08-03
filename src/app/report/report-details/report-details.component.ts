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
  currentImage = 0;

  images = [ 'https://images.pexels.com/photos/189916/pexels-photo-189916.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
             'https://images.pexels.com/photos/248051/pexels-photo-248051.jpeg?cs=srgb&dl=antique-close-up-door-248051.jpg&fm=jpg',
             'https://images.pexels.com/photos/259832/pexels-photo-259832.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          ];

  comments = [
    {
      user:  'John Doe',
      comment: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.',
      date: new Date( (new Date()).getTime() - 1000000 * 100  ),
    },
    {
      user:  'Salmon Ella',
      comment: 'Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
      date: new Date( (new Date()).getTime() - 100000 * 90  ),
    },
    {
      user:  'Mack Arell',
      comment: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
      date: new Date( (new Date()).getTime() - 100000 * 85  ),
    },
    {
      user:  'Mack Arell',
      comment: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
      date: new Date( (new Date()).getTime() - 100000 * 65  ),
    }
    ,
    {
      user:  'Mack Arell',
      comment: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
      date: new Date( (new Date()).getTime() - 10000 * 65  ),
    }
    ,
    {
      user:  'Mack Arell',
      comment: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
      date: new Date( (new Date()).getTime() - 10000 * 61  ),
    }
    ,
    {
      user:  'Mack Arell',
      comment: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
      date: new Date( (new Date()).getTime() - 1000 * 60  ),
    }
    ,
    {
      user:  'Mack Arell',
      comment: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
      date: new Date(),
    }
  ];




  constructor(private route: ActivatedRoute, private reportService: ReportsService) { }

  async ngOnInit() {
    try {
      this.sub = this.route.params.subscribe(params => {
        this.id = params['id'];
     });
     this.report = await this.reportService.getReport(this.id);
     console.log(this.report);
    } catch (error) {

    }

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  changeImage(index) {
    this.currentImage = index;
  }

}
