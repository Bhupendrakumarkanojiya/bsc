import { Component, OnInit } from '@angular/core';
// import { DataService } from '../data.service';
import { EmployeeService } from './employee.service';
import { IEmployee } from './IEmployee';
import { Observable } from 'rxjs';
import { FormGroup, FormArray, FormBuilder, Validators} from '@angular/forms'; 
import { element } from 'protractor';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  employeeForm: FormGroup;
  employeeData: Object;
  fullNameLength: 0;
  constructor(private fb: FormBuilder, private data: EmployeeService ) { }

  ngOnInit() {
    //this.data.getEmployee().subscribe(data => this.employeeData = data);
  
    //console.log('is anything here'+this.employeeData);

    var observable = Observable.create((observer:any)=>{
       observer.next('hey guys');
       observer.next('how are you');
       observer.complete();
       observer.next('how are you');
    });

    observable.subscribe((x:any)=>{
      console.log(x);
    });

    const promise = new Promise((promisedata:any)=>{
      promisedata('hey guys');
      promisedata('how are you');
      //promisedata.complete();
      promisedata('how are you');
    }).then(element=>console.log('Promis' + element));


    this.employeeForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      skills: this.fb.array([
        this.addSkillFormGroup()
      ])
    });
    this.employeeForm.get('fullName').valueChanges.subscribe((value:any) => {
     // this.fullNameLength = value.length;
    });
    // this.employeeForm = new FormGroup({
    //   fullName: new FormControl(),
    //   email: new FormControl(),
    //   skills: new FormGroup({
    //     skillName: new FormControl(),
    //     experienceInYear: new FormControl(),
    //     proficiency: new FormControl()
    //   })
    // });
    // this.data.getUsers().subscribe(data => this.users$ = data);

  }
  removeSkillButtonClick(skillGroupNumber:number):void {
   (<FormArray>this.employeeForm.get('skills')).removeAt(skillGroupNumber);
  }
  addSkillButtonClick(): void{
    (<FormArray>this.employeeForm.get('skills')).push(this.addSkillFormGroup());
  }
  onLoadDataClick() : void {
    // this.employeeForm.patchValue({
    //   fullName: 'Bhupendra Kanojiya',
    //   email: 'bhupendrkanojiya@gmail.com',
    //   skills:{
    //     skillName: 'PHP',
    //     experienceInYear: '11',
    //     proficiency: 'beginner'
    //   }
    // });

  }

  addSkillFormGroup(): FormGroup{
    return this.fb.group({
      skillName: ['', Validators.required],
      experienceInYear: ['', Validators.required],
      proficiency: ['', Validators.required]
    });
  }

  onSubmit():void {
    console.log(this.employeeForm.value);
  }

}
