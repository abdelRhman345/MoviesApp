import { TvShowsCredits } from './../../models/tvs';
import { IMAGES_SIZES } from './../../constants/images-sizes';
import { ActivatedRoute } from '@angular/router';
import { TvshowsService } from 'src/app/services/tvs.service';
import { TvShows, TvShowsImages, TvShowsVideos } from 'src/app/models/tvs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.scss'],
})
export class TvshowComponent implements OnInit {
  tvShow: TvShows | null = null;
  tvShowVideos: TvShowsVideos[] = [];
  tvShowImages: TvShowsImages | null = null;
  tvShowsCredits: TvShowsCredits | null = null;

  imagesSizes = IMAGES_SIZES;

  constructor(
    private tvShowsService: TvshowsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.pipe().subscribe(({ id }) => {
      this.getTvShow(id);
      this.getTvShowsVideos(id);
      this.getTvShowsImage(id);
      this.getTvShowsCredits(id);
    });
  }
  getTvShow(id: number) {
    this.tvShowsService.getTvShow(id).subscribe((tvShowData) => {
      this.tvShow = tvShowData;
    });
  }

  getTvShowsVideos(id: number) {
    this.tvShowsService.getTvShowsVideos(id).subscribe((tvShowVideosData) => {
      this.tvShowVideos = tvShowVideosData;
    });
  }

  getTvShowsImage(id: number) {
    this.tvShowsService.getTvShowsImage(id).subscribe((tvShowImagesData) => {
      this.tvShowImages = tvShowImagesData;
    });
  }

  getTvShowsCredits(id: number) {
    this.tvShowsService
      .getTvShowsCredits(id)
      .subscribe((tvShowsCreditsData) => {
        this.tvShowsCredits = tvShowsCreditsData;
      });
  }
}
