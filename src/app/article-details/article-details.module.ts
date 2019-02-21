import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleDetailsRoutingModule } from './article-details-routing.module';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { AddEditArticleComponent } from './add-edit-article/add-edit-article.component';
import { EditAticleComponent } from './edit-aticle/edit-aticle.component';

@NgModule({
  declarations: [ArticleDetailsComponent, AddEditArticleComponent, EditAticleComponent],
  imports: [
    CommonModule,
    ArticleDetailsRoutingModule
  ]
})
export class ArticleDetailsModule { }
