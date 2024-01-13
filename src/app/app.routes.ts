import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { PersonComponent } from './person/person.component';
import { AffectComponent } from './affect/affect.component';
import { AlltasksComponent } from './tasks/alltasks/alltasks.component';
import { TasksencoursComponent } from './tasks/tasksencours/tasksencours.component';
import { TasksafaireComponent } from './tasks/tasksafaire/tasksafaire.component';
import { TaskseffectComponent } from './tasks/taskseffect/taskseffect.component';
import { TaskdetailsComponent } from './taskdetails/taskdetails.component';

export const routes: Routes = [
    {path: 'person', component:PersonComponent},    
    {path: 'home', component:AppComponent},
    {path: 'affect', component:AffectComponent},
    {path: 'task', component:TaskComponent},
    {path: 'taskdetails', component:TaskdetailsComponent, children:[
        {path: 'alltasks', component:AlltasksComponent},
        {path: 'tasksencours', component:TasksencoursComponent},
        {path: 'tasksafaire', component:TasksafaireComponent},
        {path: 'taskseffect', component:TaskseffectComponent},

    ]}
];
