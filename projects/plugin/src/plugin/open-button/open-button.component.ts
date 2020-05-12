import { Component, Input } from '@angular/core';
import { BrowserService, Episode, Movie, Show, WakoSettingsService } from '@wako-app/mobile-sdk';
import { logEvent } from '../services/tools';

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

  constructor() {}

  private async getAppLang() {
    let lang = (await WakoSettingsService.getByCategory<{ lang: string }>('main')).lang;

    if (!lang) {
      lang = 'en';
    }

    return lang;
  }

  async viewOnTMDB() {
    const lang = await this.getAppLang();

    if (this.movie && this.movie.ids.tmdb) {
      BrowserService.open(`https://www.themoviedb.org/movie/${this.movie.ids.tmdb}?language=${lang}`, true);
      logEvent('addon_tmdb', { type: 'movie' });

      return;
    }

    if (this.show && this.episode && this.episode.ids.tmdb) {
      BrowserService.open(
        // tslint:disable-next-line: max-line-length
        `https://www.themoviedb.org/tv/${this.show.ids.tmdb}/season/${this.episode.seasonNumber}/episode/${this.episode.number}?language=${lang}`,
        true
      );
      logEvent('addon_tmdb', { type: 'episode' });
      return;
    }

    if ((this.show && this.episode && this.show.ids.tmdb) || (this.show && this.show.ids.tmdb)) {
      BrowserService.open(`https://www.themoviedb.org/tv/${this.show.ids.tmdb}?language=${lang}`, true);
      logEvent('addon_tmdb', { type: 'tv-show' });
      return;
    }
  }
}
