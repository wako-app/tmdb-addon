import { Component, Input } from '@angular/core';
import { BrowserService, Episode, Movie, Show } from '@wako-app/mobile-sdk';

@Component({
  selector: 'wk-open-button',
  templateUrl: './open-button.component.html',
  styleUrls: ['./open-button.component.scss']
})
export class OpenButtonComponent {
  @Input() movie: Movie;
  @Input() show: Show;
  @Input() episode: Episode;
  @Input() type: 'button' = 'button';

  constructor(private browserService: BrowserService) {

  }

  viewOnTMDB() {
    if (this.movie && this.movie.tmdbId) {
      this.browserService.open(`https://www.themoviedb.org/movie/${this.movie.tmdbId}`, true);
      return;
    }

    if (this.show && this.episode && this.episode.tmdbId) {
      this.browserService.open(`https://www.themoviedb.org/tv/${this.show.tmdbId}/season/${this.episode.traktSeasonNumber}/episode/${this.episode.traktNumber}`, true);
      return;
    }

    if ((this.show && this.episode && this.show.tmdbId) || (this.show && this.show.tmdbId)) {
      this.browserService.open(`https://www.themoviedb.org/tv/${this.show.tmdbId}`, true);
      return;
    }

  }
}
