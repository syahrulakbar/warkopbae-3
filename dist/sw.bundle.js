/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-8b6cdeda'], (function (workbox) { 'use strict';

  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "app.b71eb7537667bd5cefeb.hot-update.js",
    "revision": null
  }, {
    "url": "app.bundle.js",
    "revision": "e4f22c366d388b72fc96ef1ba739a769"
  }, {
    "url": "app.webmanifest",
    "revision": "b5a5580a727ec3ff6c4d622e2524cc96"
  }, {
    "url": "favicon.ico",
    "revision": "4e69b9a722a7246e420042d7298b06c7"
  }, {
    "url": "images/favicon/icon-144x144.png",
    "revision": "9385a302431fe20eac327125f16d06ad"
  }, {
    "url": "images/favicon/icon-192x192.png",
    "revision": "592fc858e64c34e12e00268cbc3c4c2e"
  }, {
    "url": "images/favicon/icon-48x48.png",
    "revision": "383b213a6b011a23ac37eb47447184df"
  }, {
    "url": "images/favicon/icon-512x512.png",
    "revision": "5f2dac35e75b09f80286d050644033be"
  }, {
    "url": "images/favicon/icon-72x72.png",
    "revision": "f58c676d7450cab6e0d29eba4aafddff"
  }, {
    "url": "images/favicon/icon-96x96.png",
    "revision": "c5667553a936a027f971fc328824821f"
  }, {
    "url": "images/favicon/icon-web.png",
    "revision": "4e69b9a722a7246e420042d7298b06c7"
  }, {
    "url": "images/heros/hero-image_4.jpg",
    "revision": "4ea98fe648a0b853ab379c928b5fd0bf"
  }, {
    "url": "images/spinner.gif",
    "revision": "20a4e68c22db2f38f6c7b030cfdf1731"
  }, {
    "url": "index.html",
    "revision": "ae6e2e7e481393a6e44f310c35477949"
  }, {
    "url": "runtime.b71eb7537667bd5cefeb.hot-update.js",
    "revision": null
  }, {
    "url": "runtime.b71eb7537667bd5cefeb.hot-update.json",
    "revision": null
  }, {
    "url": "runtime.bundle.js",
    "revision": "29cf5ad7d28df34076eadab9ac063838"
  }], {});

}));
//# sourceMappingURL=sw.bundle.js.map
