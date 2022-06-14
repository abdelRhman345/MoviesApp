import { take } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { TvShows } from 'src/app/models/tvs';
import { Component, OnInit } from '@angular/core';
import { TvshowsService } from '../../services/tvs.service';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.scss'],
})
export class TvshowsComponent implements OnInit {
  tvShows: TvShows[] = [];
  genreId: string | null = null;

  constructor(
    private tvShowsService: TvshowsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe(({ genreId }) => {
      if (genreId) {
        this.genreId = genreId;
        this.getTvShowsByGenre(genreId, 1);
      } else {
        this.getPagedTvShows(1);
      }
    });
  }

  getPagedTvShows(page: number) {
    this.tvShowsService.searchTvShows(page).subscribe((tvShows) => {
      this.tvShows = tvShows;
    });
  }

  getTvShowsByGenre(genreId: string, pageNumber: number) {
    this.tvShowsService
      .getTvShowsByGenre(genreId, pageNumber)
      .subscribe((tvShows) => {
        this.tvShows = tvShows;
      });
  }

  paginate(event: any) {
    const pageNumber = event.page + 1;

    if (this.genreId) {
      this.getTvShowsByGenre(this.genreId, pageNumber);
    } else {
      this.getPagedTvShows(pageNumber);
    }
  }
}
