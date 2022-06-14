import { TvshowsService } from './../../services/tvs.service';
import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { TvShows } from 'src/app/models/tvs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  popularMovies: Movie[] = [];
  upcomingMovies: Movie[] = [];
  topRateMovies: Movie[] = [];
  popularTvShows: TvShows[] = [];
  topRatedTvShows: TvShows[] = [];

  constructor(
    private moviesServices: MoviesService,
    private tvShowsService: TvshowsService
  ) {}

  ngOnInit(): void {
    this.moviesServices.getMovies('popular').subscribe((movies) => {
      this.popularMovies = movies;
    });
    this.moviesServices.getMovies('upcoming').subscribe((movies) => {
      this.upcomingMovies = movies;
    });
    this.moviesServices.getMovies('top_rated').subscribe((movies) => {
      this.topRateMovies = movies;
    });
    this.tvShowsService.getTvShows('popular').subscribe((tvshows) => {
      this.popularTvShows = tvshows;
    });
    this.tvShowsService.getTvShows('top_rated').subscribe((tvshows) => {
      this.topRatedTvShows = tvshows;
    });
  }
}
