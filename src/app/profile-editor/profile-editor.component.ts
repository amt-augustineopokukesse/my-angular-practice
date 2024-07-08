import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-editor.component.html',
  styleUrl: './profile-editor.component.css'
})
export class ProfileEditorComponent {
  profileForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
    aliases: this.formBuilder.array([this.formBuilder.control('')]),
  });
  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }
  constructor(private formBuilder: FormBuilder) {}
  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street',
      },
    });
  }
  addAlias() {
    this.aliases.push(this.formBuilder.control(''));
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}
