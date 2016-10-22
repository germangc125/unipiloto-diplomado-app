import { Component,Input } from '@angular/core';
import { Student } from '../models/student';


@Component({
  selector: 'student-detail',
  templateUrl: 'app/templates/student-detail.html'
})
export class studentDetailComponent {
    @Input()
    student:Student;
}

