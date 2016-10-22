import {Injectable} from "@angular/core";
import {STUDENTS} from "../mock/students-mock";

@Injectable()
export class StudentsService{
    getEstudenst(){
        return Promise.resolve(STUDENTS);
    }
}