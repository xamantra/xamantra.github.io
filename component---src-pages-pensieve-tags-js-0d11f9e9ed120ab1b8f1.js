(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    '+W3S': function(e, t, a) {
      'use strict';
      a.r(t),
      a.d(t, 'pageQuery', function() {
        return E;
      });
      const n = a('q1tI');
      const l = a.n(n);
      const o = a('TJpk');
      const i = a('Wbzz');
      const r = a('N1om');
      const c = a.n(r);
      const s = a('Kvkj');
      const m = a('vOnD');
      const u = a('InJ6');
      const p = u.h.colors;
      const d = u.h.fontSizes;
      const f = u.h.fonts;
      const g = Object(m.c)(u.d).withConfig({
        displayName: 'tags__StyledTagsContainer',
        componentId: 'sc-3n25qs-0',
      })(
        [
          'max-width:1000px;h1{margin-bottom:50px;}ul{color:',
          ';li{font-size:',
          ';a{',
          ';color:',
          ';.count{color:',
          ';font-family:',
          ';font-size:',
          ';}}}}',
        ],
        p.lightSlate,
        d.xxl,
        u.g.inlineLink,
        p.lightSlate,
        p.slate,
        f.SFMono,
        d.md,
      );
      t.default = function(e) {
        const t = e.data;
        const a = t.allMarkdownRemark.group;
        const n = t.site.siteMetadata.title;
        const r = e.location;
        return l.a.createElement(
          s.i,
          { location: r },
          l.a.createElement(o.Helmet, { title: n }),
          l.a.createElement(
            g,
            null,
            l.a.createElement(
              'span',
              { className: 'breadcrumb' },
              l.a.createElement('span', { className: 'arrow' }, '←'),
              l.a.createElement(i.Link, { to: '/pensieve' }, 'All memories'),
            ),
            l.a.createElement('h1', null, 'Tags'),
            l.a.createElement(
              'ul',
              { className: 'fancy-list' },
              a.map(function(e) {
                return l.a.createElement(
                  'li',
                  { key: e.fieldValue },
                  l.a.createElement(
                    i.Link,
                    { to: `/pensieve/tags/${  c()(e.fieldValue)  }/` },
                    e.fieldValue,
                    ' ',
                    l.a.createElement('span', { className: 'count' }, '(', e.totalCount, ')'),
                  ),
                );
              }),
            ),
          ),
        );
      };
      var E = '689409133';
    },
  },
]);
//# sourceMappingURL=component---src-pages-pensieve-tags-js-0d11f9e9ed120ab1b8f1.js.map
