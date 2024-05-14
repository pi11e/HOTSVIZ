// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"500lX":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "47f7df15cc97f864";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"a0lq5":[function(require,module,exports) {
var _json2Csv = require("json-2-csv");
var _fs = require("fs");
var jsonData = JSON.parse('[\r\n    {\r\n        "gameId": "53350714",\r\n        "gameDate": "05/09/2024 3:49:57 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Braxis Holdout",\r\n        "hero": "Fenix",\r\n        "winner": "True",\r\n        "talents": [\r\n            "Advanced Targeting",\r\n            "Target Acquired",\r\n            "Divert Power: Weapons",\r\n            "Planet Cracker",\r\n            "Auxiliary Shields",\r\n            "Arsenal Overcharge"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53072261",\r\n        "gameDate": "04/19/2024 10:53:27 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Braxis Holdout",\r\n        "hero": "Fenix",\r\n        "winner": "False",\r\n        "talents": [\r\n            "Mobile Offense",\r\n            "Target Acquired",\r\n            "Warp Warfare",\r\n            "Planet Cracker",\r\n            "Adanium Shell",\r\n            "Offensive Cadence",\r\n            "Singularity Charge"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53057053",\r\n        "gameDate": "04/18/2024 8:44:37 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Volskaya Foundry",\r\n        "hero": "Fenix",\r\n        "winner": "True",\r\n        "talents": [\r\n            "Mobile Offense",\r\n            "Target Acquired",\r\n            "Warp Warfare",\r\n            "Planet Cracker",\r\n            "Adanium Shell",\r\n            "Photonic Weaponry",\r\n            "Unconquered Spirit"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53192191",\r\n        "gameDate": "04/27/2024 9:40:36 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Battlefield of Eternity",\r\n        "hero": "Blaze",\r\n        "winner": "True",\r\n        "talents": [\r\n            "Adrenaline Stimpack",\r\n            "Incinerator Gauntlets",\r\n            "Fuel Leak",\r\n            "Bunker Drop",\r\n            "Collision Course",\r\n            "Thermal Protection"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53059110",\r\n        "gameDate": "04/18/2024 10:26:34 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Dragon Shire",\r\n        "hero": "Blaze",\r\n        "winner": "True",\r\n        "talents": [\r\n            "Adrenaline Stimpack",\r\n            "Incinerator Gauntlets",\r\n            "Suppressive Fire",\r\n            "Bunker Drop",\r\n            "Collision Course",\r\n            "Thermal Protection",\r\n            "Fortified Bunker"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53331400",\r\n        "gameDate": "05/07/2024 11:10:16 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Braxis Holdout",\r\n        "hero": "Zul\'jin",\r\n        "winner": "False",\r\n        "talents": [\r\n            "Boneslicer",\r\n            "Voodoo Shuffle",\r\n            "Vicious Assault",\r\n            "Taz\'dingo!",\r\n            "Ensnare",\r\n            "No Mercy!",\r\n            "Amani Resilience"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53217697",\r\n        "gameDate": "04/30/2024 11:54:00 am",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Volskaya Foundry",\r\n        "hero": "Zul\'jin",\r\n        "winner": "False",\r\n        "talents": [\r\n            "Recklessness",\r\n            "Amani Hide",\r\n            "Arcanite Axes",\r\n            "Taz\'dingo!",\r\n            "Eye of Zul\'jin",\r\n            "Let the Killing Begin",\r\n            "Amani Resilience"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53072996",\r\n        "gameDate": "04/20/2024 12:59:01 am",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Alterac Pass",\r\n        "hero": "Zul\'jin",\r\n        "winner": "False",\r\n        "talents": [\r\n            "Recklessness",\r\n            "Amani Hide",\r\n            "Arcanite Axes",\r\n            "Taz\'dingo!",\r\n            "Eye of Zul\'jin",\r\n            "Let the Killing Begin"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53164206",\r\n        "gameDate": "04/26/2024 2:55:42 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Braxis Holdout",\r\n        "hero": "Tyrael",\r\n        "winner": "False",\r\n        "talents": [\r\n            "Ardent Restoration",\r\n            "Divine Vigor",\r\n            "Purge Evil",\r\n            "Judgment",\r\n            "Sword of Justice",\r\n            "Burning Halo",\r\n            "Seal of El\'Druin"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53317942",\r\n        "gameDate": "05/07/2024 12:00:47 am",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Towers of Doom",\r\n        "hero": "Tracer",\r\n        "winner": "True",\r\n        "talents": [\r\n            "One-Two Punch",\r\n            "Pulse Generator",\r\n            "Locked and Loaded",\r\n            "Pulse Rounds",\r\n            "Jumper",\r\n            "Ricochet"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53193125",\r\n        "gameDate": "04/27/2024 11:29:04 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Tomb of the Spider Queen",\r\n        "hero": "Tracer",\r\n        "winner": "True",\r\n        "talents": [\r\n            "Tracer Rounds",\r\n            "Pulse Generator",\r\n            "Locked and Loaded",\r\n            "Pulse Rounds",\r\n            "Jumper",\r\n            "Ricochet",\r\n            "Get Stuffed!"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53159723",\r\n        "gameDate": "04/26/2024 11:00:44 am",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Tomb of the Spider Queen",\r\n        "hero": "Tracer",\r\n        "winner": "False",\r\n        "talents": [\r\n            "One-Two Punch",\r\n            "Pulse Generator",\r\n            "Locked and Loaded",\r\n            "Quantum Spike",\r\n            "Jumper",\r\n            "Heavy Handed"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53141902",\r\n        "gameDate": "04/25/2024 1:04:27 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Tomb of the Spider Queen",\r\n        "hero": "Tracer",\r\n        "winner": "True",\r\n        "talents": [\r\n            "Tracer Rounds",\r\n            "Pulse Generator",\r\n            "Locked and Loaded",\r\n            "Sticky Bomb",\r\n            "Jumper",\r\n            "Ricochet",\r\n            "Get Stuffed!"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53112421",\r\n        "gameDate": "04/22/2024 10:18:28 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Towers of Doom",\r\n        "hero": "Tracer",\r\n        "winner": "False",\r\n        "talents": [\r\n            "One-Two Punch",\r\n            "Pulse Generator",\r\n            "Locked and Loaded",\r\n            "Pulse Rounds",\r\n            "Jumper",\r\n            "Ricochet"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53061855",\r\n        "gameDate": "04/19/2024 12:56:54 am",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Towers of Doom",\r\n        "hero": "Tracer",\r\n        "winner": "True",\r\n        "talents": [\r\n            "Tracer Rounds",\r\n            "Pulse Generator",\r\n            "Locked and Loaded",\r\n            "Pulse Rounds",\r\n            "Jumper",\r\n            "Ricochet",\r\n            "Get Stuffed!"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53174279",\r\n        "gameDate": "04/26/2024 11:53:03 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Cursed Hollow",\r\n        "hero": "Sgt. Hammer",\r\n        "winner": "False",\r\n        "talents": [\r\n            "Advanced Artillery",\r\n            "Regenerative Bio-Steel",\r\n            "Hover Siege Mode",\r\n            "Blunt Force Gun",\r\n            "Hyper-Cooling Engines",\r\n            "Mechanical Know-how",\r\n            "Ultra Capacitors"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53098307",\r\n        "gameDate": "04/21/2024 10:43:57 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Braxis Holdout",\r\n        "hero": "Sgt. Hammer",\r\n        "winner": "True",\r\n        "talents": [\r\n            "Advanced Artillery",\r\n            "Regenerative Bio-Steel",\r\n            "Hover Siege Mode",\r\n            "Napalm Strike",\r\n            "Hyper-Cooling Engines",\r\n            "Mechanical Know-how"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53073134",\r\n        "gameDate": "04/20/2024 1:31:30 am",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Towers of Doom",\r\n        "hero": "Sgt. Hammer",\r\n        "winner": "False",\r\n        "talents": [\r\n            "Advanced Artillery",\r\n            "Regenerative Bio-Steel",\r\n            "Graduating Range",\r\n            "Blunt Force Gun",\r\n            "Hyper-Cooling Engines",\r\n            "Mechanical Know-how"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53072832",\r\n        "gameDate": "04/20/2024 12:35:22 am",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Volskaya Foundry",\r\n        "hero": "Sgt. Hammer",\r\n        "winner": "True",\r\n        "talents": [\r\n            "Advanced Artillery",\r\n            "Regenerative Bio-Steel",\r\n            "Hover Siege Mode",\r\n            "Napalm Strike",\r\n            "Hyper-Cooling Engines",\r\n            "Mechanical Know-how",\r\n            "Ultra Capacitors"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53061366",\r\n        "gameDate": "04/19/2024 12:18:44 am",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Alterac Pass",\r\n        "hero": "Sgt. Hammer",\r\n        "winner": "False",\r\n        "talents": [\r\n            "Advanced Artillery",\r\n            "Regenerative Bio-Steel",\r\n            "Hover Siege Mode",\r\n            "Napalm Strike",\r\n            "Hyper-Cooling Engines",\r\n            "Mechanical Know-how",\r\n            "Ultra Capacitors"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53350354",\r\n        "gameDate": "05/09/2024 3:24:08 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Alterac Pass",\r\n        "hero": "Samuro",\r\n        "winner": "False",\r\n        "talents": [\r\n            "Way of the Wind",\r\n            "One with the Wind",\r\n            "Burning Blade",\r\n            "Bladestorm",\r\n            "Shukuchi",\r\n            "Harsh Winds"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53332644",\r\n        "gameDate": "05/08/2024 12:12:13 am",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Sky Temple",\r\n        "hero": "Samuro",\r\n        "winner": "False",\r\n        "talents": [\r\n            "Way of the Wind",\r\n            "One with the Wind",\r\n            "Burning Blade",\r\n            "Bladestorm",\r\n            "Shukuchi",\r\n            "Harsh Winds",\r\n            "Wind Strider"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53332162",\r\n        "gameDate": "05/07/2024 11:46:28 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Volskaya Foundry",\r\n        "hero": "Samuro",\r\n        "winner": "True",\r\n        "talents": [\r\n            "Way of the Wind",\r\n            "One with the Wind",\r\n            "Burning Blade",\r\n            "Bladestorm",\r\n            "Shukuchi",\r\n            "Harsh Winds"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53315518",\r\n        "gameDate": "05/06/2024 9:19:26 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Sky Temple",\r\n        "hero": "Samuro",\r\n        "winner": "True",\r\n        "talents": [\r\n            "Way of the Wind",\r\n            "One with the Wind",\r\n            "Burning Blade",\r\n            "Bladestorm",\r\n            "Shukuchi",\r\n            "Harsh Winds"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53272642",\r\n        "gameDate": "05/03/2024 9:49:57 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Sky Temple",\r\n        "hero": "Samuro",\r\n        "winner": "True",\r\n        "talents": [\r\n            "Way of the Wind",\r\n            "One with the Wind",\r\n            "Burning Blade",\r\n            "Bladestorm",\r\n            "Shukuchi",\r\n            "Harsh Winds",\r\n            "Wind Strider"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53212996",\r\n        "gameDate": "04/30/2024 12:09:26 am",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Cursed Hollow",\r\n        "hero": "Samuro",\r\n        "winner": "True",\r\n        "talents": [\r\n            "Way of the Wind",\r\n            "One with the Wind",\r\n            "Burning Blade",\r\n            "Bladestorm",\r\n            "Shukuchi",\r\n            "Harsh Winds",\r\n            "Wind Strider"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53193302",\r\n        "gameDate": "04/27/2024 11:54:56 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Infernal Shrines",\r\n        "hero": "Samuro",\r\n        "winner": "False",\r\n        "talents": [\r\n            "Way of the Wind",\r\n            "One with the Wind",\r\n            "Burning Blade",\r\n            "Bladestorm",\r\n            "Shukuchi",\r\n            "Harsh Winds",\r\n            "Wind Strider"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53192575",\r\n        "gameDate": "04/27/2024 10:27:27 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Dragon Shire",\r\n        "hero": "Samuro",\r\n        "winner": "False",\r\n        "talents": [\r\n            "Way of the Wind",\r\n            "One with the Wind",\r\n            "Burning Blade",\r\n            "Bladestorm",\r\n            "Shukuchi",\r\n            "Harsh Winds",\r\n            "Wind Strider"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53162397",\r\n        "gameDate": "04/26/2024 1:15:16 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Alterac Pass",\r\n        "hero": "Samuro",\r\n        "winner": "False",\r\n        "talents": [\r\n            "Way of the Wind",\r\n            "One with the Wind",\r\n            "Burning Blade",\r\n            "Bladestorm",\r\n            "Shukuchi",\r\n            "Harsh Winds",\r\n            "Wind Strider"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53130305",\r\n        "gameDate": "04/24/2024 12:41:58 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Alterac Pass",\r\n        "hero": "Samuro",\r\n        "winner": "False",\r\n        "talents": [\r\n            "Way of the Wind",\r\n            "One with the Wind",\r\n            "Burning Blade",\r\n            "Bladestorm",\r\n            "Shukuchi"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53115962",\r\n        "gameDate": "04/23/2024 12:54:36 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Alterac Pass",\r\n        "hero": "Samuro",\r\n        "winner": "True",\r\n        "talents": [\r\n            "Way of the Wind",\r\n            "One with the Wind",\r\n            "Burning Blade",\r\n            "Bladestorm",\r\n            "Shukuchi",\r\n            "Harsh Winds",\r\n            "Wind Strider"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53113460",\r\n        "gameDate": "04/23/2024 12:45:03 am",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Garden of Terror",\r\n        "hero": "Samuro",\r\n        "winner": "True",\r\n        "talents": [\r\n            "Way of the Wind",\r\n            "One with the Wind",\r\n            "Burning Blade",\r\n            "Bladestorm",\r\n            "Shukuchi",\r\n            "Harsh Winds",\r\n            "Wind Strider"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53113263",\r\n        "gameDate": "04/23/2024 12:19:34 am",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Sky Temple",\r\n        "hero": "Samuro",\r\n        "winner": "False",\r\n        "talents": [\r\n            "Way of the Wind",\r\n            "One with the Wind",\r\n            "Burning Blade",\r\n            "Bladestorm",\r\n            "Shukuchi"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53099342",\r\n        "gameDate": "04/22/2024 12:47:45 am",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Cursed Hollow",\r\n        "hero": "Samuro",\r\n        "winner": "True",\r\n        "talents": [\r\n            "Way of the Wind",\r\n            "One with the Wind",\r\n            "Burning Blade",\r\n            "Bladestorm",\r\n            "Shukuchi",\r\n            "Harsh Winds",\r\n            "Wind Strider"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53099249",\r\n        "gameDate": "04/22/2024 12:21:11 am",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Tomb of the Spider Queen",\r\n        "hero": "Samuro",\r\n        "winner": "True",\r\n        "talents": [\r\n            "Way of the Wind",\r\n            "One with the Wind",\r\n            "Burning Blade",\r\n            "Bladestorm",\r\n            "Shukuchi",\r\n            "Harsh Winds",\r\n            "Wind Strider"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53098810",\r\n        "gameDate": "04/21/2024 11:08:38 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Cursed Hollow",\r\n        "hero": "Samuro",\r\n        "winner": "True",\r\n        "talents": [\r\n            "Way of the Wind",\r\n            "One with the Wind",\r\n            "Burning Blade",\r\n            "Bladestorm",\r\n            "Shukuchi",\r\n            "Harsh Winds",\r\n            "Wind Strider"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53097837",\r\n        "gameDate": "04/21/2024 10:21:48 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Alterac Pass",\r\n        "hero": "Samuro",\r\n        "winner": "True",\r\n        "talents": [\r\n            "Way of the Wind",\r\n            "One with the Wind",\r\n            "Burning Blade",\r\n            "Bladestorm",\r\n            "Shukuchi",\r\n            "Harsh Winds",\r\n            "Wind Strider"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53073562",\r\n        "gameDate": "04/20/2024 2:54:29 am",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Infernal Shrines",\r\n        "hero": "Samuro",\r\n        "winner": "True",\r\n        "talents": [\r\n            "Way of the Wind",\r\n            "One with the Wind",\r\n            "Burning Blade",\r\n            "Bladestorm",\r\n            "Shukuchi",\r\n            "Harsh Winds",\r\n            "Wind Strider"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53073492",\r\n        "gameDate": "04/20/2024 2:32:03 am",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Cursed Hollow",\r\n        "hero": "Samuro",\r\n        "winner": "True",\r\n        "talents": [\r\n            "Way of the Wind",\r\n            "One with the Wind",\r\n            "Burning Blade",\r\n            "Bladestorm",\r\n            "Shukuchi",\r\n            "Harsh Winds",\r\n            "Wind Strider"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53072356",\r\n        "gameDate": "04/19/2024 11:12:02 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Sky Temple",\r\n        "hero": "Samuro",\r\n        "winner": "True",\r\n        "talents": [\r\n            "Way of the Wind",\r\n            "One with the Wind",\r\n            "Burning Blade",\r\n            "Bladestorm",\r\n            "Shukuchi",\r\n            "Harsh Winds"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53337577",\r\n        "gameDate": "05/08/2024 2:56:44 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Infernal Shrines",\r\n        "hero": "Rehgar",\r\n        "winner": "True",\r\n        "talents": [\r\n            "Colossal Totem",\r\n            "Healing Totem",\r\n            "Grounded Totem",\r\n            "Ancestral Healing",\r\n            "Wellspring",\r\n            "Earthgrasp Totem",\r\n            "Pit Fighter"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53316872",\r\n        "gameDate": "05/06/2024 10:29:13 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Battlefield of Eternity",\r\n        "hero": "Rehgar",\r\n        "winner": "False",\r\n        "talents": [\r\n            "Colossal Totem",\r\n            "Electric Charge",\r\n            "Purification",\r\n            "Ancestral Healing",\r\n            "Earth Shield"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53272761",\r\n        "gameDate": "05/03/2024 10:13:39 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Dragon Shire",\r\n        "hero": "Rehgar",\r\n        "winner": "False",\r\n        "talents": [\r\n            "Colossal Totem",\r\n            "Earthliving Enchant",\r\n            "Grounded Totem",\r\n            "Ancestral Healing",\r\n            "Wellspring",\r\n            "Earthgrasp Totem",\r\n            "Elemental Conduit"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53218458",\r\n        "gameDate": "04/30/2024 12:23:24 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Battlefield of Eternity",\r\n        "hero": "Rehgar",\r\n        "winner": "False",\r\n        "talents": [\r\n            "Colossal Totem",\r\n            "Healing Totem",\r\n            "Grounded Totem",\r\n            "Ancestral Healing",\r\n            "Wellspring",\r\n            "Earthgrasp Totem",\r\n            "Farseer\'s Blessing"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53211821",\r\n        "gameDate": "04/29/2024 11:25:23 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Tomb of the Spider Queen",\r\n        "hero": "Rehgar",\r\n        "winner": "True",\r\n        "talents": [\r\n            "Stormcaller",\r\n            "Healing Totem",\r\n            "Blood and Thunder",\r\n            "Ancestral Healing",\r\n            "Tidal Waves",\r\n            "Hunger of the Wolf",\r\n            "Elemental Conduit"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53202329",\r\n        "gameDate": "04/28/2024 10:58:36 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Alterac Pass",\r\n        "hero": "Rehgar",\r\n        "winner": "True",\r\n        "talents": [\r\n            "Colossal Totem",\r\n            "Healing Totem",\r\n            "Grounded Totem",\r\n            "Ancestral Healing",\r\n            "Wellspring",\r\n            "Earthgrasp Totem",\r\n            "Farseer\'s Blessing"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53174513",\r\n        "gameDate": "04/27/2024 12:15:06 am",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Alterac Pass",\r\n        "hero": "Rehgar",\r\n        "winner": "False",\r\n        "talents": [\r\n            "Colossal Totem",\r\n            "Healing Totem",\r\n            "Grounded Totem",\r\n            "Ancestral Healing",\r\n            "Wellspring",\r\n            "Earthgrasp Totem",\r\n            "Farseer\'s Blessing"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53172212",\r\n        "gameDate": "04/26/2024 10:56:29 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Cursed Hollow",\r\n        "hero": "Rehgar",\r\n        "winner": "True",\r\n        "talents": [\r\n            "Colossal Totem",\r\n            "Healing Totem",\r\n            "Grounded Totem",\r\n            "Ancestral Healing",\r\n            "Wellspring",\r\n            "Earthgrasp Totem"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53171675",\r\n        "gameDate": "04/26/2024 10:36:33 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Battlefield of Eternity",\r\n        "hero": "Rehgar",\r\n        "winner": "True",\r\n        "talents": [\r\n            "Colossal Totem",\r\n            "Healing Totem",\r\n            "Grounded Totem",\r\n            "Ancestral Healing",\r\n            "Wellspring",\r\n            "Earthgrasp Totem",\r\n            "Pit Fighter"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53115916",\r\n        "gameDate": "04/23/2024 12:24:00 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Battlefield of Eternity",\r\n        "hero": "Rehgar",\r\n        "winner": "True",\r\n        "talents": [\r\n            "Colossal Totem",\r\n            "Earthliving Enchant",\r\n            "Grounded Totem",\r\n            "Ancestral Healing",\r\n            "Tidal Waves",\r\n            "Earthgrasp Totem",\r\n            "Pit Fighter"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53113646",\r\n        "gameDate": "04/23/2024 1:10:27 am",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Volskaya Foundry",\r\n        "hero": "Rehgar",\r\n        "winner": "False",\r\n        "talents": [\r\n            "Colossal Totem",\r\n            "Healing Totem",\r\n            "Grounded Totem",\r\n            "Ancestral Healing",\r\n            "Wellspring",\r\n            "Earthgrasp Totem",\r\n            "Pit Fighter"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53112676",\r\n        "gameDate": "04/22/2024 10:50:11 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Alterac Pass",\r\n        "hero": "Rehgar",\r\n        "winner": "False",\r\n        "talents": [\r\n            "Colossal Totem",\r\n            "Healing Totem",\r\n            "Grounded Totem",\r\n            "Ancestral Healing",\r\n            "Wellspring",\r\n            "Earthgrasp Totem",\r\n            "Pit Fighter"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53099133",\r\n        "gameDate": "04/21/2024 11:57:57 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Infernal Shrines",\r\n        "hero": "Rehgar",\r\n        "winner": "True",\r\n        "talents": [\r\n            "Colossal Totem",\r\n            "Healing Totem",\r\n            "Grounded Totem",\r\n            "Ancestral Healing",\r\n            "Wellspring",\r\n            "Earthgrasp Totem",\r\n            "Farseer\'s Blessing"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53098987",\r\n        "gameDate": "04/21/2024 11:31:46 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Volskaya Foundry",\r\n        "hero": "Rehgar",\r\n        "winner": "True",\r\n        "talents": [\r\n            "Colossal Totem",\r\n            "Healing Totem",\r\n            "Grounded Totem",\r\n            "Ancestral Healing",\r\n            "Wellspring",\r\n            "Earthgrasp Totem",\r\n            "Pit Fighter"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53084635",\r\n        "gameDate": "04/20/2024 10:48:30 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Sky Temple",\r\n        "hero": "Rehgar",\r\n        "winner": "True",\r\n        "talents": [\r\n            "Colossal Totem",\r\n            "Healing Totem",\r\n            "Grounded Totem",\r\n            "Ancestral Healing",\r\n            "Wellspring",\r\n            "Earthgrasp Totem",\r\n            "Farseer\'s Blessing"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53058703",\r\n        "gameDate": "04/18/2024 10:04:58 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Battlefield of Eternity",\r\n        "hero": "Rehgar",\r\n        "winner": "False",\r\n        "talents": [\r\n            "Colossal Totem",\r\n            "Healing Totem",\r\n            "Grounded Totem",\r\n            "Ancestral Healing"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53331763",\r\n        "gameDate": "05/07/2024 11:25:51 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Garden of Terror",\r\n        "hero": "Raynor",\r\n        "winner": "True",\r\n        "talents": [\r\n            "Exterminator",\r\n            "Fight or Flight",\r\n            "Fuel the Rush",\r\n            "Hyperion",\r\n            "Giddy-Up"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53073670",\r\n        "gameDate": "04/20/2024 3:24:17 am",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Battlefield of Eternity",\r\n        "hero": "Raynor",\r\n        "winner": "True",\r\n        "talents": [\r\n            "Exterminator",\r\n            "Fight or Flight",\r\n            "Fuel the Rush",\r\n            "Raynor\'s Raider",\r\n            "Giddy-Up",\r\n            "Rallying Cry",\r\n            "Dusk Wing"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53072131",\r\n        "gameDate": "04/19/2024 10:23:59 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Infernal Shrines",\r\n        "hero": "Ragnaros",\r\n        "winner": "True",\r\n        "talents": [\r\n            "Engulfing Flame",\r\n            "Slow Burn",\r\n            "Blistering Attacks",\r\n            "Sulfuras Smash",\r\n            "Tempered Flame",\r\n            "Blast Echo"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53317299",\r\n        "gameDate": "05/06/2024 10:53:15 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Garden of Terror",\r\n        "hero": "Nazeebo",\r\n        "winner": "True",\r\n        "talents": [\r\n            "Thing of the Deep",\r\n            "Blood Ritual",\r\n            "Dead Rush",\r\n            "Ravenous Spirit",\r\n            "Ice Block",\r\n            "Ring of Poison",\r\n            "Vile Infection"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53268451",\r\n        "gameDate": "05/03/2024 9:55:01 am",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Tomb of the Spider Queen",\r\n        "hero": "Nazeebo",\r\n        "winner": "True",\r\n        "talents": [\r\n            "Thing of the Deep",\r\n            "Blood Ritual",\r\n            "Dead Rush",\r\n            "Ravenous Spirit",\r\n            "Ice Block",\r\n            "Soul Harvest"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53113176",\r\n        "gameDate": "04/23/2024 12:00:30 am",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Tomb of the Spider Queen",\r\n        "hero": "Nazeebo",\r\n        "winner": "True",\r\n        "talents": [\r\n            "Thing of the Deep",\r\n            "Blood Ritual",\r\n            "Dead Rush",\r\n            "Ravenous Spirit",\r\n            "Superstition",\r\n            "Ring of Poison",\r\n            "Vile Infection"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53058354",\r\n        "gameDate": "04/18/2024 9:48:23 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Tomb of the Spider Queen",\r\n        "hero": "Nazeebo",\r\n        "winner": "True",\r\n        "talents": [\r\n            "Thing of the Deep",\r\n            "Blood Ritual",\r\n            "Dead Rush",\r\n            "Ravenous Spirit",\r\n            "Ice Block",\r\n            "Ring of Poison",\r\n            "Vile Infection"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53318046",\r\n        "gameDate": "05/07/2024 12:25:57 am",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Volskaya Foundry",\r\n        "hero": "Muradin",\r\n        "winner": "True",\r\n        "talents": [\r\n            "Perfect Storm",\r\n            "Sledgehammer",\r\n            "Skullcracker",\r\n            "Avatar",\r\n            "Bronzebeard Rage",\r\n            "Stoneform",\r\n            "Rewind"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53316301",\r\n        "gameDate": "05/06/2024 10:05:59 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Volskaya Foundry",\r\n        "hero": "Muradin",\r\n        "winner": "False",\r\n        "talents": [\r\n            "Dwarf Block",\r\n            "Reverberation",\r\n            "Skullcracker",\r\n            "Avatar",\r\n            "Healing Static",\r\n            "Stoneform"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53192980",\r\n        "gameDate": "04/27/2024 10:57:38 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Towers of Doom",\r\n        "hero": "Muradin",\r\n        "winner": "True",\r\n        "talents": [\r\n            "Third Wind",\r\n            "Thunder Burn",\r\n            "Skullcracker",\r\n            "Avatar",\r\n            "Thunder Strike",\r\n            "Stoneform",\r\n            "Rewind"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53176414",\r\n        "gameDate": "04/27/2024 1:08:07 am",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Dragon Shire",\r\n        "hero": "Muradin",\r\n        "winner": "False",\r\n        "talents": [\r\n            "Dwarf Block",\r\n            "Thunder Burn",\r\n            "Skullcracker",\r\n            "Avatar",\r\n            "Thunder Strike",\r\n            "Stoneform",\r\n            "Rewind"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53174943",\r\n        "gameDate": "04/27/2024 12:35:42 am",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Tomb of the Spider Queen",\r\n        "hero": "Muradin",\r\n        "winner": "False",\r\n        "talents": [\r\n            "Perfect Storm",\r\n            "Thunder Burn",\r\n            "Skullcracker",\r\n            "Avatar",\r\n            "Bronzebeard Rage",\r\n            "Stoneform"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53173303",\r\n        "gameDate": "04/26/2024 11:24:48 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Infernal Shrines",\r\n        "hero": "Muradin",\r\n        "winner": "True",\r\n        "talents": [\r\n            "Dwarf Block",\r\n            "Thunder Burn",\r\n            "Skullcracker",\r\n            "Avatar",\r\n            "Bronzebeard Rage",\r\n            "Stoneform",\r\n            "Rewind"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53163333",\r\n        "gameDate": "04/26/2024 2:18:15 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Dragon Shire",\r\n        "hero": "Muradin",\r\n        "winner": "True",\r\n        "talents": [\r\n            "Dwarf Block",\r\n            "Thunder Burn",\r\n            "Skullcracker",\r\n            "Avatar",\r\n            "Thunder Strike",\r\n            "Stoneform",\r\n            "Rewind"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53161929",\r\n        "gameDate": "04/26/2024 12:33:00 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Towers of Doom",\r\n        "hero": "Muradin",\r\n        "winner": "True",\r\n        "talents": [\r\n            "Dwarf Block",\r\n            "Thunder Burn",\r\n            "Skullcracker",\r\n            "Avatar",\r\n            "Thunder Strike",\r\n            "Stoneform",\r\n            "Rewind"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53130283",\r\n        "gameDate": "04/24/2024 12:22:50 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Towers of Doom",\r\n        "hero": "Muradin",\r\n        "winner": "False",\r\n        "talents": [\r\n            "Third Wind",\r\n            "Reverberation",\r\n            "Skullcracker",\r\n            "Avatar",\r\n            "Bronzebeard Rage",\r\n            "Stoneform"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53099408",\r\n        "gameDate": "04/22/2024 1:09:23 am",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Sky Temple",\r\n        "hero": "Muradin",\r\n        "winner": "True",\r\n        "talents": [\r\n            "Third Wind",\r\n            "Thunder Burn",\r\n            "Skullcracker",\r\n            "Avatar",\r\n            "Thunder Strike",\r\n            "Stoneform",\r\n            "Rewind"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53097674",\r\n        "gameDate": "04/21/2024 9:55:54 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Sky Temple",\r\n        "hero": "Muradin",\r\n        "winner": "False",\r\n        "talents": [\r\n            "Dwarf Block",\r\n            "Thunder Burn",\r\n            "Skullcracker",\r\n            "Avatar",\r\n            "Thunder Strike",\r\n            "Stoneform"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53085943",\r\n        "gameDate": "04/20/2024 11:37:36 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Garden of Terror",\r\n        "hero": "Muradin",\r\n        "winner": "False",\r\n        "talents": [\r\n            "Dwarf Block",\r\n            "Sledgehammer",\r\n            "Heavy Impact",\r\n            "Avatar",\r\n            "Thunder Strike",\r\n            "Dwarf Launch"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53072693",\r\n        "gameDate": "04/20/2024 12:08:48 am",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Dragon Shire",\r\n        "hero": "Muradin",\r\n        "winner": "False",\r\n        "talents": [\r\n            "Dwarf Block",\r\n            "Thunder Burn",\r\n            "Skullcracker",\r\n            "Avatar",\r\n            "Thunder Strike",\r\n            "Stoneform",\r\n            "Rewind"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53072532",\r\n        "gameDate": "04/19/2024 11:40:37 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Garden of Terror",\r\n        "hero": "Muradin",\r\n        "winner": "True",\r\n        "talents": [\r\n            "Third Wind",\r\n            "Sledgehammer",\r\n            "Skullcracker",\r\n            "Avatar",\r\n            "Thunder Strike",\r\n            "Dwarf Launch",\r\n            "Rewind"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53061919",\r\n        "gameDate": "04/19/2024 1:20:14 am",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Dragon Shire",\r\n        "hero": "Muradin",\r\n        "winner": "False",\r\n        "talents": [\r\n            "Dwarf Block",\r\n            "Thunder Burn",\r\n            "Skullcracker",\r\n            "Haymaker",\r\n            "Thunder Strike",\r\n            "Dwarf Launch"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53059458",\r\n        "gameDate": "04/18/2024 10:52:44 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Garden of Terror",\r\n        "hero": "Muradin",\r\n        "winner": "True",\r\n        "talents": [\r\n            "Dwarf Block",\r\n            "Sledgehammer",\r\n            "Skullcracker",\r\n            "Avatar",\r\n            "Thunder Strike",\r\n            "Stoneform",\r\n            "Rewind"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53207736",\r\n        "gameDate": "04/29/2024 3:22:52 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Battlefield of Eternity",\r\n        "hero": "Lunara",\r\n        "winner": "False",\r\n        "talents": [\r\n            "Natural Perspective",\r\n            "Nature\'s Culling",\r\n            "Wild Vigor",\r\n            "Thornwood Vine",\r\n            "Greater Spell Shield",\r\n            "Invigorating Spores",\r\n            "Intensifying Toxin"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53201919",\r\n        "gameDate": "04/28/2024 10:25:32 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Volskaya Foundry",\r\n        "hero": "Lt. Morales",\r\n        "winner": "False",\r\n        "talents": [\r\n            "Life Support",\r\n            "Trauma Trigger",\r\n            "Vanadium Plating",\r\n            "Stim Drone",\r\n            "Bedside Manner",\r\n            "First Responder",\r\n            "Hyperactivity"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53269837",\r\n        "gameDate": "05/03/2024 2:22:56 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Volskaya Foundry",\r\n        "hero": "Leoric",\r\n        "winner": "True",\r\n        "talents": [\r\n            "Fealty Unto Death",\r\n            "Ghastly Reach",\r\n            "Drain Momentum",\r\n            "Entomb",\r\n            "Spectral Leech",\r\n            "Mithril Mace"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53268907",\r\n        "gameDate": "05/03/2024 10:18:27 am",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Infernal Shrines",\r\n        "hero": "Leoric",\r\n        "winner": "True",\r\n        "talents": [\r\n            "Fealty Unto Death",\r\n            "Kneel, Peasants!",\r\n            "Drain Momentum",\r\n            "Entomb",\r\n            "Spectral Leech",\r\n            "Mithril Mace",\r\n            "Buried Alive"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53337737",\r\n        "gameDate": "05/08/2024 3:29:27 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Battlefield of Eternity",\r\n        "hero": "Johanna",\r\n        "winner": "True",\r\n        "talents": [\r\n            "Laws of Hope",\r\n            "Subdue",\r\n            "Conviction",\r\n            "Blessed Shield",\r\n            "Blessed Hammer",\r\n            "Blessed Momentum",\r\n            "Indestructible"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53272911",\r\n        "gameDate": "05/03/2024 10:38:33 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Towers of Doom",\r\n        "hero": "Johanna",\r\n        "winner": "False",\r\n        "talents": [\r\n            "Divine Fortress",\r\n            "Subdue",\r\n            "Steed Charge",\r\n            "Blessed Shield",\r\n            "Blessed Hammer",\r\n            "Blessed Momentum",\r\n            "Indestructible"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53269372",\r\n        "gameDate": "05/03/2024 1:31:16 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Garden of Terror",\r\n        "hero": "Johanna",\r\n        "winner": "True",\r\n        "talents": [\r\n            "Laws of Hope",\r\n            "Subdue",\r\n            "Conviction",\r\n            "Blessed Shield",\r\n            "Blessed Hammer",\r\n            "Blessed Momentum",\r\n            "Indestructible"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53269330",\r\n        "gameDate": "05/03/2024 1:09:55 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Garden of Terror",\r\n        "hero": "Johanna",\r\n        "winner": "True",\r\n        "talents": [\r\n            "Laws of Hope",\r\n            "Subdue",\r\n            "Conviction",\r\n            "Blessed Shield",\r\n            "Blessed Hammer",\r\n            "Holy Renewal",\r\n            "Indestructible"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53203118",\r\n        "gameDate": "04/28/2024 11:30:48 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Sky Temple",\r\n        "hero": "Johanna",\r\n        "winner": "False",\r\n        "talents": [\r\n            "Divine Fortress",\r\n            "Subdue",\r\n            "Conviction",\r\n            "Blessed Shield",\r\n            "Roar",\r\n            "Holy Renewal",\r\n            "Indestructible"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53315992",\r\n        "gameDate": "05/06/2024 9:40:48 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Garden of Terror",\r\n        "hero": "Jaina",\r\n        "winner": "False",\r\n        "talents": [\r\n            "Fingers of Frost",\r\n            "Frost Shards",\r\n            "Ice Floes",\r\n            "Summon Water Elemental",\r\n            "Icy Veins",\r\n            "Numbing Blast"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53317766",\r\n        "gameDate": "05/06/2024 11:20:28 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Infernal Shrines",\r\n        "hero": "Falstad",\r\n        "winner": "False",\r\n        "talents": [\r\n            "Gathering Storm",\r\n            "Hammer Gains",\r\n            "BOOMerang",\r\n            "Mighty Gust",\r\n            "Flow Rider",\r\n            "Aerie Gusts",\r\n            "Wind Tunnel"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53312073",\r\n        "gameDate": "05/06/2024 3:05:18 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Towers of Doom",\r\n        "hero": "Falstad",\r\n        "winner": "False",\r\n        "talents": [\r\n            "Frequent Flyer",\r\n            "Hammer Gains",\r\n            "Secret Weapon",\r\n            "Mighty Gust",\r\n            "Sustained Winds",\r\n            "Aerie Gusts"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53212290",\r\n        "gameDate": "04/29/2024 11:46:36 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Towers of Doom",\r\n        "hero": "Falstad",\r\n        "winner": "True",\r\n        "talents": [\r\n            "Gathering Storm",\r\n            "Hammer Gains",\r\n            "BOOMerang",\r\n            "Mighty Gust",\r\n            "Flow Rider",\r\n            "Aerie Gusts"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53162773",\r\n        "gameDate": "04/26/2024 1:49:55 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Cursed Hollow",\r\n        "hero": "Falstad",\r\n        "winner": "True",\r\n        "talents": [\r\n            "Frequent Flyer",\r\n            "Hammer Gains",\r\n            "Secret Weapon",\r\n            "Mighty Gust",\r\n            "Sustained Winds",\r\n            "Aerie Gusts",\r\n            "Wind Tunnel"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53073239",\r\n        "gameDate": "04/20/2024 1:56:52 am",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Braxis Holdout",\r\n        "hero": "Diablo",\r\n        "winner": "False",\r\n        "talents": [\r\n            "Feast on Fear",\r\n            "Life Leech",\r\n            "Diabolical Momentum",\r\n            "Apocalypse",\r\n            "Cruelty",\r\n            "Overpowering Nightmare"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53272510",\r\n        "gameDate": "05/03/2024 9:26:30 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Braxis Holdout",\r\n        "hero": "Auriel",\r\n        "winner": "False",\r\n        "talents": [\r\n            "Searing Light",\r\n            "Repeated Offense",\r\n            "Empathic Link",\r\n            "Crystal Aegis",\r\n            "Converging Force"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53318202",\r\n        "gameDate": "05/07/2024 1:03:40 am",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Tomb of the Spider Queen",\r\n        "hero": "Anub\'arak",\r\n        "winner": "True",\r\n        "talents": [\r\n            "Legion of Beetles",\r\n            "Bed of Barbs",\r\n            "Leeching Scarabs",\r\n            "Locust Swarm",\r\n            "Burning Beetles",\r\n            "Beetle, Juiced",\r\n            "Hive Master"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53317834",\r\n        "gameDate": "05/06/2024 11:41:00 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Tomb of the Spider Queen",\r\n        "hero": "Anub\'arak",\r\n        "winner": "True",\r\n        "talents": [\r\n            "Nerubian Armor",\r\n            "Bed of Barbs",\r\n            "Chitinous Plating",\r\n            "Cocoon",\r\n            "Urticating Spines",\r\n            "Debilitation"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53192471",\r\n        "gameDate": "04/27/2024 10:01:56 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Braxis Holdout",\r\n        "hero": "Anub\'arak",\r\n        "winner": "True",\r\n        "talents": [\r\n            "Regeneration Master",\r\n            "Underking",\r\n            "Chitinous Plating",\r\n            "Cocoon",\r\n            "Acid Drenched Mandibles",\r\n            "Epicenter"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53071986",\r\n        "gameDate": "04/19/2024 10:02:52 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Sky Temple",\r\n        "hero": "Anub\'arak",\r\n        "winner": "False",\r\n        "talents": [\r\n            "Legion of Beetles",\r\n            "Underking",\r\n            "Leeching Scarabs",\r\n            "Cocoon",\r\n            "Burning Beetles",\r\n            "Epicenter"\r\n        ]\r\n    },\r\n    {\r\n        "gameId": "53060851",\r\n        "gameDate": "04/18/2024 11:47:39 pm",\r\n        "gameType": "Storm League",\r\n        "gameMap": "Sky Temple",\r\n        "hero": "Anub\'arak",\r\n        "winner": "True",\r\n        "talents": [\r\n            "Legion of Beetles",\r\n            "Underking",\r\n            "Leeching Scarabs",\r\n            "Cocoon",\r\n            "Acid Drenched Mandibles",\r\n            "Debilitation",\r\n            "Rewind"\r\n        ]\r\n    }\r\n]');
const csv = await (0, _json2Csv.json2csv)(jsonData);
console.log(csv);
_fs.writeFileSync("./data/gameData.csv", csv);

},{"json-2-csv":"3F4CA","fs":"jhUEF"}],"3F4CA":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.csv2json = exports.json2csv = void 0;
const constants_1 = require("cbd73cc191971468");
const json2csv_1 = require("89a3a4fad829f434");
const csv2json_1 = require("6ef02965916d29b");
const utils_1 = require("b881d364d643fced");
function json2csv(data, options) {
    const builtOptions = (0, utils_1.buildJ2COptions)(options ?? {});
    // Validate the parameters before calling the converter's convert function
    (0, utils_1.validate)(data, utils_1.isObject, constants_1.errors.json2csv);
    return (0, json2csv_1.Json2Csv)(builtOptions).convert(data);
}
exports.json2csv = json2csv;
function csv2json(data, options) {
    const builtOptions = (0, utils_1.buildC2JOptions)(options ?? {});
    // Validate the parameters before calling the converter's convert function
    (0, utils_1.validate)(data, utils_1.isString, constants_1.errors.csv2json);
    return (0, csv2json_1.Csv2Json)(builtOptions).convert(data);
}
exports.csv2json = csv2json;

},{"cbd73cc191971468":"dHzzD","89a3a4fad829f434":"6OGzY","6ef02965916d29b":"hJzNp","b881d364d643fced":"3MWKO"}],"dHzzD":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.excelBOM = exports.defaultCsv2JsonOptions = exports.defaultJson2CsvOptions = exports.errors = void 0;
exports.errors = {
    optionsRequired: "Options were not passed and are required.",
    json2csv: {
        cannotCallOn: "Cannot call json2csv on",
        dataCheckFailure: "Data provided was not an array of documents.",
        notSameSchema: "Not all documents have the same schema."
    },
    csv2json: {
        cannotCallOn: "Cannot call csv2json on",
        dataCheckFailure: "CSV is not a string."
    }
};
exports.defaultJson2CsvOptions = {
    arrayIndexesAsKeys: false,
    checkSchemaDifferences: false,
    delimiter: {
        field: ",",
        wrap: '"',
        eol: "\n"
    },
    emptyFieldValue: undefined,
    escapeHeaderNestedDots: true,
    excelBOM: false,
    excludeKeys: [],
    expandNestedObjects: true,
    expandArrayObjects: false,
    prependHeader: true,
    preventCsvInjection: false,
    sortHeader: false,
    trimFieldValues: false,
    trimHeaderFields: false,
    unwindArrays: false,
    useDateIso8601Format: false,
    useLocaleFormat: false,
    wrapBooleans: false
};
exports.defaultCsv2JsonOptions = {
    delimiter: {
        field: ",",
        wrap: '"',
        eol: "\n"
    },
    excelBOM: false,
    preventCsvInjection: false,
    trimFieldValues: false,
    trimHeaderFields: false,
    wrapBooleans: false
};
exports.excelBOM = "\uFEFF";

},{}],"6OGzY":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Json2Csv = void 0;
const doc_path_1 = require("cd60ab487a12269e");
const deeks_1 = require("9441ab1eef4ca767");
const constants_1 = require("1ed461a74c16ccbf");
const utils = __importStar(require("6a4ace9786d09c07"));
const Json2Csv = function(options) {
    const wrapDelimiterCheckRegex = new RegExp(options.delimiter.wrap, "g"), crlfSearchRegex = /\r?\n|\r/, customValueParser = options.parseValue && typeof options.parseValue === "function" ? options.parseValue : null, expandingWithoutUnwinding = options.expandArrayObjects && !options.unwindArrays, deeksOptions = {
        arrayIndexesAsKeys: options.arrayIndexesAsKeys,
        expandNestedObjects: options.expandNestedObjects,
        expandArrayObjects: expandingWithoutUnwinding,
        ignoreEmptyArraysWhenExpanding: expandingWithoutUnwinding,
        escapeNestedDots: true
    };
    /** HEADER FIELD FUNCTIONS **/ /**
     * Returns the list of data field names of all documents in the provided list
     */ function getFieldNameList(data) {
        // If keys weren't specified, then we'll use the list of keys generated by the deeks module
        return (0, deeks_1.deepKeysFromList)(data, deeksOptions);
    }
    /**
     * Processes the schemas by checking for schema differences, if so desired.
     * If schema differences are not to be checked, then it resolves the unique
     * list of field names.
     */ function processSchemas(documentSchemas) {
        // If the user wants to check for the same schema (regardless of schema ordering)
        if (options.checkSchemaDifferences) return checkSchemaDifferences(documentSchemas);
        else {
            // Otherwise, we do not care if the schemas are different, so we should get the unique list of keys
            const uniqueFieldNames = utils.unique(utils.flatten(documentSchemas));
            return uniqueFieldNames;
        }
    }
    /**
     * This function performs the schema difference check, if the user specifies that it should be checked.
     * If there are no field names, then there are no differences.
     * Otherwise, we get the first schema and the remaining list of schemas
     */ function checkSchemaDifferences(documentSchemas) {
        // have multiple documents - ensure only one schema (regardless of field ordering)
        const firstDocSchema = documentSchemas[0], restOfDocumentSchemas = documentSchemas.slice(1), schemaDifferences = computeNumberOfSchemaDifferences(firstDocSchema, restOfDocumentSchemas);
        // If there are schema inconsistencies, throw a schema not the same error
        if (schemaDifferences) throw new Error(constants_1.errors.json2csv.notSameSchema);
        return firstDocSchema;
    }
    /**
     * Computes the number of schema differences
     */ function computeNumberOfSchemaDifferences(firstDocSchema, restOfDocumentSchemas) {
        return restOfDocumentSchemas.reduce((schemaDifferences, documentSchema)=>{
            // If there is a difference between the schemas, increment the counter of schema inconsistencies
            const numberOfDifferences = utils.computeSchemaDifferences(firstDocSchema, documentSchema).length;
            return numberOfDifferences > 0 ? schemaDifferences + 1 : schemaDifferences;
        }, 0);
    }
    /**
     * If so specified, this filters the detected key paths to exclude any keys that have been specified
     */ function filterExcludedKeys(keyPaths) {
        if (options.excludeKeys) return keyPaths.filter((keyPath)=>{
            for (const excludedKey of options.excludeKeys){
                // Only match if the excludedKey appears at the beginning of the string so we don't accidentally match a key farther down in a key path
                const regex = excludedKey instanceof RegExp ? excludedKey : new RegExp(`^${excludedKey}`);
                if (excludedKey === keyPath || keyPath.match(regex)) return false; // Exclude the key
            }
            return true; // Otherwise, include the key
        });
        return keyPaths;
    }
    /**
     * If so specified, this sorts the header field names alphabetically
     */ function sortHeaderFields(fieldNames) {
        if (options.sortHeader && typeof options.sortHeader === "function") return fieldNames.sort(options.sortHeader);
        else if (options.sortHeader) return fieldNames.sort();
        return fieldNames;
    }
    /**
     * Trims the header fields, if the user desires them to be trimmed.
     */ function trimHeaderFields(params) {
        if (options.trimHeaderFields) params.headerFields = params.headerFields.map((field)=>field.split(".").map((component)=>component.trim()).join("."));
        return params;
    }
    /**
     * Wrap the headings, if desired by the user.
     */ function wrapHeaderFields(params) {
        // only perform this if we are actually prepending the header
        if (options.prependHeader) params.headerFields = params.headerFields.map(function(headingKey) {
            return wrapFieldValueIfNecessary(headingKey);
        });
        return params;
    }
    /**
     * Generates the CSV header string by joining the headerFields by the field delimiter
     */ function generateCsvHeader(params) {
        // #185 - generate a keys list to avoid finding native Map() methods
        const fieldTitleMapKeys = Object.keys(options.fieldTitleMap);
        params.header = params.headerFields.map(function(field) {
            let headerKey = field;
            // If a custom field title was provided for this field, use that
            if (fieldTitleMapKeys.includes(field)) headerKey = options.fieldTitleMap[field];
            else if (!options.escapeHeaderNestedDots) // Otherwise, if the user doesn't want nested dots in keys to be escaped, then unescape them
            headerKey = headerKey.replace(/\\\./g, ".");
            return wrapFieldValueIfNecessary(headerKey);
        }).join(options.delimiter.field);
        return params;
    }
    function convertKeysToHeaderFields() {
        if (!options.keys) return [];
        return options.keys.map((key)=>{
            if (typeof key === "object" && "field" in key) {
                options.fieldTitleMap[key.field] = key.title ?? key.field;
                return key.field;
            }
            return key;
        });
    }
    function extractWildcardMatchKeys() {
        if (!options.keys) return [];
        return options.keys.flatMap((item)=>{
            if (typeof item === "string") // Exclude plain strings that were passed in options.keys
            return [];
            else if (item?.wildcardMatch) // Return "field" value for objects with wildcardMatch: true
            return item.field;
            // Exclude other objects
            return [];
        });
    }
    /**
     * Retrieve the headings for all documents and return it.
     * This checks that all documents have the same schema.
     */ function retrieveHeaderFields(data) {
        const wildcardMatchKeys = extractWildcardMatchKeys();
        const keyStrings = convertKeysToHeaderFields();
        const fieldNames = getFieldNameList(data);
        const processed = processSchemas(fieldNames);
        if (options.keys) {
            options.keys = keyStrings;
            const matchedKeys = keyStrings.flatMap((userProvidedKey)=>{
                // If this is not a wildcard matched key, then just return and include it in the resulting key list
                if (!wildcardMatchKeys.includes(userProvidedKey)) return userProvidedKey;
                // Otherwise, identify all detected keys that match with the provided wildcard key:
                const matches = [];
                const regex = new RegExp(`^${userProvidedKey}`);
                for (const detectedKey of processed)if (userProvidedKey === detectedKey || detectedKey.match(regex)) matches.push(detectedKey);
                return matches;
            });
            if (!options.unwindArrays) {
                const filtered = filterExcludedKeys(matchedKeys);
                return sortHeaderFields(filtered);
            }
        }
        const filtered = filterExcludedKeys(processed);
        return sortHeaderFields(filtered);
    }
    /** RECORD FIELD FUNCTIONS **/ /**
     * Unwinds objects in arrays within record objects if the user specifies the
     * expandArrayObjects option. If not specified, this passes the params
     * argument through to the next function in the promise chain.
     *
     * The `finalPass` parameter is used to trigger one last pass to ensure no more
     * arrays need to be expanded
     */ function unwindRecordsIfNecessary(params, finalPass = false) {
        if (options.unwindArrays) {
            const originalRecordsLength = params.records.length;
            // Unwind each of the documents at the given headerField
            params.headerFields.forEach((headerField)=>{
                params.records = utils.unwind(params.records, headerField);
            });
            const headerFields = retrieveHeaderFields(params.records);
            params.headerFields = headerFields;
            // If we were able to unwind more arrays, then try unwinding again...
            if (originalRecordsLength !== params.records.length) return unwindRecordsIfNecessary(params);
            // Otherwise, we didn't unwind any additional arrays, so continue...
            // Run a final time in case the earlier unwinding exposed additional
            // arrays to unwind...
            if (!finalPass) return unwindRecordsIfNecessary(params, true);
            // If keys were provided, set the headerFields back to the provided keys after unwinding:
            if (options.keys) {
                const userSelectedFields = convertKeysToHeaderFields();
                params.headerFields = filterExcludedKeys(userSelectedFields);
            }
            return params;
        }
        return params;
    }
    /**
     * Main function which handles the processing of a record, or document to be converted to CSV format
     * This function specifies and performs the necessary operations in the necessary order
     * in order to obtain the data and convert it to CSV form while maintaining RFC 4180 compliance.
     * * Order of operations:
     * - Get fields from provided key list (as array of actual values)
     * - Convert the values to csv/string representation [possible option here for custom converters?]
     * - Trim fields
     * - Determine if they need to be wrapped (& wrap if necessary)
     * - Combine values for each line (by joining by field delimiter)
     */ function processRecords(params) {
        params.recordString = params.records.map((record)=>{
            // Retrieve data for each of the headerFields from this record
            const recordFieldData = retrieveRecordFieldData(record, params.headerFields), // Process the data in this record and return the
            processedRecordData = recordFieldData.map((fieldValue)=>{
                fieldValue = trimRecordFieldValue(fieldValue);
                fieldValue = preventCsvInjection(fieldValue);
                let stringified = customValueParser ? customValueParser(fieldValue, recordFieldValueToString) : recordFieldValueToString(fieldValue);
                stringified = wrapFieldValueIfNecessary(stringified);
                return stringified;
            });
            // Join the record data by the field delimiter
            return generateCsvRowFromRecord(processedRecordData);
        }).join(options.delimiter.eol);
        return params;
    }
    /**
     * Helper function intended to process *just* array values when the expandArrayObjects setting is set to true
     */ function processRecordFieldDataForExpandedArrayObject(recordFieldValue) {
        const filteredRecordFieldValue = utils.removeEmptyFields(recordFieldValue);
        // If we have an array and it's either empty of full of empty values, then use an empty value representation
        if (!recordFieldValue.length || !filteredRecordFieldValue.length) return options.emptyFieldValue || "";
        else if (filteredRecordFieldValue.length === 1) // Otherwise, we have an array of actual values...
        // Since we are expanding array objects, we will want to key in on values of objects.
        return filteredRecordFieldValue[0]; // Extract the single value in the array
        return recordFieldValue;
    }
    /**
     * Gets all field values from a particular record for the given list of fields
     */ function retrieveRecordFieldData(record, fields) {
        const recordValues = [];
        fields.forEach((field)=>{
            let recordFieldValue = (0, doc_path_1.evaluatePath)(record, field);
            if (!utils.isUndefined(options.emptyFieldValue) && utils.isEmptyField(recordFieldValue)) recordFieldValue = options.emptyFieldValue;
            else if (options.expandArrayObjects && Array.isArray(recordFieldValue)) recordFieldValue = processRecordFieldDataForExpandedArrayObject(recordFieldValue);
            recordValues.push(recordFieldValue);
        });
        return recordValues;
    }
    /**
     * Converts a record field value to its string representation
     */ function recordFieldValueToString(fieldValue) {
        const isDate = fieldValue instanceof Date; // store to avoid checking twice
        if (fieldValue === null || Array.isArray(fieldValue) || typeof fieldValue === "object" && !isDate) return JSON.stringify(fieldValue);
        else if (typeof fieldValue === "undefined") return "undefined";
        else if (isDate && options.useDateIso8601Format) return fieldValue.toISOString();
        else return !options.useLocaleFormat ? fieldValue.toString() : fieldValue.toLocaleString();
    }
    /**
     * Trims the record field value, if specified by the user's provided options
     */ function trimRecordFieldValue(fieldValue) {
        if (options.trimFieldValues) {
            if (Array.isArray(fieldValue)) return fieldValue.map(trimRecordFieldValue);
            else if (typeof fieldValue === "string") return fieldValue.trim();
            return fieldValue;
        }
        return fieldValue;
    }
    /**
     * Prevent CSV injection on strings if specified by the user's provided options.
     * Mitigation will be done by ensuring that the first character doesn't being with:
     * Equals (=), Plus (+), Minus (-), At (@), Tab (0x09), Carriage return (0x0D).
     * More info: https://owasp.org/www-community/attacks/CSV_Injection
     */ function preventCsvInjection(fieldValue) {
        if (options.preventCsvInjection) {
            if (Array.isArray(fieldValue)) return fieldValue.map(preventCsvInjection);
            else if (typeof fieldValue === "string" && !utils.isNumber(fieldValue)) return fieldValue.replace(/^[=+\-@\t\r]+/g, "");
            return fieldValue;
        }
        return fieldValue;
    }
    /**
     * Escapes quotation marks in the field value, if necessary, and appropriately
     * wraps the record field value if it contains a comma (field delimiter),
     * quotation mark (wrap delimiter), or a line break (CRLF)
     */ function wrapFieldValueIfNecessary(fieldValue) {
        const wrapDelimiter = options.delimiter.wrap;
        // eg. includes quotation marks (default delimiter)
        if (fieldValue.includes(options.delimiter.wrap)) // add an additional quotation mark before each quotation mark appearing in the field value
        fieldValue = fieldValue.replace(wrapDelimiterCheckRegex, wrapDelimiter + wrapDelimiter);
        // if the field contains a comma (field delimiter), quotation mark (wrap delimiter), line break, or CRLF
        //   then enclose it in quotation marks (wrap delimiter)
        if (fieldValue.includes(options.delimiter.field) || fieldValue.includes(options.delimiter.wrap) || fieldValue.match(crlfSearchRegex) || options.wrapBooleans && (fieldValue === "true" || fieldValue === "false")) // wrap the field's value in a wrap delimiter (quotation marks by default)
        fieldValue = wrapDelimiter + fieldValue + wrapDelimiter;
        return fieldValue;
    }
    /**
     * Generates the CSV record string by joining the field values together by the field delimiter
     */ function generateCsvRowFromRecord(recordFieldValues) {
        return recordFieldValues.join(options.delimiter.field);
    }
    /** CSV COMPONENT COMBINER/FINAL PROCESSOR **/ /**
     * Performs the final CSV construction by combining the fields in the appropriate
     * order depending on the provided options values and sends the generated CSV
     * back to the user
     */ function generateCsvFromComponents(params) {
        const header = params.header, records = params.recordString, // If we are prepending the header, then add an EOL, otherwise just return the records
        csv = (options.excelBOM ? constants_1.excelBOM : "") + (options.prependHeader ? header + options.delimiter.eol : "") + records;
        return csv;
    }
    /** MAIN CONVERTER FUNCTION **/ /**
     * Internally exported json2csv function
     */ function convert(data) {
        // Single document, not an array
        if (utils.isObject(data) && !data.length) data = [
            data
        ]; // Convert to an array of the given document
        // Retrieve the heading and then generate the CSV with the keys that are identified
        const headerFields = {
            headerFields: retrieveHeaderFields(data),
            records: data,
            header: "",
            recordString: ""
        };
        const unwinded = unwindRecordsIfNecessary(headerFields);
        const processed = processRecords(unwinded);
        const wrapped = wrapHeaderFields(processed);
        const trimmed = trimHeaderFields(wrapped);
        const generated = generateCsvHeader(trimmed);
        return generateCsvFromComponents(generated);
    }
    return {
        convert
    };
};
exports.Json2Csv = Json2Csv;

},{"cd60ab487a12269e":"sA06m","9441ab1eef4ca767":"2iTEn","1ed461a74c16ccbf":"dHzzD","6a4ace9786d09c07":"3MWKO"}],"sA06m":[function(require,module,exports) {
/**
 * @license MIT
 * doc-path <https://github.com/mrodrig/doc-path>
 * Copyright (c) 2015-present, Michael Rodrigues.
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setPath = exports.evaluatePath = void 0;
/**
 * Main function that evaluates the path in a particular object
 * @throws {Error} possible error if call stack size is exceeded
 */ function evaluatePath(obj, kp) {
    if (!obj) return null;
    const { dotIndex, key, remaining } = state(kp);
    const kpVal = typeof obj === "object" && kp in obj ? obj[kp] : undefined;
    const keyVal = typeof obj === "object" && key in obj ? obj[key] : undefined;
    if (dotIndex >= 0 && typeof obj === "object" && !(kp in obj)) {
        const { key: nextKey } = state(remaining);
        const nextKeyAsInt = parseInt(nextKey);
        // If there's an array at the current key in the object, then iterate over those items evaluating the remaining path
        if (Array.isArray(keyVal) && isNaN(nextKeyAsInt)) return keyVal.map((doc)=>evaluatePath(doc, remaining));
        // Otherwise, we can just recur
        return evaluatePath(keyVal, remaining);
    } else if (Array.isArray(obj)) {
        const keyAsInt = parseInt(key);
        if (kp === key && dotIndex === -1 && !isNaN(keyAsInt)) return keyVal;
        // If this object is actually an array, then iterate over those items evaluating the path
        return obj.map((doc)=>evaluatePath(doc, kp));
    } else if (dotIndex >= 0 && kp !== key && typeof obj === "object" && key in obj) // If there's a field with a non-nested dot, then recur into that sub-value
    return evaluatePath(keyVal, remaining);
    else if (dotIndex === -1 && typeof obj === "object" && key in obj && !(kp in obj)) // If the field is here, but the key was escaped
    return keyVal;
    // Otherwise, we can just return value directly
    return kpVal;
}
exports.evaluatePath = evaluatePath;
/**
 * Main function that performs validation before passing off to _sp
 * @throws {Error} possible error if call stack size is exceeded
 */ function setPath(obj, kp, v) {
    if (!obj) throw new Error("No object was provided.");
    else if (!kp) throw new Error("No keyPath was provided.");
    return _sp(obj, kp, v);
}
exports.setPath = setPath;
// Helper function that will set the value in the provided object/array.
function _sp(obj, kp, v) {
    const { dotIndex, key, remaining } = state(kp);
    // If this is clearly a prototype pollution attempt, then refuse to modify the path
    if (kp.startsWith("__proto__") || kp.startsWith("constructor") || kp.startsWith("prototype")) return obj;
    if (dotIndex >= 0) {
        const keyAsInt = parseInt(key);
        // If there is a '.' in the key path, recur on the subdoc and ...
        if (typeof obj === "object" && obj !== null && !(key in obj) && Array.isArray(obj) && !isNaN(keyAsInt)) {
            // If there's no value at obj[key] then populate an empty object
            obj[key] = obj[key] ?? {};
            // Continue iterating on the rest of the key path to set the appropriate value where intended and then return
            _sp(obj[key], remaining, v);
            return obj;
        } else if (typeof obj === "object" && obj !== null && !(key in obj) && Array.isArray(obj)) {
            // If this is an array and there are multiple levels of keys to iterate over, recur.
            obj.forEach((doc)=>_sp(doc, kp, v));
            return obj;
        } else if (typeof obj === "object" && obj !== null && !(key in obj) && !Array.isArray(obj)) {
            const { key: nextKey } = state(remaining);
            const nextKeyAsInt = parseInt(nextKey);
            if (!isNaN(nextKeyAsInt)) // If the current key doesn't exist yet and the next key is a number (likely array index), populate an empty array
            obj[key] = [];
            else if (remaining === "") {
                // If the remaining key is empty, then a `.` character appeared right at the end of the path and wasn't actually indicating a separate level
                obj[kp] = v;
                return obj;
            } else // If the current key doesn't exist yet, populate it
            obj[key] = {};
        }
        _sp(obj[key], remaining, v);
    } else if (Array.isArray(obj)) {
        const keyAsInt = parseInt(key);
        // If the object is an array and this key is an int (likely array index), then set the value directly and return
        if (kp === key && dotIndex === -1 && !isNaN(keyAsInt)) {
            obj[key] = v;
            return obj;
        }
        // If this "obj" is actually an array, then we can loop over each of the values and set the path
        obj.forEach((doc)=>_sp(doc, remaining, v));
        return obj;
    } else // Otherwise, we can set the path directly
    obj[key] = v;
    return obj;
}
// Helper function that returns some information necessary to evaluate or set a path  based on the provided keyPath value
function state(kp) {
    const dotIndex = findFirstNonEscapedDotIndex(kp);
    return {
        dotIndex,
        key: kp.slice(0, dotIndex >= 0 ? dotIndex : undefined).replace(/\\./g, "."),
        remaining: kp.slice(dotIndex + 1)
    };
}
function findFirstNonEscapedDotIndex(kp) {
    for(let i = 0; i < kp.length; i++){
        const previousChar = i > 0 ? kp[i - 1] : "", currentChar = kp[i];
        if (currentChar === "." && previousChar !== "\\") return i;
    }
    return -1;
}

},{}],"2iTEn":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.deepKeysFromList = exports.deepKeys = void 0;
const utils = __importStar(require("cce12bfbd5b6cf3d"));
__exportStar(require("b332437b8a2450dc"), exports);
/**
 * Return the deep keys list for a single document
 * @param object
 * @param options
 * @returns {Array}
 */ function deepKeys(object, options) {
    const parsedOptions = mergeOptions(options);
    if (typeof object === "object" && object !== null) return generateDeepKeysList("", object, parsedOptions);
    return [];
}
exports.deepKeys = deepKeys;
/**
 * Return the deep keys list for all documents in the provided list
 * @param list
 * @param options
 * @returns Array[Array[String]]
 */ function deepKeysFromList(list, options) {
    const parsedOptions = mergeOptions(options);
    return list.map((document)=>{
        if (typeof document === "object" && document !== null) // if the data at the key is a document, then we retrieve the subHeading starting with an empty string heading and the doc
        return deepKeys(document, parsedOptions);
        return [];
    });
}
exports.deepKeysFromList = deepKeysFromList;
function generateDeepKeysList(heading, data, options) {
    const keys = Object.keys(data).map((currentKey)=>{
        // If the given heading is empty, then we set the heading to be the subKey, otherwise set it as a nested heading w/ a dot
        const keyName = buildKeyName(heading, escapeNestedDotsIfSpecified(currentKey, options));
        // If we have another nested document, recur on the sub-document to retrieve the full key name
        if (options.expandNestedObjects && utils.isDocumentToRecurOn(data[currentKey]) || options.arrayIndexesAsKeys && Array.isArray(data[currentKey]) && data[currentKey].length) return generateDeepKeysList(keyName, data[currentKey], options);
        else if (options.expandArrayObjects && Array.isArray(data[currentKey])) // If we have a nested array that we need to recur on
        return processArrayKeys(data[currentKey], keyName, options);
        else if (options.ignoreEmptyArrays && Array.isArray(data[currentKey]) && !data[currentKey].length) return [];
        // Otherwise return this key name since we don't have a sub document
        return keyName;
    });
    return utils.flatten(keys);
}
/**
 * Helper function to handle the processing of arrays when the expandArrayObjects
 * option is specified.
 * @param subArray
 * @param currentKeyPath
 * @param options
 * @returns {*}
 */ function processArrayKeys(subArray, currentKeyPath, options) {
    let subArrayKeys = deepKeysFromList(subArray, options);
    if (!subArray.length) return options.ignoreEmptyArraysWhenExpanding ? [] : [
        currentKeyPath
    ];
    else if (subArray.length && utils.flatten(subArrayKeys).length === 0) // Has items in the array, but no objects
    return [
        currentKeyPath
    ];
    else {
        subArrayKeys = subArrayKeys.map((schemaKeys)=>{
            if (Array.isArray(schemaKeys) && schemaKeys.length === 0) return [
                currentKeyPath
            ];
            return schemaKeys.map((subKey)=>buildKeyName(currentKeyPath, escapeNestedDotsIfSpecified(subKey, options)));
        });
        return utils.unique(utils.flatten(subArrayKeys));
    }
}
function escapeNestedDotsIfSpecified(key, options) {
    if (options.escapeNestedDots) return key.replace(/\./g, "\\.");
    return key;
}
/**
 * Function used to generate the key path
 * @param upperKeyName String accumulated key path
 * @param currentKeyName String current key name
 * @returns String
 */ function buildKeyName(upperKeyName, currentKeyName) {
    if (upperKeyName) return upperKeyName + "." + currentKeyName;
    return currentKeyName;
}
function mergeOptions(options) {
    return {
        arrayIndexesAsKeys: false,
        expandNestedObjects: true,
        expandArrayObjects: false,
        ignoreEmptyArraysWhenExpanding: false,
        escapeNestedDots: false,
        ignoreEmptyArrays: false,
        ...options ?? {}
    };
}

},{"cce12bfbd5b6cf3d":"cc2Fs","b332437b8a2450dc":"fBML6"}],"cc2Fs":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isDocumentToRecurOn = exports.flatten = exports.unique = void 0;
function unique(array) {
    return [
        ...new Set(array)
    ];
}
exports.unique = unique;
function flatten(array) {
    return [].concat(...array);
}
exports.flatten = flatten;
/**
 * Returns whether this value is a document to recur on or not
 * @param val Any item whose type will be evaluated
 * @returns {boolean}
 */ function isDocumentToRecurOn(val) {
    return typeof val === "object" && val !== null && !Array.isArray(val) && Object.keys(val).length;
}
exports.isDocumentToRecurOn = isDocumentToRecurOn;

},{}],"fBML6":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"3MWKO":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isInvalid = exports.flatten = exports.unique = exports.arrayDifference = exports.isError = exports.isUndefined = exports.isNull = exports.isObject = exports.isString = exports.isNumber = exports.unwind = exports.getNCharacters = exports.removeEmptyFields = exports.isEmptyField = exports.computeSchemaDifferences = exports.isDateRepresentation = exports.isStringRepresentation = exports.deepCopy = exports.validate = exports.buildC2JOptions = exports.buildJ2COptions = void 0;
const doc_path_1 = require("a741d593e6dac2ef");
const constants_1 = require("cbd4f85e75f918ff");
const dateStringRegex = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/, MAX_ARRAY_LENGTH = 100000;
/**
 * Build the options to be passed to the appropriate function
 * If a user does not provide custom options, then we use our default
 * If options are provided, then we set each valid key that was passed
 */ function buildJ2COptions(opts) {
    return {
        ...constants_1.defaultJson2CsvOptions,
        ...opts,
        delimiter: {
            field: opts?.delimiter?.field ?? constants_1.defaultJson2CsvOptions.delimiter.field,
            wrap: opts?.delimiter?.wrap || constants_1.defaultJson2CsvOptions.delimiter.wrap,
            eol: opts?.delimiter?.eol || constants_1.defaultJson2CsvOptions.delimiter.eol
        },
        fieldTitleMap: Object.create({})
    };
}
exports.buildJ2COptions = buildJ2COptions;
/**
 * Build the options to be passed to the appropriate function
 * If a user does not provide custom options, then we use our default
 * If options are provided, then we set each valid key that was passed
 */ function buildC2JOptions(opts) {
    return {
        ...constants_1.defaultCsv2JsonOptions,
        ...opts,
        delimiter: {
            field: opts?.delimiter?.field ?? constants_1.defaultCsv2JsonOptions.delimiter.field,
            wrap: opts?.delimiter?.wrap || constants_1.defaultCsv2JsonOptions.delimiter.wrap,
            eol: opts?.delimiter?.eol || constants_1.defaultCsv2JsonOptions.delimiter.eol
        }
    };
}
exports.buildC2JOptions = buildC2JOptions;
function validate(data, validationFn, errorMessages) {
    if (!data) throw new Error(`${errorMessages.cannotCallOn} ${data}.`);
    if (!validationFn(data)) throw new Error(errorMessages.dataCheckFailure);
    return true;
}
exports.validate = validate;
/**
 * Utility function to deep copy an object, used by the module tests
 */ function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}
exports.deepCopy = deepCopy;
/**
 * Helper function that determines whether the provided value is a representation
 *   of a string. Given the RFC4180 requirements, that means that the value is
 *   wrapped in value wrap delimiters (usually a quotation mark on each side).
 */ function isStringRepresentation(fieldValue, options) {
    const firstChar = fieldValue[0], lastIndex = fieldValue.length - 1, lastChar = fieldValue[lastIndex];
    // If the field starts and ends with a wrap delimiter
    return firstChar === options.delimiter.wrap && lastChar === options.delimiter.wrap;
}
exports.isStringRepresentation = isStringRepresentation;
/**
 * Helper function that determines whether the provided value is a representation
 *   of a date.
 */ function isDateRepresentation(fieldValue) {
    return dateStringRegex.test(fieldValue);
}
exports.isDateRepresentation = isDateRepresentation;
/**
 * Helper function that determines the schema differences between two objects.
 */ function computeSchemaDifferences(schemaA, schemaB) {
    return arrayDifference(schemaA, schemaB).concat(arrayDifference(schemaB, schemaA));
}
exports.computeSchemaDifferences = computeSchemaDifferences;
/**
 * Utility function to check if a field is considered empty so that the emptyFieldValue can be used instead
 */ function isEmptyField(fieldValue) {
    return isUndefined(fieldValue) || isNull(fieldValue) || fieldValue === "";
}
exports.isEmptyField = isEmptyField;
/**
 * Helper function that removes empty field values from an array.
 */ function removeEmptyFields(fields) {
    return fields.filter((field)=>!isEmptyField(field));
}
exports.removeEmptyFields = removeEmptyFields;
/**
 * Helper function that retrieves the next n characters from the start index in
 *   the string including the character at the start index. This is used to
 *   check if are currently at an EOL value, since it could be multiple
 *   characters in length (eg. '\r\n')
 */ function getNCharacters(str, start, n) {
    return str.substring(start, start + n);
}
exports.getNCharacters = getNCharacters;
/**
 * The following unwind functionality is a heavily modified version of @edwincen's
 * unwind extension for lodash. Since lodash is a large package to require in,
 * and all of the required functionality was already being imported, either
 * natively or with doc-path, I decided to rewrite the majority of the logic
 * so that an additional dependency would not be required. The original code
 * with the lodash dependency can be found here:
 *
 * https://github.com/edwincen/unwind/blob/master/index.js
 */ /**
 * Core function that unwinds an item at the provided path
 */ function unwindItem(accumulator, item, fieldPath) {
    const valueToUnwind = (0, doc_path_1.evaluatePath)(item, fieldPath);
    let cloned = deepCopy(item);
    if (Array.isArray(valueToUnwind) && valueToUnwind.length) valueToUnwind.forEach((val)=>{
        cloned = deepCopy(item);
        accumulator.push((0, doc_path_1.setPath)(cloned, fieldPath, val));
    });
    else if (Array.isArray(valueToUnwind) && valueToUnwind.length === 0) {
        // Push an empty string so the value is empty since there are no values
        (0, doc_path_1.setPath)(cloned, fieldPath, "");
        accumulator.push(cloned);
    } else accumulator.push(cloned);
}
/**
 * Main unwind function which takes an array and a field to unwind.
 */ function unwind(array, field) {
    const result = [];
    array.forEach((item)=>{
        unwindItem(result, item, field);
    });
    return result;
}
exports.unwind = unwind;
/**
 * Checks whether value can be converted to a number
 */ function isNumber(value) {
    return !isNaN(Number(value));
}
exports.isNumber = isNumber;
/*
 * Helper functions which were created to remove underscorejs from this package.
 */ function isString(value) {
    return typeof value === "string";
}
exports.isString = isString;
function isObject(value) {
    return typeof value === "object";
}
exports.isObject = isObject;
function isNull(value) {
    return value === null;
}
exports.isNull = isNull;
function isUndefined(value) {
    return typeof value === "undefined";
}
exports.isUndefined = isUndefined;
function isError(value) {
    // TODO(mrodrig): test this possible change
    // return value instanceof Error;
    return Object.prototype.toString.call(value) === "[object Error]";
}
exports.isError = isError;
function arrayDifference(a, b) {
    return a.filter((x)=>!b.includes(x));
}
exports.arrayDifference = arrayDifference;
function unique(array) {
    return [
        ...new Set(array)
    ];
}
exports.unique = unique;
function flatten(array) {
    // Node 11+ - use the native array flattening function
    if (array.flat) return array.flat();
    // #167 - allow browsers to flatten very long 200k+ element arrays
    if (array.length > MAX_ARRAY_LENGTH) {
        let safeArray = [];
        for(let a = 0; a < array.length; a += MAX_ARRAY_LENGTH)safeArray = safeArray.concat(...array.slice(a, a + MAX_ARRAY_LENGTH));
        return safeArray;
    }
    return array.reduce((accumulator, value)=>accumulator.concat(value), []);
}
exports.flatten = flatten;
/**
 * Used to help avoid incorrect values returned by JSON.parse when converting
 * CSV back to JSON, such as '39e1804' which JSON.parse converts to Infinity
 */ function isInvalid(parsedJson) {
    return parsedJson === Infinity || parsedJson === -Infinity;
}
exports.isInvalid = isInvalid;

},{"a741d593e6dac2ef":"sA06m","cbd4f85e75f918ff":"dHzzD"}],"hJzNp":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Csv2Json = void 0;
const doc_path_1 = require("b182815d1f73200a");
const constants_1 = require("5faa5af2c4e4e4c5");
const utils = __importStar(require("cc0469764cb1084d"));
const Csv2Json = function(options) {
    const escapedWrapDelimiterRegex = new RegExp(options.delimiter.wrap + options.delimiter.wrap, "g"), excelBOMRegex = new RegExp("^" + constants_1.excelBOM), valueParserFn = options.parseValue && typeof options.parseValue === "function" ? options.parseValue : JSON.parse;
    /**
     * Trims the header key, if specified by the user via the provided options
     */ function processHeaderKey(headerKey) {
        headerKey = removeWrapDelimitersFromValue(headerKey);
        if (options.trimHeaderFields) return headerKey.split(".").map((component)=>component.trim()).join(".");
        return headerKey;
    }
    /**
     * Generate the JSON heading from the CSV
     */ function retrieveHeading(lines) {
        let headerFields = [];
        if (options.headerFields) headerFields = options.headerFields.map((headerField, index)=>({
                value: processHeaderKey(headerField),
                index
            }));
        else {
            // Generate and return the heading keys
            const headerRow = lines[0];
            headerFields = headerRow.map((headerKey, index)=>({
                    value: processHeaderKey(headerKey),
                    index
                }));
            // If the user provided keys, filter the generated keys to just the user provided keys so we also have the key index
            if (options.keys) {
                const keys = options.keys; // TypeScript type checking work around to get it to recognize the option is not undefined
                headerFields = headerFields.filter((headerKey)=>keys.includes(headerKey.value));
            }
        }
        return {
            lines,
            headerFields,
            recordLines: []
        };
    }
    /**
     * Removes the Excel BOM value, if specified by the options object
     */ function stripExcelBOM(csv) {
        if (options.excelBOM) return csv.replace(excelBOMRegex, "");
        return csv;
    }
    /**
     * Helper function that splits a line so that we can handle wrapped fields
     */ function splitLines(csv) {
        // Parse out the line...
        const lines = [], lastCharacterIndex = csv.length - 1, eolDelimiterLength = options.delimiter.eol.length, stateVariables = {
            insideWrapDelimiter: false,
            parsingValue: true,
            justParsedDoubleQuote: false,
            startIndex: 0
        };
        let splitLine = [], character, charBefore, charAfter, nextNChar, index = 0;
        // Loop through each character in the line to identify where to split the values
        while(index < csv.length){
            // Current character
            character = csv[index];
            // Previous character
            charBefore = index ? csv[index - 1] : "";
            // Next character
            charAfter = index < lastCharacterIndex ? csv[index + 1] : "";
            // Next n characters, including the current character, where n = length(EOL delimiter)
            // This allows for the checking of an EOL delimiter when if it is more than a single character (eg. '\r\n')
            nextNChar = utils.getNCharacters(csv, index, eolDelimiterLength);
            if ((nextNChar === options.delimiter.eol && !stateVariables.insideWrapDelimiter || index === lastCharacterIndex) && charBefore === options.delimiter.field) {
                // If we reached an EOL delimiter or the end of the csv and the previous character is a field delimiter...
                // If the start index is the current index (and since the previous character is a comma),
                //   then the value being parsed is an empty value accordingly, add an empty string
                if (nextNChar === options.delimiter.eol && stateVariables.startIndex === index) splitLine.push("");
                else if (character === options.delimiter.field) // If we reached the end of the CSV, there's no new line, and the current character is a comma
                // then add an empty string for the current value
                splitLine.push("");
                else // Otherwise, there's a valid value, and the start index isn't the current index, grab the whole value
                splitLine.push(csv.substr(stateVariables.startIndex));
                // Since the last character is a comma, there's still an additional implied field value trailing the comma.
                //   Since this value is empty, we push an extra empty value
                splitLine.push("");
                // Finally, push the split line values into the lines array and clear the split line
                lines.push(splitLine);
                splitLine = [];
                stateVariables.startIndex = index + eolDelimiterLength;
                stateVariables.parsingValue = true;
                stateVariables.insideWrapDelimiter = charAfter === options.delimiter.wrap;
            } else if (index === lastCharacterIndex && character === options.delimiter.field) {
                // If we reach the end of the CSV and the current character is a field delimiter
                // Parse the previously seen value and add it to the line
                const parsedValue = csv.substring(stateVariables.startIndex, index);
                splitLine.push(parsedValue);
                // Then add an empty string to the line since the last character being a field delimiter indicates an empty field
                splitLine.push("");
                lines.push(splitLine);
            } else if (index === lastCharacterIndex || nextNChar === options.delimiter.eol && // if we aren't inside wrap delimiters or if we are but the character before was a wrap delimiter and we didn't just see two
            (!stateVariables.insideWrapDelimiter || stateVariables.insideWrapDelimiter && charBefore === options.delimiter.wrap && !stateVariables.justParsedDoubleQuote)) {
                // Otherwise if we reached the end of the line or csv (and current character is not a field delimiter)
                const toIndex = index !== lastCharacterIndex || charBefore === options.delimiter.wrap ? index : undefined;
                // Retrieve the remaining value and add it to the split line list of values
                splitLine.push(csv.substring(stateVariables.startIndex, toIndex));
                // Finally, push the split line values into the lines array and clear the split line
                lines.push(splitLine);
                splitLine = [];
                stateVariables.startIndex = index + eolDelimiterLength;
                stateVariables.parsingValue = true;
                stateVariables.insideWrapDelimiter = charAfter === options.delimiter.wrap;
            } else if (character === options.delimiter.wrap && charBefore === options.delimiter.field && !stateVariables.insideWrapDelimiter && !stateVariables.parsingValue) {
                // If we reached a wrap delimiter after a comma and we aren't inside a wrap delimiter
                stateVariables.startIndex = index;
                stateVariables.insideWrapDelimiter = true;
                stateVariables.parsingValue = true;
                // If the next character(s) are an EOL delimiter, then skip them so we don't parse what we've seen as another value
                if (utils.getNCharacters(csv, index + 1, eolDelimiterLength) === options.delimiter.eol) index += options.delimiter.eol.length + 1; // Skip past EOL
            } else if ((charBefore !== options.delimiter.wrap || stateVariables.justParsedDoubleQuote && charBefore === options.delimiter.wrap) && character === options.delimiter.wrap && utils.getNCharacters(csv, index + 1, eolDelimiterLength) === options.delimiter.eol) {
                // If we reach a wrap which is not preceded by a wrap delim and the next character is an EOL delim (ie. *"\n)
                stateVariables.insideWrapDelimiter = false;
                stateVariables.parsingValue = false;
            // Next iteration will substring, add the value to the line, and push the line onto the array of lines
            } else if (character === options.delimiter.wrap && (index === 0 || utils.getNCharacters(csv, index - eolDelimiterLength, eolDelimiterLength) === options.delimiter.eol && !stateVariables.insideWrapDelimiter)) {
                // If the line starts with a wrap delimiter (ie. "*)
                stateVariables.insideWrapDelimiter = true;
                stateVariables.parsingValue = true;
                stateVariables.startIndex = index;
            } else if (character === options.delimiter.wrap && charAfter === options.delimiter.field) {
                // If we reached a wrap delimiter with a field delimiter after it (ie. *",)
                splitLine.push(csv.substring(stateVariables.startIndex, index + 1));
                stateVariables.startIndex = index + 2; // next value starts after the field delimiter
                stateVariables.insideWrapDelimiter = false;
                stateVariables.parsingValue = false;
            } else if (character === options.delimiter.wrap && charBefore === options.delimiter.field && !stateVariables.insideWrapDelimiter && stateVariables.parsingValue) {
                // If we reached a wrap delimiter with a field delimiter after it (ie. ,"*)
                splitLine.push(csv.substring(stateVariables.startIndex, index - 1));
                stateVariables.insideWrapDelimiter = true;
                stateVariables.parsingValue = true;
                stateVariables.startIndex = index;
            } else if (character === options.delimiter.wrap && charAfter === options.delimiter.wrap && index !== stateVariables.startIndex) {
                // If we run into an escaped quote (ie. "") skip past the second quote
                index += 2;
                stateVariables.justParsedDoubleQuote = true;
                continue;
            } else if (character === options.delimiter.field && charBefore !== options.delimiter.wrap && charAfter !== options.delimiter.wrap && !stateVariables.insideWrapDelimiter && stateVariables.parsingValue) {
                // If we reached a field delimiter and are not inside the wrap delimiters (ie. *,*)
                splitLine.push(csv.substring(stateVariables.startIndex, index));
                stateVariables.startIndex = index + 1;
            } else if (character === options.delimiter.field && charBefore === options.delimiter.wrap && charAfter !== options.delimiter.wrap && !stateVariables.parsingValue) {
                // If we reached a field delimiter, the previous character was a wrap delimiter, and the
                //   next character is not a wrap delimiter (ie. ",*)
                stateVariables.insideWrapDelimiter = false;
                stateVariables.parsingValue = true;
                stateVariables.startIndex = index + 1;
            }
            // Otherwise increment to the next character
            index++;
            // Reset the double quote state variable
            stateVariables.justParsedDoubleQuote = false;
        }
        return lines;
    }
    /**
     * Retrieves the record lines from the split CSV lines and sets it on the params object
     */ function retrieveRecordLines(params) {
        if (options.headerFields) params.recordLines = params.lines;
        else params.recordLines = params.lines.splice(1);
        return params;
    }
    /**
     * Retrieves the value for the record from the line at the provided key.
     */ function retrieveRecordValueFromLine(headerField, line) {
        // If there is a value at the key's index, use it; otherwise, null
        const value = line[headerField.index];
        // Perform any necessary value conversions on the record value
        return processRecordValue(value);
    }
    /**
     * Processes the record's value by parsing the data to ensure the CSV is
     * converted to the JSON that created it.
     */ function processRecordValue(fieldValue) {
        // If the value is an array representation, convert it
        const parsedJson = parseValue(fieldValue);
        // If parsedJson is anything aside from an error, then we want to use the parsed value
        // This allows us to interpret values like 'null' --> null, 'false' --> false
        if (!utils.isError(parsedJson) && !utils.isInvalid(parsedJson)) return parsedJson;
        else if (fieldValue === "undefined") return undefined;
        return fieldValue;
    }
    /**
     * Trims the record value, if specified by the user via the options object
     */ function trimRecordValue(fieldValue) {
        if (options.trimFieldValues && fieldValue !== null) return fieldValue.trim();
        return fieldValue;
    }
    /**
     * Create a JSON document with the given keys (designated by the CSV header)
     *   and the values (from the given line)
     * @returns {Object} created json document
     */ function createDocument(headerFields, line) {
        // Reduce the keys into a JSON document representing the given line
        return headerFields.reduce((document, headerField)=>{
            // If there is a value at the key's index in the line, set the value; otherwise null
            const value = retrieveRecordValueFromLine(headerField, line);
            try {
                // Otherwise add the key and value to the document
                return (0, doc_path_1.setPath)(document, headerField.value, value);
            } catch (error) {
                // Catch any errors where key paths are null or '' and continue
                return document;
            }
        }, {});
    }
    /**
     * Removes the outermost wrap delimiters from a value, if they are present
     * Otherwise, the non-wrapped value is returned as is
     */ function removeWrapDelimitersFromValue(fieldValue) {
        const firstChar = fieldValue[0], lastIndex = fieldValue.length - 1, lastChar = fieldValue[lastIndex];
        // If the field starts and ends with a wrap delimiter
        if (firstChar === options.delimiter.wrap && lastChar === options.delimiter.wrap) return fieldValue.substr(1, lastIndex - 1);
        return fieldValue;
    }
    /**
     * Unescapes wrap delimiters by replacing duplicates with a single (eg. "" -> ")
     * This is done in order to parse RFC 4180 compliant CSV back to JSON
     */ function unescapeWrapDelimiterInField(fieldValue) {
        return fieldValue.replace(escapedWrapDelimiterRegex, options.delimiter.wrap);
    }
    /**
     * Main helper function to convert the CSV to the JSON document array
     */ function transformRecordLines(params) {
        // For each line, create the document and add it to the array of documents
        return params.recordLines.reduce((generatedJsonObjects, line)=>{
            line = line.map((fieldValue)=>{
                // Perform the necessary operations on each line
                fieldValue = removeWrapDelimitersFromValue(fieldValue);
                fieldValue = unescapeWrapDelimiterInField(fieldValue);
                fieldValue = trimRecordValue(fieldValue);
                return fieldValue;
            });
            const generatedDocument = createDocument(params.headerFields, line);
            return generatedJsonObjects.concat(generatedDocument);
        }, []);
    }
    /**
     * Attempts to parse the provided value. If it is not parsable, then an error is returned
     */ function parseValue(value) {
        try {
            if (utils.isStringRepresentation(value, options) && !utils.isDateRepresentation(value)) return value;
            const parsedJson = valueParserFn(value);
            // If the parsed value is an array, then we also need to trim record values, if specified
            if (Array.isArray(parsedJson)) return parsedJson.map(trimRecordValue);
            return parsedJson;
        } catch (err) {
            return err;
        }
    }
    /**
     * Internally exported csv2json function
     */ function convert(data) {
        // Split the CSV into lines using the specified EOL option
        const stripped = stripExcelBOM(data);
        const split = splitLines(stripped);
        const heading = retrieveHeading(split); // Retrieve the headings from the CSV, unless the user specified the keys
        const lines = retrieveRecordLines(heading); // Retrieve the record lines from the CSV
        return transformRecordLines(lines); // Retrieve the JSON document array
    }
    return {
        convert
    };
};
exports.Csv2Json = Csv2Json;

},{"b182815d1f73200a":"sA06m","5faa5af2c4e4e4c5":"dHzzD","cc0469764cb1084d":"3MWKO"}]},["500lX","a0lq5"], "a0lq5", "parcelRequire30ab")

//# sourceMappingURL=index.cc97f864.js.map
