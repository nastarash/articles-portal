import { Component, OnInit, Input, Output } from '@angular/core';
import { Article } from '../../models';
import { EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;
  @Output() articleSelected: EventEmitter<Article> = new EventEmitter();

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  public onReadMoreClick() {
    this.articleSelected.emit(this.article);
  }

  public onEditArticleClick() {
    this.articleSelected.emit(this.article)
    this.router.navigate(['article-details/edit']);
  }
}
