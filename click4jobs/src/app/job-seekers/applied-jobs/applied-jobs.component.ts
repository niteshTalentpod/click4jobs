import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Post } from '../../post';
import { JobService } from '../../job.service';

@Component({
  selector: 'app-applied-jobs',
  templateUrl: './applied-jobs.component.html',
  styleUrls: ['./applied-jobs.component.css']
})
export class AppliedJobsComponent implements OnInit {

  profile: Post;

  constructor(private router: Router, private route: ActivatedRoute, private service: JobService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramas) => {
      console.log(paramas);
      this.profile = this.service.getJob(+paramas.get('id'));
    });
  }

}
