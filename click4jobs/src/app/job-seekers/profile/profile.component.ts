import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  firstFormGroup: FormGroup;
  FirstName: string;
  LastName: string;
  City: string;
  DOB: Date = null;
  Gender: string;

  secondFormGroup: FormGroup;
  Fresher: string;
  Experiance: string;

  thirdFormGroup: FormGroup;
  higherDegree: string;
  institute: string;
  passYear: string;
  marks: number;

  forthFormGroup: FormGroup;
  skill: string;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      'FirstName' : [null, Validators.required],
      'LastName' : [null, Validators.required],
      'DOB' : [null, Validators.required],
      'Gender': [null, Validators.required],
      'City': [null, Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      'Gender': ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      'higherDegree': ['', Validators.required],
      'institute': ['', Validators.required],
      'passYear': ['', Validators.required],
      'marks': ['', Validators.required]
    });
    this.forthFormGroup = this._formBuilder.group({
      'skill': ['', Validators.required]
    });
  }

  submit() {
    alert('Submitted Sucessfully');
  }
}
