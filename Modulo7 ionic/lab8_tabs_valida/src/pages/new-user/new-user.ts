import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { NavController } from 'ionic-angular';
import {CustomValidators} from '../../validators/custom-validator';
/*
  Generated class for the NewUser page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-new-user',
  templateUrl: 'new-user.html'
})
export class NewUserPage {
 userForm: FormGroup;
  constructor(public navCtrl: NavController,public formBuilder: FormBuilder) {
    this.userForm = this.createUserForm();
  }

  ionViewDidLoad() {
    console.log('Hello NewUserPage Page');
  }
  private createUserForm() {
    return this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.minLength(6), CustomValidators.emailValidator]],
      password: ['', [Validators.required, CustomValidators.passwordValidator]],
      gender: ['', Validators.required],
    });
  }
saveUser(){
alert("as");

}

}
