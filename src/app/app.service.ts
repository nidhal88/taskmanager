import { Injectable } from '@angular/core';
import { Level, Person, } from './types';

@Injectable({
  providedIn: 'root'
})
export class AppService {
personObject: Person[]=[
  {nom:'Laroussi', prenom:'Nidhal', niv:'Niveau 1'},
  {nom:'Laroussi', prenom:'Nader', niv:'Niveau 2'},
  {nom:'Bel Haj Fraj', prenom:'Jassem', niv:'Niveau 1'},
  {nom:'Bel Haj Fraj', prenom:'Fares', niv:'Niveau 3'}
];

  constructor() { }
ajouterPerson(newperson: Person){
  this.personObject.push(newperson);


}
supprimerPerson(i: number): void{
  this.personObject.splice(i, 1);
}
filterPersonByNiv( niveau:Level) : Person[]{
  
return this.personObject.filter(person => person.niv === niveau)

}
}
