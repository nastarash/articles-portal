import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { AddEditArticleComponent } from './add-edit-article/add-edit-article.component';
import { EditAticleComponent } from './edit-aticle/edit-aticle.component'

const routes: Routes = [
  { path: '', component: ArticleDetailsComponent },
  { path: 'add', component: AddEditArticleComponent },
  { path: 'edit', component: EditAticleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleDetailsRoutingModule { }
