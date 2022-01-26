import { Component, OnInit, Output } from '@angular/core';
import { OmdbService } from '../../service/omdb.service'
import { Omdb, Film } from '../../model/film.model';
import { EventEmitter } from '@angular/core';

@Component({
	selector: 'app-form-search',
	templateUrl: './form-search.component.html',
	styleUrls: ['./form-search.component.scss']
})
export class FormSearchComponent implements OnInit {

	films: Film[] = [];
	name: string = "";
	type: string = "movie";

	@Output() onFilmSearch: EventEmitter<Film[]> = new EventEmitter();

	constructor(private omdbService: OmdbService) { }

	ngOnInit(): void {
	}

	getFilms(): void {
		this.omdbService.getFilms(this.name, this.type, "1").subscribe((films: Omdb) => {
			this.films = films.Search;
			this.onFilmSearch.emit(this.films);
		})
	}

}
