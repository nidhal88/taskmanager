import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { Person } from '../types';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss'
})
export class PersonComponent {
  personForm!: FormGroup;
  errormsg!:  boolean;

  formbuilder = inject(FormBuilder);

  myService = inject(AppService);

  ngOnInit(){
    this.personForm = this.formbuilder.group({
      nom: ['', Validators.required],
  
      prenom: ['', Validators.required],
    
      niv: ['', Validators.required],
    })
  }

  addPerson(): void {
    if(this.personForm.invalid){
      this.errormsg=true;
      return;
      
    }
    else{
      this.errormsg=false;
    }
    const newPerson: Person = {
      nom: this.personForm.value.nom,
      prenom: this.personForm.value.prenom,
      niv: this.personForm.value.niv,
      };
      this.myService.ajouterPerson(newPerson);
    this.personForm.reset();
  
  
    
    
    
  }
  remove(i: number): void {
    this.myService.supprimerPerson(i);
  }
}
