import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie, Omdb } from '../model/film.model';

const API_URL = "http://www.omdbapi.com/?";
const API_KEY = "e5d789fc";

@Injectable({
	providedIn: 'root'
})
export class OmdbService {

	constructor(private httpClient: HttpClient) { }

	getFilms(name: string, type: string, page: string): Observable<Omdb> {
		const queryParams = {
			apiKey: API_KEY,
			s: name,
			type: type,
			page: page,
		};
		return this.httpClient.get<Omdb>(API_URL + new URLSearchParams(queryParams));
	}

	public getMovies(name: string, type: string, page: string): Observable<any> {
		return this.httpClient.get<Omdb>(`${API_URL}?apikey=${API_KEY}&s=${name}&t=${type}&page=${page}`)
	}

	public getMovieById(id: string): Observable<any> {
		const queryParams = {
			apiKey: API_KEY,
			i: id,
		};
		return this.httpClient.get<Omdb>(API_URL + new URLSearchParams(queryParams));
		// return this.httpClient.get<any>(`${API_URL}?apikey=${API_KEY}&i=${id}`)
	}
}
