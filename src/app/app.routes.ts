import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { PersonComponent } from './person/person.component';
import { AffectComponent } from './affect/affect.component';

export const routes: Routes = [
    {path: 'person', component:PersonComponent},
    {path: 'task', component:TaskComponent},
    {path: 'home', component:AppComponent},
    {path: 'affect', component:AffectComponent}
];
