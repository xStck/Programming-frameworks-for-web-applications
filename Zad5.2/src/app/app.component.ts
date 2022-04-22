import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Member } from './member.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [DatePipe]
})
export class AppComponent implements OnInit {
  membershiptypes = ['Student', 'Pracownik', 'Gość'];
  exercises: any = [
    { name: 'Piłka nożna', id: 1, selected: true },
    { name: 'Siatkówka', id: 2, selected: false },
    { name: 'Koszykówka', id: 3, selected: false },
    { name: 'Tenis stołowy', id: 4, selected: false }
  ]
  currentDate = new Date();
  member = new Member('', '', new Date(), '', []);
  selectedExercises: string[];
  submitted = false;
  membershipForm: FormGroup;
  constructor(private datePipe: DatePipe) { }
  ngOnInit() {
    this.membershipForm = new FormGroup({
      memberName: new FormControl(null),
      email: new FormControl(null),
      mdate: new FormControl(this.datePipe.transform(this.currentDate, 'yyyy-MM-dd')),
      membershipType: new FormControl('Silver'),
      exerciseSelection: this.createExercises(this.exercises)
    });
  }
  createExercises(exerciseList): FormArray {
    const arr = exerciseList.map(exercise => {
      return new FormControl(exercise.selected)
    });
    return new FormArray(arr);
  }
  onSubmit() {
    this.submitted = true;
    this.member.name = this.membershipForm.value.memberName;
    this.member.mail = this.membershipForm.value.email;
    this.member.membershipDate = this.membershipForm.value.mdate;
    this.member.membershipType = this.membershipForm.value.membershipType;
    this.member.exercises = this.getSelectedExecrcisesNames();
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
