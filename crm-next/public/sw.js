if (!self.define) {
  let e,
    s = {};
  const a = (a, c) => (
    (a = new URL(a + '.js', c).href),
    s[a] ||
      new Promise(s => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (c, n) => {
    const t =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (s[t]) return;
    let i = {};
    const f = e => a(e, t),
      d = { module: { uri: t }, exports: i, require: f };
    s[t] = Promise.all(c.map(e => d[e] || f(e))).then(e => (n(...e), i));
  };
}
define(['./workbox-4754cb34'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/app-build-manifest.json',
          revision: '2651c8c9a66222994576a6fdd6a6871e',
        },
        {
          url: '/_next/static/Az7G1Hwdk7goe1865CpOf/_buildManifest.js',
          revision: '78d8530131b47628fba8063c62cc2bd1',
        },
        {
          url: '/_next/static/Az7G1Hwdk7goe1865CpOf/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        {
          url: '/_next/static/chunks/118.d81dd4beb2ec066d.js',
          revision: 'd81dd4beb2ec066d',
        },
        {
          url: '/_next/static/chunks/118.d81dd4beb2ec066d.js.map',
          revision: 'd5d48f8d5b90d30c97b2f013ac32a995',
        },
        {
          url: '/_next/static/chunks/120-f5b5065601eb80d2.js',
          revision: 'Az7G1Hwdk7goe1865CpOf',
        },
        {
          url: '/_next/static/chunks/120-f5b5065601eb80d2.js.map',
          revision: '82e66c25052a052a78fcd3131833330b',
        },
        {
          url: '/_next/static/chunks/154.93e3b14d05687b32.js',
          revision: '93e3b14d05687b32',
        },
        {
          url: '/_next/static/chunks/154.93e3b14d05687b32.js.map',
          revision: '06f66671e9b5a2650ee6edd751ba3b92',
        },
        {
          url: '/_next/static/chunks/180-07f3845611166fd4.js',
          revision: 'Az7G1Hwdk7goe1865CpOf',
        },
        {
          url: '/_next/static/chunks/180-07f3845611166fd4.js.map',
          revision: '02830bd11dcafaffff8520da67e8bdc3',
        },
        {
          url: '/_next/static/chunks/238-70a1770b5ac25574.js',
          revision: 'Az7G1Hwdk7goe1865CpOf',
        },
        {
          url: '/_next/static/chunks/238-70a1770b5ac25574.js.map',
          revision: '3d06f59575683373f6e2fa3f483baa1a',
        },
        {
          url: '/_next/static/chunks/336-4a73443d63eb1654.js',
          revision: 'Az7G1Hwdk7goe1865CpOf',
        },
        {
          url: '/_next/static/chunks/336-4a73443d63eb1654.js.map',
          revision: '9882d9aa61c47e69fc4d21dbe3dd714b',
        },
        {
          url: '/_next/static/chunks/342-1d2db1cfae1ec8af.js',
          revision: 'Az7G1Hwdk7goe1865CpOf',
        },
        {
          url: '/_next/static/chunks/342-1d2db1cfae1ec8af.js.map',
          revision: '9edf8cfde16db81cdcc48b445b8663ae',
        },
        {
          url: '/_next/static/chunks/345.3e6a3316a20c72a9.js',
          revision: '3e6a3316a20c72a9',
        },
        {
          url: '/_next/static/chunks/345.3e6a3316a20c72a9.js.map',
          revision: 'b04f84f6a86212c91f14360d93858bd1',
        },
        {
          url: '/_next/static/chunks/497.9324e901506b7cc0.js',
          revision: '9324e901506b7cc0',
        },
        {
          url: '/_next/static/chunks/497.9324e901506b7cc0.js.map',
          revision: 'b3c114df3422b03106f653f70bb10706',
        },
        {
          url: '/_next/static/chunks/501-dbf20018709b0909.js',
          revision: 'Az7G1Hwdk7goe1865CpOf',
        },
        {
          url: '/_next/static/chunks/501-dbf20018709b0909.js.map',
          revision: 'bddec76b22e0568d7165c6139a6489e1',
        },
        {
          url: '/_next/static/chunks/553-0b81f7fe33b30b96.js',
          revision: 'Az7G1Hwdk7goe1865CpOf',
        },
        {
          url: '/_next/static/chunks/553-0b81f7fe33b30b96.js.map',
          revision: '9448c6c74180f8f7a7b324974a88e924',
        },
        {
          url: '/_next/static/chunks/713.398b7607f5c334f7.js',
          revision: '398b7607f5c334f7',
        },
        {
          url: '/_next/static/chunks/713.398b7607f5c334f7.js.map',
          revision: '972f4c636e5f52a9e136da7f7220ba5a',
        },
        {
          url: '/_next/static/chunks/720-8c32c943a77db557.js',
          revision: 'Az7G1Hwdk7goe1865CpOf',
        },
        {
          url: '/_next/static/chunks/720-8c32c943a77db557.js.map',
          revision: '2b31f4d52e8ca2d982febf92f695d64f',
        },
        {
          url: '/_next/static/chunks/768.04f5a9e9b7d1ca94.js',
          revision: '04f5a9e9b7d1ca94',
        },
        {
          url: '/_next/static/chunks/768.04f5a9e9b7d1ca94.js.map',
          revision: '0e3befb75d9ed97c2c0981390e5e034a',
        },
        {
          url: '/_next/static/chunks/838-9cd273fe6773463e.js',
          revision: 'Az7G1Hwdk7goe1865CpOf',
        },
        {
          url: '/_next/static/chunks/838-9cd273fe6773463e.js.map',
          revision: 'c9db1ee00d4d0bf410a10f6d76feee9d',
        },
        {
          url: '/_next/static/chunks/915-cb26c1875a106459.js',
          revision: 'Az7G1Hwdk7goe1865CpOf',
        },
        {
          url: '/_next/static/chunks/915-cb26c1875a106459.js.map',
          revision: '52f915d5656c350b07a9c4c4eab559d1',
        },
        {
          url: '/_next/static/chunks/app/(app)/info/page-1d6c7b90f91fc49a.js',
          revision: 'Az7G1Hwdk7goe1865CpOf',
        },
        {
          url: '/_next/static/chunks/app/(app)/info/page-1d6c7b90f91fc49a.js.map',
          revision: '1804f27be7032e290debbb98342962be',
        },
        {
          url: '/_next/static/chunks/app/(app)/layout-5297a75c9a2f0cee.js',
          revision: 'Az7G1Hwdk7goe1865CpOf',
        },
        {
          url: '/_next/static/chunks/app/(app)/layout-5297a75c9a2f0cee.js.map',
          revision: 'a6303d0ddd5c935fb36299ddf9cb9859',
        },
        {
          url: '/_next/static/chunks/app/(app)/leads/page-88b213bfdf527b08.js',
          revision: 'Az7G1Hwdk7goe1865CpOf',
        },
        {
          url: '/_next/static/chunks/app/(app)/leads/page-88b213bfdf527b08.js.map',
          revision: '909a65128f5031104f3510b9f88497c8',
        },
        {
          url: '/_next/static/chunks/app/_not-found/page-c9677fe88e8f1c75.js',
          revision: 'Az7G1Hwdk7goe1865CpOf',
        },
        {
          url: '/_next/static/chunks/app/_not-found/page-c9677fe88e8f1c75.js.map',
          revision: 'a679c809151d5513360e8b99d952ff5a',
        },
        {
          url: '/_next/static/chunks/app/global-error-704f7384c8481d97.js',
          revision: 'Az7G1Hwdk7goe1865CpOf',
        },
        {
          url: '/_next/static/chunks/app/global-error-704f7384c8481d97.js.map',
          revision: '14aacb087f962b96e5fac12c7489e864',
        },
        {
          url: '/_next/static/chunks/app/layout-d282c5b0537d31a0.js',
          revision: 'Az7G1Hwdk7goe1865CpOf',
        },
        {
          url: '/_next/static/chunks/app/layout-d282c5b0537d31a0.js.map',
          revision: '7008196d71c9a05492f8fde22a4f4856',
        },
        {
          url: '/_next/static/chunks/app/page-f7d27013866c7843.js',
          revision: 'Az7G1Hwdk7goe1865CpOf',
        },
        {
          url: '/_next/static/chunks/app/page-f7d27013866c7843.js.map',
          revision: '91bc0066d00ec81ae49daa40555ac1af',
        },
        {
          url: '/_next/static/chunks/fd9d1056-aabba81761018fcf.js',
          revision: 'Az7G1Hwdk7goe1865CpOf',
        },
        {
          url: '/_next/static/chunks/fd9d1056-aabba81761018fcf.js.map',
          revision: 'ba33def302300075d2c51e668e0760e3',
        },
        {
          url: '/_next/static/chunks/framework-d4fe9202d25e6211.js',
          revision: 'Az7G1Hwdk7goe1865CpOf',
        },
        {
          url: '/_next/static/chunks/framework-d4fe9202d25e6211.js.map',
          revision: '2aee8f12cbc9875cdffa69e9649ad5fc',
        },
        {
          url: '/_next/static/chunks/main-18ea154d98df2506.js',
          revision: 'Az7G1Hwdk7goe1865CpOf',
        },
        {
          url: '/_next/static/chunks/main-18ea154d98df2506.js.map',
          revision: '611824ab3942f868b97fdc1c2ef9312d',
        },
        {
          url: '/_next/static/chunks/main-app-7d1cb985c2f9b79b.js',
          revision: 'Az7G1Hwdk7goe1865CpOf',
        },
        {
          url: '/_next/static/chunks/main-app-7d1cb985c2f9b79b.js.map',
          revision: '6315a2cb81fd05850d9f730d758bd21d',
        },
        {
          url: '/_next/static/chunks/pages/_app-9b8a25424daa5ecc.js',
          revision: 'Az7G1Hwdk7goe1865CpOf',
        },
        {
          url: '/_next/static/chunks/pages/_app-9b8a25424daa5ecc.js.map',
          revision: '63bd4a36b8e67232743f1b85eda94360',
        },
        {
          url: '/_next/static/chunks/pages/_error-2312390b9d603b03.js',
          revision: 'Az7G1Hwdk7goe1865CpOf',
        },
        {
          url: '/_next/static/chunks/pages/_error-2312390b9d603b03.js.map',
          revision: '3aaffa24b47b79b0634903c567c201e6',
        },
        {
          url: '/_next/static/chunks/polyfills-42372ed130431b0a.js',
          revision: '846118c33b2c0e922d7b3a7676f81f6f',
        },
        {
          url: '/_next/static/chunks/webpack-3f85c4037b170aec.js',
          revision: 'Az7G1Hwdk7goe1865CpOf',
        },
        {
          url: '/_next/static/chunks/webpack-3f85c4037b170aec.js.map',
          revision: '8d52d1a311af612d7a271bce21f75c8e',
        },
        {
          url: '/_next/static/css/3eb48524cf15c0a0.css',
          revision: '3eb48524cf15c0a0',
        },
        {
          url: '/_next/static/css/3eb48524cf15c0a0.css.map',
          revision: '50a787dce3f6e90123fedfaa198b5acd',
        },
        {
          url: '/_next/static/media/26a46d62cd723877-s.woff2',
          revision: 'befd9c0fdfa3d8a645d5f95717ed6420',
        },
        {
          url: '/_next/static/media/55c55f0601d81cf3-s.woff2',
          revision: '43828e14271c77b87e3ed582dbff9f74',
        },
        {
          url: '/_next/static/media/581909926a08bbc8-s.woff2',
          revision: 'f0b86e7c24f455280b8df606b89af891',
        },
        {
          url: '/_next/static/media/8e9860b6e62d6359-s.woff2',
          revision: '01ba6c2a184b8cba08b0d57167664d75',
        },
        {
          url: '/_next/static/media/97e0cb1ae144a2a9-s.woff2',
          revision: 'e360c61c5bd8d90639fd4503c829c2dc',
        },
        {
          url: '/_next/static/media/df0a9ae256c0569c-s.woff2',
          revision: 'd54db44de5ccb18886ece2fda72bdfe0',
        },
        {
          url: '/_next/static/media/e4af272ccee01ff0-s.p.woff2',
          revision: '65850a373e258f1c897a2b3d75eb74de',
        },
        {
          url: '/images/crm-logo.jpg',
          revision: 'c24b5e7a707fbc058f6e386e713c3820',
        },
        {
          url: '/images/invicta-logo.webp',
          revision: '3f2df6c8806d6fdbece09df8ee30c87c',
        },
        { url: '/manifest.json', revision: '333771b3eb5cb701a6f86cc222c83ca0' },
        { url: '/next.svg', revision: '8e061864f388b47f33a1c3780831193e' },
        { url: '/vercel.svg', revision: '61c6b19abff40ea7acd577be818f3976' },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: a,
              state: c,
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      'GET'
    );
});
//# sourceMappingURL=sw.js.map
