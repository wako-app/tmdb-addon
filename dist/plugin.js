!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t(
        require('ng.common'),
        require('tslib'),
        require('ng.forms'),
        require('ngx-translate.core'),
        require('ionic.storage'),
        require('wako-app.mobile-sdk'),
        require('ng.core'),
        require('ionic.angular')
      ))
    : 'function' == typeof define && define.amd
    ? define([
        'ng.common',
        'tslib',
        'ng.forms',
        'ngx-translate.core',
        'ionic.storage',
        'wako-app.mobile-sdk',
        'ng.core',
        'ionic.angular'
      ], t)
    : 'object' == typeof exports
    ? (exports.plugin = t(
        require('ng.common'),
        require('tslib'),
        require('ng.forms'),
        require('ngx-translate.core'),
        require('ionic.storage'),
        require('wako-app.mobile-sdk'),
        require('ng.core'),
        require('ionic.angular')
      ))
    : (e.plugin = t(
        e['ng.common'],
        e.tslib,
        e['ng.forms'],
        e['ngx-translate.core'],
        e['ionic.storage'],
        e['wako-app.mobile-sdk'],
        e['ng.core'],
        e['ionic.angular']
      ));
})('undefined' != typeof self ? self : this, function (e, t, n, o, i, r, s, u) {
  return (function (e) {
    var t = {};
    function n(o) {
      if (t[o]) return t[o].exports;
      var i = (t[o] = { i: o, l: !1, exports: {} });
      return e[o].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function (e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
      }),
      (n.r = function (e) {
        'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if ((n.r(o), Object.defineProperty(o, 'default', { enumerable: !0, value: e }), 2 & t && 'string' != typeof e))
          for (var i in e)
            n.d(
              o,
              i,
              function (t) {
                return e[t];
              }.bind(null, i)
            );
        return o;
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return n.d(t, 'a', t), t;
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ''),
      n((n.s = 0))
    );
  })({
    0: function (e, t, n) {
      e.exports = n('zUnb');
    },
    '0S4P': function (t, n) {
      t.exports = e;
    },
    '17wl': function (e, n) {
      e.exports = t;
    },
    '3xDq': function (e, t) {
      e.exports = n;
    },
    TGDj: function (e, t) {
      e.exports = o;
    },
    Zr0N: function (e, t) {
      e.exports = i;
    },
    doF0: function (e, t) {
      e.exports = r;
    },
    vOrQ: function (e, t) {
      e.exports = s;
    },
    z1lQ: function (e, t) {
      e.exports = u;
    },
    zUnb: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'PluginModule', function () {
          return x;
        });
      var o = n('17wl'),
        i = n('0S4P'),
        r = n('z1lQ'),
        s = n('doF0'),
        u = n('TGDj');
      function c() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        Object(s.wakoLog)('plugin.tmdb', e);
      }
      function a(e, t) {
        'FirebasePlugin' in window && window.FirebasePlugin.logEvent(e, t);
      }
      var p = n('vOrQ'),
        l = (function (e) {
          function t(t) {
            var n = e.call(this) || this;
            return (n.translate = t), n;
          }
          return (
            Object(o.__extends)(t, e),
            (t.prototype.initialize = function () {
              c('plugin initialized');
            }),
            (t.prototype.afterInstall = function () {
              c('plugin installed');
            }),
            (t.prototype.afterUpdate = function () {
              c('plugin updated');
            }),
            (t.prototype.setTranslation = function (e, t) {
              this.translate.setDefaultLang(e), this.translate.use(e), this.translate.setTranslation(e, t);
            }),
            (t.prototype.customAction = function (e, t) {}),
            (t.ɵfac = function (e) {
              return new (e || t)(p['\u0275\u0275inject'](u.TranslateService));
            }),
            (t.ɵprov = p['\u0275\u0275defineInjectable']({ token: t, factory: t.ɵfac })),
            t
          );
        })(s.PluginBaseService),
        d = n('Zr0N'),
        f = (function () {
          function e(e) {
            (this.storage = e), (this.type = 'button');
          }
          return (
            (e.prototype.getAppLang = function () {
              return Object(o.__awaiter)(this, void 0, void 0, function () {
                var e;
                return Object(o.__generator)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [4, this.storage.get('app_lang')];
                    case 1:
                      return (e = t.sent()) || (e = 'en'), [2, e];
                  }
                });
              });
            }),
            (e.prototype.viewOnTMDB = function () {
              return Object(o.__awaiter)(this, void 0, void 0, function () {
                var e;
                return Object(o.__generator)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [4, this.getAppLang()];
                    case 1:
                      return (
                        (e = t.sent()),
                        this.movie && this.movie.tmdbId
                          ? (s.BrowserService.open('https://www.themoviedb.org/movie/' + this.movie.tmdbId + '?language=' + e, !0),
                            a('addon_tmdb', { type: 'movie' }),
                            [2])
                          : this.show && this.episode && this.episode.tmdbId
                          ? (s.BrowserService.open(
                              'https://www.themoviedb.org/tv/' +
                                this.show.tmdbId +
                                '/season/' +
                                this.episode.traktSeasonNumber +
                                '/episode/' +
                                this.episode.traktNumber +
                                '?language=' +
                                e,
                              !0
                            ),
                            a('addon_tmdb', { type: 'episode' }),
                            [2])
                          : (this.show && this.episode && this.show.tmdbId) || (this.show && this.show.tmdbId)
                          ? (s.BrowserService.open('https://www.themoviedb.org/tv/' + this.show.tmdbId + '?language=' + e, !0),
                            a('addon_tmdb', { type: 'tv-show' }),
                            [2])
                          : [2]
                      );
                  }
                });
              });
            }),
            (e.ɵfac = function (t) {
              return new (t || e)(p['\u0275\u0275directiveInject'](d.Storage));
            }),
            (e.ɵcmp = p['\u0275\u0275defineComponent']({
              type: e,
              selectors: [['wk-open-button']],
              inputs: { movie: 'movie', show: 'show', episode: 'episode', type: 'type' },
              decls: 5,
              vars: 3,
              consts: [
                ['expand', 'block', 'color', 'tmdb', 3, 'click'],
                ['name', 'film', 'slot', 'start']
              ],
              template: function (e, t) {
                1 & e &&
                  (p['\u0275\u0275elementStart'](0, 'ion-button', 0),
                  p['\u0275\u0275listener']('click', function () {
                    return t.viewOnTMDB();
                  }),
                  p['\u0275\u0275element'](1, 'ion-icon', 1),
                  p['\u0275\u0275elementStart'](2, 'ion-text'),
                  p['\u0275\u0275text'](3),
                  p['\u0275\u0275pipe'](4, 'translate'),
                  p['\u0275\u0275elementEnd'](),
                  p['\u0275\u0275elementEnd']()),
                  2 & e && (p['\u0275\u0275advance'](3), p['\u0275\u0275textInterpolate'](p['\u0275\u0275pipeBind1'](4, 1, 'viewOnTMDB')));
              },
              directives: [r.IonButton, r.IonIcon, r.IonText],
              pipes: [u.TranslatePipe],
              styles: ['ion-button[_ngcontent-%COMP%]{background-color:#00d276!important;border-radius:5px}']
            })),
            e
          );
        })(),
        m = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(o.__extends)(t, e),
            (t.prototype.setMovie = function (e) {
              this.movie = e;
            }),
            (t.ɵfac = function (e) {
              return h(e || t);
            }),
            (t.ɵcmp = p['\u0275\u0275defineComponent']({
              type: t,
              selectors: [['ng-component']],
              features: [p['\u0275\u0275InheritDefinitionFeature']],
              decls: 1,
              vars: 1,
              consts: [[3, 'movie']],
              template: function (e, t) {
                1 & e && p['\u0275\u0275element'](0, 'wk-open-button', 0), 2 & e && p['\u0275\u0275property']('movie', t.movie);
              },
              directives: [f],
              styles: ['']
            })),
            t
          );
        })(s.MovieDetailBaseComponent),
        h = p['\u0275\u0275getInheritedFactory'](m),
        g = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(o.__extends)(t, e),
            (t.prototype.setShowEpisode = function (e, t) {
              (this.show = e), (this.episode = t);
            }),
            (t.ɵfac = function (e) {
              return b(e || t);
            }),
            (t.ɵcmp = p['\u0275\u0275defineComponent']({
              type: t,
              selectors: [['ng-component']],
              features: [p['\u0275\u0275InheritDefinitionFeature']],
              decls: 1,
              vars: 2,
              consts: [[3, 'show', 'episode']],
              template: function (e, t) {
                1 & e && p['\u0275\u0275element'](0, 'wk-open-button', 0),
                  2 & e && p['\u0275\u0275property']('show', t.show)('episode', t.episode);
              },
              directives: [f],
              styles: ['']
            })),
            t
          );
        })(s.EpisodeDetailBaseComponent),
        b = p['\u0275\u0275getInheritedFactory'](g),
        v = n('3xDq'),
        w = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(o.__extends)(t, e),
            (t.prototype.setShow = function (e) {
              this.show = e;
            }),
            (t.ɵfac = function (e) {
              return y(e || t);
            }),
            (t.ɵcmp = p['\u0275\u0275defineComponent']({
              type: t,
              selectors: [['ng-component']],
              features: [p['\u0275\u0275InheritDefinitionFeature']],
              decls: 1,
              vars: 1,
              consts: [[3, 'show']],
              template: function (e, t) {
                1 & e && p['\u0275\u0275element'](0, 'wk-open-button', 0), 2 & e && p['\u0275\u0275property']('show', t.show);
              },
              directives: [f],
              styles: ['']
            })),
            t
          );
        })(s.ShowDetailBaseComponent),
        y = p['\u0275\u0275getInheritedFactory'](w),
        x = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(o.__extends)(t, e),
            (t.pluginService = l),
            (t.movieComponent = m),
            (t.episodeComponent = g),
            (t.showComponent = w),
            (t.ɵmod = p['\u0275\u0275defineNgModule']({ type: t })),
            (t.ɵinj = p['\u0275\u0275defineInjector']({
              factory: function (e) {
                return _(e || t);
              },
              providers: [l],
              imports: [[i.CommonModule, v.FormsModule, r.IonicModule.forRoot(), u.TranslateModule.forRoot()]]
            })),
            t
          );
        })(s.PluginBaseModule),
        _ = p['\u0275\u0275getInheritedFactory'](x);
      t.default = x;
    }
  });
});
