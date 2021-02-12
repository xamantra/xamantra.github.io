(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    w2l6: function(e, n, t) {
      'use strict';
      t.r(n);
      const o = t('q1tI');
      const i = t.n(o);
      const a = t('Wbzz');
      const c = t('VeD8');
      const r = t('pQ8y');
      const l = t('Kvkj');
      const u = t('vOnD');
      const f = t('InJ6');
      function s() {
        const e = d(['font-size: 30px;']);
        return (
          (s = function() {
            return e;
          }),
          e
        );
      }
      function m() {
        const e = d(['font-size: 50px;']);
        return (
          (m = function() {
            return e;
          }),
          e
        );
      }
      function p() {
        const e = d(['font-size: 120px;']);
        return (
          (p = function() {
            return e;
          }),
          e
        );
      }
      function h() {
        const e = d(['font-size: 200px;']);
        return (
          (h = function() {
            return e;
          }),
          e
        );
      }
      function d(e, n) {
        return n || (n = e.slice(0)), (e.raw = n), e;
      }
      const b = f.h.colors;
      const g = f.h.fonts;
      const w = f.h.navDelay;
      const v = Object(u.c)(f.d).withConfig({
        displayName: 'sc-404__StyledMainContainer',
        componentId: 'bnxlhm-0',
      })(['', ';flex-direction:column;'], f.g.flexCenter);
      const x = u.c.h1.withConfig({ displayName: 'sc-404__StyledTitle', componentId: 'bnxlhm-1' })(
        ['color:', ';font-family:', ';font-size:12vw;line-height:1;', ' ', ';'],
        b.green,
        g.SFMono,
        f.f.bigDesktop(h()),
        f.f.phablet(p()),
      );
      const y = u.c.h2.withConfig({ displayName: 'sc-404__StyledSubtitle', componentId: 'bnxlhm-2' })(
        ['font-size:3vw;font-weight:400;', ';', ';'],
        f.f.bigDesktop(m()),
        f.f.phablet(s()),
      );
      const z = Object(u.c)(a.Link).withConfig({
        displayName: 'sc-404__StyledHomeButton',
        componentId: 'bnxlhm-3',
      })(['', ';margin-top:40px;'], f.g.bigButton);
      n.default = function(e) {
        const n = e.location;
        const t = Object(o.useState)(!1);
        const a = t[0];
        const u = t[1];
        return (
          Object(o.useEffect)(function() {
            const e = setTimeout(function() {
              return u(!0);
            }, w);
            return function() {
              return clearTimeout(e);
            };
          }, []),
          i.a.createElement(
            l.i,
            { location: n },
            i.a.createElement(
              c.a,
              { component: null },
              a &&
                i.a.createElement(
                  r.a,
                  { timeout: 500, classNames: 'fade' },
                  i.a.createElement(
                    v,
                    { className: 'fillHeight' },
                    i.a.createElement(x, null, '404'),
                    i.a.createElement(y, null, 'Page Not Found'),
                    i.a.createElement(z, { to: '/' }, 'Go Home'),
                  ),
                ),
            ),
          )
        );
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-404-js-4a9434baa28f6ab9ce43.js.map
