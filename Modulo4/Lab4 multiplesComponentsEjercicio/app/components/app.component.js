"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.students = STUDENTS;
        this.teachers = TEACHERS;
    }
    AppComponent.prototype.onSelectEstudent = function (student) {
        this.studentSelected = student;
    };
    AppComponent.prototype.onSelectTeacher = function (teacher) {
        this.teacherSelected = teacher;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/templates/school.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var STUDENTS = [
    {
        id: 80794654,
        name: "German Gracia",
        classes: ["Sistemas", "Matematicas", "Biologia"],
        grade: "10",
    },
    {
        id: 12354546,
        name: "Martha Angulo",
        classes: ["Religion", "Periodismo", "Matematicas"],
        grade: "7",
    },
    {
        id: 80797123,
        name: "Juan Parmenio Angulo",
        classes: ["Quimica", "Calculo", "Ortodoncia"],
        grade: "11",
    }
];
var TEACHERS = [
    {
        id: 80465932,
        name: "Juan Pablo Capacho",
        rooms: [205, 208, 305],
        studies: ["Informatica", "Sistemas 1"]
    },
    {
        id: 105458995,
        name: "Omar Rojas",
        rooms: [207],
        studies: ["Programacion", "Programacion 2"]
    },
    {
        id: 1545677578,
        name: "Luisa Hernandez",
        rooms: [802, 950],
        studies: ["Sexologia", "Inicios del coqueteo"]
    }
];
//# sourceMappingURL=app.component.js.map