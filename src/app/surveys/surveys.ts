import { Component, inject } from '@angular/core';
import { SurveyService } from '../services/surveyService';

@Component({
  imports: [],
  selector: 'app-surveys',
  styleUrl: './surveys.scss',
  templateUrl: './surveys.html',
})
export class Surveys {
surveyService = inject(SurveyService)

surveylist = this.surveyService.surveyList
}
