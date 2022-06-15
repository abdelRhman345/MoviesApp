import { MoviesImages, MoviesCredits } from './../../models/movie';
import { IMAGES_SIZES } from './../../constants/images-sizes';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie, MoviesVideos } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  movie: Movie | null = null;
  movieVideos: MoviesVideos[] = [];
  movieImages: MoviesImages | null = null;
  movieCredits: MoviesCredits | null = null;
  similarMovies: Movie[] = [];

  imagesSizes = IMAGES_SIZES;
  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.pipe().subscribe(({ id }) => {
      this.getMovie(id);
      this.getMoviesVideos(id);
      this.getMoviesImages(id);
      this.getMoviesCredits(id);
      this.getMovieSimilar(id);
    });
  }

  getMovie(id: number) {
    this.moviesService.getMovie(id).subscribe((movieData) => {
      this.movie = movieData;
    });
  }

  getMoviesVideos(id: number) {
    this.moviesService.getMoviesVideos(id).subscribe((movieVideosData) => {
      this.movieVideos = movieVideosData;
    });
  }

  getMoviesImages(id: number) {
    this.moviesService.getMoviesImage(id).subscribe((movieImagesData) => {
      this.movieImages = movieImagesData;
    });
  }

  getMoviesCredits(id: number) {
    this.moviesService.getMoviesCredits(id).subscribe((movieCreditsData) => {
      this.movieCredits = movieCreditsData;
    });
  }

  getMovieSimilar(id: string) {
    this.moviesService.getMovieSimilar(id).subscribe((movieSimilarData) => {
      this.similarMovies = movieSimilarData;
    });
  }
}
