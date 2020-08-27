import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QouteComponent } from './qoute/qoute.component';
import { QouteDetailComponent } from './qoute-detail/qoute-detail.component';
import { QouteFormComponent } from './qoute-form/qoute-form.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { LikeComponent } from './like/like.component';

@NgModule({
  declarations: [
    AppComponent,
    QouteComponent,
    QouteDetailComponent,
    QouteFormComponent,
    StrikethroughDirective,
    DateCountPipe,
    LikeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
