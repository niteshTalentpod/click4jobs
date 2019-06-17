import { Injectable } from '@angular/core';
import { Post } from './post';
import { Observable, of } from 'rxjs';
import { POSTS } from './postData';


@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor() { }

  getJobs(): Observable<Post[]> {
    return of(POSTS);
  }
}
