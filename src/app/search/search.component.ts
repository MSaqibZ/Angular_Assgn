import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from '../model/question.model';
import { QuestionsService } from '../services/questions.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  animations: [
    trigger("searchResultTgr", [
      transition("void => *", [
        query(":enter", [
          style({ opacity: 0 }),
          stagger("200ms", [
            style({ opacity: 0, transform: "translateX(-50px)" }),
            animate("500ms ease-out")
          ])
        ],
          { optional: true })
      ])
    ])
  ]
})
export class SearchComponent implements OnInit {

  searchResults: Question[] = [];

  constructor(private questionService: QuestionsService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  searchQuestion(searchForm: NgForm) {
    this.searchResults = [];
    if (searchForm.value.question) {
      this.questionService.searchQuestions(searchForm.value.question).subscribe(
        questions => {
          this.searchResults = questions;
        }
      );
    }
  }

  showQuestionDetails(questionId: number) {
    this.router.navigate(['question', questionId]);
  }

}
