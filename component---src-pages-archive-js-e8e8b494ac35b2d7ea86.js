(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    nRki: function(e, t, a) {
      'use strict';
      a.r(t),
      a.d(t, 'pageQuery', function() {
        return y;
      });
      const n = a('q1tI');
      const r = a.n(n);
      const l = a('TJpk');
      const o = a('nLfd');
      const i = a('20nU');
      const c = a('Kvkj');
      const m = a('g67X');
      const s = a('vOnD');
      const u = a('InJ6');
      function f() {
        const e = b(['\n        font-size: ', ';\n      ']);
        return (
          (f = function() {
            return e;
          }),
          e
        );
      }
      function d() {
        const e = b(['\n      padding: 10px;\n    ']);
        return (
          (d = function() {
            return e;
          }),
          e
        );
      }
      function p() {
        const e = b(['\n      display: none;\n    ']);
        return (
          (p = function() {
            return e;
          }),
          e
        );
      }
      function h() {
        const e = b(['\n    margin: 100px -10px;\n  ']);
        return (
          (h = function() {
            return e;
          }),
          e
        );
      }
      function b(e, t) {
        return t || (t = e.slice(0)), (e.raw = t), e;
      }
      const g = u.h.colors;
      const E = u.h.fonts;
      const v = u.h.fontSizes;
      const x = Object(s.c)(u.d).withConfig({
        displayName: 'archive__StyledMainContainer',
        componentId: 'sc-2cxdc9-0',
      })(['']);
      const k = s.c.div.withConfig({
        displayName: 'archive__StyledTableContainer',
        componentId: 'sc-2cxdc9-1',
      })(['margin:100px -20px;', ';'], u.f.tablet(h()));
      const w = s.c.table.withConfig({
        displayName: 'archive__StyledTable',
        componentId: 'sc-2cxdc9-2',
      })(
        [
          'width:100%;border-collapse:collapse;.hide-on-mobile{',
          ';}tbody tr{transition:',
          ';&:hover,&:focus{background-color:',
          ';}}th,td{cursor:default;line-height:1.5;padding:10px 20px;',
          ';}th{text-align:left;}td{&.year{width:10%;',
          ';}&.title{padding-top:15px;color:',
          ';font-size:',
          ';font-weight:700;}&.company{width:15%;padding-top:15px;font-size:',
          ';}&.tech{font-size:',
          ';font-family:',
          ';.separator{margin:0 5px;}span{display:inline-block;}}&.links{span{display:flex;align-items:center;a{',
          ';}a + a{margin-left:10px;}svg{width:20px;height:20px;}}}}',
        ],
        u.f.tablet(p()),
        u.h.transition,
        g.lightNavy,
        u.f.tablet(d()),
        u.f.tablet(f(), v.sm),
        g.lightestSlate,
        v.xl,
        v.lg,
        v.xs,
        E.SFMono,
        u.g.flexCenter,
      );
      t.default = function(e) {
        const t = e.location;
        const a = e.data.allMarkdownRemark.edges;
        const s = Object(n.useRef)(null);
        const u = Object(n.useRef)(null);
        const f = Object(n.useRef)([]);
        return (
          Object(n.useEffect)(function() {
            o.a.reveal(s.current, Object(i.srConfig)()),
            o.a.reveal(u.current, Object(i.srConfig)()),
            f.current.forEach(function(e, t) {
              return o.a.reveal(e, Object(i.srConfig)(10 * t));
            });
          }, []),
          r.a.createElement(
            c.i,
            { location: t },
            r.a.createElement(
              l.Helmet,
              null,
              r.a.createElement('title', null, 'Archive | Charlou Aredidon'),
              r.a.createElement('link', {
                rel: 'canonical',
                href: 'https://xamantra.github.io/archive',
              }),
            ),
            r.a.createElement(
              x,
              null,
              r.a.createElement(
                'header',
                { ref: s },
                r.a.createElement('h1', { className: 'big-title' }, 'Archive'),
                r.a.createElement(
                  'p',
                  { className: 'subtitle' },
                  'A big list of things I’ve worked on',
                ),
              ),
              r.a.createElement(
                k,
                { ref: u },
                r.a.createElement(
                  w,
                  null,
                  r.a.createElement(
                    'thead',
                    null,
                    r.a.createElement(
                      'tr',
                      null,
                      r.a.createElement('th', null, 'Year'),
                      r.a.createElement('th', null, 'Title'),
                      r.a.createElement('th', { className: 'hide-on-mobile' }, 'Made at'),
                      r.a.createElement('th', { className: 'hide-on-mobile' }, 'Built with'),
                      r.a.createElement('th', null, 'Link'),
                    ),
                  ),
                  r.a.createElement(
                    'tbody',
                    null,
                    a.length > 0 &&
                      a.map(function(e, t) {
                        const a = e.node.frontmatter;
                        const n = a.date;
                        const l = a.github;
                        const o = a.external;
                        const i = a.ios;
                        const c = a.android;
                        const s = a.title;
                        const u = a.tech;
                        const d = a.company;
                        return r.a.createElement(
                          'tr',
                          {
                            key: t,
                            ref: function(e) {
                              return (f.current[t] = e);
                            },
                          },
                          r.a.createElement(
                            'td',
                            { className: 'overline year' },
                            `${  new Date(n).getFullYear()}`,
                          ),
                          r.a.createElement('td', { className: 'title' }, s),
                          r.a.createElement(
                            'td',
                            { className: 'company hide-on-mobile' },
                            d
                              ? r.a.createElement('span', null, d)
                              : r.a.createElement('span', null, '—'),
                          ),
                          r.a.createElement(
                            'td',
                            { className: 'tech hide-on-mobile' },
                            u.length > 0 &&
                              u.map(function(e, t) {
                                return r.a.createElement(
                                  'span',
                                  { key: t },
                                  e,
                                  '',
                                  t !== u.length - 1 &&
                                    r.a.createElement('span', { className: 'separator' }, '·'),
                                );
                              }),
                          ),
                          r.a.createElement(
                            'td',
                            { className: 'links' },
                            r.a.createElement(
                              'span',
                              null,
                              o &&
                                r.a.createElement(
                                  'a',
                                  {
                                    href: o,
                                    target: '_blank',
                                    rel: 'nofollow noopener noreferrer',
                                    'aria-label': 'External Link',
                                  },
                                  r.a.createElement(m.a, { name: 'External' }),
                                ),
                              l &&
                                r.a.createElement(
                                  'a',
                                  {
                                    href: l,
                                    target: '_blank',
                                    rel: 'nofollow noopener noreferrer',
                                    'aria-label': 'GitHub Link',
                                  },
                                  r.a.createElement(m.a, { name: 'GitHub' }),
                                ),
                              i &&
                                r.a.createElement(
                                  'a',
                                  {
                                    href: i,
                                    target: '_blank',
                                    rel: 'nofollow noopener noreferrer',
                                    'aria-label': 'Apple App Store Link',
                                  },
                                  r.a.createElement(m.a, { name: 'AppStore' }),
                                ),
                              c &&
                                r.a.createElement(
                                  'a',
                                  {
                                    href: c,
                                    target: '_blank',
                                    rel: 'nofollow noopener noreferrer',
                                    'aria-label': 'Google Play Store Link',
                                  },
                                  r.a.createElement(m.a, { name: 'PlayStore' }),
                                ),
                            ),
                          ),
                        );
                      }),
                  ),
                ),
              ),
            ),
          )
        );
      };
      var y = '2366268503';
    },
  },
]);
//# sourceMappingURL=component---src-pages-archive-js-e8e8b494ac35b2d7ea86.js.map
