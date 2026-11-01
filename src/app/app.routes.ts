import { Routes } from '@angular/router';
import { Home } from './home/home';
import { SingleSurvey } from './single-survey/single-survey';
import { CreateSurvey } from './create-survey/create-survey';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'survey', component: SingleSurvey },
    { path: 'create-survey', component: CreateSurvey },
];
