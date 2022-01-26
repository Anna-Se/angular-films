import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Movie } from '../../model/film.model';
import { OmdbService } from '../../service/omdb.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss']
})
export class FilmDetailsComponent implements OnInit {
  isLoading!: boolean;
  movie!: Movie;


  constructor(public dialogRef: MatDialogRef<FilmDetailsComponent>,
              @Inject(MAT_DIALOG_DATA) public id: string,
              private omdbService: OmdbService,
				      public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getMovieById(this.id);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public getMovieById(id: string): void {
		this.isLoading = true;
		this.omdbService.getMovieById(id).subscribe((movie: Movie) => {
      this.isLoading = false;
      this.movie = movie;
			console.log(movie);
	
		})
	}

}
