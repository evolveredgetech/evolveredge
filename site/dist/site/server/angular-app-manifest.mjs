
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5586, hash: '9cadc1363410589a1d90d50a4106bb8e23560c3181fa78c08f955aa3d30131f1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1327, hash: 'efb2841cc73979aafe0e2fe408f081d285db7dc8107f94c027d72ad2f187cdaa', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 35569, hash: '5df833289be9456398be5f53a21a51dab5c918f554d12cbdc9b2c5ee427ef145', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-SJQAVYPF.css': {size: 232834, hash: '6VRnZgh2tA0', text: () => import('./assets-chunks/styles-SJQAVYPF_css.mjs').then(m => m.default)}
  },
};
