import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { ArticleComponent } from './components/article/article.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { routes } from './routes';

import { WpAuthorService, WpArticleService, WpCommentService } from './services';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { NewestPreviewComponent } from './components/front-page/newest-preview/newest-preview.component';
import { PreviewComponent } from './components/front-page/preview/preview.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    ArticleComponent,
    AboutComponent,
    ContactComponent,
    TopNavComponent,
    NewestPreviewComponent,
    PreviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    routes
  ],
  providers: [WpAuthorService, WpArticleService, WpCommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
