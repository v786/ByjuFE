import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  courses: any[];
  courseCount: number;
  searchedCourse: string;
  tempList: any[];

  constructor(private _service: CourseService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.searchedCourse = this._route.snapshot.paramMap.get('course');
    this.getCourses();
  }

  getCourses() {
    this._service.getCourseList().subscribe(
      responseObj => {
        this.courses = this.filterByCourse(responseObj);
        console.log('Action complete');
        this.courseCount = this.courses.length;
      },
      () => {
        console.log(this.courses.length);
      }
    );
  }

  filterByCourse(courseList) {
    this.tempList = [];
    courseList.forEach(element => {
      if (element['Course Name'].includes(this.searchedCourse)) {
        this.tempList.push(element);
      }
    });
    return this.tempList;
  }

  filterBy(value) {
    this.searchedCourse = value;
    this.getCourses();
  }
}
