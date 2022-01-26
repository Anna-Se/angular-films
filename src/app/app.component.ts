import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Film, Omdb } from '../app/shared/model/film.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	length!: string;
	films: Film[] = [];
	title = 'project-films';
	pageIndex!: string;

	getFilms(data: Omdb) {
		this.films = data.Search;
		this.length = data.totalResults;
	}

	getEventsData(event: PageEvent): void {
		console.log(event);
		this.pageIndex = event.pageIndex + 1 +"";
	}
}
