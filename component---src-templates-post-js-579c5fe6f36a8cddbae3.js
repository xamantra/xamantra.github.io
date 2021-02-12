(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    '6qSS': function(e, t, a) {
      'use strict';
      a.r(t),
      a.d(t, 'pageQuery', function() {
        return w;
      });
      const n = a('q1tI');
      const l = a.n(n);
      const r = a('Wbzz');
      const m = a('TJpk');
      const o = a.n(m);
      const i = a('N1om');
      const c = a.n(i);
      const s = a('Kvkj');
      const p = a('vOnD');
      const d = a('InJ6');
      const h = d.h.colors;
      const u = Object(p.c)(d.d).withConfig({
        displayName: 'post__StyledPostContainer',
        componentId: 'sc-8858gx-0',
      })(['max-width:1000px;']);
      const g = p.c.header.withConfig({
        displayName: 'post__StyledPostHeader',
        componentId: 'sc-8858gx-1',
      })(['margin-bottom:50px;.tag{margin-right:10px;}']);
      const E = p.c.div.withConfig({
        displayName: 'post__StyledPostContent',
        componentId: 'sc-8858gx-2',
      })(
        [
          'margin-bottom:100px;h1,h2,h3,h4,h5,h6{margin:2em 0 1em;}p{margin:1em 0;line-height:1.5;color:',
          ';}',
        ],
        h.lightSlate,
      );
      t.default = function(e) {
        const t = e.data;
        const a = e.location;
        const n = t.markdownRemark;
        const m = n.frontmatter;
        const i = n.html;
        const p = m.title;
        const d = m.date;
        const h = m.tags;
        return l.a.createElement(
          s.i,
          { location: a },
          l.a.createElement(
            o.a,
            null,
            l.a.createElement('title', null, p, ' | Charlou Aredidon'),
            l.a.createElement('link', {
              rel: 'canonical',
              href: 'https://xamantra.github.io/pensieve',
            }),
          ),
          l.a.createElement(
            u,
            null,
            l.a.createElement(
              'span',
              { className: 'breadcrumb' },
              l.a.createElement('span', { className: 'arrow' }, '←'),
              l.a.createElement(r.Link, { to: '/pensieve' }, 'All memories'),
            ),
            l.a.createElement(
              g,
              null,
              l.a.createElement('h1', { className: 'medium-title' }, p),
              l.a.createElement(
                'p',
                { className: 'subtitle' },
                l.a.createElement(
                  'time',
                  null,
                  new Date(d).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  }),
                ),
                l.a.createElement('span', null, ' — '),
                h &&
                  h.length > 0 &&
                  h.map(function(e, t) {
                    return l.a.createElement(
                      r.Link,
                      { key: t, to: `/pensieve/tags/${  c()(e)  }/`, className: 'tag' },
                      '#',
                      e,
                    );
                  }),
              ),
            ),
            l.a.createElement(E, { dangerouslySetInnerHTML: { __html: i } }),
          ),
        );
      };
      var w = '2562189066';
    },
  },
]);
//# sourceMappingURL=component---src-templates-post-js-579c5fe6f36a8cddbae3.js.map
