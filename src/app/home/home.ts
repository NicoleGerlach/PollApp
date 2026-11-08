import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SurveyService } from '../services/surveyService';
import { Surveys } from '../surveys/surveys';

@Component({
  imports: [RouterLink, Surveys],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {

  surveyService = inject(SurveyService);

  ngOnInit() {
    this.surveyService.getAllSurveys()
  }
}
