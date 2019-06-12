import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { EditKegComponent } from './edit-Keg/edit-Keg.component';
import { NewKegComponent } from './new-Keg/new-Keg.component';
import { KegListComponent } from './Keg-list/Keg-list.component';
import { AlcoholContentPipe } from './alcoholcontent.pipe';
import { RemainingPintsPipe } from './remainingpints.pipe';


@NgModule({
  declarations: [
    AppComponent,
    EditKegComponent,
    NewKegComponent,
    KegListComponent,
    AlcoholContentPipe,
    RemainingPintsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
