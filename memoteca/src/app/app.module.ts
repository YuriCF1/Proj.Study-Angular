import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateThoughtComponent } from './components/thoughts/create-thought/create-thought.component';
import { FormsModule } from '@angular/forms';
import { ListToughtsComponent } from './components/thoughts/list-toughts/list-toughts.component';
import { ThoughtComponent } from './components/thoughts/thought/thought.component';
import { HttpClientModule } from '@angular/common/http';
import { DeleteToughtComponent } from './components/thoughts/delete-thought/delete-thought.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreateThoughtComponent,
    ListToughtsComponent,
    ThoughtComponent,
    DeleteToughtComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Preciso importar o FormsModule abaixo para que o ngModule funciona no input
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
