import { Component } from '@angular/core';
import { Student } from '../models/student';
import { Teacher } from '../models/teacher';


@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/school.html'
})
export class AppComponent {
  studentSelected:Student;
  teacherSelected:Teacher;
  students:Student[] = STUDENTS;
  teachers:Teacher[] = TEACHERS;
  onSelectEstudent(student:Student){
    this.studentSelected = student;
  }
  onSelectTeacher(teacher:Teacher){
    this.teacherSelected = teacher; 
  }
}

const STUDENTS: Student[] = [
      {
          id: 80794654,
          name: "German Gracia",
          classes: ["Sistemas","Matematicas","Biologia"],
          grade: "10",
      },
          {
          id: 12354546,
          name: "Martha Angulo",
          classes: ["Religion","Periodismo","Matematicas"],
          grade: "7",
      },
          {
          id: 80797123,
          name: "Juan Parmenio Angulo",
          classes: ["Quimica","Calculo","Ortodoncia"],
          grade: "11",
      }
    ]


    const TEACHERS: Teacher[] = [
      {
          id: 80465932,
          name: "Juan Pablo Capacho",
          rooms: [205,208,305],
          studies:["Informatica","Sistemas 1"]
      },
          {
          id: 105458995,
          name: "Omar Rojas",
          rooms: [207],
          studies:["Programacion","Programacion 2"]
      },
          {
          id: 1545677578,
          name: "Luisa Hernandez",
          rooms: [802,950],
          studies:["Sexologia","Inicios del coqueteo"]
      }
    ]