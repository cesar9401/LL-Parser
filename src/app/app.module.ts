import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { UploadComponent } from './upload/upload.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    UploadComponent
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
