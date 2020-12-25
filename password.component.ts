import { preserveWhitespacesDefault } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  @Input() bookForm:FormGroup;
  password=false;
  passwordstring='';
  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }


  initForm(){
    let adminPass="";
   this.bookForm=new FormGroup({
   'price':new FormControl(adminPass),
   });
   
}
press(event){
  this.passwordstring+=event.key;
  if(this.passwordstring==='123456'){
    console.log(this.passwordstring);
    this.password=true;
  }
}

}
