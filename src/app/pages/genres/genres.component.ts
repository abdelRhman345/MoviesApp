import { Genres } from './../../models/genre';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { TvshowsService } from 'src/app/services/tvs.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss'],
})
export class GenresComponent implements OnInit {
  genres: Genres[] = [];
  genresTvShow: Genres[] = [];
  constructor(
    private moviesService: MoviesService,
    private tvShowsService: TvshowsService
  ) {}

  ngOnInit(): void {
    this.moviesService.getMoviesGenres().subscribe((genresData) => {
      this.genres = genresData;
    });
    this.tvShowsService.getTvShowsGenres().subscribe((genresData) => {
      this.genresTvShow = genresData;
    });
  }
}
