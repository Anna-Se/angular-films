import { Component, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { OmdbService } from '../../service/omdb.service'
import { Omdb, Film } from '../../model/film.model';
import { EventEmitter } from '@angular/core';

@Component({
	selector: 'app-form-search',
	templateUrl: './form-search.component.html',
	styleUrls: ['./form-search.component.scss']
})
export class FormSearchComponent implements OnInit {

	data: Omdb | undefined;
	name: string = "";
	type: string = "movie";

	@Input() pageIndex!: string;
	@Output() onFilmSearch: EventEmitter<Omdb> = new EventEmitter();

	constructor(private omdbService: OmdbService) { }

	ngOnChanges(changes: SimpleChanges) {
		if (this.pageIndex !== undefined) {
			this.getFilms(this.pageIndex);
		}
		console.log(this.pageIndex)
	}
	
	ngOnInit(): void {
	}

	public getFilms(pageIndex: string): void {
		this.omdbService.getFilms(this.name, this.type, pageIndex).subscribe((data: Omdb) => {
			this.data = data;
			this.onFilmSearch.emit(this.data);
			console.log(data)
		})
	}

}
