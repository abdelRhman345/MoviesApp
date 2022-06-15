import {
  TvShows,
  TvShowsCredits,
  TvShowsImages,
  TvShowsVideosDto,
} from 'src/app/models/tvs';
import { switchMap, of } from 'rxjs';
import { TvShowsDto } from './../models/tvs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenresDto } from '../models/genre';

@Injectable({
  providedIn: 'root',
})
export class TvshowsService {
  baseUrl: string = 'https://api.themoviedb.org/3/';
  apiKey: string = '0ae815c5a91de13c6c935007fa5576b3';
  constructor(private http: HttpClient) {}

  getTvShows(type: string = 'popular', count: number = 12) {
    return this.http
      .get<TvShowsDto>(`${this.baseUrl}tv/${type}?api_key=${this.apiKey}`)
      .pipe(
        switchMap((res) => {
          return of(res.results.slice(0, count));
        })
      );
  }

  getTvShowsGenres() {
    return this.http
      .get<GenresDto>(`${this.baseUrl}genre/tv/list?api_key=${this.apiKey}`)
      .pipe(
        switchMap((res) => {
          return of(res.genres);
        })
      );
  }

  getTvShow(id: number) {
    return this.http.get<TvShows>(
      `${this.baseUrl}/tv/${id}?api_key=${this.apiKey}`
    );
  }

  getTvShowsVideos(id: number) {
    return this.http
      .get<TvShowsVideosDto>(
        `${this.baseUrl}tv/${id}/videos?api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }

  getTvShowsImage(id: number) {
    return this.http.get<TvShowsImages>(
      `${this.baseUrl}tv/${id}/images?api_key=${this.apiKey}`
    );
  }

  getTvShowsCredits(id: number) {
    return this.http.get<TvShowsCredits>(
      `${this.baseUrl}tv/${id}/credits?api_key=${this.apiKey}`
    );
  }

  getTvShowsByGenre(genreId: string, pageNumber: number) {
    return this.http
      .get<TvShowsDto>(
        `${this.baseUrl}discover/tv?with_genres=${genreId}&page=${pageNumber}&api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }

  getTvShowsSimilar(id: string) {
    return this.http
      .get<TvShowsDto>(
        `${this.baseUrl}/tv/${id}/similar?api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results.slice(0, 12));
        })
      );
  }

  searchTvShows(page: number, searchValue?: string) {
    const uri = searchValue ? 'search/tv' : 'tv/popular';
    return this.http
      .get<TvShowsDto>(
        `${this.baseUrl}${uri}?page=${page}&query=${searchValue}&api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }
}
