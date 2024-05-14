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
})({"3OGCC":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "926dce33870a179d";
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

},{}],"3fM8f":[function(require,module,exports) {
const parser = require("19ccc2b412f7d0e9");
const fs = require("b3ae310d6aa1d30d");
const html = fs.readFileSync("./data/table.html", {
    encoding: "utf8"
});
const data = parser.parse(html);
const gameData = []; // array of games
// testing data structures
// const uniqueGame = {id:123, date:"test"}; // an object describing statistics of a game
// gameData.push(uniqueGame);
// gameData.push(uniqueGame);
var tableRows = data.getElementsByTagName("tr");
// skip first row as it contains the table headers
for(var tableIt = 1; tableIt < tableRows.length; tableIt++){
    var row = tableRows[tableIt];
    //tableRows.length is the number of games minus one, each increase of tableIt will add one game.
    // iterating through the rows, we're scraping for the actual game stat as shown below.
    // ROWS are structured as:
    // Game ID : HTMLElement
    // Game Date : TextNode
    // Game Type : TextNode
    // Game Map : TextNode
    // Hero : HTMLElement
    // Winner : TextNode
    // Talents : HTMLElement
    /*
    //code mockup

    var model = 
    for each game in games
    {
        model.push(game.id, game.date, game.type, game.hero, game.winner, game.talents)
    }


    */ const uniqueGame = {
        gameId: undefined,
        gameDate: undefined,
        gameType: undefined,
        gameMap: undefined,
        hero: undefined,
        winner: undefined,
        talents: undefined
    };
    uniqueGame.gameId = row.childNodes[0].firstChild.text;
    uniqueGame.gameDate = row.childNodes[1].text;
    uniqueGame.gameType = row.childNodes[2].text;
    uniqueGame.gameMap = row.childNodes[3].text;
    uniqueGame.hero = row.childNodes[4].firstChild.firstChild.childNodes[2].firstChild.firstChild.firstChild.text;
    uniqueGame.winner = row.childNodes[5].text;
    // lets build the talents real quick
    var talents = row.childNodes[6].firstChild.childNodes;
    const listTalents = [];
    for(var talentIt = 0; talentIt < talents.length; talentIt++){
        var talentNode = talents[talentIt];
        var t = talentNode.childNodes[1].firstChild.firstChild.firstChild.text;
        listTalents.push(t);
    // console.log(t)    
    }
    uniqueGame.talents = listTalents;
    gameData.push(uniqueGame);
// all this was debug research to understand the DOM Tree
// for(var childIt = 0; childIt < row.childNodes.length; childIt++)
// {   
//     var child = row.childNodes[childIt];
//     var gameStat = child.firstChild;
//     if(gameStat.nodeType == 3)
//     {
//         //TextNode - we are logging the Game Data, Type, and Map
//         var output = gameStat.text;
//         console.log("row[" +tableIt+"] child["+childIt +"] "+ output);
//     }
//     else
//     {
//         //HTMLElement - in this case, it will be one of three HTMLElements that occur on this level. 
//         // It will contain either the Game ID, the Hero or Talents picket.
//         //console.log(gameStat);
//         if(gameStat.firstChild.nodeType == 3)
//         {
//             // in the first case (Game ID), it will be contained in the first and only childNode which will be a text node containing the game ID as raw text
//             var output = gameStat.firstChild.text;
//             console.log("row[" +tableIt+"] child["+childIt +"] "+ output);
//         }
//         else
//         {
//             // in the second case (Hero), we find a heavily nested div. the hero name will be contained in X
//             // firstChild is an HTMLElement; we want its third child 
//             if(gameStat.firstChild.childNodes.length == 3)
//             {
//                 var output = gameStat.firstChild.childNodes[2].firstChild.firstChild.firstChild._rawText; 
//                 console.log("row[" +tableIt+"] child["+childIt +"] "+ output);
//             }
//             else
//             {
//                 // in the third case (Talents), we don't care for now; size of firstChild.childNodes should more than 3 in this case
//                 var talents = gameStat.childNodes;
//                 const listTalents = [];
//                 for(var talentIt = 0; talentIt < talents.length; talentIt++)
//                 {
//                     var talentNode = talents[talentIt];
//                     var t = talentNode.childNodes[1].firstChild.firstChild.firstChild.text;
//                     listTalents.push(t);
//                     // console.log(t)    
//                 } 
//                 var output = listTalents;
//                 console.log("row[" +tableIt+"] child["+childIt +"] "+ output);
//             }
//         }
//     }
// }
}
// console.log('👉', data);
// function stringify(obj) {
//     let cache = [];
//     let str = JSON.stringify(obj, function(key, value) {
//       if (typeof value === "object" && value !== null) {
//         if (cache.indexOf(value) !== -1) {
//           // Circular reference found, discard key
//           return;
//         }
//         // Store value in our collection
//         cache.push(value);
//       }
//       return value;
//     });
//     cache = null; // reset the cache
//     return str;
//   }
fs.writeFile("./data/gameData.json", JSON.stringify(gameData), function(err) {
    if (err) throw err;
    console.log("complete");
});

},{"19ccc2b412f7d0e9":"bsHDH","b3ae310d6aa1d30d":"jhUEF"}],"bsHDH":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NodeType = exports.TextNode = exports.Node = exports.valid = exports.CommentNode = exports.HTMLElement = exports.parse = void 0;
var comment_1 = __importDefault(require("57bb4de10b863838"));
exports.CommentNode = comment_1.default;
var html_1 = __importDefault(require("335a6dee42acee83"));
exports.HTMLElement = html_1.default;
var node_1 = __importDefault(require("9454ea8deb67a0bd"));
exports.Node = node_1.default;
var text_1 = __importDefault(require("773236a605f4082e"));
exports.TextNode = text_1.default;
var type_1 = __importDefault(require("dbcf29fa450e0446"));
exports.NodeType = type_1.default;
var parse_1 = __importDefault(require("d23a9f584d50a3e7"));
var valid_1 = __importDefault(require("bccf5f715f9232f7"));
exports.valid = valid_1.default;
function parse(data, options) {
    if (options === void 0) options = {};
    return (0, parse_1.default)(data, options);
}
exports.default = parse;
exports.parse = parse;
parse.parse = parse_1.default;
parse.HTMLElement = html_1.default;
parse.CommentNode = comment_1.default;
parse.valid = valid_1.default;
parse.Node = node_1.default;
parse.TextNode = text_1.default;
parse.NodeType = type_1.default;

},{"57bb4de10b863838":"bR2OI","335a6dee42acee83":"8Cy27","9454ea8deb67a0bd":"gd8Te","773236a605f4082e":"2O1SC","dbcf29fa450e0446":"lycDL","d23a9f584d50a3e7":"gsUOd","bccf5f715f9232f7":"8F3jJ"}],"bR2OI":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
var node_1 = __importDefault(require("82b8346bf9a91644"));
var type_1 = __importDefault(require("108b9ed8d5cc493d"));
var CommentNode = /** @class */ function(_super) {
    __extends(CommentNode, _super);
    function CommentNode(rawText, parentNode, range, rawTagName) {
        if (parentNode === void 0) parentNode = null;
        if (rawTagName === void 0) rawTagName = "!--";
        var _this = _super.call(this, parentNode, range) || this;
        _this.rawText = rawText;
        _this.rawTagName = rawTagName;
        /**
         * Node Type declaration.
         * @type {Number}
         */ _this.nodeType = type_1.default.COMMENT_NODE;
        return _this;
    }
    CommentNode.prototype.clone = function() {
        return new CommentNode(this.rawText, null, undefined, this.rawTagName);
    };
    Object.defineProperty(CommentNode.prototype, "text", {
        /**
         * Get unescaped text value of current node and its children.
         * @return {string} text content
         */ get: function() {
            return this.rawText;
        },
        enumerable: false,
        configurable: true
    });
    CommentNode.prototype.toString = function() {
        return "<!--".concat(this.rawText, "-->");
    };
    return CommentNode;
}(node_1.default);
exports.default = CommentNode;

},{"82b8346bf9a91644":"gd8Te","108b9ed8d5cc493d":"lycDL"}],"gd8Te":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var he_1 = require("c0b41d339b0de469");
/**
 * Node Class as base class for TextNode and HTMLElement.
 */ var Node = /** @class */ function() {
    function Node(parentNode, range) {
        if (parentNode === void 0) parentNode = null;
        this.parentNode = parentNode;
        this.childNodes = [];
        Object.defineProperty(this, "range", {
            enumerable: false,
            writable: true,
            configurable: true,
            value: range !== null && range !== void 0 ? range : [
                -1,
                -1
            ]
        });
    }
    /**
     * Remove current node
     */ Node.prototype.remove = function() {
        var _this = this;
        if (this.parentNode) {
            var children = this.parentNode.childNodes;
            this.parentNode.childNodes = children.filter(function(child) {
                return _this !== child;
            });
            this.parentNode = null;
        }
        return this;
    };
    Object.defineProperty(Node.prototype, "innerText", {
        get: function() {
            return this.rawText;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "textContent", {
        get: function() {
            return (0, he_1.decode)(this.rawText);
        },
        set: function(val) {
            this.rawText = (0, he_1.encode)(val);
        },
        enumerable: false,
        configurable: true
    });
    return Node;
}();
exports.default = Node;

},{"c0b41d339b0de469":"37RbC"}],"37RbC":[function(require,module,exports) {
var global = arguments[3];
(function(root) {
    // Detect free variables `exports`.
    var freeExports = exports;
    // Detect free variable `module`.
    var freeModule = module && module.exports == freeExports && module;
    // Detect free variable `global`, from Node.js or Browserified code,
    // and use it as `root`.
    var freeGlobal = typeof global == "object" && global;
    if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) root = freeGlobal;
    /*--------------------------------------------------------------------------*/ // All astral symbols.
    var regexAstralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
    // All ASCII symbols (not just printable ASCII) except those listed in the
    // first column of the overrides table.
    // https://html.spec.whatwg.org/multipage/syntax.html#table-charref-overrides
    var regexAsciiWhitelist = /[\x01-\x7F]/g;
    // All BMP symbols that are not ASCII newlines, printable ASCII symbols, or
    // code points listed in the first column of the overrides table on
    // https://html.spec.whatwg.org/multipage/syntax.html#table-charref-overrides.
    var regexBmpWhitelist = /[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g;
    var regexEncodeNonAscii = /<\u20D2|=\u20E5|>\u20D2|\u205F\u200A|\u219D\u0338|\u2202\u0338|\u2220\u20D2|\u2229\uFE00|\u222A\uFE00|\u223C\u20D2|\u223D\u0331|\u223E\u0333|\u2242\u0338|\u224B\u0338|\u224D\u20D2|\u224E\u0338|\u224F\u0338|\u2250\u0338|\u2261\u20E5|\u2264\u20D2|\u2265\u20D2|\u2266\u0338|\u2267\u0338|\u2268\uFE00|\u2269\uFE00|\u226A\u0338|\u226A\u20D2|\u226B\u0338|\u226B\u20D2|\u227F\u0338|\u2282\u20D2|\u2283\u20D2|\u228A\uFE00|\u228B\uFE00|\u228F\u0338|\u2290\u0338|\u2293\uFE00|\u2294\uFE00|\u22B4\u20D2|\u22B5\u20D2|\u22D8\u0338|\u22D9\u0338|\u22DA\uFE00|\u22DB\uFE00|\u22F5\u0338|\u22F9\u0338|\u2933\u0338|\u29CF\u0338|\u29D0\u0338|\u2A6D\u0338|\u2A70\u0338|\u2A7D\u0338|\u2A7E\u0338|\u2AA1\u0338|\u2AA2\u0338|\u2AAC\uFE00|\u2AAD\uFE00|\u2AAF\u0338|\u2AB0\u0338|\u2AC5\u0338|\u2AC6\u0338|\u2ACB\uFE00|\u2ACC\uFE00|\u2AFD\u20E5|[\xA0-\u0113\u0116-\u0122\u0124-\u012B\u012E-\u014D\u0150-\u017E\u0192\u01B5\u01F5\u0237\u02C6\u02C7\u02D8-\u02DD\u0311\u0391-\u03A1\u03A3-\u03A9\u03B1-\u03C9\u03D1\u03D2\u03D5\u03D6\u03DC\u03DD\u03F0\u03F1\u03F5\u03F6\u0401-\u040C\u040E-\u044F\u0451-\u045C\u045E\u045F\u2002-\u2005\u2007-\u2010\u2013-\u2016\u2018-\u201A\u201C-\u201E\u2020-\u2022\u2025\u2026\u2030-\u2035\u2039\u203A\u203E\u2041\u2043\u2044\u204F\u2057\u205F-\u2063\u20AC\u20DB\u20DC\u2102\u2105\u210A-\u2113\u2115-\u211E\u2122\u2124\u2127-\u2129\u212C\u212D\u212F-\u2131\u2133-\u2138\u2145-\u2148\u2153-\u215E\u2190-\u219B\u219D-\u21A7\u21A9-\u21AE\u21B0-\u21B3\u21B5-\u21B7\u21BA-\u21DB\u21DD\u21E4\u21E5\u21F5\u21FD-\u2205\u2207-\u2209\u220B\u220C\u220F-\u2214\u2216-\u2218\u221A\u221D-\u2238\u223A-\u2257\u2259\u225A\u225C\u225F-\u2262\u2264-\u228B\u228D-\u229B\u229D-\u22A5\u22A7-\u22B0\u22B2-\u22BB\u22BD-\u22DB\u22DE-\u22E3\u22E6-\u22F7\u22F9-\u22FE\u2305\u2306\u2308-\u2310\u2312\u2313\u2315\u2316\u231C-\u231F\u2322\u2323\u232D\u232E\u2336\u233D\u233F\u237C\u23B0\u23B1\u23B4-\u23B6\u23DC-\u23DF\u23E2\u23E7\u2423\u24C8\u2500\u2502\u250C\u2510\u2514\u2518\u251C\u2524\u252C\u2534\u253C\u2550-\u256C\u2580\u2584\u2588\u2591-\u2593\u25A1\u25AA\u25AB\u25AD\u25AE\u25B1\u25B3-\u25B5\u25B8\u25B9\u25BD-\u25BF\u25C2\u25C3\u25CA\u25CB\u25EC\u25EF\u25F8-\u25FC\u2605\u2606\u260E\u2640\u2642\u2660\u2663\u2665\u2666\u266A\u266D-\u266F\u2713\u2717\u2720\u2736\u2758\u2772\u2773\u27C8\u27C9\u27E6-\u27ED\u27F5-\u27FA\u27FC\u27FF\u2902-\u2905\u290C-\u2913\u2916\u2919-\u2920\u2923-\u292A\u2933\u2935-\u2939\u293C\u293D\u2945\u2948-\u294B\u294E-\u2976\u2978\u2979\u297B-\u297F\u2985\u2986\u298B-\u2996\u299A\u299C\u299D\u29A4-\u29B7\u29B9\u29BB\u29BC\u29BE-\u29C5\u29C9\u29CD-\u29D0\u29DC-\u29DE\u29E3-\u29E5\u29EB\u29F4\u29F6\u2A00-\u2A02\u2A04\u2A06\u2A0C\u2A0D\u2A10-\u2A17\u2A22-\u2A27\u2A29\u2A2A\u2A2D-\u2A31\u2A33-\u2A3C\u2A3F\u2A40\u2A42-\u2A4D\u2A50\u2A53-\u2A58\u2A5A-\u2A5D\u2A5F\u2A66\u2A6A\u2A6D-\u2A75\u2A77-\u2A9A\u2A9D-\u2AA2\u2AA4-\u2AB0\u2AB3-\u2AC8\u2ACB\u2ACC\u2ACF-\u2ADB\u2AE4\u2AE6-\u2AE9\u2AEB-\u2AF3\u2AFD\uFB00-\uFB04]|\uD835[\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDD6B]/g;
    var encodeMap = {
        "\xad": "shy",
        "\u200C": "zwnj",
        "\u200D": "zwj",
        "\u200E": "lrm",
        "\u2063": "ic",
        "\u2062": "it",
        "\u2061": "af",
        "\u200F": "rlm",
        "\u200B": "ZeroWidthSpace",
        "\u2060": "NoBreak",
        "\u0311": "DownBreve",
        "\u20DB": "tdot",
        "\u20DC": "DotDot",
        "	": "Tab",
        "\n": "NewLine",
        "\u2008": "puncsp",
        "\u205F": "MediumSpace",
        "\u2009": "thinsp",
        "\u200A": "hairsp",
        "\u2004": "emsp13",
        "\u2002": "ensp",
        "\u2005": "emsp14",
        "\u2003": "emsp",
        "\u2007": "numsp",
        "\xa0": "nbsp",
        "\u205F\u200A": "ThickSpace",
        "\u203E": "oline",
        "_": "lowbar",
        "\u2010": "dash",
        "\u2013": "ndash",
        "\u2014": "mdash",
        "\u2015": "horbar",
        ",": "comma",
        ";": "semi",
        "\u204F": "bsemi",
        ":": "colon",
        "\u2A74": "Colone",
        "!": "excl",
        "\xa1": "iexcl",
        "?": "quest",
        "\xbf": "iquest",
        ".": "period",
        "\u2025": "nldr",
        "\u2026": "mldr",
        "\xb7": "middot",
        "'": "apos",
        "\u2018": "lsquo",
        "\u2019": "rsquo",
        "\u201A": "sbquo",
        "\u2039": "lsaquo",
        "\u203A": "rsaquo",
        '"': "quot",
        "\u201C": "ldquo",
        "\u201D": "rdquo",
        "\u201E": "bdquo",
        "\xab": "laquo",
        "\xbb": "raquo",
        "(": "lpar",
        ")": "rpar",
        "[": "lsqb",
        "]": "rsqb",
        "{": "lcub",
        "}": "rcub",
        "\u2308": "lceil",
        "\u2309": "rceil",
        "\u230A": "lfloor",
        "\u230B": "rfloor",
        "\u2985": "lopar",
        "\u2986": "ropar",
        "\u298B": "lbrke",
        "\u298C": "rbrke",
        "\u298D": "lbrkslu",
        "\u298E": "rbrksld",
        "\u298F": "lbrksld",
        "\u2990": "rbrkslu",
        "\u2991": "langd",
        "\u2992": "rangd",
        "\u2993": "lparlt",
        "\u2994": "rpargt",
        "\u2995": "gtlPar",
        "\u2996": "ltrPar",
        "\u27E6": "lobrk",
        "\u27E7": "robrk",
        "\u27E8": "lang",
        "\u27E9": "rang",
        "\u27EA": "Lang",
        "\u27EB": "Rang",
        "\u27EC": "loang",
        "\u27ED": "roang",
        "\u2772": "lbbrk",
        "\u2773": "rbbrk",
        "\u2016": "Vert",
        "\xa7": "sect",
        "\xb6": "para",
        "@": "commat",
        "*": "ast",
        "/": "sol",
        "undefined": null,
        "&": "amp",
        "#": "num",
        "%": "percnt",
        "\u2030": "permil",
        "\u2031": "pertenk",
        "\u2020": "dagger",
        "\u2021": "Dagger",
        "\u2022": "bull",
        "\u2043": "hybull",
        "\u2032": "prime",
        "\u2033": "Prime",
        "\u2034": "tprime",
        "\u2057": "qprime",
        "\u2035": "bprime",
        "\u2041": "caret",
        "`": "grave",
        "\xb4": "acute",
        "\u02DC": "tilde",
        "^": "Hat",
        "\xaf": "macr",
        "\u02D8": "breve",
        "\u02D9": "dot",
        "\xa8": "die",
        "\u02DA": "ring",
        "\u02DD": "dblac",
        "\xb8": "cedil",
        "\u02DB": "ogon",
        "\u02C6": "circ",
        "\u02C7": "caron",
        "\xb0": "deg",
        "\xa9": "copy",
        "\xae": "reg",
        "\u2117": "copysr",
        "\u2118": "wp",
        "\u211E": "rx",
        "\u2127": "mho",
        "\u2129": "iiota",
        "\u2190": "larr",
        "\u219A": "nlarr",
        "\u2192": "rarr",
        "\u219B": "nrarr",
        "\u2191": "uarr",
        "\u2193": "darr",
        "\u2194": "harr",
        "\u21AE": "nharr",
        "\u2195": "varr",
        "\u2196": "nwarr",
        "\u2197": "nearr",
        "\u2198": "searr",
        "\u2199": "swarr",
        "\u219D": "rarrw",
        "\u219D\u0338": "nrarrw",
        "\u219E": "Larr",
        "\u219F": "Uarr",
        "\u21A0": "Rarr",
        "\u21A1": "Darr",
        "\u21A2": "larrtl",
        "\u21A3": "rarrtl",
        "\u21A4": "mapstoleft",
        "\u21A5": "mapstoup",
        "\u21A6": "map",
        "\u21A7": "mapstodown",
        "\u21A9": "larrhk",
        "\u21AA": "rarrhk",
        "\u21AB": "larrlp",
        "\u21AC": "rarrlp",
        "\u21AD": "harrw",
        "\u21B0": "lsh",
        "\u21B1": "rsh",
        "\u21B2": "ldsh",
        "\u21B3": "rdsh",
        "\u21B5": "crarr",
        "\u21B6": "cularr",
        "\u21B7": "curarr",
        "\u21BA": "olarr",
        "\u21BB": "orarr",
        "\u21BC": "lharu",
        "\u21BD": "lhard",
        "\u21BE": "uharr",
        "\u21BF": "uharl",
        "\u21C0": "rharu",
        "\u21C1": "rhard",
        "\u21C2": "dharr",
        "\u21C3": "dharl",
        "\u21C4": "rlarr",
        "\u21C5": "udarr",
        "\u21C6": "lrarr",
        "\u21C7": "llarr",
        "\u21C8": "uuarr",
        "\u21C9": "rrarr",
        "\u21CA": "ddarr",
        "\u21CB": "lrhar",
        "\u21CC": "rlhar",
        "\u21D0": "lArr",
        "\u21CD": "nlArr",
        "\u21D1": "uArr",
        "\u21D2": "rArr",
        "\u21CF": "nrArr",
        "\u21D3": "dArr",
        "\u21D4": "iff",
        "\u21CE": "nhArr",
        "\u21D5": "vArr",
        "\u21D6": "nwArr",
        "\u21D7": "neArr",
        "\u21D8": "seArr",
        "\u21D9": "swArr",
        "\u21DA": "lAarr",
        "\u21DB": "rAarr",
        "\u21DD": "zigrarr",
        "\u21E4": "larrb",
        "\u21E5": "rarrb",
        "\u21F5": "duarr",
        "\u21FD": "loarr",
        "\u21FE": "roarr",
        "\u21FF": "hoarr",
        "\u2200": "forall",
        "\u2201": "comp",
        "\u2202": "part",
        "\u2202\u0338": "npart",
        "\u2203": "exist",
        "\u2204": "nexist",
        "\u2205": "empty",
        "\u2207": "Del",
        "\u2208": "in",
        "\u2209": "notin",
        "\u220B": "ni",
        "\u220C": "notni",
        "\u03F6": "bepsi",
        "\u220F": "prod",
        "\u2210": "coprod",
        "\u2211": "sum",
        "+": "plus",
        "\xb1": "pm",
        "\xf7": "div",
        "\xd7": "times",
        "<": "lt",
        "\u226E": "nlt",
        "<\u20D2": "nvlt",
        "=": "equals",
        "\u2260": "ne",
        "=\u20E5": "bne",
        "\u2A75": "Equal",
        ">": "gt",
        "\u226F": "ngt",
        ">\u20D2": "nvgt",
        "\xac": "not",
        "|": "vert",
        "\xa6": "brvbar",
        "\u2212": "minus",
        "\u2213": "mp",
        "\u2214": "plusdo",
        "\u2044": "frasl",
        "\u2216": "setmn",
        "\u2217": "lowast",
        "\u2218": "compfn",
        "\u221A": "Sqrt",
        "\u221D": "prop",
        "\u221E": "infin",
        "\u221F": "angrt",
        "\u2220": "ang",
        "\u2220\u20D2": "nang",
        "\u2221": "angmsd",
        "\u2222": "angsph",
        "\u2223": "mid",
        "\u2224": "nmid",
        "\u2225": "par",
        "\u2226": "npar",
        "\u2227": "and",
        "\u2228": "or",
        "\u2229": "cap",
        "\u2229\uFE00": "caps",
        "\u222A": "cup",
        "\u222A\uFE00": "cups",
        "\u222B": "int",
        "\u222C": "Int",
        "\u222D": "tint",
        "\u2A0C": "qint",
        "\u222E": "oint",
        "\u222F": "Conint",
        "\u2230": "Cconint",
        "\u2231": "cwint",
        "\u2232": "cwconint",
        "\u2233": "awconint",
        "\u2234": "there4",
        "\u2235": "becaus",
        "\u2236": "ratio",
        "\u2237": "Colon",
        "\u2238": "minusd",
        "\u223A": "mDDot",
        "\u223B": "homtht",
        "\u223C": "sim",
        "\u2241": "nsim",
        "\u223C\u20D2": "nvsim",
        "\u223D": "bsim",
        "\u223D\u0331": "race",
        "\u223E": "ac",
        "\u223E\u0333": "acE",
        "\u223F": "acd",
        "\u2240": "wr",
        "\u2242": "esim",
        "\u2242\u0338": "nesim",
        "\u2243": "sime",
        "\u2244": "nsime",
        "\u2245": "cong",
        "\u2247": "ncong",
        "\u2246": "simne",
        "\u2248": "ap",
        "\u2249": "nap",
        "\u224A": "ape",
        "\u224B": "apid",
        "\u224B\u0338": "napid",
        "\u224C": "bcong",
        "\u224D": "CupCap",
        "\u226D": "NotCupCap",
        "\u224D\u20D2": "nvap",
        "\u224E": "bump",
        "\u224E\u0338": "nbump",
        "\u224F": "bumpe",
        "\u224F\u0338": "nbumpe",
        "\u2250": "doteq",
        "\u2250\u0338": "nedot",
        "\u2251": "eDot",
        "\u2252": "efDot",
        "\u2253": "erDot",
        "\u2254": "colone",
        "\u2255": "ecolon",
        "\u2256": "ecir",
        "\u2257": "cire",
        "\u2259": "wedgeq",
        "\u225A": "veeeq",
        "\u225C": "trie",
        "\u225F": "equest",
        "\u2261": "equiv",
        "\u2262": "nequiv",
        "\u2261\u20E5": "bnequiv",
        "\u2264": "le",
        "\u2270": "nle",
        "\u2264\u20D2": "nvle",
        "\u2265": "ge",
        "\u2271": "nge",
        "\u2265\u20D2": "nvge",
        "\u2266": "lE",
        "\u2266\u0338": "nlE",
        "\u2267": "gE",
        "\u2267\u0338": "ngE",
        "\u2268\uFE00": "lvnE",
        "\u2268": "lnE",
        "\u2269": "gnE",
        "\u2269\uFE00": "gvnE",
        "\u226A": "ll",
        "\u226A\u0338": "nLtv",
        "\u226A\u20D2": "nLt",
        "\u226B": "gg",
        "\u226B\u0338": "nGtv",
        "\u226B\u20D2": "nGt",
        "\u226C": "twixt",
        "\u2272": "lsim",
        "\u2274": "nlsim",
        "\u2273": "gsim",
        "\u2275": "ngsim",
        "\u2276": "lg",
        "\u2278": "ntlg",
        "\u2277": "gl",
        "\u2279": "ntgl",
        "\u227A": "pr",
        "\u2280": "npr",
        "\u227B": "sc",
        "\u2281": "nsc",
        "\u227C": "prcue",
        "\u22E0": "nprcue",
        "\u227D": "sccue",
        "\u22E1": "nsccue",
        "\u227E": "prsim",
        "\u227F": "scsim",
        "\u227F\u0338": "NotSucceedsTilde",
        "\u2282": "sub",
        "\u2284": "nsub",
        "\u2282\u20D2": "vnsub",
        "\u2283": "sup",
        "\u2285": "nsup",
        "\u2283\u20D2": "vnsup",
        "\u2286": "sube",
        "\u2288": "nsube",
        "\u2287": "supe",
        "\u2289": "nsupe",
        "\u228A\uFE00": "vsubne",
        "\u228A": "subne",
        "\u228B\uFE00": "vsupne",
        "\u228B": "supne",
        "\u228D": "cupdot",
        "\u228E": "uplus",
        "\u228F": "sqsub",
        "\u228F\u0338": "NotSquareSubset",
        "\u2290": "sqsup",
        "\u2290\u0338": "NotSquareSuperset",
        "\u2291": "sqsube",
        "\u22E2": "nsqsube",
        "\u2292": "sqsupe",
        "\u22E3": "nsqsupe",
        "\u2293": "sqcap",
        "\u2293\uFE00": "sqcaps",
        "\u2294": "sqcup",
        "\u2294\uFE00": "sqcups",
        "\u2295": "oplus",
        "\u2296": "ominus",
        "\u2297": "otimes",
        "\u2298": "osol",
        "\u2299": "odot",
        "\u229A": "ocir",
        "\u229B": "oast",
        "\u229D": "odash",
        "\u229E": "plusb",
        "\u229F": "minusb",
        "\u22A0": "timesb",
        "\u22A1": "sdotb",
        "\u22A2": "vdash",
        "\u22AC": "nvdash",
        "\u22A3": "dashv",
        "\u22A4": "top",
        "\u22A5": "bot",
        "\u22A7": "models",
        "\u22A8": "vDash",
        "\u22AD": "nvDash",
        "\u22A9": "Vdash",
        "\u22AE": "nVdash",
        "\u22AA": "Vvdash",
        "\u22AB": "VDash",
        "\u22AF": "nVDash",
        "\u22B0": "prurel",
        "\u22B2": "vltri",
        "\u22EA": "nltri",
        "\u22B3": "vrtri",
        "\u22EB": "nrtri",
        "\u22B4": "ltrie",
        "\u22EC": "nltrie",
        "\u22B4\u20D2": "nvltrie",
        "\u22B5": "rtrie",
        "\u22ED": "nrtrie",
        "\u22B5\u20D2": "nvrtrie",
        "\u22B6": "origof",
        "\u22B7": "imof",
        "\u22B8": "mumap",
        "\u22B9": "hercon",
        "\u22BA": "intcal",
        "\u22BB": "veebar",
        "\u22BD": "barvee",
        "\u22BE": "angrtvb",
        "\u22BF": "lrtri",
        "\u22C0": "Wedge",
        "\u22C1": "Vee",
        "\u22C2": "xcap",
        "\u22C3": "xcup",
        "\u22C4": "diam",
        "\u22C5": "sdot",
        "\u22C6": "Star",
        "\u22C7": "divonx",
        "\u22C8": "bowtie",
        "\u22C9": "ltimes",
        "\u22CA": "rtimes",
        "\u22CB": "lthree",
        "\u22CC": "rthree",
        "\u22CD": "bsime",
        "\u22CE": "cuvee",
        "\u22CF": "cuwed",
        "\u22D0": "Sub",
        "\u22D1": "Sup",
        "\u22D2": "Cap",
        "\u22D3": "Cup",
        "\u22D4": "fork",
        "\u22D5": "epar",
        "\u22D6": "ltdot",
        "\u22D7": "gtdot",
        "\u22D8": "Ll",
        "\u22D8\u0338": "nLl",
        "\u22D9": "Gg",
        "\u22D9\u0338": "nGg",
        "\u22DA\uFE00": "lesg",
        "\u22DA": "leg",
        "\u22DB": "gel",
        "\u22DB\uFE00": "gesl",
        "\u22DE": "cuepr",
        "\u22DF": "cuesc",
        "\u22E6": "lnsim",
        "\u22E7": "gnsim",
        "\u22E8": "prnsim",
        "\u22E9": "scnsim",
        "\u22EE": "vellip",
        "\u22EF": "ctdot",
        "\u22F0": "utdot",
        "\u22F1": "dtdot",
        "\u22F2": "disin",
        "\u22F3": "isinsv",
        "\u22F4": "isins",
        "\u22F5": "isindot",
        "\u22F5\u0338": "notindot",
        "\u22F6": "notinvc",
        "\u22F7": "notinvb",
        "\u22F9": "isinE",
        "\u22F9\u0338": "notinE",
        "\u22FA": "nisd",
        "\u22FB": "xnis",
        "\u22FC": "nis",
        "\u22FD": "notnivc",
        "\u22FE": "notnivb",
        "\u2305": "barwed",
        "\u2306": "Barwed",
        "\u230C": "drcrop",
        "\u230D": "dlcrop",
        "\u230E": "urcrop",
        "\u230F": "ulcrop",
        "\u2310": "bnot",
        "\u2312": "profline",
        "\u2313": "profsurf",
        "\u2315": "telrec",
        "\u2316": "target",
        "\u231C": "ulcorn",
        "\u231D": "urcorn",
        "\u231E": "dlcorn",
        "\u231F": "drcorn",
        "\u2322": "frown",
        "\u2323": "smile",
        "\u232D": "cylcty",
        "\u232E": "profalar",
        "\u2336": "topbot",
        "\u233D": "ovbar",
        "\u233F": "solbar",
        "\u237C": "angzarr",
        "\u23B0": "lmoust",
        "\u23B1": "rmoust",
        "\u23B4": "tbrk",
        "\u23B5": "bbrk",
        "\u23B6": "bbrktbrk",
        "\u23DC": "OverParenthesis",
        "\u23DD": "UnderParenthesis",
        "\u23DE": "OverBrace",
        "\u23DF": "UnderBrace",
        "\u23E2": "trpezium",
        "\u23E7": "elinters",
        "\u2423": "blank",
        "\u2500": "boxh",
        "\u2502": "boxv",
        "\u250C": "boxdr",
        "\u2510": "boxdl",
        "\u2514": "boxur",
        "\u2518": "boxul",
        "\u251C": "boxvr",
        "\u2524": "boxvl",
        "\u252C": "boxhd",
        "\u2534": "boxhu",
        "\u253C": "boxvh",
        "\u2550": "boxH",
        "\u2551": "boxV",
        "\u2552": "boxdR",
        "\u2553": "boxDr",
        "\u2554": "boxDR",
        "\u2555": "boxdL",
        "\u2556": "boxDl",
        "\u2557": "boxDL",
        "\u2558": "boxuR",
        "\u2559": "boxUr",
        "\u255A": "boxUR",
        "\u255B": "boxuL",
        "\u255C": "boxUl",
        "\u255D": "boxUL",
        "\u255E": "boxvR",
        "\u255F": "boxVr",
        "\u2560": "boxVR",
        "\u2561": "boxvL",
        "\u2562": "boxVl",
        "\u2563": "boxVL",
        "\u2564": "boxHd",
        "\u2565": "boxhD",
        "\u2566": "boxHD",
        "\u2567": "boxHu",
        "\u2568": "boxhU",
        "\u2569": "boxHU",
        "\u256A": "boxvH",
        "\u256B": "boxVh",
        "\u256C": "boxVH",
        "\u2580": "uhblk",
        "\u2584": "lhblk",
        "\u2588": "block",
        "\u2591": "blk14",
        "\u2592": "blk12",
        "\u2593": "blk34",
        "\u25A1": "squ",
        "\u25AA": "squf",
        "\u25AB": "EmptyVerySmallSquare",
        "\u25AD": "rect",
        "\u25AE": "marker",
        "\u25B1": "fltns",
        "\u25B3": "xutri",
        "\u25B4": "utrif",
        "\u25B5": "utri",
        "\u25B8": "rtrif",
        "\u25B9": "rtri",
        "\u25BD": "xdtri",
        "\u25BE": "dtrif",
        "\u25BF": "dtri",
        "\u25C2": "ltrif",
        "\u25C3": "ltri",
        "\u25CA": "loz",
        "\u25CB": "cir",
        "\u25EC": "tridot",
        "\u25EF": "xcirc",
        "\u25F8": "ultri",
        "\u25F9": "urtri",
        "\u25FA": "lltri",
        "\u25FB": "EmptySmallSquare",
        "\u25FC": "FilledSmallSquare",
        "\u2605": "starf",
        "\u2606": "star",
        "\u260E": "phone",
        "\u2640": "female",
        "\u2642": "male",
        "\u2660": "spades",
        "\u2663": "clubs",
        "\u2665": "hearts",
        "\u2666": "diams",
        "\u266A": "sung",
        "\u2713": "check",
        "\u2717": "cross",
        "\u2720": "malt",
        "\u2736": "sext",
        "\u2758": "VerticalSeparator",
        "\u27C8": "bsolhsub",
        "\u27C9": "suphsol",
        "\u27F5": "xlarr",
        "\u27F6": "xrarr",
        "\u27F7": "xharr",
        "\u27F8": "xlArr",
        "\u27F9": "xrArr",
        "\u27FA": "xhArr",
        "\u27FC": "xmap",
        "\u27FF": "dzigrarr",
        "\u2902": "nvlArr",
        "\u2903": "nvrArr",
        "\u2904": "nvHarr",
        "\u2905": "Map",
        "\u290C": "lbarr",
        "\u290D": "rbarr",
        "\u290E": "lBarr",
        "\u290F": "rBarr",
        "\u2910": "RBarr",
        "\u2911": "DDotrahd",
        "\u2912": "UpArrowBar",
        "\u2913": "DownArrowBar",
        "\u2916": "Rarrtl",
        "\u2919": "latail",
        "\u291A": "ratail",
        "\u291B": "lAtail",
        "\u291C": "rAtail",
        "\u291D": "larrfs",
        "\u291E": "rarrfs",
        "\u291F": "larrbfs",
        "\u2920": "rarrbfs",
        "\u2923": "nwarhk",
        "\u2924": "nearhk",
        "\u2925": "searhk",
        "\u2926": "swarhk",
        "\u2927": "nwnear",
        "\u2928": "toea",
        "\u2929": "tosa",
        "\u292A": "swnwar",
        "\u2933": "rarrc",
        "\u2933\u0338": "nrarrc",
        "\u2935": "cudarrr",
        "\u2936": "ldca",
        "\u2937": "rdca",
        "\u2938": "cudarrl",
        "\u2939": "larrpl",
        "\u293C": "curarrm",
        "\u293D": "cularrp",
        "\u2945": "rarrpl",
        "\u2948": "harrcir",
        "\u2949": "Uarrocir",
        "\u294A": "lurdshar",
        "\u294B": "ldrushar",
        "\u294E": "LeftRightVector",
        "\u294F": "RightUpDownVector",
        "\u2950": "DownLeftRightVector",
        "\u2951": "LeftUpDownVector",
        "\u2952": "LeftVectorBar",
        "\u2953": "RightVectorBar",
        "\u2954": "RightUpVectorBar",
        "\u2955": "RightDownVectorBar",
        "\u2956": "DownLeftVectorBar",
        "\u2957": "DownRightVectorBar",
        "\u2958": "LeftUpVectorBar",
        "\u2959": "LeftDownVectorBar",
        "\u295A": "LeftTeeVector",
        "\u295B": "RightTeeVector",
        "\u295C": "RightUpTeeVector",
        "\u295D": "RightDownTeeVector",
        "\u295E": "DownLeftTeeVector",
        "\u295F": "DownRightTeeVector",
        "\u2960": "LeftUpTeeVector",
        "\u2961": "LeftDownTeeVector",
        "\u2962": "lHar",
        "\u2963": "uHar",
        "\u2964": "rHar",
        "\u2965": "dHar",
        "\u2966": "luruhar",
        "\u2967": "ldrdhar",
        "\u2968": "ruluhar",
        "\u2969": "rdldhar",
        "\u296A": "lharul",
        "\u296B": "llhard",
        "\u296C": "rharul",
        "\u296D": "lrhard",
        "\u296E": "udhar",
        "\u296F": "duhar",
        "\u2970": "RoundImplies",
        "\u2971": "erarr",
        "\u2972": "simrarr",
        "\u2973": "larrsim",
        "\u2974": "rarrsim",
        "\u2975": "rarrap",
        "\u2976": "ltlarr",
        "\u2978": "gtrarr",
        "\u2979": "subrarr",
        "\u297B": "suplarr",
        "\u297C": "lfisht",
        "\u297D": "rfisht",
        "\u297E": "ufisht",
        "\u297F": "dfisht",
        "\u299A": "vzigzag",
        "\u299C": "vangrt",
        "\u299D": "angrtvbd",
        "\u29A4": "ange",
        "\u29A5": "range",
        "\u29A6": "dwangle",
        "\u29A7": "uwangle",
        "\u29A8": "angmsdaa",
        "\u29A9": "angmsdab",
        "\u29AA": "angmsdac",
        "\u29AB": "angmsdad",
        "\u29AC": "angmsdae",
        "\u29AD": "angmsdaf",
        "\u29AE": "angmsdag",
        "\u29AF": "angmsdah",
        "\u29B0": "bemptyv",
        "\u29B1": "demptyv",
        "\u29B2": "cemptyv",
        "\u29B3": "raemptyv",
        "\u29B4": "laemptyv",
        "\u29B5": "ohbar",
        "\u29B6": "omid",
        "\u29B7": "opar",
        "\u29B9": "operp",
        "\u29BB": "olcross",
        "\u29BC": "odsold",
        "\u29BE": "olcir",
        "\u29BF": "ofcir",
        "\u29C0": "olt",
        "\u29C1": "ogt",
        "\u29C2": "cirscir",
        "\u29C3": "cirE",
        "\u29C4": "solb",
        "\u29C5": "bsolb",
        "\u29C9": "boxbox",
        "\u29CD": "trisb",
        "\u29CE": "rtriltri",
        "\u29CF": "LeftTriangleBar",
        "\u29CF\u0338": "NotLeftTriangleBar",
        "\u29D0": "RightTriangleBar",
        "\u29D0\u0338": "NotRightTriangleBar",
        "\u29DC": "iinfin",
        "\u29DD": "infintie",
        "\u29DE": "nvinfin",
        "\u29E3": "eparsl",
        "\u29E4": "smeparsl",
        "\u29E5": "eqvparsl",
        "\u29EB": "lozf",
        "\u29F4": "RuleDelayed",
        "\u29F6": "dsol",
        "\u2A00": "xodot",
        "\u2A01": "xoplus",
        "\u2A02": "xotime",
        "\u2A04": "xuplus",
        "\u2A06": "xsqcup",
        "\u2A0D": "fpartint",
        "\u2A10": "cirfnint",
        "\u2A11": "awint",
        "\u2A12": "rppolint",
        "\u2A13": "scpolint",
        "\u2A14": "npolint",
        "\u2A15": "pointint",
        "\u2A16": "quatint",
        "\u2A17": "intlarhk",
        "\u2A22": "pluscir",
        "\u2A23": "plusacir",
        "\u2A24": "simplus",
        "\u2A25": "plusdu",
        "\u2A26": "plussim",
        "\u2A27": "plustwo",
        "\u2A29": "mcomma",
        "\u2A2A": "minusdu",
        "\u2A2D": "loplus",
        "\u2A2E": "roplus",
        "\u2A2F": "Cross",
        "\u2A30": "timesd",
        "\u2A31": "timesbar",
        "\u2A33": "smashp",
        "\u2A34": "lotimes",
        "\u2A35": "rotimes",
        "\u2A36": "otimesas",
        "\u2A37": "Otimes",
        "\u2A38": "odiv",
        "\u2A39": "triplus",
        "\u2A3A": "triminus",
        "\u2A3B": "tritime",
        "\u2A3C": "iprod",
        "\u2A3F": "amalg",
        "\u2A40": "capdot",
        "\u2A42": "ncup",
        "\u2A43": "ncap",
        "\u2A44": "capand",
        "\u2A45": "cupor",
        "\u2A46": "cupcap",
        "\u2A47": "capcup",
        "\u2A48": "cupbrcap",
        "\u2A49": "capbrcup",
        "\u2A4A": "cupcup",
        "\u2A4B": "capcap",
        "\u2A4C": "ccups",
        "\u2A4D": "ccaps",
        "\u2A50": "ccupssm",
        "\u2A53": "And",
        "\u2A54": "Or",
        "\u2A55": "andand",
        "\u2A56": "oror",
        "\u2A57": "orslope",
        "\u2A58": "andslope",
        "\u2A5A": "andv",
        "\u2A5B": "orv",
        "\u2A5C": "andd",
        "\u2A5D": "ord",
        "\u2A5F": "wedbar",
        "\u2A66": "sdote",
        "\u2A6A": "simdot",
        "\u2A6D": "congdot",
        "\u2A6D\u0338": "ncongdot",
        "\u2A6E": "easter",
        "\u2A6F": "apacir",
        "\u2A70": "apE",
        "\u2A70\u0338": "napE",
        "\u2A71": "eplus",
        "\u2A72": "pluse",
        "\u2A73": "Esim",
        "\u2A77": "eDDot",
        "\u2A78": "equivDD",
        "\u2A79": "ltcir",
        "\u2A7A": "gtcir",
        "\u2A7B": "ltquest",
        "\u2A7C": "gtquest",
        "\u2A7D": "les",
        "\u2A7D\u0338": "nles",
        "\u2A7E": "ges",
        "\u2A7E\u0338": "nges",
        "\u2A7F": "lesdot",
        "\u2A80": "gesdot",
        "\u2A81": "lesdoto",
        "\u2A82": "gesdoto",
        "\u2A83": "lesdotor",
        "\u2A84": "gesdotol",
        "\u2A85": "lap",
        "\u2A86": "gap",
        "\u2A87": "lne",
        "\u2A88": "gne",
        "\u2A89": "lnap",
        "\u2A8A": "gnap",
        "\u2A8B": "lEg",
        "\u2A8C": "gEl",
        "\u2A8D": "lsime",
        "\u2A8E": "gsime",
        "\u2A8F": "lsimg",
        "\u2A90": "gsiml",
        "\u2A91": "lgE",
        "\u2A92": "glE",
        "\u2A93": "lesges",
        "\u2A94": "gesles",
        "\u2A95": "els",
        "\u2A96": "egs",
        "\u2A97": "elsdot",
        "\u2A98": "egsdot",
        "\u2A99": "el",
        "\u2A9A": "eg",
        "\u2A9D": "siml",
        "\u2A9E": "simg",
        "\u2A9F": "simlE",
        "\u2AA0": "simgE",
        "\u2AA1": "LessLess",
        "\u2AA1\u0338": "NotNestedLessLess",
        "\u2AA2": "GreaterGreater",
        "\u2AA2\u0338": "NotNestedGreaterGreater",
        "\u2AA4": "glj",
        "\u2AA5": "gla",
        "\u2AA6": "ltcc",
        "\u2AA7": "gtcc",
        "\u2AA8": "lescc",
        "\u2AA9": "gescc",
        "\u2AAA": "smt",
        "\u2AAB": "lat",
        "\u2AAC": "smte",
        "\u2AAC\uFE00": "smtes",
        "\u2AAD": "late",
        "\u2AAD\uFE00": "lates",
        "\u2AAE": "bumpE",
        "\u2AAF": "pre",
        "\u2AAF\u0338": "npre",
        "\u2AB0": "sce",
        "\u2AB0\u0338": "nsce",
        "\u2AB3": "prE",
        "\u2AB4": "scE",
        "\u2AB5": "prnE",
        "\u2AB6": "scnE",
        "\u2AB7": "prap",
        "\u2AB8": "scap",
        "\u2AB9": "prnap",
        "\u2ABA": "scnap",
        "\u2ABB": "Pr",
        "\u2ABC": "Sc",
        "\u2ABD": "subdot",
        "\u2ABE": "supdot",
        "\u2ABF": "subplus",
        "\u2AC0": "supplus",
        "\u2AC1": "submult",
        "\u2AC2": "supmult",
        "\u2AC3": "subedot",
        "\u2AC4": "supedot",
        "\u2AC5": "subE",
        "\u2AC5\u0338": "nsubE",
        "\u2AC6": "supE",
        "\u2AC6\u0338": "nsupE",
        "\u2AC7": "subsim",
        "\u2AC8": "supsim",
        "\u2ACB\uFE00": "vsubnE",
        "\u2ACB": "subnE",
        "\u2ACC\uFE00": "vsupnE",
        "\u2ACC": "supnE",
        "\u2ACF": "csub",
        "\u2AD0": "csup",
        "\u2AD1": "csube",
        "\u2AD2": "csupe",
        "\u2AD3": "subsup",
        "\u2AD4": "supsub",
        "\u2AD5": "subsub",
        "\u2AD6": "supsup",
        "\u2AD7": "suphsub",
        "\u2AD8": "supdsub",
        "\u2AD9": "forkv",
        "\u2ADA": "topfork",
        "\u2ADB": "mlcp",
        "\u2AE4": "Dashv",
        "\u2AE6": "Vdashl",
        "\u2AE7": "Barv",
        "\u2AE8": "vBar",
        "\u2AE9": "vBarv",
        "\u2AEB": "Vbar",
        "\u2AEC": "Not",
        "\u2AED": "bNot",
        "\u2AEE": "rnmid",
        "\u2AEF": "cirmid",
        "\u2AF0": "midcir",
        "\u2AF1": "topcir",
        "\u2AF2": "nhpar",
        "\u2AF3": "parsim",
        "\u2AFD": "parsl",
        "\u2AFD\u20E5": "nparsl",
        "\u266D": "flat",
        "\u266E": "natur",
        "\u266F": "sharp",
        "\xa4": "curren",
        "\xa2": "cent",
        "$": "dollar",
        "\xa3": "pound",
        "\xa5": "yen",
        "\u20AC": "euro",
        "\xb9": "sup1",
        "\xbd": "half",
        "\u2153": "frac13",
        "\xbc": "frac14",
        "\u2155": "frac15",
        "\u2159": "frac16",
        "\u215B": "frac18",
        "\xb2": "sup2",
        "\u2154": "frac23",
        "\u2156": "frac25",
        "\xb3": "sup3",
        "\xbe": "frac34",
        "\u2157": "frac35",
        "\u215C": "frac38",
        "\u2158": "frac45",
        "\u215A": "frac56",
        "\u215D": "frac58",
        "\u215E": "frac78",
        "\uD835\uDCB6": "ascr",
        "\uD835\uDD52": "aopf",
        "\uD835\uDD1E": "afr",
        "\uD835\uDD38": "Aopf",
        "\uD835\uDD04": "Afr",
        "\uD835\uDC9C": "Ascr",
        "\xaa": "ordf",
        "\xe1": "aacute",
        "\xc1": "Aacute",
        "\xe0": "agrave",
        "\xc0": "Agrave",
        "\u0103": "abreve",
        "\u0102": "Abreve",
        "\xe2": "acirc",
        "\xc2": "Acirc",
        "\xe5": "aring",
        "\xc5": "angst",
        "\xe4": "auml",
        "\xc4": "Auml",
        "\xe3": "atilde",
        "\xc3": "Atilde",
        "\u0105": "aogon",
        "\u0104": "Aogon",
        "\u0101": "amacr",
        "\u0100": "Amacr",
        "\xe6": "aelig",
        "\xc6": "AElig",
        "\uD835\uDCB7": "bscr",
        "\uD835\uDD53": "bopf",
        "\uD835\uDD1F": "bfr",
        "\uD835\uDD39": "Bopf",
        "\u212C": "Bscr",
        "\uD835\uDD05": "Bfr",
        "\uD835\uDD20": "cfr",
        "\uD835\uDCB8": "cscr",
        "\uD835\uDD54": "copf",
        "\u212D": "Cfr",
        "\uD835\uDC9E": "Cscr",
        "\u2102": "Copf",
        "\u0107": "cacute",
        "\u0106": "Cacute",
        "\u0109": "ccirc",
        "\u0108": "Ccirc",
        "\u010D": "ccaron",
        "\u010C": "Ccaron",
        "\u010B": "cdot",
        "\u010A": "Cdot",
        "\xe7": "ccedil",
        "\xc7": "Ccedil",
        "\u2105": "incare",
        "\uD835\uDD21": "dfr",
        "\u2146": "dd",
        "\uD835\uDD55": "dopf",
        "\uD835\uDCB9": "dscr",
        "\uD835\uDC9F": "Dscr",
        "\uD835\uDD07": "Dfr",
        "\u2145": "DD",
        "\uD835\uDD3B": "Dopf",
        "\u010F": "dcaron",
        "\u010E": "Dcaron",
        "\u0111": "dstrok",
        "\u0110": "Dstrok",
        "\xf0": "eth",
        "\xd0": "ETH",
        "\u2147": "ee",
        "\u212F": "escr",
        "\uD835\uDD22": "efr",
        "\uD835\uDD56": "eopf",
        "\u2130": "Escr",
        "\uD835\uDD08": "Efr",
        "\uD835\uDD3C": "Eopf",
        "\xe9": "eacute",
        "\xc9": "Eacute",
        "\xe8": "egrave",
        "\xc8": "Egrave",
        "\xea": "ecirc",
        "\xca": "Ecirc",
        "\u011B": "ecaron",
        "\u011A": "Ecaron",
        "\xeb": "euml",
        "\xcb": "Euml",
        "\u0117": "edot",
        "\u0116": "Edot",
        "\u0119": "eogon",
        "\u0118": "Eogon",
        "\u0113": "emacr",
        "\u0112": "Emacr",
        "\uD835\uDD23": "ffr",
        "\uD835\uDD57": "fopf",
        "\uD835\uDCBB": "fscr",
        "\uD835\uDD09": "Ffr",
        "\uD835\uDD3D": "Fopf",
        "\u2131": "Fscr",
        "\uFB00": "fflig",
        "\uFB03": "ffilig",
        "\uFB04": "ffllig",
        "\uFB01": "filig",
        "fj": "fjlig",
        "\uFB02": "fllig",
        "\u0192": "fnof",
        "\u210A": "gscr",
        "\uD835\uDD58": "gopf",
        "\uD835\uDD24": "gfr",
        "\uD835\uDCA2": "Gscr",
        "\uD835\uDD3E": "Gopf",
        "\uD835\uDD0A": "Gfr",
        "\u01F5": "gacute",
        "\u011F": "gbreve",
        "\u011E": "Gbreve",
        "\u011D": "gcirc",
        "\u011C": "Gcirc",
        "\u0121": "gdot",
        "\u0120": "Gdot",
        "\u0122": "Gcedil",
        "\uD835\uDD25": "hfr",
        "\u210E": "planckh",
        "\uD835\uDCBD": "hscr",
        "\uD835\uDD59": "hopf",
        "\u210B": "Hscr",
        "\u210C": "Hfr",
        "\u210D": "Hopf",
        "\u0125": "hcirc",
        "\u0124": "Hcirc",
        "\u210F": "hbar",
        "\u0127": "hstrok",
        "\u0126": "Hstrok",
        "\uD835\uDD5A": "iopf",
        "\uD835\uDD26": "ifr",
        "\uD835\uDCBE": "iscr",
        "\u2148": "ii",
        "\uD835\uDD40": "Iopf",
        "\u2110": "Iscr",
        "\u2111": "Im",
        "\xed": "iacute",
        "\xcd": "Iacute",
        "\xec": "igrave",
        "\xcc": "Igrave",
        "\xee": "icirc",
        "\xce": "Icirc",
        "\xef": "iuml",
        "\xcf": "Iuml",
        "\u0129": "itilde",
        "\u0128": "Itilde",
        "\u0130": "Idot",
        "\u012F": "iogon",
        "\u012E": "Iogon",
        "\u012B": "imacr",
        "\u012A": "Imacr",
        "\u0133": "ijlig",
        "\u0132": "IJlig",
        "\u0131": "imath",
        "\uD835\uDCBF": "jscr",
        "\uD835\uDD5B": "jopf",
        "\uD835\uDD27": "jfr",
        "\uD835\uDCA5": "Jscr",
        "\uD835\uDD0D": "Jfr",
        "\uD835\uDD41": "Jopf",
        "\u0135": "jcirc",
        "\u0134": "Jcirc",
        "\u0237": "jmath",
        "\uD835\uDD5C": "kopf",
        "\uD835\uDCC0": "kscr",
        "\uD835\uDD28": "kfr",
        "\uD835\uDCA6": "Kscr",
        "\uD835\uDD42": "Kopf",
        "\uD835\uDD0E": "Kfr",
        "\u0137": "kcedil",
        "\u0136": "Kcedil",
        "\uD835\uDD29": "lfr",
        "\uD835\uDCC1": "lscr",
        "\u2113": "ell",
        "\uD835\uDD5D": "lopf",
        "\u2112": "Lscr",
        "\uD835\uDD0F": "Lfr",
        "\uD835\uDD43": "Lopf",
        "\u013A": "lacute",
        "\u0139": "Lacute",
        "\u013E": "lcaron",
        "\u013D": "Lcaron",
        "\u013C": "lcedil",
        "\u013B": "Lcedil",
        "\u0142": "lstrok",
        "\u0141": "Lstrok",
        "\u0140": "lmidot",
        "\u013F": "Lmidot",
        "\uD835\uDD2A": "mfr",
        "\uD835\uDD5E": "mopf",
        "\uD835\uDCC2": "mscr",
        "\uD835\uDD10": "Mfr",
        "\uD835\uDD44": "Mopf",
        "\u2133": "Mscr",
        "\uD835\uDD2B": "nfr",
        "\uD835\uDD5F": "nopf",
        "\uD835\uDCC3": "nscr",
        "\u2115": "Nopf",
        "\uD835\uDCA9": "Nscr",
        "\uD835\uDD11": "Nfr",
        "\u0144": "nacute",
        "\u0143": "Nacute",
        "\u0148": "ncaron",
        "\u0147": "Ncaron",
        "\xf1": "ntilde",
        "\xd1": "Ntilde",
        "\u0146": "ncedil",
        "\u0145": "Ncedil",
        "\u2116": "numero",
        "\u014B": "eng",
        "\u014A": "ENG",
        "\uD835\uDD60": "oopf",
        "\uD835\uDD2C": "ofr",
        "\u2134": "oscr",
        "\uD835\uDCAA": "Oscr",
        "\uD835\uDD12": "Ofr",
        "\uD835\uDD46": "Oopf",
        "\xba": "ordm",
        "\xf3": "oacute",
        "\xd3": "Oacute",
        "\xf2": "ograve",
        "\xd2": "Ograve",
        "\xf4": "ocirc",
        "\xd4": "Ocirc",
        "\xf6": "ouml",
        "\xd6": "Ouml",
        "\u0151": "odblac",
        "\u0150": "Odblac",
        "\xf5": "otilde",
        "\xd5": "Otilde",
        "\xf8": "oslash",
        "\xd8": "Oslash",
        "\u014D": "omacr",
        "\u014C": "Omacr",
        "\u0153": "oelig",
        "\u0152": "OElig",
        "\uD835\uDD2D": "pfr",
        "\uD835\uDCC5": "pscr",
        "\uD835\uDD61": "popf",
        "\u2119": "Popf",
        "\uD835\uDD13": "Pfr",
        "\uD835\uDCAB": "Pscr",
        "\uD835\uDD62": "qopf",
        "\uD835\uDD2E": "qfr",
        "\uD835\uDCC6": "qscr",
        "\uD835\uDCAC": "Qscr",
        "\uD835\uDD14": "Qfr",
        "\u211A": "Qopf",
        "\u0138": "kgreen",
        "\uD835\uDD2F": "rfr",
        "\uD835\uDD63": "ropf",
        "\uD835\uDCC7": "rscr",
        "\u211B": "Rscr",
        "\u211C": "Re",
        "\u211D": "Ropf",
        "\u0155": "racute",
        "\u0154": "Racute",
        "\u0159": "rcaron",
        "\u0158": "Rcaron",
        "\u0157": "rcedil",
        "\u0156": "Rcedil",
        "\uD835\uDD64": "sopf",
        "\uD835\uDCC8": "sscr",
        "\uD835\uDD30": "sfr",
        "\uD835\uDD4A": "Sopf",
        "\uD835\uDD16": "Sfr",
        "\uD835\uDCAE": "Sscr",
        "\u24C8": "oS",
        "\u015B": "sacute",
        "\u015A": "Sacute",
        "\u015D": "scirc",
        "\u015C": "Scirc",
        "\u0161": "scaron",
        "\u0160": "Scaron",
        "\u015F": "scedil",
        "\u015E": "Scedil",
        "\xdf": "szlig",
        "\uD835\uDD31": "tfr",
        "\uD835\uDCC9": "tscr",
        "\uD835\uDD65": "topf",
        "\uD835\uDCAF": "Tscr",
        "\uD835\uDD17": "Tfr",
        "\uD835\uDD4B": "Topf",
        "\u0165": "tcaron",
        "\u0164": "Tcaron",
        "\u0163": "tcedil",
        "\u0162": "Tcedil",
        "\u2122": "trade",
        "\u0167": "tstrok",
        "\u0166": "Tstrok",
        "\uD835\uDCCA": "uscr",
        "\uD835\uDD66": "uopf",
        "\uD835\uDD32": "ufr",
        "\uD835\uDD4C": "Uopf",
        "\uD835\uDD18": "Ufr",
        "\uD835\uDCB0": "Uscr",
        "\xfa": "uacute",
        "\xda": "Uacute",
        "\xf9": "ugrave",
        "\xd9": "Ugrave",
        "\u016D": "ubreve",
        "\u016C": "Ubreve",
        "\xfb": "ucirc",
        "\xdb": "Ucirc",
        "\u016F": "uring",
        "\u016E": "Uring",
        "\xfc": "uuml",
        "\xdc": "Uuml",
        "\u0171": "udblac",
        "\u0170": "Udblac",
        "\u0169": "utilde",
        "\u0168": "Utilde",
        "\u0173": "uogon",
        "\u0172": "Uogon",
        "\u016B": "umacr",
        "\u016A": "Umacr",
        "\uD835\uDD33": "vfr",
        "\uD835\uDD67": "vopf",
        "\uD835\uDCCB": "vscr",
        "\uD835\uDD19": "Vfr",
        "\uD835\uDD4D": "Vopf",
        "\uD835\uDCB1": "Vscr",
        "\uD835\uDD68": "wopf",
        "\uD835\uDCCC": "wscr",
        "\uD835\uDD34": "wfr",
        "\uD835\uDCB2": "Wscr",
        "\uD835\uDD4E": "Wopf",
        "\uD835\uDD1A": "Wfr",
        "\u0175": "wcirc",
        "\u0174": "Wcirc",
        "\uD835\uDD35": "xfr",
        "\uD835\uDCCD": "xscr",
        "\uD835\uDD69": "xopf",
        "\uD835\uDD4F": "Xopf",
        "\uD835\uDD1B": "Xfr",
        "\uD835\uDCB3": "Xscr",
        "\uD835\uDD36": "yfr",
        "\uD835\uDCCE": "yscr",
        "\uD835\uDD6A": "yopf",
        "\uD835\uDCB4": "Yscr",
        "\uD835\uDD1C": "Yfr",
        "\uD835\uDD50": "Yopf",
        "\xfd": "yacute",
        "\xdd": "Yacute",
        "\u0177": "ycirc",
        "\u0176": "Ycirc",
        "\xff": "yuml",
        "\u0178": "Yuml",
        "\uD835\uDCCF": "zscr",
        "\uD835\uDD37": "zfr",
        "\uD835\uDD6B": "zopf",
        "\u2128": "Zfr",
        "\u2124": "Zopf",
        "\uD835\uDCB5": "Zscr",
        "\u017A": "zacute",
        "\u0179": "Zacute",
        "\u017E": "zcaron",
        "\u017D": "Zcaron",
        "\u017C": "zdot",
        "\u017B": "Zdot",
        "\u01B5": "imped",
        "\xfe": "thorn",
        "\xde": "THORN",
        "\u0149": "napos",
        "\u03B1": "alpha",
        "\u0391": "Alpha",
        "\u03B2": "beta",
        "\u0392": "Beta",
        "\u03B3": "gamma",
        "\u0393": "Gamma",
        "\u03B4": "delta",
        "\u0394": "Delta",
        "\u03B5": "epsi",
        "\u03F5": "epsiv",
        "\u0395": "Epsilon",
        "\u03DD": "gammad",
        "\u03DC": "Gammad",
        "\u03B6": "zeta",
        "\u0396": "Zeta",
        "\u03B7": "eta",
        "\u0397": "Eta",
        "\u03B8": "theta",
        "\u03D1": "thetav",
        "\u0398": "Theta",
        "\u03B9": "iota",
        "\u0399": "Iota",
        "\u03BA": "kappa",
        "\u03F0": "kappav",
        "\u039A": "Kappa",
        "\u03BB": "lambda",
        "\u039B": "Lambda",
        "\u03BC": "mu",
        "\xb5": "micro",
        "\u039C": "Mu",
        "\u03BD": "nu",
        "\u039D": "Nu",
        "\u03BE": "xi",
        "\u039E": "Xi",
        "\u03BF": "omicron",
        "\u039F": "Omicron",
        "\u03C0": "pi",
        "\u03D6": "piv",
        "\u03A0": "Pi",
        "\u03C1": "rho",
        "\u03F1": "rhov",
        "\u03A1": "Rho",
        "\u03C3": "sigma",
        "\u03A3": "Sigma",
        "\u03C2": "sigmaf",
        "\u03C4": "tau",
        "\u03A4": "Tau",
        "\u03C5": "upsi",
        "\u03A5": "Upsilon",
        "\u03D2": "Upsi",
        "\u03C6": "phi",
        "\u03D5": "phiv",
        "\u03A6": "Phi",
        "\u03C7": "chi",
        "\u03A7": "Chi",
        "\u03C8": "psi",
        "\u03A8": "Psi",
        "\u03C9": "omega",
        "\u03A9": "ohm",
        "\u0430": "acy",
        "\u0410": "Acy",
        "\u0431": "bcy",
        "\u0411": "Bcy",
        "\u0432": "vcy",
        "\u0412": "Vcy",
        "\u0433": "gcy",
        "\u0413": "Gcy",
        "\u0453": "gjcy",
        "\u0403": "GJcy",
        "\u0434": "dcy",
        "\u0414": "Dcy",
        "\u0452": "djcy",
        "\u0402": "DJcy",
        "\u0435": "iecy",
        "\u0415": "IEcy",
        "\u0451": "iocy",
        "\u0401": "IOcy",
        "\u0454": "jukcy",
        "\u0404": "Jukcy",
        "\u0436": "zhcy",
        "\u0416": "ZHcy",
        "\u0437": "zcy",
        "\u0417": "Zcy",
        "\u0455": "dscy",
        "\u0405": "DScy",
        "\u0438": "icy",
        "\u0418": "Icy",
        "\u0456": "iukcy",
        "\u0406": "Iukcy",
        "\u0457": "yicy",
        "\u0407": "YIcy",
        "\u0439": "jcy",
        "\u0419": "Jcy",
        "\u0458": "jsercy",
        "\u0408": "Jsercy",
        "\u043A": "kcy",
        "\u041A": "Kcy",
        "\u045C": "kjcy",
        "\u040C": "KJcy",
        "\u043B": "lcy",
        "\u041B": "Lcy",
        "\u0459": "ljcy",
        "\u0409": "LJcy",
        "\u043C": "mcy",
        "\u041C": "Mcy",
        "\u043D": "ncy",
        "\u041D": "Ncy",
        "\u045A": "njcy",
        "\u040A": "NJcy",
        "\u043E": "ocy",
        "\u041E": "Ocy",
        "\u043F": "pcy",
        "\u041F": "Pcy",
        "\u0440": "rcy",
        "\u0420": "Rcy",
        "\u0441": "scy",
        "\u0421": "Scy",
        "\u0442": "tcy",
        "\u0422": "Tcy",
        "\u045B": "tshcy",
        "\u040B": "TSHcy",
        "\u0443": "ucy",
        "\u0423": "Ucy",
        "\u045E": "ubrcy",
        "\u040E": "Ubrcy",
        "\u0444": "fcy",
        "\u0424": "Fcy",
        "\u0445": "khcy",
        "\u0425": "KHcy",
        "\u0446": "tscy",
        "\u0426": "TScy",
        "\u0447": "chcy",
        "\u0427": "CHcy",
        "\u045F": "dzcy",
        "\u040F": "DZcy",
        "\u0448": "shcy",
        "\u0428": "SHcy",
        "\u0449": "shchcy",
        "\u0429": "SHCHcy",
        "\u044A": "hardcy",
        "\u042A": "HARDcy",
        "\u044B": "ycy",
        "\u042B": "Ycy",
        "\u044C": "softcy",
        "\u042C": "SOFTcy",
        "\u044D": "ecy",
        "\u042D": "Ecy",
        "\u044E": "yucy",
        "\u042E": "YUcy",
        "\u044F": "yacy",
        "\u042F": "YAcy",
        "\u2135": "aleph",
        "\u2136": "beth",
        "\u2137": "gimel",
        "\u2138": "daleth"
    };
    var regexEscape = /["&'<>`]/g;
    var escapeMap = {
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#x27;",
        "<": "&lt;",
        // See https://mathiasbynens.be/notes/ambiguous-ampersands: in HTML, the
        // following is not strictly necessary unless it’s part of a tag or an
        // unquoted attribute value. We’re only escaping it to support those
        // situations, and for XML support.
        ">": "&gt;",
        // In Internet Explorer ≤ 8, the backtick character can be used
        // to break out of (un)quoted attribute values or HTML comments.
        // See http://html5sec.org/#102, http://html5sec.org/#108, and
        // http://html5sec.org/#133.
        "`": "&#x60;"
    };
    var regexInvalidEntity = /&#(?:[xX][^a-fA-F0-9]|[^0-9xX])/;
    var regexInvalidRawCodePoint = /[\0-\x08\x0B\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]|[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
    var regexDecode = /&(CounterClockwiseContourIntegral|DoubleLongLeftRightArrow|ClockwiseContourIntegral|NotNestedGreaterGreater|NotSquareSupersetEqual|DiacriticalDoubleAcute|NotRightTriangleEqual|NotSucceedsSlantEqual|NotPrecedesSlantEqual|CloseCurlyDoubleQuote|NegativeVeryThinSpace|DoubleContourIntegral|FilledVerySmallSquare|CapitalDifferentialD|OpenCurlyDoubleQuote|EmptyVerySmallSquare|NestedGreaterGreater|DoubleLongRightArrow|NotLeftTriangleEqual|NotGreaterSlantEqual|ReverseUpEquilibrium|DoubleLeftRightArrow|NotSquareSubsetEqual|NotDoubleVerticalBar|RightArrowLeftArrow|NotGreaterFullEqual|NotRightTriangleBar|SquareSupersetEqual|DownLeftRightVector|DoubleLongLeftArrow|leftrightsquigarrow|LeftArrowRightArrow|NegativeMediumSpace|blacktriangleright|RightDownVectorBar|PrecedesSlantEqual|RightDoubleBracket|SucceedsSlantEqual|NotLeftTriangleBar|RightTriangleEqual|SquareIntersection|RightDownTeeVector|ReverseEquilibrium|NegativeThickSpace|longleftrightarrow|Longleftrightarrow|LongLeftRightArrow|DownRightTeeVector|DownRightVectorBar|GreaterSlantEqual|SquareSubsetEqual|LeftDownVectorBar|LeftDoubleBracket|VerticalSeparator|rightleftharpoons|NotGreaterGreater|NotSquareSuperset|blacktriangleleft|blacktriangledown|NegativeThinSpace|LeftDownTeeVector|NotLessSlantEqual|leftrightharpoons|DoubleUpDownArrow|DoubleVerticalBar|LeftTriangleEqual|FilledSmallSquare|twoheadrightarrow|NotNestedLessLess|DownLeftTeeVector|DownLeftVectorBar|RightAngleBracket|NotTildeFullEqual|NotReverseElement|RightUpDownVector|DiacriticalTilde|NotSucceedsTilde|circlearrowright|NotPrecedesEqual|rightharpoondown|DoubleRightArrow|NotSucceedsEqual|NonBreakingSpace|NotRightTriangle|LessEqualGreater|RightUpTeeVector|LeftAngleBracket|GreaterFullEqual|DownArrowUpArrow|RightUpVectorBar|twoheadleftarrow|GreaterEqualLess|downharpoonright|RightTriangleBar|ntrianglerighteq|NotSupersetEqual|LeftUpDownVector|DiacriticalAcute|rightrightarrows|vartriangleright|UpArrowDownArrow|DiacriticalGrave|UnderParenthesis|EmptySmallSquare|LeftUpVectorBar|leftrightarrows|DownRightVector|downharpoonleft|trianglerighteq|ShortRightArrow|OverParenthesis|DoubleLeftArrow|DoubleDownArrow|NotSquareSubset|bigtriangledown|ntrianglelefteq|UpperRightArrow|curvearrowright|vartriangleleft|NotLeftTriangle|nleftrightarrow|LowerRightArrow|NotHumpDownHump|NotGreaterTilde|rightthreetimes|LeftUpTeeVector|NotGreaterEqual|straightepsilon|LeftTriangleBar|rightsquigarrow|ContourIntegral|rightleftarrows|CloseCurlyQuote|RightDownVector|LeftRightVector|nLeftrightarrow|leftharpoondown|circlearrowleft|SquareSuperset|OpenCurlyQuote|hookrightarrow|HorizontalLine|DiacriticalDot|NotLessGreater|ntriangleright|DoubleRightTee|InvisibleComma|InvisibleTimes|LowerLeftArrow|DownLeftVector|NotSubsetEqual|curvearrowleft|trianglelefteq|NotVerticalBar|TildeFullEqual|downdownarrows|NotGreaterLess|RightTeeVector|ZeroWidthSpace|looparrowright|LongRightArrow|doublebarwedge|ShortLeftArrow|ShortDownArrow|RightVectorBar|GreaterGreater|ReverseElement|rightharpoonup|LessSlantEqual|leftthreetimes|upharpoonright|rightarrowtail|LeftDownVector|Longrightarrow|NestedLessLess|UpperLeftArrow|nshortparallel|leftleftarrows|leftrightarrow|Leftrightarrow|LeftRightArrow|longrightarrow|upharpoonleft|RightArrowBar|ApplyFunction|LeftTeeVector|leftarrowtail|NotEqualTilde|varsubsetneqq|varsupsetneqq|RightTeeArrow|SucceedsEqual|SucceedsTilde|LeftVectorBar|SupersetEqual|hookleftarrow|DifferentialD|VerticalTilde|VeryThinSpace|blacktriangle|bigtriangleup|LessFullEqual|divideontimes|leftharpoonup|UpEquilibrium|ntriangleleft|RightTriangle|measuredangle|shortparallel|longleftarrow|Longleftarrow|LongLeftArrow|DoubleLeftTee|Poincareplane|PrecedesEqual|triangleright|DoubleUpArrow|RightUpVector|fallingdotseq|looparrowleft|PrecedesTilde|NotTildeEqual|NotTildeTilde|smallsetminus|Proportional|triangleleft|triangledown|UnderBracket|NotHumpEqual|exponentiale|ExponentialE|NotLessTilde|HilbertSpace|RightCeiling|blacklozenge|varsupsetneq|HumpDownHump|GreaterEqual|VerticalLine|LeftTeeArrow|NotLessEqual|DownTeeArrow|LeftTriangle|varsubsetneq|Intersection|NotCongruent|DownArrowBar|LeftUpVector|LeftArrowBar|risingdotseq|GreaterTilde|RoundImplies|SquareSubset|ShortUpArrow|NotSuperset|quaternions|precnapprox|backepsilon|preccurlyeq|OverBracket|blacksquare|MediumSpace|VerticalBar|circledcirc|circleddash|CircleMinus|CircleTimes|LessGreater|curlyeqprec|curlyeqsucc|diamondsuit|UpDownArrow|Updownarrow|RuleDelayed|Rrightarrow|updownarrow|RightVector|nRightarrow|nrightarrow|eqslantless|LeftCeiling|Equilibrium|SmallCircle|expectation|NotSucceeds|thickapprox|GreaterLess|SquareUnion|NotPrecedes|NotLessLess|straightphi|succnapprox|succcurlyeq|SubsetEqual|sqsupseteq|Proportion|Laplacetrf|ImaginaryI|supsetneqq|NotGreater|gtreqqless|NotElement|ThickSpace|TildeEqual|TildeTilde|Fouriertrf|rmoustache|EqualTilde|eqslantgtr|UnderBrace|LeftVector|UpArrowBar|nLeftarrow|nsubseteqq|subsetneqq|nsupseteqq|nleftarrow|succapprox|lessapprox|UpTeeArrow|upuparrows|curlywedge|lesseqqgtr|varepsilon|varnothing|RightFloor|complement|CirclePlus|sqsubseteq|Lleftarrow|circledast|RightArrow|Rightarrow|rightarrow|lmoustache|Bernoullis|precapprox|mapstoleft|mapstodown|longmapsto|dotsquare|downarrow|DoubleDot|nsubseteq|supsetneq|leftarrow|nsupseteq|subsetneq|ThinSpace|ngeqslant|subseteqq|HumpEqual|NotSubset|triangleq|NotCupCap|lesseqgtr|heartsuit|TripleDot|Leftarrow|Coproduct|Congruent|varpropto|complexes|gvertneqq|LeftArrow|LessTilde|supseteqq|MinusPlus|CircleDot|nleqslant|NotExists|gtreqless|nparallel|UnionPlus|LeftFloor|checkmark|CenterDot|centerdot|Mellintrf|gtrapprox|bigotimes|OverBrace|spadesuit|therefore|pitchfork|rationals|PlusMinus|Backslash|Therefore|DownBreve|backsimeq|backprime|DownArrow|nshortmid|Downarrow|lvertneqq|eqvparsl|imagline|imagpart|infintie|integers|Integral|intercal|LessLess|Uarrocir|intlarhk|sqsupset|angmsdaf|sqsubset|llcorner|vartheta|cupbrcap|lnapprox|Superset|SuchThat|succnsim|succneqq|angmsdag|biguplus|curlyvee|trpezium|Succeeds|NotTilde|bigwedge|angmsdah|angrtvbd|triminus|cwconint|fpartint|lrcorner|smeparsl|subseteq|urcorner|lurdshar|laemptyv|DDotrahd|approxeq|ldrushar|awconint|mapstoup|backcong|shortmid|triangle|geqslant|gesdotol|timesbar|circledR|circledS|setminus|multimap|naturals|scpolint|ncongdot|RightTee|boxminus|gnapprox|boxtimes|andslope|thicksim|angmsdaa|varsigma|cirfnint|rtriltri|angmsdab|rppolint|angmsdac|barwedge|drbkarow|clubsuit|thetasym|bsolhsub|capbrcup|dzigrarr|doteqdot|DotEqual|dotminus|UnderBar|NotEqual|realpart|otimesas|ulcorner|hksearow|hkswarow|parallel|PartialD|elinters|emptyset|plusacir|bbrktbrk|angmsdad|pointint|bigoplus|angmsdae|Precedes|bigsqcup|varkappa|notindot|supseteq|precneqq|precnsim|profalar|profline|profsurf|leqslant|lesdotor|raemptyv|subplus|notnivb|notnivc|subrarr|zigrarr|vzigzag|submult|subedot|Element|between|cirscir|larrbfs|larrsim|lotimes|lbrksld|lbrkslu|lozenge|ldrdhar|dbkarow|bigcirc|epsilon|simrarr|simplus|ltquest|Epsilon|luruhar|gtquest|maltese|npolint|eqcolon|npreceq|bigodot|ddagger|gtrless|bnequiv|harrcir|ddotseq|equivDD|backsim|demptyv|nsqsube|nsqsupe|Upsilon|nsubset|upsilon|minusdu|nsucceq|swarrow|nsupset|coloneq|searrow|boxplus|napprox|natural|asympeq|alefsym|congdot|nearrow|bigstar|diamond|supplus|tritime|LeftTee|nvinfin|triplus|NewLine|nvltrie|nvrtrie|nwarrow|nexists|Diamond|ruluhar|Implies|supmult|angzarr|suplarr|suphsub|questeq|because|digamma|Because|olcross|bemptyv|omicron|Omicron|rotimes|NoBreak|intprod|angrtvb|orderof|uwangle|suphsol|lesdoto|orslope|DownTee|realine|cudarrl|rdldhar|OverBar|supedot|lessdot|supdsub|topfork|succsim|rbrkslu|rbrksld|pertenk|cudarrr|isindot|planckh|lessgtr|pluscir|gesdoto|plussim|plustwo|lesssim|cularrp|rarrsim|Cayleys|notinva|notinvb|notinvc|UpArrow|Uparrow|uparrow|NotLess|dwangle|precsim|Product|curarrm|Cconint|dotplus|rarrbfs|ccupssm|Cedilla|cemptyv|notniva|quatint|frac35|frac38|frac45|frac56|frac58|frac78|tridot|xoplus|gacute|gammad|Gammad|lfisht|lfloor|bigcup|sqsupe|gbreve|Gbreve|lharul|sqsube|sqcups|Gcedil|apacir|llhard|lmidot|Lmidot|lmoust|andand|sqcaps|approx|Abreve|spades|circeq|tprime|divide|topcir|Assign|topbot|gesdot|divonx|xuplus|timesd|gesles|atilde|solbar|SOFTcy|loplus|timesb|lowast|lowbar|dlcorn|dlcrop|softcy|dollar|lparlt|thksim|lrhard|Atilde|lsaquo|smashp|bigvee|thinsp|wreath|bkarow|lsquor|lstrok|Lstrok|lthree|ltimes|ltlarr|DotDot|simdot|ltrPar|weierp|xsqcup|angmsd|sigmav|sigmaf|zeetrf|Zcaron|zcaron|mapsto|vsupne|thetav|cirmid|marker|mcomma|Zacute|vsubnE|there4|gtlPar|vsubne|bottom|gtrarr|SHCHcy|shchcy|midast|midcir|middot|minusb|minusd|gtrdot|bowtie|sfrown|mnplus|models|colone|seswar|Colone|mstpos|searhk|gtrsim|nacute|Nacute|boxbox|telrec|hairsp|Tcedil|nbumpe|scnsim|ncaron|Ncaron|ncedil|Ncedil|hamilt|Scedil|nearhk|hardcy|HARDcy|tcedil|Tcaron|commat|nequiv|nesear|tcaron|target|hearts|nexist|varrho|scedil|Scaron|scaron|hellip|Sacute|sacute|hercon|swnwar|compfn|rtimes|rthree|rsquor|rsaquo|zacute|wedgeq|homtht|barvee|barwed|Barwed|rpargt|horbar|conint|swarhk|roplus|nltrie|hslash|hstrok|Hstrok|rmoust|Conint|bprime|hybull|hyphen|iacute|Iacute|supsup|supsub|supsim|varphi|coprod|brvbar|agrave|Supset|supset|igrave|Igrave|notinE|Agrave|iiiint|iinfin|copysr|wedbar|Verbar|vangrt|becaus|incare|verbar|inodot|bullet|drcorn|intcal|drcrop|cularr|vellip|Utilde|bumpeq|cupcap|dstrok|Dstrok|CupCap|cupcup|cupdot|eacute|Eacute|supdot|iquest|easter|ecaron|Ecaron|ecolon|isinsv|utilde|itilde|Itilde|curarr|succeq|Bumpeq|cacute|ulcrop|nparsl|Cacute|nprcue|egrave|Egrave|nrarrc|nrarrw|subsup|subsub|nrtrie|jsercy|nsccue|Jsercy|kappav|kcedil|Kcedil|subsim|ulcorn|nsimeq|egsdot|veebar|kgreen|capand|elsdot|Subset|subset|curren|aacute|lacute|Lacute|emptyv|ntilde|Ntilde|lagran|lambda|Lambda|capcap|Ugrave|langle|subdot|emsp13|numero|emsp14|nvdash|nvDash|nVdash|nVDash|ugrave|ufisht|nvHarr|larrfs|nvlArr|larrhk|larrlp|larrpl|nvrArr|Udblac|nwarhk|larrtl|nwnear|oacute|Oacute|latail|lAtail|sstarf|lbrace|odblac|Odblac|lbrack|udblac|odsold|eparsl|lcaron|Lcaron|ograve|Ograve|lcedil|Lcedil|Aacute|ssmile|ssetmn|squarf|ldquor|capcup|ominus|cylcty|rharul|eqcirc|dagger|rfloor|rfisht|Dagger|daleth|equals|origof|capdot|equest|dcaron|Dcaron|rdquor|oslash|Oslash|otilde|Otilde|otimes|Otimes|urcrop|Ubreve|ubreve|Yacute|Uacute|uacute|Rcedil|rcedil|urcorn|parsim|Rcaron|Vdashl|rcaron|Tstrok|percnt|period|permil|Exists|yacute|rbrack|rbrace|phmmat|ccaron|Ccaron|planck|ccedil|plankv|tstrok|female|plusdo|plusdu|ffilig|plusmn|ffllig|Ccedil|rAtail|dfisht|bernou|ratail|Rarrtl|rarrtl|angsph|rarrpl|rarrlp|rarrhk|xwedge|xotime|forall|ForAll|Vvdash|vsupnE|preceq|bigcap|frac12|frac13|frac14|primes|rarrfs|prnsim|frac15|Square|frac16|square|lesdot|frac18|frac23|propto|prurel|rarrap|rangle|puncsp|frac25|Racute|qprime|racute|lesges|frac34|abreve|AElig|eqsim|utdot|setmn|urtri|Equal|Uring|seArr|uring|searr|dashv|Dashv|mumap|nabla|iogon|Iogon|sdote|sdotb|scsim|napid|napos|equiv|natur|Acirc|dblac|erarr|nbump|iprod|erDot|ucirc|awint|esdot|angrt|ncong|isinE|scnap|Scirc|scirc|ndash|isins|Ubrcy|nearr|neArr|isinv|nedot|ubrcy|acute|Ycirc|iukcy|Iukcy|xutri|nesim|caret|jcirc|Jcirc|caron|twixt|ddarr|sccue|exist|jmath|sbquo|ngeqq|angst|ccaps|lceil|ngsim|UpTee|delta|Delta|rtrif|nharr|nhArr|nhpar|rtrie|jukcy|Jukcy|kappa|rsquo|Kappa|nlarr|nlArr|TSHcy|rrarr|aogon|Aogon|fflig|xrarr|tshcy|ccirc|nleqq|filig|upsih|nless|dharl|nlsim|fjlig|ropar|nltri|dharr|robrk|roarr|fllig|fltns|roang|rnmid|subnE|subne|lAarr|trisb|Ccirc|acirc|ccups|blank|VDash|forkv|Vdash|langd|cedil|blk12|blk14|laquo|strns|diams|notin|vDash|larrb|blk34|block|disin|uplus|vdash|vBarv|aelig|starf|Wedge|check|xrArr|lates|lbarr|lBarr|notni|lbbrk|bcong|frasl|lbrke|frown|vrtri|vprop|vnsup|gamma|Gamma|wedge|xodot|bdquo|srarr|doteq|ldquo|boxdl|boxdL|gcirc|Gcirc|boxDl|boxDL|boxdr|boxdR|boxDr|TRADE|trade|rlhar|boxDR|vnsub|npart|vltri|rlarr|boxhd|boxhD|nprec|gescc|nrarr|nrArr|boxHd|boxHD|boxhu|boxhU|nrtri|boxHu|clubs|boxHU|times|colon|Colon|gimel|xlArr|Tilde|nsime|tilde|nsmid|nspar|THORN|thorn|xlarr|nsube|nsubE|thkap|xhArr|comma|nsucc|boxul|boxuL|nsupe|nsupE|gneqq|gnsim|boxUl|boxUL|grave|boxur|boxuR|boxUr|boxUR|lescc|angle|bepsi|boxvh|varpi|boxvH|numsp|Theta|gsime|gsiml|theta|boxVh|boxVH|boxvl|gtcir|gtdot|boxvL|boxVl|boxVL|crarr|cross|Cross|nvsim|boxvr|nwarr|nwArr|sqsup|dtdot|Uogon|lhard|lharu|dtrif|ocirc|Ocirc|lhblk|duarr|odash|sqsub|Hacek|sqcup|llarr|duhar|oelig|OElig|ofcir|boxvR|uogon|lltri|boxVr|csube|uuarr|ohbar|csupe|ctdot|olarr|olcir|harrw|oline|sqcap|omacr|Omacr|omega|Omega|boxVR|aleph|lneqq|lnsim|loang|loarr|rharu|lobrk|hcirc|operp|oplus|rhard|Hcirc|orarr|Union|order|ecirc|Ecirc|cuepr|szlig|cuesc|breve|reals|eDDot|Breve|hoarr|lopar|utrif|rdquo|Umacr|umacr|efDot|swArr|ultri|alpha|rceil|ovbar|swarr|Wcirc|wcirc|smtes|smile|bsemi|lrarr|aring|parsl|lrhar|bsime|uhblk|lrtri|cupor|Aring|uharr|uharl|slarr|rbrke|bsolb|lsime|rbbrk|RBarr|lsimg|phone|rBarr|rbarr|icirc|lsquo|Icirc|emacr|Emacr|ratio|simne|plusb|simlE|simgE|simeq|pluse|ltcir|ltdot|empty|xharr|xdtri|iexcl|Alpha|ltrie|rarrw|pound|ltrif|xcirc|bumpe|prcue|bumpE|asymp|amacr|cuvee|Sigma|sigma|iiint|udhar|iiota|ijlig|IJlig|supnE|imacr|Imacr|prime|Prime|image|prnap|eogon|Eogon|rarrc|mdash|mDDot|cuwed|imath|supne|imped|Amacr|udarr|prsim|micro|rarrb|cwint|raquo|infin|eplus|range|rangd|Ucirc|radic|minus|amalg|veeeq|rAarr|epsiv|ycirc|quest|sharp|quot|zwnj|Qscr|race|qscr|Qopf|qopf|qint|rang|Rang|Zscr|zscr|Zopf|zopf|rarr|rArr|Rarr|Pscr|pscr|prop|prod|prnE|prec|ZHcy|zhcy|prap|Zeta|zeta|Popf|popf|Zdot|plus|zdot|Yuml|yuml|phiv|YUcy|yucy|Yscr|yscr|perp|Yopf|yopf|part|para|YIcy|Ouml|rcub|yicy|YAcy|rdca|ouml|osol|Oscr|rdsh|yacy|real|oscr|xvee|andd|rect|andv|Xscr|oror|ordm|ordf|xscr|ange|aopf|Aopf|rHar|Xopf|opar|Oopf|xopf|xnis|rhov|oopf|omid|xmap|oint|apid|apos|ogon|ascr|Ascr|odot|odiv|xcup|xcap|ocir|oast|nvlt|nvle|nvgt|nvge|nvap|Wscr|wscr|auml|ntlg|ntgl|nsup|nsub|nsim|Nscr|nscr|nsce|Wopf|ring|npre|wopf|npar|Auml|Barv|bbrk|Nopf|nopf|nmid|nLtv|beta|ropf|Ropf|Beta|beth|nles|rpar|nleq|bnot|bNot|nldr|NJcy|rscr|Rscr|Vscr|vscr|rsqb|njcy|bopf|nisd|Bopf|rtri|Vopf|nGtv|ngtr|vopf|boxh|boxH|boxv|nges|ngeq|boxV|bscr|scap|Bscr|bsim|Vert|vert|bsol|bull|bump|caps|cdot|ncup|scnE|ncap|nbsp|napE|Cdot|cent|sdot|Vbar|nang|vBar|chcy|Mscr|mscr|sect|semi|CHcy|Mopf|mopf|sext|circ|cire|mldr|mlcp|cirE|comp|shcy|SHcy|vArr|varr|cong|copf|Copf|copy|COPY|malt|male|macr|lvnE|cscr|ltri|sime|ltcc|simg|Cscr|siml|csub|Uuml|lsqb|lsim|uuml|csup|Lscr|lscr|utri|smid|lpar|cups|smte|lozf|darr|Lopf|Uscr|solb|lopf|sopf|Sopf|lneq|uscr|spar|dArr|lnap|Darr|dash|Sqrt|LJcy|ljcy|lHar|dHar|Upsi|upsi|diam|lesg|djcy|DJcy|leqq|dopf|Dopf|dscr|Dscr|dscy|ldsh|ldca|squf|DScy|sscr|Sscr|dsol|lcub|late|star|Star|Uopf|Larr|lArr|larr|uopf|dtri|dzcy|sube|subE|Lang|lang|Kscr|kscr|Kopf|kopf|KJcy|kjcy|KHcy|khcy|DZcy|ecir|edot|eDot|Jscr|jscr|succ|Jopf|jopf|Edot|uHar|emsp|ensp|Iuml|iuml|eopf|isin|Iscr|iscr|Eopf|epar|sung|epsi|escr|sup1|sup2|sup3|Iota|iota|supe|supE|Iopf|iopf|IOcy|iocy|Escr|esim|Esim|imof|Uarr|QUOT|uArr|uarr|euml|IEcy|iecy|Idot|Euml|euro|excl|Hscr|hscr|Hopf|hopf|TScy|tscy|Tscr|hbar|tscr|flat|tbrk|fnof|hArr|harr|half|fopf|Fopf|tdot|gvnE|fork|trie|gtcc|fscr|Fscr|gdot|gsim|Gscr|gscr|Gopf|gopf|gneq|Gdot|tosa|gnap|Topf|topf|geqq|toea|GJcy|gjcy|tint|gesl|mid|Sfr|ggg|top|ges|gla|glE|glj|geq|gne|gEl|gel|gnE|Gcy|gcy|gap|Tfr|tfr|Tcy|tcy|Hat|Tau|Ffr|tau|Tab|hfr|Hfr|ffr|Fcy|fcy|icy|Icy|iff|ETH|eth|ifr|Ifr|Eta|eta|int|Int|Sup|sup|ucy|Ucy|Sum|sum|jcy|ENG|ufr|Ufr|eng|Jcy|jfr|els|ell|egs|Efr|efr|Jfr|uml|kcy|Kcy|Ecy|ecy|kfr|Kfr|lap|Sub|sub|lat|lcy|Lcy|leg|Dot|dot|lEg|leq|les|squ|div|die|lfr|Lfr|lgE|Dfr|dfr|Del|deg|Dcy|dcy|lne|lnE|sol|loz|smt|Cup|lrm|cup|lsh|Lsh|sim|shy|map|Map|mcy|Mcy|mfr|Mfr|mho|gfr|Gfr|sfr|cir|Chi|chi|nap|Cfr|vcy|Vcy|cfr|Scy|scy|ncy|Ncy|vee|Vee|Cap|cap|nfr|scE|sce|Nfr|nge|ngE|nGg|vfr|Vfr|ngt|bot|nGt|nis|niv|Rsh|rsh|nle|nlE|bne|Bfr|bfr|nLl|nlt|nLt|Bcy|bcy|not|Not|rlm|wfr|Wfr|npr|nsc|num|ocy|ast|Ocy|ofr|xfr|Xfr|Ofr|ogt|ohm|apE|olt|Rho|ape|rho|Rfr|rfr|ord|REG|ang|reg|orv|And|and|AMP|Rcy|amp|Afr|ycy|Ycy|yen|yfr|Yfr|rcy|par|pcy|Pcy|pfr|Pfr|phi|Phi|afr|Acy|acy|zcy|Zcy|piv|acE|acd|zfr|Zfr|pre|prE|psi|Psi|qfr|Qfr|zwj|Or|ge|Gg|gt|gg|el|oS|lt|Lt|LT|Re|lg|gl|eg|ne|Im|it|le|DD|wp|wr|nu|Nu|dd|lE|Sc|sc|pi|Pi|ee|af|ll|Ll|rx|gE|xi|pm|Xi|ic|pr|Pr|in|ni|mp|mu|ac|Mu|or|ap|Gt|GT|ii);|&(Aacute|Agrave|Atilde|Ccedil|Eacute|Egrave|Iacute|Igrave|Ntilde|Oacute|Ograve|Oslash|Otilde|Uacute|Ugrave|Yacute|aacute|agrave|atilde|brvbar|ccedil|curren|divide|eacute|egrave|frac12|frac14|frac34|iacute|igrave|iquest|middot|ntilde|oacute|ograve|oslash|otilde|plusmn|uacute|ugrave|yacute|AElig|Acirc|Aring|Ecirc|Icirc|Ocirc|THORN|Ucirc|acirc|acute|aelig|aring|cedil|ecirc|icirc|iexcl|laquo|micro|ocirc|pound|raquo|szlig|thorn|times|ucirc|Auml|COPY|Euml|Iuml|Ouml|QUOT|Uuml|auml|cent|copy|euml|iuml|macr|nbsp|ordf|ordm|ouml|para|quot|sect|sup1|sup2|sup3|uuml|yuml|AMP|ETH|REG|amp|deg|eth|not|reg|shy|uml|yen|GT|LT|gt|lt)(?!;)([=a-zA-Z0-9]?)|&#([0-9]+)(;?)|&#[xX]([a-fA-F0-9]+)(;?)|&([0-9a-zA-Z]+)/g;
    var decodeMap = {
        "aacute": "\xe1",
        "Aacute": "\xc1",
        "abreve": "\u0103",
        "Abreve": "\u0102",
        "ac": "\u223E",
        "acd": "\u223F",
        "acE": "\u223E\u0333",
        "acirc": "\xe2",
        "Acirc": "\xc2",
        "acute": "\xb4",
        "acy": "\u0430",
        "Acy": "\u0410",
        "aelig": "\xe6",
        "AElig": "\xc6",
        "af": "\u2061",
        "afr": "\uD835\uDD1E",
        "Afr": "\uD835\uDD04",
        "agrave": "\xe0",
        "Agrave": "\xc0",
        "alefsym": "\u2135",
        "aleph": "\u2135",
        "alpha": "\u03B1",
        "Alpha": "\u0391",
        "amacr": "\u0101",
        "Amacr": "\u0100",
        "amalg": "\u2A3F",
        "amp": "&",
        "AMP": "&",
        "and": "\u2227",
        "And": "\u2A53",
        "andand": "\u2A55",
        "andd": "\u2A5C",
        "andslope": "\u2A58",
        "andv": "\u2A5A",
        "ang": "\u2220",
        "ange": "\u29A4",
        "angle": "\u2220",
        "angmsd": "\u2221",
        "angmsdaa": "\u29A8",
        "angmsdab": "\u29A9",
        "angmsdac": "\u29AA",
        "angmsdad": "\u29AB",
        "angmsdae": "\u29AC",
        "angmsdaf": "\u29AD",
        "angmsdag": "\u29AE",
        "angmsdah": "\u29AF",
        "angrt": "\u221F",
        "angrtvb": "\u22BE",
        "angrtvbd": "\u299D",
        "angsph": "\u2222",
        "angst": "\xc5",
        "angzarr": "\u237C",
        "aogon": "\u0105",
        "Aogon": "\u0104",
        "aopf": "\uD835\uDD52",
        "Aopf": "\uD835\uDD38",
        "ap": "\u2248",
        "apacir": "\u2A6F",
        "ape": "\u224A",
        "apE": "\u2A70",
        "apid": "\u224B",
        "apos": "'",
        "ApplyFunction": "\u2061",
        "approx": "\u2248",
        "approxeq": "\u224A",
        "aring": "\xe5",
        "Aring": "\xc5",
        "ascr": "\uD835\uDCB6",
        "Ascr": "\uD835\uDC9C",
        "Assign": "\u2254",
        "ast": "*",
        "asymp": "\u2248",
        "asympeq": "\u224D",
        "atilde": "\xe3",
        "Atilde": "\xc3",
        "auml": "\xe4",
        "Auml": "\xc4",
        "awconint": "\u2233",
        "awint": "\u2A11",
        "backcong": "\u224C",
        "backepsilon": "\u03F6",
        "backprime": "\u2035",
        "backsim": "\u223D",
        "backsimeq": "\u22CD",
        "Backslash": "\u2216",
        "Barv": "\u2AE7",
        "barvee": "\u22BD",
        "barwed": "\u2305",
        "Barwed": "\u2306",
        "barwedge": "\u2305",
        "bbrk": "\u23B5",
        "bbrktbrk": "\u23B6",
        "bcong": "\u224C",
        "bcy": "\u0431",
        "Bcy": "\u0411",
        "bdquo": "\u201E",
        "becaus": "\u2235",
        "because": "\u2235",
        "Because": "\u2235",
        "bemptyv": "\u29B0",
        "bepsi": "\u03F6",
        "bernou": "\u212C",
        "Bernoullis": "\u212C",
        "beta": "\u03B2",
        "Beta": "\u0392",
        "beth": "\u2136",
        "between": "\u226C",
        "bfr": "\uD835\uDD1F",
        "Bfr": "\uD835\uDD05",
        "bigcap": "\u22C2",
        "bigcirc": "\u25EF",
        "bigcup": "\u22C3",
        "bigodot": "\u2A00",
        "bigoplus": "\u2A01",
        "bigotimes": "\u2A02",
        "bigsqcup": "\u2A06",
        "bigstar": "\u2605",
        "bigtriangledown": "\u25BD",
        "bigtriangleup": "\u25B3",
        "biguplus": "\u2A04",
        "bigvee": "\u22C1",
        "bigwedge": "\u22C0",
        "bkarow": "\u290D",
        "blacklozenge": "\u29EB",
        "blacksquare": "\u25AA",
        "blacktriangle": "\u25B4",
        "blacktriangledown": "\u25BE",
        "blacktriangleleft": "\u25C2",
        "blacktriangleright": "\u25B8",
        "blank": "\u2423",
        "blk12": "\u2592",
        "blk14": "\u2591",
        "blk34": "\u2593",
        "block": "\u2588",
        "bne": "=\u20E5",
        "bnequiv": "\u2261\u20E5",
        "bnot": "\u2310",
        "bNot": "\u2AED",
        "bopf": "\uD835\uDD53",
        "Bopf": "\uD835\uDD39",
        "bot": "\u22A5",
        "bottom": "\u22A5",
        "bowtie": "\u22C8",
        "boxbox": "\u29C9",
        "boxdl": "\u2510",
        "boxdL": "\u2555",
        "boxDl": "\u2556",
        "boxDL": "\u2557",
        "boxdr": "\u250C",
        "boxdR": "\u2552",
        "boxDr": "\u2553",
        "boxDR": "\u2554",
        "boxh": "\u2500",
        "boxH": "\u2550",
        "boxhd": "\u252C",
        "boxhD": "\u2565",
        "boxHd": "\u2564",
        "boxHD": "\u2566",
        "boxhu": "\u2534",
        "boxhU": "\u2568",
        "boxHu": "\u2567",
        "boxHU": "\u2569",
        "boxminus": "\u229F",
        "boxplus": "\u229E",
        "boxtimes": "\u22A0",
        "boxul": "\u2518",
        "boxuL": "\u255B",
        "boxUl": "\u255C",
        "boxUL": "\u255D",
        "boxur": "\u2514",
        "boxuR": "\u2558",
        "boxUr": "\u2559",
        "boxUR": "\u255A",
        "boxv": "\u2502",
        "boxV": "\u2551",
        "boxvh": "\u253C",
        "boxvH": "\u256A",
        "boxVh": "\u256B",
        "boxVH": "\u256C",
        "boxvl": "\u2524",
        "boxvL": "\u2561",
        "boxVl": "\u2562",
        "boxVL": "\u2563",
        "boxvr": "\u251C",
        "boxvR": "\u255E",
        "boxVr": "\u255F",
        "boxVR": "\u2560",
        "bprime": "\u2035",
        "breve": "\u02D8",
        "Breve": "\u02D8",
        "brvbar": "\xa6",
        "bscr": "\uD835\uDCB7",
        "Bscr": "\u212C",
        "bsemi": "\u204F",
        "bsim": "\u223D",
        "bsime": "\u22CD",
        "bsol": "\\",
        "bsolb": "\u29C5",
        "bsolhsub": "\u27C8",
        "bull": "\u2022",
        "bullet": "\u2022",
        "bump": "\u224E",
        "bumpe": "\u224F",
        "bumpE": "\u2AAE",
        "bumpeq": "\u224F",
        "Bumpeq": "\u224E",
        "cacute": "\u0107",
        "Cacute": "\u0106",
        "cap": "\u2229",
        "Cap": "\u22D2",
        "capand": "\u2A44",
        "capbrcup": "\u2A49",
        "capcap": "\u2A4B",
        "capcup": "\u2A47",
        "capdot": "\u2A40",
        "CapitalDifferentialD": "\u2145",
        "caps": "\u2229\uFE00",
        "caret": "\u2041",
        "caron": "\u02C7",
        "Cayleys": "\u212D",
        "ccaps": "\u2A4D",
        "ccaron": "\u010D",
        "Ccaron": "\u010C",
        "ccedil": "\xe7",
        "Ccedil": "\xc7",
        "ccirc": "\u0109",
        "Ccirc": "\u0108",
        "Cconint": "\u2230",
        "ccups": "\u2A4C",
        "ccupssm": "\u2A50",
        "cdot": "\u010B",
        "Cdot": "\u010A",
        "cedil": "\xb8",
        "Cedilla": "\xb8",
        "cemptyv": "\u29B2",
        "cent": "\xa2",
        "centerdot": "\xb7",
        "CenterDot": "\xb7",
        "cfr": "\uD835\uDD20",
        "Cfr": "\u212D",
        "chcy": "\u0447",
        "CHcy": "\u0427",
        "check": "\u2713",
        "checkmark": "\u2713",
        "chi": "\u03C7",
        "Chi": "\u03A7",
        "cir": "\u25CB",
        "circ": "\u02C6",
        "circeq": "\u2257",
        "circlearrowleft": "\u21BA",
        "circlearrowright": "\u21BB",
        "circledast": "\u229B",
        "circledcirc": "\u229A",
        "circleddash": "\u229D",
        "CircleDot": "\u2299",
        "circledR": "\xae",
        "circledS": "\u24C8",
        "CircleMinus": "\u2296",
        "CirclePlus": "\u2295",
        "CircleTimes": "\u2297",
        "cire": "\u2257",
        "cirE": "\u29C3",
        "cirfnint": "\u2A10",
        "cirmid": "\u2AEF",
        "cirscir": "\u29C2",
        "ClockwiseContourIntegral": "\u2232",
        "CloseCurlyDoubleQuote": "\u201D",
        "CloseCurlyQuote": "\u2019",
        "clubs": "\u2663",
        "clubsuit": "\u2663",
        "colon": ":",
        "Colon": "\u2237",
        "colone": "\u2254",
        "Colone": "\u2A74",
        "coloneq": "\u2254",
        "comma": ",",
        "commat": "@",
        "comp": "\u2201",
        "compfn": "\u2218",
        "complement": "\u2201",
        "complexes": "\u2102",
        "cong": "\u2245",
        "congdot": "\u2A6D",
        "Congruent": "\u2261",
        "conint": "\u222E",
        "Conint": "\u222F",
        "ContourIntegral": "\u222E",
        "copf": "\uD835\uDD54",
        "Copf": "\u2102",
        "coprod": "\u2210",
        "Coproduct": "\u2210",
        "copy": "\xa9",
        "COPY": "\xa9",
        "copysr": "\u2117",
        "CounterClockwiseContourIntegral": "\u2233",
        "crarr": "\u21B5",
        "cross": "\u2717",
        "Cross": "\u2A2F",
        "cscr": "\uD835\uDCB8",
        "Cscr": "\uD835\uDC9E",
        "csub": "\u2ACF",
        "csube": "\u2AD1",
        "csup": "\u2AD0",
        "csupe": "\u2AD2",
        "ctdot": "\u22EF",
        "cudarrl": "\u2938",
        "cudarrr": "\u2935",
        "cuepr": "\u22DE",
        "cuesc": "\u22DF",
        "cularr": "\u21B6",
        "cularrp": "\u293D",
        "cup": "\u222A",
        "Cup": "\u22D3",
        "cupbrcap": "\u2A48",
        "cupcap": "\u2A46",
        "CupCap": "\u224D",
        "cupcup": "\u2A4A",
        "cupdot": "\u228D",
        "cupor": "\u2A45",
        "cups": "\u222A\uFE00",
        "curarr": "\u21B7",
        "curarrm": "\u293C",
        "curlyeqprec": "\u22DE",
        "curlyeqsucc": "\u22DF",
        "curlyvee": "\u22CE",
        "curlywedge": "\u22CF",
        "curren": "\xa4",
        "curvearrowleft": "\u21B6",
        "curvearrowright": "\u21B7",
        "cuvee": "\u22CE",
        "cuwed": "\u22CF",
        "cwconint": "\u2232",
        "cwint": "\u2231",
        "cylcty": "\u232D",
        "dagger": "\u2020",
        "Dagger": "\u2021",
        "daleth": "\u2138",
        "darr": "\u2193",
        "dArr": "\u21D3",
        "Darr": "\u21A1",
        "dash": "\u2010",
        "dashv": "\u22A3",
        "Dashv": "\u2AE4",
        "dbkarow": "\u290F",
        "dblac": "\u02DD",
        "dcaron": "\u010F",
        "Dcaron": "\u010E",
        "dcy": "\u0434",
        "Dcy": "\u0414",
        "dd": "\u2146",
        "DD": "\u2145",
        "ddagger": "\u2021",
        "ddarr": "\u21CA",
        "DDotrahd": "\u2911",
        "ddotseq": "\u2A77",
        "deg": "\xb0",
        "Del": "\u2207",
        "delta": "\u03B4",
        "Delta": "\u0394",
        "demptyv": "\u29B1",
        "dfisht": "\u297F",
        "dfr": "\uD835\uDD21",
        "Dfr": "\uD835\uDD07",
        "dHar": "\u2965",
        "dharl": "\u21C3",
        "dharr": "\u21C2",
        "DiacriticalAcute": "\xb4",
        "DiacriticalDot": "\u02D9",
        "DiacriticalDoubleAcute": "\u02DD",
        "DiacriticalGrave": "`",
        "DiacriticalTilde": "\u02DC",
        "diam": "\u22C4",
        "diamond": "\u22C4",
        "Diamond": "\u22C4",
        "diamondsuit": "\u2666",
        "diams": "\u2666",
        "die": "\xa8",
        "DifferentialD": "\u2146",
        "digamma": "\u03DD",
        "disin": "\u22F2",
        "div": "\xf7",
        "divide": "\xf7",
        "divideontimes": "\u22C7",
        "divonx": "\u22C7",
        "djcy": "\u0452",
        "DJcy": "\u0402",
        "dlcorn": "\u231E",
        "dlcrop": "\u230D",
        "dollar": "$",
        "dopf": "\uD835\uDD55",
        "Dopf": "\uD835\uDD3B",
        "dot": "\u02D9",
        "Dot": "\xa8",
        "DotDot": "\u20DC",
        "doteq": "\u2250",
        "doteqdot": "\u2251",
        "DotEqual": "\u2250",
        "dotminus": "\u2238",
        "dotplus": "\u2214",
        "dotsquare": "\u22A1",
        "doublebarwedge": "\u2306",
        "DoubleContourIntegral": "\u222F",
        "DoubleDot": "\xa8",
        "DoubleDownArrow": "\u21D3",
        "DoubleLeftArrow": "\u21D0",
        "DoubleLeftRightArrow": "\u21D4",
        "DoubleLeftTee": "\u2AE4",
        "DoubleLongLeftArrow": "\u27F8",
        "DoubleLongLeftRightArrow": "\u27FA",
        "DoubleLongRightArrow": "\u27F9",
        "DoubleRightArrow": "\u21D2",
        "DoubleRightTee": "\u22A8",
        "DoubleUpArrow": "\u21D1",
        "DoubleUpDownArrow": "\u21D5",
        "DoubleVerticalBar": "\u2225",
        "downarrow": "\u2193",
        "Downarrow": "\u21D3",
        "DownArrow": "\u2193",
        "DownArrowBar": "\u2913",
        "DownArrowUpArrow": "\u21F5",
        "DownBreve": "\u0311",
        "downdownarrows": "\u21CA",
        "downharpoonleft": "\u21C3",
        "downharpoonright": "\u21C2",
        "DownLeftRightVector": "\u2950",
        "DownLeftTeeVector": "\u295E",
        "DownLeftVector": "\u21BD",
        "DownLeftVectorBar": "\u2956",
        "DownRightTeeVector": "\u295F",
        "DownRightVector": "\u21C1",
        "DownRightVectorBar": "\u2957",
        "DownTee": "\u22A4",
        "DownTeeArrow": "\u21A7",
        "drbkarow": "\u2910",
        "drcorn": "\u231F",
        "drcrop": "\u230C",
        "dscr": "\uD835\uDCB9",
        "Dscr": "\uD835\uDC9F",
        "dscy": "\u0455",
        "DScy": "\u0405",
        "dsol": "\u29F6",
        "dstrok": "\u0111",
        "Dstrok": "\u0110",
        "dtdot": "\u22F1",
        "dtri": "\u25BF",
        "dtrif": "\u25BE",
        "duarr": "\u21F5",
        "duhar": "\u296F",
        "dwangle": "\u29A6",
        "dzcy": "\u045F",
        "DZcy": "\u040F",
        "dzigrarr": "\u27FF",
        "eacute": "\xe9",
        "Eacute": "\xc9",
        "easter": "\u2A6E",
        "ecaron": "\u011B",
        "Ecaron": "\u011A",
        "ecir": "\u2256",
        "ecirc": "\xea",
        "Ecirc": "\xca",
        "ecolon": "\u2255",
        "ecy": "\u044D",
        "Ecy": "\u042D",
        "eDDot": "\u2A77",
        "edot": "\u0117",
        "eDot": "\u2251",
        "Edot": "\u0116",
        "ee": "\u2147",
        "efDot": "\u2252",
        "efr": "\uD835\uDD22",
        "Efr": "\uD835\uDD08",
        "eg": "\u2A9A",
        "egrave": "\xe8",
        "Egrave": "\xc8",
        "egs": "\u2A96",
        "egsdot": "\u2A98",
        "el": "\u2A99",
        "Element": "\u2208",
        "elinters": "\u23E7",
        "ell": "\u2113",
        "els": "\u2A95",
        "elsdot": "\u2A97",
        "emacr": "\u0113",
        "Emacr": "\u0112",
        "empty": "\u2205",
        "emptyset": "\u2205",
        "EmptySmallSquare": "\u25FB",
        "emptyv": "\u2205",
        "EmptyVerySmallSquare": "\u25AB",
        "emsp": "\u2003",
        "emsp13": "\u2004",
        "emsp14": "\u2005",
        "eng": "\u014B",
        "ENG": "\u014A",
        "ensp": "\u2002",
        "eogon": "\u0119",
        "Eogon": "\u0118",
        "eopf": "\uD835\uDD56",
        "Eopf": "\uD835\uDD3C",
        "epar": "\u22D5",
        "eparsl": "\u29E3",
        "eplus": "\u2A71",
        "epsi": "\u03B5",
        "epsilon": "\u03B5",
        "Epsilon": "\u0395",
        "epsiv": "\u03F5",
        "eqcirc": "\u2256",
        "eqcolon": "\u2255",
        "eqsim": "\u2242",
        "eqslantgtr": "\u2A96",
        "eqslantless": "\u2A95",
        "Equal": "\u2A75",
        "equals": "=",
        "EqualTilde": "\u2242",
        "equest": "\u225F",
        "Equilibrium": "\u21CC",
        "equiv": "\u2261",
        "equivDD": "\u2A78",
        "eqvparsl": "\u29E5",
        "erarr": "\u2971",
        "erDot": "\u2253",
        "escr": "\u212F",
        "Escr": "\u2130",
        "esdot": "\u2250",
        "esim": "\u2242",
        "Esim": "\u2A73",
        "eta": "\u03B7",
        "Eta": "\u0397",
        "eth": "\xf0",
        "ETH": "\xd0",
        "euml": "\xeb",
        "Euml": "\xcb",
        "euro": "\u20AC",
        "excl": "!",
        "exist": "\u2203",
        "Exists": "\u2203",
        "expectation": "\u2130",
        "exponentiale": "\u2147",
        "ExponentialE": "\u2147",
        "fallingdotseq": "\u2252",
        "fcy": "\u0444",
        "Fcy": "\u0424",
        "female": "\u2640",
        "ffilig": "\uFB03",
        "fflig": "\uFB00",
        "ffllig": "\uFB04",
        "ffr": "\uD835\uDD23",
        "Ffr": "\uD835\uDD09",
        "filig": "\uFB01",
        "FilledSmallSquare": "\u25FC",
        "FilledVerySmallSquare": "\u25AA",
        "fjlig": "fj",
        "flat": "\u266D",
        "fllig": "\uFB02",
        "fltns": "\u25B1",
        "fnof": "\u0192",
        "fopf": "\uD835\uDD57",
        "Fopf": "\uD835\uDD3D",
        "forall": "\u2200",
        "ForAll": "\u2200",
        "fork": "\u22D4",
        "forkv": "\u2AD9",
        "Fouriertrf": "\u2131",
        "fpartint": "\u2A0D",
        "frac12": "\xbd",
        "frac13": "\u2153",
        "frac14": "\xbc",
        "frac15": "\u2155",
        "frac16": "\u2159",
        "frac18": "\u215B",
        "frac23": "\u2154",
        "frac25": "\u2156",
        "frac34": "\xbe",
        "frac35": "\u2157",
        "frac38": "\u215C",
        "frac45": "\u2158",
        "frac56": "\u215A",
        "frac58": "\u215D",
        "frac78": "\u215E",
        "frasl": "\u2044",
        "frown": "\u2322",
        "fscr": "\uD835\uDCBB",
        "Fscr": "\u2131",
        "gacute": "\u01F5",
        "gamma": "\u03B3",
        "Gamma": "\u0393",
        "gammad": "\u03DD",
        "Gammad": "\u03DC",
        "gap": "\u2A86",
        "gbreve": "\u011F",
        "Gbreve": "\u011E",
        "Gcedil": "\u0122",
        "gcirc": "\u011D",
        "Gcirc": "\u011C",
        "gcy": "\u0433",
        "Gcy": "\u0413",
        "gdot": "\u0121",
        "Gdot": "\u0120",
        "ge": "\u2265",
        "gE": "\u2267",
        "gel": "\u22DB",
        "gEl": "\u2A8C",
        "geq": "\u2265",
        "geqq": "\u2267",
        "geqslant": "\u2A7E",
        "ges": "\u2A7E",
        "gescc": "\u2AA9",
        "gesdot": "\u2A80",
        "gesdoto": "\u2A82",
        "gesdotol": "\u2A84",
        "gesl": "\u22DB\uFE00",
        "gesles": "\u2A94",
        "gfr": "\uD835\uDD24",
        "Gfr": "\uD835\uDD0A",
        "gg": "\u226B",
        "Gg": "\u22D9",
        "ggg": "\u22D9",
        "gimel": "\u2137",
        "gjcy": "\u0453",
        "GJcy": "\u0403",
        "gl": "\u2277",
        "gla": "\u2AA5",
        "glE": "\u2A92",
        "glj": "\u2AA4",
        "gnap": "\u2A8A",
        "gnapprox": "\u2A8A",
        "gne": "\u2A88",
        "gnE": "\u2269",
        "gneq": "\u2A88",
        "gneqq": "\u2269",
        "gnsim": "\u22E7",
        "gopf": "\uD835\uDD58",
        "Gopf": "\uD835\uDD3E",
        "grave": "`",
        "GreaterEqual": "\u2265",
        "GreaterEqualLess": "\u22DB",
        "GreaterFullEqual": "\u2267",
        "GreaterGreater": "\u2AA2",
        "GreaterLess": "\u2277",
        "GreaterSlantEqual": "\u2A7E",
        "GreaterTilde": "\u2273",
        "gscr": "\u210A",
        "Gscr": "\uD835\uDCA2",
        "gsim": "\u2273",
        "gsime": "\u2A8E",
        "gsiml": "\u2A90",
        "gt": ">",
        "Gt": "\u226B",
        "GT": ">",
        "gtcc": "\u2AA7",
        "gtcir": "\u2A7A",
        "gtdot": "\u22D7",
        "gtlPar": "\u2995",
        "gtquest": "\u2A7C",
        "gtrapprox": "\u2A86",
        "gtrarr": "\u2978",
        "gtrdot": "\u22D7",
        "gtreqless": "\u22DB",
        "gtreqqless": "\u2A8C",
        "gtrless": "\u2277",
        "gtrsim": "\u2273",
        "gvertneqq": "\u2269\uFE00",
        "gvnE": "\u2269\uFE00",
        "Hacek": "\u02C7",
        "hairsp": "\u200A",
        "half": "\xbd",
        "hamilt": "\u210B",
        "hardcy": "\u044A",
        "HARDcy": "\u042A",
        "harr": "\u2194",
        "hArr": "\u21D4",
        "harrcir": "\u2948",
        "harrw": "\u21AD",
        "Hat": "^",
        "hbar": "\u210F",
        "hcirc": "\u0125",
        "Hcirc": "\u0124",
        "hearts": "\u2665",
        "heartsuit": "\u2665",
        "hellip": "\u2026",
        "hercon": "\u22B9",
        "hfr": "\uD835\uDD25",
        "Hfr": "\u210C",
        "HilbertSpace": "\u210B",
        "hksearow": "\u2925",
        "hkswarow": "\u2926",
        "hoarr": "\u21FF",
        "homtht": "\u223B",
        "hookleftarrow": "\u21A9",
        "hookrightarrow": "\u21AA",
        "hopf": "\uD835\uDD59",
        "Hopf": "\u210D",
        "horbar": "\u2015",
        "HorizontalLine": "\u2500",
        "hscr": "\uD835\uDCBD",
        "Hscr": "\u210B",
        "hslash": "\u210F",
        "hstrok": "\u0127",
        "Hstrok": "\u0126",
        "HumpDownHump": "\u224E",
        "HumpEqual": "\u224F",
        "hybull": "\u2043",
        "hyphen": "\u2010",
        "iacute": "\xed",
        "Iacute": "\xcd",
        "ic": "\u2063",
        "icirc": "\xee",
        "Icirc": "\xce",
        "icy": "\u0438",
        "Icy": "\u0418",
        "Idot": "\u0130",
        "iecy": "\u0435",
        "IEcy": "\u0415",
        "iexcl": "\xa1",
        "iff": "\u21D4",
        "ifr": "\uD835\uDD26",
        "Ifr": "\u2111",
        "igrave": "\xec",
        "Igrave": "\xcc",
        "ii": "\u2148",
        "iiiint": "\u2A0C",
        "iiint": "\u222D",
        "iinfin": "\u29DC",
        "iiota": "\u2129",
        "ijlig": "\u0133",
        "IJlig": "\u0132",
        "Im": "\u2111",
        "imacr": "\u012B",
        "Imacr": "\u012A",
        "image": "\u2111",
        "ImaginaryI": "\u2148",
        "imagline": "\u2110",
        "imagpart": "\u2111",
        "imath": "\u0131",
        "imof": "\u22B7",
        "imped": "\u01B5",
        "Implies": "\u21D2",
        "in": "\u2208",
        "incare": "\u2105",
        "infin": "\u221E",
        "infintie": "\u29DD",
        "inodot": "\u0131",
        "int": "\u222B",
        "Int": "\u222C",
        "intcal": "\u22BA",
        "integers": "\u2124",
        "Integral": "\u222B",
        "intercal": "\u22BA",
        "Intersection": "\u22C2",
        "intlarhk": "\u2A17",
        "intprod": "\u2A3C",
        "InvisibleComma": "\u2063",
        "InvisibleTimes": "\u2062",
        "iocy": "\u0451",
        "IOcy": "\u0401",
        "iogon": "\u012F",
        "Iogon": "\u012E",
        "iopf": "\uD835\uDD5A",
        "Iopf": "\uD835\uDD40",
        "iota": "\u03B9",
        "Iota": "\u0399",
        "iprod": "\u2A3C",
        "iquest": "\xbf",
        "iscr": "\uD835\uDCBE",
        "Iscr": "\u2110",
        "isin": "\u2208",
        "isindot": "\u22F5",
        "isinE": "\u22F9",
        "isins": "\u22F4",
        "isinsv": "\u22F3",
        "isinv": "\u2208",
        "it": "\u2062",
        "itilde": "\u0129",
        "Itilde": "\u0128",
        "iukcy": "\u0456",
        "Iukcy": "\u0406",
        "iuml": "\xef",
        "Iuml": "\xcf",
        "jcirc": "\u0135",
        "Jcirc": "\u0134",
        "jcy": "\u0439",
        "Jcy": "\u0419",
        "jfr": "\uD835\uDD27",
        "Jfr": "\uD835\uDD0D",
        "jmath": "\u0237",
        "jopf": "\uD835\uDD5B",
        "Jopf": "\uD835\uDD41",
        "jscr": "\uD835\uDCBF",
        "Jscr": "\uD835\uDCA5",
        "jsercy": "\u0458",
        "Jsercy": "\u0408",
        "jukcy": "\u0454",
        "Jukcy": "\u0404",
        "kappa": "\u03BA",
        "Kappa": "\u039A",
        "kappav": "\u03F0",
        "kcedil": "\u0137",
        "Kcedil": "\u0136",
        "kcy": "\u043A",
        "Kcy": "\u041A",
        "kfr": "\uD835\uDD28",
        "Kfr": "\uD835\uDD0E",
        "kgreen": "\u0138",
        "khcy": "\u0445",
        "KHcy": "\u0425",
        "kjcy": "\u045C",
        "KJcy": "\u040C",
        "kopf": "\uD835\uDD5C",
        "Kopf": "\uD835\uDD42",
        "kscr": "\uD835\uDCC0",
        "Kscr": "\uD835\uDCA6",
        "lAarr": "\u21DA",
        "lacute": "\u013A",
        "Lacute": "\u0139",
        "laemptyv": "\u29B4",
        "lagran": "\u2112",
        "lambda": "\u03BB",
        "Lambda": "\u039B",
        "lang": "\u27E8",
        "Lang": "\u27EA",
        "langd": "\u2991",
        "langle": "\u27E8",
        "lap": "\u2A85",
        "Laplacetrf": "\u2112",
        "laquo": "\xab",
        "larr": "\u2190",
        "lArr": "\u21D0",
        "Larr": "\u219E",
        "larrb": "\u21E4",
        "larrbfs": "\u291F",
        "larrfs": "\u291D",
        "larrhk": "\u21A9",
        "larrlp": "\u21AB",
        "larrpl": "\u2939",
        "larrsim": "\u2973",
        "larrtl": "\u21A2",
        "lat": "\u2AAB",
        "latail": "\u2919",
        "lAtail": "\u291B",
        "late": "\u2AAD",
        "lates": "\u2AAD\uFE00",
        "lbarr": "\u290C",
        "lBarr": "\u290E",
        "lbbrk": "\u2772",
        "lbrace": "{",
        "lbrack": "[",
        "lbrke": "\u298B",
        "lbrksld": "\u298F",
        "lbrkslu": "\u298D",
        "lcaron": "\u013E",
        "Lcaron": "\u013D",
        "lcedil": "\u013C",
        "Lcedil": "\u013B",
        "lceil": "\u2308",
        "lcub": "{",
        "lcy": "\u043B",
        "Lcy": "\u041B",
        "ldca": "\u2936",
        "ldquo": "\u201C",
        "ldquor": "\u201E",
        "ldrdhar": "\u2967",
        "ldrushar": "\u294B",
        "ldsh": "\u21B2",
        "le": "\u2264",
        "lE": "\u2266",
        "LeftAngleBracket": "\u27E8",
        "leftarrow": "\u2190",
        "Leftarrow": "\u21D0",
        "LeftArrow": "\u2190",
        "LeftArrowBar": "\u21E4",
        "LeftArrowRightArrow": "\u21C6",
        "leftarrowtail": "\u21A2",
        "LeftCeiling": "\u2308",
        "LeftDoubleBracket": "\u27E6",
        "LeftDownTeeVector": "\u2961",
        "LeftDownVector": "\u21C3",
        "LeftDownVectorBar": "\u2959",
        "LeftFloor": "\u230A",
        "leftharpoondown": "\u21BD",
        "leftharpoonup": "\u21BC",
        "leftleftarrows": "\u21C7",
        "leftrightarrow": "\u2194",
        "Leftrightarrow": "\u21D4",
        "LeftRightArrow": "\u2194",
        "leftrightarrows": "\u21C6",
        "leftrightharpoons": "\u21CB",
        "leftrightsquigarrow": "\u21AD",
        "LeftRightVector": "\u294E",
        "LeftTee": "\u22A3",
        "LeftTeeArrow": "\u21A4",
        "LeftTeeVector": "\u295A",
        "leftthreetimes": "\u22CB",
        "LeftTriangle": "\u22B2",
        "LeftTriangleBar": "\u29CF",
        "LeftTriangleEqual": "\u22B4",
        "LeftUpDownVector": "\u2951",
        "LeftUpTeeVector": "\u2960",
        "LeftUpVector": "\u21BF",
        "LeftUpVectorBar": "\u2958",
        "LeftVector": "\u21BC",
        "LeftVectorBar": "\u2952",
        "leg": "\u22DA",
        "lEg": "\u2A8B",
        "leq": "\u2264",
        "leqq": "\u2266",
        "leqslant": "\u2A7D",
        "les": "\u2A7D",
        "lescc": "\u2AA8",
        "lesdot": "\u2A7F",
        "lesdoto": "\u2A81",
        "lesdotor": "\u2A83",
        "lesg": "\u22DA\uFE00",
        "lesges": "\u2A93",
        "lessapprox": "\u2A85",
        "lessdot": "\u22D6",
        "lesseqgtr": "\u22DA",
        "lesseqqgtr": "\u2A8B",
        "LessEqualGreater": "\u22DA",
        "LessFullEqual": "\u2266",
        "LessGreater": "\u2276",
        "lessgtr": "\u2276",
        "LessLess": "\u2AA1",
        "lesssim": "\u2272",
        "LessSlantEqual": "\u2A7D",
        "LessTilde": "\u2272",
        "lfisht": "\u297C",
        "lfloor": "\u230A",
        "lfr": "\uD835\uDD29",
        "Lfr": "\uD835\uDD0F",
        "lg": "\u2276",
        "lgE": "\u2A91",
        "lHar": "\u2962",
        "lhard": "\u21BD",
        "lharu": "\u21BC",
        "lharul": "\u296A",
        "lhblk": "\u2584",
        "ljcy": "\u0459",
        "LJcy": "\u0409",
        "ll": "\u226A",
        "Ll": "\u22D8",
        "llarr": "\u21C7",
        "llcorner": "\u231E",
        "Lleftarrow": "\u21DA",
        "llhard": "\u296B",
        "lltri": "\u25FA",
        "lmidot": "\u0140",
        "Lmidot": "\u013F",
        "lmoust": "\u23B0",
        "lmoustache": "\u23B0",
        "lnap": "\u2A89",
        "lnapprox": "\u2A89",
        "lne": "\u2A87",
        "lnE": "\u2268",
        "lneq": "\u2A87",
        "lneqq": "\u2268",
        "lnsim": "\u22E6",
        "loang": "\u27EC",
        "loarr": "\u21FD",
        "lobrk": "\u27E6",
        "longleftarrow": "\u27F5",
        "Longleftarrow": "\u27F8",
        "LongLeftArrow": "\u27F5",
        "longleftrightarrow": "\u27F7",
        "Longleftrightarrow": "\u27FA",
        "LongLeftRightArrow": "\u27F7",
        "longmapsto": "\u27FC",
        "longrightarrow": "\u27F6",
        "Longrightarrow": "\u27F9",
        "LongRightArrow": "\u27F6",
        "looparrowleft": "\u21AB",
        "looparrowright": "\u21AC",
        "lopar": "\u2985",
        "lopf": "\uD835\uDD5D",
        "Lopf": "\uD835\uDD43",
        "loplus": "\u2A2D",
        "lotimes": "\u2A34",
        "lowast": "\u2217",
        "lowbar": "_",
        "LowerLeftArrow": "\u2199",
        "LowerRightArrow": "\u2198",
        "loz": "\u25CA",
        "lozenge": "\u25CA",
        "lozf": "\u29EB",
        "lpar": "(",
        "lparlt": "\u2993",
        "lrarr": "\u21C6",
        "lrcorner": "\u231F",
        "lrhar": "\u21CB",
        "lrhard": "\u296D",
        "lrm": "\u200E",
        "lrtri": "\u22BF",
        "lsaquo": "\u2039",
        "lscr": "\uD835\uDCC1",
        "Lscr": "\u2112",
        "lsh": "\u21B0",
        "Lsh": "\u21B0",
        "lsim": "\u2272",
        "lsime": "\u2A8D",
        "lsimg": "\u2A8F",
        "lsqb": "[",
        "lsquo": "\u2018",
        "lsquor": "\u201A",
        "lstrok": "\u0142",
        "Lstrok": "\u0141",
        "lt": "<",
        "Lt": "\u226A",
        "LT": "<",
        "ltcc": "\u2AA6",
        "ltcir": "\u2A79",
        "ltdot": "\u22D6",
        "lthree": "\u22CB",
        "ltimes": "\u22C9",
        "ltlarr": "\u2976",
        "ltquest": "\u2A7B",
        "ltri": "\u25C3",
        "ltrie": "\u22B4",
        "ltrif": "\u25C2",
        "ltrPar": "\u2996",
        "lurdshar": "\u294A",
        "luruhar": "\u2966",
        "lvertneqq": "\u2268\uFE00",
        "lvnE": "\u2268\uFE00",
        "macr": "\xaf",
        "male": "\u2642",
        "malt": "\u2720",
        "maltese": "\u2720",
        "map": "\u21A6",
        "Map": "\u2905",
        "mapsto": "\u21A6",
        "mapstodown": "\u21A7",
        "mapstoleft": "\u21A4",
        "mapstoup": "\u21A5",
        "marker": "\u25AE",
        "mcomma": "\u2A29",
        "mcy": "\u043C",
        "Mcy": "\u041C",
        "mdash": "\u2014",
        "mDDot": "\u223A",
        "measuredangle": "\u2221",
        "MediumSpace": "\u205F",
        "Mellintrf": "\u2133",
        "mfr": "\uD835\uDD2A",
        "Mfr": "\uD835\uDD10",
        "mho": "\u2127",
        "micro": "\xb5",
        "mid": "\u2223",
        "midast": "*",
        "midcir": "\u2AF0",
        "middot": "\xb7",
        "minus": "\u2212",
        "minusb": "\u229F",
        "minusd": "\u2238",
        "minusdu": "\u2A2A",
        "MinusPlus": "\u2213",
        "mlcp": "\u2ADB",
        "mldr": "\u2026",
        "mnplus": "\u2213",
        "models": "\u22A7",
        "mopf": "\uD835\uDD5E",
        "Mopf": "\uD835\uDD44",
        "mp": "\u2213",
        "mscr": "\uD835\uDCC2",
        "Mscr": "\u2133",
        "mstpos": "\u223E",
        "mu": "\u03BC",
        "Mu": "\u039C",
        "multimap": "\u22B8",
        "mumap": "\u22B8",
        "nabla": "\u2207",
        "nacute": "\u0144",
        "Nacute": "\u0143",
        "nang": "\u2220\u20D2",
        "nap": "\u2249",
        "napE": "\u2A70\u0338",
        "napid": "\u224B\u0338",
        "napos": "\u0149",
        "napprox": "\u2249",
        "natur": "\u266E",
        "natural": "\u266E",
        "naturals": "\u2115",
        "nbsp": "\xa0",
        "nbump": "\u224E\u0338",
        "nbumpe": "\u224F\u0338",
        "ncap": "\u2A43",
        "ncaron": "\u0148",
        "Ncaron": "\u0147",
        "ncedil": "\u0146",
        "Ncedil": "\u0145",
        "ncong": "\u2247",
        "ncongdot": "\u2A6D\u0338",
        "ncup": "\u2A42",
        "ncy": "\u043D",
        "Ncy": "\u041D",
        "ndash": "\u2013",
        "ne": "\u2260",
        "nearhk": "\u2924",
        "nearr": "\u2197",
        "neArr": "\u21D7",
        "nearrow": "\u2197",
        "nedot": "\u2250\u0338",
        "NegativeMediumSpace": "\u200B",
        "NegativeThickSpace": "\u200B",
        "NegativeThinSpace": "\u200B",
        "NegativeVeryThinSpace": "\u200B",
        "nequiv": "\u2262",
        "nesear": "\u2928",
        "nesim": "\u2242\u0338",
        "NestedGreaterGreater": "\u226B",
        "NestedLessLess": "\u226A",
        "NewLine": "\n",
        "nexist": "\u2204",
        "nexists": "\u2204",
        "nfr": "\uD835\uDD2B",
        "Nfr": "\uD835\uDD11",
        "nge": "\u2271",
        "ngE": "\u2267\u0338",
        "ngeq": "\u2271",
        "ngeqq": "\u2267\u0338",
        "ngeqslant": "\u2A7E\u0338",
        "nges": "\u2A7E\u0338",
        "nGg": "\u22D9\u0338",
        "ngsim": "\u2275",
        "ngt": "\u226F",
        "nGt": "\u226B\u20D2",
        "ngtr": "\u226F",
        "nGtv": "\u226B\u0338",
        "nharr": "\u21AE",
        "nhArr": "\u21CE",
        "nhpar": "\u2AF2",
        "ni": "\u220B",
        "nis": "\u22FC",
        "nisd": "\u22FA",
        "niv": "\u220B",
        "njcy": "\u045A",
        "NJcy": "\u040A",
        "nlarr": "\u219A",
        "nlArr": "\u21CD",
        "nldr": "\u2025",
        "nle": "\u2270",
        "nlE": "\u2266\u0338",
        "nleftarrow": "\u219A",
        "nLeftarrow": "\u21CD",
        "nleftrightarrow": "\u21AE",
        "nLeftrightarrow": "\u21CE",
        "nleq": "\u2270",
        "nleqq": "\u2266\u0338",
        "nleqslant": "\u2A7D\u0338",
        "nles": "\u2A7D\u0338",
        "nless": "\u226E",
        "nLl": "\u22D8\u0338",
        "nlsim": "\u2274",
        "nlt": "\u226E",
        "nLt": "\u226A\u20D2",
        "nltri": "\u22EA",
        "nltrie": "\u22EC",
        "nLtv": "\u226A\u0338",
        "nmid": "\u2224",
        "NoBreak": "\u2060",
        "NonBreakingSpace": "\xa0",
        "nopf": "\uD835\uDD5F",
        "Nopf": "\u2115",
        "not": "\xac",
        "Not": "\u2AEC",
        "NotCongruent": "\u2262",
        "NotCupCap": "\u226D",
        "NotDoubleVerticalBar": "\u2226",
        "NotElement": "\u2209",
        "NotEqual": "\u2260",
        "NotEqualTilde": "\u2242\u0338",
        "NotExists": "\u2204",
        "NotGreater": "\u226F",
        "NotGreaterEqual": "\u2271",
        "NotGreaterFullEqual": "\u2267\u0338",
        "NotGreaterGreater": "\u226B\u0338",
        "NotGreaterLess": "\u2279",
        "NotGreaterSlantEqual": "\u2A7E\u0338",
        "NotGreaterTilde": "\u2275",
        "NotHumpDownHump": "\u224E\u0338",
        "NotHumpEqual": "\u224F\u0338",
        "notin": "\u2209",
        "notindot": "\u22F5\u0338",
        "notinE": "\u22F9\u0338",
        "notinva": "\u2209",
        "notinvb": "\u22F7",
        "notinvc": "\u22F6",
        "NotLeftTriangle": "\u22EA",
        "NotLeftTriangleBar": "\u29CF\u0338",
        "NotLeftTriangleEqual": "\u22EC",
        "NotLess": "\u226E",
        "NotLessEqual": "\u2270",
        "NotLessGreater": "\u2278",
        "NotLessLess": "\u226A\u0338",
        "NotLessSlantEqual": "\u2A7D\u0338",
        "NotLessTilde": "\u2274",
        "NotNestedGreaterGreater": "\u2AA2\u0338",
        "NotNestedLessLess": "\u2AA1\u0338",
        "notni": "\u220C",
        "notniva": "\u220C",
        "notnivb": "\u22FE",
        "notnivc": "\u22FD",
        "NotPrecedes": "\u2280",
        "NotPrecedesEqual": "\u2AAF\u0338",
        "NotPrecedesSlantEqual": "\u22E0",
        "NotReverseElement": "\u220C",
        "NotRightTriangle": "\u22EB",
        "NotRightTriangleBar": "\u29D0\u0338",
        "NotRightTriangleEqual": "\u22ED",
        "NotSquareSubset": "\u228F\u0338",
        "NotSquareSubsetEqual": "\u22E2",
        "NotSquareSuperset": "\u2290\u0338",
        "NotSquareSupersetEqual": "\u22E3",
        "NotSubset": "\u2282\u20D2",
        "NotSubsetEqual": "\u2288",
        "NotSucceeds": "\u2281",
        "NotSucceedsEqual": "\u2AB0\u0338",
        "NotSucceedsSlantEqual": "\u22E1",
        "NotSucceedsTilde": "\u227F\u0338",
        "NotSuperset": "\u2283\u20D2",
        "NotSupersetEqual": "\u2289",
        "NotTilde": "\u2241",
        "NotTildeEqual": "\u2244",
        "NotTildeFullEqual": "\u2247",
        "NotTildeTilde": "\u2249",
        "NotVerticalBar": "\u2224",
        "npar": "\u2226",
        "nparallel": "\u2226",
        "nparsl": "\u2AFD\u20E5",
        "npart": "\u2202\u0338",
        "npolint": "\u2A14",
        "npr": "\u2280",
        "nprcue": "\u22E0",
        "npre": "\u2AAF\u0338",
        "nprec": "\u2280",
        "npreceq": "\u2AAF\u0338",
        "nrarr": "\u219B",
        "nrArr": "\u21CF",
        "nrarrc": "\u2933\u0338",
        "nrarrw": "\u219D\u0338",
        "nrightarrow": "\u219B",
        "nRightarrow": "\u21CF",
        "nrtri": "\u22EB",
        "nrtrie": "\u22ED",
        "nsc": "\u2281",
        "nsccue": "\u22E1",
        "nsce": "\u2AB0\u0338",
        "nscr": "\uD835\uDCC3",
        "Nscr": "\uD835\uDCA9",
        "nshortmid": "\u2224",
        "nshortparallel": "\u2226",
        "nsim": "\u2241",
        "nsime": "\u2244",
        "nsimeq": "\u2244",
        "nsmid": "\u2224",
        "nspar": "\u2226",
        "nsqsube": "\u22E2",
        "nsqsupe": "\u22E3",
        "nsub": "\u2284",
        "nsube": "\u2288",
        "nsubE": "\u2AC5\u0338",
        "nsubset": "\u2282\u20D2",
        "nsubseteq": "\u2288",
        "nsubseteqq": "\u2AC5\u0338",
        "nsucc": "\u2281",
        "nsucceq": "\u2AB0\u0338",
        "nsup": "\u2285",
        "nsupe": "\u2289",
        "nsupE": "\u2AC6\u0338",
        "nsupset": "\u2283\u20D2",
        "nsupseteq": "\u2289",
        "nsupseteqq": "\u2AC6\u0338",
        "ntgl": "\u2279",
        "ntilde": "\xf1",
        "Ntilde": "\xd1",
        "ntlg": "\u2278",
        "ntriangleleft": "\u22EA",
        "ntrianglelefteq": "\u22EC",
        "ntriangleright": "\u22EB",
        "ntrianglerighteq": "\u22ED",
        "nu": "\u03BD",
        "Nu": "\u039D",
        "num": "#",
        "numero": "\u2116",
        "numsp": "\u2007",
        "nvap": "\u224D\u20D2",
        "nvdash": "\u22AC",
        "nvDash": "\u22AD",
        "nVdash": "\u22AE",
        "nVDash": "\u22AF",
        "nvge": "\u2265\u20D2",
        "nvgt": ">\u20D2",
        "nvHarr": "\u2904",
        "nvinfin": "\u29DE",
        "nvlArr": "\u2902",
        "nvle": "\u2264\u20D2",
        "nvlt": "<\u20D2",
        "nvltrie": "\u22B4\u20D2",
        "nvrArr": "\u2903",
        "nvrtrie": "\u22B5\u20D2",
        "nvsim": "\u223C\u20D2",
        "nwarhk": "\u2923",
        "nwarr": "\u2196",
        "nwArr": "\u21D6",
        "nwarrow": "\u2196",
        "nwnear": "\u2927",
        "oacute": "\xf3",
        "Oacute": "\xd3",
        "oast": "\u229B",
        "ocir": "\u229A",
        "ocirc": "\xf4",
        "Ocirc": "\xd4",
        "ocy": "\u043E",
        "Ocy": "\u041E",
        "odash": "\u229D",
        "odblac": "\u0151",
        "Odblac": "\u0150",
        "odiv": "\u2A38",
        "odot": "\u2299",
        "odsold": "\u29BC",
        "oelig": "\u0153",
        "OElig": "\u0152",
        "ofcir": "\u29BF",
        "ofr": "\uD835\uDD2C",
        "Ofr": "\uD835\uDD12",
        "ogon": "\u02DB",
        "ograve": "\xf2",
        "Ograve": "\xd2",
        "ogt": "\u29C1",
        "ohbar": "\u29B5",
        "ohm": "\u03A9",
        "oint": "\u222E",
        "olarr": "\u21BA",
        "olcir": "\u29BE",
        "olcross": "\u29BB",
        "oline": "\u203E",
        "olt": "\u29C0",
        "omacr": "\u014D",
        "Omacr": "\u014C",
        "omega": "\u03C9",
        "Omega": "\u03A9",
        "omicron": "\u03BF",
        "Omicron": "\u039F",
        "omid": "\u29B6",
        "ominus": "\u2296",
        "oopf": "\uD835\uDD60",
        "Oopf": "\uD835\uDD46",
        "opar": "\u29B7",
        "OpenCurlyDoubleQuote": "\u201C",
        "OpenCurlyQuote": "\u2018",
        "operp": "\u29B9",
        "oplus": "\u2295",
        "or": "\u2228",
        "Or": "\u2A54",
        "orarr": "\u21BB",
        "ord": "\u2A5D",
        "order": "\u2134",
        "orderof": "\u2134",
        "ordf": "\xaa",
        "ordm": "\xba",
        "origof": "\u22B6",
        "oror": "\u2A56",
        "orslope": "\u2A57",
        "orv": "\u2A5B",
        "oS": "\u24C8",
        "oscr": "\u2134",
        "Oscr": "\uD835\uDCAA",
        "oslash": "\xf8",
        "Oslash": "\xd8",
        "osol": "\u2298",
        "otilde": "\xf5",
        "Otilde": "\xd5",
        "otimes": "\u2297",
        "Otimes": "\u2A37",
        "otimesas": "\u2A36",
        "ouml": "\xf6",
        "Ouml": "\xd6",
        "ovbar": "\u233D",
        "OverBar": "\u203E",
        "OverBrace": "\u23DE",
        "OverBracket": "\u23B4",
        "OverParenthesis": "\u23DC",
        "par": "\u2225",
        "para": "\xb6",
        "parallel": "\u2225",
        "parsim": "\u2AF3",
        "parsl": "\u2AFD",
        "part": "\u2202",
        "PartialD": "\u2202",
        "pcy": "\u043F",
        "Pcy": "\u041F",
        "percnt": "%",
        "period": ".",
        "permil": "\u2030",
        "perp": "\u22A5",
        "pertenk": "\u2031",
        "pfr": "\uD835\uDD2D",
        "Pfr": "\uD835\uDD13",
        "phi": "\u03C6",
        "Phi": "\u03A6",
        "phiv": "\u03D5",
        "phmmat": "\u2133",
        "phone": "\u260E",
        "pi": "\u03C0",
        "Pi": "\u03A0",
        "pitchfork": "\u22D4",
        "piv": "\u03D6",
        "planck": "\u210F",
        "planckh": "\u210E",
        "plankv": "\u210F",
        "plus": "+",
        "plusacir": "\u2A23",
        "plusb": "\u229E",
        "pluscir": "\u2A22",
        "plusdo": "\u2214",
        "plusdu": "\u2A25",
        "pluse": "\u2A72",
        "PlusMinus": "\xb1",
        "plusmn": "\xb1",
        "plussim": "\u2A26",
        "plustwo": "\u2A27",
        "pm": "\xb1",
        "Poincareplane": "\u210C",
        "pointint": "\u2A15",
        "popf": "\uD835\uDD61",
        "Popf": "\u2119",
        "pound": "\xa3",
        "pr": "\u227A",
        "Pr": "\u2ABB",
        "prap": "\u2AB7",
        "prcue": "\u227C",
        "pre": "\u2AAF",
        "prE": "\u2AB3",
        "prec": "\u227A",
        "precapprox": "\u2AB7",
        "preccurlyeq": "\u227C",
        "Precedes": "\u227A",
        "PrecedesEqual": "\u2AAF",
        "PrecedesSlantEqual": "\u227C",
        "PrecedesTilde": "\u227E",
        "preceq": "\u2AAF",
        "precnapprox": "\u2AB9",
        "precneqq": "\u2AB5",
        "precnsim": "\u22E8",
        "precsim": "\u227E",
        "prime": "\u2032",
        "Prime": "\u2033",
        "primes": "\u2119",
        "prnap": "\u2AB9",
        "prnE": "\u2AB5",
        "prnsim": "\u22E8",
        "prod": "\u220F",
        "Product": "\u220F",
        "profalar": "\u232E",
        "profline": "\u2312",
        "profsurf": "\u2313",
        "prop": "\u221D",
        "Proportion": "\u2237",
        "Proportional": "\u221D",
        "propto": "\u221D",
        "prsim": "\u227E",
        "prurel": "\u22B0",
        "pscr": "\uD835\uDCC5",
        "Pscr": "\uD835\uDCAB",
        "psi": "\u03C8",
        "Psi": "\u03A8",
        "puncsp": "\u2008",
        "qfr": "\uD835\uDD2E",
        "Qfr": "\uD835\uDD14",
        "qint": "\u2A0C",
        "qopf": "\uD835\uDD62",
        "Qopf": "\u211A",
        "qprime": "\u2057",
        "qscr": "\uD835\uDCC6",
        "Qscr": "\uD835\uDCAC",
        "quaternions": "\u210D",
        "quatint": "\u2A16",
        "quest": "?",
        "questeq": "\u225F",
        "quot": '"',
        "QUOT": '"',
        "rAarr": "\u21DB",
        "race": "\u223D\u0331",
        "racute": "\u0155",
        "Racute": "\u0154",
        "radic": "\u221A",
        "raemptyv": "\u29B3",
        "rang": "\u27E9",
        "Rang": "\u27EB",
        "rangd": "\u2992",
        "range": "\u29A5",
        "rangle": "\u27E9",
        "raquo": "\xbb",
        "rarr": "\u2192",
        "rArr": "\u21D2",
        "Rarr": "\u21A0",
        "rarrap": "\u2975",
        "rarrb": "\u21E5",
        "rarrbfs": "\u2920",
        "rarrc": "\u2933",
        "rarrfs": "\u291E",
        "rarrhk": "\u21AA",
        "rarrlp": "\u21AC",
        "rarrpl": "\u2945",
        "rarrsim": "\u2974",
        "rarrtl": "\u21A3",
        "Rarrtl": "\u2916",
        "rarrw": "\u219D",
        "ratail": "\u291A",
        "rAtail": "\u291C",
        "ratio": "\u2236",
        "rationals": "\u211A",
        "rbarr": "\u290D",
        "rBarr": "\u290F",
        "RBarr": "\u2910",
        "rbbrk": "\u2773",
        "rbrace": "}",
        "rbrack": "]",
        "rbrke": "\u298C",
        "rbrksld": "\u298E",
        "rbrkslu": "\u2990",
        "rcaron": "\u0159",
        "Rcaron": "\u0158",
        "rcedil": "\u0157",
        "Rcedil": "\u0156",
        "rceil": "\u2309",
        "rcub": "}",
        "rcy": "\u0440",
        "Rcy": "\u0420",
        "rdca": "\u2937",
        "rdldhar": "\u2969",
        "rdquo": "\u201D",
        "rdquor": "\u201D",
        "rdsh": "\u21B3",
        "Re": "\u211C",
        "real": "\u211C",
        "realine": "\u211B",
        "realpart": "\u211C",
        "reals": "\u211D",
        "rect": "\u25AD",
        "reg": "\xae",
        "REG": "\xae",
        "ReverseElement": "\u220B",
        "ReverseEquilibrium": "\u21CB",
        "ReverseUpEquilibrium": "\u296F",
        "rfisht": "\u297D",
        "rfloor": "\u230B",
        "rfr": "\uD835\uDD2F",
        "Rfr": "\u211C",
        "rHar": "\u2964",
        "rhard": "\u21C1",
        "rharu": "\u21C0",
        "rharul": "\u296C",
        "rho": "\u03C1",
        "Rho": "\u03A1",
        "rhov": "\u03F1",
        "RightAngleBracket": "\u27E9",
        "rightarrow": "\u2192",
        "Rightarrow": "\u21D2",
        "RightArrow": "\u2192",
        "RightArrowBar": "\u21E5",
        "RightArrowLeftArrow": "\u21C4",
        "rightarrowtail": "\u21A3",
        "RightCeiling": "\u2309",
        "RightDoubleBracket": "\u27E7",
        "RightDownTeeVector": "\u295D",
        "RightDownVector": "\u21C2",
        "RightDownVectorBar": "\u2955",
        "RightFloor": "\u230B",
        "rightharpoondown": "\u21C1",
        "rightharpoonup": "\u21C0",
        "rightleftarrows": "\u21C4",
        "rightleftharpoons": "\u21CC",
        "rightrightarrows": "\u21C9",
        "rightsquigarrow": "\u219D",
        "RightTee": "\u22A2",
        "RightTeeArrow": "\u21A6",
        "RightTeeVector": "\u295B",
        "rightthreetimes": "\u22CC",
        "RightTriangle": "\u22B3",
        "RightTriangleBar": "\u29D0",
        "RightTriangleEqual": "\u22B5",
        "RightUpDownVector": "\u294F",
        "RightUpTeeVector": "\u295C",
        "RightUpVector": "\u21BE",
        "RightUpVectorBar": "\u2954",
        "RightVector": "\u21C0",
        "RightVectorBar": "\u2953",
        "ring": "\u02DA",
        "risingdotseq": "\u2253",
        "rlarr": "\u21C4",
        "rlhar": "\u21CC",
        "rlm": "\u200F",
        "rmoust": "\u23B1",
        "rmoustache": "\u23B1",
        "rnmid": "\u2AEE",
        "roang": "\u27ED",
        "roarr": "\u21FE",
        "robrk": "\u27E7",
        "ropar": "\u2986",
        "ropf": "\uD835\uDD63",
        "Ropf": "\u211D",
        "roplus": "\u2A2E",
        "rotimes": "\u2A35",
        "RoundImplies": "\u2970",
        "rpar": ")",
        "rpargt": "\u2994",
        "rppolint": "\u2A12",
        "rrarr": "\u21C9",
        "Rrightarrow": "\u21DB",
        "rsaquo": "\u203A",
        "rscr": "\uD835\uDCC7",
        "Rscr": "\u211B",
        "rsh": "\u21B1",
        "Rsh": "\u21B1",
        "rsqb": "]",
        "rsquo": "\u2019",
        "rsquor": "\u2019",
        "rthree": "\u22CC",
        "rtimes": "\u22CA",
        "rtri": "\u25B9",
        "rtrie": "\u22B5",
        "rtrif": "\u25B8",
        "rtriltri": "\u29CE",
        "RuleDelayed": "\u29F4",
        "ruluhar": "\u2968",
        "rx": "\u211E",
        "sacute": "\u015B",
        "Sacute": "\u015A",
        "sbquo": "\u201A",
        "sc": "\u227B",
        "Sc": "\u2ABC",
        "scap": "\u2AB8",
        "scaron": "\u0161",
        "Scaron": "\u0160",
        "sccue": "\u227D",
        "sce": "\u2AB0",
        "scE": "\u2AB4",
        "scedil": "\u015F",
        "Scedil": "\u015E",
        "scirc": "\u015D",
        "Scirc": "\u015C",
        "scnap": "\u2ABA",
        "scnE": "\u2AB6",
        "scnsim": "\u22E9",
        "scpolint": "\u2A13",
        "scsim": "\u227F",
        "scy": "\u0441",
        "Scy": "\u0421",
        "sdot": "\u22C5",
        "sdotb": "\u22A1",
        "sdote": "\u2A66",
        "searhk": "\u2925",
        "searr": "\u2198",
        "seArr": "\u21D8",
        "searrow": "\u2198",
        "sect": "\xa7",
        "semi": ";",
        "seswar": "\u2929",
        "setminus": "\u2216",
        "setmn": "\u2216",
        "sext": "\u2736",
        "sfr": "\uD835\uDD30",
        "Sfr": "\uD835\uDD16",
        "sfrown": "\u2322",
        "sharp": "\u266F",
        "shchcy": "\u0449",
        "SHCHcy": "\u0429",
        "shcy": "\u0448",
        "SHcy": "\u0428",
        "ShortDownArrow": "\u2193",
        "ShortLeftArrow": "\u2190",
        "shortmid": "\u2223",
        "shortparallel": "\u2225",
        "ShortRightArrow": "\u2192",
        "ShortUpArrow": "\u2191",
        "shy": "\xad",
        "sigma": "\u03C3",
        "Sigma": "\u03A3",
        "sigmaf": "\u03C2",
        "sigmav": "\u03C2",
        "sim": "\u223C",
        "simdot": "\u2A6A",
        "sime": "\u2243",
        "simeq": "\u2243",
        "simg": "\u2A9E",
        "simgE": "\u2AA0",
        "siml": "\u2A9D",
        "simlE": "\u2A9F",
        "simne": "\u2246",
        "simplus": "\u2A24",
        "simrarr": "\u2972",
        "slarr": "\u2190",
        "SmallCircle": "\u2218",
        "smallsetminus": "\u2216",
        "smashp": "\u2A33",
        "smeparsl": "\u29E4",
        "smid": "\u2223",
        "smile": "\u2323",
        "smt": "\u2AAA",
        "smte": "\u2AAC",
        "smtes": "\u2AAC\uFE00",
        "softcy": "\u044C",
        "SOFTcy": "\u042C",
        "sol": "/",
        "solb": "\u29C4",
        "solbar": "\u233F",
        "sopf": "\uD835\uDD64",
        "Sopf": "\uD835\uDD4A",
        "spades": "\u2660",
        "spadesuit": "\u2660",
        "spar": "\u2225",
        "sqcap": "\u2293",
        "sqcaps": "\u2293\uFE00",
        "sqcup": "\u2294",
        "sqcups": "\u2294\uFE00",
        "Sqrt": "\u221A",
        "sqsub": "\u228F",
        "sqsube": "\u2291",
        "sqsubset": "\u228F",
        "sqsubseteq": "\u2291",
        "sqsup": "\u2290",
        "sqsupe": "\u2292",
        "sqsupset": "\u2290",
        "sqsupseteq": "\u2292",
        "squ": "\u25A1",
        "square": "\u25A1",
        "Square": "\u25A1",
        "SquareIntersection": "\u2293",
        "SquareSubset": "\u228F",
        "SquareSubsetEqual": "\u2291",
        "SquareSuperset": "\u2290",
        "SquareSupersetEqual": "\u2292",
        "SquareUnion": "\u2294",
        "squarf": "\u25AA",
        "squf": "\u25AA",
        "srarr": "\u2192",
        "sscr": "\uD835\uDCC8",
        "Sscr": "\uD835\uDCAE",
        "ssetmn": "\u2216",
        "ssmile": "\u2323",
        "sstarf": "\u22C6",
        "star": "\u2606",
        "Star": "\u22C6",
        "starf": "\u2605",
        "straightepsilon": "\u03F5",
        "straightphi": "\u03D5",
        "strns": "\xaf",
        "sub": "\u2282",
        "Sub": "\u22D0",
        "subdot": "\u2ABD",
        "sube": "\u2286",
        "subE": "\u2AC5",
        "subedot": "\u2AC3",
        "submult": "\u2AC1",
        "subne": "\u228A",
        "subnE": "\u2ACB",
        "subplus": "\u2ABF",
        "subrarr": "\u2979",
        "subset": "\u2282",
        "Subset": "\u22D0",
        "subseteq": "\u2286",
        "subseteqq": "\u2AC5",
        "SubsetEqual": "\u2286",
        "subsetneq": "\u228A",
        "subsetneqq": "\u2ACB",
        "subsim": "\u2AC7",
        "subsub": "\u2AD5",
        "subsup": "\u2AD3",
        "succ": "\u227B",
        "succapprox": "\u2AB8",
        "succcurlyeq": "\u227D",
        "Succeeds": "\u227B",
        "SucceedsEqual": "\u2AB0",
        "SucceedsSlantEqual": "\u227D",
        "SucceedsTilde": "\u227F",
        "succeq": "\u2AB0",
        "succnapprox": "\u2ABA",
        "succneqq": "\u2AB6",
        "succnsim": "\u22E9",
        "succsim": "\u227F",
        "SuchThat": "\u220B",
        "sum": "\u2211",
        "Sum": "\u2211",
        "sung": "\u266A",
        "sup": "\u2283",
        "Sup": "\u22D1",
        "sup1": "\xb9",
        "sup2": "\xb2",
        "sup3": "\xb3",
        "supdot": "\u2ABE",
        "supdsub": "\u2AD8",
        "supe": "\u2287",
        "supE": "\u2AC6",
        "supedot": "\u2AC4",
        "Superset": "\u2283",
        "SupersetEqual": "\u2287",
        "suphsol": "\u27C9",
        "suphsub": "\u2AD7",
        "suplarr": "\u297B",
        "supmult": "\u2AC2",
        "supne": "\u228B",
        "supnE": "\u2ACC",
        "supplus": "\u2AC0",
        "supset": "\u2283",
        "Supset": "\u22D1",
        "supseteq": "\u2287",
        "supseteqq": "\u2AC6",
        "supsetneq": "\u228B",
        "supsetneqq": "\u2ACC",
        "supsim": "\u2AC8",
        "supsub": "\u2AD4",
        "supsup": "\u2AD6",
        "swarhk": "\u2926",
        "swarr": "\u2199",
        "swArr": "\u21D9",
        "swarrow": "\u2199",
        "swnwar": "\u292A",
        "szlig": "\xdf",
        "Tab": "	",
        "target": "\u2316",
        "tau": "\u03C4",
        "Tau": "\u03A4",
        "tbrk": "\u23B4",
        "tcaron": "\u0165",
        "Tcaron": "\u0164",
        "tcedil": "\u0163",
        "Tcedil": "\u0162",
        "tcy": "\u0442",
        "Tcy": "\u0422",
        "tdot": "\u20DB",
        "telrec": "\u2315",
        "tfr": "\uD835\uDD31",
        "Tfr": "\uD835\uDD17",
        "there4": "\u2234",
        "therefore": "\u2234",
        "Therefore": "\u2234",
        "theta": "\u03B8",
        "Theta": "\u0398",
        "thetasym": "\u03D1",
        "thetav": "\u03D1",
        "thickapprox": "\u2248",
        "thicksim": "\u223C",
        "ThickSpace": "\u205F\u200A",
        "thinsp": "\u2009",
        "ThinSpace": "\u2009",
        "thkap": "\u2248",
        "thksim": "\u223C",
        "thorn": "\xfe",
        "THORN": "\xde",
        "tilde": "\u02DC",
        "Tilde": "\u223C",
        "TildeEqual": "\u2243",
        "TildeFullEqual": "\u2245",
        "TildeTilde": "\u2248",
        "times": "\xd7",
        "timesb": "\u22A0",
        "timesbar": "\u2A31",
        "timesd": "\u2A30",
        "tint": "\u222D",
        "toea": "\u2928",
        "top": "\u22A4",
        "topbot": "\u2336",
        "topcir": "\u2AF1",
        "topf": "\uD835\uDD65",
        "Topf": "\uD835\uDD4B",
        "topfork": "\u2ADA",
        "tosa": "\u2929",
        "tprime": "\u2034",
        "trade": "\u2122",
        "TRADE": "\u2122",
        "triangle": "\u25B5",
        "triangledown": "\u25BF",
        "triangleleft": "\u25C3",
        "trianglelefteq": "\u22B4",
        "triangleq": "\u225C",
        "triangleright": "\u25B9",
        "trianglerighteq": "\u22B5",
        "tridot": "\u25EC",
        "trie": "\u225C",
        "triminus": "\u2A3A",
        "TripleDot": "\u20DB",
        "triplus": "\u2A39",
        "trisb": "\u29CD",
        "tritime": "\u2A3B",
        "trpezium": "\u23E2",
        "tscr": "\uD835\uDCC9",
        "Tscr": "\uD835\uDCAF",
        "tscy": "\u0446",
        "TScy": "\u0426",
        "tshcy": "\u045B",
        "TSHcy": "\u040B",
        "tstrok": "\u0167",
        "Tstrok": "\u0166",
        "twixt": "\u226C",
        "twoheadleftarrow": "\u219E",
        "twoheadrightarrow": "\u21A0",
        "uacute": "\xfa",
        "Uacute": "\xda",
        "uarr": "\u2191",
        "uArr": "\u21D1",
        "Uarr": "\u219F",
        "Uarrocir": "\u2949",
        "ubrcy": "\u045E",
        "Ubrcy": "\u040E",
        "ubreve": "\u016D",
        "Ubreve": "\u016C",
        "ucirc": "\xfb",
        "Ucirc": "\xdb",
        "ucy": "\u0443",
        "Ucy": "\u0423",
        "udarr": "\u21C5",
        "udblac": "\u0171",
        "Udblac": "\u0170",
        "udhar": "\u296E",
        "ufisht": "\u297E",
        "ufr": "\uD835\uDD32",
        "Ufr": "\uD835\uDD18",
        "ugrave": "\xf9",
        "Ugrave": "\xd9",
        "uHar": "\u2963",
        "uharl": "\u21BF",
        "uharr": "\u21BE",
        "uhblk": "\u2580",
        "ulcorn": "\u231C",
        "ulcorner": "\u231C",
        "ulcrop": "\u230F",
        "ultri": "\u25F8",
        "umacr": "\u016B",
        "Umacr": "\u016A",
        "uml": "\xa8",
        "UnderBar": "_",
        "UnderBrace": "\u23DF",
        "UnderBracket": "\u23B5",
        "UnderParenthesis": "\u23DD",
        "Union": "\u22C3",
        "UnionPlus": "\u228E",
        "uogon": "\u0173",
        "Uogon": "\u0172",
        "uopf": "\uD835\uDD66",
        "Uopf": "\uD835\uDD4C",
        "uparrow": "\u2191",
        "Uparrow": "\u21D1",
        "UpArrow": "\u2191",
        "UpArrowBar": "\u2912",
        "UpArrowDownArrow": "\u21C5",
        "updownarrow": "\u2195",
        "Updownarrow": "\u21D5",
        "UpDownArrow": "\u2195",
        "UpEquilibrium": "\u296E",
        "upharpoonleft": "\u21BF",
        "upharpoonright": "\u21BE",
        "uplus": "\u228E",
        "UpperLeftArrow": "\u2196",
        "UpperRightArrow": "\u2197",
        "upsi": "\u03C5",
        "Upsi": "\u03D2",
        "upsih": "\u03D2",
        "upsilon": "\u03C5",
        "Upsilon": "\u03A5",
        "UpTee": "\u22A5",
        "UpTeeArrow": "\u21A5",
        "upuparrows": "\u21C8",
        "urcorn": "\u231D",
        "urcorner": "\u231D",
        "urcrop": "\u230E",
        "uring": "\u016F",
        "Uring": "\u016E",
        "urtri": "\u25F9",
        "uscr": "\uD835\uDCCA",
        "Uscr": "\uD835\uDCB0",
        "utdot": "\u22F0",
        "utilde": "\u0169",
        "Utilde": "\u0168",
        "utri": "\u25B5",
        "utrif": "\u25B4",
        "uuarr": "\u21C8",
        "uuml": "\xfc",
        "Uuml": "\xdc",
        "uwangle": "\u29A7",
        "vangrt": "\u299C",
        "varepsilon": "\u03F5",
        "varkappa": "\u03F0",
        "varnothing": "\u2205",
        "varphi": "\u03D5",
        "varpi": "\u03D6",
        "varpropto": "\u221D",
        "varr": "\u2195",
        "vArr": "\u21D5",
        "varrho": "\u03F1",
        "varsigma": "\u03C2",
        "varsubsetneq": "\u228A\uFE00",
        "varsubsetneqq": "\u2ACB\uFE00",
        "varsupsetneq": "\u228B\uFE00",
        "varsupsetneqq": "\u2ACC\uFE00",
        "vartheta": "\u03D1",
        "vartriangleleft": "\u22B2",
        "vartriangleright": "\u22B3",
        "vBar": "\u2AE8",
        "Vbar": "\u2AEB",
        "vBarv": "\u2AE9",
        "vcy": "\u0432",
        "Vcy": "\u0412",
        "vdash": "\u22A2",
        "vDash": "\u22A8",
        "Vdash": "\u22A9",
        "VDash": "\u22AB",
        "Vdashl": "\u2AE6",
        "vee": "\u2228",
        "Vee": "\u22C1",
        "veebar": "\u22BB",
        "veeeq": "\u225A",
        "vellip": "\u22EE",
        "verbar": "|",
        "Verbar": "\u2016",
        "vert": "|",
        "Vert": "\u2016",
        "VerticalBar": "\u2223",
        "VerticalLine": "|",
        "VerticalSeparator": "\u2758",
        "VerticalTilde": "\u2240",
        "VeryThinSpace": "\u200A",
        "vfr": "\uD835\uDD33",
        "Vfr": "\uD835\uDD19",
        "vltri": "\u22B2",
        "vnsub": "\u2282\u20D2",
        "vnsup": "\u2283\u20D2",
        "vopf": "\uD835\uDD67",
        "Vopf": "\uD835\uDD4D",
        "vprop": "\u221D",
        "vrtri": "\u22B3",
        "vscr": "\uD835\uDCCB",
        "Vscr": "\uD835\uDCB1",
        "vsubne": "\u228A\uFE00",
        "vsubnE": "\u2ACB\uFE00",
        "vsupne": "\u228B\uFE00",
        "vsupnE": "\u2ACC\uFE00",
        "Vvdash": "\u22AA",
        "vzigzag": "\u299A",
        "wcirc": "\u0175",
        "Wcirc": "\u0174",
        "wedbar": "\u2A5F",
        "wedge": "\u2227",
        "Wedge": "\u22C0",
        "wedgeq": "\u2259",
        "weierp": "\u2118",
        "wfr": "\uD835\uDD34",
        "Wfr": "\uD835\uDD1A",
        "wopf": "\uD835\uDD68",
        "Wopf": "\uD835\uDD4E",
        "wp": "\u2118",
        "wr": "\u2240",
        "wreath": "\u2240",
        "wscr": "\uD835\uDCCC",
        "Wscr": "\uD835\uDCB2",
        "xcap": "\u22C2",
        "xcirc": "\u25EF",
        "xcup": "\u22C3",
        "xdtri": "\u25BD",
        "xfr": "\uD835\uDD35",
        "Xfr": "\uD835\uDD1B",
        "xharr": "\u27F7",
        "xhArr": "\u27FA",
        "xi": "\u03BE",
        "Xi": "\u039E",
        "xlarr": "\u27F5",
        "xlArr": "\u27F8",
        "xmap": "\u27FC",
        "xnis": "\u22FB",
        "xodot": "\u2A00",
        "xopf": "\uD835\uDD69",
        "Xopf": "\uD835\uDD4F",
        "xoplus": "\u2A01",
        "xotime": "\u2A02",
        "xrarr": "\u27F6",
        "xrArr": "\u27F9",
        "xscr": "\uD835\uDCCD",
        "Xscr": "\uD835\uDCB3",
        "xsqcup": "\u2A06",
        "xuplus": "\u2A04",
        "xutri": "\u25B3",
        "xvee": "\u22C1",
        "xwedge": "\u22C0",
        "yacute": "\xfd",
        "Yacute": "\xdd",
        "yacy": "\u044F",
        "YAcy": "\u042F",
        "ycirc": "\u0177",
        "Ycirc": "\u0176",
        "ycy": "\u044B",
        "Ycy": "\u042B",
        "yen": "\xa5",
        "yfr": "\uD835\uDD36",
        "Yfr": "\uD835\uDD1C",
        "yicy": "\u0457",
        "YIcy": "\u0407",
        "yopf": "\uD835\uDD6A",
        "Yopf": "\uD835\uDD50",
        "yscr": "\uD835\uDCCE",
        "Yscr": "\uD835\uDCB4",
        "yucy": "\u044E",
        "YUcy": "\u042E",
        "yuml": "\xff",
        "Yuml": "\u0178",
        "zacute": "\u017A",
        "Zacute": "\u0179",
        "zcaron": "\u017E",
        "Zcaron": "\u017D",
        "zcy": "\u0437",
        "Zcy": "\u0417",
        "zdot": "\u017C",
        "Zdot": "\u017B",
        "zeetrf": "\u2128",
        "ZeroWidthSpace": "\u200B",
        "zeta": "\u03B6",
        "Zeta": "\u0396",
        "zfr": "\uD835\uDD37",
        "Zfr": "\u2128",
        "zhcy": "\u0436",
        "ZHcy": "\u0416",
        "zigrarr": "\u21DD",
        "zopf": "\uD835\uDD6B",
        "Zopf": "\u2124",
        "zscr": "\uD835\uDCCF",
        "Zscr": "\uD835\uDCB5",
        "zwj": "\u200D",
        "zwnj": "\u200C"
    };
    var decodeMapLegacy = {
        "aacute": "\xe1",
        "Aacute": "\xc1",
        "acirc": "\xe2",
        "Acirc": "\xc2",
        "acute": "\xb4",
        "aelig": "\xe6",
        "AElig": "\xc6",
        "agrave": "\xe0",
        "Agrave": "\xc0",
        "amp": "&",
        "AMP": "&",
        "aring": "\xe5",
        "Aring": "\xc5",
        "atilde": "\xe3",
        "Atilde": "\xc3",
        "auml": "\xe4",
        "Auml": "\xc4",
        "brvbar": "\xa6",
        "ccedil": "\xe7",
        "Ccedil": "\xc7",
        "cedil": "\xb8",
        "cent": "\xa2",
        "copy": "\xa9",
        "COPY": "\xa9",
        "curren": "\xa4",
        "deg": "\xb0",
        "divide": "\xf7",
        "eacute": "\xe9",
        "Eacute": "\xc9",
        "ecirc": "\xea",
        "Ecirc": "\xca",
        "egrave": "\xe8",
        "Egrave": "\xc8",
        "eth": "\xf0",
        "ETH": "\xd0",
        "euml": "\xeb",
        "Euml": "\xcb",
        "frac12": "\xbd",
        "frac14": "\xbc",
        "frac34": "\xbe",
        "gt": ">",
        "GT": ">",
        "iacute": "\xed",
        "Iacute": "\xcd",
        "icirc": "\xee",
        "Icirc": "\xce",
        "iexcl": "\xa1",
        "igrave": "\xec",
        "Igrave": "\xcc",
        "iquest": "\xbf",
        "iuml": "\xef",
        "Iuml": "\xcf",
        "laquo": "\xab",
        "lt": "<",
        "LT": "<",
        "macr": "\xaf",
        "micro": "\xb5",
        "middot": "\xb7",
        "nbsp": "\xa0",
        "not": "\xac",
        "ntilde": "\xf1",
        "Ntilde": "\xd1",
        "oacute": "\xf3",
        "Oacute": "\xd3",
        "ocirc": "\xf4",
        "Ocirc": "\xd4",
        "ograve": "\xf2",
        "Ograve": "\xd2",
        "ordf": "\xaa",
        "ordm": "\xba",
        "oslash": "\xf8",
        "Oslash": "\xd8",
        "otilde": "\xf5",
        "Otilde": "\xd5",
        "ouml": "\xf6",
        "Ouml": "\xd6",
        "para": "\xb6",
        "plusmn": "\xb1",
        "pound": "\xa3",
        "quot": '"',
        "QUOT": '"',
        "raquo": "\xbb",
        "reg": "\xae",
        "REG": "\xae",
        "sect": "\xa7",
        "shy": "\xad",
        "sup1": "\xb9",
        "sup2": "\xb2",
        "sup3": "\xb3",
        "szlig": "\xdf",
        "thorn": "\xfe",
        "THORN": "\xde",
        "times": "\xd7",
        "uacute": "\xfa",
        "Uacute": "\xda",
        "ucirc": "\xfb",
        "Ucirc": "\xdb",
        "ugrave": "\xf9",
        "Ugrave": "\xd9",
        "uml": "\xa8",
        "uuml": "\xfc",
        "Uuml": "\xdc",
        "yacute": "\xfd",
        "Yacute": "\xdd",
        "yen": "\xa5",
        "yuml": "\xff"
    };
    var decodeMapNumeric = {
        "0": "\uFFFD",
        "128": "\u20AC",
        "130": "\u201A",
        "131": "\u0192",
        "132": "\u201E",
        "133": "\u2026",
        "134": "\u2020",
        "135": "\u2021",
        "136": "\u02C6",
        "137": "\u2030",
        "138": "\u0160",
        "139": "\u2039",
        "140": "\u0152",
        "142": "\u017D",
        "145": "\u2018",
        "146": "\u2019",
        "147": "\u201C",
        "148": "\u201D",
        "149": "\u2022",
        "150": "\u2013",
        "151": "\u2014",
        "152": "\u02DC",
        "153": "\u2122",
        "154": "\u0161",
        "155": "\u203A",
        "156": "\u0153",
        "158": "\u017E",
        "159": "\u0178"
    };
    var invalidReferenceCodePoints = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        11,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        127,
        128,
        129,
        130,
        131,
        132,
        133,
        134,
        135,
        136,
        137,
        138,
        139,
        140,
        141,
        142,
        143,
        144,
        145,
        146,
        147,
        148,
        149,
        150,
        151,
        152,
        153,
        154,
        155,
        156,
        157,
        158,
        159,
        64976,
        64977,
        64978,
        64979,
        64980,
        64981,
        64982,
        64983,
        64984,
        64985,
        64986,
        64987,
        64988,
        64989,
        64990,
        64991,
        64992,
        64993,
        64994,
        64995,
        64996,
        64997,
        64998,
        64999,
        65000,
        65001,
        65002,
        65003,
        65004,
        65005,
        65006,
        65007,
        65534,
        65535,
        131070,
        131071,
        196606,
        196607,
        262142,
        262143,
        327678,
        327679,
        393214,
        393215,
        458750,
        458751,
        524286,
        524287,
        589822,
        589823,
        655358,
        655359,
        720894,
        720895,
        786430,
        786431,
        851966,
        851967,
        917502,
        917503,
        983038,
        983039,
        1048574,
        1048575,
        1114110,
        1114111
    ];
    /*--------------------------------------------------------------------------*/ var stringFromCharCode = String.fromCharCode;
    var object = {};
    var hasOwnProperty = object.hasOwnProperty;
    var has = function(object, propertyName) {
        return hasOwnProperty.call(object, propertyName);
    };
    var contains = function(array, value) {
        var index = -1;
        var length = array.length;
        while(++index < length){
            if (array[index] == value) return true;
        }
        return false;
    };
    var merge = function(options, defaults) {
        if (!options) return defaults;
        var result = {};
        var key;
        for(key in defaults)// A `hasOwnProperty` check is not needed here, since only recognized
        // option names are used anyway. Any others are ignored.
        result[key] = has(options, key) ? options[key] : defaults[key];
        return result;
    };
    // Modified version of `ucs2encode`; see https://mths.be/punycode.
    var codePointToSymbol = function(codePoint, strict) {
        var output = "";
        if (codePoint >= 0xD800 && codePoint <= 0xDFFF || codePoint > 0x10FFFF) {
            // See issue #4:
            // “Otherwise, if the number is in the range 0xD800 to 0xDFFF or is
            // greater than 0x10FFFF, then this is a parse error. Return a U+FFFD
            // REPLACEMENT CHARACTER.”
            if (strict) parseError("character reference outside the permissible Unicode range");
            return "\uFFFD";
        }
        if (has(decodeMapNumeric, codePoint)) {
            if (strict) parseError("disallowed character reference");
            return decodeMapNumeric[codePoint];
        }
        if (strict && contains(invalidReferenceCodePoints, codePoint)) parseError("disallowed character reference");
        if (codePoint > 0xFFFF) {
            codePoint -= 0x10000;
            output += stringFromCharCode(codePoint >>> 10 & 0x3FF | 0xD800);
            codePoint = 0xDC00 | codePoint & 0x3FF;
        }
        output += stringFromCharCode(codePoint);
        return output;
    };
    var hexEscape = function(codePoint) {
        return "&#x" + codePoint.toString(16).toUpperCase() + ";";
    };
    var decEscape = function(codePoint) {
        return "&#" + codePoint + ";";
    };
    var parseError = function(message) {
        throw Error("Parse error: " + message);
    };
    /*--------------------------------------------------------------------------*/ var encode = function(string, options) {
        options = merge(options, encode.options);
        var strict = options.strict;
        if (strict && regexInvalidRawCodePoint.test(string)) parseError("forbidden code point");
        var encodeEverything = options.encodeEverything;
        var useNamedReferences = options.useNamedReferences;
        var allowUnsafeSymbols = options.allowUnsafeSymbols;
        var escapeCodePoint = options.decimal ? decEscape : hexEscape;
        var escapeBmpSymbol = function(symbol) {
            return escapeCodePoint(symbol.charCodeAt(0));
        };
        if (encodeEverything) {
            // Encode ASCII symbols.
            string = string.replace(regexAsciiWhitelist, function(symbol) {
                // Use named references if requested & possible.
                if (useNamedReferences && has(encodeMap, symbol)) return "&" + encodeMap[symbol] + ";";
                return escapeBmpSymbol(symbol);
            });
            // Shorten a few escapes that represent two symbols, of which at least one
            // is within the ASCII range.
            if (useNamedReferences) string = string.replace(/&gt;\u20D2/g, "&nvgt;").replace(/&lt;\u20D2/g, "&nvlt;").replace(/&#x66;&#x6A;/g, "&fjlig;");
            // Encode non-ASCII symbols.
            if (useNamedReferences) // Encode non-ASCII symbols that can be replaced with a named reference.
            string = string.replace(regexEncodeNonAscii, function(string) {
                // Note: there is no need to check `has(encodeMap, string)` here.
                return "&" + encodeMap[string] + ";";
            });
        // Note: any remaining non-ASCII symbols are handled outside of the `if`.
        } else if (useNamedReferences) {
            // Apply named character references.
            // Encode `<>"'&` using named character references.
            if (!allowUnsafeSymbols) string = string.replace(regexEscape, function(string) {
                return "&" + encodeMap[string] + ";"; // no need to check `has()` here
            });
            // Shorten escapes that represent two symbols, of which at least one is
            // `<>"'&`.
            string = string.replace(/&gt;\u20D2/g, "&nvgt;").replace(/&lt;\u20D2/g, "&nvlt;");
            // Encode non-ASCII symbols that can be replaced with a named reference.
            string = string.replace(regexEncodeNonAscii, function(string) {
                // Note: there is no need to check `has(encodeMap, string)` here.
                return "&" + encodeMap[string] + ";";
            });
        } else if (!allowUnsafeSymbols) // Encode `<>"'&` using hexadecimal escapes, now that they’re not handled
        // using named character references.
        string = string.replace(regexEscape, escapeBmpSymbol);
        return string// Encode astral symbols.
        .replace(regexAstralSymbols, function($0) {
            // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
            var high = $0.charCodeAt(0);
            var low = $0.charCodeAt(1);
            var codePoint = (high - 0xD800) * 0x400 + low - 0xDC00 + 0x10000;
            return escapeCodePoint(codePoint);
        })// Encode any remaining BMP symbols that are not printable ASCII symbols
        // using a hexadecimal escape.
        .replace(regexBmpWhitelist, escapeBmpSymbol);
    };
    // Expose default options (so they can be overridden globally).
    encode.options = {
        "allowUnsafeSymbols": false,
        "encodeEverything": false,
        "strict": false,
        "useNamedReferences": false,
        "decimal": false
    };
    var decode = function(html, options) {
        options = merge(options, decode.options);
        var strict = options.strict;
        if (strict && regexInvalidEntity.test(html)) parseError("malformed character reference");
        return html.replace(regexDecode, function($0, $1, $2, $3, $4, $5, $6, $7, $8) {
            var codePoint;
            var semicolon;
            var decDigits;
            var hexDigits;
            var reference;
            var next;
            if ($1) {
                reference = $1;
                // Note: there is no need to check `has(decodeMap, reference)`.
                return decodeMap[reference];
            }
            if ($2) {
                // Decode named character references without trailing `;`, e.g. `&amp`.
                // This is only a parse error if it gets converted to `&`, or if it is
                // followed by `=` in an attribute context.
                reference = $2;
                next = $3;
                if (next && options.isAttributeValue) {
                    if (strict && next == "=") parseError("`&` did not start a character reference");
                    return $0;
                } else {
                    if (strict) parseError("named character reference was not terminated by a semicolon");
                    // Note: there is no need to check `has(decodeMapLegacy, reference)`.
                    return decodeMapLegacy[reference] + (next || "");
                }
            }
            if ($4) {
                // Decode decimal escapes, e.g. `&#119558;`.
                decDigits = $4;
                semicolon = $5;
                if (strict && !semicolon) parseError("character reference was not terminated by a semicolon");
                codePoint = parseInt(decDigits, 10);
                return codePointToSymbol(codePoint, strict);
            }
            if ($6) {
                // Decode hexadecimal escapes, e.g. `&#x1D306;`.
                hexDigits = $6;
                semicolon = $7;
                if (strict && !semicolon) parseError("character reference was not terminated by a semicolon");
                codePoint = parseInt(hexDigits, 16);
                return codePointToSymbol(codePoint, strict);
            }
            // If we’re still here, `if ($7)` is implied; it’s an ambiguous
            // ampersand for sure. https://mths.be/notes/ambiguous-ampersands
            if (strict) parseError("named character reference was not terminated by a semicolon");
            return $0;
        });
    };
    // Expose default options (so they can be overridden globally).
    decode.options = {
        "isAttributeValue": false,
        "strict": false
    };
    var escape = function(string) {
        return string.replace(regexEscape, function($0) {
            // Note: there is no need to check `has(escapeMap, $0)` here.
            return escapeMap[$0];
        });
    };
    /*--------------------------------------------------------------------------*/ var he = {
        "version": "1.2.0",
        "encode": encode,
        "decode": decode,
        "escape": escape,
        "unescape": decode
    };
    // Some AMD build optimizers, like r.js, check for specific condition patterns
    // like the following:
    if (typeof define == "function" && typeof define.amd == "object" && define.amd) define(function() {
        return he;
    });
    else if (freeExports && !freeExports.nodeType) {
        if (freeModule) freeModule.exports = he;
        else for(var key in he)has(he, key) && (freeExports[key] = he[key]);
    } else root.he = he;
})(this);

},{}],"lycDL":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var NodeType;
(function(NodeType) {
    NodeType[NodeType["ELEMENT_NODE"] = 1] = "ELEMENT_NODE";
    NodeType[NodeType["TEXT_NODE"] = 3] = "TEXT_NODE";
    NodeType[NodeType["COMMENT_NODE"] = 8] = "COMMENT_NODE";
})(NodeType || (NodeType = {}));
exports.default = NodeType;

},{}],"8Cy27":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = this && this.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parse = exports.base_parse = void 0;
var css_select_1 = require("c749298893f0cfa4");
var he_1 = __importDefault(require("7097e4a11dee2e95"));
var back_1 = __importDefault(require("446daa01f478e553"));
var matcher_1 = __importDefault(require("29f9d6d2bf8f9ad2"));
var void_tag_1 = __importDefault(require("f76036a525c057ab"));
var comment_1 = __importDefault(require("6e3ada42185f9ac5"));
var node_1 = __importDefault(require("7a4b83edd071297b"));
var text_1 = __importDefault(require("5e4d95d3bcf9d8a2"));
var type_1 = __importDefault(require("751c2b492c18a892"));
function decode(val) {
    // clone string
    return JSON.parse(JSON.stringify(he_1.default.decode(val)));
}
// https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements
var Htags = [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup"
];
var Dtags = [
    "details",
    "dialog",
    "dd",
    "div",
    "dt"
];
var Ftags = [
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form"
];
var tableTags = [
    "table",
    "td",
    "tr"
];
var htmlTags = [
    "address",
    "article",
    "aside",
    "blockquote",
    "br",
    "hr",
    "li",
    "main",
    "nav",
    "ol",
    "p",
    "pre",
    "section",
    "ul"
];
var kBlockElements = new Set();
function addToKBlockElement() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
    var addToSet = function(array) {
        for(var index = 0; index < array.length; index++){
            var element = array[index];
            kBlockElements.add(element);
            kBlockElements.add(element.toUpperCase());
        }
    };
    for(var _a = 0, args_1 = args; _a < args_1.length; _a++){
        var arg = args_1[_a];
        addToSet(arg);
    }
}
addToKBlockElement(Htags, Dtags, Ftags, tableTags, htmlTags);
var DOMTokenList = /** @class */ function() {
    function DOMTokenList(valuesInit, afterUpdate) {
        if (valuesInit === void 0) valuesInit = [];
        if (afterUpdate === void 0) afterUpdate = function() {
            return null;
        };
        this._set = new Set(valuesInit);
        this._afterUpdate = afterUpdate;
    }
    DOMTokenList.prototype._validate = function(c) {
        if (/\s/.test(c)) throw new Error("DOMException in DOMTokenList.add: The token '".concat(c, "' contains HTML space characters, which are not valid in tokens."));
    };
    DOMTokenList.prototype.add = function(c) {
        this._validate(c);
        this._set.add(c);
        this._afterUpdate(this); // eslint-disable-line @typescript-eslint/no-unsafe-call
    };
    DOMTokenList.prototype.replace = function(c1, c2) {
        this._validate(c2);
        this._set.delete(c1);
        this._set.add(c2);
        this._afterUpdate(this); // eslint-disable-line @typescript-eslint/no-unsafe-call
    };
    DOMTokenList.prototype.remove = function(c) {
        this._set.delete(c) && this._afterUpdate(this); // eslint-disable-line @typescript-eslint/no-unsafe-call
    };
    DOMTokenList.prototype.toggle = function(c) {
        this._validate(c);
        if (this._set.has(c)) this._set.delete(c);
        else this._set.add(c);
        this._afterUpdate(this); // eslint-disable-line @typescript-eslint/no-unsafe-call
    };
    DOMTokenList.prototype.contains = function(c) {
        return this._set.has(c);
    };
    Object.defineProperty(DOMTokenList.prototype, "length", {
        get: function() {
            return this._set.size;
        },
        enumerable: false,
        configurable: true
    });
    DOMTokenList.prototype.values = function() {
        return this._set.values();
    };
    Object.defineProperty(DOMTokenList.prototype, "value", {
        get: function() {
            return Array.from(this._set.values());
        },
        enumerable: false,
        configurable: true
    });
    DOMTokenList.prototype.toString = function() {
        return Array.from(this._set.values()).join(" ");
    };
    return DOMTokenList;
}();
/**
 * HTMLElement, which contains a set of children.
 *
 * Note: this is a minimalist implementation, no complete tree
 *   structure provided (no parentNode, nextSibling,
 *   previousSibling etc).
 * @class HTMLElement
 * @extends {Node}
 */ var HTMLElement = /** @class */ function(_super) {
    __extends(HTMLElement, _super);
    /**
     * Creates an instance of HTMLElement.
     * @param keyAttrs	id and class attribute
     * @param [rawAttrs]	attributes in string
     *
     * @memberof HTMLElement
     */ function HTMLElement(tagName, keyAttrs, rawAttrs, parentNode, range, voidTag, _parseOptions) {
        if (rawAttrs === void 0) rawAttrs = "";
        if (parentNode === void 0) parentNode = null;
        if (voidTag === void 0) voidTag = new void_tag_1.default();
        if (_parseOptions === void 0) _parseOptions = {};
        var _this = _super.call(this, parentNode, range) || this;
        _this.rawAttrs = rawAttrs;
        _this.voidTag = voidTag;
        /**
         * Node Type declaration.
         */ _this.nodeType = type_1.default.ELEMENT_NODE;
        _this.rawTagName = tagName;
        _this.rawAttrs = rawAttrs || "";
        _this.id = keyAttrs.id || "";
        _this.childNodes = [];
        _this._parseOptions = _parseOptions;
        _this.classList = new DOMTokenList(keyAttrs.class ? keyAttrs.class.split(/\s+/) : [], function(classList) {
            return _this.setAttribute("class", classList.toString());
        } // eslint-disable-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        );
        if (keyAttrs.id) {
            if (!rawAttrs) _this.rawAttrs = 'id="'.concat(keyAttrs.id, '"');
        }
        if (keyAttrs.class) {
            if (!rawAttrs) {
                var cls = 'class="'.concat(_this.classList.toString(), '"');
                if (_this.rawAttrs) _this.rawAttrs += " ".concat(cls);
                else _this.rawAttrs = cls;
            }
        }
        return _this;
    }
    /**
     * Quote attribute values
     * @param attr attribute value
     * @returns {string} quoted value
     */ HTMLElement.prototype.quoteAttribute = function(attr) {
        if (attr == null) return "null";
        return JSON.stringify(attr.replace(/"/g, "&quot;")).replace(/\\t/g, "	").replace(/\\n/g, "\n").replace(/\\r/g, "\r").replace(/\\/g, "");
    };
    /**
     * Remove Child element from childNodes array
     * @param {HTMLElement} node     node to remove
     */ HTMLElement.prototype.removeChild = function(node) {
        this.childNodes = this.childNodes.filter(function(child) {
            return child !== node;
        });
        return this;
    };
    /**
     * Exchanges given child with new child
     * @param {HTMLElement} oldNode     node to exchange
     * @param {HTMLElement} newNode     new node
     */ HTMLElement.prototype.exchangeChild = function(oldNode, newNode) {
        var children = this.childNodes;
        this.childNodes = children.map(function(child) {
            if (child === oldNode) return newNode;
            return child;
        });
        return this;
    };
    Object.defineProperty(HTMLElement.prototype, "tagName", {
        get: function() {
            return this.rawTagName ? this.rawTagName.toUpperCase() : this.rawTagName;
        },
        set: function(newname) {
            this.rawTagName = newname.toLowerCase();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLElement.prototype, "localName", {
        get: function() {
            return this.rawTagName.toLowerCase();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLElement.prototype, "isVoidElement", {
        get: function() {
            return this.voidTag.isVoidElement(this.localName);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLElement.prototype, "rawText", {
        /**
         * Get escpaed (as-it) text value of current node and its children.
         * @return {string} text content
         */ get: function() {
            // https://github.com/taoqf/node-html-parser/issues/249
            if (/^br$/i.test(this.rawTagName)) return "\n";
            return this.childNodes.reduce(function(pre, cur) {
                return pre += cur.rawText;
            }, "");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLElement.prototype, "textContent", {
        get: function() {
            return decode(this.rawText);
        },
        set: function(val) {
            var content = [
                new text_1.default(val, this)
            ];
            this.childNodes = content;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLElement.prototype, "text", {
        /**
         * Get unescaped text value of current node and its children.
         * @return {string} text content
         */ get: function() {
            return decode(this.rawText);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLElement.prototype, "structuredText", {
        /**
         * Get structured Text (with '\n' etc.)
         * @return {string} structured text
         */ get: function() {
            var currentBlock = [];
            var blocks = [
                currentBlock
            ];
            function dfs(node) {
                if (node.nodeType === type_1.default.ELEMENT_NODE) {
                    if (kBlockElements.has(node.rawTagName)) {
                        if (currentBlock.length > 0) blocks.push(currentBlock = []);
                        node.childNodes.forEach(dfs);
                        if (currentBlock.length > 0) blocks.push(currentBlock = []);
                    } else node.childNodes.forEach(dfs);
                } else if (node.nodeType === type_1.default.TEXT_NODE) {
                    if (node.isWhitespace) // Whitespace node, postponed output
                    currentBlock.prependWhitespace = true;
                    else {
                        var text = node.trimmedText;
                        if (currentBlock.prependWhitespace) {
                            text = " ".concat(text);
                            currentBlock.prependWhitespace = false;
                        }
                        currentBlock.push(text);
                    }
                }
            }
            dfs(this);
            return blocks.map(function(block) {
                return block.join("").replace(/\s{2,}/g, " "); // Normalize each line's whitespace
            }).join("\n").replace(/\s+$/, ""); // trimRight;
        },
        enumerable: false,
        configurable: true
    });
    HTMLElement.prototype.toString = function() {
        var tag = this.rawTagName;
        if (tag) {
            var attrs = this.rawAttrs ? " ".concat(this.rawAttrs) : "";
            return this.voidTag.formatNode(tag, attrs, this.innerHTML);
        }
        return this.innerHTML;
    };
    Object.defineProperty(HTMLElement.prototype, "innerHTML", {
        get: function() {
            return this.childNodes.map(function(child) {
                return child.toString();
            }).join("");
        },
        set: function(content) {
            var r = parse(content, this._parseOptions);
            var nodes = r.childNodes.length ? r.childNodes : [
                new text_1.default(content, this)
            ];
            resetParent(nodes, this);
            resetParent(this.childNodes, null);
            this.childNodes = nodes;
        },
        enumerable: false,
        configurable: true
    });
    HTMLElement.prototype.set_content = function(content, options) {
        if (options === void 0) options = {};
        if (content instanceof node_1.default) content = [
            content
        ];
        else if (typeof content == "string") {
            options = __assign(__assign({}, this._parseOptions), options);
            var r = parse(content, options);
            content = r.childNodes.length ? r.childNodes : [
                new text_1.default(r.innerHTML, this)
            ];
        }
        resetParent(this.childNodes, null);
        resetParent(content, this);
        this.childNodes = content;
        return this;
    };
    HTMLElement.prototype.replaceWith = function() {
        var _this = this;
        var nodes = [];
        for(var _i = 0; _i < arguments.length; _i++)nodes[_i] = arguments[_i];
        var parent = this.parentNode;
        var content = nodes.map(function(node) {
            if (node instanceof node_1.default) return [
                node
            ];
            else if (typeof node == "string") {
                var r = parse(node, _this._parseOptions);
                return r.childNodes.length ? r.childNodes : [
                    new text_1.default(node, _this)
                ];
            }
            return [];
        }).flat();
        var idx = parent.childNodes.findIndex(function(child) {
            return child === _this;
        });
        resetParent([
            this
        ], null);
        parent.childNodes = __spreadArray(__spreadArray(__spreadArray([], parent.childNodes.slice(0, idx), true), resetParent(content, parent), true), parent.childNodes.slice(idx + 1), true);
        return this;
    };
    Object.defineProperty(HTMLElement.prototype, "outerHTML", {
        get: function() {
            return this.toString();
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Trim element from right (in block) after seeing pattern in a TextNode.
     * @param  {RegExp} pattern pattern to find
     * @return {HTMLElement}    reference to current node
     */ HTMLElement.prototype.trimRight = function(pattern) {
        for(var i = 0; i < this.childNodes.length; i++){
            var childNode = this.childNodes[i];
            if (childNode.nodeType === type_1.default.ELEMENT_NODE) childNode.trimRight(pattern);
            else {
                var index = childNode.rawText.search(pattern);
                if (index > -1) {
                    childNode.rawText = childNode.rawText.substr(0, index);
                    // trim all following nodes.
                    this.childNodes.length = i + 1;
                }
            }
        }
        return this;
    };
    Object.defineProperty(HTMLElement.prototype, "structure", {
        /**
         * Get DOM structure
         * @return {string} structure
         */ get: function() {
            var res = [];
            var indention = 0;
            function write(str) {
                res.push("  ".repeat(indention) + str);
            }
            function dfs(node) {
                var idStr = node.id ? "#".concat(node.id) : "";
                var classStr = node.classList.length ? ".".concat(node.classList.value.join(".")) : ""; // eslint-disable-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-unsafe-call
                write("".concat(node.rawTagName).concat(idStr).concat(classStr));
                indention++;
                node.childNodes.forEach(function(childNode) {
                    if (childNode.nodeType === type_1.default.ELEMENT_NODE) dfs(childNode);
                    else if (childNode.nodeType === type_1.default.TEXT_NODE) {
                        if (!childNode.isWhitespace) write("#text");
                    }
                });
                indention--;
            }
            dfs(this);
            return res.join("\n");
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Remove whitespaces in this sub tree.
     * @return {HTMLElement} pointer to this
     */ HTMLElement.prototype.removeWhitespace = function() {
        var _this = this;
        var o = 0;
        this.childNodes.forEach(function(node) {
            if (node.nodeType === type_1.default.TEXT_NODE) {
                if (node.isWhitespace) return;
                node.rawText = node.trimmedRawText;
            } else if (node.nodeType === type_1.default.ELEMENT_NODE) node.removeWhitespace();
            _this.childNodes[o++] = node;
        });
        this.childNodes.length = o;
        return this;
    };
    /**
     * Query CSS selector to find matching nodes.
     * @param  {string}         selector Simplified CSS selector
     * @return {HTMLElement[]}  matching elements
     */ HTMLElement.prototype.querySelectorAll = function(selector) {
        return (0, css_select_1.selectAll)(selector, this, {
            xmlMode: true,
            adapter: matcher_1.default
        });
    };
    /**
     * Query CSS Selector to find matching node.
     * @param  {string}         selector Simplified CSS selector
     * @return {(HTMLElement|null)}    matching node
     */ HTMLElement.prototype.querySelector = function(selector) {
        return (0, css_select_1.selectOne)(selector, this, {
            xmlMode: true,
            adapter: matcher_1.default
        });
    };
    /**
     * find elements by their tagName
     * @param {string} tagName the tagName of the elements to select
     */ HTMLElement.prototype.getElementsByTagName = function(tagName) {
        var upperCasedTagName = tagName.toUpperCase();
        var re = [];
        var stack = [];
        var currentNodeReference = this;
        var index = 0;
        // index turns to undefined once the stack is empty and the first condition occurs
        // which happens once all relevant children are searched through
        while(index !== undefined){
            var child = void 0;
            // make it work with sparse arrays
            do child = currentNodeReference.childNodes[index++];
            while (index < currentNodeReference.childNodes.length && child === undefined);
            // if the child does not exist we move on with the last provided index (which belongs to the parentNode)
            if (child === undefined) {
                currentNodeReference = currentNodeReference.parentNode;
                index = stack.pop();
                continue;
            }
            if (child.nodeType === type_1.default.ELEMENT_NODE) {
                // https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName#syntax
                if (tagName === "*" || child.tagName === upperCasedTagName) re.push(child);
                // if children are existing push the current status to the stack and keep searching for elements in the level below
                if (child.childNodes.length > 0) {
                    stack.push(index);
                    currentNodeReference = child;
                    index = 0;
                }
            }
        }
        return re;
    };
    /**
     * find element by it's id
     * @param {string} id the id of the element to select
     * @returns {HTMLElement | null} the element with the given id or null if not found
     */ HTMLElement.prototype.getElementById = function(id) {
        var stack = [];
        var currentNodeReference = this;
        var index = 0;
        // index turns to undefined once the stack is empty and the first condition occurs
        // which happens once all relevant children are searched through
        while(index !== undefined){
            var child = void 0;
            // make it work with sparse arrays
            do child = currentNodeReference.childNodes[index++];
            while (index < currentNodeReference.childNodes.length && child === undefined);
            // if the child does not exist we move on with the last provided index (which belongs to the parentNode)
            if (child === undefined) {
                currentNodeReference = currentNodeReference.parentNode;
                index = stack.pop();
                continue;
            }
            if (child.nodeType === type_1.default.ELEMENT_NODE) {
                if (child.id === id) return child;
                // if children are existing push the current status to the stack and keep searching for elements in the level below
                if (child.childNodes.length > 0) {
                    stack.push(index);
                    currentNodeReference = child;
                    index = 0;
                }
            }
        }
        return null;
    };
    /**
     * traverses the Element and its parents (heading toward the document root) until it finds a node that matches the provided selector string. Will return itself or the matching ancestor. If no such element exists, it returns null.
     * @param selector a DOMString containing a selector list
     * @returns {HTMLElement | null} the element with the given id or null if not found
     */ HTMLElement.prototype.closest = function(selector) {
        var mapChild = new Map();
        var el = this;
        var old = null;
        function findOne(test, elems) {
            var elem = null;
            for(var i = 0, l = elems.length; i < l && !elem; i++){
                var el_1 = elems[i];
                if (test(el_1)) elem = el_1;
                else {
                    var child = mapChild.get(el_1);
                    if (child) elem = findOne(test, [
                        child
                    ]);
                }
            }
            return elem;
        }
        while(el){
            mapChild.set(el, old);
            old = el;
            el = el.parentNode;
        }
        el = this;
        while(el){
            var e = (0, css_select_1.selectOne)(selector, el, {
                xmlMode: true,
                adapter: __assign(__assign({}, matcher_1.default), {
                    getChildren: function(node) {
                        var child = mapChild.get(node);
                        return child && [
                            child
                        ];
                    },
                    getSiblings: function(node) {
                        return [
                            node
                        ];
                    },
                    findOne: findOne,
                    findAll: function() {
                        return [];
                    }
                })
            });
            if (e) return e;
            el = el.parentNode;
        }
        return null;
    };
    /**
     * Append a child node to childNodes
     * @param  {Node} node node to append
     * @return {Node}      node appended
     */ HTMLElement.prototype.appendChild = function(node) {
        // remove the node from it's parent
        node.remove();
        this.childNodes.push(node);
        node.parentNode = this;
        return node;
    };
    Object.defineProperty(HTMLElement.prototype, "firstChild", {
        /**
         * Get first child node
         * @return {Node | undefined} first child node; or undefined if none
         */ get: function() {
            return this.childNodes[0];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLElement.prototype, "lastChild", {
        /**
         * Get last child node
         * @return {Node | undefined} last child node; or undefined if none
         */ get: function() {
            return (0, back_1.default)(this.childNodes);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLElement.prototype, "attrs", {
        /**
         * Get attributes
         * @access private
         * @return {Object} parsed and unescaped attributes
         */ get: function() {
            if (this._attrs) return this._attrs;
            this._attrs = {};
            var attrs = this.rawAttributes;
            for(var key in attrs){
                var val = attrs[key] || "";
                this._attrs[key.toLowerCase()] = decode(val);
            }
            return this._attrs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLElement.prototype, "attributes", {
        get: function() {
            var ret_attrs = {};
            var attrs = this.rawAttributes;
            for(var key in attrs){
                var val = attrs[key] || "";
                ret_attrs[key] = decode(val);
            }
            return ret_attrs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLElement.prototype, "rawAttributes", {
        /**
         * Get escaped (as-is) attributes
         * @return {Object} parsed attributes
         */ get: function() {
            if (this._rawAttrs) return this._rawAttrs;
            var attrs = {};
            if (this.rawAttrs) {
                var re = /([a-zA-Z()[\]#@$.?:][a-zA-Z0-9-_:()[\]#]*)(?:\s*=\s*((?:'[^']*')|(?:"[^"]*")|\S+))?/g;
                var match = void 0;
                while(match = re.exec(this.rawAttrs)){
                    var key = match[1];
                    var val = match[2] || null;
                    if (val && (val[0] === "'" || val[0] === '"')) val = val.slice(1, val.length - 1);
                    attrs[key] = attrs[key] || val;
                }
            }
            this._rawAttrs = attrs;
            return attrs;
        },
        enumerable: false,
        configurable: true
    });
    HTMLElement.prototype.removeAttribute = function(key) {
        var _this = this;
        var attrs = this.rawAttributes;
        delete attrs[key];
        // Update this.attribute
        if (this._attrs) delete this._attrs[key];
        // Update rawString
        this.rawAttrs = Object.keys(attrs).map(function(name) {
            var val = _this.quoteAttribute(attrs[name]);
            if (val === "null" || val === '""') return name;
            return "".concat(name, "=").concat(val);
        }).join(" ");
        // Update this.id
        if (key === "id") this.id = "";
        return this;
    };
    HTMLElement.prototype.hasAttribute = function(key) {
        return key.toLowerCase() in this.attrs;
    };
    /**
     * Get an attribute
     * @return {string | undefined} value of the attribute; or undefined if not exist
     */ HTMLElement.prototype.getAttribute = function(key) {
        return this.attrs[key.toLowerCase()];
    };
    /**
     * Set an attribute value to the HTMLElement
     * @param {string} key The attribute name
     * @param {string} value The value to set, or null / undefined to remove an attribute
     */ HTMLElement.prototype.setAttribute = function(key, value) {
        var _this = this;
        if (arguments.length < 2) throw new Error("Failed to execute 'setAttribute' on 'Element'");
        var k2 = key.toLowerCase();
        var attrs = this.rawAttributes;
        for(var k in attrs)if (k.toLowerCase() === k2) {
            key = k;
            break;
        }
        attrs[key] = String(value);
        // update this.attrs
        if (this._attrs) this._attrs[k2] = decode(attrs[key]);
        // Update rawString
        this.rawAttrs = Object.keys(attrs).map(function(name) {
            var val = _this.quoteAttribute(attrs[name]);
            if (val === "null" || val === '""') return name;
            return "".concat(name, "=").concat(val);
        }).join(" ");
        // Update this.id
        if (key === "id") this.id = value;
        return this;
    };
    /**
     * Replace all the attributes of the HTMLElement by the provided attributes
     * @param {Attributes} attributes the new attribute set
     */ HTMLElement.prototype.setAttributes = function(attributes) {
        var _this = this;
        // Invalidate current this.attributes
        if (this._attrs) delete this._attrs;
        // Invalidate current this.rawAttributes
        if (this._rawAttrs) delete this._rawAttrs;
        // Update rawString
        this.rawAttrs = Object.keys(attributes).map(function(name) {
            var val = attributes[name];
            if (val === "null" || val === '""') return name;
            return "".concat(name, "=").concat(_this.quoteAttribute(String(val)));
        }).join(" ");
        return this;
    };
    HTMLElement.prototype.insertAdjacentHTML = function(where, html) {
        var _a, _b, _c;
        var _this = this;
        if (arguments.length < 2) throw new Error("2 arguments required");
        var p = parse(html, this._parseOptions);
        if (where === "afterend") {
            var idx = this.parentNode.childNodes.findIndex(function(child) {
                return child === _this;
            });
            resetParent(p.childNodes, this.parentNode);
            (_a = this.parentNode.childNodes).splice.apply(_a, __spreadArray([
                idx + 1,
                0
            ], p.childNodes, false));
        } else if (where === "afterbegin") {
            resetParent(p.childNodes, this);
            (_b = this.childNodes).unshift.apply(_b, p.childNodes);
        } else if (where === "beforeend") p.childNodes.forEach(function(n) {
            _this.appendChild(n);
        });
        else if (where === "beforebegin") {
            var idx = this.parentNode.childNodes.findIndex(function(child) {
                return child === _this;
            });
            resetParent(p.childNodes, this.parentNode);
            (_c = this.parentNode.childNodes).splice.apply(_c, __spreadArray([
                idx,
                0
            ], p.childNodes, false));
        } else throw new Error("The value provided ('".concat(where, "') is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'"));
        return this;
    // if (!where || html === undefined || html === null) {
    // 	return;
    // }
    };
    Object.defineProperty(HTMLElement.prototype, "nextSibling", {
        get: function() {
            if (this.parentNode) {
                var children = this.parentNode.childNodes;
                var i = 0;
                while(i < children.length){
                    var child = children[i++];
                    if (this === child) return children[i] || null;
                }
                return null;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLElement.prototype, "nextElementSibling", {
        get: function() {
            if (this.parentNode) {
                var children = this.parentNode.childNodes;
                var i = 0;
                var find = false;
                while(i < children.length){
                    var child = children[i++];
                    if (find) {
                        if (child instanceof HTMLElement) return child || null;
                    } else if (this === child) find = true;
                }
                return null;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLElement.prototype, "previousSibling", {
        get: function() {
            if (this.parentNode) {
                var children = this.parentNode.childNodes;
                var i = children.length;
                while(i > 0){
                    var child = children[--i];
                    if (this === child) return children[i - 1] || null;
                }
                return null;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLElement.prototype, "previousElementSibling", {
        get: function() {
            if (this.parentNode) {
                var children = this.parentNode.childNodes;
                var i = children.length;
                var find = false;
                while(i > 0){
                    var child = children[--i];
                    if (find) {
                        if (child instanceof HTMLElement) return child || null;
                    } else if (this === child) find = true;
                }
                return null;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLElement.prototype, "classNames", {
        get: function() {
            return this.classList.toString();
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Clone this Node
     */ HTMLElement.prototype.clone = function() {
        return parse(this.toString(), this._parseOptions).firstChild;
    };
    return HTMLElement;
}(node_1.default);
exports.default = HTMLElement;
// https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name
var kMarkupPattern = /<!--[\s\S]*?-->|<(\/?)([a-zA-Z][-.:0-9_a-zA-Z]*)((?:\s+[^>]*?(?:(?:'[^']*')|(?:"[^"]*"))?)*)\s*(\/?)>/g;
var kAttributePattern = /(?:^|\s)(id|class)\s*=\s*((?:'[^']*')|(?:"[^"]*")|\S+)/gi;
var kElementsClosedByOpening = {
    li: {
        li: true,
        LI: true
    },
    LI: {
        li: true,
        LI: true
    },
    p: {
        p: true,
        div: true,
        P: true,
        DIV: true
    },
    P: {
        p: true,
        div: true,
        P: true,
        DIV: true
    },
    b: {
        div: true,
        DIV: true
    },
    B: {
        div: true,
        DIV: true
    },
    td: {
        td: true,
        th: true,
        TD: true,
        TH: true
    },
    TD: {
        td: true,
        th: true,
        TD: true,
        TH: true
    },
    th: {
        td: true,
        th: true,
        TD: true,
        TH: true
    },
    TH: {
        td: true,
        th: true,
        TD: true,
        TH: true
    },
    h1: {
        h1: true,
        H1: true
    },
    H1: {
        h1: true,
        H1: true
    },
    h2: {
        h2: true,
        H2: true
    },
    H2: {
        h2: true,
        H2: true
    },
    h3: {
        h3: true,
        H3: true
    },
    H3: {
        h3: true,
        H3: true
    },
    h4: {
        h4: true,
        H4: true
    },
    H4: {
        h4: true,
        H4: true
    },
    h5: {
        h5: true,
        H5: true
    },
    H5: {
        h5: true,
        H5: true
    },
    h6: {
        h6: true,
        H6: true
    },
    H6: {
        h6: true,
        H6: true
    }
};
var kElementsClosedByClosing = {
    li: {
        ul: true,
        ol: true,
        UL: true,
        OL: true
    },
    LI: {
        ul: true,
        ol: true,
        UL: true,
        OL: true
    },
    a: {
        div: true,
        DIV: true
    },
    A: {
        div: true,
        DIV: true
    },
    b: {
        div: true,
        DIV: true
    },
    B: {
        div: true,
        DIV: true
    },
    i: {
        div: true,
        DIV: true
    },
    I: {
        div: true,
        DIV: true
    },
    p: {
        div: true,
        DIV: true
    },
    P: {
        div: true,
        DIV: true
    },
    td: {
        tr: true,
        table: true,
        TR: true,
        TABLE: true
    },
    TD: {
        tr: true,
        table: true,
        TR: true,
        TABLE: true
    },
    th: {
        tr: true,
        table: true,
        TR: true,
        TABLE: true
    },
    TH: {
        tr: true,
        table: true,
        TR: true,
        TABLE: true
    }
};
var frameflag = "documentfragmentcontainer";
/**
 * Parses HTML and returns a root element
 * Parse a chuck of HTML source.
 * @param  {string} data      html
 * @return {HTMLElement}      root element
 */ function base_parse(data, options) {
    var _a, _b;
    if (options === void 0) options = {};
    var voidTag = new void_tag_1.default((_a = options === null || options === void 0 ? void 0 : options.voidTag) === null || _a === void 0 ? void 0 : _a.closingSlash, (_b = options === null || options === void 0 ? void 0 : options.voidTag) === null || _b === void 0 ? void 0 : _b.tags);
    var elements = options.blockTextElements || {
        script: true,
        noscript: true,
        style: true,
        pre: true
    };
    var element_names = Object.keys(elements);
    var kBlockTextElements = element_names.map(function(it) {
        return new RegExp("^".concat(it, "$"), "i");
    });
    var kIgnoreElements = element_names.filter(function(it) {
        return Boolean(elements[it]);
    }).map(function(it) {
        return new RegExp("^".concat(it, "$"), "i");
    });
    function element_should_be_ignore(tag) {
        return kIgnoreElements.some(function(it) {
            return it.test(tag);
        });
    }
    function is_block_text_element(tag) {
        return kBlockTextElements.some(function(it) {
            return it.test(tag);
        });
    }
    var createRange = function(startPos, endPos) {
        return [
            startPos - frameFlagOffset,
            endPos - frameFlagOffset
        ];
    };
    var root = new HTMLElement(null, {}, "", null, [
        0,
        data.length
    ], voidTag, options);
    var currentParent = root;
    var stack = [
        root
    ];
    var lastTextPos = -1;
    var noNestedTagIndex = undefined;
    var match;
    // https://github.com/taoqf/node-html-parser/issues/38
    data = "<".concat(frameflag, ">").concat(data, "</").concat(frameflag, ">");
    var lowerCaseTagName = options.lowerCaseTagName, fixNestedATags = options.fixNestedATags;
    var dataEndPos = data.length - (frameflag.length + 2);
    var frameFlagOffset = frameflag.length + 2;
    while(match = kMarkupPattern.exec(data)){
        // Note: Object destructuring here consistently tests as higher performance than array destructuring
        // eslint-disable-next-line prefer-const
        var matchText = match[0], leadingSlash = match[1], tagName = match[2], attributes = match[3], closingSlash = match[4];
        var matchLength = matchText.length;
        var tagStartPos = kMarkupPattern.lastIndex - matchLength;
        var tagEndPos = kMarkupPattern.lastIndex;
        // Add TextNode if content
        if (lastTextPos > -1) {
            if (lastTextPos + matchLength < tagEndPos) {
                var text = data.substring(lastTextPos, tagStartPos);
                currentParent.appendChild(new text_1.default(text, currentParent, createRange(lastTextPos, tagStartPos)));
            }
        }
        lastTextPos = kMarkupPattern.lastIndex;
        // https://github.com/taoqf/node-html-parser/issues/38
        // Skip frameflag node
        if (tagName === frameflag) continue;
        // Handle comments
        if (matchText[1] === "!") {
            if (options.comment) {
                // Only keep what is in between <!-- and -->
                var text = data.substring(tagStartPos + 4, tagEndPos - 3);
                currentParent.appendChild(new comment_1.default(text, currentParent, createRange(tagStartPos, tagEndPos)));
            }
            continue;
        }
        /* -- Handle tag matching -- */ // Fix tag casing if necessary
        if (lowerCaseTagName) tagName = tagName.toLowerCase();
        // Handle opening tags (ie. <this> not </that>)
        if (!leadingSlash) {
            /* Populate attributes */ var attrs = {};
            for(var attMatch = void 0; attMatch = kAttributePattern.exec(attributes);){
                var key = attMatch[1], val = attMatch[2];
                var isQuoted = val[0] === "'" || val[0] === '"';
                attrs[key.toLowerCase()] = isQuoted ? val.slice(1, val.length - 1) : val;
            }
            var parentTagName = currentParent.rawTagName;
            if (!closingSlash && kElementsClosedByOpening[parentTagName]) {
                if (kElementsClosedByOpening[parentTagName][tagName]) {
                    stack.pop();
                    currentParent = (0, back_1.default)(stack);
                }
            }
            // Prevent nested A tags by terminating the last A and starting a new one : see issue #144
            if (fixNestedATags && (tagName === "a" || tagName === "A")) {
                if (noNestedTagIndex !== undefined) {
                    stack.splice(noNestedTagIndex);
                    currentParent = (0, back_1.default)(stack);
                }
                noNestedTagIndex = stack.length;
            }
            var tagEndPos_1 = kMarkupPattern.lastIndex;
            var tagStartPos_1 = tagEndPos_1 - matchLength;
            currentParent = currentParent.appendChild(// Initialize range (end position updated later for closed tags)
            new HTMLElement(tagName, attrs, attributes.slice(1), null, createRange(tagStartPos_1, tagEndPos_1), voidTag, options));
            stack.push(currentParent);
            if (is_block_text_element(tagName)) {
                // Find closing tag
                var closeMarkup = "</".concat(tagName, ">");
                var closeIndex = lowerCaseTagName ? data.toLocaleLowerCase().indexOf(closeMarkup, kMarkupPattern.lastIndex) : data.indexOf(closeMarkup, kMarkupPattern.lastIndex);
                var textEndPos = closeIndex === -1 ? dataEndPos : closeIndex;
                if (element_should_be_ignore(tagName)) {
                    var text = data.substring(tagEndPos_1, textEndPos);
                    if (text.length > 0 && /\S/.test(text)) currentParent.appendChild(new text_1.default(text, currentParent, createRange(tagEndPos_1, textEndPos)));
                }
                if (closeIndex === -1) lastTextPos = kMarkupPattern.lastIndex = data.length + 1;
                else {
                    lastTextPos = kMarkupPattern.lastIndex = closeIndex + closeMarkup.length;
                    // Cause to be treated as self-closing, because no close found
                    leadingSlash = "/";
                }
            }
        }
        // Handle closing tags or self-closed elements (ie </tag> or <br>)
        if (leadingSlash || closingSlash || voidTag.isVoidElement(tagName)) while(true){
            if (noNestedTagIndex != null && (tagName === "a" || tagName === "A")) noNestedTagIndex = undefined;
            if (currentParent.rawTagName === tagName) {
                // Update range end for closed tag
                currentParent.range[1] = createRange(-1, Math.max(lastTextPos, tagEndPos))[1];
                stack.pop();
                currentParent = (0, back_1.default)(stack);
                break;
            } else {
                var parentTagName = currentParent.tagName;
                // Trying to close current tag, and move on
                if (kElementsClosedByClosing[parentTagName]) {
                    if (kElementsClosedByClosing[parentTagName][tagName]) {
                        stack.pop();
                        currentParent = (0, back_1.default)(stack);
                        continue;
                    }
                }
                break;
            }
        }
    }
    return stack;
}
exports.base_parse = base_parse;
/**
 * Parses HTML and returns a root element
 * Parse a chuck of HTML source.
 */ function parse(data, options) {
    if (options === void 0) options = {};
    var stack = base_parse(data, options);
    var root = stack[0];
    var _loop_1 = function() {
        // Handle each error elements.
        var last = stack.pop();
        var oneBefore = (0, back_1.default)(stack);
        if (last.parentNode && last.parentNode.parentNode) {
            if (last.parentNode === oneBefore && last.tagName === oneBefore.tagName) // Pair error case <h3> <h3> handle : Fixes to <h3> </h3>
            // this is wrong, becouse this will put the H3 outside the current right position which should be inside the current Html Element, see issue 152 for more info
            {
                if (options.parseNoneClosedTags !== true) {
                    oneBefore.removeChild(last);
                    last.childNodes.forEach(function(child) {
                        oneBefore.parentNode.appendChild(child);
                    });
                    stack.pop();
                }
            } else // Single error  <div> <h3> </div> handle: Just removes <h3>
            // Why remove? this is already a HtmlElement and the missing <H3> is already added in this case. see issue 152 for more info
            // eslint-disable-next-line no-lonely-if
            if (options.parseNoneClosedTags !== true) {
                oneBefore.removeChild(last);
                last.childNodes.forEach(function(child) {
                    oneBefore.appendChild(child);
                });
            }
        }
    };
    while(stack.length > 1)_loop_1();
    // response.childNodes.forEach((node) => {
    // 	if (node instanceof HTMLElement) {
    // 		node.parentNode = null;
    // 	}
    // });
    return root;
}
exports.parse = parse;
function resetParent(nodes, parent) {
    return nodes.map(function(node) {
        node.parentNode = parent;
        return node;
    });
}

},{"c749298893f0cfa4":"4wRAw","7097e4a11dee2e95":"37RbC","446daa01f478e553":"3GJIR","29f9d6d2bf8f9ad2":"2v4gs","f76036a525c057ab":"1DFc7","6e3ada42185f9ac5":"bR2OI","7a4b83edd071297b":"gd8Te","5e4d95d3bcf9d8a2":"2O1SC","751c2b492c18a892":"lycDL"}],"4wRAw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Export filters, pseudos and aliases to allow users to supply their own.
/** @deprecated Use the `pseudos` option instead. */ parcelHelpers.export(exports, "filters", ()=>(0, _indexJs.filters));
parcelHelpers.export(exports, "pseudos", ()=>(0, _indexJs.pseudos));
parcelHelpers.export(exports, "aliases", ()=>(0, _indexJs.aliases));
parcelHelpers.export(exports, "compile", ()=>compile);
parcelHelpers.export(exports, "_compileUnsafe", ()=>_compileUnsafe);
parcelHelpers.export(exports, "_compileToken", ()=>_compileToken);
parcelHelpers.export(exports, "prepareContext", ()=>prepareContext);
parcelHelpers.export(exports, "selectAll", ()=>selectAll);
parcelHelpers.export(exports, "selectOne", ()=>selectOne);
/**
 * Tests whether or not an element is matched by query.
 *
 * @template Node The generic Node type for the DOM adapter being used.
 * @template ElementNode The Node type for elements for the DOM adapter being used.
 * @param elem The element to test if it matches the query.
 * @param query can be either a CSS selector string or a compiled query function.
 * @param [options] options for querying the document.
 * @see compile for supported selector queries.
 * @returns
 */ parcelHelpers.export(exports, "is", ()=>is);
var _domutils = require("domutils");
var _boolbase = require("boolbase");
var _boolbaseDefault = parcelHelpers.interopDefault(_boolbase);
var _compileJs = require("./compile.js");
var _subselectsJs = require("./pseudo-selectors/subselects.js");
var _indexJs = require("./pseudo-selectors/index.js");
const defaultEquals = (a, b)=>a === b;
const defaultOptions = {
    adapter: _domutils,
    equals: defaultEquals
};
function convertOptionFormats(options) {
    var _a, _b, _c, _d;
    /*
     * We force one format of options to the other one.
     */ // @ts-expect-error Default options may have incompatible `Node` / `ElementNode`.
    const opts = options !== null && options !== void 0 ? options : defaultOptions;
    // @ts-expect-error Same as above.
    (_a = opts.adapter) !== null && _a !== void 0 ? _a : opts.adapter = _domutils;
    // @ts-expect-error `equals` does not exist on `Options`
    (_b = opts.equals) !== null && _b !== void 0 ? _b : opts.equals = (_d = (_c = opts.adapter) === null || _c === void 0 ? void 0 : _c.equals) !== null && _d !== void 0 ? _d : defaultEquals;
    return opts;
}
function wrapCompile(func) {
    return function addAdapter(selector, options, context) {
        const opts = convertOptionFormats(options);
        return func(selector, opts, context);
    };
}
const compile = wrapCompile((0, _compileJs.compile));
const _compileUnsafe = wrapCompile((0, _compileJs.compileUnsafe));
const _compileToken = wrapCompile((0, _compileJs.compileToken));
function getSelectorFunc(searchFunc) {
    return function select(query, elements, options) {
        const opts = convertOptionFormats(options);
        if (typeof query !== "function") query = (0, _compileJs.compileUnsafe)(query, opts, elements);
        const filteredElements = prepareContext(elements, opts.adapter, query.shouldTestNextSiblings);
        return searchFunc(query, filteredElements, opts);
    };
}
function prepareContext(elems, adapter, shouldTestNextSiblings = false) {
    /*
     * Add siblings if the query requires them.
     * See https://github.com/fb55/css-select/pull/43#issuecomment-225414692
     */ if (shouldTestNextSiblings) elems = appendNextSiblings(elems, adapter);
    return Array.isArray(elems) ? adapter.removeSubsets(elems) : adapter.getChildren(elems);
}
function appendNextSiblings(elem, adapter) {
    // Order matters because jQuery seems to check the children before the siblings
    const elems = Array.isArray(elem) ? elem.slice(0) : [
        elem
    ];
    const elemsLength = elems.length;
    for(let i = 0; i < elemsLength; i++){
        const nextSiblings = (0, _subselectsJs.getNextSiblings)(elems[i], adapter);
        elems.push(...nextSiblings);
    }
    return elems;
}
const selectAll = getSelectorFunc((query, elems, options)=>query === (0, _boolbaseDefault.default).falseFunc || !elems || elems.length === 0 ? [] : options.adapter.findAll(query, elems));
const selectOne = getSelectorFunc((query, elems, options)=>query === (0, _boolbaseDefault.default).falseFunc || !elems || elems.length === 0 ? null : options.adapter.findOne(query, elems));
function is(elem, query, options) {
    const opts = convertOptionFormats(options);
    return (typeof query === "function" ? query : (0, _compileJs.compile)(query, opts))(elem);
}
/**
 * Alias for selectAll(query, elems, options).
 * @see [compile] for supported selector queries.
 */ exports.default = selectAll;

},{"domutils":"pAgxm","boolbase":"cSCm4","./compile.js":"9pPvO","./pseudo-selectors/subselects.js":"dGwWj","./pseudo-selectors/index.js":"75f7I","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"pAgxm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** @deprecated Use these methods from `domhandler` directly. */ parcelHelpers.export(exports, "isTag", ()=>(0, _domhandler.isTag));
parcelHelpers.export(exports, "isCDATA", ()=>(0, _domhandler.isCDATA));
parcelHelpers.export(exports, "isText", ()=>(0, _domhandler.isText));
parcelHelpers.export(exports, "isComment", ()=>(0, _domhandler.isComment));
parcelHelpers.export(exports, "isDocument", ()=>(0, _domhandler.isDocument));
parcelHelpers.export(exports, "hasChildren", ()=>(0, _domhandler.hasChildren));
var _stringifyJs = require("./stringify.js");
parcelHelpers.exportAll(_stringifyJs, exports);
var _traversalJs = require("./traversal.js");
parcelHelpers.exportAll(_traversalJs, exports);
var _manipulationJs = require("./manipulation.js");
parcelHelpers.exportAll(_manipulationJs, exports);
var _queryingJs = require("./querying.js");
parcelHelpers.exportAll(_queryingJs, exports);
var _legacyJs = require("./legacy.js");
parcelHelpers.exportAll(_legacyJs, exports);
var _helpersJs = require("./helpers.js");
parcelHelpers.exportAll(_helpersJs, exports);
var _feedsJs = require("./feeds.js");
parcelHelpers.exportAll(_feedsJs, exports);
var _domhandler = require("domhandler");

},{"./stringify.js":"4dZTz","./traversal.js":"j58J6","./manipulation.js":"buXkW","./querying.js":"jESsd","./legacy.js":"garNU","./helpers.js":"eLrXC","./feeds.js":"8B5AV","domhandler":"5br1X","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4dZTz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @category Stringify
 * @deprecated Use the `dom-serializer` module directly.
 * @param node Node to get the outer HTML of.
 * @param options Options for serialization.
 * @returns `node`'s outer HTML.
 */ parcelHelpers.export(exports, "getOuterHTML", ()=>getOuterHTML);
/**
 * @category Stringify
 * @deprecated Use the `dom-serializer` module directly.
 * @param node Node to get the inner HTML of.
 * @param options Options for serialization.
 * @returns `node`'s inner HTML.
 */ parcelHelpers.export(exports, "getInnerHTML", ()=>getInnerHTML);
/**
 * Get a node's inner text. Same as `textContent`, but inserts newlines for `<br>` tags. Ignores comments.
 *
 * @category Stringify
 * @deprecated Use `textContent` instead.
 * @param node Node to get the inner text of.
 * @returns `node`'s inner text.
 */ parcelHelpers.export(exports, "getText", ()=>getText);
/**
 * Get a node's text content. Ignores comments.
 *
 * @category Stringify
 * @param node Node to get the text content of.
 * @returns `node`'s text content.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent}
 */ parcelHelpers.export(exports, "textContent", ()=>textContent);
/**
 * Get a node's inner text, ignoring `<script>` and `<style>` tags. Ignores comments.
 *
 * @category Stringify
 * @param node Node to get the inner text of.
 * @returns `node`'s inner text.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Node/innerText}
 */ parcelHelpers.export(exports, "innerText", ()=>innerText);
var _domhandler = require("domhandler");
var _domSerializer = require("dom-serializer");
var _domSerializerDefault = parcelHelpers.interopDefault(_domSerializer);
var _domelementtype = require("domelementtype");
function getOuterHTML(node, options) {
    return (0, _domSerializerDefault.default)(node, options);
}
function getInnerHTML(node, options) {
    return (0, _domhandler.hasChildren)(node) ? node.children.map((node)=>getOuterHTML(node, options)).join("") : "";
}
function getText(node) {
    if (Array.isArray(node)) return node.map(getText).join("");
    if ((0, _domhandler.isTag)(node)) return node.name === "br" ? "\n" : getText(node.children);
    if ((0, _domhandler.isCDATA)(node)) return getText(node.children);
    if ((0, _domhandler.isText)(node)) return node.data;
    return "";
}
function textContent(node) {
    if (Array.isArray(node)) return node.map(textContent).join("");
    if ((0, _domhandler.hasChildren)(node) && !(0, _domhandler.isComment)(node)) return textContent(node.children);
    if ((0, _domhandler.isText)(node)) return node.data;
    return "";
}
function innerText(node) {
    if (Array.isArray(node)) return node.map(innerText).join("");
    if ((0, _domhandler.hasChildren)(node) && (node.type === (0, _domelementtype.ElementType).Tag || (0, _domhandler.isCDATA)(node))) return innerText(node.children);
    if ((0, _domhandler.isText)(node)) return node.data;
    return "";
}

},{"domhandler":"5br1X","dom-serializer":"4fc8I","domelementtype":"h9GvZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5br1X":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DomHandler", ()=>DomHandler);
var _domelementtype = require("domelementtype");
var _nodeJs = require("./node.js");
parcelHelpers.exportAll(_nodeJs, exports);
// Default options
const defaultOpts = {
    withStartIndices: false,
    withEndIndices: false,
    xmlMode: false
};
class DomHandler {
    /**
     * @param callback Called once parsing has completed.
     * @param options Settings for the handler.
     * @param elementCB Callback whenever a tag is closed.
     */ constructor(callback, options, elementCB){
        /** The elements of the DOM */ this.dom = [];
        /** The root element for the DOM */ this.root = new (0, _nodeJs.Document)(this.dom);
        /** Indicated whether parsing has been completed. */ this.done = false;
        /** Stack of open tags. */ this.tagStack = [
            this.root
        ];
        /** A data node that is still being written to. */ this.lastNode = null;
        /** Reference to the parser instance. Used for location information. */ this.parser = null;
        // Make it possible to skip arguments, for backwards-compatibility
        if (typeof options === "function") {
            elementCB = options;
            options = defaultOpts;
        }
        if (typeof callback === "object") {
            options = callback;
            callback = undefined;
        }
        this.callback = callback !== null && callback !== void 0 ? callback : null;
        this.options = options !== null && options !== void 0 ? options : defaultOpts;
        this.elementCB = elementCB !== null && elementCB !== void 0 ? elementCB : null;
    }
    onparserinit(parser) {
        this.parser = parser;
    }
    // Resets the handler back to starting state
    onreset() {
        this.dom = [];
        this.root = new (0, _nodeJs.Document)(this.dom);
        this.done = false;
        this.tagStack = [
            this.root
        ];
        this.lastNode = null;
        this.parser = null;
    }
    // Signals the handler that parsing is done
    onend() {
        if (this.done) return;
        this.done = true;
        this.parser = null;
        this.handleCallback(null);
    }
    onerror(error) {
        this.handleCallback(error);
    }
    onclosetag() {
        this.lastNode = null;
        const elem = this.tagStack.pop();
        if (this.options.withEndIndices) elem.endIndex = this.parser.endIndex;
        if (this.elementCB) this.elementCB(elem);
    }
    onopentag(name, attribs) {
        const type = this.options.xmlMode ? (0, _domelementtype.ElementType).Tag : undefined;
        const element = new (0, _nodeJs.Element)(name, attribs, undefined, type);
        this.addNode(element);
        this.tagStack.push(element);
    }
    ontext(data) {
        const { lastNode } = this;
        if (lastNode && lastNode.type === (0, _domelementtype.ElementType).Text) {
            lastNode.data += data;
            if (this.options.withEndIndices) lastNode.endIndex = this.parser.endIndex;
        } else {
            const node = new (0, _nodeJs.Text)(data);
            this.addNode(node);
            this.lastNode = node;
        }
    }
    oncomment(data) {
        if (this.lastNode && this.lastNode.type === (0, _domelementtype.ElementType).Comment) {
            this.lastNode.data += data;
            return;
        }
        const node = new (0, _nodeJs.Comment)(data);
        this.addNode(node);
        this.lastNode = node;
    }
    oncommentend() {
        this.lastNode = null;
    }
    oncdatastart() {
        const text = new (0, _nodeJs.Text)("");
        const node = new (0, _nodeJs.CDATA)([
            text
        ]);
        this.addNode(node);
        text.parent = node;
        this.lastNode = text;
    }
    oncdataend() {
        this.lastNode = null;
    }
    onprocessinginstruction(name, data) {
        const node = new (0, _nodeJs.ProcessingInstruction)(name, data);
        this.addNode(node);
    }
    handleCallback(error) {
        if (typeof this.callback === "function") this.callback(error, this.dom);
        else if (error) throw error;
    }
    addNode(node) {
        const parent = this.tagStack[this.tagStack.length - 1];
        const previousSibling = parent.children[parent.children.length - 1];
        if (this.options.withStartIndices) node.startIndex = this.parser.startIndex;
        if (this.options.withEndIndices) node.endIndex = this.parser.endIndex;
        parent.children.push(node);
        if (previousSibling) {
            node.prev = previousSibling;
            previousSibling.next = node;
        }
        node.parent = parent;
        this.lastNode = null;
    }
}
exports.default = DomHandler;

},{"domelementtype":"h9GvZ","./node.js":"l0MdV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h9GvZ":[function(require,module,exports) {
/** Types of elements found in htmlparser2's DOM */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ElementType", ()=>ElementType);
/**
 * Tests whether an element is a tag or not.
 *
 * @param elem Element to test
 */ parcelHelpers.export(exports, "isTag", ()=>isTag);
parcelHelpers.export(exports, "Root", ()=>Root);
parcelHelpers.export(exports, "Text", ()=>Text);
parcelHelpers.export(exports, "Directive", ()=>Directive);
parcelHelpers.export(exports, "Comment", ()=>Comment);
parcelHelpers.export(exports, "Script", ()=>Script);
parcelHelpers.export(exports, "Style", ()=>Style);
parcelHelpers.export(exports, "Tag", ()=>Tag);
parcelHelpers.export(exports, "CDATA", ()=>CDATA);
parcelHelpers.export(exports, "Doctype", ()=>Doctype);
var ElementType;
(function(ElementType) {
    /** Type for the root element of a document */ ElementType["Root"] = "root";
    /** Type for Text */ ElementType["Text"] = "text";
    /** Type for <? ... ?> */ ElementType["Directive"] = "directive";
    /** Type for <!-- ... --> */ ElementType["Comment"] = "comment";
    /** Type for <script> tags */ ElementType["Script"] = "script";
    /** Type for <style> tags */ ElementType["Style"] = "style";
    /** Type for Any tag */ ElementType["Tag"] = "tag";
    /** Type for <![CDATA[ ... ]]> */ ElementType["CDATA"] = "cdata";
    /** Type for <!doctype ...> */ ElementType["Doctype"] = "doctype";
})(ElementType || (ElementType = {}));
function isTag(elem) {
    return elem.type === ElementType.Tag || elem.type === ElementType.Script || elem.type === ElementType.Style;
}
const Root = ElementType.Root;
const Text = ElementType.Text;
const Directive = ElementType.Directive;
const Comment = ElementType.Comment;
const Script = ElementType.Script;
const Style = ElementType.Style;
const Tag = ElementType.Tag;
const CDATA = ElementType.CDATA;
const Doctype = ElementType.Doctype;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l0MdV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * This object will be used as the prototype for Nodes when creating a
 * DOM-Level-1-compliant structure.
 */ parcelHelpers.export(exports, "Node", ()=>Node);
/**
 * A node that contains some data.
 */ parcelHelpers.export(exports, "DataNode", ()=>DataNode);
/**
 * Text within the document.
 */ parcelHelpers.export(exports, "Text", ()=>Text);
/**
 * Comments within the document.
 */ parcelHelpers.export(exports, "Comment", ()=>Comment);
/**
 * Processing instructions, including doc types.
 */ parcelHelpers.export(exports, "ProcessingInstruction", ()=>ProcessingInstruction);
/**
 * A `Node` that can have children.
 */ parcelHelpers.export(exports, "NodeWithChildren", ()=>NodeWithChildren);
parcelHelpers.export(exports, "CDATA", ()=>CDATA);
/**
 * The root node of the document.
 */ parcelHelpers.export(exports, "Document", ()=>Document);
/**
 * An element within the DOM.
 */ parcelHelpers.export(exports, "Element", ()=>Element);
/**
 * @param node Node to check.
 * @returns `true` if the node is a `Element`, `false` otherwise.
 */ parcelHelpers.export(exports, "isTag", ()=>isTag);
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `CDATA`, `false` otherwise.
 */ parcelHelpers.export(exports, "isCDATA", ()=>isCDATA);
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `Text`, `false` otherwise.
 */ parcelHelpers.export(exports, "isText", ()=>isText);
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `Comment`, `false` otherwise.
 */ parcelHelpers.export(exports, "isComment", ()=>isComment);
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
 */ parcelHelpers.export(exports, "isDirective", ()=>isDirective);
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
 */ parcelHelpers.export(exports, "isDocument", ()=>isDocument);
/**
 * @param node Node to check.
 * @returns `true` if the node has children, `false` otherwise.
 */ parcelHelpers.export(exports, "hasChildren", ()=>hasChildren);
/**
 * Clone a node, and optionally its children.
 *
 * @param recursive Clone child nodes as well.
 * @returns A clone of the node.
 */ parcelHelpers.export(exports, "cloneNode", ()=>cloneNode);
var _domelementtype = require("domelementtype");
class Node {
    constructor(){
        /** Parent of the node */ this.parent = null;
        /** Previous sibling */ this.prev = null;
        /** Next sibling */ this.next = null;
        /** The start index of the node. Requires `withStartIndices` on the handler to be `true. */ this.startIndex = null;
        /** The end index of the node. Requires `withEndIndices` on the handler to be `true. */ this.endIndex = null;
    }
    // Read-write aliases for properties
    /**
     * Same as {@link parent}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */ get parentNode() {
        return this.parent;
    }
    set parentNode(parent) {
        this.parent = parent;
    }
    /**
     * Same as {@link prev}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */ get previousSibling() {
        return this.prev;
    }
    set previousSibling(prev) {
        this.prev = prev;
    }
    /**
     * Same as {@link next}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */ get nextSibling() {
        return this.next;
    }
    set nextSibling(next) {
        this.next = next;
    }
    /**
     * Clone this node, and optionally its children.
     *
     * @param recursive Clone child nodes as well.
     * @returns A clone of the node.
     */ cloneNode(recursive = false) {
        return cloneNode(this, recursive);
    }
}
class DataNode extends Node {
    /**
     * @param data The content of the data node
     */ constructor(data){
        super();
        this.data = data;
    }
    /**
     * Same as {@link data}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */ get nodeValue() {
        return this.data;
    }
    set nodeValue(data) {
        this.data = data;
    }
}
class Text extends DataNode {
    constructor(){
        super(...arguments);
        this.type = (0, _domelementtype.ElementType).Text;
    }
    get nodeType() {
        return 3;
    }
}
class Comment extends DataNode {
    constructor(){
        super(...arguments);
        this.type = (0, _domelementtype.ElementType).Comment;
    }
    get nodeType() {
        return 8;
    }
}
class ProcessingInstruction extends DataNode {
    constructor(name, data){
        super(data);
        this.name = name;
        this.type = (0, _domelementtype.ElementType).Directive;
    }
    get nodeType() {
        return 1;
    }
}
class NodeWithChildren extends Node {
    /**
     * @param children Children of the node. Only certain node types can have children.
     */ constructor(children){
        super();
        this.children = children;
    }
    // Aliases
    /** First child of the node. */ get firstChild() {
        var _a;
        return (_a = this.children[0]) !== null && _a !== void 0 ? _a : null;
    }
    /** Last child of the node. */ get lastChild() {
        return this.children.length > 0 ? this.children[this.children.length - 1] : null;
    }
    /**
     * Same as {@link children}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */ get childNodes() {
        return this.children;
    }
    set childNodes(children) {
        this.children = children;
    }
}
class CDATA extends NodeWithChildren {
    constructor(){
        super(...arguments);
        this.type = (0, _domelementtype.ElementType).CDATA;
    }
    get nodeType() {
        return 4;
    }
}
class Document extends NodeWithChildren {
    constructor(){
        super(...arguments);
        this.type = (0, _domelementtype.ElementType).Root;
    }
    get nodeType() {
        return 9;
    }
}
class Element extends NodeWithChildren {
    /**
     * @param name Name of the tag, eg. `div`, `span`.
     * @param attribs Object mapping attribute names to attribute values.
     * @param children Children of the node.
     */ constructor(name, attribs, children = [], type = name === "script" ? (0, _domelementtype.ElementType).Script : name === "style" ? (0, _domelementtype.ElementType).Style : (0, _domelementtype.ElementType).Tag){
        super(children);
        this.name = name;
        this.attribs = attribs;
        this.type = type;
    }
    get nodeType() {
        return 1;
    }
    // DOM Level 1 aliases
    /**
     * Same as {@link name}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */ get tagName() {
        return this.name;
    }
    set tagName(name) {
        this.name = name;
    }
    get attributes() {
        return Object.keys(this.attribs).map((name)=>{
            var _a, _b;
            return {
                name,
                value: this.attribs[name],
                namespace: (_a = this["x-attribsNamespace"]) === null || _a === void 0 ? void 0 : _a[name],
                prefix: (_b = this["x-attribsPrefix"]) === null || _b === void 0 ? void 0 : _b[name]
            };
        });
    }
}
function isTag(node) {
    return (0, _domelementtype.isTag)(node);
}
function isCDATA(node) {
    return node.type === (0, _domelementtype.ElementType).CDATA;
}
function isText(node) {
    return node.type === (0, _domelementtype.ElementType).Text;
}
function isComment(node) {
    return node.type === (0, _domelementtype.ElementType).Comment;
}
function isDirective(node) {
    return node.type === (0, _domelementtype.ElementType).Directive;
}
function isDocument(node) {
    return node.type === (0, _domelementtype.ElementType).Root;
}
function hasChildren(node) {
    return Object.prototype.hasOwnProperty.call(node, "children");
}
function cloneNode(node, recursive = false) {
    let result;
    if (isText(node)) result = new Text(node.data);
    else if (isComment(node)) result = new Comment(node.data);
    else if (isTag(node)) {
        const children = recursive ? cloneChildren(node.children) : [];
        const clone = new Element(node.name, {
            ...node.attribs
        }, children);
        children.forEach((child)=>child.parent = clone);
        if (node.namespace != null) clone.namespace = node.namespace;
        if (node["x-attribsNamespace"]) clone["x-attribsNamespace"] = {
            ...node["x-attribsNamespace"]
        };
        if (node["x-attribsPrefix"]) clone["x-attribsPrefix"] = {
            ...node["x-attribsPrefix"]
        };
        result = clone;
    } else if (isCDATA(node)) {
        const children = recursive ? cloneChildren(node.children) : [];
        const clone = new CDATA(children);
        children.forEach((child)=>child.parent = clone);
        result = clone;
    } else if (isDocument(node)) {
        const children = recursive ? cloneChildren(node.children) : [];
        const clone = new Document(children);
        children.forEach((child)=>child.parent = clone);
        if (node["x-mode"]) clone["x-mode"] = node["x-mode"];
        result = clone;
    } else if (isDirective(node)) {
        const instruction = new ProcessingInstruction(node.name, node.data);
        if (node["x-name"] != null) {
            instruction["x-name"] = node["x-name"];
            instruction["x-publicId"] = node["x-publicId"];
            instruction["x-systemId"] = node["x-systemId"];
        }
        result = instruction;
    } else throw new Error(`Not implemented yet: ${node.type}`);
    result.startIndex = node.startIndex;
    result.endIndex = node.endIndex;
    if (node.sourceCodeLocation != null) result.sourceCodeLocation = node.sourceCodeLocation;
    return result;
}
function cloneChildren(childs) {
    const children = childs.map((child)=>cloneNode(child, true));
    for(let i = 1; i < children.length; i++){
        children[i].prev = children[i - 1];
        children[i - 1].next = children[i];
    }
    return children;
}

},{"domelementtype":"h9GvZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4fc8I":[function(require,module,exports) {
/*
 * Module dependencies
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Renders a DOM node or an array of DOM nodes to a string.
 *
 * Can be thought of as the equivalent of the `outerHTML` of the passed node(s).
 *
 * @param node Node to be rendered.
 * @param options Changes serialization behavior
 */ parcelHelpers.export(exports, "render", ()=>render);
var _domelementtype = require("domelementtype");
var _entities = require("entities");
/**
 * Mixed-case SVG and MathML tags & attributes
 * recognized by the HTML parser.
 *
 * @see https://html.spec.whatwg.org/multipage/parsing.html#parsing-main-inforeign
 */ var _foreignNamesJs = require("./foreignNames.js");
const unencodedElements = new Set([
    "style",
    "script",
    "xmp",
    "iframe",
    "noembed",
    "noframes",
    "plaintext",
    "noscript"
]);
function replaceQuotes(value) {
    return value.replace(/"/g, "&quot;");
}
/**
 * Format attributes
 */ function formatAttributes(attributes, opts) {
    var _a;
    if (!attributes) return;
    const encode = ((_a = opts.encodeEntities) !== null && _a !== void 0 ? _a : opts.decodeEntities) === false ? replaceQuotes : opts.xmlMode || opts.encodeEntities !== "utf8" ? (0, _entities.encodeXML) : (0, _entities.escapeAttribute);
    return Object.keys(attributes).map((key)=>{
        var _a, _b;
        const value = (_a = attributes[key]) !== null && _a !== void 0 ? _a : "";
        if (opts.xmlMode === "foreign") /* Fix up mixed-case attribute names */ key = (_b = (0, _foreignNamesJs.attributeNames).get(key)) !== null && _b !== void 0 ? _b : key;
        if (!opts.emptyAttrs && !opts.xmlMode && value === "") return key;
        return `${key}="${encode(value)}"`;
    }).join(" ");
}
/**
 * Self-enclosing tags
 */ const singleTag = new Set([
    "area",
    "base",
    "basefont",
    "br",
    "col",
    "command",
    "embed",
    "frame",
    "hr",
    "img",
    "input",
    "isindex",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr"
]);
function render(node, options = {}) {
    const nodes = "length" in node ? node : [
        node
    ];
    let output = "";
    for(let i = 0; i < nodes.length; i++)output += renderNode(nodes[i], options);
    return output;
}
exports.default = render;
function renderNode(node, options) {
    switch(node.type){
        case _domelementtype.Root:
            return render(node.children, options);
        // @ts-expect-error We don't use `Doctype` yet
        case _domelementtype.Doctype:
        case _domelementtype.Directive:
            return renderDirective(node);
        case _domelementtype.Comment:
            return renderComment(node);
        case _domelementtype.CDATA:
            return renderCdata(node);
        case _domelementtype.Script:
        case _domelementtype.Style:
        case _domelementtype.Tag:
            return renderTag(node, options);
        case _domelementtype.Text:
            return renderText(node, options);
    }
}
const foreignModeIntegrationPoints = new Set([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext",
    "annotation-xml",
    "foreignObject",
    "desc",
    "title"
]);
const foreignElements = new Set([
    "svg",
    "math"
]);
function renderTag(elem, opts) {
    var _a;
    // Handle SVG / MathML in HTML
    if (opts.xmlMode === "foreign") {
        /* Fix up mixed-case element names */ elem.name = (_a = (0, _foreignNamesJs.elementNames).get(elem.name)) !== null && _a !== void 0 ? _a : elem.name;
        /* Exit foreign mode at integration points */ if (elem.parent && foreignModeIntegrationPoints.has(elem.parent.name)) opts = {
            ...opts,
            xmlMode: false
        };
    }
    if (!opts.xmlMode && foreignElements.has(elem.name)) opts = {
        ...opts,
        xmlMode: "foreign"
    };
    let tag = `<${elem.name}`;
    const attribs = formatAttributes(elem.attribs, opts);
    if (attribs) tag += ` ${attribs}`;
    if (elem.children.length === 0 && (opts.xmlMode ? opts.selfClosingTags !== false : opts.selfClosingTags && singleTag.has(elem.name))) {
        if (!opts.xmlMode) tag += " ";
        tag += "/>";
    } else {
        tag += ">";
        if (elem.children.length > 0) tag += render(elem.children, opts);
        if (opts.xmlMode || !singleTag.has(elem.name)) tag += `</${elem.name}>`;
    }
    return tag;
}
function renderDirective(elem) {
    return `<${elem.data}>`;
}
function renderText(elem, opts) {
    var _a;
    let data = elem.data || "";
    // If entities weren't decoded, no need to encode them back
    if (((_a = opts.encodeEntities) !== null && _a !== void 0 ? _a : opts.decodeEntities) !== false && !(!opts.xmlMode && elem.parent && unencodedElements.has(elem.parent.name))) data = opts.xmlMode || opts.encodeEntities !== "utf8" ? (0, _entities.encodeXML)(data) : (0, _entities.escapeText)(data);
    return data;
}
function renderCdata(elem) {
    return `<![CDATA[${elem.children[0].data}]]>`;
}
function renderComment(elem) {
    return `<!--${elem.data}-->`;
}

},{"domelementtype":"h9GvZ","entities":"c3Awp","./foreignNames.js":"Nvvci","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c3Awp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "encodeXML", ()=>(0, _escapeJs.encodeXML));
parcelHelpers.export(exports, "escape", ()=>(0, _escapeJs.escape));
parcelHelpers.export(exports, "escapeUTF8", ()=>(0, _escapeJs.escapeUTF8));
parcelHelpers.export(exports, "escapeAttribute", ()=>(0, _escapeJs.escapeAttribute));
parcelHelpers.export(exports, "escapeText", ()=>(0, _escapeJs.escapeText));
parcelHelpers.export(exports, "encodeHTML", ()=>(0, _encodeJs.encodeHTML));
parcelHelpers.export(exports, "encodeNonAsciiHTML", ()=>(0, _encodeJs.encodeNonAsciiHTML));
parcelHelpers.export(exports, "encodeHTML4", ()=>(0, _encodeJs.encodeHTML));
parcelHelpers.export(exports, "encodeHTML5", ()=>(0, _encodeJs.encodeHTML));
parcelHelpers.export(exports, "EntityDecoder", ()=>(0, _decodeJs.EntityDecoder));
parcelHelpers.export(exports, "DecodingMode", ()=>(0, _decodeJs.DecodingMode));
parcelHelpers.export(exports, "decodeXML", ()=>(0, _decodeJs.decodeXML));
parcelHelpers.export(exports, "decodeHTML", ()=>(0, _decodeJs.decodeHTML));
parcelHelpers.export(exports, "decodeHTMLStrict", ()=>(0, _decodeJs.decodeHTMLStrict));
parcelHelpers.export(exports, "decodeHTMLAttribute", ()=>(0, _decodeJs.decodeHTMLAttribute));
parcelHelpers.export(exports, "decodeHTML4", ()=>(0, _decodeJs.decodeHTML));
parcelHelpers.export(exports, "decodeHTML5", ()=>(0, _decodeJs.decodeHTML));
parcelHelpers.export(exports, "decodeHTML4Strict", ()=>(0, _decodeJs.decodeHTMLStrict));
parcelHelpers.export(exports, "decodeHTML5Strict", ()=>(0, _decodeJs.decodeHTMLStrict));
parcelHelpers.export(exports, "decodeXMLStrict", ()=>(0, _decodeJs.decodeXML));
parcelHelpers.export(exports, "EntityLevel", ()=>EntityLevel);
parcelHelpers.export(exports, "EncodingMode", ()=>EncodingMode);
/**
 * Decodes a string with entities.
 *
 * @param data String to decode.
 * @param options Decoding options.
 */ parcelHelpers.export(exports, "decode", ()=>decode);
/**
 * Decodes a string with entities. Does not allow missing trailing semicolons for entities.
 *
 * @param data String to decode.
 * @param options Decoding options.
 * @deprecated Use `decode` with the `mode` set to `Strict`.
 */ parcelHelpers.export(exports, "decodeStrict", ()=>decodeStrict);
/**
 * Encodes a string with entities.
 *
 * @param data String to encode.
 * @param options Encoding options.
 */ parcelHelpers.export(exports, "encode", ()=>encode);
var _decodeJs = require("./decode.js");
var _encodeJs = require("./encode.js");
var _escapeJs = require("./escape.js");
var EntityLevel;
(function(EntityLevel) {
    /** Support only XML entities. */ EntityLevel[EntityLevel["XML"] = 0] = "XML";
    /** Support HTML entities, which are a superset of XML entities. */ EntityLevel[EntityLevel["HTML"] = 1] = "HTML";
})(EntityLevel || (EntityLevel = {}));
var EncodingMode;
(function(EncodingMode) {
    /**
     * The output is UTF-8 encoded. Only characters that need escaping within
     * XML will be escaped.
     */ EncodingMode[EncodingMode["UTF8"] = 0] = "UTF8";
    /**
     * The output consists only of ASCII characters. Characters that need
     * escaping within HTML, and characters that aren't ASCII characters will
     * be escaped.
     */ EncodingMode[EncodingMode["ASCII"] = 1] = "ASCII";
    /**
     * Encode all characters that have an equivalent entity, as well as all
     * characters that are not ASCII characters.
     */ EncodingMode[EncodingMode["Extensive"] = 2] = "Extensive";
    /**
     * Encode all characters that have to be escaped in HTML attributes,
     * following {@link https://html.spec.whatwg.org/multipage/parsing.html#escapingString}.
     */ EncodingMode[EncodingMode["Attribute"] = 3] = "Attribute";
    /**
     * Encode all characters that have to be escaped in HTML text,
     * following {@link https://html.spec.whatwg.org/multipage/parsing.html#escapingString}.
     */ EncodingMode[EncodingMode["Text"] = 4] = "Text";
})(EncodingMode || (EncodingMode = {}));
function decode(data, options = EntityLevel.XML) {
    const level = typeof options === "number" ? options : options.level;
    if (level === EntityLevel.HTML) {
        const mode = typeof options === "object" ? options.mode : undefined;
        return (0, _decodeJs.decodeHTML)(data, mode);
    }
    return (0, _decodeJs.decodeXML)(data);
}
function decodeStrict(data, options = EntityLevel.XML) {
    var _a;
    const opts = typeof options === "number" ? {
        level: options
    } : options;
    (_a = opts.mode) !== null && _a !== void 0 ? _a : opts.mode = (0, _decodeJs.DecodingMode).Strict;
    return decode(data, opts);
}
function encode(data, options = EntityLevel.XML) {
    const opts = typeof options === "number" ? {
        level: options
    } : options;
    // Mode `UTF8` just escapes XML entities
    if (opts.mode === EncodingMode.UTF8) return (0, _escapeJs.escapeUTF8)(data);
    if (opts.mode === EncodingMode.Attribute) return (0, _escapeJs.escapeAttribute)(data);
    if (opts.mode === EncodingMode.Text) return (0, _escapeJs.escapeText)(data);
    if (opts.level === EntityLevel.HTML) {
        if (opts.mode === EncodingMode.ASCII) return (0, _encodeJs.encodeNonAsciiHTML)(data);
        return (0, _encodeJs.encodeHTML)(data);
    }
    // ASCII and Extensive are equivalent
    return (0, _escapeJs.encodeXML)(data);
}

},{"./decode.js":"hv7fH","./encode.js":"37yJE","./escape.js":"cegbJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hv7fH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "replaceCodePoint", ()=>(0, _decodeCodepointJs.replaceCodePoint));
parcelHelpers.export(exports, "fromCodePoint", ()=>(0, _decodeCodepointJs.fromCodePoint));
// Re-export for use by eg. htmlparser2
parcelHelpers.export(exports, "htmlDecodeTree", ()=>(0, _decodeDataHtmlJsDefault.default));
parcelHelpers.export(exports, "xmlDecodeTree", ()=>(0, _decodeDataXmlJsDefault.default));
parcelHelpers.export(exports, "decodeCodePoint", ()=>(0, _decodeCodepointJsDefault.default));
parcelHelpers.export(exports, "BinTrieFlags", ()=>BinTrieFlags);
parcelHelpers.export(exports, "DecodingMode", ()=>DecodingMode);
/**
 * Token decoder with support of writing partial entities.
 */ parcelHelpers.export(exports, "EntityDecoder", ()=>EntityDecoder);
/**
 * Determines the branch of the current node that is taken given the current
 * character. This function is used to traverse the trie.
 *
 * @param decodeTree The trie.
 * @param current The current node.
 * @param nodeIdx The index right after the current node and its value.
 * @param char The current character.
 * @returns The index of the next node, or -1 if no branch is taken.
 */ parcelHelpers.export(exports, "determineBranch", ()=>determineBranch);
/**
 * Decodes an HTML string.
 *
 * @param str The string to decode.
 * @param mode The decoding mode.
 * @returns The decoded string.
 */ parcelHelpers.export(exports, "decodeHTML", ()=>decodeHTML);
/**
 * Decodes an HTML string in an attribute.
 *
 * @param str The string to decode.
 * @returns The decoded string.
 */ parcelHelpers.export(exports, "decodeHTMLAttribute", ()=>decodeHTMLAttribute);
/**
 * Decodes an HTML string, requiring all entities to be terminated by a semicolon.
 *
 * @param str The string to decode.
 * @returns The decoded string.
 */ parcelHelpers.export(exports, "decodeHTMLStrict", ()=>decodeHTMLStrict);
/**
 * Decodes an XML string, requiring all entities to be terminated by a semicolon.
 *
 * @param str The string to decode.
 * @returns The decoded string.
 */ parcelHelpers.export(exports, "decodeXML", ()=>decodeXML);
var _decodeDataHtmlJs = require("./generated/decode-data-html.js");
var _decodeDataHtmlJsDefault = parcelHelpers.interopDefault(_decodeDataHtmlJs);
var _decodeDataXmlJs = require("./generated/decode-data-xml.js");
var _decodeDataXmlJsDefault = parcelHelpers.interopDefault(_decodeDataXmlJs);
var _decodeCodepointJs = require("./decode_codepoint.js");
var _decodeCodepointJsDefault = parcelHelpers.interopDefault(_decodeCodepointJs);
var CharCodes;
(function(CharCodes) {
    CharCodes[CharCodes["NUM"] = 35] = "NUM";
    CharCodes[CharCodes["SEMI"] = 59] = "SEMI";
    CharCodes[CharCodes["EQUALS"] = 61] = "EQUALS";
    CharCodes[CharCodes["ZERO"] = 48] = "ZERO";
    CharCodes[CharCodes["NINE"] = 57] = "NINE";
    CharCodes[CharCodes["LOWER_A"] = 97] = "LOWER_A";
    CharCodes[CharCodes["LOWER_F"] = 102] = "LOWER_F";
    CharCodes[CharCodes["LOWER_X"] = 120] = "LOWER_X";
    CharCodes[CharCodes["LOWER_Z"] = 122] = "LOWER_Z";
    CharCodes[CharCodes["UPPER_A"] = 65] = "UPPER_A";
    CharCodes[CharCodes["UPPER_F"] = 70] = "UPPER_F";
    CharCodes[CharCodes["UPPER_Z"] = 90] = "UPPER_Z";
})(CharCodes || (CharCodes = {}));
/** Bit that needs to be set to convert an upper case ASCII character to lower case */ const TO_LOWER_BIT = 32;
var BinTrieFlags;
(function(BinTrieFlags) {
    BinTrieFlags[BinTrieFlags["VALUE_LENGTH"] = 49152] = "VALUE_LENGTH";
    BinTrieFlags[BinTrieFlags["BRANCH_LENGTH"] = 16256] = "BRANCH_LENGTH";
    BinTrieFlags[BinTrieFlags["JUMP_TABLE"] = 127] = "JUMP_TABLE";
})(BinTrieFlags || (BinTrieFlags = {}));
function isNumber(code) {
    return code >= CharCodes.ZERO && code <= CharCodes.NINE;
}
function isHexadecimalCharacter(code) {
    return code >= CharCodes.UPPER_A && code <= CharCodes.UPPER_F || code >= CharCodes.LOWER_A && code <= CharCodes.LOWER_F;
}
function isAsciiAlphaNumeric(code) {
    return code >= CharCodes.UPPER_A && code <= CharCodes.UPPER_Z || code >= CharCodes.LOWER_A && code <= CharCodes.LOWER_Z || isNumber(code);
}
/**
 * Checks if the given character is a valid end character for an entity in an attribute.
 *
 * Attribute values that aren't terminated properly aren't parsed, and shouldn't lead to a parser error.
 * See the example in https://html.spec.whatwg.org/multipage/parsing.html#named-character-reference-state
 */ function isEntityInAttributeInvalidEnd(code) {
    return code === CharCodes.EQUALS || isAsciiAlphaNumeric(code);
}
var EntityDecoderState;
(function(EntityDecoderState) {
    EntityDecoderState[EntityDecoderState["EntityStart"] = 0] = "EntityStart";
    EntityDecoderState[EntityDecoderState["NumericStart"] = 1] = "NumericStart";
    EntityDecoderState[EntityDecoderState["NumericDecimal"] = 2] = "NumericDecimal";
    EntityDecoderState[EntityDecoderState["NumericHex"] = 3] = "NumericHex";
    EntityDecoderState[EntityDecoderState["NamedEntity"] = 4] = "NamedEntity";
})(EntityDecoderState || (EntityDecoderState = {}));
var DecodingMode;
(function(DecodingMode) {
    /** Entities in text nodes that can end with any character. */ DecodingMode[DecodingMode["Legacy"] = 0] = "Legacy";
    /** Only allow entities terminated with a semicolon. */ DecodingMode[DecodingMode["Strict"] = 1] = "Strict";
    /** Entities in attributes have limitations on ending characters. */ DecodingMode[DecodingMode["Attribute"] = 2] = "Attribute";
})(DecodingMode || (DecodingMode = {}));
class EntityDecoder {
    constructor(/** The tree used to decode entities. */ decodeTree, /**
     * The function that is called when a codepoint is decoded.
     *
     * For multi-byte named entities, this will be called multiple times,
     * with the second codepoint, and the same `consumed` value.
     *
     * @param codepoint The decoded codepoint.
     * @param consumed The number of bytes consumed by the decoder.
     */ emitCodePoint, /** An object that is used to produce errors. */ errors){
        this.decodeTree = decodeTree;
        this.emitCodePoint = emitCodePoint;
        this.errors = errors;
        /** The current state of the decoder. */ this.state = EntityDecoderState.EntityStart;
        /** Characters that were consumed while parsing an entity. */ this.consumed = 1;
        /**
         * The result of the entity.
         *
         * Either the result index of a numeric entity, or the codepoint of a
         * numeric entity.
         */ this.result = 0;
        /** The current index in the decode tree. */ this.treeIndex = 0;
        /** The number of characters that were consumed in excess. */ this.excess = 1;
        /** The mode in which the decoder is operating. */ this.decodeMode = DecodingMode.Strict;
    }
    /** Resets the instance to make it reusable. */ startEntity(decodeMode) {
        this.decodeMode = decodeMode;
        this.state = EntityDecoderState.EntityStart;
        this.result = 0;
        this.treeIndex = 0;
        this.excess = 1;
        this.consumed = 1;
    }
    /**
     * Write an entity to the decoder. This can be called multiple times with partial entities.
     * If the entity is incomplete, the decoder will return -1.
     *
     * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
     * entity is incomplete, and resume when the next string is written.
     *
     * @param string The string containing the entity (or a continuation of the entity).
     * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */ write(str, offset) {
        switch(this.state){
            case EntityDecoderState.EntityStart:
                if (str.charCodeAt(offset) === CharCodes.NUM) {
                    this.state = EntityDecoderState.NumericStart;
                    this.consumed += 1;
                    return this.stateNumericStart(str, offset + 1);
                }
                this.state = EntityDecoderState.NamedEntity;
                return this.stateNamedEntity(str, offset);
            case EntityDecoderState.NumericStart:
                return this.stateNumericStart(str, offset);
            case EntityDecoderState.NumericDecimal:
                return this.stateNumericDecimal(str, offset);
            case EntityDecoderState.NumericHex:
                return this.stateNumericHex(str, offset);
            case EntityDecoderState.NamedEntity:
                return this.stateNamedEntity(str, offset);
        }
    }
    /**
     * Switches between the numeric decimal and hexadecimal states.
     *
     * Equivalent to the `Numeric character reference state` in the HTML spec.
     *
     * @param str The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */ stateNumericStart(str, offset) {
        if (offset >= str.length) return -1;
        if ((str.charCodeAt(offset) | TO_LOWER_BIT) === CharCodes.LOWER_X) {
            this.state = EntityDecoderState.NumericHex;
            this.consumed += 1;
            return this.stateNumericHex(str, offset + 1);
        }
        this.state = EntityDecoderState.NumericDecimal;
        return this.stateNumericDecimal(str, offset);
    }
    addToNumericResult(str, start, end, base) {
        if (start !== end) {
            const digitCount = end - start;
            this.result = this.result * Math.pow(base, digitCount) + parseInt(str.substr(start, digitCount), base);
            this.consumed += digitCount;
        }
    }
    /**
     * Parses a hexadecimal numeric entity.
     *
     * Equivalent to the `Hexademical character reference state` in the HTML spec.
     *
     * @param str The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */ stateNumericHex(str, offset) {
        const startIdx = offset;
        while(offset < str.length){
            const char = str.charCodeAt(offset);
            if (isNumber(char) || isHexadecimalCharacter(char)) offset += 1;
            else {
                this.addToNumericResult(str, startIdx, offset, 16);
                return this.emitNumericEntity(char, 3);
            }
        }
        this.addToNumericResult(str, startIdx, offset, 16);
        return -1;
    }
    /**
     * Parses a decimal numeric entity.
     *
     * Equivalent to the `Decimal character reference state` in the HTML spec.
     *
     * @param str The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */ stateNumericDecimal(str, offset) {
        const startIdx = offset;
        while(offset < str.length){
            const char = str.charCodeAt(offset);
            if (isNumber(char)) offset += 1;
            else {
                this.addToNumericResult(str, startIdx, offset, 10);
                return this.emitNumericEntity(char, 2);
            }
        }
        this.addToNumericResult(str, startIdx, offset, 10);
        return -1;
    }
    /**
     * Validate and emit a numeric entity.
     *
     * Implements the logic from the `Hexademical character reference start
     * state` and `Numeric character reference end state` in the HTML spec.
     *
     * @param lastCp The last code point of the entity. Used to see if the
     *               entity was terminated with a semicolon.
     * @param expectedLength The minimum number of characters that should be
     *                       consumed. Used to validate that at least one digit
     *                       was consumed.
     * @returns The number of characters that were consumed.
     */ emitNumericEntity(lastCp, expectedLength) {
        var _a;
        // Ensure we consumed at least one digit.
        if (this.consumed <= expectedLength) {
            (_a = this.errors) === null || _a === void 0 || _a.absenceOfDigitsInNumericCharacterReference(this.consumed);
            return 0;
        }
        // Figure out if this is a legit end of the entity
        if (lastCp === CharCodes.SEMI) this.consumed += 1;
        else if (this.decodeMode === DecodingMode.Strict) return 0;
        this.emitCodePoint((0, _decodeCodepointJs.replaceCodePoint)(this.result), this.consumed);
        if (this.errors) {
            if (lastCp !== CharCodes.SEMI) this.errors.missingSemicolonAfterCharacterReference();
            this.errors.validateNumericCharacterReference(this.result);
        }
        return this.consumed;
    }
    /**
     * Parses a named entity.
     *
     * Equivalent to the `Named character reference state` in the HTML spec.
     *
     * @param str The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */ stateNamedEntity(str, offset) {
        const { decodeTree } = this;
        let current = decodeTree[this.treeIndex];
        // The mask is the number of bytes of the value, including the current byte.
        let valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
        for(; offset < str.length; offset++, this.excess++){
            const char = str.charCodeAt(offset);
            this.treeIndex = determineBranch(decodeTree, current, this.treeIndex + Math.max(1, valueLength), char);
            if (this.treeIndex < 0) return this.result === 0 || // If we are parsing an attribute
            this.decodeMode === DecodingMode.Attribute && // We shouldn't have consumed any characters after the entity,
            (valueLength === 0 || // And there should be no invalid characters.
            isEntityInAttributeInvalidEnd(char)) ? 0 : this.emitNotTerminatedNamedEntity();
            current = decodeTree[this.treeIndex];
            valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
            // If the branch is a value, store it and continue
            if (valueLength !== 0) {
                // If the entity is terminated by a semicolon, we are done.
                if (char === CharCodes.SEMI) return this.emitNamedEntityData(this.treeIndex, valueLength, this.consumed + this.excess);
                // If we encounter a non-terminated (legacy) entity while parsing strictly, then ignore it.
                if (this.decodeMode !== DecodingMode.Strict) {
                    this.result = this.treeIndex;
                    this.consumed += this.excess;
                    this.excess = 0;
                }
            }
        }
        return -1;
    }
    /**
     * Emit a named entity that was not terminated with a semicolon.
     *
     * @returns The number of characters consumed.
     */ emitNotTerminatedNamedEntity() {
        var _a;
        const { result, decodeTree } = this;
        const valueLength = (decodeTree[result] & BinTrieFlags.VALUE_LENGTH) >> 14;
        this.emitNamedEntityData(result, valueLength, this.consumed);
        (_a = this.errors) === null || _a === void 0 || _a.missingSemicolonAfterCharacterReference();
        return this.consumed;
    }
    /**
     * Emit a named entity.
     *
     * @param result The index of the entity in the decode tree.
     * @param valueLength The number of bytes in the entity.
     * @param consumed The number of characters consumed.
     *
     * @returns The number of characters consumed.
     */ emitNamedEntityData(result, valueLength, consumed) {
        const { decodeTree } = this;
        this.emitCodePoint(valueLength === 1 ? decodeTree[result] & ~BinTrieFlags.VALUE_LENGTH : decodeTree[result + 1], consumed);
        if (valueLength === 3) // For multi-byte values, we need to emit the second byte.
        this.emitCodePoint(decodeTree[result + 2], consumed);
        return consumed;
    }
    /**
     * Signal to the parser that the end of the input was reached.
     *
     * Remaining data will be emitted and relevant errors will be produced.
     *
     * @returns The number of characters consumed.
     */ end() {
        var _a;
        switch(this.state){
            case EntityDecoderState.NamedEntity:
                // Emit a named entity if we have one.
                return this.result !== 0 && (this.decodeMode !== DecodingMode.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
            // Otherwise, emit a numeric entity if we have one.
            case EntityDecoderState.NumericDecimal:
                return this.emitNumericEntity(0, 2);
            case EntityDecoderState.NumericHex:
                return this.emitNumericEntity(0, 3);
            case EntityDecoderState.NumericStart:
                (_a = this.errors) === null || _a === void 0 || _a.absenceOfDigitsInNumericCharacterReference(this.consumed);
                return 0;
            case EntityDecoderState.EntityStart:
                // Return 0 if we have no entity.
                return 0;
        }
    }
}
/**
 * Creates a function that decodes entities in a string.
 *
 * @param decodeTree The decode tree.
 * @returns A function that decodes entities in a string.
 */ function getDecoder(decodeTree) {
    let ret = "";
    const decoder = new EntityDecoder(decodeTree, (str)=>ret += (0, _decodeCodepointJs.fromCodePoint)(str));
    return function decodeWithTrie(str, decodeMode) {
        let lastIndex = 0;
        let offset = 0;
        while((offset = str.indexOf("&", offset)) >= 0){
            ret += str.slice(lastIndex, offset);
            decoder.startEntity(decodeMode);
            const len = decoder.write(str, // Skip the "&"
            offset + 1);
            if (len < 0) {
                lastIndex = offset + decoder.end();
                break;
            }
            lastIndex = offset + len;
            // If `len` is 0, skip the current `&` and continue.
            offset = len === 0 ? lastIndex + 1 : lastIndex;
        }
        const result = ret + str.slice(lastIndex);
        // Make sure we don't keep a reference to the final string.
        ret = "";
        return result;
    };
}
function determineBranch(decodeTree, current, nodeIdx, char) {
    const branchCount = (current & BinTrieFlags.BRANCH_LENGTH) >> 7;
    const jumpOffset = current & BinTrieFlags.JUMP_TABLE;
    // Case 1: Single branch encoded in jump offset
    if (branchCount === 0) return jumpOffset !== 0 && char === jumpOffset ? nodeIdx : -1;
    // Case 2: Multiple branches encoded in jump table
    if (jumpOffset) {
        const value = char - jumpOffset;
        return value < 0 || value >= branchCount ? -1 : decodeTree[nodeIdx + value] - 1;
    }
    // Case 3: Multiple branches encoded in dictionary
    // Binary search for the character.
    let lo = nodeIdx;
    let hi = lo + branchCount - 1;
    while(lo <= hi){
        const mid = lo + hi >>> 1;
        const midVal = decodeTree[mid];
        if (midVal < char) lo = mid + 1;
        else if (midVal > char) hi = mid - 1;
        else return decodeTree[mid + branchCount];
    }
    return -1;
}
const htmlDecoder = getDecoder((0, _decodeDataHtmlJsDefault.default));
const xmlDecoder = getDecoder((0, _decodeDataXmlJsDefault.default));
function decodeHTML(str, mode = DecodingMode.Legacy) {
    return htmlDecoder(str, mode);
}
function decodeHTMLAttribute(str) {
    return htmlDecoder(str, DecodingMode.Attribute);
}
function decodeHTMLStrict(str) {
    return htmlDecoder(str, DecodingMode.Strict);
}
function decodeXML(str) {
    return xmlDecoder(str, DecodingMode.Strict);
}

},{"./generated/decode-data-html.js":"3nOnm","./generated/decode-data-xml.js":"g80LL","./decode_codepoint.js":"1ZK5R","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3nOnm":[function(require,module,exports) {
// Generated using scripts/write-decode-map.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = new Uint16Array(// prettier-ignore
'\u1D41<\xd5\u0131\u028A\u049D\u057B\u05D0\u0675\u06DE\u07A2\u07D6\u080F\u0A4A\u0A91\u0DA1\u0E6D\u0F09\u0F26\u10CA\u1228\u12E1\u1415\u149D\u14C3\u14DF\u1525\0\0\0\0\0\0\u156B\u16CD\u198D\u1C12\u1DDD\u1F7E\u2060\u21B0\u228D\u23C0\u23FB\u2442\u2824\u2912\u2D08\u2E48\u2FCE\u3016\u32BA\u3639\u37AC\u38FE\u3A28\u3A71\u3AE0\u3B2E\u0800EMabcfglmnoprstu\\bfms\x7f\x84\x8b\x90\x95\x98\xa6\xb3\xb9\xc8\xcflig\u803B\xc6\u40C6P\u803B&\u4026cute\u803B\xc1\u40C1reve;\u4102\u0100iyx}rc\u803B\xc2\u40C2;\u4410r;\uC000\ud835\udd04rave\u803B\xc0\u40C0pha;\u4391acr;\u4100d;\u6A53\u0100gp\x9d\xa1on;\u4104f;\uC000\ud835\udd38plyFunction;\u6061ing\u803B\xc5\u40C5\u0100cs\xbe\xc3r;\uC000\ud835\udc9cign;\u6254ilde\u803B\xc3\u40C3ml\u803B\xc4\u40C4\u0400aceforsu\xe5\xfb\xfe\u0117\u011C\u0122\u0127\u012A\u0100cr\xea\xf2kslash;\u6216\u0176\xf6\xf8;\u6AE7ed;\u6306y;\u4411\u0180crt\u0105\u010B\u0114ause;\u6235noullis;\u612Ca;\u4392r;\uC000\ud835\udd05pf;\uC000\ud835\udd39eve;\u42D8c\xf2\u0113mpeq;\u624E\u0700HOacdefhilorsu\u014D\u0151\u0156\u0180\u019E\u01A2\u01B5\u01B7\u01BA\u01DC\u0215\u0273\u0278\u027Ecy;\u4427PY\u803B\xa9\u40A9\u0180cpy\u015D\u0162\u017Aute;\u4106\u0100;i\u0167\u0168\u62D2talDifferentialD;\u6145leys;\u612D\u0200aeio\u0189\u018E\u0194\u0198ron;\u410Cdil\u803B\xc7\u40C7rc;\u4108nint;\u6230ot;\u410A\u0100dn\u01A7\u01ADilla;\u40B8terDot;\u40B7\xf2\u017Fi;\u43A7rcle\u0200DMPT\u01C7\u01CB\u01D1\u01D6ot;\u6299inus;\u6296lus;\u6295imes;\u6297o\u0100cs\u01E2\u01F8kwiseContourIntegral;\u6232eCurly\u0100DQ\u0203\u020FoubleQuote;\u601Duote;\u6019\u0200lnpu\u021E\u0228\u0247\u0255on\u0100;e\u0225\u0226\u6237;\u6A74\u0180git\u022F\u0236\u023Aruent;\u6261nt;\u622FourIntegral;\u622E\u0100fr\u024C\u024E;\u6102oduct;\u6210nterClockwiseContourIntegral;\u6233oss;\u6A2Fcr;\uC000\ud835\udc9ep\u0100;C\u0284\u0285\u62D3ap;\u624D\u0580DJSZacefios\u02A0\u02AC\u02B0\u02B4\u02B8\u02CB\u02D7\u02E1\u02E6\u0333\u048D\u0100;o\u0179\u02A5trahd;\u6911cy;\u4402cy;\u4405cy;\u440F\u0180grs\u02BF\u02C4\u02C7ger;\u6021r;\u61A1hv;\u6AE4\u0100ay\u02D0\u02D5ron;\u410E;\u4414l\u0100;t\u02DD\u02DE\u6207a;\u4394r;\uC000\ud835\udd07\u0100af\u02EB\u0327\u0100cm\u02F0\u0322ritical\u0200ADGT\u0300\u0306\u0316\u031Ccute;\u40B4o\u0174\u030B\u030D;\u42D9bleAcute;\u42DDrave;\u4060ilde;\u42DCond;\u62C4ferentialD;\u6146\u0470\u033D\0\0\0\u0342\u0354\0\u0405f;\uC000\ud835\udd3b\u0180;DE\u0348\u0349\u034D\u40A8ot;\u60DCqual;\u6250ble\u0300CDLRUV\u0363\u0372\u0382\u03CF\u03E2\u03F8ontourIntegra\xec\u0239o\u0274\u0379\0\0\u037B\xbb\u0349nArrow;\u61D3\u0100eo\u0387\u03A4ft\u0180ART\u0390\u0396\u03A1rrow;\u61D0ightArrow;\u61D4e\xe5\u02CAng\u0100LR\u03AB\u03C4eft\u0100AR\u03B3\u03B9rrow;\u67F8ightArrow;\u67FAightArrow;\u67F9ight\u0100AT\u03D8\u03DErrow;\u61D2ee;\u62A8p\u0241\u03E9\0\0\u03EFrrow;\u61D1ownArrow;\u61D5erticalBar;\u6225n\u0300ABLRTa\u0412\u042A\u0430\u045E\u047F\u037Crrow\u0180;BU\u041D\u041E\u0422\u6193ar;\u6913pArrow;\u61F5reve;\u4311eft\u02D2\u043A\0\u0446\0\u0450ightVector;\u6950eeVector;\u695Eector\u0100;B\u0459\u045A\u61BDar;\u6956ight\u01D4\u0467\0\u0471eeVector;\u695Fector\u0100;B\u047A\u047B\u61C1ar;\u6957ee\u0100;A\u0486\u0487\u62A4rrow;\u61A7\u0100ct\u0492\u0497r;\uC000\ud835\udc9frok;\u4110\u0800NTacdfglmopqstux\u04BD\u04C0\u04C4\u04CB\u04DE\u04E2\u04E7\u04EE\u04F5\u0521\u052F\u0536\u0552\u055D\u0560\u0565G;\u414AH\u803B\xd0\u40D0cute\u803B\xc9\u40C9\u0180aiy\u04D2\u04D7\u04DCron;\u411Arc\u803B\xca\u40CA;\u442Dot;\u4116r;\uC000\ud835\udd08rave\u803B\xc8\u40C8ement;\u6208\u0100ap\u04FA\u04FEcr;\u4112ty\u0253\u0506\0\0\u0512mallSquare;\u65FBerySmallSquare;\u65AB\u0100gp\u0526\u052Aon;\u4118f;\uC000\ud835\udd3csilon;\u4395u\u0100ai\u053C\u0549l\u0100;T\u0542\u0543\u6A75ilde;\u6242librium;\u61CC\u0100ci\u0557\u055Ar;\u6130m;\u6A73a;\u4397ml\u803B\xcb\u40CB\u0100ip\u056A\u056Fsts;\u6203onentialE;\u6147\u0280cfios\u0585\u0588\u058D\u05B2\u05CCy;\u4424r;\uC000\ud835\udd09lled\u0253\u0597\0\0\u05A3mallSquare;\u65FCerySmallSquare;\u65AA\u0370\u05BA\0\u05BF\0\0\u05C4f;\uC000\ud835\udd3dAll;\u6200riertrf;\u6131c\xf2\u05CB\u0600JTabcdfgorst\u05E8\u05EC\u05EF\u05FA\u0600\u0612\u0616\u061B\u061D\u0623\u066C\u0672cy;\u4403\u803B>\u403Emma\u0100;d\u05F7\u05F8\u4393;\u43DCreve;\u411E\u0180eiy\u0607\u060C\u0610dil;\u4122rc;\u411C;\u4413ot;\u4120r;\uC000\ud835\udd0a;\u62D9pf;\uC000\ud835\udd3eeater\u0300EFGLST\u0635\u0644\u064E\u0656\u065B\u0666qual\u0100;L\u063E\u063F\u6265ess;\u62DBullEqual;\u6267reater;\u6AA2ess;\u6277lantEqual;\u6A7Eilde;\u6273cr;\uC000\ud835\udca2;\u626B\u0400Aacfiosu\u0685\u068B\u0696\u069B\u069E\u06AA\u06BE\u06CARDcy;\u442A\u0100ct\u0690\u0694ek;\u42C7;\u405Eirc;\u4124r;\u610ClbertSpace;\u610B\u01F0\u06AF\0\u06B2f;\u610DizontalLine;\u6500\u0100ct\u06C3\u06C5\xf2\u06A9rok;\u4126mp\u0144\u06D0\u06D8ownHum\xf0\u012Fqual;\u624F\u0700EJOacdfgmnostu\u06FA\u06FE\u0703\u0707\u070E\u071A\u071E\u0721\u0728\u0744\u0778\u078B\u078F\u0795cy;\u4415lig;\u4132cy;\u4401cute\u803B\xcd\u40CD\u0100iy\u0713\u0718rc\u803B\xce\u40CE;\u4418ot;\u4130r;\u6111rave\u803B\xcc\u40CC\u0180;ap\u0720\u072F\u073F\u0100cg\u0734\u0737r;\u412AinaryI;\u6148lie\xf3\u03DD\u01F4\u0749\0\u0762\u0100;e\u074D\u074E\u622C\u0100gr\u0753\u0758ral;\u622Bsection;\u62C2isible\u0100CT\u076C\u0772omma;\u6063imes;\u6062\u0180gpt\u077F\u0783\u0788on;\u412Ef;\uC000\ud835\udd40a;\u4399cr;\u6110ilde;\u4128\u01EB\u079A\0\u079Ecy;\u4406l\u803B\xcf\u40CF\u0280cfosu\u07AC\u07B7\u07BC\u07C2\u07D0\u0100iy\u07B1\u07B5rc;\u4134;\u4419r;\uC000\ud835\udd0dpf;\uC000\ud835\udd41\u01E3\u07C7\0\u07CCr;\uC000\ud835\udca5rcy;\u4408kcy;\u4404\u0380HJacfos\u07E4\u07E8\u07EC\u07F1\u07FD\u0802\u0808cy;\u4425cy;\u440Cppa;\u439A\u0100ey\u07F6\u07FBdil;\u4136;\u441Ar;\uC000\ud835\udd0epf;\uC000\ud835\udd42cr;\uC000\ud835\udca6\u0580JTaceflmost\u0825\u0829\u082C\u0850\u0863\u09B3\u09B8\u09C7\u09CD\u0A37\u0A47cy;\u4409\u803B<\u403C\u0280cmnpr\u0837\u083C\u0841\u0844\u084Dute;\u4139bda;\u439Bg;\u67EAlacetrf;\u6112r;\u619E\u0180aey\u0857\u085C\u0861ron;\u413Ddil;\u413B;\u441B\u0100fs\u0868\u0970t\u0500ACDFRTUVar\u087E\u08A9\u08B1\u08E0\u08E6\u08FC\u092F\u095B\u0390\u096A\u0100nr\u0883\u088FgleBracket;\u67E8row\u0180;BR\u0899\u089A\u089E\u6190ar;\u61E4ightArrow;\u61C6eiling;\u6308o\u01F5\u08B7\0\u08C3bleBracket;\u67E6n\u01D4\u08C8\0\u08D2eeVector;\u6961ector\u0100;B\u08DB\u08DC\u61C3ar;\u6959loor;\u630Aight\u0100AV\u08EF\u08F5rrow;\u6194ector;\u694E\u0100er\u0901\u0917e\u0180;AV\u0909\u090A\u0910\u62A3rrow;\u61A4ector;\u695Aiangle\u0180;BE\u0924\u0925\u0929\u62B2ar;\u69CFqual;\u62B4p\u0180DTV\u0937\u0942\u094CownVector;\u6951eeVector;\u6960ector\u0100;B\u0956\u0957\u61BFar;\u6958ector\u0100;B\u0965\u0966\u61BCar;\u6952ight\xe1\u039Cs\u0300EFGLST\u097E\u098B\u0995\u099D\u09A2\u09ADqualGreater;\u62DAullEqual;\u6266reater;\u6276ess;\u6AA1lantEqual;\u6A7Dilde;\u6272r;\uC000\ud835\udd0f\u0100;e\u09BD\u09BE\u62D8ftarrow;\u61DAidot;\u413F\u0180npw\u09D4\u0A16\u0A1Bg\u0200LRlr\u09DE\u09F7\u0A02\u0A10eft\u0100AR\u09E6\u09ECrrow;\u67F5ightArrow;\u67F7ightArrow;\u67F6eft\u0100ar\u03B3\u0A0Aight\xe1\u03BFight\xe1\u03CAf;\uC000\ud835\udd43er\u0100LR\u0A22\u0A2CeftArrow;\u6199ightArrow;\u6198\u0180cht\u0A3E\u0A40\u0A42\xf2\u084C;\u61B0rok;\u4141;\u626A\u0400acefiosu\u0A5A\u0A5D\u0A60\u0A77\u0A7C\u0A85\u0A8B\u0A8Ep;\u6905y;\u441C\u0100dl\u0A65\u0A6FiumSpace;\u605Flintrf;\u6133r;\uC000\ud835\udd10nusPlus;\u6213pf;\uC000\ud835\udd44c\xf2\u0A76;\u439C\u0480Jacefostu\u0AA3\u0AA7\u0AAD\u0AC0\u0B14\u0B19\u0D91\u0D97\u0D9Ecy;\u440Acute;\u4143\u0180aey\u0AB4\u0AB9\u0ABEron;\u4147dil;\u4145;\u441D\u0180gsw\u0AC7\u0AF0\u0B0Eative\u0180MTV\u0AD3\u0ADF\u0AE8ediumSpace;\u600Bhi\u0100cn\u0AE6\u0AD8\xeb\u0AD9eryThi\xee\u0AD9ted\u0100GL\u0AF8\u0B06reaterGreate\xf2\u0673essLes\xf3\u0A48Line;\u400Ar;\uC000\ud835\udd11\u0200Bnpt\u0B22\u0B28\u0B37\u0B3Areak;\u6060BreakingSpace;\u40A0f;\u6115\u0680;CDEGHLNPRSTV\u0B55\u0B56\u0B6A\u0B7C\u0BA1\u0BEB\u0C04\u0C5E\u0C84\u0CA6\u0CD8\u0D61\u0D85\u6AEC\u0100ou\u0B5B\u0B64ngruent;\u6262pCap;\u626DoubleVerticalBar;\u6226\u0180lqx\u0B83\u0B8A\u0B9Bement;\u6209ual\u0100;T\u0B92\u0B93\u6260ilde;\uC000\u2242\u0338ists;\u6204reater\u0380;EFGLST\u0BB6\u0BB7\u0BBD\u0BC9\u0BD3\u0BD8\u0BE5\u626Fqual;\u6271ullEqual;\uC000\u2267\u0338reater;\uC000\u226B\u0338ess;\u6279lantEqual;\uC000\u2A7E\u0338ilde;\u6275ump\u0144\u0BF2\u0BFDownHump;\uC000\u224E\u0338qual;\uC000\u224F\u0338e\u0100fs\u0C0A\u0C27tTriangle\u0180;BE\u0C1A\u0C1B\u0C21\u62EAar;\uC000\u29CF\u0338qual;\u62ECs\u0300;EGLST\u0C35\u0C36\u0C3C\u0C44\u0C4B\u0C58\u626Equal;\u6270reater;\u6278ess;\uC000\u226A\u0338lantEqual;\uC000\u2A7D\u0338ilde;\u6274ested\u0100GL\u0C68\u0C79reaterGreater;\uC000\u2AA2\u0338essLess;\uC000\u2AA1\u0338recedes\u0180;ES\u0C92\u0C93\u0C9B\u6280qual;\uC000\u2AAF\u0338lantEqual;\u62E0\u0100ei\u0CAB\u0CB9verseElement;\u620CghtTriangle\u0180;BE\u0CCB\u0CCC\u0CD2\u62EBar;\uC000\u29D0\u0338qual;\u62ED\u0100qu\u0CDD\u0D0CuareSu\u0100bp\u0CE8\u0CF9set\u0100;E\u0CF0\u0CF3\uC000\u228F\u0338qual;\u62E2erset\u0100;E\u0D03\u0D06\uC000\u2290\u0338qual;\u62E3\u0180bcp\u0D13\u0D24\u0D4Eset\u0100;E\u0D1B\u0D1E\uC000\u2282\u20D2qual;\u6288ceeds\u0200;EST\u0D32\u0D33\u0D3B\u0D46\u6281qual;\uC000\u2AB0\u0338lantEqual;\u62E1ilde;\uC000\u227F\u0338erset\u0100;E\u0D58\u0D5B\uC000\u2283\u20D2qual;\u6289ilde\u0200;EFT\u0D6E\u0D6F\u0D75\u0D7F\u6241qual;\u6244ullEqual;\u6247ilde;\u6249erticalBar;\u6224cr;\uC000\ud835\udca9ilde\u803B\xd1\u40D1;\u439D\u0700Eacdfgmoprstuv\u0DBD\u0DC2\u0DC9\u0DD5\u0DDB\u0DE0\u0DE7\u0DFC\u0E02\u0E20\u0E22\u0E32\u0E3F\u0E44lig;\u4152cute\u803B\xd3\u40D3\u0100iy\u0DCE\u0DD3rc\u803B\xd4\u40D4;\u441Eblac;\u4150r;\uC000\ud835\udd12rave\u803B\xd2\u40D2\u0180aei\u0DEE\u0DF2\u0DF6cr;\u414Cga;\u43A9cron;\u439Fpf;\uC000\ud835\udd46enCurly\u0100DQ\u0E0E\u0E1AoubleQuote;\u601Cuote;\u6018;\u6A54\u0100cl\u0E27\u0E2Cr;\uC000\ud835\udcaaash\u803B\xd8\u40D8i\u016C\u0E37\u0E3Cde\u803B\xd5\u40D5es;\u6A37ml\u803B\xd6\u40D6er\u0100BP\u0E4B\u0E60\u0100ar\u0E50\u0E53r;\u603Eac\u0100ek\u0E5A\u0E5C;\u63DEet;\u63B4arenthesis;\u63DC\u0480acfhilors\u0E7F\u0E87\u0E8A\u0E8F\u0E92\u0E94\u0E9D\u0EB0\u0EFCrtialD;\u6202y;\u441Fr;\uC000\ud835\udd13i;\u43A6;\u43A0usMinus;\u40B1\u0100ip\u0EA2\u0EADncareplan\xe5\u069Df;\u6119\u0200;eio\u0EB9\u0EBA\u0EE0\u0EE4\u6ABBcedes\u0200;EST\u0EC8\u0EC9\u0ECF\u0EDA\u627Aqual;\u6AAFlantEqual;\u627Cilde;\u627Eme;\u6033\u0100dp\u0EE9\u0EEEuct;\u620Fortion\u0100;a\u0225\u0EF9l;\u621D\u0100ci\u0F01\u0F06r;\uC000\ud835\udcab;\u43A8\u0200Ufos\u0F11\u0F16\u0F1B\u0F1FOT\u803B"\u4022r;\uC000\ud835\udd14pf;\u611Acr;\uC000\ud835\udcac\u0600BEacefhiorsu\u0F3E\u0F43\u0F47\u0F60\u0F73\u0FA7\u0FAA\u0FAD\u1096\u10A9\u10B4\u10BEarr;\u6910G\u803B\xae\u40AE\u0180cnr\u0F4E\u0F53\u0F56ute;\u4154g;\u67EBr\u0100;t\u0F5C\u0F5D\u61A0l;\u6916\u0180aey\u0F67\u0F6C\u0F71ron;\u4158dil;\u4156;\u4420\u0100;v\u0F78\u0F79\u611Cerse\u0100EU\u0F82\u0F99\u0100lq\u0F87\u0F8Eement;\u620Builibrium;\u61CBpEquilibrium;\u696Fr\xbb\u0F79o;\u43A1ght\u0400ACDFTUVa\u0FC1\u0FEB\u0FF3\u1022\u1028\u105B\u1087\u03D8\u0100nr\u0FC6\u0FD2gleBracket;\u67E9row\u0180;BL\u0FDC\u0FDD\u0FE1\u6192ar;\u61E5eftArrow;\u61C4eiling;\u6309o\u01F5\u0FF9\0\u1005bleBracket;\u67E7n\u01D4\u100A\0\u1014eeVector;\u695Dector\u0100;B\u101D\u101E\u61C2ar;\u6955loor;\u630B\u0100er\u102D\u1043e\u0180;AV\u1035\u1036\u103C\u62A2rrow;\u61A6ector;\u695Biangle\u0180;BE\u1050\u1051\u1055\u62B3ar;\u69D0qual;\u62B5p\u0180DTV\u1063\u106E\u1078ownVector;\u694FeeVector;\u695Cector\u0100;B\u1082\u1083\u61BEar;\u6954ector\u0100;B\u1091\u1092\u61C0ar;\u6953\u0100pu\u109B\u109Ef;\u611DndImplies;\u6970ightarrow;\u61DB\u0100ch\u10B9\u10BCr;\u611B;\u61B1leDelayed;\u69F4\u0680HOacfhimoqstu\u10E4\u10F1\u10F7\u10FD\u1119\u111E\u1151\u1156\u1161\u1167\u11B5\u11BB\u11BF\u0100Cc\u10E9\u10EEHcy;\u4429y;\u4428FTcy;\u442Ccute;\u415A\u0280;aeiy\u1108\u1109\u110E\u1113\u1117\u6ABCron;\u4160dil;\u415Erc;\u415C;\u4421r;\uC000\ud835\udd16ort\u0200DLRU\u112A\u1134\u113E\u1149ownArrow\xbb\u041EeftArrow\xbb\u089AightArrow\xbb\u0FDDpArrow;\u6191gma;\u43A3allCircle;\u6218pf;\uC000\ud835\udd4a\u0272\u116D\0\0\u1170t;\u621Aare\u0200;ISU\u117B\u117C\u1189\u11AF\u65A1ntersection;\u6293u\u0100bp\u118F\u119Eset\u0100;E\u1197\u1198\u628Fqual;\u6291erset\u0100;E\u11A8\u11A9\u6290qual;\u6292nion;\u6294cr;\uC000\ud835\udcaear;\u62C6\u0200bcmp\u11C8\u11DB\u1209\u120B\u0100;s\u11CD\u11CE\u62D0et\u0100;E\u11CD\u11D5qual;\u6286\u0100ch\u11E0\u1205eeds\u0200;EST\u11ED\u11EE\u11F4\u11FF\u627Bqual;\u6AB0lantEqual;\u627Dilde;\u627FTh\xe1\u0F8C;\u6211\u0180;es\u1212\u1213\u1223\u62D1rset\u0100;E\u121C\u121D\u6283qual;\u6287et\xbb\u1213\u0580HRSacfhiors\u123E\u1244\u1249\u1255\u125E\u1271\u1276\u129F\u12C2\u12C8\u12D1ORN\u803B\xde\u40DEADE;\u6122\u0100Hc\u124E\u1252cy;\u440By;\u4426\u0100bu\u125A\u125C;\u4009;\u43A4\u0180aey\u1265\u126A\u126Fron;\u4164dil;\u4162;\u4422r;\uC000\ud835\udd17\u0100ei\u127B\u1289\u01F2\u1280\0\u1287efore;\u6234a;\u4398\u0100cn\u128E\u1298kSpace;\uC000\u205F\u200ASpace;\u6009lde\u0200;EFT\u12AB\u12AC\u12B2\u12BC\u623Cqual;\u6243ullEqual;\u6245ilde;\u6248pf;\uC000\ud835\udd4bipleDot;\u60DB\u0100ct\u12D6\u12DBr;\uC000\ud835\udcafrok;\u4166\u0AE1\u12F7\u130E\u131A\u1326\0\u132C\u1331\0\0\0\0\0\u1338\u133D\u1377\u1385\0\u13FF\u1404\u140A\u1410\u0100cr\u12FB\u1301ute\u803B\xda\u40DAr\u0100;o\u1307\u1308\u619Fcir;\u6949r\u01E3\u1313\0\u1316y;\u440Eve;\u416C\u0100iy\u131E\u1323rc\u803B\xdb\u40DB;\u4423blac;\u4170r;\uC000\ud835\udd18rave\u803B\xd9\u40D9acr;\u416A\u0100di\u1341\u1369er\u0100BP\u1348\u135D\u0100ar\u134D\u1350r;\u405Fac\u0100ek\u1357\u1359;\u63DFet;\u63B5arenthesis;\u63DDon\u0100;P\u1370\u1371\u62C3lus;\u628E\u0100gp\u137B\u137Fon;\u4172f;\uC000\ud835\udd4c\u0400ADETadps\u1395\u13AE\u13B8\u13C4\u03E8\u13D2\u13D7\u13F3rrow\u0180;BD\u1150\u13A0\u13A4ar;\u6912ownArrow;\u61C5ownArrow;\u6195quilibrium;\u696Eee\u0100;A\u13CB\u13CC\u62A5rrow;\u61A5own\xe1\u03F3er\u0100LR\u13DE\u13E8eftArrow;\u6196ightArrow;\u6197i\u0100;l\u13F9\u13FA\u43D2on;\u43A5ing;\u416Ecr;\uC000\ud835\udcb0ilde;\u4168ml\u803B\xdc\u40DC\u0480Dbcdefosv\u1427\u142C\u1430\u1433\u143E\u1485\u148A\u1490\u1496ash;\u62ABar;\u6AEBy;\u4412ash\u0100;l\u143B\u143C\u62A9;\u6AE6\u0100er\u1443\u1445;\u62C1\u0180bty\u144C\u1450\u147Aar;\u6016\u0100;i\u144F\u1455cal\u0200BLST\u1461\u1465\u146A\u1474ar;\u6223ine;\u407Ceparator;\u6758ilde;\u6240ThinSpace;\u600Ar;\uC000\ud835\udd19pf;\uC000\ud835\udd4dcr;\uC000\ud835\udcb1dash;\u62AA\u0280cefos\u14A7\u14AC\u14B1\u14B6\u14BCirc;\u4174dge;\u62C0r;\uC000\ud835\udd1apf;\uC000\ud835\udd4ecr;\uC000\ud835\udcb2\u0200fios\u14CB\u14D0\u14D2\u14D8r;\uC000\ud835\udd1b;\u439Epf;\uC000\ud835\udd4fcr;\uC000\ud835\udcb3\u0480AIUacfosu\u14F1\u14F5\u14F9\u14FD\u1504\u150F\u1514\u151A\u1520cy;\u442Fcy;\u4407cy;\u442Ecute\u803B\xdd\u40DD\u0100iy\u1509\u150Drc;\u4176;\u442Br;\uC000\ud835\udd1cpf;\uC000\ud835\udd50cr;\uC000\ud835\udcb4ml;\u4178\u0400Hacdefos\u1535\u1539\u153F\u154B\u154F\u155D\u1560\u1564cy;\u4416cute;\u4179\u0100ay\u1544\u1549ron;\u417D;\u4417ot;\u417B\u01F2\u1554\0\u155BoWidt\xe8\u0AD9a;\u4396r;\u6128pf;\u6124cr;\uC000\ud835\udcb5\u0BE1\u1583\u158A\u1590\0\u15B0\u15B6\u15BF\0\0\0\0\u15C6\u15DB\u15EB\u165F\u166D\0\u1695\u169B\u16B2\u16B9\0\u16BEcute\u803B\xe1\u40E1reve;\u4103\u0300;Ediuy\u159C\u159D\u15A1\u15A3\u15A8\u15AD\u623E;\uC000\u223E\u0333;\u623Frc\u803B\xe2\u40E2te\u80BB\xb4\u0306;\u4430lig\u803B\xe6\u40E6\u0100;r\xb2\u15BA;\uC000\ud835\udd1erave\u803B\xe0\u40E0\u0100ep\u15CA\u15D6\u0100fp\u15CF\u15D4sym;\u6135\xe8\u15D3ha;\u43B1\u0100ap\u15DFc\u0100cl\u15E4\u15E7r;\u4101g;\u6A3F\u0264\u15F0\0\0\u160A\u0280;adsv\u15FA\u15FB\u15FF\u1601\u1607\u6227nd;\u6A55;\u6A5Clope;\u6A58;\u6A5A\u0380;elmrsz\u1618\u1619\u161B\u161E\u163F\u164F\u1659\u6220;\u69A4e\xbb\u1619sd\u0100;a\u1625\u1626\u6221\u0461\u1630\u1632\u1634\u1636\u1638\u163A\u163C\u163E;\u69A8;\u69A9;\u69AA;\u69AB;\u69AC;\u69AD;\u69AE;\u69AFt\u0100;v\u1645\u1646\u621Fb\u0100;d\u164C\u164D\u62BE;\u699D\u0100pt\u1654\u1657h;\u6222\xbb\xb9arr;\u637C\u0100gp\u1663\u1667on;\u4105f;\uC000\ud835\udd52\u0380;Eaeiop\u12C1\u167B\u167D\u1682\u1684\u1687\u168A;\u6A70cir;\u6A6F;\u624Ad;\u624Bs;\u4027rox\u0100;e\u12C1\u1692\xf1\u1683ing\u803B\xe5\u40E5\u0180cty\u16A1\u16A6\u16A8r;\uC000\ud835\udcb6;\u402Amp\u0100;e\u12C1\u16AF\xf1\u0288ilde\u803B\xe3\u40E3ml\u803B\xe4\u40E4\u0100ci\u16C2\u16C8onin\xf4\u0272nt;\u6A11\u0800Nabcdefiklnoprsu\u16ED\u16F1\u1730\u173C\u1743\u1748\u1778\u177D\u17E0\u17E6\u1839\u1850\u170D\u193D\u1948\u1970ot;\u6AED\u0100cr\u16F6\u171Ek\u0200ceps\u1700\u1705\u170D\u1713ong;\u624Cpsilon;\u43F6rime;\u6035im\u0100;e\u171A\u171B\u623Dq;\u62CD\u0176\u1722\u1726ee;\u62BDed\u0100;g\u172C\u172D\u6305e\xbb\u172Drk\u0100;t\u135C\u1737brk;\u63B6\u0100oy\u1701\u1741;\u4431quo;\u601E\u0280cmprt\u1753\u175B\u1761\u1764\u1768aus\u0100;e\u010A\u0109ptyv;\u69B0s\xe9\u170Cno\xf5\u0113\u0180ahw\u176F\u1771\u1773;\u43B2;\u6136een;\u626Cr;\uC000\ud835\udd1fg\u0380costuvw\u178D\u179D\u17B3\u17C1\u17D5\u17DB\u17DE\u0180aiu\u1794\u1796\u179A\xf0\u0760rc;\u65EFp\xbb\u1371\u0180dpt\u17A4\u17A8\u17ADot;\u6A00lus;\u6A01imes;\u6A02\u0271\u17B9\0\0\u17BEcup;\u6A06ar;\u6605riangle\u0100du\u17CD\u17D2own;\u65BDp;\u65B3plus;\u6A04e\xe5\u1444\xe5\u14ADarow;\u690D\u0180ako\u17ED\u1826\u1835\u0100cn\u17F2\u1823k\u0180lst\u17FA\u05AB\u1802ozenge;\u69EBriangle\u0200;dlr\u1812\u1813\u1818\u181D\u65B4own;\u65BEeft;\u65C2ight;\u65B8k;\u6423\u01B1\u182B\0\u1833\u01B2\u182F\0\u1831;\u6592;\u65914;\u6593ck;\u6588\u0100eo\u183E\u184D\u0100;q\u1843\u1846\uC000=\u20E5uiv;\uC000\u2261\u20E5t;\u6310\u0200ptwx\u1859\u185E\u1867\u186Cf;\uC000\ud835\udd53\u0100;t\u13CB\u1863om\xbb\u13CCtie;\u62C8\u0600DHUVbdhmptuv\u1885\u1896\u18AA\u18BB\u18D7\u18DB\u18EC\u18FF\u1905\u190A\u1910\u1921\u0200LRlr\u188E\u1890\u1892\u1894;\u6557;\u6554;\u6556;\u6553\u0280;DUdu\u18A1\u18A2\u18A4\u18A6\u18A8\u6550;\u6566;\u6569;\u6564;\u6567\u0200LRlr\u18B3\u18B5\u18B7\u18B9;\u655D;\u655A;\u655C;\u6559\u0380;HLRhlr\u18CA\u18CB\u18CD\u18CF\u18D1\u18D3\u18D5\u6551;\u656C;\u6563;\u6560;\u656B;\u6562;\u655Fox;\u69C9\u0200LRlr\u18E4\u18E6\u18E8\u18EA;\u6555;\u6552;\u6510;\u650C\u0280;DUdu\u06BD\u18F7\u18F9\u18FB\u18FD;\u6565;\u6568;\u652C;\u6534inus;\u629Flus;\u629Eimes;\u62A0\u0200LRlr\u1919\u191B\u191D\u191F;\u655B;\u6558;\u6518;\u6514\u0380;HLRhlr\u1930\u1931\u1933\u1935\u1937\u1939\u193B\u6502;\u656A;\u6561;\u655E;\u653C;\u6524;\u651C\u0100ev\u0123\u1942bar\u803B\xa6\u40A6\u0200ceio\u1951\u1956\u195A\u1960r;\uC000\ud835\udcb7mi;\u604Fm\u0100;e\u171A\u171Cl\u0180;bh\u1968\u1969\u196B\u405C;\u69C5sub;\u67C8\u016C\u1974\u197El\u0100;e\u1979\u197A\u6022t\xbb\u197Ap\u0180;Ee\u012F\u1985\u1987;\u6AAE\u0100;q\u06DC\u06DB\u0CE1\u19A7\0\u19E8\u1A11\u1A15\u1A32\0\u1A37\u1A50\0\0\u1AB4\0\0\u1AC1\0\0\u1B21\u1B2E\u1B4D\u1B52\0\u1BFD\0\u1C0C\u0180cpr\u19AD\u19B2\u19DDute;\u4107\u0300;abcds\u19BF\u19C0\u19C4\u19CA\u19D5\u19D9\u6229nd;\u6A44rcup;\u6A49\u0100au\u19CF\u19D2p;\u6A4Bp;\u6A47ot;\u6A40;\uC000\u2229\uFE00\u0100eo\u19E2\u19E5t;\u6041\xee\u0693\u0200aeiu\u19F0\u19FB\u1A01\u1A05\u01F0\u19F5\0\u19F8s;\u6A4Don;\u410Ddil\u803B\xe7\u40E7rc;\u4109ps\u0100;s\u1A0C\u1A0D\u6A4Cm;\u6A50ot;\u410B\u0180dmn\u1A1B\u1A20\u1A26il\u80BB\xb8\u01ADptyv;\u69B2t\u8100\xa2;e\u1A2D\u1A2E\u40A2r\xe4\u01B2r;\uC000\ud835\udd20\u0180cei\u1A3D\u1A40\u1A4Dy;\u4447ck\u0100;m\u1A47\u1A48\u6713ark\xbb\u1A48;\u43C7r\u0380;Ecefms\u1A5F\u1A60\u1A62\u1A6B\u1AA4\u1AAA\u1AAE\u65CB;\u69C3\u0180;el\u1A69\u1A6A\u1A6D\u42C6q;\u6257e\u0261\u1A74\0\0\u1A88rrow\u0100lr\u1A7C\u1A81eft;\u61BAight;\u61BB\u0280RSacd\u1A92\u1A94\u1A96\u1A9A\u1A9F\xbb\u0F47;\u64C8st;\u629Birc;\u629Aash;\u629Dnint;\u6A10id;\u6AEFcir;\u69C2ubs\u0100;u\u1ABB\u1ABC\u6663it\xbb\u1ABC\u02EC\u1AC7\u1AD4\u1AFA\0\u1B0Aon\u0100;e\u1ACD\u1ACE\u403A\u0100;q\xc7\xc6\u026D\u1AD9\0\0\u1AE2a\u0100;t\u1ADE\u1ADF\u402C;\u4040\u0180;fl\u1AE8\u1AE9\u1AEB\u6201\xee\u1160e\u0100mx\u1AF1\u1AF6ent\xbb\u1AE9e\xf3\u024D\u01E7\u1AFE\0\u1B07\u0100;d\u12BB\u1B02ot;\u6A6Dn\xf4\u0246\u0180fry\u1B10\u1B14\u1B17;\uC000\ud835\udd54o\xe4\u0254\u8100\xa9;s\u0155\u1B1Dr;\u6117\u0100ao\u1B25\u1B29rr;\u61B5ss;\u6717\u0100cu\u1B32\u1B37r;\uC000\ud835\udcb8\u0100bp\u1B3C\u1B44\u0100;e\u1B41\u1B42\u6ACF;\u6AD1\u0100;e\u1B49\u1B4A\u6AD0;\u6AD2dot;\u62EF\u0380delprvw\u1B60\u1B6C\u1B77\u1B82\u1BAC\u1BD4\u1BF9arr\u0100lr\u1B68\u1B6A;\u6938;\u6935\u0270\u1B72\0\0\u1B75r;\u62DEc;\u62DFarr\u0100;p\u1B7F\u1B80\u61B6;\u693D\u0300;bcdos\u1B8F\u1B90\u1B96\u1BA1\u1BA5\u1BA8\u622Arcap;\u6A48\u0100au\u1B9B\u1B9Ep;\u6A46p;\u6A4Aot;\u628Dr;\u6A45;\uC000\u222A\uFE00\u0200alrv\u1BB5\u1BBF\u1BDE\u1BE3rr\u0100;m\u1BBC\u1BBD\u61B7;\u693Cy\u0180evw\u1BC7\u1BD4\u1BD8q\u0270\u1BCE\0\0\u1BD2re\xe3\u1B73u\xe3\u1B75ee;\u62CEedge;\u62CFen\u803B\xa4\u40A4earrow\u0100lr\u1BEE\u1BF3eft\xbb\u1B80ight\xbb\u1BBDe\xe4\u1BDD\u0100ci\u1C01\u1C07onin\xf4\u01F7nt;\u6231lcty;\u632D\u0980AHabcdefhijlorstuwz\u1C38\u1C3B\u1C3F\u1C5D\u1C69\u1C75\u1C8A\u1C9E\u1CAC\u1CB7\u1CFB\u1CFF\u1D0D\u1D7B\u1D91\u1DAB\u1DBB\u1DC6\u1DCDr\xf2\u0381ar;\u6965\u0200glrs\u1C48\u1C4D\u1C52\u1C54ger;\u6020eth;\u6138\xf2\u1133h\u0100;v\u1C5A\u1C5B\u6010\xbb\u090A\u016B\u1C61\u1C67arow;\u690Fa\xe3\u0315\u0100ay\u1C6E\u1C73ron;\u410F;\u4434\u0180;ao\u0332\u1C7C\u1C84\u0100gr\u02BF\u1C81r;\u61CAtseq;\u6A77\u0180glm\u1C91\u1C94\u1C98\u803B\xb0\u40B0ta;\u43B4ptyv;\u69B1\u0100ir\u1CA3\u1CA8sht;\u697F;\uC000\ud835\udd21ar\u0100lr\u1CB3\u1CB5\xbb\u08DC\xbb\u101E\u0280aegsv\u1CC2\u0378\u1CD6\u1CDC\u1CE0m\u0180;os\u0326\u1CCA\u1CD4nd\u0100;s\u0326\u1CD1uit;\u6666amma;\u43DDin;\u62F2\u0180;io\u1CE7\u1CE8\u1CF8\u40F7de\u8100\xf7;o\u1CE7\u1CF0ntimes;\u62C7n\xf8\u1CF7cy;\u4452c\u026F\u1D06\0\0\u1D0Arn;\u631Eop;\u630D\u0280lptuw\u1D18\u1D1D\u1D22\u1D49\u1D55lar;\u4024f;\uC000\ud835\udd55\u0280;emps\u030B\u1D2D\u1D37\u1D3D\u1D42q\u0100;d\u0352\u1D33ot;\u6251inus;\u6238lus;\u6214quare;\u62A1blebarwedg\xe5\xfan\u0180adh\u112E\u1D5D\u1D67ownarrow\xf3\u1C83arpoon\u0100lr\u1D72\u1D76ef\xf4\u1CB4igh\xf4\u1CB6\u0162\u1D7F\u1D85karo\xf7\u0F42\u026F\u1D8A\0\0\u1D8Ern;\u631Fop;\u630C\u0180cot\u1D98\u1DA3\u1DA6\u0100ry\u1D9D\u1DA1;\uC000\ud835\udcb9;\u4455l;\u69F6rok;\u4111\u0100dr\u1DB0\u1DB4ot;\u62F1i\u0100;f\u1DBA\u1816\u65BF\u0100ah\u1DC0\u1DC3r\xf2\u0429a\xf2\u0FA6angle;\u69A6\u0100ci\u1DD2\u1DD5y;\u445Fgrarr;\u67FF\u0900Dacdefglmnopqrstux\u1E01\u1E09\u1E19\u1E38\u0578\u1E3C\u1E49\u1E61\u1E7E\u1EA5\u1EAF\u1EBD\u1EE1\u1F2A\u1F37\u1F44\u1F4E\u1F5A\u0100Do\u1E06\u1D34o\xf4\u1C89\u0100cs\u1E0E\u1E14ute\u803B\xe9\u40E9ter;\u6A6E\u0200aioy\u1E22\u1E27\u1E31\u1E36ron;\u411Br\u0100;c\u1E2D\u1E2E\u6256\u803B\xea\u40EAlon;\u6255;\u444Dot;\u4117\u0100Dr\u1E41\u1E45ot;\u6252;\uC000\ud835\udd22\u0180;rs\u1E50\u1E51\u1E57\u6A9Aave\u803B\xe8\u40E8\u0100;d\u1E5C\u1E5D\u6A96ot;\u6A98\u0200;ils\u1E6A\u1E6B\u1E72\u1E74\u6A99nters;\u63E7;\u6113\u0100;d\u1E79\u1E7A\u6A95ot;\u6A97\u0180aps\u1E85\u1E89\u1E97cr;\u4113ty\u0180;sv\u1E92\u1E93\u1E95\u6205et\xbb\u1E93p\u01001;\u1E9D\u1EA4\u0133\u1EA1\u1EA3;\u6004;\u6005\u6003\u0100gs\u1EAA\u1EAC;\u414Bp;\u6002\u0100gp\u1EB4\u1EB8on;\u4119f;\uC000\ud835\udd56\u0180als\u1EC4\u1ECE\u1ED2r\u0100;s\u1ECA\u1ECB\u62D5l;\u69E3us;\u6A71i\u0180;lv\u1EDA\u1EDB\u1EDF\u43B5on\xbb\u1EDB;\u43F5\u0200csuv\u1EEA\u1EF3\u1F0B\u1F23\u0100io\u1EEF\u1E31rc\xbb\u1E2E\u0269\u1EF9\0\0\u1EFB\xed\u0548ant\u0100gl\u1F02\u1F06tr\xbb\u1E5Dess\xbb\u1E7A\u0180aei\u1F12\u1F16\u1F1Als;\u403Dst;\u625Fv\u0100;D\u0235\u1F20D;\u6A78parsl;\u69E5\u0100Da\u1F2F\u1F33ot;\u6253rr;\u6971\u0180cdi\u1F3E\u1F41\u1EF8r;\u612Fo\xf4\u0352\u0100ah\u1F49\u1F4B;\u43B7\u803B\xf0\u40F0\u0100mr\u1F53\u1F57l\u803B\xeb\u40EBo;\u60AC\u0180cip\u1F61\u1F64\u1F67l;\u4021s\xf4\u056E\u0100eo\u1F6C\u1F74ctatio\xee\u0559nential\xe5\u0579\u09E1\u1F92\0\u1F9E\0\u1FA1\u1FA7\0\0\u1FC6\u1FCC\0\u1FD3\0\u1FE6\u1FEA\u2000\0\u2008\u205Allingdotse\xf1\u1E44y;\u4444male;\u6640\u0180ilr\u1FAD\u1FB3\u1FC1lig;\u8000\uFB03\u0269\u1FB9\0\0\u1FBDg;\u8000\uFB00ig;\u8000\uFB04;\uC000\ud835\udd23lig;\u8000\uFB01lig;\uC000fj\u0180alt\u1FD9\u1FDC\u1FE1t;\u666Dig;\u8000\uFB02ns;\u65B1of;\u4192\u01F0\u1FEE\0\u1FF3f;\uC000\ud835\udd57\u0100ak\u05BF\u1FF7\u0100;v\u1FFC\u1FFD\u62D4;\u6AD9artint;\u6A0D\u0100ao\u200C\u2055\u0100cs\u2011\u2052\u03B1\u201A\u2030\u2038\u2045\u2048\0\u2050\u03B2\u2022\u2025\u2027\u202A\u202C\0\u202E\u803B\xbd\u40BD;\u6153\u803B\xbc\u40BC;\u6155;\u6159;\u615B\u01B3\u2034\0\u2036;\u6154;\u6156\u02B4\u203E\u2041\0\0\u2043\u803B\xbe\u40BE;\u6157;\u615C5;\u6158\u01B6\u204C\0\u204E;\u615A;\u615D8;\u615El;\u6044wn;\u6322cr;\uC000\ud835\udcbb\u0880Eabcdefgijlnorstv\u2082\u2089\u209F\u20A5\u20B0\u20B4\u20F0\u20F5\u20FA\u20FF\u2103\u2112\u2138\u0317\u213E\u2152\u219E\u0100;l\u064D\u2087;\u6A8C\u0180cmp\u2090\u2095\u209Dute;\u41F5ma\u0100;d\u209C\u1CDA\u43B3;\u6A86reve;\u411F\u0100iy\u20AA\u20AErc;\u411D;\u4433ot;\u4121\u0200;lqs\u063E\u0642\u20BD\u20C9\u0180;qs\u063E\u064C\u20C4lan\xf4\u0665\u0200;cdl\u0665\u20D2\u20D5\u20E5c;\u6AA9ot\u0100;o\u20DC\u20DD\u6A80\u0100;l\u20E2\u20E3\u6A82;\u6A84\u0100;e\u20EA\u20ED\uC000\u22DB\uFE00s;\u6A94r;\uC000\ud835\udd24\u0100;g\u0673\u061Bmel;\u6137cy;\u4453\u0200;Eaj\u065A\u210C\u210E\u2110;\u6A92;\u6AA5;\u6AA4\u0200Eaes\u211B\u211D\u2129\u2134;\u6269p\u0100;p\u2123\u2124\u6A8Arox\xbb\u2124\u0100;q\u212E\u212F\u6A88\u0100;q\u212E\u211Bim;\u62E7pf;\uC000\ud835\udd58\u0100ci\u2143\u2146r;\u610Am\u0180;el\u066B\u214E\u2150;\u6A8E;\u6A90\u8300>;cdlqr\u05EE\u2160\u216A\u216E\u2173\u2179\u0100ci\u2165\u2167;\u6AA7r;\u6A7Aot;\u62D7Par;\u6995uest;\u6A7C\u0280adels\u2184\u216A\u2190\u0656\u219B\u01F0\u2189\0\u218Epro\xf8\u209Er;\u6978q\u0100lq\u063F\u2196les\xf3\u2088i\xed\u066B\u0100en\u21A3\u21ADrtneqq;\uC000\u2269\uFE00\xc5\u21AA\u0500Aabcefkosy\u21C4\u21C7\u21F1\u21F5\u21FA\u2218\u221D\u222F\u2268\u227Dr\xf2\u03A0\u0200ilmr\u21D0\u21D4\u21D7\u21DBrs\xf0\u1484f\xbb\u2024il\xf4\u06A9\u0100dr\u21E0\u21E4cy;\u444A\u0180;cw\u08F4\u21EB\u21EFir;\u6948;\u61ADar;\u610Firc;\u4125\u0180alr\u2201\u220E\u2213rts\u0100;u\u2209\u220A\u6665it\xbb\u220Alip;\u6026con;\u62B9r;\uC000\ud835\udd25s\u0100ew\u2223\u2229arow;\u6925arow;\u6926\u0280amopr\u223A\u223E\u2243\u225E\u2263rr;\u61FFtht;\u623Bk\u0100lr\u2249\u2253eftarrow;\u61A9ightarrow;\u61AAf;\uC000\ud835\udd59bar;\u6015\u0180clt\u226F\u2274\u2278r;\uC000\ud835\udcbdas\xe8\u21F4rok;\u4127\u0100bp\u2282\u2287ull;\u6043hen\xbb\u1C5B\u0AE1\u22A3\0\u22AA\0\u22B8\u22C5\u22CE\0\u22D5\u22F3\0\0\u22F8\u2322\u2367\u2362\u237F\0\u2386\u23AA\u23B4cute\u803B\xed\u40ED\u0180;iy\u0771\u22B0\u22B5rc\u803B\xee\u40EE;\u4438\u0100cx\u22BC\u22BFy;\u4435cl\u803B\xa1\u40A1\u0100fr\u039F\u22C9;\uC000\ud835\udd26rave\u803B\xec\u40EC\u0200;ino\u073E\u22DD\u22E9\u22EE\u0100in\u22E2\u22E6nt;\u6A0Ct;\u622Dfin;\u69DCta;\u6129lig;\u4133\u0180aop\u22FE\u231A\u231D\u0180cgt\u2305\u2308\u2317r;\u412B\u0180elp\u071F\u230F\u2313in\xe5\u078Ear\xf4\u0720h;\u4131f;\u62B7ed;\u41B5\u0280;cfot\u04F4\u232C\u2331\u233D\u2341are;\u6105in\u0100;t\u2338\u2339\u621Eie;\u69DDdo\xf4\u2319\u0280;celp\u0757\u234C\u2350\u235B\u2361al;\u62BA\u0100gr\u2355\u2359er\xf3\u1563\xe3\u234Darhk;\u6A17rod;\u6A3C\u0200cgpt\u236F\u2372\u2376\u237By;\u4451on;\u412Ff;\uC000\ud835\udd5aa;\u43B9uest\u803B\xbf\u40BF\u0100ci\u238A\u238Fr;\uC000\ud835\udcben\u0280;Edsv\u04F4\u239B\u239D\u23A1\u04F3;\u62F9ot;\u62F5\u0100;v\u23A6\u23A7\u62F4;\u62F3\u0100;i\u0777\u23AElde;\u4129\u01EB\u23B8\0\u23BCcy;\u4456l\u803B\xef\u40EF\u0300cfmosu\u23CC\u23D7\u23DC\u23E1\u23E7\u23F5\u0100iy\u23D1\u23D5rc;\u4135;\u4439r;\uC000\ud835\udd27ath;\u4237pf;\uC000\ud835\udd5b\u01E3\u23EC\0\u23F1r;\uC000\ud835\udcbfrcy;\u4458kcy;\u4454\u0400acfghjos\u240B\u2416\u2422\u2427\u242D\u2431\u2435\u243Bppa\u0100;v\u2413\u2414\u43BA;\u43F0\u0100ey\u241B\u2420dil;\u4137;\u443Ar;\uC000\ud835\udd28reen;\u4138cy;\u4445cy;\u445Cpf;\uC000\ud835\udd5ccr;\uC000\ud835\udcc0\u0B80ABEHabcdefghjlmnoprstuv\u2470\u2481\u2486\u248D\u2491\u250E\u253D\u255A\u2580\u264E\u265E\u2665\u2679\u267D\u269A\u26B2\u26D8\u275D\u2768\u278B\u27C0\u2801\u2812\u0180art\u2477\u247A\u247Cr\xf2\u09C6\xf2\u0395ail;\u691Barr;\u690E\u0100;g\u0994\u248B;\u6A8Bar;\u6962\u0963\u24A5\0\u24AA\0\u24B1\0\0\0\0\0\u24B5\u24BA\0\u24C6\u24C8\u24CD\0\u24F9ute;\u413Amptyv;\u69B4ra\xee\u084Cbda;\u43BBg\u0180;dl\u088E\u24C1\u24C3;\u6991\xe5\u088E;\u6A85uo\u803B\xab\u40ABr\u0400;bfhlpst\u0899\u24DE\u24E6\u24E9\u24EB\u24EE\u24F1\u24F5\u0100;f\u089D\u24E3s;\u691Fs;\u691D\xeb\u2252p;\u61ABl;\u6939im;\u6973l;\u61A2\u0180;ae\u24FF\u2500\u2504\u6AABil;\u6919\u0100;s\u2509\u250A\u6AAD;\uC000\u2AAD\uFE00\u0180abr\u2515\u2519\u251Drr;\u690Crk;\u6772\u0100ak\u2522\u252Cc\u0100ek\u2528\u252A;\u407B;\u405B\u0100es\u2531\u2533;\u698Bl\u0100du\u2539\u253B;\u698F;\u698D\u0200aeuy\u2546\u254B\u2556\u2558ron;\u413E\u0100di\u2550\u2554il;\u413C\xec\u08B0\xe2\u2529;\u443B\u0200cqrs\u2563\u2566\u256D\u257Da;\u6936uo\u0100;r\u0E19\u1746\u0100du\u2572\u2577har;\u6967shar;\u694Bh;\u61B2\u0280;fgqs\u258B\u258C\u0989\u25F3\u25FF\u6264t\u0280ahlrt\u2598\u25A4\u25B7\u25C2\u25E8rrow\u0100;t\u0899\u25A1a\xe9\u24F6arpoon\u0100du\u25AF\u25B4own\xbb\u045Ap\xbb\u0966eftarrows;\u61C7ight\u0180ahs\u25CD\u25D6\u25DErrow\u0100;s\u08F4\u08A7arpoon\xf3\u0F98quigarro\xf7\u21F0hreetimes;\u62CB\u0180;qs\u258B\u0993\u25FAlan\xf4\u09AC\u0280;cdgs\u09AC\u260A\u260D\u261D\u2628c;\u6AA8ot\u0100;o\u2614\u2615\u6A7F\u0100;r\u261A\u261B\u6A81;\u6A83\u0100;e\u2622\u2625\uC000\u22DA\uFE00s;\u6A93\u0280adegs\u2633\u2639\u263D\u2649\u264Bppro\xf8\u24C6ot;\u62D6q\u0100gq\u2643\u2645\xf4\u0989gt\xf2\u248C\xf4\u099Bi\xed\u09B2\u0180ilr\u2655\u08E1\u265Asht;\u697C;\uC000\ud835\udd29\u0100;E\u099C\u2663;\u6A91\u0161\u2669\u2676r\u0100du\u25B2\u266E\u0100;l\u0965\u2673;\u696Alk;\u6584cy;\u4459\u0280;acht\u0A48\u2688\u268B\u2691\u2696r\xf2\u25C1orne\xf2\u1D08ard;\u696Bri;\u65FA\u0100io\u269F\u26A4dot;\u4140ust\u0100;a\u26AC\u26AD\u63B0che\xbb\u26AD\u0200Eaes\u26BB\u26BD\u26C9\u26D4;\u6268p\u0100;p\u26C3\u26C4\u6A89rox\xbb\u26C4\u0100;q\u26CE\u26CF\u6A87\u0100;q\u26CE\u26BBim;\u62E6\u0400abnoptwz\u26E9\u26F4\u26F7\u271A\u272F\u2741\u2747\u2750\u0100nr\u26EE\u26F1g;\u67ECr;\u61FDr\xeb\u08C1g\u0180lmr\u26FF\u270D\u2714eft\u0100ar\u09E6\u2707ight\xe1\u09F2apsto;\u67FCight\xe1\u09FDparrow\u0100lr\u2725\u2729ef\xf4\u24EDight;\u61AC\u0180afl\u2736\u2739\u273Dr;\u6985;\uC000\ud835\udd5dus;\u6A2Dimes;\u6A34\u0161\u274B\u274Fst;\u6217\xe1\u134E\u0180;ef\u2757\u2758\u1800\u65CAnge\xbb\u2758ar\u0100;l\u2764\u2765\u4028t;\u6993\u0280achmt\u2773\u2776\u277C\u2785\u2787r\xf2\u08A8orne\xf2\u1D8Car\u0100;d\u0F98\u2783;\u696D;\u600Eri;\u62BF\u0300achiqt\u2798\u279D\u0A40\u27A2\u27AE\u27BBquo;\u6039r;\uC000\ud835\udcc1m\u0180;eg\u09B2\u27AA\u27AC;\u6A8D;\u6A8F\u0100bu\u252A\u27B3o\u0100;r\u0E1F\u27B9;\u601Arok;\u4142\u8400<;cdhilqr\u082B\u27D2\u2639\u27DC\u27E0\u27E5\u27EA\u27F0\u0100ci\u27D7\u27D9;\u6AA6r;\u6A79re\xe5\u25F2mes;\u62C9arr;\u6976uest;\u6A7B\u0100Pi\u27F5\u27F9ar;\u6996\u0180;ef\u2800\u092D\u181B\u65C3r\u0100du\u2807\u280Dshar;\u694Ahar;\u6966\u0100en\u2817\u2821rtneqq;\uC000\u2268\uFE00\xc5\u281E\u0700Dacdefhilnopsu\u2840\u2845\u2882\u288E\u2893\u28A0\u28A5\u28A8\u28DA\u28E2\u28E4\u0A83\u28F3\u2902Dot;\u623A\u0200clpr\u284E\u2852\u2863\u287Dr\u803B\xaf\u40AF\u0100et\u2857\u2859;\u6642\u0100;e\u285E\u285F\u6720se\xbb\u285F\u0100;s\u103B\u2868to\u0200;dlu\u103B\u2873\u2877\u287Bow\xee\u048Cef\xf4\u090F\xf0\u13D1ker;\u65AE\u0100oy\u2887\u288Cmma;\u6A29;\u443Cash;\u6014asuredangle\xbb\u1626r;\uC000\ud835\udd2ao;\u6127\u0180cdn\u28AF\u28B4\u28C9ro\u803B\xb5\u40B5\u0200;acd\u1464\u28BD\u28C0\u28C4s\xf4\u16A7ir;\u6AF0ot\u80BB\xb7\u01B5us\u0180;bd\u28D2\u1903\u28D3\u6212\u0100;u\u1D3C\u28D8;\u6A2A\u0163\u28DE\u28E1p;\u6ADB\xf2\u2212\xf0\u0A81\u0100dp\u28E9\u28EEels;\u62A7f;\uC000\ud835\udd5e\u0100ct\u28F8\u28FDr;\uC000\ud835\udcc2pos\xbb\u159D\u0180;lm\u2909\u290A\u290D\u43BCtimap;\u62B8\u0C00GLRVabcdefghijlmoprstuvw\u2942\u2953\u297E\u2989\u2998\u29DA\u29E9\u2A15\u2A1A\u2A58\u2A5D\u2A83\u2A95\u2AA4\u2AA8\u2B04\u2B07\u2B44\u2B7F\u2BAE\u2C34\u2C67\u2C7C\u2CE9\u0100gt\u2947\u294B;\uC000\u22D9\u0338\u0100;v\u2950\u0BCF\uC000\u226B\u20D2\u0180elt\u295A\u2972\u2976ft\u0100ar\u2961\u2967rrow;\u61CDightarrow;\u61CE;\uC000\u22D8\u0338\u0100;v\u297B\u0C47\uC000\u226A\u20D2ightarrow;\u61CF\u0100Dd\u298E\u2993ash;\u62AFash;\u62AE\u0280bcnpt\u29A3\u29A7\u29AC\u29B1\u29CCla\xbb\u02DEute;\u4144g;\uC000\u2220\u20D2\u0280;Eiop\u0D84\u29BC\u29C0\u29C5\u29C8;\uC000\u2A70\u0338d;\uC000\u224B\u0338s;\u4149ro\xf8\u0D84ur\u0100;a\u29D3\u29D4\u666El\u0100;s\u29D3\u0B38\u01F3\u29DF\0\u29E3p\u80BB\xa0\u0B37mp\u0100;e\u0BF9\u0C00\u0280aeouy\u29F4\u29FE\u2A03\u2A10\u2A13\u01F0\u29F9\0\u29FB;\u6A43on;\u4148dil;\u4146ng\u0100;d\u0D7E\u2A0Aot;\uC000\u2A6D\u0338p;\u6A42;\u443Dash;\u6013\u0380;Aadqsx\u0B92\u2A29\u2A2D\u2A3B\u2A41\u2A45\u2A50rr;\u61D7r\u0100hr\u2A33\u2A36k;\u6924\u0100;o\u13F2\u13F0ot;\uC000\u2250\u0338ui\xf6\u0B63\u0100ei\u2A4A\u2A4Ear;\u6928\xed\u0B98ist\u0100;s\u0BA0\u0B9Fr;\uC000\ud835\udd2b\u0200Eest\u0BC5\u2A66\u2A79\u2A7C\u0180;qs\u0BBC\u2A6D\u0BE1\u0180;qs\u0BBC\u0BC5\u2A74lan\xf4\u0BE2i\xed\u0BEA\u0100;r\u0BB6\u2A81\xbb\u0BB7\u0180Aap\u2A8A\u2A8D\u2A91r\xf2\u2971rr;\u61AEar;\u6AF2\u0180;sv\u0F8D\u2A9C\u0F8C\u0100;d\u2AA1\u2AA2\u62FC;\u62FAcy;\u445A\u0380AEadest\u2AB7\u2ABA\u2ABE\u2AC2\u2AC5\u2AF6\u2AF9r\xf2\u2966;\uC000\u2266\u0338rr;\u619Ar;\u6025\u0200;fqs\u0C3B\u2ACE\u2AE3\u2AEFt\u0100ar\u2AD4\u2AD9rro\xf7\u2AC1ightarro\xf7\u2A90\u0180;qs\u0C3B\u2ABA\u2AEAlan\xf4\u0C55\u0100;s\u0C55\u2AF4\xbb\u0C36i\xed\u0C5D\u0100;r\u0C35\u2AFEi\u0100;e\u0C1A\u0C25i\xe4\u0D90\u0100pt\u2B0C\u2B11f;\uC000\ud835\udd5f\u8180\xac;in\u2B19\u2B1A\u2B36\u40ACn\u0200;Edv\u0B89\u2B24\u2B28\u2B2E;\uC000\u22F9\u0338ot;\uC000\u22F5\u0338\u01E1\u0B89\u2B33\u2B35;\u62F7;\u62F6i\u0100;v\u0CB8\u2B3C\u01E1\u0CB8\u2B41\u2B43;\u62FE;\u62FD\u0180aor\u2B4B\u2B63\u2B69r\u0200;ast\u0B7B\u2B55\u2B5A\u2B5Flle\xec\u0B7Bl;\uC000\u2AFD\u20E5;\uC000\u2202\u0338lint;\u6A14\u0180;ce\u0C92\u2B70\u2B73u\xe5\u0CA5\u0100;c\u0C98\u2B78\u0100;e\u0C92\u2B7D\xf1\u0C98\u0200Aait\u2B88\u2B8B\u2B9D\u2BA7r\xf2\u2988rr\u0180;cw\u2B94\u2B95\u2B99\u619B;\uC000\u2933\u0338;\uC000\u219D\u0338ghtarrow\xbb\u2B95ri\u0100;e\u0CCB\u0CD6\u0380chimpqu\u2BBD\u2BCD\u2BD9\u2B04\u0B78\u2BE4\u2BEF\u0200;cer\u0D32\u2BC6\u0D37\u2BC9u\xe5\u0D45;\uC000\ud835\udcc3ort\u026D\u2B05\0\0\u2BD6ar\xe1\u2B56m\u0100;e\u0D6E\u2BDF\u0100;q\u0D74\u0D73su\u0100bp\u2BEB\u2BED\xe5\u0CF8\xe5\u0D0B\u0180bcp\u2BF6\u2C11\u2C19\u0200;Ees\u2BFF\u2C00\u0D22\u2C04\u6284;\uC000\u2AC5\u0338et\u0100;e\u0D1B\u2C0Bq\u0100;q\u0D23\u2C00c\u0100;e\u0D32\u2C17\xf1\u0D38\u0200;Ees\u2C22\u2C23\u0D5F\u2C27\u6285;\uC000\u2AC6\u0338et\u0100;e\u0D58\u2C2Eq\u0100;q\u0D60\u2C23\u0200gilr\u2C3D\u2C3F\u2C45\u2C47\xec\u0BD7lde\u803B\xf1\u40F1\xe7\u0C43iangle\u0100lr\u2C52\u2C5Ceft\u0100;e\u0C1A\u2C5A\xf1\u0C26ight\u0100;e\u0CCB\u2C65\xf1\u0CD7\u0100;m\u2C6C\u2C6D\u43BD\u0180;es\u2C74\u2C75\u2C79\u4023ro;\u6116p;\u6007\u0480DHadgilrs\u2C8F\u2C94\u2C99\u2C9E\u2CA3\u2CB0\u2CB6\u2CD3\u2CE3ash;\u62ADarr;\u6904p;\uC000\u224D\u20D2ash;\u62AC\u0100et\u2CA8\u2CAC;\uC000\u2265\u20D2;\uC000>\u20D2nfin;\u69DE\u0180Aet\u2CBD\u2CC1\u2CC5rr;\u6902;\uC000\u2264\u20D2\u0100;r\u2CCA\u2CCD\uC000<\u20D2ie;\uC000\u22B4\u20D2\u0100At\u2CD8\u2CDCrr;\u6903rie;\uC000\u22B5\u20D2im;\uC000\u223C\u20D2\u0180Aan\u2CF0\u2CF4\u2D02rr;\u61D6r\u0100hr\u2CFA\u2CFDk;\u6923\u0100;o\u13E7\u13E5ear;\u6927\u1253\u1A95\0\0\0\0\0\0\0\0\0\0\0\0\0\u2D2D\0\u2D38\u2D48\u2D60\u2D65\u2D72\u2D84\u1B07\0\0\u2D8D\u2DAB\0\u2DC8\u2DCE\0\u2DDC\u2E19\u2E2B\u2E3E\u2E43\u0100cs\u2D31\u1A97ute\u803B\xf3\u40F3\u0100iy\u2D3C\u2D45r\u0100;c\u1A9E\u2D42\u803B\xf4\u40F4;\u443E\u0280abios\u1AA0\u2D52\u2D57\u01C8\u2D5Alac;\u4151v;\u6A38old;\u69BClig;\u4153\u0100cr\u2D69\u2D6Dir;\u69BF;\uC000\ud835\udd2c\u036F\u2D79\0\0\u2D7C\0\u2D82n;\u42DBave\u803B\xf2\u40F2;\u69C1\u0100bm\u2D88\u0DF4ar;\u69B5\u0200acit\u2D95\u2D98\u2DA5\u2DA8r\xf2\u1A80\u0100ir\u2D9D\u2DA0r;\u69BEoss;\u69BBn\xe5\u0E52;\u69C0\u0180aei\u2DB1\u2DB5\u2DB9cr;\u414Dga;\u43C9\u0180cdn\u2DC0\u2DC5\u01CDron;\u43BF;\u69B6pf;\uC000\ud835\udd60\u0180ael\u2DD4\u2DD7\u01D2r;\u69B7rp;\u69B9\u0380;adiosv\u2DEA\u2DEB\u2DEE\u2E08\u2E0D\u2E10\u2E16\u6228r\xf2\u1A86\u0200;efm\u2DF7\u2DF8\u2E02\u2E05\u6A5Dr\u0100;o\u2DFE\u2DFF\u6134f\xbb\u2DFF\u803B\xaa\u40AA\u803B\xba\u40BAgof;\u62B6r;\u6A56lope;\u6A57;\u6A5B\u0180clo\u2E1F\u2E21\u2E27\xf2\u2E01ash\u803B\xf8\u40F8l;\u6298i\u016C\u2E2F\u2E34de\u803B\xf5\u40F5es\u0100;a\u01DB\u2E3As;\u6A36ml\u803B\xf6\u40F6bar;\u633D\u0AE1\u2E5E\0\u2E7D\0\u2E80\u2E9D\0\u2EA2\u2EB9\0\0\u2ECB\u0E9C\0\u2F13\0\0\u2F2B\u2FBC\0\u2FC8r\u0200;ast\u0403\u2E67\u2E72\u0E85\u8100\xb6;l\u2E6D\u2E6E\u40B6le\xec\u0403\u0269\u2E78\0\0\u2E7Bm;\u6AF3;\u6AFDy;\u443Fr\u0280cimpt\u2E8B\u2E8F\u2E93\u1865\u2E97nt;\u4025od;\u402Eil;\u6030enk;\u6031r;\uC000\ud835\udd2d\u0180imo\u2EA8\u2EB0\u2EB4\u0100;v\u2EAD\u2EAE\u43C6;\u43D5ma\xf4\u0A76ne;\u660E\u0180;tv\u2EBF\u2EC0\u2EC8\u43C0chfork\xbb\u1FFD;\u43D6\u0100au\u2ECF\u2EDFn\u0100ck\u2ED5\u2EDDk\u0100;h\u21F4\u2EDB;\u610E\xf6\u21F4s\u0480;abcdemst\u2EF3\u2EF4\u1908\u2EF9\u2EFD\u2F04\u2F06\u2F0A\u2F0E\u402Bcir;\u6A23ir;\u6A22\u0100ou\u1D40\u2F02;\u6A25;\u6A72n\u80BB\xb1\u0E9Dim;\u6A26wo;\u6A27\u0180ipu\u2F19\u2F20\u2F25ntint;\u6A15f;\uC000\ud835\udd61nd\u803B\xa3\u40A3\u0500;Eaceinosu\u0EC8\u2F3F\u2F41\u2F44\u2F47\u2F81\u2F89\u2F92\u2F7E\u2FB6;\u6AB3p;\u6AB7u\xe5\u0ED9\u0100;c\u0ECE\u2F4C\u0300;acens\u0EC8\u2F59\u2F5F\u2F66\u2F68\u2F7Eppro\xf8\u2F43urlye\xf1\u0ED9\xf1\u0ECE\u0180aes\u2F6F\u2F76\u2F7Approx;\u6AB9qq;\u6AB5im;\u62E8i\xed\u0EDFme\u0100;s\u2F88\u0EAE\u6032\u0180Eas\u2F78\u2F90\u2F7A\xf0\u2F75\u0180dfp\u0EEC\u2F99\u2FAF\u0180als\u2FA0\u2FA5\u2FAAlar;\u632Eine;\u6312urf;\u6313\u0100;t\u0EFB\u2FB4\xef\u0EFBrel;\u62B0\u0100ci\u2FC0\u2FC5r;\uC000\ud835\udcc5;\u43C8ncsp;\u6008\u0300fiopsu\u2FDA\u22E2\u2FDF\u2FE5\u2FEB\u2FF1r;\uC000\ud835\udd2epf;\uC000\ud835\udd62rime;\u6057cr;\uC000\ud835\udcc6\u0180aeo\u2FF8\u3009\u3013t\u0100ei\u2FFE\u3005rnion\xf3\u06B0nt;\u6A16st\u0100;e\u3010\u3011\u403F\xf1\u1F19\xf4\u0F14\u0A80ABHabcdefhilmnoprstux\u3040\u3051\u3055\u3059\u30E0\u310E\u312B\u3147\u3162\u3172\u318E\u3206\u3215\u3224\u3229\u3258\u326E\u3272\u3290\u32B0\u32B7\u0180art\u3047\u304A\u304Cr\xf2\u10B3\xf2\u03DDail;\u691Car\xf2\u1C65ar;\u6964\u0380cdenqrt\u3068\u3075\u3078\u307F\u308F\u3094\u30CC\u0100eu\u306D\u3071;\uC000\u223D\u0331te;\u4155i\xe3\u116Emptyv;\u69B3g\u0200;del\u0FD1\u3089\u308B\u308D;\u6992;\u69A5\xe5\u0FD1uo\u803B\xbb\u40BBr\u0580;abcfhlpstw\u0FDC\u30AC\u30AF\u30B7\u30B9\u30BC\u30BE\u30C0\u30C3\u30C7\u30CAp;\u6975\u0100;f\u0FE0\u30B4s;\u6920;\u6933s;\u691E\xeb\u225D\xf0\u272El;\u6945im;\u6974l;\u61A3;\u619D\u0100ai\u30D1\u30D5il;\u691Ao\u0100;n\u30DB\u30DC\u6236al\xf3\u0F1E\u0180abr\u30E7\u30EA\u30EEr\xf2\u17E5rk;\u6773\u0100ak\u30F3\u30FDc\u0100ek\u30F9\u30FB;\u407D;\u405D\u0100es\u3102\u3104;\u698Cl\u0100du\u310A\u310C;\u698E;\u6990\u0200aeuy\u3117\u311C\u3127\u3129ron;\u4159\u0100di\u3121\u3125il;\u4157\xec\u0FF2\xe2\u30FA;\u4440\u0200clqs\u3134\u3137\u313D\u3144a;\u6937dhar;\u6969uo\u0100;r\u020E\u020Dh;\u61B3\u0180acg\u314E\u315F\u0F44l\u0200;ips\u0F78\u3158\u315B\u109Cn\xe5\u10BBar\xf4\u0FA9t;\u65AD\u0180ilr\u3169\u1023\u316Esht;\u697D;\uC000\ud835\udd2f\u0100ao\u3177\u3186r\u0100du\u317D\u317F\xbb\u047B\u0100;l\u1091\u3184;\u696C\u0100;v\u318B\u318C\u43C1;\u43F1\u0180gns\u3195\u31F9\u31FCht\u0300ahlrst\u31A4\u31B0\u31C2\u31D8\u31E4\u31EErrow\u0100;t\u0FDC\u31ADa\xe9\u30C8arpoon\u0100du\u31BB\u31BFow\xee\u317Ep\xbb\u1092eft\u0100ah\u31CA\u31D0rrow\xf3\u0FEAarpoon\xf3\u0551ightarrows;\u61C9quigarro\xf7\u30CBhreetimes;\u62CCg;\u42DAingdotse\xf1\u1F32\u0180ahm\u320D\u3210\u3213r\xf2\u0FEAa\xf2\u0551;\u600Foust\u0100;a\u321E\u321F\u63B1che\xbb\u321Fmid;\u6AEE\u0200abpt\u3232\u323D\u3240\u3252\u0100nr\u3237\u323Ag;\u67EDr;\u61FEr\xeb\u1003\u0180afl\u3247\u324A\u324Er;\u6986;\uC000\ud835\udd63us;\u6A2Eimes;\u6A35\u0100ap\u325D\u3267r\u0100;g\u3263\u3264\u4029t;\u6994olint;\u6A12ar\xf2\u31E3\u0200achq\u327B\u3280\u10BC\u3285quo;\u603Ar;\uC000\ud835\udcc7\u0100bu\u30FB\u328Ao\u0100;r\u0214\u0213\u0180hir\u3297\u329B\u32A0re\xe5\u31F8mes;\u62CAi\u0200;efl\u32AA\u1059\u1821\u32AB\u65B9tri;\u69CEluhar;\u6968;\u611E\u0D61\u32D5\u32DB\u32DF\u332C\u3338\u3371\0\u337A\u33A4\0\0\u33EC\u33F0\0\u3428\u3448\u345A\u34AD\u34B1\u34CA\u34F1\0\u3616\0\0\u3633cute;\u415Bqu\xef\u27BA\u0500;Eaceinpsy\u11ED\u32F3\u32F5\u32FF\u3302\u330B\u330F\u331F\u3326\u3329;\u6AB4\u01F0\u32FA\0\u32FC;\u6AB8on;\u4161u\xe5\u11FE\u0100;d\u11F3\u3307il;\u415Frc;\u415D\u0180Eas\u3316\u3318\u331B;\u6AB6p;\u6ABAim;\u62E9olint;\u6A13i\xed\u1204;\u4441ot\u0180;be\u3334\u1D47\u3335\u62C5;\u6A66\u0380Aacmstx\u3346\u334A\u3357\u335B\u335E\u3363\u336Drr;\u61D8r\u0100hr\u3350\u3352\xeb\u2228\u0100;o\u0A36\u0A34t\u803B\xa7\u40A7i;\u403Bwar;\u6929m\u0100in\u3369\xf0nu\xf3\xf1t;\u6736r\u0100;o\u3376\u2055\uC000\ud835\udd30\u0200acoy\u3382\u3386\u3391\u33A0rp;\u666F\u0100hy\u338B\u338Fcy;\u4449;\u4448rt\u026D\u3399\0\0\u339Ci\xe4\u1464ara\xec\u2E6F\u803B\xad\u40AD\u0100gm\u33A8\u33B4ma\u0180;fv\u33B1\u33B2\u33B2\u43C3;\u43C2\u0400;deglnpr\u12AB\u33C5\u33C9\u33CE\u33D6\u33DE\u33E1\u33E6ot;\u6A6A\u0100;q\u12B1\u12B0\u0100;E\u33D3\u33D4\u6A9E;\u6AA0\u0100;E\u33DB\u33DC\u6A9D;\u6A9Fe;\u6246lus;\u6A24arr;\u6972ar\xf2\u113D\u0200aeit\u33F8\u3408\u340F\u3417\u0100ls\u33FD\u3404lsetm\xe9\u336Ahp;\u6A33parsl;\u69E4\u0100dl\u1463\u3414e;\u6323\u0100;e\u341C\u341D\u6AAA\u0100;s\u3422\u3423\u6AAC;\uC000\u2AAC\uFE00\u0180flp\u342E\u3433\u3442tcy;\u444C\u0100;b\u3438\u3439\u402F\u0100;a\u343E\u343F\u69C4r;\u633Ff;\uC000\ud835\udd64a\u0100dr\u344D\u0402es\u0100;u\u3454\u3455\u6660it\xbb\u3455\u0180csu\u3460\u3479\u349F\u0100au\u3465\u346Fp\u0100;s\u1188\u346B;\uC000\u2293\uFE00p\u0100;s\u11B4\u3475;\uC000\u2294\uFE00u\u0100bp\u347F\u348F\u0180;es\u1197\u119C\u3486et\u0100;e\u1197\u348D\xf1\u119D\u0180;es\u11A8\u11AD\u3496et\u0100;e\u11A8\u349D\xf1\u11AE\u0180;af\u117B\u34A6\u05B0r\u0165\u34AB\u05B1\xbb\u117Car\xf2\u1148\u0200cemt\u34B9\u34BE\u34C2\u34C5r;\uC000\ud835\udcc8tm\xee\xf1i\xec\u3415ar\xe6\u11BE\u0100ar\u34CE\u34D5r\u0100;f\u34D4\u17BF\u6606\u0100an\u34DA\u34EDight\u0100ep\u34E3\u34EApsilo\xee\u1EE0h\xe9\u2EAFs\xbb\u2852\u0280bcmnp\u34FB\u355E\u1209\u358B\u358E\u0480;Edemnprs\u350E\u350F\u3511\u3515\u351E\u3523\u352C\u3531\u3536\u6282;\u6AC5ot;\u6ABD\u0100;d\u11DA\u351Aot;\u6AC3ult;\u6AC1\u0100Ee\u3528\u352A;\u6ACB;\u628Alus;\u6ABFarr;\u6979\u0180eiu\u353D\u3552\u3555t\u0180;en\u350E\u3545\u354Bq\u0100;q\u11DA\u350Feq\u0100;q\u352B\u3528m;\u6AC7\u0100bp\u355A\u355C;\u6AD5;\u6AD3c\u0300;acens\u11ED\u356C\u3572\u3579\u357B\u3326ppro\xf8\u32FAurlye\xf1\u11FE\xf1\u11F3\u0180aes\u3582\u3588\u331Bppro\xf8\u331Aq\xf1\u3317g;\u666A\u0680123;Edehlmnps\u35A9\u35AC\u35AF\u121C\u35B2\u35B4\u35C0\u35C9\u35D5\u35DA\u35DF\u35E8\u35ED\u803B\xb9\u40B9\u803B\xb2\u40B2\u803B\xb3\u40B3;\u6AC6\u0100os\u35B9\u35BCt;\u6ABEub;\u6AD8\u0100;d\u1222\u35C5ot;\u6AC4s\u0100ou\u35CF\u35D2l;\u67C9b;\u6AD7arr;\u697Bult;\u6AC2\u0100Ee\u35E4\u35E6;\u6ACC;\u628Blus;\u6AC0\u0180eiu\u35F4\u3609\u360Ct\u0180;en\u121C\u35FC\u3602q\u0100;q\u1222\u35B2eq\u0100;q\u35E7\u35E4m;\u6AC8\u0100bp\u3611\u3613;\u6AD4;\u6AD6\u0180Aan\u361C\u3620\u362Drr;\u61D9r\u0100hr\u3626\u3628\xeb\u222E\u0100;o\u0A2B\u0A29war;\u692Alig\u803B\xdf\u40DF\u0BE1\u3651\u365D\u3660\u12CE\u3673\u3679\0\u367E\u36C2\0\0\0\0\0\u36DB\u3703\0\u3709\u376C\0\0\0\u3787\u0272\u3656\0\0\u365Bget;\u6316;\u43C4r\xeb\u0E5F\u0180aey\u3666\u366B\u3670ron;\u4165dil;\u4163;\u4442lrec;\u6315r;\uC000\ud835\udd31\u0200eiko\u3686\u369D\u36B5\u36BC\u01F2\u368B\0\u3691e\u01004f\u1284\u1281a\u0180;sv\u3698\u3699\u369B\u43B8ym;\u43D1\u0100cn\u36A2\u36B2k\u0100as\u36A8\u36AEppro\xf8\u12C1im\xbb\u12ACs\xf0\u129E\u0100as\u36BA\u36AE\xf0\u12C1rn\u803B\xfe\u40FE\u01EC\u031F\u36C6\u22E7es\u8180\xd7;bd\u36CF\u36D0\u36D8\u40D7\u0100;a\u190F\u36D5r;\u6A31;\u6A30\u0180eps\u36E1\u36E3\u3700\xe1\u2A4D\u0200;bcf\u0486\u36EC\u36F0\u36F4ot;\u6336ir;\u6AF1\u0100;o\u36F9\u36FC\uC000\ud835\udd65rk;\u6ADA\xe1\u3362rime;\u6034\u0180aip\u370F\u3712\u3764d\xe5\u1248\u0380adempst\u3721\u374D\u3740\u3751\u3757\u375C\u375Fngle\u0280;dlqr\u3730\u3731\u3736\u3740\u3742\u65B5own\xbb\u1DBBeft\u0100;e\u2800\u373E\xf1\u092E;\u625Cight\u0100;e\u32AA\u374B\xf1\u105Aot;\u65ECinus;\u6A3Alus;\u6A39b;\u69CDime;\u6A3Bezium;\u63E2\u0180cht\u3772\u377D\u3781\u0100ry\u3777\u377B;\uC000\ud835\udcc9;\u4446cy;\u445Brok;\u4167\u0100io\u378B\u378Ex\xf4\u1777head\u0100lr\u3797\u37A0eftarro\xf7\u084Fightarrow\xbb\u0F5D\u0900AHabcdfghlmoprstuw\u37D0\u37D3\u37D7\u37E4\u37F0\u37FC\u380E\u381C\u3823\u3834\u3851\u385D\u386B\u38A9\u38CC\u38D2\u38EA\u38F6r\xf2\u03EDar;\u6963\u0100cr\u37DC\u37E2ute\u803B\xfa\u40FA\xf2\u1150r\u01E3\u37EA\0\u37EDy;\u445Eve;\u416D\u0100iy\u37F5\u37FArc\u803B\xfb\u40FB;\u4443\u0180abh\u3803\u3806\u380Br\xf2\u13ADlac;\u4171a\xf2\u13C3\u0100ir\u3813\u3818sht;\u697E;\uC000\ud835\udd32rave\u803B\xf9\u40F9\u0161\u3827\u3831r\u0100lr\u382C\u382E\xbb\u0957\xbb\u1083lk;\u6580\u0100ct\u3839\u384D\u026F\u383F\0\0\u384Arn\u0100;e\u3845\u3846\u631Cr\xbb\u3846op;\u630Fri;\u65F8\u0100al\u3856\u385Acr;\u416B\u80BB\xa8\u0349\u0100gp\u3862\u3866on;\u4173f;\uC000\ud835\udd66\u0300adhlsu\u114B\u3878\u387D\u1372\u3891\u38A0own\xe1\u13B3arpoon\u0100lr\u3888\u388Cef\xf4\u382Digh\xf4\u382Fi\u0180;hl\u3899\u389A\u389C\u43C5\xbb\u13FAon\xbb\u389Aparrows;\u61C8\u0180cit\u38B0\u38C4\u38C8\u026F\u38B6\0\0\u38C1rn\u0100;e\u38BC\u38BD\u631Dr\xbb\u38BDop;\u630Eng;\u416Fri;\u65F9cr;\uC000\ud835\udcca\u0180dir\u38D9\u38DD\u38E2ot;\u62F0lde;\u4169i\u0100;f\u3730\u38E8\xbb\u1813\u0100am\u38EF\u38F2r\xf2\u38A8l\u803B\xfc\u40FCangle;\u69A7\u0780ABDacdeflnoprsz\u391C\u391F\u3929\u392D\u39B5\u39B8\u39BD\u39DF\u39E4\u39E8\u39F3\u39F9\u39FD\u3A01\u3A20r\xf2\u03F7ar\u0100;v\u3926\u3927\u6AE8;\u6AE9as\xe8\u03E1\u0100nr\u3932\u3937grt;\u699C\u0380eknprst\u34E3\u3946\u394B\u3952\u395D\u3964\u3996app\xe1\u2415othin\xe7\u1E96\u0180hir\u34EB\u2EC8\u3959op\xf4\u2FB5\u0100;h\u13B7\u3962\xef\u318D\u0100iu\u3969\u396Dgm\xe1\u33B3\u0100bp\u3972\u3984setneq\u0100;q\u397D\u3980\uC000\u228A\uFE00;\uC000\u2ACB\uFE00setneq\u0100;q\u398F\u3992\uC000\u228B\uFE00;\uC000\u2ACC\uFE00\u0100hr\u399B\u399Fet\xe1\u369Ciangle\u0100lr\u39AA\u39AFeft\xbb\u0925ight\xbb\u1051y;\u4432ash\xbb\u1036\u0180elr\u39C4\u39D2\u39D7\u0180;be\u2DEA\u39CB\u39CFar;\u62BBq;\u625Alip;\u62EE\u0100bt\u39DC\u1468a\xf2\u1469r;\uC000\ud835\udd33tr\xe9\u39AEsu\u0100bp\u39EF\u39F1\xbb\u0D1C\xbb\u0D59pf;\uC000\ud835\udd67ro\xf0\u0EFBtr\xe9\u39B4\u0100cu\u3A06\u3A0Br;\uC000\ud835\udccb\u0100bp\u3A10\u3A18n\u0100Ee\u3980\u3A16\xbb\u397En\u0100Ee\u3992\u3A1E\xbb\u3990igzag;\u699A\u0380cefoprs\u3A36\u3A3B\u3A56\u3A5B\u3A54\u3A61\u3A6Airc;\u4175\u0100di\u3A40\u3A51\u0100bg\u3A45\u3A49ar;\u6A5Fe\u0100;q\u15FA\u3A4F;\u6259erp;\u6118r;\uC000\ud835\udd34pf;\uC000\ud835\udd68\u0100;e\u1479\u3A66at\xe8\u1479cr;\uC000\ud835\udccc\u0AE3\u178E\u3A87\0\u3A8B\0\u3A90\u3A9B\0\0\u3A9D\u3AA8\u3AAB\u3AAF\0\0\u3AC3\u3ACE\0\u3AD8\u17DC\u17DFtr\xe9\u17D1r;\uC000\ud835\udd35\u0100Aa\u3A94\u3A97r\xf2\u03C3r\xf2\u09F6;\u43BE\u0100Aa\u3AA1\u3AA4r\xf2\u03B8r\xf2\u09EBa\xf0\u2713is;\u62FB\u0180dpt\u17A4\u3AB5\u3ABE\u0100fl\u3ABA\u17A9;\uC000\ud835\udd69im\xe5\u17B2\u0100Aa\u3AC7\u3ACAr\xf2\u03CEr\xf2\u0A01\u0100cq\u3AD2\u17B8r;\uC000\ud835\udccd\u0100pt\u17D6\u3ADCr\xe9\u17D4\u0400acefiosu\u3AF0\u3AFD\u3B08\u3B0C\u3B11\u3B15\u3B1B\u3B21c\u0100uy\u3AF6\u3AFBte\u803B\xfd\u40FD;\u444F\u0100iy\u3B02\u3B06rc;\u4177;\u444Bn\u803B\xa5\u40A5r;\uC000\ud835\udd36cy;\u4457pf;\uC000\ud835\udd6acr;\uC000\ud835\udcce\u0100cm\u3B26\u3B29y;\u444El\u803B\xff\u40FF\u0500acdefhiosw\u3B42\u3B48\u3B54\u3B58\u3B64\u3B69\u3B6D\u3B74\u3B7A\u3B80cute;\u417A\u0100ay\u3B4D\u3B52ron;\u417E;\u4437ot;\u417C\u0100et\u3B5D\u3B61tr\xe6\u155Fa;\u43B6r;\uC000\ud835\udd37cy;\u4436grarr;\u61DDpf;\uC000\ud835\udd6bcr;\uC000\ud835\udccf\u0100jn\u3B85\u3B87;\u600Dj;\u600C'.split("").map((c)=>c.charCodeAt(0)));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g80LL":[function(require,module,exports) {
// Generated using scripts/write-decode-map.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = new Uint16Array(// prettier-ignore
"\u0200aglq	\x15\x18\x1b\u026D\x0f\0\0\x12p;\u4026os;\u4027t;\u403Et;\u403Cuot;\u4022".split("").map((c)=>c.charCodeAt(0)));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1ZK5R":[function(require,module,exports) {
// Adapted from https://github.com/mathiasbynens/he/blob/36afe179392226cf1b6ccdb16ebbb7a5a844d93a/src/he.js#L106-L134
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fromCodePoint", ()=>fromCodePoint);
/**
 * Replace the given code point with a replacement character if it is a
 * surrogate or is outside the valid range. Otherwise return the code
 * point unchanged.
 */ parcelHelpers.export(exports, "replaceCodePoint", ()=>replaceCodePoint);
parcelHelpers.export(exports, "default", ()=>decodeCodePoint);
var _a;
const decodeMap = new Map([
    [
        0,
        65533
    ],
    // C1 Unicode control character reference replacements
    [
        128,
        8364
    ],
    [
        130,
        8218
    ],
    [
        131,
        402
    ],
    [
        132,
        8222
    ],
    [
        133,
        8230
    ],
    [
        134,
        8224
    ],
    [
        135,
        8225
    ],
    [
        136,
        710
    ],
    [
        137,
        8240
    ],
    [
        138,
        352
    ],
    [
        139,
        8249
    ],
    [
        140,
        338
    ],
    [
        142,
        381
    ],
    [
        145,
        8216
    ],
    [
        146,
        8217
    ],
    [
        147,
        8220
    ],
    [
        148,
        8221
    ],
    [
        149,
        8226
    ],
    [
        150,
        8211
    ],
    [
        151,
        8212
    ],
    [
        152,
        732
    ],
    [
        153,
        8482
    ],
    [
        154,
        353
    ],
    [
        155,
        8250
    ],
    [
        156,
        339
    ],
    [
        158,
        382
    ],
    [
        159,
        376
    ]
]);
const fromCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
(_a = String.fromCodePoint) !== null && _a !== void 0 ? _a : function(codePoint) {
    let output = "";
    if (codePoint > 0xffff) {
        codePoint -= 0x10000;
        output += String.fromCharCode(codePoint >>> 10 & 0x3ff | 0xd800);
        codePoint = 0xdc00 | codePoint & 0x3ff;
    }
    output += String.fromCharCode(codePoint);
    return output;
};
function replaceCodePoint(codePoint) {
    var _a;
    if (codePoint >= 0xd800 && codePoint <= 0xdfff || codePoint > 0x10ffff) return 0xfffd;
    return (_a = decodeMap.get(codePoint)) !== null && _a !== void 0 ? _a : codePoint;
}
function decodeCodePoint(codePoint) {
    return fromCodePoint(replaceCodePoint(codePoint));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"37yJE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Encodes all characters in the input using HTML entities. This includes
 * characters that are valid ASCII characters in HTML documents, such as `#`.
 *
 * To get a more compact output, consider using the `encodeNonAsciiHTML`
 * function, which will only encode characters that are not valid in HTML
 * documents, as well as non-ASCII characters.
 *
 * If a character has no equivalent entity, a numeric hexadecimal reference
 * (eg. `&#xfc;`) will be used.
 */ parcelHelpers.export(exports, "encodeHTML", ()=>encodeHTML);
/**
 * Encodes all non-ASCII characters, as well as characters not valid in HTML
 * documents using HTML entities. This function will not encode characters that
 * are valid in HTML documents, such as `#`.
 *
 * If a character has no equivalent entity, a numeric hexadecimal reference
 * (eg. `&#xfc;`) will be used.
 */ parcelHelpers.export(exports, "encodeNonAsciiHTML", ()=>encodeNonAsciiHTML);
var _encodeHtmlJs = require("./generated/encode-html.js");
var _encodeHtmlJsDefault = parcelHelpers.interopDefault(_encodeHtmlJs);
var _escapeJs = require("./escape.js");
const htmlReplacer = /[\t\n!-,./:-@[-`\f{-}$\x80-\uFFFF]/g;
function encodeHTML(data) {
    return encodeHTMLTrieRe(htmlReplacer, data);
}
function encodeNonAsciiHTML(data) {
    return encodeHTMLTrieRe((0, _escapeJs.xmlReplacer), data);
}
function encodeHTMLTrieRe(regExp, str) {
    let ret = "";
    let lastIdx = 0;
    let match;
    while((match = regExp.exec(str)) !== null){
        const i = match.index;
        ret += str.substring(lastIdx, i);
        const char = str.charCodeAt(i);
        let next = (0, _encodeHtmlJsDefault.default).get(char);
        if (typeof next === "object") {
            // We are in a branch. Try to match the next char.
            if (i + 1 < str.length) {
                const nextChar = str.charCodeAt(i + 1);
                const value = typeof next.n === "number" ? next.n === nextChar ? next.o : undefined : next.n.get(nextChar);
                if (value !== undefined) {
                    ret += value;
                    lastIdx = regExp.lastIndex += 1;
                    continue;
                }
            }
            next = next.v;
        }
        // We might have a tree node without a value; skip and use a numeric entity.
        if (next !== undefined) {
            ret += next;
            lastIdx = i + 1;
        } else {
            const cp = (0, _escapeJs.getCodePoint)(str, i);
            ret += `&#x${cp.toString(16)};`;
            // Increase by 1 if we have a surrogate pair
            lastIdx = regExp.lastIndex += Number(cp !== char);
        }
    }
    return ret + str.substr(lastIdx);
}

},{"./generated/encode-html.js":"jKM3a","./escape.js":"cegbJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jKM3a":[function(require,module,exports) {
// Generated using scripts/write-encode-map.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function restoreDiff(arr) {
    for(let i = 1; i < arr.length; i++)arr[i][0] += arr[i - 1][0] + 1;
    return arr;
}
// prettier-ignore
exports.default = new Map(/* #__PURE__ */ restoreDiff([
    [
        9,
        "&Tab;"
    ],
    [
        0,
        "&NewLine;"
    ],
    [
        22,
        "&excl;"
    ],
    [
        0,
        "&quot;"
    ],
    [
        0,
        "&num;"
    ],
    [
        0,
        "&dollar;"
    ],
    [
        0,
        "&percnt;"
    ],
    [
        0,
        "&amp;"
    ],
    [
        0,
        "&apos;"
    ],
    [
        0,
        "&lpar;"
    ],
    [
        0,
        "&rpar;"
    ],
    [
        0,
        "&ast;"
    ],
    [
        0,
        "&plus;"
    ],
    [
        0,
        "&comma;"
    ],
    [
        1,
        "&period;"
    ],
    [
        0,
        "&sol;"
    ],
    [
        10,
        "&colon;"
    ],
    [
        0,
        "&semi;"
    ],
    [
        0,
        {
            v: "&lt;",
            n: 8402,
            o: "&nvlt;"
        }
    ],
    [
        0,
        {
            v: "&equals;",
            n: 8421,
            o: "&bne;"
        }
    ],
    [
        0,
        {
            v: "&gt;",
            n: 8402,
            o: "&nvgt;"
        }
    ],
    [
        0,
        "&quest;"
    ],
    [
        0,
        "&commat;"
    ],
    [
        26,
        "&lbrack;"
    ],
    [
        0,
        "&bsol;"
    ],
    [
        0,
        "&rbrack;"
    ],
    [
        0,
        "&Hat;"
    ],
    [
        0,
        "&lowbar;"
    ],
    [
        0,
        "&DiacriticalGrave;"
    ],
    [
        5,
        {
            n: 106,
            o: "&fjlig;"
        }
    ],
    [
        20,
        "&lbrace;"
    ],
    [
        0,
        "&verbar;"
    ],
    [
        0,
        "&rbrace;"
    ],
    [
        34,
        "&nbsp;"
    ],
    [
        0,
        "&iexcl;"
    ],
    [
        0,
        "&cent;"
    ],
    [
        0,
        "&pound;"
    ],
    [
        0,
        "&curren;"
    ],
    [
        0,
        "&yen;"
    ],
    [
        0,
        "&brvbar;"
    ],
    [
        0,
        "&sect;"
    ],
    [
        0,
        "&die;"
    ],
    [
        0,
        "&copy;"
    ],
    [
        0,
        "&ordf;"
    ],
    [
        0,
        "&laquo;"
    ],
    [
        0,
        "&not;"
    ],
    [
        0,
        "&shy;"
    ],
    [
        0,
        "&circledR;"
    ],
    [
        0,
        "&macr;"
    ],
    [
        0,
        "&deg;"
    ],
    [
        0,
        "&PlusMinus;"
    ],
    [
        0,
        "&sup2;"
    ],
    [
        0,
        "&sup3;"
    ],
    [
        0,
        "&acute;"
    ],
    [
        0,
        "&micro;"
    ],
    [
        0,
        "&para;"
    ],
    [
        0,
        "&centerdot;"
    ],
    [
        0,
        "&cedil;"
    ],
    [
        0,
        "&sup1;"
    ],
    [
        0,
        "&ordm;"
    ],
    [
        0,
        "&raquo;"
    ],
    [
        0,
        "&frac14;"
    ],
    [
        0,
        "&frac12;"
    ],
    [
        0,
        "&frac34;"
    ],
    [
        0,
        "&iquest;"
    ],
    [
        0,
        "&Agrave;"
    ],
    [
        0,
        "&Aacute;"
    ],
    [
        0,
        "&Acirc;"
    ],
    [
        0,
        "&Atilde;"
    ],
    [
        0,
        "&Auml;"
    ],
    [
        0,
        "&angst;"
    ],
    [
        0,
        "&AElig;"
    ],
    [
        0,
        "&Ccedil;"
    ],
    [
        0,
        "&Egrave;"
    ],
    [
        0,
        "&Eacute;"
    ],
    [
        0,
        "&Ecirc;"
    ],
    [
        0,
        "&Euml;"
    ],
    [
        0,
        "&Igrave;"
    ],
    [
        0,
        "&Iacute;"
    ],
    [
        0,
        "&Icirc;"
    ],
    [
        0,
        "&Iuml;"
    ],
    [
        0,
        "&ETH;"
    ],
    [
        0,
        "&Ntilde;"
    ],
    [
        0,
        "&Ograve;"
    ],
    [
        0,
        "&Oacute;"
    ],
    [
        0,
        "&Ocirc;"
    ],
    [
        0,
        "&Otilde;"
    ],
    [
        0,
        "&Ouml;"
    ],
    [
        0,
        "&times;"
    ],
    [
        0,
        "&Oslash;"
    ],
    [
        0,
        "&Ugrave;"
    ],
    [
        0,
        "&Uacute;"
    ],
    [
        0,
        "&Ucirc;"
    ],
    [
        0,
        "&Uuml;"
    ],
    [
        0,
        "&Yacute;"
    ],
    [
        0,
        "&THORN;"
    ],
    [
        0,
        "&szlig;"
    ],
    [
        0,
        "&agrave;"
    ],
    [
        0,
        "&aacute;"
    ],
    [
        0,
        "&acirc;"
    ],
    [
        0,
        "&atilde;"
    ],
    [
        0,
        "&auml;"
    ],
    [
        0,
        "&aring;"
    ],
    [
        0,
        "&aelig;"
    ],
    [
        0,
        "&ccedil;"
    ],
    [
        0,
        "&egrave;"
    ],
    [
        0,
        "&eacute;"
    ],
    [
        0,
        "&ecirc;"
    ],
    [
        0,
        "&euml;"
    ],
    [
        0,
        "&igrave;"
    ],
    [
        0,
        "&iacute;"
    ],
    [
        0,
        "&icirc;"
    ],
    [
        0,
        "&iuml;"
    ],
    [
        0,
        "&eth;"
    ],
    [
        0,
        "&ntilde;"
    ],
    [
        0,
        "&ograve;"
    ],
    [
        0,
        "&oacute;"
    ],
    [
        0,
        "&ocirc;"
    ],
    [
        0,
        "&otilde;"
    ],
    [
        0,
        "&ouml;"
    ],
    [
        0,
        "&div;"
    ],
    [
        0,
        "&oslash;"
    ],
    [
        0,
        "&ugrave;"
    ],
    [
        0,
        "&uacute;"
    ],
    [
        0,
        "&ucirc;"
    ],
    [
        0,
        "&uuml;"
    ],
    [
        0,
        "&yacute;"
    ],
    [
        0,
        "&thorn;"
    ],
    [
        0,
        "&yuml;"
    ],
    [
        0,
        "&Amacr;"
    ],
    [
        0,
        "&amacr;"
    ],
    [
        0,
        "&Abreve;"
    ],
    [
        0,
        "&abreve;"
    ],
    [
        0,
        "&Aogon;"
    ],
    [
        0,
        "&aogon;"
    ],
    [
        0,
        "&Cacute;"
    ],
    [
        0,
        "&cacute;"
    ],
    [
        0,
        "&Ccirc;"
    ],
    [
        0,
        "&ccirc;"
    ],
    [
        0,
        "&Cdot;"
    ],
    [
        0,
        "&cdot;"
    ],
    [
        0,
        "&Ccaron;"
    ],
    [
        0,
        "&ccaron;"
    ],
    [
        0,
        "&Dcaron;"
    ],
    [
        0,
        "&dcaron;"
    ],
    [
        0,
        "&Dstrok;"
    ],
    [
        0,
        "&dstrok;"
    ],
    [
        0,
        "&Emacr;"
    ],
    [
        0,
        "&emacr;"
    ],
    [
        2,
        "&Edot;"
    ],
    [
        0,
        "&edot;"
    ],
    [
        0,
        "&Eogon;"
    ],
    [
        0,
        "&eogon;"
    ],
    [
        0,
        "&Ecaron;"
    ],
    [
        0,
        "&ecaron;"
    ],
    [
        0,
        "&Gcirc;"
    ],
    [
        0,
        "&gcirc;"
    ],
    [
        0,
        "&Gbreve;"
    ],
    [
        0,
        "&gbreve;"
    ],
    [
        0,
        "&Gdot;"
    ],
    [
        0,
        "&gdot;"
    ],
    [
        0,
        "&Gcedil;"
    ],
    [
        1,
        "&Hcirc;"
    ],
    [
        0,
        "&hcirc;"
    ],
    [
        0,
        "&Hstrok;"
    ],
    [
        0,
        "&hstrok;"
    ],
    [
        0,
        "&Itilde;"
    ],
    [
        0,
        "&itilde;"
    ],
    [
        0,
        "&Imacr;"
    ],
    [
        0,
        "&imacr;"
    ],
    [
        2,
        "&Iogon;"
    ],
    [
        0,
        "&iogon;"
    ],
    [
        0,
        "&Idot;"
    ],
    [
        0,
        "&imath;"
    ],
    [
        0,
        "&IJlig;"
    ],
    [
        0,
        "&ijlig;"
    ],
    [
        0,
        "&Jcirc;"
    ],
    [
        0,
        "&jcirc;"
    ],
    [
        0,
        "&Kcedil;"
    ],
    [
        0,
        "&kcedil;"
    ],
    [
        0,
        "&kgreen;"
    ],
    [
        0,
        "&Lacute;"
    ],
    [
        0,
        "&lacute;"
    ],
    [
        0,
        "&Lcedil;"
    ],
    [
        0,
        "&lcedil;"
    ],
    [
        0,
        "&Lcaron;"
    ],
    [
        0,
        "&lcaron;"
    ],
    [
        0,
        "&Lmidot;"
    ],
    [
        0,
        "&lmidot;"
    ],
    [
        0,
        "&Lstrok;"
    ],
    [
        0,
        "&lstrok;"
    ],
    [
        0,
        "&Nacute;"
    ],
    [
        0,
        "&nacute;"
    ],
    [
        0,
        "&Ncedil;"
    ],
    [
        0,
        "&ncedil;"
    ],
    [
        0,
        "&Ncaron;"
    ],
    [
        0,
        "&ncaron;"
    ],
    [
        0,
        "&napos;"
    ],
    [
        0,
        "&ENG;"
    ],
    [
        0,
        "&eng;"
    ],
    [
        0,
        "&Omacr;"
    ],
    [
        0,
        "&omacr;"
    ],
    [
        2,
        "&Odblac;"
    ],
    [
        0,
        "&odblac;"
    ],
    [
        0,
        "&OElig;"
    ],
    [
        0,
        "&oelig;"
    ],
    [
        0,
        "&Racute;"
    ],
    [
        0,
        "&racute;"
    ],
    [
        0,
        "&Rcedil;"
    ],
    [
        0,
        "&rcedil;"
    ],
    [
        0,
        "&Rcaron;"
    ],
    [
        0,
        "&rcaron;"
    ],
    [
        0,
        "&Sacute;"
    ],
    [
        0,
        "&sacute;"
    ],
    [
        0,
        "&Scirc;"
    ],
    [
        0,
        "&scirc;"
    ],
    [
        0,
        "&Scedil;"
    ],
    [
        0,
        "&scedil;"
    ],
    [
        0,
        "&Scaron;"
    ],
    [
        0,
        "&scaron;"
    ],
    [
        0,
        "&Tcedil;"
    ],
    [
        0,
        "&tcedil;"
    ],
    [
        0,
        "&Tcaron;"
    ],
    [
        0,
        "&tcaron;"
    ],
    [
        0,
        "&Tstrok;"
    ],
    [
        0,
        "&tstrok;"
    ],
    [
        0,
        "&Utilde;"
    ],
    [
        0,
        "&utilde;"
    ],
    [
        0,
        "&Umacr;"
    ],
    [
        0,
        "&umacr;"
    ],
    [
        0,
        "&Ubreve;"
    ],
    [
        0,
        "&ubreve;"
    ],
    [
        0,
        "&Uring;"
    ],
    [
        0,
        "&uring;"
    ],
    [
        0,
        "&Udblac;"
    ],
    [
        0,
        "&udblac;"
    ],
    [
        0,
        "&Uogon;"
    ],
    [
        0,
        "&uogon;"
    ],
    [
        0,
        "&Wcirc;"
    ],
    [
        0,
        "&wcirc;"
    ],
    [
        0,
        "&Ycirc;"
    ],
    [
        0,
        "&ycirc;"
    ],
    [
        0,
        "&Yuml;"
    ],
    [
        0,
        "&Zacute;"
    ],
    [
        0,
        "&zacute;"
    ],
    [
        0,
        "&Zdot;"
    ],
    [
        0,
        "&zdot;"
    ],
    [
        0,
        "&Zcaron;"
    ],
    [
        0,
        "&zcaron;"
    ],
    [
        19,
        "&fnof;"
    ],
    [
        34,
        "&imped;"
    ],
    [
        63,
        "&gacute;"
    ],
    [
        65,
        "&jmath;"
    ],
    [
        142,
        "&circ;"
    ],
    [
        0,
        "&caron;"
    ],
    [
        16,
        "&breve;"
    ],
    [
        0,
        "&DiacriticalDot;"
    ],
    [
        0,
        "&ring;"
    ],
    [
        0,
        "&ogon;"
    ],
    [
        0,
        "&DiacriticalTilde;"
    ],
    [
        0,
        "&dblac;"
    ],
    [
        51,
        "&DownBreve;"
    ],
    [
        127,
        "&Alpha;"
    ],
    [
        0,
        "&Beta;"
    ],
    [
        0,
        "&Gamma;"
    ],
    [
        0,
        "&Delta;"
    ],
    [
        0,
        "&Epsilon;"
    ],
    [
        0,
        "&Zeta;"
    ],
    [
        0,
        "&Eta;"
    ],
    [
        0,
        "&Theta;"
    ],
    [
        0,
        "&Iota;"
    ],
    [
        0,
        "&Kappa;"
    ],
    [
        0,
        "&Lambda;"
    ],
    [
        0,
        "&Mu;"
    ],
    [
        0,
        "&Nu;"
    ],
    [
        0,
        "&Xi;"
    ],
    [
        0,
        "&Omicron;"
    ],
    [
        0,
        "&Pi;"
    ],
    [
        0,
        "&Rho;"
    ],
    [
        1,
        "&Sigma;"
    ],
    [
        0,
        "&Tau;"
    ],
    [
        0,
        "&Upsilon;"
    ],
    [
        0,
        "&Phi;"
    ],
    [
        0,
        "&Chi;"
    ],
    [
        0,
        "&Psi;"
    ],
    [
        0,
        "&ohm;"
    ],
    [
        7,
        "&alpha;"
    ],
    [
        0,
        "&beta;"
    ],
    [
        0,
        "&gamma;"
    ],
    [
        0,
        "&delta;"
    ],
    [
        0,
        "&epsi;"
    ],
    [
        0,
        "&zeta;"
    ],
    [
        0,
        "&eta;"
    ],
    [
        0,
        "&theta;"
    ],
    [
        0,
        "&iota;"
    ],
    [
        0,
        "&kappa;"
    ],
    [
        0,
        "&lambda;"
    ],
    [
        0,
        "&mu;"
    ],
    [
        0,
        "&nu;"
    ],
    [
        0,
        "&xi;"
    ],
    [
        0,
        "&omicron;"
    ],
    [
        0,
        "&pi;"
    ],
    [
        0,
        "&rho;"
    ],
    [
        0,
        "&sigmaf;"
    ],
    [
        0,
        "&sigma;"
    ],
    [
        0,
        "&tau;"
    ],
    [
        0,
        "&upsi;"
    ],
    [
        0,
        "&phi;"
    ],
    [
        0,
        "&chi;"
    ],
    [
        0,
        "&psi;"
    ],
    [
        0,
        "&omega;"
    ],
    [
        7,
        "&thetasym;"
    ],
    [
        0,
        "&Upsi;"
    ],
    [
        2,
        "&phiv;"
    ],
    [
        0,
        "&piv;"
    ],
    [
        5,
        "&Gammad;"
    ],
    [
        0,
        "&digamma;"
    ],
    [
        18,
        "&kappav;"
    ],
    [
        0,
        "&rhov;"
    ],
    [
        3,
        "&epsiv;"
    ],
    [
        0,
        "&backepsilon;"
    ],
    [
        10,
        "&IOcy;"
    ],
    [
        0,
        "&DJcy;"
    ],
    [
        0,
        "&GJcy;"
    ],
    [
        0,
        "&Jukcy;"
    ],
    [
        0,
        "&DScy;"
    ],
    [
        0,
        "&Iukcy;"
    ],
    [
        0,
        "&YIcy;"
    ],
    [
        0,
        "&Jsercy;"
    ],
    [
        0,
        "&LJcy;"
    ],
    [
        0,
        "&NJcy;"
    ],
    [
        0,
        "&TSHcy;"
    ],
    [
        0,
        "&KJcy;"
    ],
    [
        1,
        "&Ubrcy;"
    ],
    [
        0,
        "&DZcy;"
    ],
    [
        0,
        "&Acy;"
    ],
    [
        0,
        "&Bcy;"
    ],
    [
        0,
        "&Vcy;"
    ],
    [
        0,
        "&Gcy;"
    ],
    [
        0,
        "&Dcy;"
    ],
    [
        0,
        "&IEcy;"
    ],
    [
        0,
        "&ZHcy;"
    ],
    [
        0,
        "&Zcy;"
    ],
    [
        0,
        "&Icy;"
    ],
    [
        0,
        "&Jcy;"
    ],
    [
        0,
        "&Kcy;"
    ],
    [
        0,
        "&Lcy;"
    ],
    [
        0,
        "&Mcy;"
    ],
    [
        0,
        "&Ncy;"
    ],
    [
        0,
        "&Ocy;"
    ],
    [
        0,
        "&Pcy;"
    ],
    [
        0,
        "&Rcy;"
    ],
    [
        0,
        "&Scy;"
    ],
    [
        0,
        "&Tcy;"
    ],
    [
        0,
        "&Ucy;"
    ],
    [
        0,
        "&Fcy;"
    ],
    [
        0,
        "&KHcy;"
    ],
    [
        0,
        "&TScy;"
    ],
    [
        0,
        "&CHcy;"
    ],
    [
        0,
        "&SHcy;"
    ],
    [
        0,
        "&SHCHcy;"
    ],
    [
        0,
        "&HARDcy;"
    ],
    [
        0,
        "&Ycy;"
    ],
    [
        0,
        "&SOFTcy;"
    ],
    [
        0,
        "&Ecy;"
    ],
    [
        0,
        "&YUcy;"
    ],
    [
        0,
        "&YAcy;"
    ],
    [
        0,
        "&acy;"
    ],
    [
        0,
        "&bcy;"
    ],
    [
        0,
        "&vcy;"
    ],
    [
        0,
        "&gcy;"
    ],
    [
        0,
        "&dcy;"
    ],
    [
        0,
        "&iecy;"
    ],
    [
        0,
        "&zhcy;"
    ],
    [
        0,
        "&zcy;"
    ],
    [
        0,
        "&icy;"
    ],
    [
        0,
        "&jcy;"
    ],
    [
        0,
        "&kcy;"
    ],
    [
        0,
        "&lcy;"
    ],
    [
        0,
        "&mcy;"
    ],
    [
        0,
        "&ncy;"
    ],
    [
        0,
        "&ocy;"
    ],
    [
        0,
        "&pcy;"
    ],
    [
        0,
        "&rcy;"
    ],
    [
        0,
        "&scy;"
    ],
    [
        0,
        "&tcy;"
    ],
    [
        0,
        "&ucy;"
    ],
    [
        0,
        "&fcy;"
    ],
    [
        0,
        "&khcy;"
    ],
    [
        0,
        "&tscy;"
    ],
    [
        0,
        "&chcy;"
    ],
    [
        0,
        "&shcy;"
    ],
    [
        0,
        "&shchcy;"
    ],
    [
        0,
        "&hardcy;"
    ],
    [
        0,
        "&ycy;"
    ],
    [
        0,
        "&softcy;"
    ],
    [
        0,
        "&ecy;"
    ],
    [
        0,
        "&yucy;"
    ],
    [
        0,
        "&yacy;"
    ],
    [
        1,
        "&iocy;"
    ],
    [
        0,
        "&djcy;"
    ],
    [
        0,
        "&gjcy;"
    ],
    [
        0,
        "&jukcy;"
    ],
    [
        0,
        "&dscy;"
    ],
    [
        0,
        "&iukcy;"
    ],
    [
        0,
        "&yicy;"
    ],
    [
        0,
        "&jsercy;"
    ],
    [
        0,
        "&ljcy;"
    ],
    [
        0,
        "&njcy;"
    ],
    [
        0,
        "&tshcy;"
    ],
    [
        0,
        "&kjcy;"
    ],
    [
        1,
        "&ubrcy;"
    ],
    [
        0,
        "&dzcy;"
    ],
    [
        7074,
        "&ensp;"
    ],
    [
        0,
        "&emsp;"
    ],
    [
        0,
        "&emsp13;"
    ],
    [
        0,
        "&emsp14;"
    ],
    [
        1,
        "&numsp;"
    ],
    [
        0,
        "&puncsp;"
    ],
    [
        0,
        "&ThinSpace;"
    ],
    [
        0,
        "&hairsp;"
    ],
    [
        0,
        "&NegativeMediumSpace;"
    ],
    [
        0,
        "&zwnj;"
    ],
    [
        0,
        "&zwj;"
    ],
    [
        0,
        "&lrm;"
    ],
    [
        0,
        "&rlm;"
    ],
    [
        0,
        "&dash;"
    ],
    [
        2,
        "&ndash;"
    ],
    [
        0,
        "&mdash;"
    ],
    [
        0,
        "&horbar;"
    ],
    [
        0,
        "&Verbar;"
    ],
    [
        1,
        "&lsquo;"
    ],
    [
        0,
        "&CloseCurlyQuote;"
    ],
    [
        0,
        "&lsquor;"
    ],
    [
        1,
        "&ldquo;"
    ],
    [
        0,
        "&CloseCurlyDoubleQuote;"
    ],
    [
        0,
        "&bdquo;"
    ],
    [
        1,
        "&dagger;"
    ],
    [
        0,
        "&Dagger;"
    ],
    [
        0,
        "&bull;"
    ],
    [
        2,
        "&nldr;"
    ],
    [
        0,
        "&hellip;"
    ],
    [
        9,
        "&permil;"
    ],
    [
        0,
        "&pertenk;"
    ],
    [
        0,
        "&prime;"
    ],
    [
        0,
        "&Prime;"
    ],
    [
        0,
        "&tprime;"
    ],
    [
        0,
        "&backprime;"
    ],
    [
        3,
        "&lsaquo;"
    ],
    [
        0,
        "&rsaquo;"
    ],
    [
        3,
        "&oline;"
    ],
    [
        2,
        "&caret;"
    ],
    [
        1,
        "&hybull;"
    ],
    [
        0,
        "&frasl;"
    ],
    [
        10,
        "&bsemi;"
    ],
    [
        7,
        "&qprime;"
    ],
    [
        7,
        {
            v: "&MediumSpace;",
            n: 8202,
            o: "&ThickSpace;"
        }
    ],
    [
        0,
        "&NoBreak;"
    ],
    [
        0,
        "&af;"
    ],
    [
        0,
        "&InvisibleTimes;"
    ],
    [
        0,
        "&ic;"
    ],
    [
        72,
        "&euro;"
    ],
    [
        46,
        "&tdot;"
    ],
    [
        0,
        "&DotDot;"
    ],
    [
        37,
        "&complexes;"
    ],
    [
        2,
        "&incare;"
    ],
    [
        4,
        "&gscr;"
    ],
    [
        0,
        "&hamilt;"
    ],
    [
        0,
        "&Hfr;"
    ],
    [
        0,
        "&Hopf;"
    ],
    [
        0,
        "&planckh;"
    ],
    [
        0,
        "&hbar;"
    ],
    [
        0,
        "&imagline;"
    ],
    [
        0,
        "&Ifr;"
    ],
    [
        0,
        "&lagran;"
    ],
    [
        0,
        "&ell;"
    ],
    [
        1,
        "&naturals;"
    ],
    [
        0,
        "&numero;"
    ],
    [
        0,
        "&copysr;"
    ],
    [
        0,
        "&weierp;"
    ],
    [
        0,
        "&Popf;"
    ],
    [
        0,
        "&Qopf;"
    ],
    [
        0,
        "&realine;"
    ],
    [
        0,
        "&real;"
    ],
    [
        0,
        "&reals;"
    ],
    [
        0,
        "&rx;"
    ],
    [
        3,
        "&trade;"
    ],
    [
        1,
        "&integers;"
    ],
    [
        2,
        "&mho;"
    ],
    [
        0,
        "&zeetrf;"
    ],
    [
        0,
        "&iiota;"
    ],
    [
        2,
        "&bernou;"
    ],
    [
        0,
        "&Cayleys;"
    ],
    [
        1,
        "&escr;"
    ],
    [
        0,
        "&Escr;"
    ],
    [
        0,
        "&Fouriertrf;"
    ],
    [
        1,
        "&Mellintrf;"
    ],
    [
        0,
        "&order;"
    ],
    [
        0,
        "&alefsym;"
    ],
    [
        0,
        "&beth;"
    ],
    [
        0,
        "&gimel;"
    ],
    [
        0,
        "&daleth;"
    ],
    [
        12,
        "&CapitalDifferentialD;"
    ],
    [
        0,
        "&dd;"
    ],
    [
        0,
        "&ee;"
    ],
    [
        0,
        "&ii;"
    ],
    [
        10,
        "&frac13;"
    ],
    [
        0,
        "&frac23;"
    ],
    [
        0,
        "&frac15;"
    ],
    [
        0,
        "&frac25;"
    ],
    [
        0,
        "&frac35;"
    ],
    [
        0,
        "&frac45;"
    ],
    [
        0,
        "&frac16;"
    ],
    [
        0,
        "&frac56;"
    ],
    [
        0,
        "&frac18;"
    ],
    [
        0,
        "&frac38;"
    ],
    [
        0,
        "&frac58;"
    ],
    [
        0,
        "&frac78;"
    ],
    [
        49,
        "&larr;"
    ],
    [
        0,
        "&ShortUpArrow;"
    ],
    [
        0,
        "&rarr;"
    ],
    [
        0,
        "&darr;"
    ],
    [
        0,
        "&harr;"
    ],
    [
        0,
        "&updownarrow;"
    ],
    [
        0,
        "&nwarr;"
    ],
    [
        0,
        "&nearr;"
    ],
    [
        0,
        "&LowerRightArrow;"
    ],
    [
        0,
        "&LowerLeftArrow;"
    ],
    [
        0,
        "&nlarr;"
    ],
    [
        0,
        "&nrarr;"
    ],
    [
        1,
        {
            v: "&rarrw;",
            n: 824,
            o: "&nrarrw;"
        }
    ],
    [
        0,
        "&Larr;"
    ],
    [
        0,
        "&Uarr;"
    ],
    [
        0,
        "&Rarr;"
    ],
    [
        0,
        "&Darr;"
    ],
    [
        0,
        "&larrtl;"
    ],
    [
        0,
        "&rarrtl;"
    ],
    [
        0,
        "&LeftTeeArrow;"
    ],
    [
        0,
        "&mapstoup;"
    ],
    [
        0,
        "&map;"
    ],
    [
        0,
        "&DownTeeArrow;"
    ],
    [
        1,
        "&hookleftarrow;"
    ],
    [
        0,
        "&hookrightarrow;"
    ],
    [
        0,
        "&larrlp;"
    ],
    [
        0,
        "&looparrowright;"
    ],
    [
        0,
        "&harrw;"
    ],
    [
        0,
        "&nharr;"
    ],
    [
        1,
        "&lsh;"
    ],
    [
        0,
        "&rsh;"
    ],
    [
        0,
        "&ldsh;"
    ],
    [
        0,
        "&rdsh;"
    ],
    [
        1,
        "&crarr;"
    ],
    [
        0,
        "&cularr;"
    ],
    [
        0,
        "&curarr;"
    ],
    [
        2,
        "&circlearrowleft;"
    ],
    [
        0,
        "&circlearrowright;"
    ],
    [
        0,
        "&leftharpoonup;"
    ],
    [
        0,
        "&DownLeftVector;"
    ],
    [
        0,
        "&RightUpVector;"
    ],
    [
        0,
        "&LeftUpVector;"
    ],
    [
        0,
        "&rharu;"
    ],
    [
        0,
        "&DownRightVector;"
    ],
    [
        0,
        "&dharr;"
    ],
    [
        0,
        "&dharl;"
    ],
    [
        0,
        "&RightArrowLeftArrow;"
    ],
    [
        0,
        "&udarr;"
    ],
    [
        0,
        "&LeftArrowRightArrow;"
    ],
    [
        0,
        "&leftleftarrows;"
    ],
    [
        0,
        "&upuparrows;"
    ],
    [
        0,
        "&rightrightarrows;"
    ],
    [
        0,
        "&ddarr;"
    ],
    [
        0,
        "&leftrightharpoons;"
    ],
    [
        0,
        "&Equilibrium;"
    ],
    [
        0,
        "&nlArr;"
    ],
    [
        0,
        "&nhArr;"
    ],
    [
        0,
        "&nrArr;"
    ],
    [
        0,
        "&DoubleLeftArrow;"
    ],
    [
        0,
        "&DoubleUpArrow;"
    ],
    [
        0,
        "&DoubleRightArrow;"
    ],
    [
        0,
        "&dArr;"
    ],
    [
        0,
        "&DoubleLeftRightArrow;"
    ],
    [
        0,
        "&DoubleUpDownArrow;"
    ],
    [
        0,
        "&nwArr;"
    ],
    [
        0,
        "&neArr;"
    ],
    [
        0,
        "&seArr;"
    ],
    [
        0,
        "&swArr;"
    ],
    [
        0,
        "&lAarr;"
    ],
    [
        0,
        "&rAarr;"
    ],
    [
        1,
        "&zigrarr;"
    ],
    [
        6,
        "&larrb;"
    ],
    [
        0,
        "&rarrb;"
    ],
    [
        15,
        "&DownArrowUpArrow;"
    ],
    [
        7,
        "&loarr;"
    ],
    [
        0,
        "&roarr;"
    ],
    [
        0,
        "&hoarr;"
    ],
    [
        0,
        "&forall;"
    ],
    [
        0,
        "&comp;"
    ],
    [
        0,
        {
            v: "&part;",
            n: 824,
            o: "&npart;"
        }
    ],
    [
        0,
        "&exist;"
    ],
    [
        0,
        "&nexist;"
    ],
    [
        0,
        "&empty;"
    ],
    [
        1,
        "&Del;"
    ],
    [
        0,
        "&Element;"
    ],
    [
        0,
        "&NotElement;"
    ],
    [
        1,
        "&ni;"
    ],
    [
        0,
        "&notni;"
    ],
    [
        2,
        "&prod;"
    ],
    [
        0,
        "&coprod;"
    ],
    [
        0,
        "&sum;"
    ],
    [
        0,
        "&minus;"
    ],
    [
        0,
        "&MinusPlus;"
    ],
    [
        0,
        "&dotplus;"
    ],
    [
        1,
        "&Backslash;"
    ],
    [
        0,
        "&lowast;"
    ],
    [
        0,
        "&compfn;"
    ],
    [
        1,
        "&radic;"
    ],
    [
        2,
        "&prop;"
    ],
    [
        0,
        "&infin;"
    ],
    [
        0,
        "&angrt;"
    ],
    [
        0,
        {
            v: "&ang;",
            n: 8402,
            o: "&nang;"
        }
    ],
    [
        0,
        "&angmsd;"
    ],
    [
        0,
        "&angsph;"
    ],
    [
        0,
        "&mid;"
    ],
    [
        0,
        "&nmid;"
    ],
    [
        0,
        "&DoubleVerticalBar;"
    ],
    [
        0,
        "&NotDoubleVerticalBar;"
    ],
    [
        0,
        "&and;"
    ],
    [
        0,
        "&or;"
    ],
    [
        0,
        {
            v: "&cap;",
            n: 65024,
            o: "&caps;"
        }
    ],
    [
        0,
        {
            v: "&cup;",
            n: 65024,
            o: "&cups;"
        }
    ],
    [
        0,
        "&int;"
    ],
    [
        0,
        "&Int;"
    ],
    [
        0,
        "&iiint;"
    ],
    [
        0,
        "&conint;"
    ],
    [
        0,
        "&Conint;"
    ],
    [
        0,
        "&Cconint;"
    ],
    [
        0,
        "&cwint;"
    ],
    [
        0,
        "&ClockwiseContourIntegral;"
    ],
    [
        0,
        "&awconint;"
    ],
    [
        0,
        "&there4;"
    ],
    [
        0,
        "&becaus;"
    ],
    [
        0,
        "&ratio;"
    ],
    [
        0,
        "&Colon;"
    ],
    [
        0,
        "&dotminus;"
    ],
    [
        1,
        "&mDDot;"
    ],
    [
        0,
        "&homtht;"
    ],
    [
        0,
        {
            v: "&sim;",
            n: 8402,
            o: "&nvsim;"
        }
    ],
    [
        0,
        {
            v: "&backsim;",
            n: 817,
            o: "&race;"
        }
    ],
    [
        0,
        {
            v: "&ac;",
            n: 819,
            o: "&acE;"
        }
    ],
    [
        0,
        "&acd;"
    ],
    [
        0,
        "&VerticalTilde;"
    ],
    [
        0,
        "&NotTilde;"
    ],
    [
        0,
        {
            v: "&eqsim;",
            n: 824,
            o: "&nesim;"
        }
    ],
    [
        0,
        "&sime;"
    ],
    [
        0,
        "&NotTildeEqual;"
    ],
    [
        0,
        "&cong;"
    ],
    [
        0,
        "&simne;"
    ],
    [
        0,
        "&ncong;"
    ],
    [
        0,
        "&ap;"
    ],
    [
        0,
        "&nap;"
    ],
    [
        0,
        "&ape;"
    ],
    [
        0,
        {
            v: "&apid;",
            n: 824,
            o: "&napid;"
        }
    ],
    [
        0,
        "&backcong;"
    ],
    [
        0,
        {
            v: "&asympeq;",
            n: 8402,
            o: "&nvap;"
        }
    ],
    [
        0,
        {
            v: "&bump;",
            n: 824,
            o: "&nbump;"
        }
    ],
    [
        0,
        {
            v: "&bumpe;",
            n: 824,
            o: "&nbumpe;"
        }
    ],
    [
        0,
        {
            v: "&doteq;",
            n: 824,
            o: "&nedot;"
        }
    ],
    [
        0,
        "&doteqdot;"
    ],
    [
        0,
        "&efDot;"
    ],
    [
        0,
        "&erDot;"
    ],
    [
        0,
        "&Assign;"
    ],
    [
        0,
        "&ecolon;"
    ],
    [
        0,
        "&ecir;"
    ],
    [
        0,
        "&circeq;"
    ],
    [
        1,
        "&wedgeq;"
    ],
    [
        0,
        "&veeeq;"
    ],
    [
        1,
        "&triangleq;"
    ],
    [
        2,
        "&equest;"
    ],
    [
        0,
        "&ne;"
    ],
    [
        0,
        {
            v: "&Congruent;",
            n: 8421,
            o: "&bnequiv;"
        }
    ],
    [
        0,
        "&nequiv;"
    ],
    [
        1,
        {
            v: "&le;",
            n: 8402,
            o: "&nvle;"
        }
    ],
    [
        0,
        {
            v: "&ge;",
            n: 8402,
            o: "&nvge;"
        }
    ],
    [
        0,
        {
            v: "&lE;",
            n: 824,
            o: "&nlE;"
        }
    ],
    [
        0,
        {
            v: "&gE;",
            n: 824,
            o: "&ngE;"
        }
    ],
    [
        0,
        {
            v: "&lnE;",
            n: 65024,
            o: "&lvertneqq;"
        }
    ],
    [
        0,
        {
            v: "&gnE;",
            n: 65024,
            o: "&gvertneqq;"
        }
    ],
    [
        0,
        {
            v: "&ll;",
            n: new Map(/* #__PURE__ */ restoreDiff([
                [
                    824,
                    "&nLtv;"
                ],
                [
                    7577,
                    "&nLt;"
                ]
            ]))
        }
    ],
    [
        0,
        {
            v: "&gg;",
            n: new Map(/* #__PURE__ */ restoreDiff([
                [
                    824,
                    "&nGtv;"
                ],
                [
                    7577,
                    "&nGt;"
                ]
            ]))
        }
    ],
    [
        0,
        "&between;"
    ],
    [
        0,
        "&NotCupCap;"
    ],
    [
        0,
        "&nless;"
    ],
    [
        0,
        "&ngt;"
    ],
    [
        0,
        "&nle;"
    ],
    [
        0,
        "&nge;"
    ],
    [
        0,
        "&lesssim;"
    ],
    [
        0,
        "&GreaterTilde;"
    ],
    [
        0,
        "&nlsim;"
    ],
    [
        0,
        "&ngsim;"
    ],
    [
        0,
        "&LessGreater;"
    ],
    [
        0,
        "&gl;"
    ],
    [
        0,
        "&NotLessGreater;"
    ],
    [
        0,
        "&NotGreaterLess;"
    ],
    [
        0,
        "&pr;"
    ],
    [
        0,
        "&sc;"
    ],
    [
        0,
        "&prcue;"
    ],
    [
        0,
        "&sccue;"
    ],
    [
        0,
        "&PrecedesTilde;"
    ],
    [
        0,
        {
            v: "&scsim;",
            n: 824,
            o: "&NotSucceedsTilde;"
        }
    ],
    [
        0,
        "&NotPrecedes;"
    ],
    [
        0,
        "&NotSucceeds;"
    ],
    [
        0,
        {
            v: "&sub;",
            n: 8402,
            o: "&NotSubset;"
        }
    ],
    [
        0,
        {
            v: "&sup;",
            n: 8402,
            o: "&NotSuperset;"
        }
    ],
    [
        0,
        "&nsub;"
    ],
    [
        0,
        "&nsup;"
    ],
    [
        0,
        "&sube;"
    ],
    [
        0,
        "&supe;"
    ],
    [
        0,
        "&NotSubsetEqual;"
    ],
    [
        0,
        "&NotSupersetEqual;"
    ],
    [
        0,
        {
            v: "&subne;",
            n: 65024,
            o: "&varsubsetneq;"
        }
    ],
    [
        0,
        {
            v: "&supne;",
            n: 65024,
            o: "&varsupsetneq;"
        }
    ],
    [
        1,
        "&cupdot;"
    ],
    [
        0,
        "&UnionPlus;"
    ],
    [
        0,
        {
            v: "&sqsub;",
            n: 824,
            o: "&NotSquareSubset;"
        }
    ],
    [
        0,
        {
            v: "&sqsup;",
            n: 824,
            o: "&NotSquareSuperset;"
        }
    ],
    [
        0,
        "&sqsube;"
    ],
    [
        0,
        "&sqsupe;"
    ],
    [
        0,
        {
            v: "&sqcap;",
            n: 65024,
            o: "&sqcaps;"
        }
    ],
    [
        0,
        {
            v: "&sqcup;",
            n: 65024,
            o: "&sqcups;"
        }
    ],
    [
        0,
        "&CirclePlus;"
    ],
    [
        0,
        "&CircleMinus;"
    ],
    [
        0,
        "&CircleTimes;"
    ],
    [
        0,
        "&osol;"
    ],
    [
        0,
        "&CircleDot;"
    ],
    [
        0,
        "&circledcirc;"
    ],
    [
        0,
        "&circledast;"
    ],
    [
        1,
        "&circleddash;"
    ],
    [
        0,
        "&boxplus;"
    ],
    [
        0,
        "&boxminus;"
    ],
    [
        0,
        "&boxtimes;"
    ],
    [
        0,
        "&dotsquare;"
    ],
    [
        0,
        "&RightTee;"
    ],
    [
        0,
        "&dashv;"
    ],
    [
        0,
        "&DownTee;"
    ],
    [
        0,
        "&bot;"
    ],
    [
        1,
        "&models;"
    ],
    [
        0,
        "&DoubleRightTee;"
    ],
    [
        0,
        "&Vdash;"
    ],
    [
        0,
        "&Vvdash;"
    ],
    [
        0,
        "&VDash;"
    ],
    [
        0,
        "&nvdash;"
    ],
    [
        0,
        "&nvDash;"
    ],
    [
        0,
        "&nVdash;"
    ],
    [
        0,
        "&nVDash;"
    ],
    [
        0,
        "&prurel;"
    ],
    [
        1,
        "&LeftTriangle;"
    ],
    [
        0,
        "&RightTriangle;"
    ],
    [
        0,
        {
            v: "&LeftTriangleEqual;",
            n: 8402,
            o: "&nvltrie;"
        }
    ],
    [
        0,
        {
            v: "&RightTriangleEqual;",
            n: 8402,
            o: "&nvrtrie;"
        }
    ],
    [
        0,
        "&origof;"
    ],
    [
        0,
        "&imof;"
    ],
    [
        0,
        "&multimap;"
    ],
    [
        0,
        "&hercon;"
    ],
    [
        0,
        "&intcal;"
    ],
    [
        0,
        "&veebar;"
    ],
    [
        1,
        "&barvee;"
    ],
    [
        0,
        "&angrtvb;"
    ],
    [
        0,
        "&lrtri;"
    ],
    [
        0,
        "&bigwedge;"
    ],
    [
        0,
        "&bigvee;"
    ],
    [
        0,
        "&bigcap;"
    ],
    [
        0,
        "&bigcup;"
    ],
    [
        0,
        "&diam;"
    ],
    [
        0,
        "&sdot;"
    ],
    [
        0,
        "&sstarf;"
    ],
    [
        0,
        "&divideontimes;"
    ],
    [
        0,
        "&bowtie;"
    ],
    [
        0,
        "&ltimes;"
    ],
    [
        0,
        "&rtimes;"
    ],
    [
        0,
        "&leftthreetimes;"
    ],
    [
        0,
        "&rightthreetimes;"
    ],
    [
        0,
        "&backsimeq;"
    ],
    [
        0,
        "&curlyvee;"
    ],
    [
        0,
        "&curlywedge;"
    ],
    [
        0,
        "&Sub;"
    ],
    [
        0,
        "&Sup;"
    ],
    [
        0,
        "&Cap;"
    ],
    [
        0,
        "&Cup;"
    ],
    [
        0,
        "&fork;"
    ],
    [
        0,
        "&epar;"
    ],
    [
        0,
        "&lessdot;"
    ],
    [
        0,
        "&gtdot;"
    ],
    [
        0,
        {
            v: "&Ll;",
            n: 824,
            o: "&nLl;"
        }
    ],
    [
        0,
        {
            v: "&Gg;",
            n: 824,
            o: "&nGg;"
        }
    ],
    [
        0,
        {
            v: "&leg;",
            n: 65024,
            o: "&lesg;"
        }
    ],
    [
        0,
        {
            v: "&gel;",
            n: 65024,
            o: "&gesl;"
        }
    ],
    [
        2,
        "&cuepr;"
    ],
    [
        0,
        "&cuesc;"
    ],
    [
        0,
        "&NotPrecedesSlantEqual;"
    ],
    [
        0,
        "&NotSucceedsSlantEqual;"
    ],
    [
        0,
        "&NotSquareSubsetEqual;"
    ],
    [
        0,
        "&NotSquareSupersetEqual;"
    ],
    [
        2,
        "&lnsim;"
    ],
    [
        0,
        "&gnsim;"
    ],
    [
        0,
        "&precnsim;"
    ],
    [
        0,
        "&scnsim;"
    ],
    [
        0,
        "&nltri;"
    ],
    [
        0,
        "&NotRightTriangle;"
    ],
    [
        0,
        "&nltrie;"
    ],
    [
        0,
        "&NotRightTriangleEqual;"
    ],
    [
        0,
        "&vellip;"
    ],
    [
        0,
        "&ctdot;"
    ],
    [
        0,
        "&utdot;"
    ],
    [
        0,
        "&dtdot;"
    ],
    [
        0,
        "&disin;"
    ],
    [
        0,
        "&isinsv;"
    ],
    [
        0,
        "&isins;"
    ],
    [
        0,
        {
            v: "&isindot;",
            n: 824,
            o: "&notindot;"
        }
    ],
    [
        0,
        "&notinvc;"
    ],
    [
        0,
        "&notinvb;"
    ],
    [
        1,
        {
            v: "&isinE;",
            n: 824,
            o: "&notinE;"
        }
    ],
    [
        0,
        "&nisd;"
    ],
    [
        0,
        "&xnis;"
    ],
    [
        0,
        "&nis;"
    ],
    [
        0,
        "&notnivc;"
    ],
    [
        0,
        "&notnivb;"
    ],
    [
        6,
        "&barwed;"
    ],
    [
        0,
        "&Barwed;"
    ],
    [
        1,
        "&lceil;"
    ],
    [
        0,
        "&rceil;"
    ],
    [
        0,
        "&LeftFloor;"
    ],
    [
        0,
        "&rfloor;"
    ],
    [
        0,
        "&drcrop;"
    ],
    [
        0,
        "&dlcrop;"
    ],
    [
        0,
        "&urcrop;"
    ],
    [
        0,
        "&ulcrop;"
    ],
    [
        0,
        "&bnot;"
    ],
    [
        1,
        "&profline;"
    ],
    [
        0,
        "&profsurf;"
    ],
    [
        1,
        "&telrec;"
    ],
    [
        0,
        "&target;"
    ],
    [
        5,
        "&ulcorn;"
    ],
    [
        0,
        "&urcorn;"
    ],
    [
        0,
        "&dlcorn;"
    ],
    [
        0,
        "&drcorn;"
    ],
    [
        2,
        "&frown;"
    ],
    [
        0,
        "&smile;"
    ],
    [
        9,
        "&cylcty;"
    ],
    [
        0,
        "&profalar;"
    ],
    [
        7,
        "&topbot;"
    ],
    [
        6,
        "&ovbar;"
    ],
    [
        1,
        "&solbar;"
    ],
    [
        60,
        "&angzarr;"
    ],
    [
        51,
        "&lmoustache;"
    ],
    [
        0,
        "&rmoustache;"
    ],
    [
        2,
        "&OverBracket;"
    ],
    [
        0,
        "&bbrk;"
    ],
    [
        0,
        "&bbrktbrk;"
    ],
    [
        37,
        "&OverParenthesis;"
    ],
    [
        0,
        "&UnderParenthesis;"
    ],
    [
        0,
        "&OverBrace;"
    ],
    [
        0,
        "&UnderBrace;"
    ],
    [
        2,
        "&trpezium;"
    ],
    [
        4,
        "&elinters;"
    ],
    [
        59,
        "&blank;"
    ],
    [
        164,
        "&circledS;"
    ],
    [
        55,
        "&boxh;"
    ],
    [
        1,
        "&boxv;"
    ],
    [
        9,
        "&boxdr;"
    ],
    [
        3,
        "&boxdl;"
    ],
    [
        3,
        "&boxur;"
    ],
    [
        3,
        "&boxul;"
    ],
    [
        3,
        "&boxvr;"
    ],
    [
        7,
        "&boxvl;"
    ],
    [
        7,
        "&boxhd;"
    ],
    [
        7,
        "&boxhu;"
    ],
    [
        7,
        "&boxvh;"
    ],
    [
        19,
        "&boxH;"
    ],
    [
        0,
        "&boxV;"
    ],
    [
        0,
        "&boxdR;"
    ],
    [
        0,
        "&boxDr;"
    ],
    [
        0,
        "&boxDR;"
    ],
    [
        0,
        "&boxdL;"
    ],
    [
        0,
        "&boxDl;"
    ],
    [
        0,
        "&boxDL;"
    ],
    [
        0,
        "&boxuR;"
    ],
    [
        0,
        "&boxUr;"
    ],
    [
        0,
        "&boxUR;"
    ],
    [
        0,
        "&boxuL;"
    ],
    [
        0,
        "&boxUl;"
    ],
    [
        0,
        "&boxUL;"
    ],
    [
        0,
        "&boxvR;"
    ],
    [
        0,
        "&boxVr;"
    ],
    [
        0,
        "&boxVR;"
    ],
    [
        0,
        "&boxvL;"
    ],
    [
        0,
        "&boxVl;"
    ],
    [
        0,
        "&boxVL;"
    ],
    [
        0,
        "&boxHd;"
    ],
    [
        0,
        "&boxhD;"
    ],
    [
        0,
        "&boxHD;"
    ],
    [
        0,
        "&boxHu;"
    ],
    [
        0,
        "&boxhU;"
    ],
    [
        0,
        "&boxHU;"
    ],
    [
        0,
        "&boxvH;"
    ],
    [
        0,
        "&boxVh;"
    ],
    [
        0,
        "&boxVH;"
    ],
    [
        19,
        "&uhblk;"
    ],
    [
        3,
        "&lhblk;"
    ],
    [
        3,
        "&block;"
    ],
    [
        8,
        "&blk14;"
    ],
    [
        0,
        "&blk12;"
    ],
    [
        0,
        "&blk34;"
    ],
    [
        13,
        "&square;"
    ],
    [
        8,
        "&blacksquare;"
    ],
    [
        0,
        "&EmptyVerySmallSquare;"
    ],
    [
        1,
        "&rect;"
    ],
    [
        0,
        "&marker;"
    ],
    [
        2,
        "&fltns;"
    ],
    [
        1,
        "&bigtriangleup;"
    ],
    [
        0,
        "&blacktriangle;"
    ],
    [
        0,
        "&triangle;"
    ],
    [
        2,
        "&blacktriangleright;"
    ],
    [
        0,
        "&rtri;"
    ],
    [
        3,
        "&bigtriangledown;"
    ],
    [
        0,
        "&blacktriangledown;"
    ],
    [
        0,
        "&dtri;"
    ],
    [
        2,
        "&blacktriangleleft;"
    ],
    [
        0,
        "&ltri;"
    ],
    [
        6,
        "&loz;"
    ],
    [
        0,
        "&cir;"
    ],
    [
        32,
        "&tridot;"
    ],
    [
        2,
        "&bigcirc;"
    ],
    [
        8,
        "&ultri;"
    ],
    [
        0,
        "&urtri;"
    ],
    [
        0,
        "&lltri;"
    ],
    [
        0,
        "&EmptySmallSquare;"
    ],
    [
        0,
        "&FilledSmallSquare;"
    ],
    [
        8,
        "&bigstar;"
    ],
    [
        0,
        "&star;"
    ],
    [
        7,
        "&phone;"
    ],
    [
        49,
        "&female;"
    ],
    [
        1,
        "&male;"
    ],
    [
        29,
        "&spades;"
    ],
    [
        2,
        "&clubs;"
    ],
    [
        1,
        "&hearts;"
    ],
    [
        0,
        "&diamondsuit;"
    ],
    [
        3,
        "&sung;"
    ],
    [
        2,
        "&flat;"
    ],
    [
        0,
        "&natural;"
    ],
    [
        0,
        "&sharp;"
    ],
    [
        163,
        "&check;"
    ],
    [
        3,
        "&cross;"
    ],
    [
        8,
        "&malt;"
    ],
    [
        21,
        "&sext;"
    ],
    [
        33,
        "&VerticalSeparator;"
    ],
    [
        25,
        "&lbbrk;"
    ],
    [
        0,
        "&rbbrk;"
    ],
    [
        84,
        "&bsolhsub;"
    ],
    [
        0,
        "&suphsol;"
    ],
    [
        28,
        "&LeftDoubleBracket;"
    ],
    [
        0,
        "&RightDoubleBracket;"
    ],
    [
        0,
        "&lang;"
    ],
    [
        0,
        "&rang;"
    ],
    [
        0,
        "&Lang;"
    ],
    [
        0,
        "&Rang;"
    ],
    [
        0,
        "&loang;"
    ],
    [
        0,
        "&roang;"
    ],
    [
        7,
        "&longleftarrow;"
    ],
    [
        0,
        "&longrightarrow;"
    ],
    [
        0,
        "&longleftrightarrow;"
    ],
    [
        0,
        "&DoubleLongLeftArrow;"
    ],
    [
        0,
        "&DoubleLongRightArrow;"
    ],
    [
        0,
        "&DoubleLongLeftRightArrow;"
    ],
    [
        1,
        "&longmapsto;"
    ],
    [
        2,
        "&dzigrarr;"
    ],
    [
        258,
        "&nvlArr;"
    ],
    [
        0,
        "&nvrArr;"
    ],
    [
        0,
        "&nvHarr;"
    ],
    [
        0,
        "&Map;"
    ],
    [
        6,
        "&lbarr;"
    ],
    [
        0,
        "&bkarow;"
    ],
    [
        0,
        "&lBarr;"
    ],
    [
        0,
        "&dbkarow;"
    ],
    [
        0,
        "&drbkarow;"
    ],
    [
        0,
        "&DDotrahd;"
    ],
    [
        0,
        "&UpArrowBar;"
    ],
    [
        0,
        "&DownArrowBar;"
    ],
    [
        2,
        "&Rarrtl;"
    ],
    [
        2,
        "&latail;"
    ],
    [
        0,
        "&ratail;"
    ],
    [
        0,
        "&lAtail;"
    ],
    [
        0,
        "&rAtail;"
    ],
    [
        0,
        "&larrfs;"
    ],
    [
        0,
        "&rarrfs;"
    ],
    [
        0,
        "&larrbfs;"
    ],
    [
        0,
        "&rarrbfs;"
    ],
    [
        2,
        "&nwarhk;"
    ],
    [
        0,
        "&nearhk;"
    ],
    [
        0,
        "&hksearow;"
    ],
    [
        0,
        "&hkswarow;"
    ],
    [
        0,
        "&nwnear;"
    ],
    [
        0,
        "&nesear;"
    ],
    [
        0,
        "&seswar;"
    ],
    [
        0,
        "&swnwar;"
    ],
    [
        8,
        {
            v: "&rarrc;",
            n: 824,
            o: "&nrarrc;"
        }
    ],
    [
        1,
        "&cudarrr;"
    ],
    [
        0,
        "&ldca;"
    ],
    [
        0,
        "&rdca;"
    ],
    [
        0,
        "&cudarrl;"
    ],
    [
        0,
        "&larrpl;"
    ],
    [
        2,
        "&curarrm;"
    ],
    [
        0,
        "&cularrp;"
    ],
    [
        7,
        "&rarrpl;"
    ],
    [
        2,
        "&harrcir;"
    ],
    [
        0,
        "&Uarrocir;"
    ],
    [
        0,
        "&lurdshar;"
    ],
    [
        0,
        "&ldrushar;"
    ],
    [
        2,
        "&LeftRightVector;"
    ],
    [
        0,
        "&RightUpDownVector;"
    ],
    [
        0,
        "&DownLeftRightVector;"
    ],
    [
        0,
        "&LeftUpDownVector;"
    ],
    [
        0,
        "&LeftVectorBar;"
    ],
    [
        0,
        "&RightVectorBar;"
    ],
    [
        0,
        "&RightUpVectorBar;"
    ],
    [
        0,
        "&RightDownVectorBar;"
    ],
    [
        0,
        "&DownLeftVectorBar;"
    ],
    [
        0,
        "&DownRightVectorBar;"
    ],
    [
        0,
        "&LeftUpVectorBar;"
    ],
    [
        0,
        "&LeftDownVectorBar;"
    ],
    [
        0,
        "&LeftTeeVector;"
    ],
    [
        0,
        "&RightTeeVector;"
    ],
    [
        0,
        "&RightUpTeeVector;"
    ],
    [
        0,
        "&RightDownTeeVector;"
    ],
    [
        0,
        "&DownLeftTeeVector;"
    ],
    [
        0,
        "&DownRightTeeVector;"
    ],
    [
        0,
        "&LeftUpTeeVector;"
    ],
    [
        0,
        "&LeftDownTeeVector;"
    ],
    [
        0,
        "&lHar;"
    ],
    [
        0,
        "&uHar;"
    ],
    [
        0,
        "&rHar;"
    ],
    [
        0,
        "&dHar;"
    ],
    [
        0,
        "&luruhar;"
    ],
    [
        0,
        "&ldrdhar;"
    ],
    [
        0,
        "&ruluhar;"
    ],
    [
        0,
        "&rdldhar;"
    ],
    [
        0,
        "&lharul;"
    ],
    [
        0,
        "&llhard;"
    ],
    [
        0,
        "&rharul;"
    ],
    [
        0,
        "&lrhard;"
    ],
    [
        0,
        "&udhar;"
    ],
    [
        0,
        "&duhar;"
    ],
    [
        0,
        "&RoundImplies;"
    ],
    [
        0,
        "&erarr;"
    ],
    [
        0,
        "&simrarr;"
    ],
    [
        0,
        "&larrsim;"
    ],
    [
        0,
        "&rarrsim;"
    ],
    [
        0,
        "&rarrap;"
    ],
    [
        0,
        "&ltlarr;"
    ],
    [
        1,
        "&gtrarr;"
    ],
    [
        0,
        "&subrarr;"
    ],
    [
        1,
        "&suplarr;"
    ],
    [
        0,
        "&lfisht;"
    ],
    [
        0,
        "&rfisht;"
    ],
    [
        0,
        "&ufisht;"
    ],
    [
        0,
        "&dfisht;"
    ],
    [
        5,
        "&lopar;"
    ],
    [
        0,
        "&ropar;"
    ],
    [
        4,
        "&lbrke;"
    ],
    [
        0,
        "&rbrke;"
    ],
    [
        0,
        "&lbrkslu;"
    ],
    [
        0,
        "&rbrksld;"
    ],
    [
        0,
        "&lbrksld;"
    ],
    [
        0,
        "&rbrkslu;"
    ],
    [
        0,
        "&langd;"
    ],
    [
        0,
        "&rangd;"
    ],
    [
        0,
        "&lparlt;"
    ],
    [
        0,
        "&rpargt;"
    ],
    [
        0,
        "&gtlPar;"
    ],
    [
        0,
        "&ltrPar;"
    ],
    [
        3,
        "&vzigzag;"
    ],
    [
        1,
        "&vangrt;"
    ],
    [
        0,
        "&angrtvbd;"
    ],
    [
        6,
        "&ange;"
    ],
    [
        0,
        "&range;"
    ],
    [
        0,
        "&dwangle;"
    ],
    [
        0,
        "&uwangle;"
    ],
    [
        0,
        "&angmsdaa;"
    ],
    [
        0,
        "&angmsdab;"
    ],
    [
        0,
        "&angmsdac;"
    ],
    [
        0,
        "&angmsdad;"
    ],
    [
        0,
        "&angmsdae;"
    ],
    [
        0,
        "&angmsdaf;"
    ],
    [
        0,
        "&angmsdag;"
    ],
    [
        0,
        "&angmsdah;"
    ],
    [
        0,
        "&bemptyv;"
    ],
    [
        0,
        "&demptyv;"
    ],
    [
        0,
        "&cemptyv;"
    ],
    [
        0,
        "&raemptyv;"
    ],
    [
        0,
        "&laemptyv;"
    ],
    [
        0,
        "&ohbar;"
    ],
    [
        0,
        "&omid;"
    ],
    [
        0,
        "&opar;"
    ],
    [
        1,
        "&operp;"
    ],
    [
        1,
        "&olcross;"
    ],
    [
        0,
        "&odsold;"
    ],
    [
        1,
        "&olcir;"
    ],
    [
        0,
        "&ofcir;"
    ],
    [
        0,
        "&olt;"
    ],
    [
        0,
        "&ogt;"
    ],
    [
        0,
        "&cirscir;"
    ],
    [
        0,
        "&cirE;"
    ],
    [
        0,
        "&solb;"
    ],
    [
        0,
        "&bsolb;"
    ],
    [
        3,
        "&boxbox;"
    ],
    [
        3,
        "&trisb;"
    ],
    [
        0,
        "&rtriltri;"
    ],
    [
        0,
        {
            v: "&LeftTriangleBar;",
            n: 824,
            o: "&NotLeftTriangleBar;"
        }
    ],
    [
        0,
        {
            v: "&RightTriangleBar;",
            n: 824,
            o: "&NotRightTriangleBar;"
        }
    ],
    [
        11,
        "&iinfin;"
    ],
    [
        0,
        "&infintie;"
    ],
    [
        0,
        "&nvinfin;"
    ],
    [
        4,
        "&eparsl;"
    ],
    [
        0,
        "&smeparsl;"
    ],
    [
        0,
        "&eqvparsl;"
    ],
    [
        5,
        "&blacklozenge;"
    ],
    [
        8,
        "&RuleDelayed;"
    ],
    [
        1,
        "&dsol;"
    ],
    [
        9,
        "&bigodot;"
    ],
    [
        0,
        "&bigoplus;"
    ],
    [
        0,
        "&bigotimes;"
    ],
    [
        1,
        "&biguplus;"
    ],
    [
        1,
        "&bigsqcup;"
    ],
    [
        5,
        "&iiiint;"
    ],
    [
        0,
        "&fpartint;"
    ],
    [
        2,
        "&cirfnint;"
    ],
    [
        0,
        "&awint;"
    ],
    [
        0,
        "&rppolint;"
    ],
    [
        0,
        "&scpolint;"
    ],
    [
        0,
        "&npolint;"
    ],
    [
        0,
        "&pointint;"
    ],
    [
        0,
        "&quatint;"
    ],
    [
        0,
        "&intlarhk;"
    ],
    [
        10,
        "&pluscir;"
    ],
    [
        0,
        "&plusacir;"
    ],
    [
        0,
        "&simplus;"
    ],
    [
        0,
        "&plusdu;"
    ],
    [
        0,
        "&plussim;"
    ],
    [
        0,
        "&plustwo;"
    ],
    [
        1,
        "&mcomma;"
    ],
    [
        0,
        "&minusdu;"
    ],
    [
        2,
        "&loplus;"
    ],
    [
        0,
        "&roplus;"
    ],
    [
        0,
        "&Cross;"
    ],
    [
        0,
        "&timesd;"
    ],
    [
        0,
        "&timesbar;"
    ],
    [
        1,
        "&smashp;"
    ],
    [
        0,
        "&lotimes;"
    ],
    [
        0,
        "&rotimes;"
    ],
    [
        0,
        "&otimesas;"
    ],
    [
        0,
        "&Otimes;"
    ],
    [
        0,
        "&odiv;"
    ],
    [
        0,
        "&triplus;"
    ],
    [
        0,
        "&triminus;"
    ],
    [
        0,
        "&tritime;"
    ],
    [
        0,
        "&intprod;"
    ],
    [
        2,
        "&amalg;"
    ],
    [
        0,
        "&capdot;"
    ],
    [
        1,
        "&ncup;"
    ],
    [
        0,
        "&ncap;"
    ],
    [
        0,
        "&capand;"
    ],
    [
        0,
        "&cupor;"
    ],
    [
        0,
        "&cupcap;"
    ],
    [
        0,
        "&capcup;"
    ],
    [
        0,
        "&cupbrcap;"
    ],
    [
        0,
        "&capbrcup;"
    ],
    [
        0,
        "&cupcup;"
    ],
    [
        0,
        "&capcap;"
    ],
    [
        0,
        "&ccups;"
    ],
    [
        0,
        "&ccaps;"
    ],
    [
        2,
        "&ccupssm;"
    ],
    [
        2,
        "&And;"
    ],
    [
        0,
        "&Or;"
    ],
    [
        0,
        "&andand;"
    ],
    [
        0,
        "&oror;"
    ],
    [
        0,
        "&orslope;"
    ],
    [
        0,
        "&andslope;"
    ],
    [
        1,
        "&andv;"
    ],
    [
        0,
        "&orv;"
    ],
    [
        0,
        "&andd;"
    ],
    [
        0,
        "&ord;"
    ],
    [
        1,
        "&wedbar;"
    ],
    [
        6,
        "&sdote;"
    ],
    [
        3,
        "&simdot;"
    ],
    [
        2,
        {
            v: "&congdot;",
            n: 824,
            o: "&ncongdot;"
        }
    ],
    [
        0,
        "&easter;"
    ],
    [
        0,
        "&apacir;"
    ],
    [
        0,
        {
            v: "&apE;",
            n: 824,
            o: "&napE;"
        }
    ],
    [
        0,
        "&eplus;"
    ],
    [
        0,
        "&pluse;"
    ],
    [
        0,
        "&Esim;"
    ],
    [
        0,
        "&Colone;"
    ],
    [
        0,
        "&Equal;"
    ],
    [
        1,
        "&ddotseq;"
    ],
    [
        0,
        "&equivDD;"
    ],
    [
        0,
        "&ltcir;"
    ],
    [
        0,
        "&gtcir;"
    ],
    [
        0,
        "&ltquest;"
    ],
    [
        0,
        "&gtquest;"
    ],
    [
        0,
        {
            v: "&leqslant;",
            n: 824,
            o: "&nleqslant;"
        }
    ],
    [
        0,
        {
            v: "&geqslant;",
            n: 824,
            o: "&ngeqslant;"
        }
    ],
    [
        0,
        "&lesdot;"
    ],
    [
        0,
        "&gesdot;"
    ],
    [
        0,
        "&lesdoto;"
    ],
    [
        0,
        "&gesdoto;"
    ],
    [
        0,
        "&lesdotor;"
    ],
    [
        0,
        "&gesdotol;"
    ],
    [
        0,
        "&lap;"
    ],
    [
        0,
        "&gap;"
    ],
    [
        0,
        "&lne;"
    ],
    [
        0,
        "&gne;"
    ],
    [
        0,
        "&lnap;"
    ],
    [
        0,
        "&gnap;"
    ],
    [
        0,
        "&lEg;"
    ],
    [
        0,
        "&gEl;"
    ],
    [
        0,
        "&lsime;"
    ],
    [
        0,
        "&gsime;"
    ],
    [
        0,
        "&lsimg;"
    ],
    [
        0,
        "&gsiml;"
    ],
    [
        0,
        "&lgE;"
    ],
    [
        0,
        "&glE;"
    ],
    [
        0,
        "&lesges;"
    ],
    [
        0,
        "&gesles;"
    ],
    [
        0,
        "&els;"
    ],
    [
        0,
        "&egs;"
    ],
    [
        0,
        "&elsdot;"
    ],
    [
        0,
        "&egsdot;"
    ],
    [
        0,
        "&el;"
    ],
    [
        0,
        "&eg;"
    ],
    [
        2,
        "&siml;"
    ],
    [
        0,
        "&simg;"
    ],
    [
        0,
        "&simlE;"
    ],
    [
        0,
        "&simgE;"
    ],
    [
        0,
        {
            v: "&LessLess;",
            n: 824,
            o: "&NotNestedLessLess;"
        }
    ],
    [
        0,
        {
            v: "&GreaterGreater;",
            n: 824,
            o: "&NotNestedGreaterGreater;"
        }
    ],
    [
        1,
        "&glj;"
    ],
    [
        0,
        "&gla;"
    ],
    [
        0,
        "&ltcc;"
    ],
    [
        0,
        "&gtcc;"
    ],
    [
        0,
        "&lescc;"
    ],
    [
        0,
        "&gescc;"
    ],
    [
        0,
        "&smt;"
    ],
    [
        0,
        "&lat;"
    ],
    [
        0,
        {
            v: "&smte;",
            n: 65024,
            o: "&smtes;"
        }
    ],
    [
        0,
        {
            v: "&late;",
            n: 65024,
            o: "&lates;"
        }
    ],
    [
        0,
        "&bumpE;"
    ],
    [
        0,
        {
            v: "&PrecedesEqual;",
            n: 824,
            o: "&NotPrecedesEqual;"
        }
    ],
    [
        0,
        {
            v: "&sce;",
            n: 824,
            o: "&NotSucceedsEqual;"
        }
    ],
    [
        2,
        "&prE;"
    ],
    [
        0,
        "&scE;"
    ],
    [
        0,
        "&precneqq;"
    ],
    [
        0,
        "&scnE;"
    ],
    [
        0,
        "&prap;"
    ],
    [
        0,
        "&scap;"
    ],
    [
        0,
        "&precnapprox;"
    ],
    [
        0,
        "&scnap;"
    ],
    [
        0,
        "&Pr;"
    ],
    [
        0,
        "&Sc;"
    ],
    [
        0,
        "&subdot;"
    ],
    [
        0,
        "&supdot;"
    ],
    [
        0,
        "&subplus;"
    ],
    [
        0,
        "&supplus;"
    ],
    [
        0,
        "&submult;"
    ],
    [
        0,
        "&supmult;"
    ],
    [
        0,
        "&subedot;"
    ],
    [
        0,
        "&supedot;"
    ],
    [
        0,
        {
            v: "&subE;",
            n: 824,
            o: "&nsubE;"
        }
    ],
    [
        0,
        {
            v: "&supE;",
            n: 824,
            o: "&nsupE;"
        }
    ],
    [
        0,
        "&subsim;"
    ],
    [
        0,
        "&supsim;"
    ],
    [
        2,
        {
            v: "&subnE;",
            n: 65024,
            o: "&varsubsetneqq;"
        }
    ],
    [
        0,
        {
            v: "&supnE;",
            n: 65024,
            o: "&varsupsetneqq;"
        }
    ],
    [
        2,
        "&csub;"
    ],
    [
        0,
        "&csup;"
    ],
    [
        0,
        "&csube;"
    ],
    [
        0,
        "&csupe;"
    ],
    [
        0,
        "&subsup;"
    ],
    [
        0,
        "&supsub;"
    ],
    [
        0,
        "&subsub;"
    ],
    [
        0,
        "&supsup;"
    ],
    [
        0,
        "&suphsub;"
    ],
    [
        0,
        "&supdsub;"
    ],
    [
        0,
        "&forkv;"
    ],
    [
        0,
        "&topfork;"
    ],
    [
        0,
        "&mlcp;"
    ],
    [
        8,
        "&Dashv;"
    ],
    [
        1,
        "&Vdashl;"
    ],
    [
        0,
        "&Barv;"
    ],
    [
        0,
        "&vBar;"
    ],
    [
        0,
        "&vBarv;"
    ],
    [
        1,
        "&Vbar;"
    ],
    [
        0,
        "&Not;"
    ],
    [
        0,
        "&bNot;"
    ],
    [
        0,
        "&rnmid;"
    ],
    [
        0,
        "&cirmid;"
    ],
    [
        0,
        "&midcir;"
    ],
    [
        0,
        "&topcir;"
    ],
    [
        0,
        "&nhpar;"
    ],
    [
        0,
        "&parsim;"
    ],
    [
        9,
        {
            v: "&parsl;",
            n: 8421,
            o: "&nparsl;"
        }
    ],
    [
        44343,
        {
            n: new Map(/* #__PURE__ */ restoreDiff([
                [
                    56476,
                    "&Ascr;"
                ],
                [
                    1,
                    "&Cscr;"
                ],
                [
                    0,
                    "&Dscr;"
                ],
                [
                    2,
                    "&Gscr;"
                ],
                [
                    2,
                    "&Jscr;"
                ],
                [
                    0,
                    "&Kscr;"
                ],
                [
                    2,
                    "&Nscr;"
                ],
                [
                    0,
                    "&Oscr;"
                ],
                [
                    0,
                    "&Pscr;"
                ],
                [
                    0,
                    "&Qscr;"
                ],
                [
                    1,
                    "&Sscr;"
                ],
                [
                    0,
                    "&Tscr;"
                ],
                [
                    0,
                    "&Uscr;"
                ],
                [
                    0,
                    "&Vscr;"
                ],
                [
                    0,
                    "&Wscr;"
                ],
                [
                    0,
                    "&Xscr;"
                ],
                [
                    0,
                    "&Yscr;"
                ],
                [
                    0,
                    "&Zscr;"
                ],
                [
                    0,
                    "&ascr;"
                ],
                [
                    0,
                    "&bscr;"
                ],
                [
                    0,
                    "&cscr;"
                ],
                [
                    0,
                    "&dscr;"
                ],
                [
                    1,
                    "&fscr;"
                ],
                [
                    1,
                    "&hscr;"
                ],
                [
                    0,
                    "&iscr;"
                ],
                [
                    0,
                    "&jscr;"
                ],
                [
                    0,
                    "&kscr;"
                ],
                [
                    0,
                    "&lscr;"
                ],
                [
                    0,
                    "&mscr;"
                ],
                [
                    0,
                    "&nscr;"
                ],
                [
                    1,
                    "&pscr;"
                ],
                [
                    0,
                    "&qscr;"
                ],
                [
                    0,
                    "&rscr;"
                ],
                [
                    0,
                    "&sscr;"
                ],
                [
                    0,
                    "&tscr;"
                ],
                [
                    0,
                    "&uscr;"
                ],
                [
                    0,
                    "&vscr;"
                ],
                [
                    0,
                    "&wscr;"
                ],
                [
                    0,
                    "&xscr;"
                ],
                [
                    0,
                    "&yscr;"
                ],
                [
                    0,
                    "&zscr;"
                ],
                [
                    52,
                    "&Afr;"
                ],
                [
                    0,
                    "&Bfr;"
                ],
                [
                    1,
                    "&Dfr;"
                ],
                [
                    0,
                    "&Efr;"
                ],
                [
                    0,
                    "&Ffr;"
                ],
                [
                    0,
                    "&Gfr;"
                ],
                [
                    2,
                    "&Jfr;"
                ],
                [
                    0,
                    "&Kfr;"
                ],
                [
                    0,
                    "&Lfr;"
                ],
                [
                    0,
                    "&Mfr;"
                ],
                [
                    0,
                    "&Nfr;"
                ],
                [
                    0,
                    "&Ofr;"
                ],
                [
                    0,
                    "&Pfr;"
                ],
                [
                    0,
                    "&Qfr;"
                ],
                [
                    1,
                    "&Sfr;"
                ],
                [
                    0,
                    "&Tfr;"
                ],
                [
                    0,
                    "&Ufr;"
                ],
                [
                    0,
                    "&Vfr;"
                ],
                [
                    0,
                    "&Wfr;"
                ],
                [
                    0,
                    "&Xfr;"
                ],
                [
                    0,
                    "&Yfr;"
                ],
                [
                    1,
                    "&afr;"
                ],
                [
                    0,
                    "&bfr;"
                ],
                [
                    0,
                    "&cfr;"
                ],
                [
                    0,
                    "&dfr;"
                ],
                [
                    0,
                    "&efr;"
                ],
                [
                    0,
                    "&ffr;"
                ],
                [
                    0,
                    "&gfr;"
                ],
                [
                    0,
                    "&hfr;"
                ],
                [
                    0,
                    "&ifr;"
                ],
                [
                    0,
                    "&jfr;"
                ],
                [
                    0,
                    "&kfr;"
                ],
                [
                    0,
                    "&lfr;"
                ],
                [
                    0,
                    "&mfr;"
                ],
                [
                    0,
                    "&nfr;"
                ],
                [
                    0,
                    "&ofr;"
                ],
                [
                    0,
                    "&pfr;"
                ],
                [
                    0,
                    "&qfr;"
                ],
                [
                    0,
                    "&rfr;"
                ],
                [
                    0,
                    "&sfr;"
                ],
                [
                    0,
                    "&tfr;"
                ],
                [
                    0,
                    "&ufr;"
                ],
                [
                    0,
                    "&vfr;"
                ],
                [
                    0,
                    "&wfr;"
                ],
                [
                    0,
                    "&xfr;"
                ],
                [
                    0,
                    "&yfr;"
                ],
                [
                    0,
                    "&zfr;"
                ],
                [
                    0,
                    "&Aopf;"
                ],
                [
                    0,
                    "&Bopf;"
                ],
                [
                    1,
                    "&Dopf;"
                ],
                [
                    0,
                    "&Eopf;"
                ],
                [
                    0,
                    "&Fopf;"
                ],
                [
                    0,
                    "&Gopf;"
                ],
                [
                    1,
                    "&Iopf;"
                ],
                [
                    0,
                    "&Jopf;"
                ],
                [
                    0,
                    "&Kopf;"
                ],
                [
                    0,
                    "&Lopf;"
                ],
                [
                    0,
                    "&Mopf;"
                ],
                [
                    1,
                    "&Oopf;"
                ],
                [
                    3,
                    "&Sopf;"
                ],
                [
                    0,
                    "&Topf;"
                ],
                [
                    0,
                    "&Uopf;"
                ],
                [
                    0,
                    "&Vopf;"
                ],
                [
                    0,
                    "&Wopf;"
                ],
                [
                    0,
                    "&Xopf;"
                ],
                [
                    0,
                    "&Yopf;"
                ],
                [
                    1,
                    "&aopf;"
                ],
                [
                    0,
                    "&bopf;"
                ],
                [
                    0,
                    "&copf;"
                ],
                [
                    0,
                    "&dopf;"
                ],
                [
                    0,
                    "&eopf;"
                ],
                [
                    0,
                    "&fopf;"
                ],
                [
                    0,
                    "&gopf;"
                ],
                [
                    0,
                    "&hopf;"
                ],
                [
                    0,
                    "&iopf;"
                ],
                [
                    0,
                    "&jopf;"
                ],
                [
                    0,
                    "&kopf;"
                ],
                [
                    0,
                    "&lopf;"
                ],
                [
                    0,
                    "&mopf;"
                ],
                [
                    0,
                    "&nopf;"
                ],
                [
                    0,
                    "&oopf;"
                ],
                [
                    0,
                    "&popf;"
                ],
                [
                    0,
                    "&qopf;"
                ],
                [
                    0,
                    "&ropf;"
                ],
                [
                    0,
                    "&sopf;"
                ],
                [
                    0,
                    "&topf;"
                ],
                [
                    0,
                    "&uopf;"
                ],
                [
                    0,
                    "&vopf;"
                ],
                [
                    0,
                    "&wopf;"
                ],
                [
                    0,
                    "&xopf;"
                ],
                [
                    0,
                    "&yopf;"
                ],
                [
                    0,
                    "&zopf;"
                ]
            ]))
        }
    ],
    [
        8906,
        "&fflig;"
    ],
    [
        0,
        "&filig;"
    ],
    [
        0,
        "&fllig;"
    ],
    [
        0,
        "&ffilig;"
    ],
    [
        0,
        "&ffllig;"
    ]
]));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cegbJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "xmlReplacer", ()=>xmlReplacer);
parcelHelpers.export(exports, "getCodePoint", ()=>getCodePoint);
/**
 * Encodes all non-ASCII characters, as well as characters not valid in XML
 * documents using XML entities.
 *
 * If a character has no equivalent entity, a
 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
 */ parcelHelpers.export(exports, "encodeXML", ()=>encodeXML);
parcelHelpers.export(exports, "escape", ()=>escape);
parcelHelpers.export(exports, "escapeUTF8", ()=>escapeUTF8);
parcelHelpers.export(exports, "escapeAttribute", ()=>escapeAttribute);
parcelHelpers.export(exports, "escapeText", ()=>escapeText);
const xmlReplacer = /["&'<>$\x80-\uFFFF]/g;
const xmlCodeMap = new Map([
    [
        34,
        "&quot;"
    ],
    [
        38,
        "&amp;"
    ],
    [
        39,
        "&apos;"
    ],
    [
        60,
        "&lt;"
    ],
    [
        62,
        "&gt;"
    ]
]);
const getCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
String.prototype.codePointAt != null ? (str, index)=>str.codePointAt(index) : (c, index)=>(c.charCodeAt(index) & 0xfc00) === 0xd800 ? (c.charCodeAt(index) - 0xd800) * 0x400 + c.charCodeAt(index + 1) - 0xdc00 + 0x10000 : c.charCodeAt(index);
function encodeXML(str) {
    let ret = "";
    let lastIdx = 0;
    let match;
    while((match = xmlReplacer.exec(str)) !== null){
        const i = match.index;
        const char = str.charCodeAt(i);
        const next = xmlCodeMap.get(char);
        if (next !== undefined) {
            ret += str.substring(lastIdx, i) + next;
            lastIdx = i + 1;
        } else {
            ret += `${str.substring(lastIdx, i)}&#x${getCodePoint(str, i).toString(16)};`;
            // Increase by 1 if we have a surrogate pair
            lastIdx = xmlReplacer.lastIndex += Number((char & 0xfc00) === 0xd800);
        }
    }
    return ret + str.substr(lastIdx);
}
const escape = encodeXML;
/**
 * Creates a function that escapes all characters matched by the given regular
 * expression using the given map of characters to escape to their entities.
 *
 * @param regex Regular expression to match characters to escape.
 * @param map Map of characters to escape to their entities.
 *
 * @returns Function that escapes all characters matched by the given regular
 * expression using the given map of characters to escape to their entities.
 */ function getEscaper(regex, map) {
    return function escape(data) {
        let match;
        let lastIdx = 0;
        let result = "";
        while(match = regex.exec(data)){
            if (lastIdx !== match.index) result += data.substring(lastIdx, match.index);
            // We know that this character will be in the map.
            result += map.get(match[0].charCodeAt(0));
            // Every match will be of length 1
            lastIdx = match.index + 1;
        }
        return result + data.substring(lastIdx);
    };
}
const escapeUTF8 = getEscaper(/[&<>'"]/g, xmlCodeMap);
const escapeAttribute = getEscaper(/["&\u00A0]/g, new Map([
    [
        34,
        "&quot;"
    ],
    [
        38,
        "&amp;"
    ],
    [
        160,
        "&nbsp;"
    ]
]));
const escapeText = getEscaper(/[&<>\u00A0]/g, new Map([
    [
        38,
        "&amp;"
    ],
    [
        60,
        "&lt;"
    ],
    [
        62,
        "&gt;"
    ],
    [
        160,
        "&nbsp;"
    ]
]));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Nvvci":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "elementNames", ()=>elementNames);
parcelHelpers.export(exports, "attributeNames", ()=>attributeNames);
const elementNames = new Map([
    "altGlyph",
    "altGlyphDef",
    "altGlyphItem",
    "animateColor",
    "animateMotion",
    "animateTransform",
    "clipPath",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "foreignObject",
    "glyphRef",
    "linearGradient",
    "radialGradient",
    "textPath"
].map((val)=>[
        val.toLowerCase(),
        val
    ]));
const attributeNames = new Map([
    "definitionURL",
    "attributeName",
    "attributeType",
    "baseFrequency",
    "baseProfile",
    "calcMode",
    "clipPathUnits",
    "diffuseConstant",
    "edgeMode",
    "filterUnits",
    "glyphRef",
    "gradientTransform",
    "gradientUnits",
    "kernelMatrix",
    "kernelUnitLength",
    "keyPoints",
    "keySplines",
    "keyTimes",
    "lengthAdjust",
    "limitingConeAngle",
    "markerHeight",
    "markerUnits",
    "markerWidth",
    "maskContentUnits",
    "maskUnits",
    "numOctaves",
    "pathLength",
    "patternContentUnits",
    "patternTransform",
    "patternUnits",
    "pointsAtX",
    "pointsAtY",
    "pointsAtZ",
    "preserveAlpha",
    "preserveAspectRatio",
    "primitiveUnits",
    "refX",
    "refY",
    "repeatCount",
    "repeatDur",
    "requiredExtensions",
    "requiredFeatures",
    "specularConstant",
    "specularExponent",
    "spreadMethod",
    "startOffset",
    "stdDeviation",
    "stitchTiles",
    "surfaceScale",
    "systemLanguage",
    "tableValues",
    "targetX",
    "targetY",
    "textLength",
    "viewBox",
    "viewTarget",
    "xChannelSelector",
    "yChannelSelector",
    "zoomAndPan"
].map((val)=>[
        val.toLowerCase(),
        val
    ]));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j58J6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Get a node's children.
 *
 * @category Traversal
 * @param elem Node to get the children of.
 * @returns `elem`'s children, or an empty array.
 */ parcelHelpers.export(exports, "getChildren", ()=>getChildren);
/**
 * Get a node's parent.
 *
 * @category Traversal
 * @param elem Node to get the parent of.
 * @returns `elem`'s parent node, or `null` if `elem` is a root node.
 */ parcelHelpers.export(exports, "getParent", ()=>getParent);
/**
 * Gets an elements siblings, including the element itself.
 *
 * Attempts to get the children through the element's parent first. If we don't
 * have a parent (the element is a root node), we walk the element's `prev` &
 * `next` to get all remaining nodes.
 *
 * @category Traversal
 * @param elem Element to get the siblings of.
 * @returns `elem`'s siblings, including `elem`.
 */ parcelHelpers.export(exports, "getSiblings", ()=>getSiblings);
/**
 * Gets an attribute from an element.
 *
 * @category Traversal
 * @param elem Element to check.
 * @param name Attribute name to retrieve.
 * @returns The element's attribute value, or `undefined`.
 */ parcelHelpers.export(exports, "getAttributeValue", ()=>getAttributeValue);
/**
 * Checks whether an element has an attribute.
 *
 * @category Traversal
 * @param elem Element to check.
 * @param name Attribute name to look for.
 * @returns Returns whether `elem` has the attribute `name`.
 */ parcelHelpers.export(exports, "hasAttrib", ()=>hasAttrib);
/**
 * Get the tag name of an element.
 *
 * @category Traversal
 * @param elem The element to get the name for.
 * @returns The tag name of `elem`.
 */ parcelHelpers.export(exports, "getName", ()=>getName);
/**
 * Returns the next element sibling of a node.
 *
 * @category Traversal
 * @param elem The element to get the next sibling of.
 * @returns `elem`'s next sibling that is a tag, or `null` if there is no next
 * sibling.
 */ parcelHelpers.export(exports, "nextElementSibling", ()=>nextElementSibling);
/**
 * Returns the previous element sibling of a node.
 *
 * @category Traversal
 * @param elem The element to get the previous sibling of.
 * @returns `elem`'s previous sibling that is a tag, or `null` if there is no
 * previous sibling.
 */ parcelHelpers.export(exports, "prevElementSibling", ()=>prevElementSibling);
var _domhandler = require("domhandler");
function getChildren(elem) {
    return (0, _domhandler.hasChildren)(elem) ? elem.children : [];
}
function getParent(elem) {
    return elem.parent || null;
}
function getSiblings(elem) {
    const parent = getParent(elem);
    if (parent != null) return getChildren(parent);
    const siblings = [
        elem
    ];
    let { prev, next } = elem;
    while(prev != null){
        siblings.unshift(prev);
        ({ prev } = prev);
    }
    while(next != null){
        siblings.push(next);
        ({ next } = next);
    }
    return siblings;
}
function getAttributeValue(elem, name) {
    var _a;
    return (_a = elem.attribs) === null || _a === void 0 ? void 0 : _a[name];
}
function hasAttrib(elem, name) {
    return elem.attribs != null && Object.prototype.hasOwnProperty.call(elem.attribs, name) && elem.attribs[name] != null;
}
function getName(elem) {
    return elem.name;
}
function nextElementSibling(elem) {
    let { next } = elem;
    while(next !== null && !(0, _domhandler.isTag)(next))({ next } = next);
    return next;
}
function prevElementSibling(elem) {
    let { prev } = elem;
    while(prev !== null && !(0, _domhandler.isTag)(prev))({ prev } = prev);
    return prev;
}

},{"domhandler":"5br1X","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"buXkW":[function(require,module,exports) {
/**
 * Remove an element from the dom
 *
 * @category Manipulation
 * @param elem The element to be removed
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "removeElement", ()=>removeElement);
/**
 * Replace an element in the dom
 *
 * @category Manipulation
 * @param elem The element to be replaced
 * @param replacement The element to be added
 */ parcelHelpers.export(exports, "replaceElement", ()=>replaceElement);
/**
 * Append a child to an element.
 *
 * @category Manipulation
 * @param parent The element to append to.
 * @param child The element to be added as a child.
 */ parcelHelpers.export(exports, "appendChild", ()=>appendChild);
/**
 * Append an element after another.
 *
 * @category Manipulation
 * @param elem The element to append after.
 * @param next The element be added.
 */ parcelHelpers.export(exports, "append", ()=>append);
/**
 * Prepend a child to an element.
 *
 * @category Manipulation
 * @param parent The element to prepend before.
 * @param child The element to be added as a child.
 */ parcelHelpers.export(exports, "prependChild", ()=>prependChild);
/**
 * Prepend an element before another.
 *
 * @category Manipulation
 * @param elem The element to prepend before.
 * @param prev The element be added.
 */ parcelHelpers.export(exports, "prepend", ()=>prepend);
function removeElement(elem) {
    if (elem.prev) elem.prev.next = elem.next;
    if (elem.next) elem.next.prev = elem.prev;
    if (elem.parent) {
        const childs = elem.parent.children;
        const childsIndex = childs.lastIndexOf(elem);
        if (childsIndex >= 0) childs.splice(childsIndex, 1);
    }
    elem.next = null;
    elem.prev = null;
    elem.parent = null;
}
function replaceElement(elem, replacement) {
    const prev = replacement.prev = elem.prev;
    if (prev) prev.next = replacement;
    const next = replacement.next = elem.next;
    if (next) next.prev = replacement;
    const parent = replacement.parent = elem.parent;
    if (parent) {
        const childs = parent.children;
        childs[childs.lastIndexOf(elem)] = replacement;
        elem.parent = null;
    }
}
function appendChild(parent, child) {
    removeElement(child);
    child.next = null;
    child.parent = parent;
    if (parent.children.push(child) > 1) {
        const sibling = parent.children[parent.children.length - 2];
        sibling.next = child;
        child.prev = sibling;
    } else child.prev = null;
}
function append(elem, next) {
    removeElement(next);
    const { parent } = elem;
    const currNext = elem.next;
    next.next = currNext;
    next.prev = elem;
    elem.next = next;
    next.parent = parent;
    if (currNext) {
        currNext.prev = next;
        if (parent) {
            const childs = parent.children;
            childs.splice(childs.lastIndexOf(currNext), 0, next);
        }
    } else if (parent) parent.children.push(next);
}
function prependChild(parent, child) {
    removeElement(child);
    child.parent = parent;
    child.prev = null;
    if (parent.children.unshift(child) !== 1) {
        const sibling = parent.children[1];
        sibling.prev = child;
        child.next = sibling;
    } else child.next = null;
}
function prepend(elem, prev) {
    removeElement(prev);
    const { parent } = elem;
    if (parent) {
        const childs = parent.children;
        childs.splice(childs.indexOf(elem), 0, prev);
    }
    if (elem.prev) elem.prev.next = prev;
    prev.parent = parent;
    prev.prev = elem.prev;
    prev.next = elem;
    elem.prev = prev;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jESsd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Search a node and its children for nodes passing a test function. If `node` is not an array, it will be wrapped in one.
 *
 * @category Querying
 * @param test Function to test nodes on.
 * @param node Node to search. Will be included in the result set if it matches.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes passing `test`.
 */ parcelHelpers.export(exports, "filter", ()=>filter);
/**
 * Search an array of nodes and their children for nodes passing a test function.
 *
 * @category Querying
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes passing `test`.
 */ parcelHelpers.export(exports, "find", ()=>find);
/**
 * Finds the first element inside of an array that matches a test function. This is an alias for `Array.prototype.find`.
 *
 * @category Querying
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @returns The first node in the array that passes `test`.
 * @deprecated Use `Array.prototype.find` directly.
 */ parcelHelpers.export(exports, "findOneChild", ()=>findOneChild);
/**
 * Finds one element in a tree that passes a test.
 *
 * @category Querying
 * @param test Function to test nodes on.
 * @param nodes Node or array of nodes to search.
 * @param recurse Also consider child nodes.
 * @returns The first node that passes `test`.
 */ parcelHelpers.export(exports, "findOne", ()=>findOne);
/**
 * Checks if a tree of nodes contains at least one node passing a test.
 *
 * @category Querying
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @returns Whether a tree of nodes contains at least one node passing the test.
 */ parcelHelpers.export(exports, "existsOne", ()=>existsOne);
/**
 * Search an array of nodes and their children for elements passing a test function.
 *
 * Same as `find`, but limited to elements and with less options, leading to reduced complexity.
 *
 * @category Querying
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @returns All nodes passing `test`.
 */ parcelHelpers.export(exports, "findAll", ()=>findAll);
var _domhandler = require("domhandler");
function filter(test, node, recurse = true, limit = Infinity) {
    return find(test, Array.isArray(node) ? node : [
        node
    ], recurse, limit);
}
function find(test, nodes, recurse, limit) {
    const result = [];
    /** Stack of the arrays we are looking at. */ const nodeStack = [
        nodes
    ];
    /** Stack of the indices within the arrays. */ const indexStack = [
        0
    ];
    for(;;){
        // First, check if the current array has any more elements to look at.
        if (indexStack[0] >= nodeStack[0].length) {
            // If we have no more arrays to look at, we are done.
            if (indexStack.length === 1) return result;
            // Otherwise, remove the current array from the stack.
            nodeStack.shift();
            indexStack.shift();
            continue;
        }
        const elem = nodeStack[0][indexStack[0]++];
        if (test(elem)) {
            result.push(elem);
            if (--limit <= 0) return result;
        }
        if (recurse && (0, _domhandler.hasChildren)(elem) && elem.children.length > 0) {
            /*
             * Add the children to the stack. We are depth-first, so this is
             * the next array we look at.
             */ indexStack.unshift(0);
            nodeStack.unshift(elem.children);
        }
    }
}
function findOneChild(test, nodes) {
    return nodes.find(test);
}
function findOne(test, nodes, recurse = true) {
    let elem = null;
    for(let i = 0; i < nodes.length && !elem; i++){
        const node = nodes[i];
        if (!(0, _domhandler.isTag)(node)) continue;
        else if (test(node)) elem = node;
        else if (recurse && node.children.length > 0) elem = findOne(test, node.children, true);
    }
    return elem;
}
function existsOne(test, nodes) {
    return nodes.some((checked)=>(0, _domhandler.isTag)(checked) && (test(checked) || existsOne(test, checked.children)));
}
function findAll(test, nodes) {
    const result = [];
    const nodeStack = [
        nodes
    ];
    const indexStack = [
        0
    ];
    for(;;){
        if (indexStack[0] >= nodeStack[0].length) {
            if (nodeStack.length === 1) return result;
            // Otherwise, remove the current array from the stack.
            nodeStack.shift();
            indexStack.shift();
            continue;
        }
        const elem = nodeStack[0][indexStack[0]++];
        if (!(0, _domhandler.isTag)(elem)) continue;
        if (test(elem)) result.push(elem);
        if (elem.children.length > 0) {
            indexStack.unshift(0);
            nodeStack.unshift(elem.children);
        }
    }
}

},{"domhandler":"5br1X","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"garNU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Checks whether a node matches the description in `options`.
 *
 * @category Legacy Query Functions
 * @param options An object describing nodes to look for.
 * @param node The element to test.
 * @returns Whether the element matches the description in `options`.
 */ parcelHelpers.export(exports, "testElement", ()=>testElement);
/**
 * Returns all nodes that match `options`.
 *
 * @category Legacy Query Functions
 * @param options An object describing nodes to look for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes that match `options`.
 */ parcelHelpers.export(exports, "getElements", ()=>getElements);
/**
 * Returns the node with the supplied ID.
 *
 * @category Legacy Query Functions
 * @param id The unique ID attribute value to look for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @returns The node with the supplied ID.
 */ parcelHelpers.export(exports, "getElementById", ()=>getElementById);
/**
 * Returns all nodes with the supplied `tagName`.
 *
 * @category Legacy Query Functions
 * @param tagName Tag name to search for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes with the supplied `tagName`.
 */ parcelHelpers.export(exports, "getElementsByTagName", ()=>getElementsByTagName);
/**
 * Returns all nodes with the supplied `type`.
 *
 * @category Legacy Query Functions
 * @param type Element type to look for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes with the supplied `type`.
 */ parcelHelpers.export(exports, "getElementsByTagType", ()=>getElementsByTagType);
var _domhandler = require("domhandler");
var _queryingJs = require("./querying.js");
/**
 * A map of functions to check nodes against.
 */ const Checks = {
    tag_name (name) {
        if (typeof name === "function") return (elem)=>(0, _domhandler.isTag)(elem) && name(elem.name);
        else if (name === "*") return 0, _domhandler.isTag;
        return (elem)=>(0, _domhandler.isTag)(elem) && elem.name === name;
    },
    tag_type (type) {
        if (typeof type === "function") return (elem)=>type(elem.type);
        return (elem)=>elem.type === type;
    },
    tag_contains (data) {
        if (typeof data === "function") return (elem)=>(0, _domhandler.isText)(elem) && data(elem.data);
        return (elem)=>(0, _domhandler.isText)(elem) && elem.data === data;
    }
};
/**
 * Returns a function to check whether a node has an attribute with a particular
 * value.
 *
 * @param attrib Attribute to check.
 * @param value Attribute value to look for.
 * @returns A function to check whether the a node has an attribute with a
 *   particular value.
 */ function getAttribCheck(attrib, value) {
    if (typeof value === "function") return (elem)=>(0, _domhandler.isTag)(elem) && value(elem.attribs[attrib]);
    return (elem)=>(0, _domhandler.isTag)(elem) && elem.attribs[attrib] === value;
}
/**
 * Returns a function that returns `true` if either of the input functions
 * returns `true` for a node.
 *
 * @param a First function to combine.
 * @param b Second function to combine.
 * @returns A function taking a node and returning `true` if either of the input
 *   functions returns `true` for the node.
 */ function combineFuncs(a, b) {
    return (elem)=>a(elem) || b(elem);
}
/**
 * Returns a function that executes all checks in `options` and returns `true`
 * if any of them match a node.
 *
 * @param options An object describing nodes to look for.
 * @returns A function that executes all checks in `options` and returns `true`
 *   if any of them match a node.
 */ function compileTest(options) {
    const funcs = Object.keys(options).map((key)=>{
        const value = options[key];
        return Object.prototype.hasOwnProperty.call(Checks, key) ? Checks[key](value) : getAttribCheck(key, value);
    });
    return funcs.length === 0 ? null : funcs.reduce(combineFuncs);
}
function testElement(options, node) {
    const test = compileTest(options);
    return test ? test(node) : true;
}
function getElements(options, nodes, recurse, limit = Infinity) {
    const test = compileTest(options);
    return test ? (0, _queryingJs.filter)(test, nodes, recurse, limit) : [];
}
function getElementById(id, nodes, recurse = true) {
    if (!Array.isArray(nodes)) nodes = [
        nodes
    ];
    return (0, _queryingJs.findOne)(getAttribCheck("id", id), nodes, recurse);
}
function getElementsByTagName(tagName, nodes, recurse = true, limit = Infinity) {
    return (0, _queryingJs.filter)(Checks["tag_name"](tagName), nodes, recurse, limit);
}
function getElementsByTagType(type, nodes, recurse = true, limit = Infinity) {
    return (0, _queryingJs.filter)(Checks["tag_type"](type), nodes, recurse, limit);
}

},{"domhandler":"5br1X","./querying.js":"jESsd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eLrXC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Given an array of nodes, remove any member that is contained by another
 * member.
 *
 * @category Helpers
 * @param nodes Nodes to filter.
 * @returns Remaining nodes that aren't contained by other nodes.
 */ parcelHelpers.export(exports, "removeSubsets", ()=>removeSubsets);
parcelHelpers.export(exports, "DocumentPosition", ()=>DocumentPosition);
/**
 * Compare the position of one node against another node in any other document,
 * returning a bitmask with the values from {@link DocumentPosition}.
 *
 * Document order:
 * > There is an ordering, document order, defined on all the nodes in the
 * > document corresponding to the order in which the first character of the
 * > XML representation of each node occurs in the XML representation of the
 * > document after expansion of general entities. Thus, the document element
 * > node will be the first node. Element nodes occur before their children.
 * > Thus, document order orders element nodes in order of the occurrence of
 * > their start-tag in the XML (after expansion of entities). The attribute
 * > nodes of an element occur after the element and before its children. The
 * > relative order of attribute nodes is implementation-dependent.
 *
 * Source:
 * http://www.w3.org/TR/DOM-Level-3-Core/glossary.html#dt-document-order
 *
 * @category Helpers
 * @param nodeA The first node to use in the comparison
 * @param nodeB The second node to use in the comparison
 * @returns A bitmask describing the input nodes' relative position.
 *
 * See http://dom.spec.whatwg.org/#dom-node-comparedocumentposition for
 * a description of these values.
 */ parcelHelpers.export(exports, "compareDocumentPosition", ()=>compareDocumentPosition);
/**
 * Sort an array of nodes based on their relative position in the document,
 * removing any duplicate nodes. If the array contains nodes that do not belong
 * to the same document, sort order is unspecified.
 *
 * @category Helpers
 * @param nodes Array of DOM nodes.
 * @returns Collection of unique nodes, sorted in document order.
 */ parcelHelpers.export(exports, "uniqueSort", ()=>uniqueSort);
var _domhandler = require("domhandler");
function removeSubsets(nodes) {
    let idx = nodes.length;
    /*
     * Check if each node (or one of its ancestors) is already contained in the
     * array.
     */ while(--idx >= 0){
        const node = nodes[idx];
        /*
         * Remove the node if it is not unique.
         * We are going through the array from the end, so we only
         * have to check nodes that preceed the node under consideration in the array.
         */ if (idx > 0 && nodes.lastIndexOf(node, idx - 1) >= 0) {
            nodes.splice(idx, 1);
            continue;
        }
        for(let ancestor = node.parent; ancestor; ancestor = ancestor.parent)if (nodes.includes(ancestor)) {
            nodes.splice(idx, 1);
            break;
        }
    }
    return nodes;
}
var DocumentPosition;
(function(DocumentPosition) {
    DocumentPosition[DocumentPosition["DISCONNECTED"] = 1] = "DISCONNECTED";
    DocumentPosition[DocumentPosition["PRECEDING"] = 2] = "PRECEDING";
    DocumentPosition[DocumentPosition["FOLLOWING"] = 4] = "FOLLOWING";
    DocumentPosition[DocumentPosition["CONTAINS"] = 8] = "CONTAINS";
    DocumentPosition[DocumentPosition["CONTAINED_BY"] = 16] = "CONTAINED_BY";
})(DocumentPosition || (DocumentPosition = {}));
function compareDocumentPosition(nodeA, nodeB) {
    const aParents = [];
    const bParents = [];
    if (nodeA === nodeB) return 0;
    let current = (0, _domhandler.hasChildren)(nodeA) ? nodeA : nodeA.parent;
    while(current){
        aParents.unshift(current);
        current = current.parent;
    }
    current = (0, _domhandler.hasChildren)(nodeB) ? nodeB : nodeB.parent;
    while(current){
        bParents.unshift(current);
        current = current.parent;
    }
    const maxIdx = Math.min(aParents.length, bParents.length);
    let idx = 0;
    while(idx < maxIdx && aParents[idx] === bParents[idx])idx++;
    if (idx === 0) return DocumentPosition.DISCONNECTED;
    const sharedParent = aParents[idx - 1];
    const siblings = sharedParent.children;
    const aSibling = aParents[idx];
    const bSibling = bParents[idx];
    if (siblings.indexOf(aSibling) > siblings.indexOf(bSibling)) {
        if (sharedParent === nodeB) return DocumentPosition.FOLLOWING | DocumentPosition.CONTAINED_BY;
        return DocumentPosition.FOLLOWING;
    }
    if (sharedParent === nodeA) return DocumentPosition.PRECEDING | DocumentPosition.CONTAINS;
    return DocumentPosition.PRECEDING;
}
function uniqueSort(nodes) {
    nodes = nodes.filter((node, i, arr)=>!arr.includes(node, i + 1));
    nodes.sort((a, b)=>{
        const relative = compareDocumentPosition(a, b);
        if (relative & DocumentPosition.PRECEDING) return -1;
        else if (relative & DocumentPosition.FOLLOWING) return 1;
        return 0;
    });
    return nodes;
}

},{"domhandler":"5br1X","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8B5AV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Get the feed object from the root of a DOM tree.
 *
 * @category Feeds
 * @param doc - The DOM to to extract the feed from.
 * @returns The feed.
 */ parcelHelpers.export(exports, "getFeed", ()=>getFeed);
var _stringifyJs = require("./stringify.js");
var _legacyJs = require("./legacy.js");
function getFeed(doc) {
    const feedRoot = getOneElement(isValidFeed, doc);
    return !feedRoot ? null : feedRoot.name === "feed" ? getAtomFeed(feedRoot) : getRssFeed(feedRoot);
}
/**
 * Parse an Atom feed.
 *
 * @param feedRoot The root of the feed.
 * @returns The parsed feed.
 */ function getAtomFeed(feedRoot) {
    var _a;
    const childs = feedRoot.children;
    const feed = {
        type: "atom",
        items: (0, _legacyJs.getElementsByTagName)("entry", childs).map((item)=>{
            var _a;
            const { children } = item;
            const entry = {
                media: getMediaElements(children)
            };
            addConditionally(entry, "id", "id", children);
            addConditionally(entry, "title", "title", children);
            const href = (_a = getOneElement("link", children)) === null || _a === void 0 ? void 0 : _a.attribs["href"];
            if (href) entry.link = href;
            const description = fetch("summary", children) || fetch("content", children);
            if (description) entry.description = description;
            const pubDate = fetch("updated", children);
            if (pubDate) entry.pubDate = new Date(pubDate);
            return entry;
        })
    };
    addConditionally(feed, "id", "id", childs);
    addConditionally(feed, "title", "title", childs);
    const href = (_a = getOneElement("link", childs)) === null || _a === void 0 ? void 0 : _a.attribs["href"];
    if (href) feed.link = href;
    addConditionally(feed, "description", "subtitle", childs);
    const updated = fetch("updated", childs);
    if (updated) feed.updated = new Date(updated);
    addConditionally(feed, "author", "email", childs, true);
    return feed;
}
/**
 * Parse a RSS feed.
 *
 * @param feedRoot The root of the feed.
 * @returns The parsed feed.
 */ function getRssFeed(feedRoot) {
    var _a, _b;
    const childs = (_b = (_a = getOneElement("channel", feedRoot.children)) === null || _a === void 0 ? void 0 : _a.children) !== null && _b !== void 0 ? _b : [];
    const feed = {
        type: feedRoot.name.substr(0, 3),
        id: "",
        items: (0, _legacyJs.getElementsByTagName)("item", feedRoot.children).map((item)=>{
            const { children } = item;
            const entry = {
                media: getMediaElements(children)
            };
            addConditionally(entry, "id", "guid", children);
            addConditionally(entry, "title", "title", children);
            addConditionally(entry, "link", "link", children);
            addConditionally(entry, "description", "description", children);
            const pubDate = fetch("pubDate", children) || fetch("dc:date", children);
            if (pubDate) entry.pubDate = new Date(pubDate);
            return entry;
        })
    };
    addConditionally(feed, "title", "title", childs);
    addConditionally(feed, "link", "link", childs);
    addConditionally(feed, "description", "description", childs);
    const updated = fetch("lastBuildDate", childs);
    if (updated) feed.updated = new Date(updated);
    addConditionally(feed, "author", "managingEditor", childs, true);
    return feed;
}
const MEDIA_KEYS_STRING = [
    "url",
    "type",
    "lang"
];
const MEDIA_KEYS_INT = [
    "fileSize",
    "bitrate",
    "framerate",
    "samplingrate",
    "channels",
    "duration",
    "height",
    "width"
];
/**
 * Get all media elements of a feed item.
 *
 * @param where Nodes to search in.
 * @returns Media elements.
 */ function getMediaElements(where) {
    return (0, _legacyJs.getElementsByTagName)("media:content", where).map((elem)=>{
        const { attribs } = elem;
        const media = {
            medium: attribs["medium"],
            isDefault: !!attribs["isDefault"]
        };
        for (const attrib of MEDIA_KEYS_STRING)if (attribs[attrib]) media[attrib] = attribs[attrib];
        for (const attrib of MEDIA_KEYS_INT)if (attribs[attrib]) media[attrib] = parseInt(attribs[attrib], 10);
        if (attribs["expression"]) media.expression = attribs["expression"];
        return media;
    });
}
/**
 * Get one element by tag name.
 *
 * @param tagName Tag name to look for
 * @param node Node to search in
 * @returns The element or null
 */ function getOneElement(tagName, node) {
    return (0, _legacyJs.getElementsByTagName)(tagName, node, true, 1)[0];
}
/**
 * Get the text content of an element with a certain tag name.
 *
 * @param tagName Tag name to look for.
 * @param where Node to search in.
 * @param recurse Whether to recurse into child nodes.
 * @returns The text content of the element.
 */ function fetch(tagName, where, recurse = false) {
    return (0, _stringifyJs.textContent)((0, _legacyJs.getElementsByTagName)(tagName, where, recurse, 1)).trim();
}
/**
 * Adds a property to an object if it has a value.
 *
 * @param obj Object to be extended
 * @param prop Property name
 * @param tagName Tag name that contains the conditionally added property
 * @param where Element to search for the property
 * @param recurse Whether to recurse into child nodes.
 */ function addConditionally(obj, prop, tagName, where, recurse = false) {
    const val = fetch(tagName, where, recurse);
    if (val) obj[prop] = val;
}
/**
 * Checks if an element is a feed root node.
 *
 * @param value The name of the element to check.
 * @returns Whether an element is a feed root node.
 */ function isValidFeed(value) {
    return value === "rss" || value === "feed" || value === "rdf:RDF";
}

},{"./stringify.js":"4dZTz","./legacy.js":"garNU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cSCm4":[function(require,module,exports) {
module.exports = {
    trueFunc: function trueFunc() {
        return true;
    },
    falseFunc: function falseFunc() {
        return false;
    }
};

},{}],"9pPvO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Compiles a selector to an executable function.
 *
 * @param selector Selector to compile.
 * @param options Compilation options.
 * @param context Optional context for the selector.
 */ parcelHelpers.export(exports, "compile", ()=>compile);
parcelHelpers.export(exports, "compileUnsafe", ()=>compileUnsafe);
parcelHelpers.export(exports, "compileToken", ()=>compileToken);
var _cssWhat = require("css-what");
var _boolbase = require("boolbase");
var _boolbaseDefault = parcelHelpers.interopDefault(_boolbase);
var _sortJs = require("./sort.js");
var _sortJsDefault = parcelHelpers.interopDefault(_sortJs);
var _generalJs = require("./general.js");
var _subselectsJs = require("./pseudo-selectors/subselects.js");
function compile(selector, options, context) {
    const next = compileUnsafe(selector, options, context);
    return (0, _subselectsJs.ensureIsTag)(next, options.adapter);
}
function compileUnsafe(selector, options, context) {
    const token = typeof selector === "string" ? (0, _cssWhat.parse)(selector) : selector;
    return compileToken(token, options, context);
}
function includesScopePseudo(t) {
    return t.type === (0, _cssWhat.SelectorType).Pseudo && (t.name === "scope" || Array.isArray(t.data) && t.data.some((data)=>data.some(includesScopePseudo)));
}
const DESCENDANT_TOKEN = {
    type: (0, _cssWhat.SelectorType).Descendant
};
const FLEXIBLE_DESCENDANT_TOKEN = {
    type: "_flexibleDescendant"
};
const SCOPE_TOKEN = {
    type: (0, _cssWhat.SelectorType).Pseudo,
    name: "scope",
    data: null
};
/*
 * CSS 4 Spec (Draft): 3.4.1. Absolutizing a Relative Selector
 * http://www.w3.org/TR/selectors4/#absolutizing
 */ function absolutize(token, { adapter }, context) {
    // TODO Use better check if the context is a document
    const hasContext = !!(context === null || context === void 0 ? void 0 : context.every((e)=>{
        const parent = adapter.isTag(e) && adapter.getParent(e);
        return e === (0, _subselectsJs.PLACEHOLDER_ELEMENT) || parent && adapter.isTag(parent);
    }));
    for (const t of token){
        if (t.length > 0 && (0, _sortJs.isTraversal)(t[0]) && t[0].type !== (0, _cssWhat.SelectorType).Descendant) ;
        else if (hasContext && !t.some(includesScopePseudo)) t.unshift(DESCENDANT_TOKEN);
        else continue;
        t.unshift(SCOPE_TOKEN);
    }
}
function compileToken(token, options, context) {
    var _a;
    token.forEach((0, _sortJsDefault.default));
    context = (_a = options.context) !== null && _a !== void 0 ? _a : context;
    const isArrayContext = Array.isArray(context);
    const finalContext = context && (Array.isArray(context) ? context : [
        context
    ]);
    // Check if the selector is relative
    if (options.relativeSelector !== false) absolutize(token, options, finalContext);
    else if (token.some((t)=>t.length > 0 && (0, _sortJs.isTraversal)(t[0]))) throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled");
    let shouldTestNextSiblings = false;
    const query = token.map((rules)=>{
        if (rules.length >= 2) {
            const [first, second] = rules;
            if (first.type !== (0, _cssWhat.SelectorType).Pseudo || first.name !== "scope") ;
            else if (isArrayContext && second.type === (0, _cssWhat.SelectorType).Descendant) rules[1] = FLEXIBLE_DESCENDANT_TOKEN;
            else if (second.type === (0, _cssWhat.SelectorType).Adjacent || second.type === (0, _cssWhat.SelectorType).Sibling) shouldTestNextSiblings = true;
        }
        return compileRules(rules, options, finalContext);
    }).reduce(reduceRules, (0, _boolbaseDefault.default).falseFunc);
    query.shouldTestNextSiblings = shouldTestNextSiblings;
    return query;
}
function compileRules(rules, options, context) {
    var _a;
    return rules.reduce((previous, rule)=>previous === (0, _boolbaseDefault.default).falseFunc ? (0, _boolbaseDefault.default).falseFunc : (0, _generalJs.compileGeneralSelector)(previous, rule, options, context, compileToken), (_a = options.rootFunc) !== null && _a !== void 0 ? _a : (0, _boolbaseDefault.default).trueFunc);
}
function reduceRules(a, b) {
    if (b === (0, _boolbaseDefault.default).falseFunc || a === (0, _boolbaseDefault.default).trueFunc) return a;
    if (a === (0, _boolbaseDefault.default).falseFunc || b === (0, _boolbaseDefault.default).trueFunc) return b;
    return function combine(elem) {
        return a(elem) || b(elem);
    };
}

},{"css-what":"4vhyp","boolbase":"cSCm4","./sort.js":"2Fstw","./general.js":"9LDbc","./pseudo-selectors/subselects.js":"dGwWj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4vhyp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isTraversal", ()=>(0, _parse.isTraversal));
parcelHelpers.export(exports, "parse", ()=>(0, _parse.parse));
parcelHelpers.export(exports, "stringify", ()=>(0, _stringify.stringify));
var _types = require("./types");
parcelHelpers.exportAll(_types, exports);
var _parse = require("./parse");
var _stringify = require("./stringify");

},{"./types":"eLCmo","./parse":"hvTal","./stringify":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eLCmo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SelectorType", ()=>SelectorType);
parcelHelpers.export(exports, "IgnoreCaseMode", ()=>IgnoreCaseMode);
parcelHelpers.export(exports, "AttributeAction", ()=>AttributeAction);
var SelectorType;
(function(SelectorType) {
    SelectorType["Attribute"] = "attribute";
    SelectorType["Pseudo"] = "pseudo";
    SelectorType["PseudoElement"] = "pseudo-element";
    SelectorType["Tag"] = "tag";
    SelectorType["Universal"] = "universal";
    // Traversals
    SelectorType["Adjacent"] = "adjacent";
    SelectorType["Child"] = "child";
    SelectorType["Descendant"] = "descendant";
    SelectorType["Parent"] = "parent";
    SelectorType["Sibling"] = "sibling";
    SelectorType["ColumnCombinator"] = "column-combinator";
})(SelectorType || (SelectorType = {}));
const IgnoreCaseMode = {
    Unknown: null,
    QuirksMode: "quirks",
    IgnoreCase: true,
    CaseSensitive: false
};
var AttributeAction;
(function(AttributeAction) {
    AttributeAction["Any"] = "any";
    AttributeAction["Element"] = "element";
    AttributeAction["End"] = "end";
    AttributeAction["Equals"] = "equals";
    AttributeAction["Exists"] = "exists";
    AttributeAction["Hyphen"] = "hyphen";
    AttributeAction["Not"] = "not";
    AttributeAction["Start"] = "start";
})(AttributeAction || (AttributeAction = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hvTal":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Checks whether a specific selector is a traversal.
 * This is useful eg. in swapping the order of elements that
 * are not traversals.
 *
 * @param selector Selector to check.
 */ parcelHelpers.export(exports, "isTraversal", ()=>isTraversal);
/**
 * Parses `selector`, optionally with the passed `options`.
 *
 * @param selector Selector to parse.
 * @param options Options for parsing.
 * @returns Returns a two-dimensional array.
 * The first dimension represents selectors separated by commas (eg. `sub1, sub2`),
 * the second contains the relevant tokens for that selector.
 */ parcelHelpers.export(exports, "parse", ()=>parse);
var _types = require("./types");
const reName = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/;
const reEscape = /\\([\da-f]{1,6}\s?|(\s)|.)/gi;
const actionTypes = new Map([
    [
        126 /* Tilde */ ,
        (0, _types.AttributeAction).Element
    ],
    [
        94 /* Circumflex */ ,
        (0, _types.AttributeAction).Start
    ],
    [
        36 /* Dollar */ ,
        (0, _types.AttributeAction).End
    ],
    [
        42 /* Asterisk */ ,
        (0, _types.AttributeAction).Any
    ],
    [
        33 /* ExclamationMark */ ,
        (0, _types.AttributeAction).Not
    ],
    [
        124 /* Pipe */ ,
        (0, _types.AttributeAction).Hyphen
    ]
]);
// Pseudos, whose data property is parsed as well.
const unpackPseudos = new Set([
    "has",
    "not",
    "matches",
    "is",
    "where",
    "host",
    "host-context"
]);
function isTraversal(selector) {
    switch(selector.type){
        case (0, _types.SelectorType).Adjacent:
        case (0, _types.SelectorType).Child:
        case (0, _types.SelectorType).Descendant:
        case (0, _types.SelectorType).Parent:
        case (0, _types.SelectorType).Sibling:
        case (0, _types.SelectorType).ColumnCombinator:
            return true;
        default:
            return false;
    }
}
const stripQuotesFromPseudos = new Set([
    "contains",
    "icontains"
]);
// Unescape function taken from https://github.com/jquery/sizzle/blob/master/src/sizzle.js#L152
function funescape(_, escaped, escapedWhitespace) {
    const high = parseInt(escaped, 16) - 0x10000;
    // NaN means non-codepoint
    return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 0x10000) : String.fromCharCode(high >> 10 | 0xd800, high & 0x3ff | 0xdc00);
}
function unescapeCSS(str) {
    return str.replace(reEscape, funescape);
}
function isQuote(c) {
    return c === 39 /* SingleQuote */  || c === 34 /* DoubleQuote */ ;
}
function isWhitespace(c) {
    return c === 32 /* Space */  || c === 9 /* Tab */  || c === 10 /* NewLine */  || c === 12 /* FormFeed */  || c === 13 /* CarriageReturn */ ;
}
function parse(selector) {
    const subselects = [];
    const endIndex = parseSelector(subselects, `${selector}`, 0);
    if (endIndex < selector.length) throw new Error(`Unmatched selector: ${selector.slice(endIndex)}`);
    return subselects;
}
function parseSelector(subselects, selector, selectorIndex) {
    let tokens = [];
    function getName(offset) {
        const match = selector.slice(selectorIndex + offset).match(reName);
        if (!match) throw new Error(`Expected name, found ${selector.slice(selectorIndex)}`);
        const [name] = match;
        selectorIndex += offset + name.length;
        return unescapeCSS(name);
    }
    function stripWhitespace(offset) {
        selectorIndex += offset;
        while(selectorIndex < selector.length && isWhitespace(selector.charCodeAt(selectorIndex)))selectorIndex++;
    }
    function readValueWithParenthesis() {
        selectorIndex += 1;
        const start = selectorIndex;
        let counter = 1;
        for(; counter > 0 && selectorIndex < selector.length; selectorIndex++){
            if (selector.charCodeAt(selectorIndex) === 40 /* LeftParenthesis */  && !isEscaped(selectorIndex)) counter++;
            else if (selector.charCodeAt(selectorIndex) === 41 /* RightParenthesis */  && !isEscaped(selectorIndex)) counter--;
        }
        if (counter) throw new Error("Parenthesis not matched");
        return unescapeCSS(selector.slice(start, selectorIndex - 1));
    }
    function isEscaped(pos) {
        let slashCount = 0;
        while(selector.charCodeAt(--pos) === 92 /* BackSlash */ )slashCount++;
        return (slashCount & 1) === 1;
    }
    function ensureNotTraversal() {
        if (tokens.length > 0 && isTraversal(tokens[tokens.length - 1])) throw new Error("Did not expect successive traversals.");
    }
    function addTraversal(type) {
        if (tokens.length > 0 && tokens[tokens.length - 1].type === (0, _types.SelectorType).Descendant) {
            tokens[tokens.length - 1].type = type;
            return;
        }
        ensureNotTraversal();
        tokens.push({
            type
        });
    }
    function addSpecialAttribute(name, action) {
        tokens.push({
            type: (0, _types.SelectorType).Attribute,
            name,
            action,
            value: getName(1),
            namespace: null,
            ignoreCase: "quirks"
        });
    }
    /**
     * We have finished parsing the current part of the selector.
     *
     * Remove descendant tokens at the end if they exist,
     * and return the last index, so that parsing can be
     * picked up from here.
     */ function finalizeSubselector() {
        if (tokens.length && tokens[tokens.length - 1].type === (0, _types.SelectorType).Descendant) tokens.pop();
        if (tokens.length === 0) throw new Error("Empty sub-selector");
        subselects.push(tokens);
    }
    stripWhitespace(0);
    if (selector.length === selectorIndex) return selectorIndex;
    loop: while(selectorIndex < selector.length){
        const firstChar = selector.charCodeAt(selectorIndex);
        switch(firstChar){
            // Whitespace
            case 32 /* Space */ :
            case 9 /* Tab */ :
            case 10 /* NewLine */ :
            case 12 /* FormFeed */ :
            case 13 /* CarriageReturn */ :
                if (tokens.length === 0 || tokens[0].type !== (0, _types.SelectorType).Descendant) {
                    ensureNotTraversal();
                    tokens.push({
                        type: (0, _types.SelectorType).Descendant
                    });
                }
                stripWhitespace(1);
                break;
            // Traversals
            case 62 /* GreaterThan */ :
                addTraversal((0, _types.SelectorType).Child);
                stripWhitespace(1);
                break;
            case 60 /* LessThan */ :
                addTraversal((0, _types.SelectorType).Parent);
                stripWhitespace(1);
                break;
            case 126 /* Tilde */ :
                addTraversal((0, _types.SelectorType).Sibling);
                stripWhitespace(1);
                break;
            case 43 /* Plus */ :
                addTraversal((0, _types.SelectorType).Adjacent);
                stripWhitespace(1);
                break;
            // Special attribute selectors: .class, #id
            case 46 /* Period */ :
                addSpecialAttribute("class", (0, _types.AttributeAction).Element);
                break;
            case 35 /* Hash */ :
                addSpecialAttribute("id", (0, _types.AttributeAction).Equals);
                break;
            case 91 /* LeftSquareBracket */ :
                {
                    stripWhitespace(1);
                    // Determine attribute name and namespace
                    let name;
                    let namespace = null;
                    if (selector.charCodeAt(selectorIndex) === 124 /* Pipe */ ) // Equivalent to no namespace
                    name = getName(1);
                    else if (selector.startsWith("*|", selectorIndex)) {
                        namespace = "*";
                        name = getName(2);
                    } else {
                        name = getName(0);
                        if (selector.charCodeAt(selectorIndex) === 124 /* Pipe */  && selector.charCodeAt(selectorIndex + 1) !== 61 /* Equal */ ) {
                            namespace = name;
                            name = getName(1);
                        }
                    }
                    stripWhitespace(0);
                    // Determine comparison operation
                    let action = (0, _types.AttributeAction).Exists;
                    const possibleAction = actionTypes.get(selector.charCodeAt(selectorIndex));
                    if (possibleAction) {
                        action = possibleAction;
                        if (selector.charCodeAt(selectorIndex + 1) !== 61 /* Equal */ ) throw new Error("Expected `=`");
                        stripWhitespace(2);
                    } else if (selector.charCodeAt(selectorIndex) === 61 /* Equal */ ) {
                        action = (0, _types.AttributeAction).Equals;
                        stripWhitespace(1);
                    }
                    // Determine value
                    let value = "";
                    let ignoreCase = null;
                    if (action !== "exists") {
                        if (isQuote(selector.charCodeAt(selectorIndex))) {
                            const quote = selector.charCodeAt(selectorIndex);
                            let sectionEnd = selectorIndex + 1;
                            while(sectionEnd < selector.length && (selector.charCodeAt(sectionEnd) !== quote || isEscaped(sectionEnd)))sectionEnd += 1;
                            if (selector.charCodeAt(sectionEnd) !== quote) throw new Error("Attribute value didn't end");
                            value = unescapeCSS(selector.slice(selectorIndex + 1, sectionEnd));
                            selectorIndex = sectionEnd + 1;
                        } else {
                            const valueStart = selectorIndex;
                            while(selectorIndex < selector.length && (!isWhitespace(selector.charCodeAt(selectorIndex)) && selector.charCodeAt(selectorIndex) !== 93 /* RightSquareBracket */  || isEscaped(selectorIndex)))selectorIndex += 1;
                            value = unescapeCSS(selector.slice(valueStart, selectorIndex));
                        }
                        stripWhitespace(0);
                        // See if we have a force ignore flag
                        const forceIgnore = selector.charCodeAt(selectorIndex) | 0x20;
                        // If the forceIgnore flag is set (either `i` or `s`), use that value
                        if (forceIgnore === 115 /* LowerS */ ) {
                            ignoreCase = false;
                            stripWhitespace(1);
                        } else if (forceIgnore === 105 /* LowerI */ ) {
                            ignoreCase = true;
                            stripWhitespace(1);
                        }
                    }
                    if (selector.charCodeAt(selectorIndex) !== 93 /* RightSquareBracket */ ) throw new Error("Attribute selector didn't terminate");
                    selectorIndex += 1;
                    const attributeSelector = {
                        type: (0, _types.SelectorType).Attribute,
                        name,
                        action,
                        value,
                        namespace,
                        ignoreCase
                    };
                    tokens.push(attributeSelector);
                    break;
                }
            case 58 /* Colon */ :
                {
                    if (selector.charCodeAt(selectorIndex + 1) === 58 /* Colon */ ) {
                        tokens.push({
                            type: (0, _types.SelectorType).PseudoElement,
                            name: getName(2).toLowerCase(),
                            data: selector.charCodeAt(selectorIndex) === 40 /* LeftParenthesis */  ? readValueWithParenthesis() : null
                        });
                        continue;
                    }
                    const name = getName(1).toLowerCase();
                    let data = null;
                    if (selector.charCodeAt(selectorIndex) === 40 /* LeftParenthesis */ ) {
                        if (unpackPseudos.has(name)) {
                            if (isQuote(selector.charCodeAt(selectorIndex + 1))) throw new Error(`Pseudo-selector ${name} cannot be quoted`);
                            data = [];
                            selectorIndex = parseSelector(data, selector, selectorIndex + 1);
                            if (selector.charCodeAt(selectorIndex) !== 41 /* RightParenthesis */ ) throw new Error(`Missing closing parenthesis in :${name} (${selector})`);
                            selectorIndex += 1;
                        } else {
                            data = readValueWithParenthesis();
                            if (stripQuotesFromPseudos.has(name)) {
                                const quot = data.charCodeAt(0);
                                if (quot === data.charCodeAt(data.length - 1) && isQuote(quot)) data = data.slice(1, -1);
                            }
                            data = unescapeCSS(data);
                        }
                    }
                    tokens.push({
                        type: (0, _types.SelectorType).Pseudo,
                        name,
                        data
                    });
                    break;
                }
            case 44 /* Comma */ :
                finalizeSubselector();
                tokens = [];
                stripWhitespace(1);
                break;
            default:
                {
                    if (selector.startsWith("/*", selectorIndex)) {
                        const endIndex = selector.indexOf("*/", selectorIndex + 2);
                        if (endIndex < 0) throw new Error("Comment was not terminated");
                        selectorIndex = endIndex + 2;
                        // Remove leading whitespace
                        if (tokens.length === 0) stripWhitespace(0);
                        break;
                    }
                    let namespace = null;
                    let name;
                    if (firstChar === 42 /* Asterisk */ ) {
                        selectorIndex += 1;
                        name = "*";
                    } else if (firstChar === 124 /* Pipe */ ) {
                        name = "";
                        if (selector.charCodeAt(selectorIndex + 1) === 124 /* Pipe */ ) {
                            addTraversal((0, _types.SelectorType).ColumnCombinator);
                            stripWhitespace(2);
                            break;
                        }
                    } else if (reName.test(selector.slice(selectorIndex))) name = getName(0);
                    else break loop;
                    if (selector.charCodeAt(selectorIndex) === 124 /* Pipe */  && selector.charCodeAt(selectorIndex + 1) !== 124 /* Pipe */ ) {
                        namespace = name;
                        if (selector.charCodeAt(selectorIndex + 1) === 42 /* Asterisk */ ) {
                            name = "*";
                            selectorIndex += 2;
                        } else name = getName(1);
                    }
                    tokens.push(name === "*" ? {
                        type: (0, _types.SelectorType).Universal,
                        namespace
                    } : {
                        type: (0, _types.SelectorType).Tag,
                        name,
                        namespace
                    });
                }
        }
    }
    finalizeSubselector();
    return selectorIndex;
}

},{"./types":"eLCmo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2Fstw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isTraversal", ()=>isTraversal);
parcelHelpers.export(exports, "default", ()=>sortByProcedure);
var _cssWhat = require("css-what");
const procedure = new Map([
    [
        (0, _cssWhat.SelectorType).Universal,
        50
    ],
    [
        (0, _cssWhat.SelectorType).Tag,
        30
    ],
    [
        (0, _cssWhat.SelectorType).Attribute,
        1
    ],
    [
        (0, _cssWhat.SelectorType).Pseudo,
        0
    ]
]);
function isTraversal(token) {
    return !procedure.has(token.type);
}
const attributes = new Map([
    [
        (0, _cssWhat.AttributeAction).Exists,
        10
    ],
    [
        (0, _cssWhat.AttributeAction).Equals,
        8
    ],
    [
        (0, _cssWhat.AttributeAction).Not,
        7
    ],
    [
        (0, _cssWhat.AttributeAction).Start,
        6
    ],
    [
        (0, _cssWhat.AttributeAction).End,
        6
    ],
    [
        (0, _cssWhat.AttributeAction).Any,
        5
    ]
]);
function sortByProcedure(arr) {
    const procs = arr.map(getProcedure);
    for(let i = 1; i < arr.length; i++){
        const procNew = procs[i];
        if (procNew < 0) continue;
        for(let j = i - 1; j >= 0 && procNew < procs[j]; j--){
            const token = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = token;
            procs[j + 1] = procs[j];
            procs[j] = procNew;
        }
    }
}
function getProcedure(token) {
    var _a, _b;
    let proc = (_a = procedure.get(token.type)) !== null && _a !== void 0 ? _a : -1;
    if (token.type === (0, _cssWhat.SelectorType).Attribute) {
        proc = (_b = attributes.get(token.action)) !== null && _b !== void 0 ? _b : 4;
        if (token.action === (0, _cssWhat.AttributeAction).Equals && token.name === "id") // Prefer ID selectors (eg. #ID)
        proc = 9;
        if (token.ignoreCase) /*
             * IgnoreCase adds some overhead, prefer "normal" token
             * this is a binary operation, to ensure it's still an int
             */ proc >>= 1;
    } else if (token.type === (0, _cssWhat.SelectorType).Pseudo) {
        if (!token.data) proc = 3;
        else if (token.name === "has" || token.name === "contains") proc = 0; // Expensive in any case
        else if (Array.isArray(token.data)) {
            // Eg. :matches, :not
            proc = Math.min(...token.data.map((d)=>Math.min(...d.map(getProcedure))));
            // If we have traversals, try to avoid executing this selector
            if (proc < 0) proc = 0;
        } else proc = 2;
    }
    return proc;
}

},{"css-what":"4vhyp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9LDbc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*
 * All available rules
 */ parcelHelpers.export(exports, "compileGeneralSelector", ()=>compileGeneralSelector);
var _attributesJs = require("./attributes.js");
var _indexJs = require("./pseudo-selectors/index.js");
var _cssWhat = require("css-what");
function getElementParent(node, adapter) {
    const parent = adapter.getParent(node);
    if (parent && adapter.isTag(parent)) return parent;
    return null;
}
function compileGeneralSelector(next, selector, options, context, compileToken) {
    const { adapter, equals } = options;
    switch(selector.type){
        case (0, _cssWhat.SelectorType).PseudoElement:
            throw new Error("Pseudo-elements are not supported by css-select");
        case (0, _cssWhat.SelectorType).ColumnCombinator:
            throw new Error("Column combinators are not yet supported by css-select");
        case (0, _cssWhat.SelectorType).Attribute:
            if (selector.namespace != null) throw new Error("Namespaced attributes are not yet supported by css-select");
            if (!options.xmlMode || options.lowerCaseAttributeNames) selector.name = selector.name.toLowerCase();
            return (0, _attributesJs.attributeRules)[selector.action](next, selector, options);
        case (0, _cssWhat.SelectorType).Pseudo:
            return (0, _indexJs.compilePseudoSelector)(next, selector, options, context, compileToken);
        // Tags
        case (0, _cssWhat.SelectorType).Tag:
            {
                if (selector.namespace != null) throw new Error("Namespaced tag names are not yet supported by css-select");
                let { name } = selector;
                if (!options.xmlMode || options.lowerCaseTags) name = name.toLowerCase();
                return function tag(elem) {
                    return adapter.getName(elem) === name && next(elem);
                };
            }
        // Traversal
        case (0, _cssWhat.SelectorType).Descendant:
            {
                if (options.cacheResults === false || typeof WeakSet === "undefined") return function descendant(elem) {
                    let current = elem;
                    while(current = getElementParent(current, adapter)){
                        if (next(current)) return true;
                    }
                    return false;
                };
                // @ts-expect-error `ElementNode` is not extending object
                const isFalseCache = new WeakSet();
                return function cachedDescendant(elem) {
                    let current = elem;
                    while(current = getElementParent(current, adapter))if (!isFalseCache.has(current)) {
                        if (adapter.isTag(current) && next(current)) return true;
                        isFalseCache.add(current);
                    }
                    return false;
                };
            }
        case "_flexibleDescendant":
            // Include element itself, only used while querying an array
            return function flexibleDescendant(elem) {
                let current = elem;
                do {
                    if (next(current)) return true;
                }while (current = getElementParent(current, adapter));
                return false;
            };
        case (0, _cssWhat.SelectorType).Parent:
            return function parent(elem) {
                return adapter.getChildren(elem).some((elem)=>adapter.isTag(elem) && next(elem));
            };
        case (0, _cssWhat.SelectorType).Child:
            return function child(elem) {
                const parent = adapter.getParent(elem);
                return parent != null && adapter.isTag(parent) && next(parent);
            };
        case (0, _cssWhat.SelectorType).Sibling:
            return function sibling(elem) {
                const siblings = adapter.getSiblings(elem);
                for(let i = 0; i < siblings.length; i++){
                    const currentSibling = siblings[i];
                    if (equals(elem, currentSibling)) break;
                    if (adapter.isTag(currentSibling) && next(currentSibling)) return true;
                }
                return false;
            };
        case (0, _cssWhat.SelectorType).Adjacent:
            if (adapter.prevElementSibling) return function adjacent(elem) {
                const previous = adapter.prevElementSibling(elem);
                return previous != null && next(previous);
            };
            return function adjacent(elem) {
                const siblings = adapter.getSiblings(elem);
                let lastElement;
                for(let i = 0; i < siblings.length; i++){
                    const currentSibling = siblings[i];
                    if (equals(elem, currentSibling)) break;
                    if (adapter.isTag(currentSibling)) lastElement = currentSibling;
                }
                return !!lastElement && next(lastElement);
            };
        case (0, _cssWhat.SelectorType).Universal:
            if (selector.namespace != null && selector.namespace !== "*") throw new Error("Namespaced universal selectors are not yet supported by css-select");
            return next;
    }
}

},{"./attributes.js":"103q3","./pseudo-selectors/index.js":"75f7I","css-what":"4vhyp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"103q3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "attributeRules", ()=>attributeRules);
var _boolbase = require("boolbase");
var _boolbaseDefault = parcelHelpers.interopDefault(_boolbase);
/**
 * All reserved characters in a regex, used for escaping.
 *
 * Taken from XRegExp, (c) 2007-2020 Steven Levithan under the MIT license
 * https://github.com/slevithan/xregexp/blob/95eeebeb8fac8754d54eafe2b4743661ac1cf028/src/xregexp.js#L794
 */ const reChars = /[-[\]{}()*+?.,\\^$|#\s]/g;
function escapeRegex(value) {
    return value.replace(reChars, "\\$&");
}
/**
 * Attributes that are case-insensitive in HTML.
 *
 * @private
 * @see https://html.spec.whatwg.org/multipage/semantics-other.html#case-sensitivity-of-selectors
 */ const caseInsensitiveAttributes = new Set([
    "accept",
    "accept-charset",
    "align",
    "alink",
    "axis",
    "bgcolor",
    "charset",
    "checked",
    "clear",
    "codetype",
    "color",
    "compact",
    "declare",
    "defer",
    "dir",
    "direction",
    "disabled",
    "enctype",
    "face",
    "frame",
    "hreflang",
    "http-equiv",
    "lang",
    "language",
    "link",
    "media",
    "method",
    "multiple",
    "nohref",
    "noresize",
    "noshade",
    "nowrap",
    "readonly",
    "rel",
    "rev",
    "rules",
    "scope",
    "scrolling",
    "selected",
    "shape",
    "target",
    "text",
    "type",
    "valign",
    "valuetype",
    "vlink"
]);
function shouldIgnoreCase(selector, options) {
    return typeof selector.ignoreCase === "boolean" ? selector.ignoreCase : selector.ignoreCase === "quirks" ? !!options.quirksMode : !options.xmlMode && caseInsensitiveAttributes.has(selector.name);
}
const attributeRules = {
    equals (next, data, options) {
        const { adapter } = options;
        const { name } = data;
        let { value } = data;
        if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return (elem)=>{
                const attr = adapter.getAttributeValue(elem, name);
                return attr != null && attr.length === value.length && attr.toLowerCase() === value && next(elem);
            };
        }
        return (elem)=>adapter.getAttributeValue(elem, name) === value && next(elem);
    },
    hyphen (next, data, options) {
        const { adapter } = options;
        const { name } = data;
        let { value } = data;
        const len = value.length;
        if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return function hyphenIC(elem) {
                const attr = adapter.getAttributeValue(elem, name);
                return attr != null && (attr.length === len || attr.charAt(len) === "-") && attr.substr(0, len).toLowerCase() === value && next(elem);
            };
        }
        return function hyphen(elem) {
            const attr = adapter.getAttributeValue(elem, name);
            return attr != null && (attr.length === len || attr.charAt(len) === "-") && attr.substr(0, len) === value && next(elem);
        };
    },
    element (next, data, options) {
        const { adapter } = options;
        const { name, value } = data;
        if (/\s/.test(value)) return (0, _boolbaseDefault.default).falseFunc;
        const regex = new RegExp(`(?:^|\\s)${escapeRegex(value)}(?:$|\\s)`, shouldIgnoreCase(data, options) ? "i" : "");
        return function element(elem) {
            const attr = adapter.getAttributeValue(elem, name);
            return attr != null && attr.length >= value.length && regex.test(attr) && next(elem);
        };
    },
    exists (next, { name }, { adapter }) {
        return (elem)=>adapter.hasAttrib(elem, name) && next(elem);
    },
    start (next, data, options) {
        const { adapter } = options;
        const { name } = data;
        let { value } = data;
        const len = value.length;
        if (len === 0) return (0, _boolbaseDefault.default).falseFunc;
        if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return (elem)=>{
                const attr = adapter.getAttributeValue(elem, name);
                return attr != null && attr.length >= len && attr.substr(0, len).toLowerCase() === value && next(elem);
            };
        }
        return (elem)=>{
            var _a;
            return !!((_a = adapter.getAttributeValue(elem, name)) === null || _a === void 0 ? void 0 : _a.startsWith(value)) && next(elem);
        };
    },
    end (next, data, options) {
        const { adapter } = options;
        const { name } = data;
        let { value } = data;
        const len = -value.length;
        if (len === 0) return (0, _boolbaseDefault.default).falseFunc;
        if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return (elem)=>{
                var _a;
                return ((_a = adapter.getAttributeValue(elem, name)) === null || _a === void 0 ? void 0 : _a.substr(len).toLowerCase()) === value && next(elem);
            };
        }
        return (elem)=>{
            var _a;
            return !!((_a = adapter.getAttributeValue(elem, name)) === null || _a === void 0 ? void 0 : _a.endsWith(value)) && next(elem);
        };
    },
    any (next, data, options) {
        const { adapter } = options;
        const { name, value } = data;
        if (value === "") return (0, _boolbaseDefault.default).falseFunc;
        if (shouldIgnoreCase(data, options)) {
            const regex = new RegExp(escapeRegex(value), "i");
            return function anyIC(elem) {
                const attr = adapter.getAttributeValue(elem, name);
                return attr != null && attr.length >= value.length && regex.test(attr) && next(elem);
            };
        }
        return (elem)=>{
            var _a;
            return !!((_a = adapter.getAttributeValue(elem, name)) === null || _a === void 0 ? void 0 : _a.includes(value)) && next(elem);
        };
    },
    not (next, data, options) {
        const { adapter } = options;
        const { name } = data;
        let { value } = data;
        if (value === "") return (elem)=>!!adapter.getAttributeValue(elem, name) && next(elem);
        else if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return (elem)=>{
                const attr = adapter.getAttributeValue(elem, name);
                return (attr == null || attr.length !== value.length || attr.toLowerCase() !== value) && next(elem);
            };
        }
        return (elem)=>adapter.getAttributeValue(elem, name) !== value && next(elem);
    }
};

},{"boolbase":"cSCm4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"75f7I":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "filters", ()=>(0, _filtersJs.filters));
parcelHelpers.export(exports, "pseudos", ()=>(0, _pseudosJs.pseudos));
parcelHelpers.export(exports, "aliases", ()=>(0, _aliasesJs.aliases));
parcelHelpers.export(exports, "compilePseudoSelector", ()=>compilePseudoSelector);
var _cssWhat = require("css-what");
var _filtersJs = require("./filters.js");
var _pseudosJs = require("./pseudos.js");
var _aliasesJs = require("./aliases.js");
var _subselectsJs = require("./subselects.js");
function compilePseudoSelector(next, selector, options, context, compileToken) {
    var _a;
    const { name, data } = selector;
    if (Array.isArray(data)) {
        if (!(name in (0, _subselectsJs.subselects))) throw new Error(`Unknown pseudo-class :${name}(${data})`);
        return (0, _subselectsJs.subselects)[name](next, data, options, context, compileToken);
    }
    const userPseudo = (_a = options.pseudos) === null || _a === void 0 ? void 0 : _a[name];
    const stringPseudo = typeof userPseudo === "string" ? userPseudo : (0, _aliasesJs.aliases)[name];
    if (typeof stringPseudo === "string") {
        if (data != null) throw new Error(`Pseudo ${name} doesn't have any arguments`);
        // The alias has to be parsed here, to make sure options are respected.
        const alias = (0, _cssWhat.parse)(stringPseudo);
        return (0, _subselectsJs.subselects)["is"](next, alias, options, context, compileToken);
    }
    if (typeof userPseudo === "function") {
        (0, _pseudosJs.verifyPseudoArgs)(userPseudo, name, data, 1);
        return (elem)=>userPseudo(elem, data) && next(elem);
    }
    if (name in (0, _filtersJs.filters)) return (0, _filtersJs.filters)[name](next, data, options, context);
    if (name in (0, _pseudosJs.pseudos)) {
        const pseudo = (0, _pseudosJs.pseudos)[name];
        (0, _pseudosJs.verifyPseudoArgs)(pseudo, name, data, 2);
        return (elem)=>pseudo(elem, options, data) && next(elem);
    }
    throw new Error(`Unknown pseudo-class :${name}`);
}

},{"css-what":"4vhyp","./filters.js":"2D0Uw","./pseudos.js":"9KFa7","./aliases.js":"l3CZf","./subselects.js":"dGwWj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2D0Uw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "filters", ()=>filters);
var _nthCheck = require("nth-check");
var _nthCheckDefault = parcelHelpers.interopDefault(_nthCheck);
var _boolbase = require("boolbase");
var _boolbaseDefault = parcelHelpers.interopDefault(_boolbase);
function getChildFunc(next, adapter) {
    return (elem)=>{
        const parent = adapter.getParent(elem);
        return parent != null && adapter.isTag(parent) && next(elem);
    };
}
const filters = {
    contains (next, text, { adapter }) {
        return function contains(elem) {
            return next(elem) && adapter.getText(elem).includes(text);
        };
    },
    icontains (next, text, { adapter }) {
        const itext = text.toLowerCase();
        return function icontains(elem) {
            return next(elem) && adapter.getText(elem).toLowerCase().includes(itext);
        };
    },
    // Location specific methods
    "nth-child" (next, rule, { adapter, equals }) {
        const func = (0, _nthCheckDefault.default)(rule);
        if (func === (0, _boolbaseDefault.default).falseFunc) return (0, _boolbaseDefault.default).falseFunc;
        if (func === (0, _boolbaseDefault.default).trueFunc) return getChildFunc(next, adapter);
        return function nthChild(elem) {
            const siblings = adapter.getSiblings(elem);
            let pos = 0;
            for(let i = 0; i < siblings.length; i++){
                if (equals(elem, siblings[i])) break;
                if (adapter.isTag(siblings[i])) pos++;
            }
            return func(pos) && next(elem);
        };
    },
    "nth-last-child" (next, rule, { adapter, equals }) {
        const func = (0, _nthCheckDefault.default)(rule);
        if (func === (0, _boolbaseDefault.default).falseFunc) return (0, _boolbaseDefault.default).falseFunc;
        if (func === (0, _boolbaseDefault.default).trueFunc) return getChildFunc(next, adapter);
        return function nthLastChild(elem) {
            const siblings = adapter.getSiblings(elem);
            let pos = 0;
            for(let i = siblings.length - 1; i >= 0; i--){
                if (equals(elem, siblings[i])) break;
                if (adapter.isTag(siblings[i])) pos++;
            }
            return func(pos) && next(elem);
        };
    },
    "nth-of-type" (next, rule, { adapter, equals }) {
        const func = (0, _nthCheckDefault.default)(rule);
        if (func === (0, _boolbaseDefault.default).falseFunc) return (0, _boolbaseDefault.default).falseFunc;
        if (func === (0, _boolbaseDefault.default).trueFunc) return getChildFunc(next, adapter);
        return function nthOfType(elem) {
            const siblings = adapter.getSiblings(elem);
            let pos = 0;
            for(let i = 0; i < siblings.length; i++){
                const currentSibling = siblings[i];
                if (equals(elem, currentSibling)) break;
                if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === adapter.getName(elem)) pos++;
            }
            return func(pos) && next(elem);
        };
    },
    "nth-last-of-type" (next, rule, { adapter, equals }) {
        const func = (0, _nthCheckDefault.default)(rule);
        if (func === (0, _boolbaseDefault.default).falseFunc) return (0, _boolbaseDefault.default).falseFunc;
        if (func === (0, _boolbaseDefault.default).trueFunc) return getChildFunc(next, adapter);
        return function nthLastOfType(elem) {
            const siblings = adapter.getSiblings(elem);
            let pos = 0;
            for(let i = siblings.length - 1; i >= 0; i--){
                const currentSibling = siblings[i];
                if (equals(elem, currentSibling)) break;
                if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === adapter.getName(elem)) pos++;
            }
            return func(pos) && next(elem);
        };
    },
    // TODO determine the actual root element
    root (next, _rule, { adapter }) {
        return (elem)=>{
            const parent = adapter.getParent(elem);
            return (parent == null || !adapter.isTag(parent)) && next(elem);
        };
    },
    scope (next, rule, options, context) {
        const { equals } = options;
        if (!context || context.length === 0) // Equivalent to :root
        return filters["root"](next, rule, options);
        if (context.length === 1) // NOTE: can't be unpacked, as :has uses this for side-effects
        return (elem)=>equals(context[0], elem) && next(elem);
        return (elem)=>context.includes(elem) && next(elem);
    },
    hover: dynamicStatePseudo("isHovered"),
    visited: dynamicStatePseudo("isVisited"),
    active: dynamicStatePseudo("isActive")
};
/**
 * Dynamic state pseudos. These depend on optional Adapter methods.
 *
 * @param name The name of the adapter method to call.
 * @returns Pseudo for the `filters` object.
 */ function dynamicStatePseudo(name) {
    return function dynamicPseudo(next, _rule, { adapter }) {
        const func = adapter[name];
        if (typeof func !== "function") return (0, _boolbaseDefault.default).falseFunc;
        return function active(elem) {
            return func(elem) && next(elem);
        };
    };
}

},{"nth-check":"e0F8d","boolbase":"cSCm4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e0F8d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "parse", ()=>(0, _parseJs.parse));
parcelHelpers.export(exports, "compile", ()=>(0, _compileJs.compile));
parcelHelpers.export(exports, "generate", ()=>(0, _compileJs.generate));
parcelHelpers.export(exports, "default", ()=>nthCheck);
/**
 * Parses and compiles a formula to a generator that produces a sequence of indices.
 * Combination of {@link parse} and {@link generate}.
 *
 * @param formula The formula to compile.
 * @returns A function that produces a sequence of indices.
 * @example <caption>Always increasing</caption>
 *
 * ```js
 * const gen = nthCheck.sequence('2n+3')
 *
 * gen() // `1`
 * gen() // `3`
 * gen() // `5`
 * gen() // `8`
 * gen() // `11`
 * ```
 *
 * @example <caption>With end value</caption>
 *
 * ```js
 *
 * const gen = nthCheck.sequence('-2n+5');
 *
 * gen() // 0
 * gen() // 2
 * gen() // 4
 * gen() // null
 * ```
 */ parcelHelpers.export(exports, "sequence", ()=>sequence);
var _parseJs = require("./parse.js");
var _compileJs = require("./compile.js");
function nthCheck(formula) {
    return (0, _compileJs.compile)((0, _parseJs.parse)(formula));
}
function sequence(formula) {
    return (0, _compileJs.generate)((0, _parseJs.parse)(formula));
}

},{"./parse.js":"2VJVu","./compile.js":"kcqbj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2VJVu":[function(require,module,exports) {
// Following http://www.w3.org/TR/css3-selectors/#nth-child-pseudo
// Whitespace as per https://www.w3.org/TR/selectors-3/#lex is " \t\r\n\f"
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Parses an expression.
 *
 * @throws An `Error` if parsing fails.
 * @returns An array containing the integer step size and the integer offset of the nth rule.
 * @example nthCheck.parse("2n+3"); // returns [2, 3]
 */ parcelHelpers.export(exports, "parse", ()=>parse);
const whitespace = new Set([
    9,
    10,
    12,
    13,
    32
]);
const ZERO = "0".charCodeAt(0);
const NINE = "9".charCodeAt(0);
function parse(formula) {
    formula = formula.trim().toLowerCase();
    if (formula === "even") return [
        2,
        0
    ];
    else if (formula === "odd") return [
        2,
        1
    ];
    // Parse [ ['-'|'+']? INTEGER? {N} [ S* ['-'|'+'] S* INTEGER ]?
    let idx = 0;
    let a = 0;
    let sign = readSign();
    let number = readNumber();
    if (idx < formula.length && formula.charAt(idx) === "n") {
        idx++;
        a = sign * (number !== null && number !== void 0 ? number : 1);
        skipWhitespace();
        if (idx < formula.length) {
            sign = readSign();
            skipWhitespace();
            number = readNumber();
        } else sign = number = 0;
    }
    // Throw if there is anything else
    if (number === null || idx < formula.length) throw new Error(`n-th rule couldn't be parsed ('${formula}')`);
    return [
        a,
        sign * number
    ];
    function readSign() {
        if (formula.charAt(idx) === "-") {
            idx++;
            return -1;
        }
        if (formula.charAt(idx) === "+") idx++;
        return 1;
    }
    function readNumber() {
        const start = idx;
        let value = 0;
        while(idx < formula.length && formula.charCodeAt(idx) >= ZERO && formula.charCodeAt(idx) <= NINE){
            value = value * 10 + (formula.charCodeAt(idx) - ZERO);
            idx++;
        }
        // Return `null` if we didn't read anything.
        return idx === start ? null : value;
    }
    function skipWhitespace() {
        while(idx < formula.length && whitespace.has(formula.charCodeAt(idx)))idx++;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kcqbj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Returns a function that checks if an elements index matches the given rule
 * highly optimized to return the fastest solution.
 *
 * @param parsed A tuple [a, b], as returned by `parse`.
 * @returns A highly optimized function that returns whether an index matches the nth-check.
 * @example
 *
 * ```js
 * const check = nthCheck.compile([2, 3]);
 *
 * check(0); // `false`
 * check(1); // `false`
 * check(2); // `true`
 * check(3); // `false`
 * check(4); // `true`
 * check(5); // `false`
 * check(6); // `true`
 * ```
 */ parcelHelpers.export(exports, "compile", ()=>compile);
/**
 * Returns a function that produces a monotonously increasing sequence of indices.
 *
 * If the sequence has an end, the returned function will return `null` after
 * the last index in the sequence.
 *
 * @param parsed A tuple [a, b], as returned by `parse`.
 * @returns A function that produces a sequence of indices.
 * @example <caption>Always increasing (2n+3)</caption>
 *
 * ```js
 * const gen = nthCheck.generate([2, 3])
 *
 * gen() // `1`
 * gen() // `3`
 * gen() // `5`
 * gen() // `8`
 * gen() // `11`
 * ```
 *
 * @example <caption>With end value (-2n+10)</caption>
 *
 * ```js
 *
 * const gen = nthCheck.generate([-2, 5]);
 *
 * gen() // 0
 * gen() // 2
 * gen() // 4
 * gen() // null
 * ```
 */ parcelHelpers.export(exports, "generate", ()=>generate);
var _boolbase = require("boolbase");
var _boolbaseDefault = parcelHelpers.interopDefault(_boolbase);
function compile(parsed) {
    const a = parsed[0];
    // Subtract 1 from `b`, to convert from one- to zero-indexed.
    const b = parsed[1] - 1;
    /*
     * When `b <= 0`, `a * n` won't be lead to any matches for `a < 0`.
     * Besides, the specification states that no elements are
     * matched when `a` and `b` are 0.
     *
     * `b < 0` here as we subtracted 1 from `b` above.
     */ if (b < 0 && a <= 0) return (0, _boolbaseDefault.default).falseFunc;
    // When `a` is in the range -1..1, it matches any element (so only `b` is checked).
    if (a === -1) return (index)=>index <= b;
    if (a === 0) return (index)=>index === b;
    // When `b <= 0` and `a === 1`, they match any element.
    if (a === 1) return b < 0 ? (0, _boolbaseDefault.default).trueFunc : (index)=>index >= b;
    /*
     * Otherwise, modulo can be used to check if there is a match.
     *
     * Modulo doesn't care about the sign, so let's use `a`s absolute value.
     */ const absA = Math.abs(a);
    // Get `b mod a`, + a if this is negative.
    const bMod = (b % absA + absA) % absA;
    return a > 1 ? (index)=>index >= b && index % absA === bMod : (index)=>index <= b && index % absA === bMod;
}
function generate(parsed) {
    const a = parsed[0];
    // Subtract 1 from `b`, to convert from one- to zero-indexed.
    let b = parsed[1] - 1;
    let n = 0;
    // Make sure to always return an increasing sequence
    if (a < 0) {
        const aPos = -a;
        // Get `b mod a`
        const minValue = (b % aPos + aPos) % aPos;
        return ()=>{
            const val = minValue + aPos * n++;
            return val > b ? null : val;
        };
    }
    if (a === 0) return b < 0 ? ()=>null : ()=>n++ === 0 ? b : null;
    if (b < 0) b += a * Math.ceil(-b / a);
    return ()=>a * n++ + b;
}

},{"boolbase":"cSCm4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9KFa7":[function(require,module,exports) {
// While filters are precompiled, pseudos get called when they are needed
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pseudos", ()=>pseudos);
parcelHelpers.export(exports, "verifyPseudoArgs", ()=>verifyPseudoArgs);
const pseudos = {
    empty (elem, { adapter }) {
        return !adapter.getChildren(elem).some((elem)=>// FIXME: `getText` call is potentially expensive.
            adapter.isTag(elem) || adapter.getText(elem) !== "");
    },
    "first-child" (elem, { adapter, equals }) {
        if (adapter.prevElementSibling) return adapter.prevElementSibling(elem) == null;
        const firstChild = adapter.getSiblings(elem).find((elem)=>adapter.isTag(elem));
        return firstChild != null && equals(elem, firstChild);
    },
    "last-child" (elem, { adapter, equals }) {
        const siblings = adapter.getSiblings(elem);
        for(let i = siblings.length - 1; i >= 0; i--){
            if (equals(elem, siblings[i])) return true;
            if (adapter.isTag(siblings[i])) break;
        }
        return false;
    },
    "first-of-type" (elem, { adapter, equals }) {
        const siblings = adapter.getSiblings(elem);
        const elemName = adapter.getName(elem);
        for(let i = 0; i < siblings.length; i++){
            const currentSibling = siblings[i];
            if (equals(elem, currentSibling)) return true;
            if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === elemName) break;
        }
        return false;
    },
    "last-of-type" (elem, { adapter, equals }) {
        const siblings = adapter.getSiblings(elem);
        const elemName = adapter.getName(elem);
        for(let i = siblings.length - 1; i >= 0; i--){
            const currentSibling = siblings[i];
            if (equals(elem, currentSibling)) return true;
            if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === elemName) break;
        }
        return false;
    },
    "only-of-type" (elem, { adapter, equals }) {
        const elemName = adapter.getName(elem);
        return adapter.getSiblings(elem).every((sibling)=>equals(elem, sibling) || !adapter.isTag(sibling) || adapter.getName(sibling) !== elemName);
    },
    "only-child" (elem, { adapter, equals }) {
        return adapter.getSiblings(elem).every((sibling)=>equals(elem, sibling) || !adapter.isTag(sibling));
    }
};
function verifyPseudoArgs(func, name, subselect, argIndex) {
    if (subselect === null) {
        if (func.length > argIndex) throw new Error(`Pseudo-class :${name} requires an argument`);
    } else if (func.length === argIndex) throw new Error(`Pseudo-class :${name} doesn't have any arguments`);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l3CZf":[function(require,module,exports) {
/**
 * Aliases are pseudos that are expressed as selectors.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "aliases", ()=>aliases);
const aliases = {
    // Links
    "any-link": ":is(a, area, link)[href]",
    link: ":any-link:not(:visited)",
    // Forms
    // https://html.spec.whatwg.org/multipage/scripting.html#disabled-elements
    disabled: `:is(
        :is(button, input, select, textarea, optgroup, option)[disabled],
        optgroup[disabled] > option,
        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)
    )`,
    enabled: ":not(:disabled)",
    checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)",
    required: ":is(input, select, textarea)[required]",
    optional: ":is(input, select, textarea):not([required])",
    // JQuery extensions
    // https://html.spec.whatwg.org/multipage/form-elements.html#concept-option-selectedness
    selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)",
    checkbox: "[type=checkbox]",
    file: "[type=file]",
    password: "[type=password]",
    radio: "[type=radio]",
    reset: "[type=reset]",
    image: "[type=image]",
    submit: "[type=submit]",
    parent: ":not(:empty)",
    header: ":is(h1, h2, h3, h4, h5, h6)",
    button: ":is(button, input[type=button])",
    input: ":is(input, textarea, select, button)",
    text: "input:is(:not([type!='']), [type=text])"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dGwWj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PLACEHOLDER_ELEMENT", ()=>PLACEHOLDER_ELEMENT);
parcelHelpers.export(exports, "ensureIsTag", ()=>ensureIsTag);
parcelHelpers.export(exports, "getNextSiblings", ()=>getNextSiblings);
parcelHelpers.export(exports, "subselects", ()=>subselects);
var _boolbase = require("boolbase");
var _boolbaseDefault = parcelHelpers.interopDefault(_boolbase);
var _sortJs = require("../sort.js");
const PLACEHOLDER_ELEMENT = {};
function ensureIsTag(next, adapter) {
    if (next === (0, _boolbaseDefault.default).falseFunc) return (0, _boolbaseDefault.default).falseFunc;
    return (elem)=>adapter.isTag(elem) && next(elem);
}
function getNextSiblings(elem, adapter) {
    const siblings = adapter.getSiblings(elem);
    if (siblings.length <= 1) return [];
    const elemIndex = siblings.indexOf(elem);
    if (elemIndex < 0 || elemIndex === siblings.length - 1) return [];
    return siblings.slice(elemIndex + 1).filter(adapter.isTag);
}
function copyOptions(options) {
    // Not copied: context, rootFunc
    return {
        xmlMode: !!options.xmlMode,
        lowerCaseAttributeNames: !!options.lowerCaseAttributeNames,
        lowerCaseTags: !!options.lowerCaseTags,
        quirksMode: !!options.quirksMode,
        cacheResults: !!options.cacheResults,
        pseudos: options.pseudos,
        adapter: options.adapter,
        equals: options.equals
    };
}
const is = (next, token, options, context, compileToken)=>{
    const func = compileToken(token, copyOptions(options), context);
    return func === (0, _boolbaseDefault.default).trueFunc ? next : func === (0, _boolbaseDefault.default).falseFunc ? (0, _boolbaseDefault.default).falseFunc : (elem)=>func(elem) && next(elem);
};
const subselects = {
    is,
    /**
     * `:matches` and `:where` are aliases for `:is`.
     */ matches: is,
    where: is,
    not (next, token, options, context, compileToken) {
        const func = compileToken(token, copyOptions(options), context);
        return func === (0, _boolbaseDefault.default).falseFunc ? next : func === (0, _boolbaseDefault.default).trueFunc ? (0, _boolbaseDefault.default).falseFunc : (elem)=>!func(elem) && next(elem);
    },
    has (next, subselect, options, _context, compileToken) {
        const { adapter } = options;
        const opts = copyOptions(options);
        opts.relativeSelector = true;
        const context = subselect.some((s)=>s.some((0, _sortJs.isTraversal))) ? [
            PLACEHOLDER_ELEMENT
        ] : undefined;
        const compiled = compileToken(subselect, opts, context);
        if (compiled === (0, _boolbaseDefault.default).falseFunc) return (0, _boolbaseDefault.default).falseFunc;
        const hasElement = ensureIsTag(compiled, adapter);
        // If `compiled` is `trueFunc`, we can skip this.
        if (context && compiled !== (0, _boolbaseDefault.default).trueFunc) {
            /*
             * `shouldTestNextSiblings` will only be true if the query starts with
             * a traversal (sibling or adjacent). That means we will always have a context.
             */ const { shouldTestNextSiblings = false } = compiled;
            return (elem)=>{
                if (!next(elem)) return false;
                context[0] = elem;
                const childs = adapter.getChildren(elem);
                const nextElements = shouldTestNextSiblings ? [
                    ...childs,
                    ...getNextSiblings(elem, adapter)
                ] : childs;
                return adapter.existsOne(hasElement, nextElements);
            };
        }
        return (elem)=>next(elem) && adapter.existsOne(hasElement, adapter.getChildren(elem));
    }
};

},{"boolbase":"cSCm4","../sort.js":"2Fstw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3GJIR":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function arr_back(arr) {
    return arr[arr.length - 1];
}
exports.default = arr_back;

},{}],"2v4gs":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
var type_1 = __importDefault(require("b0d5511d5461501f"));
function isTag(node) {
    return node && node.nodeType === type_1.default.ELEMENT_NODE;
}
function getAttributeValue(elem, name) {
    return isTag(elem) ? elem.getAttribute(name) : undefined;
}
function getName(elem) {
    return (elem && elem.rawTagName || "").toLowerCase();
}
function getChildren(node) {
    return node && node.childNodes;
}
function getParent(node) {
    return node ? node.parentNode : null;
}
function getText(node) {
    return node.text;
}
function removeSubsets(nodes) {
    var idx = nodes.length;
    var node;
    var ancestor;
    var replace;
    // Check if each node (or one of its ancestors) is already contained in the
    // array.
    while(--idx > -1){
        node = ancestor = nodes[idx];
        // Temporarily remove the node under consideration
        nodes[idx] = null;
        replace = true;
        while(ancestor){
            if (nodes.indexOf(ancestor) > -1) {
                replace = false;
                nodes.splice(idx, 1);
                break;
            }
            ancestor = getParent(ancestor);
        }
        // If the node has been found to be unique, re-insert it.
        if (replace) nodes[idx] = node;
    }
    return nodes;
}
function existsOne(test, elems) {
    return elems.some(function(elem) {
        return isTag(elem) ? test(elem) || existsOne(test, getChildren(elem)) : false;
    });
}
function getSiblings(node) {
    var parent = getParent(node);
    return parent ? getChildren(parent) : [];
}
function hasAttrib(elem, name) {
    return getAttributeValue(elem, name) !== undefined;
}
function findOne(test, elems) {
    var elem = null;
    for(var i = 0, l = elems === null || elems === void 0 ? void 0 : elems.length; i < l && !elem; i++){
        var el = elems[i];
        if (test(el)) elem = el;
        else {
            var childs = getChildren(el);
            if (childs && childs.length > 0) elem = findOne(test, childs);
        }
    }
    return elem;
}
function findAll(test, nodes) {
    var result = [];
    for(var i = 0, j = nodes.length; i < j; i++){
        if (!isTag(nodes[i])) continue;
        if (test(nodes[i])) result.push(nodes[i]);
        var childs = getChildren(nodes[i]);
        if (childs) result = result.concat(findAll(test, childs));
    }
    return result;
}
exports.default = {
    isTag: isTag,
    getAttributeValue: getAttributeValue,
    getName: getName,
    getChildren: getChildren,
    getParent: getParent,
    getText: getText,
    removeSubsets: removeSubsets,
    existsOne: existsOne,
    getSiblings: getSiblings,
    hasAttrib: hasAttrib,
    findOne: findOne,
    findAll: findAll
};

},{"b0d5511d5461501f":"lycDL"}],"1DFc7":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var VoidTag = /** @class */ function() {
    function VoidTag(addClosingSlash, tags) {
        if (addClosingSlash === void 0) addClosingSlash = false;
        this.addClosingSlash = addClosingSlash;
        if (Array.isArray(tags)) this.voidTags = tags.reduce(function(set, tag) {
            return set.add(tag.toLowerCase()).add(tag.toUpperCase()).add(tag);
        }, new Set());
        else this.voidTags = [
            "area",
            "base",
            "br",
            "col",
            "embed",
            "hr",
            "img",
            "input",
            "link",
            "meta",
            "param",
            "source",
            "track",
            "wbr"
        ].reduce(function(set, tag) {
            return set.add(tag.toLowerCase()).add(tag.toUpperCase()).add(tag);
        }, new Set());
    }
    VoidTag.prototype.formatNode = function(tag, attrs, innerHTML) {
        var addClosingSlash = this.addClosingSlash;
        var closingSpace = addClosingSlash && attrs && !attrs.endsWith(" ") ? " " : "";
        var closingSlash = addClosingSlash ? "".concat(closingSpace, "/") : "";
        return this.isVoidElement(tag.toLowerCase()) ? "<".concat(tag).concat(attrs).concat(closingSlash, ">") : "<".concat(tag).concat(attrs, ">").concat(innerHTML, "</").concat(tag, ">");
    };
    VoidTag.prototype.isVoidElement = function(tag) {
        return this.voidTags.has(tag);
    };
    return VoidTag;
}();
exports.default = VoidTag;

},{}],"2O1SC":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
var he_1 = require("d8f3a6bdee21c0ef");
var node_1 = __importDefault(require("dc1b5fdb4b2fbd0b"));
var type_1 = __importDefault(require("6313170cd1622db6"));
/**
 * TextNode to contain a text element in DOM tree.
 * @param {string} value [description]
 */ var TextNode = /** @class */ function(_super) {
    __extends(TextNode, _super);
    function TextNode(rawText, parentNode, range) {
        if (parentNode === void 0) parentNode = null;
        var _this = _super.call(this, parentNode, range) || this;
        /**
         * Node Type declaration.
         * @type {Number}
         */ _this.nodeType = type_1.default.TEXT_NODE;
        _this.rawTagName = "";
        _this._rawText = rawText;
        return _this;
    }
    TextNode.prototype.clone = function() {
        return new TextNode(this._rawText, null);
    };
    Object.defineProperty(TextNode.prototype, "rawText", {
        get: function() {
            return this._rawText;
        },
        /**
         * Set rawText and invalidate trimmed caches
         */ set: function(text) {
            this._rawText = text;
            this._trimmedRawText = void 0;
            this._trimmedText = void 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TextNode.prototype, "trimmedRawText", {
        /**
         * Returns raw text with all whitespace trimmed except single leading/trailing non-breaking space
         */ get: function() {
            if (this._trimmedRawText !== undefined) return this._trimmedRawText;
            this._trimmedRawText = trimText(this.rawText);
            return this._trimmedRawText;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TextNode.prototype, "trimmedText", {
        /**
         * Returns text with all whitespace trimmed except single leading/trailing non-breaking space
         */ get: function() {
            if (this._trimmedText !== undefined) return this._trimmedText;
            this._trimmedText = trimText(this.text);
            return this._trimmedText;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TextNode.prototype, "text", {
        /**
         * Get unescaped text value of current node and its children.
         * @return {string} text content
         */ get: function() {
            return (0, he_1.decode)(this.rawText);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TextNode.prototype, "isWhitespace", {
        /**
         * Detect if the node contains only white space.
         * @return {boolean}
         */ get: function() {
            return /^(\s|&nbsp;)*$/.test(this.rawText);
        },
        enumerable: false,
        configurable: true
    });
    TextNode.prototype.toString = function() {
        return this.rawText;
    };
    return TextNode;
}(node_1.default);
exports.default = TextNode;
/**
 * Trim whitespace except single leading/trailing non-breaking space
 */ function trimText(text) {
    var i = 0;
    var startPos;
    var endPos;
    while(i >= 0 && i < text.length){
        if (/\S/.test(text[i])) {
            if (startPos === undefined) {
                startPos = i;
                i = text.length;
            } else {
                endPos = i;
                i = void 0;
            }
        }
        if (startPos === undefined) i++;
        else i--;
    }
    if (startPos === undefined) startPos = 0;
    if (endPos === undefined) endPos = text.length - 1;
    var hasLeadingSpace = startPos > 0 && /[^\S\r\n]/.test(text[startPos - 1]);
    var hasTrailingSpace = endPos < text.length - 1 && /[^\S\r\n]/.test(text[endPos + 1]);
    return (hasLeadingSpace ? " " : "") + text.slice(startPos, endPos + 1) + (hasTrailingSpace ? " " : "");
}

},{"d8f3a6bdee21c0ef":"37RbC","dc1b5fdb4b2fbd0b":"gd8Te","6313170cd1622db6":"lycDL"}],"gsUOd":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var html_1 = require("b41688723e151bbb");
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return html_1.parse;
    }
});

},{"b41688723e151bbb":"8Cy27"}],"8F3jJ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var html_1 = require("32720ad11ff4b900");
/**
 * Parses HTML and returns a root element
 * Parse a chuck of HTML source.
 */ function valid(data, options) {
    if (options === void 0) options = {};
    var stack = (0, html_1.base_parse)(data, options);
    return Boolean(stack.length === 1);
}
exports.default = valid;

},{"32720ad11ff4b900":"8Cy27"}]},["3OGCC","3fM8f"], "3fM8f", "parcelRequire30ab")

//# sourceMappingURL=index.870a179d.js.map
