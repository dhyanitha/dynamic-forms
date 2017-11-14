import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserViewModel } from './user.model';
import { FormValidatorService } from '../lib/services/formvalidator.service';

@Component({
  selector: 'dynamic-forms',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Form1Component implements OnInit {
  userForm: FormGroup;
  saveResult: boolean;
  userId = 0;
  user: UserViewModel;
  constructor(private formService: FormValidatorService) { }

  ngOnInit() {
    this.userForm = this.formService.build(UserViewModel);
  }

}
