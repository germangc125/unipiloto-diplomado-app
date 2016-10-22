import { Component , Input} from '@angular/core';
import { Teacher } from '../models/teacher';

@Component({
  selector: 'teacher-detail',
  templateUrl: 'app/templates/teacher-detail.html'
})
export class teacherDetailComponent {
    @Input()
    teacher:Teacher;
}