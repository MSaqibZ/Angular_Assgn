import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Question } from '../model/question.model';
import { QuestionsService } from '../services/questions.service';

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.css']
})
export class QuestionDetailsComponent implements OnInit {

  question!: Question;

  constructor(private activatedRoute: ActivatedRoute, private questionService: QuestionsService) { }

  ngOnInit(): void {
    /* this.activatedRoute.params.subscribe(
      (params: Params) => {
        const questionId = +params["id"];
        this.questionService.getQuestionDetails(questionId).subscribe(
          questionResp => {
            this.question = questionResp;
          }
        );
      }
    ); */

    this.activatedRoute.params.pipe(switchMap(
      (params: Params) => {
        return this.questionService.getQuestionDetails(+params["id"]);
      }
    )).subscribe(
      questionResp => {
        this.question = questionResp;
      }
    );
  }

}
