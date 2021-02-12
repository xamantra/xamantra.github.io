(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    SqBY: function(e, t, n) {
      'use strict';
      n.r(t),
      n.d(t, 'pageQuery', function() {
        return I;
      });
      const a = n('q1tI');
      const i = n.n(a);
      const l = n('Wbzz');
      const o = n('TJpk');
      const r = n('N1om');
      const s = n.n(r);
      const p = n('Kvkj');
      const c = n('g67X');
      const m = n('vOnD');
      const d = n('InJ6');
      function g() {
        const e = (function(e, t) {
          t || (t = e.slice(0));
          return (e.raw = t), e;
        })(['grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));']);
        return (
          (g = function() {
            return e;
          }),
          e
        );
      }
      const f = d.h.colors;
      const u = d.h.fontSizes;
      const h = d.h.fonts;
      const v = Object(m.c)(d.d).withConfig({
        displayName: 'pensieve__StyledMainContainer',
        componentId: 'jb5p05-0',
      })(
        [
          '& > header{text-align:center;margin-bottom:100px;a{&:hover,&:focus{cursor:url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'48\' viewport=\'0 0 100 100\' style=\'fill:black;font-size:24px;\'><text y=\'50%\'>⚡</text></svg>") 20 0,auto;}}}footer{',
          ';margin-top:20px;width:100%;}',
        ],
        d.g.flexBetween,
      );
      const w = m.c.div.withConfig({ displayName: 'pensieve__StyledGrid', componentId: 'jb5p05-1' })(
        [
          'margin-top:50px;.posts{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));grid-gap:15px;position:relative;',
          ';}',
        ],
        d.f.desktop(g()),
      );
      const x = m.c.div.withConfig({
        displayName: 'pensieve__StyledPostInner',
        componentId: 'jb5p05-2',
      })(
        [
          '',
          ';',
          ';flex-direction:column;align-items:flex-start;position:relative;padding:2rem 1.75rem;height:100%;border-radius:',
          ';transition:',
          ';background-color:',
          ';header,a{width:100%;}',
        ],
        d.g.boxShadow,
        d.g.flexBetween,
        d.h.borderRadius,
        d.h.transition,
        f.lightNavy,
      );
      const y = m.c.div.withConfig({ displayName: 'pensieve__StyledPost', componentId: 'jb5p05-3' })(
        [
          'transition:',
          ';cursor:default;&:hover,&:focus{outline:0;',
          '{transform:translateY(-5px);}}',
        ],
        d.h.transition,
        x,
      );
      const b = m.c.div.withConfig({
        displayName: 'pensieve__StyledPostHeader',
        componentId: 'jb5p05-4',
      })(['', ';margin-bottom:30px;'], d.g.flexBetween);
      const E = m.c.div.withConfig({ displayName: 'pensieve__StyledFolder', componentId: 'jb5p05-5' })(
        ['color:', ';svg{width:40px;height:40px;}'],
        f.green,
      );
      const _ = m.c.h5.withConfig({ displayName: 'pensieve__StyledPostName', componentId: 'jb5p05-6' })(
        ['margin:0 0 10px;font-size:', ';color:', ';'],
        u.xxl,
        f.lightestSlate,
      );
      const S = m.c.div.withConfig({
        displayName: 'pensieve__StyledPostDescription',
        componentId: 'jb5p05-7',
      })(['font-size:17px;color:', ';'], f.lightSlate);
      const k = m.c.span.withConfig({ displayName: 'pensieve__StyledDate', componentId: 'jb5p05-8' })(
        ['text-transform:uppercase;font-family:', ';font-size:', ';color:', ';'],
        h.SFMono,
        u.xs,
        f.lightSlate,
      );
      const N = m.c.ul.withConfig({ displayName: 'pensieve__StyledTags', componentId: 'jb5p05-9' })(
        [
          'display:flex;align-items:flex-end;flex-wrap:wrap;padding:0;margin:0;list-style:none;li{font-family:',
          ';font-size:',
          ';color:',
          ';line-height:1.75;margin-right:15px;&:last-of-type{margin-right:0;}a{',
          ';}}',
        ],
        h.SFMono,
        u.xs,
        f.green,
        d.g.inlineLink,
      );
      t.default = function(e) {
        const t = e.location;
        const n = e.data.allMarkdownRemark.edges;
        return i.a.createElement(
          p.i,
          { location: t },
          i.a.createElement(
            o.Helmet,
            null,
            i.a.createElement('title', null, 'Pensieve | Charlou Aredidon'),
            i.a.createElement('link', {
              rel: 'canonical',
              href: 'https://xamantra.github.io/pensieve',
            }),
          ),
          i.a.createElement(
            v,
            null,
            i.a.createElement(
              'header',
              null,
              i.a.createElement('h1', { className: 'big-title' }, 'Pensieve'),
              i.a.createElement(
                'p',
                { className: 'subtitle' },
                i.a.createElement(
                  'a',
                  {
                    href: 'https://www.wizardingworld.com/writing-by-jk-rowling/pensieve',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  },
                  'a collection of memories',
                ),
              ),
            ),
            i.a.createElement(
              w,
              null,
              i.a.createElement(
                'div',
                { className: 'posts' },
                n.length > 0 &&
                  n.map(function(e, t) {
                    const n = e.node.frontmatter;
                    const a = n.title;
                    const o = n.description;
                    const r = n.slug;
                    const p = n.date;
                    const m = n.tags;
                    const d = new Date(p);
                    return i.a.createElement(
                      y,
                      { key: t, tabIndex: '0' },
                      i.a.createElement(
                        x,
                        null,
                        i.a.createElement(
                          'header',
                          null,
                          i.a.createElement(
                            l.Link,
                            { to: r },
                            i.a.createElement(
                              b,
                              null,
                              i.a.createElement(E, null, i.a.createElement(c.p, null)),
                            ),
                            i.a.createElement(_, null, a),
                            i.a.createElement(S, null, o),
                          ),
                        ),
                        i.a.createElement(
                          'footer',
                          null,
                          i.a.createElement(k, null, `${  d.toLocaleDateString()}`),
                          i.a.createElement(
                            N,
                            null,
                            m.map(function(e, t) {
                              return i.a.createElement(
                                'li',
                                { key: t },
                                i.a.createElement(
                                  l.Link,
                                  { to: `/pensieve/tags/${  s()(e)  }/` },
                                  '#',
                                  e,
                                ),
                              );
                            }),
                          ),
                        ),
                      ),
                    );
                  }),
              ),
            ),
          ),
        );
      };
      var I = '3292513715';
    },
  },
]);
//# sourceMappingURL=component---src-pages-pensieve-index-js-949d77dc4a7bd19f84c5.js.map
