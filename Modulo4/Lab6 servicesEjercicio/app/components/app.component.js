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
var student_service_1 = require('../services/student.service');
var teachers_service_1 = require('../services/teachers.service');
var AppComponent = (function () {
    function AppComponent(studentService, teacherService) {
        this.studentService = studentService;
        this.teacherService = teacherService;
    }
    ;
    AppComponent.prototype.onSelectEstudent = function (student) {
        this.studentSelected = student;
    };
    AppComponent.prototype.onSelectTeacher = function (teacher) {
        this.teacherSelected = teacher;
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.studentService.getEstudenst()
            .then(function (estudiantes) { return _this.students = estudiantes; })
            .catch(function (error) { return console.log(error); });
        this.teacherService.getTeachers()
            .then(function (profesores) { return _this.teachers = profesores; })
            .catch(function (error) { return console.log(error); });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/templates/school.html',
            providers: [student_service_1.StudentsService, teachers_service_1.TeacherService]
        }), 
        __metadata('design:paramtypes', [student_service_1.StudentsService, teachers_service_1.TeacherService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map