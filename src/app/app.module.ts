import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ComponentFeaturesModule } from './component-features/component-features.module';
import { CompTOVisitComponent } from './app/components/comp-tovisit/comp-tovisit.component';


@NgModule({
  declarations: [
    AppComponent,
    CompTOVisitComponent
  ],
  imports: [
    BrowserModule,
    ComponentFeaturesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
