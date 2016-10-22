import { Component,OnInit } from '@angular/core';
import { Student } from '../models/student';
import { Teacher } from '../models/teacher';
import { StudentsService } from '../services/student.service';
import { TeacherService } from '../services/teachers.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/school.html',
  providers: [StudentsService,TeacherService]
})
export class AppComponent implements OnInit {
  studentSelected:Student;
  teacherSelected:Teacher;
  students:Student[];
  teachers:Teacher[];

  constructor(private studentService: StudentsService , private teacherService: TeacherService){};

  onSelectEstudent(student:Student){
    this.studentSelected = student;
  }
  onSelectTeacher(teacher:Teacher){
    this.teacherSelected = teacher; 
  }

  ngOnInit(){
    this.studentService.getEstudenst()
    .then(estudiantes => this.students = estudiantes)
    .catch(error => console.log(error));

    this.teacherService.getTeachers()
    .then(profesores => this.teachers = profesores)
    .catch(error => console.log(error));
    }
}


