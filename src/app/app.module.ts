import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormSearchComponent } from './shared/components/form-search/form-search.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FilmItemComponent } from './shared/components/film-item/film-item.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FilmDetailsComponent } from './shared/dialog/film-details/film-details.component';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
	declarations: [
		AppComponent,
		FormSearchComponent,
		FilmItemComponent,
  FilmDetailsComponent,

	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		FormsModule,
		MatDialogModule,
		MatIconModule,
		MatPaginatorModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
