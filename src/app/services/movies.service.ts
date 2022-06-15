import {
  MovieDto,
  MoviesCredits,
  MoviesImages,
  MoviesVideos,
  MoviesVideosDto,
} from './../models/movie';
import { Movie } from 'src/app/models/movie';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, switchMap } from 'rxjs';
import { GenresDto } from '../models/genre';
@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  baseUrl: string = 'https://api.themoviedb.org/3/';
  apiKey: string = '0ae815c5a91de13c6c935007fa5576b3';
  constructor(private http: HttpClient) {}

  getMovies(type: string = 'upcoming', count: number = 12) {
    return this.http
      .get<MovieDto>(`${this.baseUrl}movie/${type}?api_key=${this.apiKey}`)
      .pipe(
        switchMap((res) => {
          return of(res.results.slice(0, count));
        })
      );
  }

  getMoviesGenres() {
    return this.http
      .get<GenresDto>(`${this.baseUrl}genre/movie/list?api_key=${this.apiKey}`)
      .pipe(
        switchMap((res) => {
          return of(res.genres);
        })
      );
  }

  getMoviesByGenre(genreId: string, pageNumber: number) {
    return this.http
      .get<MovieDto>(
        `${this.baseUrl}discover/movie?with_genres=${genreId}&page=${pageNumber}&api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }

  getMovie(id: number) {
    return this.http.get<Movie>(
      `${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`
    );
  }

  getMoviesVideos(id: number) {
    return this.http
      .get<MoviesVideosDto>(
        `${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }

  getMoviesImage(id: number) {
    return this.http.get<MoviesImages>(
      `${this.baseUrl}movie/${id}/images?api_key=${this.apiKey}`
    );
  }

  getMoviesCredits(id: number) {
    return this.http.get<MoviesCredits>(
      `${this.baseUrl}movie/${id}/credits?api_key=${this.apiKey}`
    );
  }

  getMovieSimilar(id: string) {
    return this.http
      .get<MovieDto>(
        `${this.baseUrl}movie/${id}/similar?api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results.slice(0, 8));
        })
      );
  }
  /**
   *
   * search about interceptor for inject token in header
   *
   * CRUD
   * create  => post
   * read    => get
   * update  => put
   * delete  => delete
   */
  searchMovies(page: number, searchValue?: string) {
    const uri = searchValue ? 'search/movie' : 'movie/popular';
    return this.http
      .get<MovieDto>(
        `${this.baseUrl}${uri}?page=${page}&query=${searchValue}&api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }
}
