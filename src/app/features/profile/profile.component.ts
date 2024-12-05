import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],

})
export class ProfileComponent implements OnInit {

  form!: FormGroup;

  classes = ['Warrior', 'Mage', 'Ranger'];
  weapons = ['Sword', 'Bow', 'Staff'];

  constructor(private fb: FormBuilder) {

    this.initForm();

  }

  ngOnInit() {
  }

  initForm(){
    this.form = this.fb.group({
      class: [''],
      weapons: [''],
      combatPower: [''],
      dkp: [{ value: '100', disabled: true }], // DKP de solo lectura
    });
  }

  submit(){

  }

}
