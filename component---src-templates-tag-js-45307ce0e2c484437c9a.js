(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    ccoC: function(e, t, a) {
      'use strict';
      a.r(t),
      a.d(t, 'pageQuery', function() {
        return E;
      });
      const n = a('q1tI');
      const l = a.n(n);
      const r = a('Wbzz');
      const i = a('N1om');
      const o = a.n(i);
      const c = a('Kvkj');
      const s = a('vOnD');
      const m = a('InJ6');
      const u = m.h.colors;
      const g = m.h.fontSizes;
      const p = Object(s.c)(m.d).withConfig({
        displayName: 'tag__StyledTagsContainer',
        componentId: 'sc-1b47em6-0',
      })(
        [
          'max-width:1000px;a{',
          ';}h1{',
          ';margin-bottom:50px;a{font-size:',
          ';font-weight:400;}}ul{li{font-size:24px;h2{font-size:inherit;margin:0;a{color:',
          ';}}.subtitle{color:',
          ';font-size:',
          ';.tag{margin-right:10px;}}}}',
        ],
        m.g.inlineLink,
        m.g.flexBetween,
        g.lg,
        u.lightSlate,
        u.slate,
        g.sm,
      );
      t.default = function(e) {
        const t = e.pageContext;
        const a = e.data;
        const n = e.location;
        const i = t.tag;
        const s = a.allMarkdownRemark.edges;
        return l.a.createElement(
          c.i,
          { location: n },
          l.a.createElement(
            p,
            null,
            l.a.createElement(
              'span',
              { className: 'breadcrumb' },
              l.a.createElement('span', { className: 'arrow' }, '←'),
              l.a.createElement(r.Link, { to: '/pensieve' }, 'All memories'),
            ),
            l.a.createElement(
              'h1',
              null,
              l.a.createElement('span', null, '#', i),
              l.a.createElement(
                'span',
                null,
                l.a.createElement(r.Link, { to: '/pensieve/tags' }, 'View all tags'),
              ),
            ),
            l.a.createElement(
              'ul',
              { className: 'fancy-list' },
              s.map(function(e) {
                const t = e.node.frontmatter;
                const a = t.title;
                const n = t.slug;
                const i = t.date;
                const c = t.tags;
                return l.a.createElement(
                  'li',
                  { key: n },
                  l.a.createElement('h2', null, l.a.createElement(r.Link, { to: n }, a)),
                  l.a.createElement(
                    'p',
                    { className: 'subtitle' },
                    l.a.createElement(
                      'time',
                      null,
                      new Date(i).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      }),
                    ),
                    l.a.createElement('span', null, ' — '),
                    c &&
                      c.length > 0 &&
                      c.map(function(e, t) {
                        return l.a.createElement(
                          r.Link,
                          { key: t, to: `/pensieve/tags/${  o()(e)  }/`, className: 'tag' },
                          '#',
                          e,
                        );
                      }),
                  ),
                );
              }),
            ),
          ),
        );
      };
      var E = '4215373522';
    },
  },
]);
//# sourceMappingURL=component---src-templates-tag-js-45307ce0e2c484437c9a.js.map
