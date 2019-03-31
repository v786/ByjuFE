import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  courses: any[];
  courseCount: number;

  constructor(private _service: CourseService) { }

  ngOnInit() {
    this.getCourses();
  }

  getCourses() {
    this._service.getCourseList().subscribe(
      responseObj => {
        this.courses = responseObj;
      }
    );
  }
}
