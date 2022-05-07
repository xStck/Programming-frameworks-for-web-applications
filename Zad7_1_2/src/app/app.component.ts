import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Member } from './member.model';
import { AddFormDataService } from './add-form-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css'],
  providers: [DatePipe]
})
export class AppComponent implements OnInit {
  title = 'Zad7_1';
  membershiptypes = ['Student', 'Pracownik', 'Gość'];

  constructor(private datePipe: DatePipe, public addFormDataService: AddFormDataService) { }

  paymentMethods: any = [
    { name: 'PRZELEW', id: 1, selected: true },
    { name: 'BLIK', id: 2, selected: false },
    { name: 'VISA/MASTER CARD', id: 3, selected: false }
  ]

  exercises: any = [
    { name: 'Piłka nożna', id: 1, selected: true },
    { name: 'Siatkówka', id: 2, selected: false },
    { name: 'Koszykówka', id: 3, selected: false },
    { name: 'Tenis stołowy', id: 4, selected: false }
  ]
  currentDate = new Date();
  member = new Member('', '', new Date(), '', [], '', '');
  selectedExercises: string[];
  submitted = false;
  membershipForm: FormGroup;
  paymentMethod: string;

  get f() {
    return this.membershipForm.controls;
  }

  get getExercises() {
    return this.membershipForm.get('exerciseSelection') as FormArray
  }

  get getPayments() {
    return this.membershipForm.get('paymentSelection') as FormArray
  }

  ngOnInit() {
    this.membershipForm = new FormGroup({
      memberName: new FormControl(null),
      mdate: new FormControl(this.datePipe.transform(this.currentDate, 'yyyy-MM-dd')),
      email: new FormControl(null, Validators.email),
      membershipType: new FormControl('Silver'),
      exerciseSelection: this.createExercises(this.exercises),
      payment: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.pattern(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,6}$/im))
    });
  }

  createExercises(exerciseList): FormArray {
    const arr = exerciseList.map(exercise => {
      return new FormControl(exercise.selected)
    });
    return new FormArray(arr);
  }

  createPayments(paymentMethods: any[]): FormArray {
    const arr = paymentMethods.map(payment => {
      return new FormControl(payment.selected, Validators.required)
    });
    return new FormArray(arr)
  }

  onSubmit() {
    this.submitted = true;
    this.member.name = this.membershipForm.value.memberName;
    this.member.mail = this.membershipForm.value.email;
    this.member.membershipDate = this.membershipForm.value.mdate;
    this.member.membershipType = this.membershipForm.value.membershipType;
    this.member.exercises = this.getSelectedExecrcisesNames();
    this.member.phone = this.membershipForm.value.phone;
    this.member.payment = this.membershipForm.value.payment
    this.addFormDataService.add(this.membershipForm.value)
      .subscribe({
        next: (result: any) => {
          console.log(result);
        },
        error: (err: any) => {
          console.log(err);
        },
        complete: () => {
          console.log('complete');
        }
      })
  }

  getSelectedPaymentMethod(): string {
    this.paymentMethod = this.membershipForm.value.paymentSelection
    return this.paymentMethod
  }

  getSelectedExecrcisesNames(): string[] {
    
    this.selectedExercises = this.membershipForm.value.exerciseSelection.map((selected, i) => {
      if (selected) {
        return this.exercises[i].name;
      } else {
        return '';
      }
    });

    return this.selectedExercises.filter(element => {
      if (element !== '') {
        return element;
      } else return ''
    });
  }
}
