import { Component, Input } from '@angular/core';
import { BrowserService, Episode, Movie, Show } from '@wako-app/mobile-sdk';
import { logEvent } from '../services/tools';
import { Storage } from '@ionic/storage';

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

  constructor(private storage: Storage) {}

  private async getAppLang() {
    let lang = await this.storage.get('app_lang');

    if (!lang) {
      lang = 'en';
    }

    return lang;
  }

  async viewOnTMDB() {
    const lang = await this.getAppLang();

    if (this.movie && this.movie.tmdbId) {
      BrowserService.open(`https://www.themoviedb.org/movie/${this.movie.tmdbId}?language=${lang}`, true);
      logEvent('addon_tmdb', { type: 'movie' });

      return;
    }

    if (this.show && this.episode && this.episode.tmdbId) {
      BrowserService.open(
        // tslint:disable-next-line: max-line-length
        `https://www.themoviedb.org/tv/${this.show.tmdbId}/season/${this.episode.traktSeasonNumber}/episode/${this.episode.traktNumber}?language=${lang}`,
        true
      );
      logEvent('addon_tmdb', { type: 'episode' });
      return;
    }

    if ((this.show && this.episode && this.show.tmdbId) || (this.show && this.show.tmdbId)) {
      BrowserService.open(`https://www.themoviedb.org/tv/${this.show.tmdbId}?language=${lang}`, true);
      logEvent('addon_tmdb', { type: 'tv-show' });
      return;
    }
  }
}
