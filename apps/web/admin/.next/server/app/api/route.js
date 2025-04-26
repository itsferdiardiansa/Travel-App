;(() => {
  var e = {}
  ;(e.id = 843),
    (e.ids = [843]),
    (e.modules = {
      371: () => {},
      846: e => {
        'use strict'
        e.exports = require('next/dist/compiled/next-server/app-page.runtime.prod.js')
      },
      3033: e => {
        'use strict'
        e.exports = require('next/dist/server/app-render/work-unit-async-storage.external.js')
      },
      3295: e => {
        'use strict'
        e.exports = require('next/dist/server/app-render/after-task-async-storage.external.js')
      },
      4870: e => {
        'use strict'
        e.exports = require('next/dist/compiled/next-server/app-route.runtime.prod.js')
      },
      6101: (e, r, t) => {
        'use strict'
        t.r(r),
          t.d(r, {
            patchFetch: () => l,
            routeModule: () => u,
            serverHooks: () => x,
            workAsyncStorage: () => d,
            workUnitAsyncStorage: () => c,
          })
        var s = {}
        t.r(s), t.d(s, { POST: () => o })
        var a = t(3347),
          n = t(9132),
          i = t(2851),
          p = t(2194)
        function o() {
          return p.NextResponse.json({
            query: "SELECT * FROM users WHERE username = 'hijack'",
          })
        }
        let u = new a.AppRouteRouteModule({
            definition: {
              kind: n.RouteKind.APP_ROUTE,
              page: '/api/route',
              pathname: '/api',
              filename: 'route',
              bundlePath: 'app/api/route',
            },
            resolvedPagePath:
              '/Users/ferdiardiansa/Development/travel-app/apps/web/admin/src/app/api/route.ts',
            nextConfigOutput: '',
            userland: s,
          }),
          { workAsyncStorage: d, workUnitAsyncStorage: c, serverHooks: x } = u
        function l() {
          return (0, i.patchFetch)({
            workAsyncStorage: d,
            workUnitAsyncStorage: c,
          })
        }
      },
      7227: () => {},
      9294: e => {
        'use strict'
        e.exports = require('next/dist/server/app-render/work-async-storage.external.js')
      },
    })
  var r = require('../../webpack-runtime.js')
  r.C(e)
  var t = e => r((r.s = e)),
    s = r.X(0, [983, 664], () => t(6101))
  module.exports = s
})()
