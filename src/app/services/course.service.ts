import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable, from, of } from "rxjs";
import { Course } from "../interfaces/course";
import { COURSES } from "../models/courses";
import { map } from "rxjs/operators";

const mapCourse = (item: COURSES): Course => {
  return {
    id: item.COU_PK,
    description: item.TITLE,
    date: item.PERIOD
  };
};
const mapCourses = (items: COURSES[]) => {
  return items.map(mapCourse);
};

const mapCourseReverse = (item: Course): COURSES => {
  return {
    PERIOD: item.date,
    TITLE: item.description
  };
};

@Injectable({
  providedIn: "root"
})
export class CourseService {
  resourceName = "Course";

  constructor(public http: HttpClient) {}

  getBaseUrl() {
    return environment.apiBaseUrl;
  }

  getBaseResourceUrl() {
    return this.getBaseUrl() + this.resourceName;
  }

  getCourseList(): Observable<Course[]> {
    return this.http.get<COURSES[]>(this.getBaseResourceUrl()).pipe(map(mapCourses));
  }

  createCourse(course: Course): Observable<number> {
    return this.http.post<number>(this.getBaseResourceUrl(), mapCourseReverse(course));
  }

  updateCourse(course: Course): Observable<Course> {
    return this.http.put<COURSES>(this.getBaseResourceUrl() + course.id, course).pipe(map(mapCourse));
  }

  getCourseById(id: number): Observable<Course> {
    return this.http.get<COURSES>(this.getBaseResourceUrl() + id).pipe(map(mapCourse));
  }

  deleteCourse(course: Course): Observable<Course> {
    return this.http.delete<Course>(this.getBaseResourceUrl() + course.id);
  }
}
