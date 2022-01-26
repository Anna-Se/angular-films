import { Component } from '@angular/core';
import { Film } from '../app/shared/model/film.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	films: Film[] = [];
	title = 'project-films';

	getFilms(films: Film[]) {
		this.films = films;
	}
}
