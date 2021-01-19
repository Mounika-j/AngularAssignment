import { TemplateRef, ViewChild } from '@angular/core';
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
// import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {

  constructor(  private toastr: ToastrService, private router: Router, private modalService: BsModalService,  public dialog: MatDialog
               ) { }
  public modalRef: BsModalRef;
  public userRegistrationObj = {
    mobileNo: '',
    catchWord: '',
    firstName: '',
    lastName: '',
    eMail: '',
    genderId: null,
  };
  public genders = [
    {GenderID: 1, GenderName: 'Male'},
    {GenderID: 2, GenderName: 'Female'},
    {GenderID: 0, GenderName: 'Others'}
  ];
  public forgotPwdObj = {
    eMail: '',
    captchaElement: ''
  };
  @ViewChild('userRegistrationForm', {static: true}) userRegistrationForm;
  ngOnInit(): void {

  }

  handleSuccess(e) {
    if (this.forgotPwdObj.eMail !== '') {
      this.toastr.success('Send to email');
      console.log('forgotPwdObj', this.forgotPwdObj);
     
    } else {
      this.toastr.error('Please enter Email and slect Capctha');
    }
  }
  registrationFunction() {
    console.log('userRegistrationObj', this.userRegistrationObj);
    this.toastr.success('Registration Suceesfully');
    this.router.navigateByUrl('/dashboard');
    this.userRegistrationForm.resetForm();
  }

  declineModal() {
    this.modalRef.hide();
  }
      forgotPaswwordfun(template: TemplateRef<any>) {

        this.modalRef = this.modalService.show(template, {class: 'modal-dialog-centered modal-lg',
        ignoreBackdropClick: true});
  }

  forgorPasswordFormFun() {
    if (this.forgotPwdObj.eMail !== '' && this.forgotPwdObj.captchaElement !== '') {
      this.toastr.success('Send to email');
      console.log('forgotPwdObj', this.forgotPwdObj);
    } else {
      this.toastr.error('Please enter Email and slect Capctha');
    }
  }
}


