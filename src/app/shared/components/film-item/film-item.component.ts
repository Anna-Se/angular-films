import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FilmDetailsComponent } from '../../dialog/film-details/film-details.component';
import { Film, Movie } from '../../model/film.model';
import { OmdbService } from '../../service/omdb.service';

@Component({
	selector: 'app-film-item',
	templateUrl: './film-item.component.html',
	styleUrls: ['./film-item.component.scss']
})
export class FilmItemComponent implements OnInit {

	@Input() film!: Film;
	isDisabled!: boolean;

	constructor(private omdbService: OmdbService,
				public dialog: MatDialog) { }

	ngOnInit(): void {
	}

	public getMovieById(id: string): void {
		this.dialog.open(FilmDetailsComponent , {
			data: id,
			disableClose: true,
		})
	}

}
