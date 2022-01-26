import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Film, Omdb } from '../app/shared/model/film.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	error!: string;
	length!: string;
	films: Film[] = [];
	title = 'project-films';
	pageIndex!: string;

	getFilms(data: Omdb) {
		this.error = "";
		if (data.Response === "True") {
			this.films = data.Search;
			this.length = data.totalResults;
		} else {
			this.error = data.Error;
		}
	}

	getEventsData(event: PageEvent): void {
			this.pageIndex = event.pageIndex + 1 +"";
	}
}
