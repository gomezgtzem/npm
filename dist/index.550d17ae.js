// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
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
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
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
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"eBPpe":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "22b01981550d17ae";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"ajoad":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _sweetalert2Js = require("../../../node_modules/sweetalert2/src/sweetalert2.js");
var _sweetalert2JsDefault = parcelHelpers.interopDefault(_sweetalert2Js);
_sweetalert2JsDefault.default.fire({
    title: "Error!",
    text: "Do you want to continue",
    icon: "error",
    confirmButtonText: "Cool"
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3","../../../node_modules/sweetalert2/src/sweetalert2.js":"48x8v"}],"lTbh3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"48x8v":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _sweetAlertJs = require("./SweetAlert.js");
var _sweetAlertJsDefault = parcelHelpers.interopDefault(_sweetAlertJs);
const Swal = _sweetAlertJsDefault.default;
Swal.default = Swal;
exports.default = Swal;

},{"./SweetAlert.js":"60y9N","@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"60y9N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _dismissReasonJs = require("./utils/DismissReason.js");
var _staticMethodsJs = require("./staticMethods.js");
var _instanceMethodsJs = require("./instanceMethods.js");
var _privatePropsJs = require("./privateProps.js");
var _privatePropsJsDefault = parcelHelpers.interopDefault(_privatePropsJs);
let currentInstance;
class SweetAlert {
    constructor(...args){
        // Prevent run in Node env
        if (typeof window === 'undefined') return;
        currentInstance = this;
        const outerParams = Object.freeze(this.constructor.argsToParams(args));
        Object.defineProperties(this, {
            params: {
                value: outerParams,
                writable: false,
                enumerable: true,
                configurable: true
            }
        });
        const promise = this._main(this.params);
        _privatePropsJsDefault.default.promise.set(this, promise);
    }
    // `catch` cannot be the name of a module export, so we define our thenable methods here instead
    then(onFulfilled) {
        const promise1 = _privatePropsJsDefault.default.promise.get(this);
        return promise1.then(onFulfilled);
    }
    finally(onFinally) {
        const promise1 = _privatePropsJsDefault.default.promise.get(this);
        return promise1.finally(onFinally);
    }
}
// Assign instance methods from src/instanceMethods/*.js to prototype
Object.assign(SweetAlert.prototype, _instanceMethodsJs);
// Assign static methods from src/staticMethods/*.js to constructor
Object.assign(SweetAlert, _staticMethodsJs);
// Proxy to instance methods to constructor, for now, for backwards compatibility
Object.keys(_instanceMethodsJs).forEach((key)=>{
    SweetAlert[key] = function(...args1) {
        if (currentInstance) return currentInstance[key](...args1);
    };
});
SweetAlert.DismissReason = _dismissReasonJs.DismissReason;
SweetAlert.version = '11.1.7';
exports.default = SweetAlert;

},{"./utils/DismissReason.js":"eC93E","./staticMethods.js":"gcjgq","./instanceMethods.js":"kUtGx","./privateProps.js":"aOEMu","@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"eC93E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DismissReason", ()=>DismissReason
);
const DismissReason = Object.freeze({
    cancel: 'cancel',
    backdrop: 'backdrop',
    close: 'close',
    esc: 'esc',
    timer: 'timer'
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"gcjgq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isValidParameter", ()=>_paramsJs.isValidParameter
);
parcelHelpers.export(exports, "isUpdatableParameter", ()=>_paramsJs.isUpdatableParameter
);
parcelHelpers.export(exports, "isDeprecatedParameter", ()=>_paramsJs.isDeprecatedParameter
);
var _argsToParamsJs = require("./staticMethods/argsToParams.js");
parcelHelpers.exportAll(_argsToParamsJs, exports);
var _domJs = require("./staticMethods/dom.js");
parcelHelpers.exportAll(_domJs, exports);
var _fireJs = require("./staticMethods/fire.js");
parcelHelpers.exportAll(_fireJs, exports);
var _mixinJs = require("./staticMethods/mixin.js");
parcelHelpers.exportAll(_mixinJs, exports);
var _showLoadingJs = require("./staticMethods/showLoading.js");
parcelHelpers.exportAll(_showLoadingJs, exports);
var _timerJs = require("./staticMethods/timer.js");
parcelHelpers.exportAll(_timerJs, exports);
var _bindClickHandlerJs = require("./staticMethods/bindClickHandler.js");
parcelHelpers.exportAll(_bindClickHandlerJs, exports);
var _paramsJs = require("./utils/params.js");

},{"./staticMethods/argsToParams.js":"lAqc1","./staticMethods/dom.js":"1UUYb","./staticMethods/fire.js":"fQQ1z","./staticMethods/mixin.js":"cDuDS","./staticMethods/showLoading.js":"9x1Ls","./staticMethods/timer.js":"s627T","./staticMethods/bindClickHandler.js":"6Cj8C","./utils/params.js":"1Z6kQ","@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"lAqc1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "argsToParams", ()=>argsToParams
);
var _utilsJs = require("../utils/utils.js");
const isJqueryElement = (elem)=>typeof elem === 'object' && elem.jquery
;
const isElement = (elem)=>elem instanceof Element || isJqueryElement(elem)
;
const argsToParams = (args)=>{
    const params = {
    };
    if (typeof args[0] === 'object' && !isElement(args[0])) Object.assign(params, args[0]);
    else [
        'title',
        'html',
        'icon'
    ].forEach((name, index)=>{
        const arg = args[index];
        if (typeof arg === 'string' || isElement(arg)) params[name] = arg;
        else if (arg !== undefined) _utilsJs.error(`Unexpected type of ${name}! Expected "string" or "Element", got ${typeof arg}`);
    });
    return params;
};

},{"../utils/utils.js":"k0tm2","@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"k0tm2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "consolePrefix", ()=>consolePrefix
);
parcelHelpers.export(exports, "uniqueArray", ()=>uniqueArray
);
parcelHelpers.export(exports, "capitalizeFirstLetter", ()=>capitalizeFirstLetter
);
parcelHelpers.export(exports, "toArray", ()=>toArray
);
parcelHelpers.export(exports, "warn", ()=>warn
);
parcelHelpers.export(exports, "error", ()=>error
);
parcelHelpers.export(exports, "warnOnce", ()=>warnOnce
);
parcelHelpers.export(exports, "warnAboutDeprecation", ()=>warnAboutDeprecation
);
parcelHelpers.export(exports, "callIfFunction", ()=>callIfFunction
);
parcelHelpers.export(exports, "hasToPromiseFn", ()=>hasToPromiseFn
);
parcelHelpers.export(exports, "asPromise", ()=>asPromise
);
parcelHelpers.export(exports, "isPromise", ()=>isPromise
);
const consolePrefix = 'SweetAlert2:';
const uniqueArray = (arr)=>{
    const result = [];
    for(let i = 0; i < arr.length; i++)if (result.indexOf(arr[i]) === -1) result.push(arr[i]);
    return result;
};
const capitalizeFirstLetter = (str)=>str.charAt(0).toUpperCase() + str.slice(1)
;
const toArray = (nodeList)=>Array.prototype.slice.call(nodeList)
;
const warn = (message)=>{
    console.warn(`${consolePrefix} ${typeof message === 'object' ? message.join(' ') : message}`);
};
const error = (message)=>{
    console.error(`${consolePrefix} ${message}`);
};
/**
 * Private global state for `warnOnce`
 * @type {Array}
 * @private
 */ const previousWarnOnceMessages = [];
const warnOnce = (message)=>{
    if (!previousWarnOnceMessages.includes(message)) {
        previousWarnOnceMessages.push(message);
        warn(message);
    }
};
const warnAboutDeprecation = (deprecatedParam, useInstead)=>{
    warnOnce(`"${deprecatedParam}" is deprecated and will be removed in the next major release. Please use "${useInstead}" instead.`);
};
const callIfFunction = (arg)=>typeof arg === 'function' ? arg() : arg
;
const hasToPromiseFn = (arg)=>arg && typeof arg.toPromise === 'function'
;
const asPromise = (arg)=>hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg)
;
const isPromise = (arg)=>arg && Promise.resolve(arg) === arg
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"1UUYb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getContainer", ()=>_indexJs.getContainer
);
parcelHelpers.export(exports, "getPopup", ()=>_indexJs.getPopup
);
parcelHelpers.export(exports, "getTitle", ()=>_indexJs.getTitle
);
parcelHelpers.export(exports, "getHtmlContainer", ()=>_indexJs.getHtmlContainer
);
parcelHelpers.export(exports, "getImage", ()=>_indexJs.getImage
);
parcelHelpers.export(exports, "getIcon", ()=>_indexJs.getIcon
);
parcelHelpers.export(exports, "getInputLabel", ()=>_indexJs.getInputLabel
);
parcelHelpers.export(exports, "getCloseButton", ()=>_indexJs.getCloseButton
);
parcelHelpers.export(exports, "getActions", ()=>_indexJs.getActions
);
parcelHelpers.export(exports, "getConfirmButton", ()=>_indexJs.getConfirmButton
);
parcelHelpers.export(exports, "getDenyButton", ()=>_indexJs.getDenyButton
);
parcelHelpers.export(exports, "getCancelButton", ()=>_indexJs.getCancelButton
);
parcelHelpers.export(exports, "getLoader", ()=>_indexJs.getLoader
);
parcelHelpers.export(exports, "getFooter", ()=>_indexJs.getFooter
);
parcelHelpers.export(exports, "getTimerProgressBar", ()=>_indexJs.getTimerProgressBar
);
parcelHelpers.export(exports, "getFocusableElements", ()=>_indexJs.getFocusableElements
);
parcelHelpers.export(exports, "getValidationMessage", ()=>_indexJs.getValidationMessage
);
parcelHelpers.export(exports, "isLoading", ()=>_indexJs.isLoading
);
parcelHelpers.export(exports, "isVisible", ()=>isVisible
);
parcelHelpers.export(exports, "clickConfirm", ()=>clickConfirm
);
parcelHelpers.export(exports, "clickDeny", ()=>clickDeny
);
parcelHelpers.export(exports, "clickCancel", ()=>clickCancel
);
var _indexJs = require("../utils/dom/index.js");
var _domUtilsJs = require("../utils/dom/domUtils.js");
const isVisible = ()=>{
    return _domUtilsJs.isVisible(_indexJs.getPopup());
};
const clickConfirm = ()=>_indexJs.getConfirmButton() && _indexJs.getConfirmButton().click()
;
const clickDeny = ()=>_indexJs.getDenyButton() && _indexJs.getDenyButton().click()
;
const clickCancel = ()=>_indexJs.getCancelButton() && _indexJs.getCancelButton().click()
;

},{"../utils/dom/index.js":"12RRK","../utils/dom/domUtils.js":"25xyi","@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"12RRK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _domUtilsJs = require("./domUtils.js");
parcelHelpers.exportAll(_domUtilsJs, exports);
var _initJs = require("./init.js");
parcelHelpers.exportAll(_initJs, exports);
var _gettersJs = require("./getters.js");
parcelHelpers.exportAll(_gettersJs, exports);
var _parseHtmlToContainerJs = require("./parseHtmlToContainer.js");
parcelHelpers.exportAll(_parseHtmlToContainerJs, exports);
var _animationEndEventJs = require("./animationEndEvent.js");
parcelHelpers.exportAll(_animationEndEventJs, exports);
var _measureScrollbarJs = require("./measureScrollbar.js");
parcelHelpers.exportAll(_measureScrollbarJs, exports);
var _renderJs = require("./renderers/render.js");
parcelHelpers.exportAll(_renderJs, exports);

},{"./domUtils.js":"25xyi","./init.js":"2t1LE","./getters.js":"gH9CJ","./parseHtmlToContainer.js":"gRFAK","./animationEndEvent.js":"3XoTW","./measureScrollbar.js":"ilnxx","./renderers/render.js":"6obSw","@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"25xyi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "states", ()=>states
);
parcelHelpers.export(exports, "setInnerHtml", ()=>setInnerHtml
);
parcelHelpers.export(exports, "hasClass", ()=>hasClass
);
parcelHelpers.export(exports, "applyCustomClass", ()=>applyCustomClass
);
parcelHelpers.export(exports, "getInput", ()=>getInput
);
parcelHelpers.export(exports, "focusInput", ()=>focusInput
);
parcelHelpers.export(exports, "toggleClass", ()=>toggleClass
);
parcelHelpers.export(exports, "addClass", ()=>addClass
);
parcelHelpers.export(exports, "removeClass", ()=>removeClass
);
parcelHelpers.export(exports, "getChildByClass", ()=>getChildByClass
);
parcelHelpers.export(exports, "applyNumericalStyle", ()=>applyNumericalStyle
);
parcelHelpers.export(exports, "show", ()=>show
);
parcelHelpers.export(exports, "hide", ()=>hide
);
parcelHelpers.export(exports, "setStyle", ()=>setStyle
);
parcelHelpers.export(exports, "toggle", ()=>toggle
);
parcelHelpers.export(exports, "isVisible", ()=>isVisible
);
parcelHelpers.export(exports, "allButtonsAreHidden", ()=>allButtonsAreHidden
);
parcelHelpers.export(exports, "isScrollable", ()=>isScrollable
);
parcelHelpers.export(exports, "hasCssAnimation", ()=>hasCssAnimation
);
parcelHelpers.export(exports, "animateTimerProgressBar", ()=>animateTimerProgressBar
);
parcelHelpers.export(exports, "stopTimerProgressBar", ()=>stopTimerProgressBar
);
var _gettersJs = require("./getters.js");
var _classesJs = require("../classes.js");
var _utilsJs = require("../utils.js");
const states = {
    previousBodyPadding: null
};
const setInnerHtml = (elem, html)=>{
    elem.textContent = '';
    if (html) {
        const parser = new DOMParser();
        const parsed = parser.parseFromString(html, `text/html`);
        _utilsJs.toArray(parsed.querySelector('head').childNodes).forEach((child)=>{
            elem.appendChild(child);
        });
        _utilsJs.toArray(parsed.querySelector('body').childNodes).forEach((child)=>{
            elem.appendChild(child);
        });
    }
};
const hasClass = (elem, className)=>{
    if (!className) return false;
    const classList = className.split(/\s+/);
    for(let i = 0; i < classList.length; i++){
        if (!elem.classList.contains(classList[i])) return false;
    }
    return true;
};
const removeCustomClasses = (elem, params)=>{
    _utilsJs.toArray(elem.classList).forEach((className)=>{
        if (!Object.values(_classesJs.swalClasses).includes(className) && !Object.values(_classesJs.iconTypes).includes(className) && !Object.values(params.showClass).includes(className)) elem.classList.remove(className);
    });
};
const applyCustomClass = (elem, params, className)=>{
    removeCustomClasses(elem, params);
    if (params.customClass && params.customClass[className]) {
        if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) return _utilsJs.warn(`Invalid type of customClass.${className}! Expected string or iterable object, got "${typeof params.customClass[className]}"`);
        addClass(elem, params.customClass[className]);
    }
};
const getInput = (popup, inputType)=>{
    if (!inputType) return null;
    switch(inputType){
        case 'select':
        case 'textarea':
        case 'file':
            return getChildByClass(popup, _classesJs.swalClasses[inputType]);
        case 'checkbox':
            return popup.querySelector(`.${_classesJs.swalClasses.checkbox} input`);
        case 'radio':
            return popup.querySelector(`.${_classesJs.swalClasses.radio} input:checked`) || popup.querySelector(`.${_classesJs.swalClasses.radio} input:first-child`);
        case 'range':
            return popup.querySelector(`.${_classesJs.swalClasses.range} input`);
        default:
            return getChildByClass(popup, _classesJs.swalClasses.input);
    }
};
const focusInput = (input)=>{
    input.focus();
    // place cursor at end of text in text input
    if (input.type !== 'file') {
        // http://stackoverflow.com/a/2345915
        const val = input.value;
        input.value = '';
        input.value = val;
    }
};
const toggleClass = (target, classList, condition)=>{
    if (!target || !classList) return;
    if (typeof classList === 'string') classList = classList.split(/\s+/).filter(Boolean);
    classList.forEach((className)=>{
        if (target.forEach) target.forEach((elem)=>{
            condition ? elem.classList.add(className) : elem.classList.remove(className);
        });
        else condition ? target.classList.add(className) : target.classList.remove(className);
    });
};
const addClass = (target, classList)=>{
    toggleClass(target, classList, true);
};
const removeClass = (target, classList)=>{
    toggleClass(target, classList, false);
};
const getChildByClass = (elem, className)=>{
    for(let i = 0; i < elem.childNodes.length; i++){
        if (hasClass(elem.childNodes[i], className)) return elem.childNodes[i];
    }
};
const applyNumericalStyle = (elem, property, value)=>{
    if (value === `${parseInt(value)}`) value = parseInt(value);
    if (value || parseInt(value) === 0) elem.style[property] = typeof value === 'number' ? `${value}px` : value;
    else elem.style.removeProperty(property);
};
const show = (elem, display = 'flex')=>{
    elem.style.display = display;
};
const hide = (elem)=>{
    elem.style.display = 'none';
};
const setStyle = (parent, selector, property, value)=>{
    const el = parent.querySelector(selector);
    if (el) el.style[property] = value;
};
const toggle = (elem, condition, display)=>{
    condition ? show(elem, display) : hide(elem);
};
const isVisible = (elem)=>!!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length))
;
const allButtonsAreHidden = ()=>!isVisible(_gettersJs.getConfirmButton()) && !isVisible(_gettersJs.getDenyButton()) && !isVisible(_gettersJs.getCancelButton())
;
const isScrollable = (elem)=>!!(elem.scrollHeight > elem.clientHeight)
;
const hasCssAnimation = (elem)=>{
    const style = window.getComputedStyle(elem);
    const animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
    const transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
    return animDuration > 0 || transDuration > 0;
};
const animateTimerProgressBar = (timer, reset = false)=>{
    const timerProgressBar = _gettersJs.getTimerProgressBar();
    if (isVisible(timerProgressBar)) {
        if (reset) {
            timerProgressBar.style.transition = 'none';
            timerProgressBar.style.width = '100%';
        }
        setTimeout(()=>{
            timerProgressBar.style.transition = `width ${timer / 1000}s linear`;
            timerProgressBar.style.width = '0%';
        }, 10);
    }
};
const stopTimerProgressBar = ()=>{
    const timerProgressBar = _gettersJs.getTimerProgressBar();
    const timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = '100%';
    const timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    const timerProgressBarPercent = parseInt(timerProgressBarWidth / timerProgressBarFullWidth * 100);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = `${timerProgressBarPercent}%`;
};

},{"./getters.js":"gH9CJ","../classes.js":"7VE26","../utils.js":"k0tm2","@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"gH9CJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getContainer", ()=>getContainer
);
parcelHelpers.export(exports, "elementBySelector", ()=>elementBySelector
);
parcelHelpers.export(exports, "getPopup", ()=>getPopup
);
parcelHelpers.export(exports, "getIcon", ()=>getIcon
);
parcelHelpers.export(exports, "getTitle", ()=>getTitle
);
parcelHelpers.export(exports, "getHtmlContainer", ()=>getHtmlContainer
);
parcelHelpers.export(exports, "getImage", ()=>getImage
);
parcelHelpers.export(exports, "getProgressSteps", ()=>getProgressSteps
);
parcelHelpers.export(exports, "getValidationMessage", ()=>getValidationMessage
);
parcelHelpers.export(exports, "getConfirmButton", ()=>getConfirmButton
);
parcelHelpers.export(exports, "getDenyButton", ()=>getDenyButton
);
parcelHelpers.export(exports, "getInputLabel", ()=>getInputLabel
);
parcelHelpers.export(exports, "getLoader", ()=>getLoader
);
parcelHelpers.export(exports, "getCancelButton", ()=>getCancelButton
);
parcelHelpers.export(exports, "getActions", ()=>getActions
);
parcelHelpers.export(exports, "getFooter", ()=>getFooter
);
parcelHelpers.export(exports, "getTimerProgressBar", ()=>getTimerProgressBar
);
parcelHelpers.export(exports, "getCloseButton", ()=>getCloseButton
);
parcelHelpers.export(exports, "getFocusableElements", ()=>getFocusableElements
);
parcelHelpers.export(exports, "isModal", ()=>isModal
);
parcelHelpers.export(exports, "isToast", ()=>isToast
);
parcelHelpers.export(exports, "isLoading", ()=>isLoading
);
var _classesJs = require("../classes.js");
var _utilsJs = require("../utils.js");
var _domUtilsJs = require("./domUtils.js");
const getContainer = ()=>document.body.querySelector(`.${_classesJs.swalClasses.container}`)
;
const elementBySelector = (selectorString)=>{
    const container = getContainer();
    return container ? container.querySelector(selectorString) : null;
};
const elementByClass = (className)=>{
    return elementBySelector(`.${className}`);
};
const getPopup = ()=>elementByClass(_classesJs.swalClasses.popup)
;
const getIcon = ()=>elementByClass(_classesJs.swalClasses.icon)
;
const getTitle = ()=>elementByClass(_classesJs.swalClasses.title)
;
const getHtmlContainer = ()=>elementByClass(_classesJs.swalClasses['html-container'])
;
const getImage = ()=>elementByClass(_classesJs.swalClasses.image)
;
const getProgressSteps = ()=>elementByClass(_classesJs.swalClasses['progress-steps'])
;
const getValidationMessage = ()=>elementByClass(_classesJs.swalClasses['validation-message'])
;
const getConfirmButton = ()=>elementBySelector(`.${_classesJs.swalClasses.actions} .${_classesJs.swalClasses.confirm}`)
;
const getDenyButton = ()=>elementBySelector(`.${_classesJs.swalClasses.actions} .${_classesJs.swalClasses.deny}`)
;
const getInputLabel = ()=>elementByClass(_classesJs.swalClasses['input-label'])
;
const getLoader = ()=>elementBySelector(`.${_classesJs.swalClasses.loader}`)
;
const getCancelButton = ()=>elementBySelector(`.${_classesJs.swalClasses.actions} .${_classesJs.swalClasses.cancel}`)
;
const getActions = ()=>elementByClass(_classesJs.swalClasses.actions)
;
const getFooter = ()=>elementByClass(_classesJs.swalClasses.footer)
;
const getTimerProgressBar = ()=>elementByClass(_classesJs.swalClasses['timer-progress-bar'])
;
const getCloseButton = ()=>elementByClass(_classesJs.swalClasses.close)
;
// https://github.com/jkup/focusable/blob/master/index.js
const focusable = `\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n`;
const getFocusableElements = ()=>{
    const focusableElementsWithTabindex = _utilsJs.toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'))// sort according to tabindex
    .sort((a, b)=>{
        a = parseInt(a.getAttribute('tabindex'));
        b = parseInt(b.getAttribute('tabindex'));
        if (a > b) return 1;
        else if (a < b) return -1;
        return 0;
    });
    const otherFocusableElements = _utilsJs.toArray(getPopup().querySelectorAll(focusable)).filter((el)=>el.getAttribute('tabindex') !== '-1'
    );
    return _utilsJs.uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter((el)=>_domUtilsJs.isVisible(el)
    );
};
const isModal = ()=>{
    return !isToast() && !document.body.classList.contains(_classesJs.swalClasses['no-backdrop']);
};
const isToast = ()=>{
    return document.body.classList.contains(_classesJs.swalClasses['toast-shown']);
};
const isLoading = ()=>{
    return getPopup().hasAttribute('data-loading');
};

},{"../classes.js":"7VE26","../utils.js":"k0tm2","./domUtils.js":"25xyi","@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"7VE26":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "swalPrefix", ()=>swalPrefix
);
parcelHelpers.export(exports, "prefix", ()=>prefix
);
parcelHelpers.export(exports, "swalClasses", ()=>swalClasses
);
parcelHelpers.export(exports, "iconTypes", ()=>iconTypes
);
const swalPrefix = 'swal2-';
const prefix = (items)=>{
    const result = {
    };
    for(const i in items)result[items[i]] = swalPrefix + items[i];
    return result;
};
const swalClasses = prefix([
    'container',
    'shown',
    'height-auto',
    'iosfix',
    'popup',
    'modal',
    'no-backdrop',
    'no-transition',
    'toast',
    'toast-shown',
    'show',
    'hide',
    'close',
    'title',
    'html-container',
    'actions',
    'confirm',
    'deny',
    'cancel',
    'default-outline',
    'footer',
    'icon',
    'icon-content',
    'image',
    'input',
    'file',
    'range',
    'select',
    'radio',
    'checkbox',
    'label',
    'textarea',
    'inputerror',
    'input-label',
    'validation-message',
    'progress-steps',
    'active-progress-step',
    'progress-step',
    'progress-step-line',
    'loader',
    'loading',
    'styled',
    'top',
    'top-start',
    'top-end',
    'top-left',
    'top-right',
    'center',
    'center-start',
    'center-end',
    'center-left',
    'center-right',
    'bottom',
    'bottom-start',
    'bottom-end',
    'bottom-left',
    'bottom-right',
    'grow-row',
    'grow-column',
    'grow-fullscreen',
    'rtl',
    'timer-progress-bar',
    'timer-progress-bar-container',
    'scrollbar-measure',
    'icon-success',
    'icon-warning',
    'icon-info',
    'icon-question',
    'icon-error', 
]);
const iconTypes = prefix([
    'success',
    'warning',
    'info',
    'question',
    'error'
]);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"2t1LE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>init
);
var _classesJs = require("../classes.js");
var _gettersJs = require("./getters.js");
var _domUtilsJs = require("./domUtils.js");
var _isNodeEnvJs = require("../isNodeEnv.js");
var _utilsJs = require("../utils.js");
var _sweetalert2Js = require("../../sweetalert2.js");
var _sweetalert2JsDefault = parcelHelpers.interopDefault(_sweetalert2Js);
const sweetHTML = `\n <div aria-labelledby="${_classesJs.swalClasses.title}" aria-describedby="${_classesJs.swalClasses['html-container']}" class="${_classesJs.swalClasses.popup}" tabindex="-1">\n   <button type="button" class="${_classesJs.swalClasses.close}"></button>\n   <ul class="${_classesJs.swalClasses['progress-steps']}"></ul>\n   <div class="${_classesJs.swalClasses.icon}"></div>\n   <img class="${_classesJs.swalClasses.image}" />\n   <h2 class="${_classesJs.swalClasses.title}" id="${_classesJs.swalClasses.title}"></h2>\n   <div class="${_classesJs.swalClasses['html-container']}" id="${_classesJs.swalClasses['html-container']}"></div>\n   <input class="${_classesJs.swalClasses.input}" />\n   <input type="file" class="${_classesJs.swalClasses.file}" />\n   <div class="${_classesJs.swalClasses.range}">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="${_classesJs.swalClasses.select}"></select>\n   <div class="${_classesJs.swalClasses.radio}"></div>\n   <label for="${_classesJs.swalClasses.checkbox}" class="${_classesJs.swalClasses.checkbox}">\n     <input type="checkbox" />\n     <span class="${_classesJs.swalClasses.label}"></span>\n   </label>\n   <textarea class="${_classesJs.swalClasses.textarea}"></textarea>\n   <div class="${_classesJs.swalClasses['validation-message']}" id="${_classesJs.swalClasses['validation-message']}"></div>\n   <div class="${_classesJs.swalClasses.actions}">\n     <div class="${_classesJs.swalClasses.loader}"></div>\n     <button type="button" class="${_classesJs.swalClasses.confirm}"></button>\n     <button type="button" class="${_classesJs.swalClasses.deny}"></button>\n     <button type="button" class="${_classesJs.swalClasses.cancel}"></button>\n   </div>\n   <div class="${_classesJs.swalClasses.footer}"></div>\n   <div class="${_classesJs.swalClasses['timer-progress-bar-container']}">\n     <div class="${_classesJs.swalClasses['timer-progress-bar']}"></div>\n   </div>\n </div>\n`.replace(/(^|\n)\s*/g, '');
const resetOldContainer = ()=>{
    const oldContainer = _gettersJs.getContainer();
    if (!oldContainer) return false;
    oldContainer.remove();
    _domUtilsJs.removeClass([
        document.documentElement,
        document.body
    ], [
        _classesJs.swalClasses['no-backdrop'],
        _classesJs.swalClasses['toast-shown'],
        _classesJs.swalClasses['has-column']
    ]);
    return true;
};
const resetValidationMessage = ()=>{
    if (_sweetalert2JsDefault.default.isVisible()) _sweetalert2JsDefault.default.resetValidationMessage();
};
const addInputChangeListeners = ()=>{
    const popup = _gettersJs.getPopup();
    const input = _domUtilsJs.getChildByClass(popup, _classesJs.swalClasses.input);
    const file = _domUtilsJs.getChildByClass(popup, _classesJs.swalClasses.file);
    const range = popup.querySelector(`.${_classesJs.swalClasses.range} input`);
    const rangeOutput = popup.querySelector(`.${_classesJs.swalClasses.range} output`);
    const select = _domUtilsJs.getChildByClass(popup, _classesJs.swalClasses.select);
    const checkbox = popup.querySelector(`.${_classesJs.swalClasses.checkbox} input`);
    const textarea = _domUtilsJs.getChildByClass(popup, _classesJs.swalClasses.textarea);
    input.oninput = resetValidationMessage;
    file.onchange = resetValidationMessage;
    select.onchange = resetValidationMessage;
    checkbox.onchange = resetValidationMessage;
    textarea.oninput = resetValidationMessage;
    range.oninput = ()=>{
        resetValidationMessage();
        rangeOutput.value = range.value;
    };
    range.onchange = ()=>{
        resetValidationMessage();
        range.nextSibling.value = range.value;
    };
};
const getTarget = (target)=>typeof target === 'string' ? document.querySelector(target) : target
;
const setupAccessibility = (params)=>{
    const popup = _gettersJs.getPopup();
    popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
    popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');
    if (!params.toast) popup.setAttribute('aria-modal', 'true');
};
const setupRTL = (targetElement)=>{
    if (window.getComputedStyle(targetElement).direction === 'rtl') _domUtilsJs.addClass(_gettersJs.getContainer(), _classesJs.swalClasses.rtl);
};
const init = (params)=>{
    // Clean up the old popup container if it exists
    const oldContainerExisted = resetOldContainer();
    /* istanbul ignore if */ if (_isNodeEnvJs.isNodeEnv()) {
        _utilsJs.error('SweetAlert2 requires document to initialize');
        return;
    }
    const container = document.createElement('div');
    container.className = _classesJs.swalClasses.container;
    if (oldContainerExisted) _domUtilsJs.addClass(container, _classesJs.swalClasses['no-transition']);
    _domUtilsJs.setInnerHtml(container, sweetHTML);
    const targetElement = getTarget(params.target);
    targetElement.appendChild(container);
    setupAccessibility(params);
    setupRTL(targetElement);
    addInputChangeListeners();
};

},{"../classes.js":"7VE26","./getters.js":"gH9CJ","./domUtils.js":"25xyi","../isNodeEnv.js":"eHlWB","../utils.js":"k0tm2","../../sweetalert2.js":"48x8v","@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"eHlWB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isNodeEnv", ()=>isNodeEnv
);
const isNodeEnv = ()=>typeof window === 'undefined' || typeof document === 'undefined'
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"gRFAK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "parseHtmlToContainer", ()=>parseHtmlToContainer
);
var _domUtilsJs = require("./domUtils.js");
const parseHtmlToContainer = (param, target)=>{
    // DOM element
    if (param instanceof HTMLElement) target.appendChild(param);
    else if (typeof param === 'object') handleObject(param, target);
    else if (param) _domUtilsJs.setInnerHtml(target, param);
};
const handleObject = (param, target)=>{
    // JQuery element(s)
    if (param.jquery) handleJqueryElem(target, param);
    else _domUtilsJs.setInnerHtml(target, param.toString());
};
const handleJqueryElem = (target, elem)=>{
    target.textContent = '';
    if (0 in elem) for(let i = 0; i in elem; i++)target.appendChild(elem[i].cloneNode(true));
    else target.appendChild(elem.cloneNode(true));
};

},{"./domUtils.js":"25xyi","@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"3XoTW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animationEndEvent", ()=>animationEndEvent
);
var _isNodeEnvJs = require("../isNodeEnv.js");
const animationEndEvent = (()=>{
    // Prevent run in Node env
    /* istanbul ignore if */ if (_isNodeEnvJs.isNodeEnv()) return false;
    const testEl = document.createElement('div');
    const transEndEventNames = {
        WebkitAnimation: 'webkitAnimationEnd',
        OAnimation: 'oAnimationEnd oanimationend',
        animation: 'animationend'
    };
    for(const i in transEndEventNames){
        if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== 'undefined') return transEndEventNames[i];
    }
    return false;
})();

},{"../isNodeEnv.js":"eHlWB","@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"ilnxx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "measureScrollbar", ()=>measureScrollbar
);
var _classesJs = require("../classes.js");
const measureScrollbar = ()=>{
    const scrollDiv = document.createElement('div');
    scrollDiv.className = _classesJs.swalClasses['scrollbar-measure'];
    document.body.appendChild(scrollDiv);
    const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
};

},{"../classes.js":"7VE26","@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"6obSw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "render", ()=>render
);
var _gettersJs = require("../getters.js");
var _renderActionsJs = require("./renderActions.js");
var _renderContainerJs = require("./renderContainer.js");
var _renderContentJs = require("./renderContent.js");
var _renderFooterJs = require("./renderFooter.js");
var _renderCloseButtonJs = require("./renderCloseButton.js");
var _renderIconJs = require("./renderIcon.js");
var _renderImageJs = require("./renderImage.js");
var _renderProgressStepsJs = require("./renderProgressSteps.js");
var _renderTitleJs = require("./renderTitle.js");
var _renderPopupJs = require("./renderPopup.js");
const render = (instance, params)=>{
    _renderPopupJs.renderPopup(instance, params);
    _renderContainerJs.renderContainer(instance, params);
    _renderProgressStepsJs.renderProgressSteps(instance, params);
    _renderIconJs.renderIcon(instance, params);
    _renderImageJs.renderImage(instance, params);
    _renderTitleJs.renderTitle(instance, params);
    _renderCloseButtonJs.renderCloseButton(instance, params);
    _renderContentJs.renderContent(instance, params);
    _renderActionsJs.renderActions(instance, params);
    _renderFooterJs.renderFooter(instance, params);
    if (typeof params.didRender === 'function') params.didRender(_gettersJs.getPopup());
};

},{"../getters.js":"gH9CJ","./renderActions.js":"e6Mf3","./renderContainer.js":"1LcYd","./renderContent.js":"gCeSB","./renderFooter.js":"4zukM","./renderCloseButton.js":"cDRgk","./renderIcon.js":"6Igih","./renderImage.js":"lSctF","./renderProgressSteps.js":"hcESp","./renderTitle.js":"5XUSo","./renderPopup.js":"1FdPk","@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"e6Mf3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderActions", ()=>renderActions
);
var _classesJs = require("../../classes.js");
var _indexJs = require("../../dom/index.js");
var _utilsJs = require("../../utils.js");
const renderActions = (instance, params)=>{
    const actions = _indexJs.getActions();
    const loader = _indexJs.getLoader();
    const confirmButton = _indexJs.getConfirmButton();
    const denyButton = _indexJs.getDenyButton();
    const cancelButton = _indexJs.getCancelButton();
    // Actions (buttons) wrapper
    if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) _indexJs.hide(actions);
    else _indexJs.show(actions);
    // Custom class
    _indexJs.applyCustomClass(actions, params, 'actions');
    // Render buttons
    renderButton(confirmButton, 'confirm', params);
    renderButton(denyButton, 'deny', params);
    renderButton(cancelButton, 'cancel', params);
    handleButtonsStyling(confirmButton, denyButton, cancelButton, params);
    if (params.reverseButtons) {
        actions.insertBefore(cancelButton, loader);
        actions.insertBefore(denyButton, loader);
        actions.insertBefore(confirmButton, loader);
    }
    // Loader
    _indexJs.setInnerHtml(loader, params.loaderHtml);
    _indexJs.applyCustomClass(loader, params, 'loader');
};
function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
    if (!params.buttonsStyling) return _indexJs.removeClass([
        confirmButton,
        denyButton,
        cancelButton
    ], _classesJs.swalClasses.styled);
    _indexJs.addClass([
        confirmButton,
        denyButton,
        cancelButton
    ], _classesJs.swalClasses.styled);
    // Buttons background colors
    if (params.confirmButtonColor) {
        confirmButton.style.backgroundColor = params.confirmButtonColor;
        _indexJs.addClass(confirmButton, _classesJs.swalClasses['default-outline']);
    }
    if (params.denyButtonColor) {
        denyButton.style.backgroundColor = params.denyButtonColor;
        _indexJs.addClass(denyButton, _classesJs.swalClasses['default-outline']);
    }
    if (params.cancelButtonColor) {
        cancelButton.style.backgroundColor = params.cancelButtonColor;
        _indexJs.addClass(cancelButton, _classesJs.swalClasses['default-outline']);
    }
}
function renderButton(button, buttonType, params) {
    _indexJs.toggle(button, params[`show${_utilsJs.capitalizeFirstLetter(buttonType)}Button`], 'inline-block');
    _indexJs.setInnerHtml(button, params[`${buttonType}ButtonText`]) // Set caption text
    ;
    button.setAttribute('aria-label', params[`${buttonType}ButtonAriaLabel`]) // ARIA label
    ;
    // Add buttons custom classes
    button.className = _classesJs.swalClasses[buttonType];
    _indexJs.applyCustomClass(button, params, `${buttonType}Button`);
    _indexJs.addClass(button, params[`${buttonType}ButtonClass`]);
}

},{"../../classes.js":"7VE26","../../dom/index.js":"12RRK","../../utils.js":"k0tm2","@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"1LcYd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderContainer", ()=>renderContainer
);
var _classesJs = require("../../classes.js");
var _utilsJs = require("../../utils.js");
var _indexJs = require("../../dom/index.js");
function handleBackdropParam(container, backdrop) {
    if (typeof backdrop === 'string') container.style.background = backdrop;
    else if (!backdrop) _indexJs.addClass([
        document.documentElement,
        document.body
    ], _classesJs.swalClasses['no-backdrop']);
}
function handlePositionParam(container, position) {
    if (position in _classesJs.swalClasses) _indexJs.addClass(container, _classesJs.swalClasses[position]);
    else {
        _utilsJs.warn('The "position" parameter is not valid, defaulting to "center"');
        _indexJs.addClass(container, _classesJs.swalClasses.center);
    }
}
function handleGrowParam(container, grow) {
    if (grow && typeof grow === 'string') {
        const growClass = `grow-${grow}`;
        if (growClass in _classesJs.swalClasses) _indexJs.addClass(container, _classesJs.swalClasses[growClass]);
    }
}
const renderContainer = (instance, params)=>{
    const container = _indexJs.getContainer();
    if (!container) return;
    handleBackdropParam(container, params.backdrop);
    handlePositionParam(container, params.position);
    handleGrowParam(container, params.grow);
    // Custom class
    _indexJs.applyCustomClass(container, params, 'container');
};

},{"../../classes.js":"7VE26","../../utils.js":"k0tm2","../../dom/index.js":"12RRK","@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"gCeSB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderContent", ()=>renderContent
);
var _indexJs = require("../../dom/index.js");
var _renderInputJs = require("./renderInput.js");
const renderContent = (instance, params)=>{
    const htmlContainer = _indexJs.getHtmlContainer();
    _indexJs.applyCustomClass(htmlContainer, params, 'htmlContainer');
    // Content as HTML
    if (params.html) {
        _indexJs.parseHtmlToContainer(params.html, htmlContainer);
        _indexJs.show(htmlContainer, 'block');
    // Content as plain text
    } else if (params.text) {
        htmlContainer.textContent = params.text;
        _indexJs.show(htmlContainer, 'block');
    // No content
    } else _indexJs.hide(htmlContainer);
    _renderInputJs.renderInput(instance, params);
};

},{"../../dom/index.js":"12RRK","./renderInput.js":"1bPmn","@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"1bPmn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderInput", ()=>renderInput
);
var _classesJs = require("../../classes.js");
var _utilsJs = require("../../utils.js");
var _indexJs = require("../../dom/index.js");
var _privatePropsJs = require("../../../privateProps.js");
var _privatePropsJsDefault = parcelHelpers.interopDefault(_privatePropsJs);
const inputTypes = [
    'input',
    'file',
    'range',
    'select',
    'radio',
    'checkbox',
    'textarea'
];
const renderInput = (instance, params)=>{
    const popup = _indexJs.getPopup();
    const innerParams = _privatePropsJsDefault.default.innerParams.get(instance);
    const rerender = !innerParams || params.input !== innerParams.input;
    inputTypes.forEach((inputType)=>{
        const inputClass = _classesJs.swalClasses[inputType];
        const inputContainer = _indexJs.getChildByClass(popup, inputClass);
        // set attributes
        setAttributes(inputType, params.inputAttributes);
        // set class
        inputContainer.className = inputClass;
        if (rerender) _indexJs.hide(inputContainer);
    });
    if (params.input) {
        if (rerender) showInput(params);
        // set custom class
        setCustomClass(params);
    }
};
const showInput = (params)=>{
    if (!renderInputType[params.input]) return _utilsJs.error(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${params.input}"`);
    const inputContainer = getInputContainer(params.input);
    const input = renderInputType[params.input](inputContainer, params);
    _indexJs.show(input);
    // input autofocus
    setTimeout(()=>{
        _indexJs.focusInput(input);
    });
};
const removeAttributes = (input)=>{
    for(let i = 0; i < input.attributes.length; i++){
        const attrName = input.attributes[i].name;
        if (![
            'type',
            'value',
            'style'
        ].includes(attrName)) input.removeAttribute(attrName);
    }
};
const setAttributes = (inputType, inputAttributes)=>{
    const input = _indexJs.getInput(_indexJs.getPopup(), inputType);
    if (!input) return;
    removeAttributes(input);
    for(const attr in inputAttributes)input.setAttribute(attr, inputAttributes[attr]);
};
const setCustomClass = (params)=>{
    const inputContainer = getInputContainer(params.input);
    if (params.customClass) _indexJs.addClass(inputContainer, params.customClass.input);
};
const setInputPlaceholder = (input, params)=>{
    if (!input.placeholder || params.inputPlaceholder) input.placeholder = params.inputPlaceholder;
};
const setInputLabel = (input, prependTo, params)=>{
    if (params.inputLabel) {
        input.id = _classesJs.swalClasses.input;
        const label = document.createElement('label');
        const labelClass = _classesJs.swalClasses['input-label'];
        label.setAttribute('for', input.id);
        label.className = labelClass;
        _indexJs.addClass(label, params.customClass.inputLabel);
        label.innerText = params.inputLabel;
        prependTo.insertAdjacentElement('beforebegin', label);
    }
};
const getInputContainer = (inputType)=>{
    const inputClass = _classesJs.swalClasses[inputType] ? _classesJs.swalClasses[inputType] : _classesJs.swalClasses.input;
    return _indexJs.getChildByClass(_indexJs.getPopup(), inputClass);
};
const renderInputType = {
};
renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = (input, params)=>{
    if (typeof params.inputValue === 'string' || typeof params.inputValue === 'number') input.value = params.inputValue;
    else if (!_utilsJs.isPromise(params.inputValue)) _utilsJs.warn(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof params.inputValue}"`);
    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    input.type = params.input;
    return input;
};
renderInputType.file = (input, params)=>{
    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    return input;
};
renderInputType.range = (range, params)=>{
    const rangeInput = range.querySelector('input');
    const rangeOutput = range.querySelector('output');
    rangeInput.value = params.inputValue;
    rangeInput.type = params.input;
    rangeOutput.value = params.inputValue;
    setInputLabel(rangeInput, range, params);
    return range;
};
renderInputType.select = (select, params)=>{
    select.textContent = '';
    if (params.inputPlaceholder) {
        const placeholder = document.createElement('option');
        _indexJs.setInnerHtml(placeholder, params.inputPlaceholder);
        placeholder.value = '';
        placeholder.disabled = true;
        placeholder.selected = true;
        select.appendChild(placeholder);
    }
    setInputLabel(select, select, params);
    return select;
};
renderInputType.radio = (radio)=>{
    radio.textContent = '';
    return radio;
};
renderInputType.checkbox = (checkboxContainer, params)=>{
    const checkbox = _indexJs.getInput(_indexJs.getPopup(), 'checkbox');
    checkbox.value = 1;
    checkbox.id = _classesJs.swalClasses.checkbox;
    checkbox.checked = Boolean(params.inputValue);
    const label = checkboxContainer.querySelector('span');
    _indexJs.setInnerHtml(label, params.inputPlaceholder);
    return checkboxContainer;
};
renderInputType.textarea = (textarea, params)=>{
    textarea.value = params.inputValue;
    setInputPlaceholder(textarea, params);
    setInputLabel(textarea, textarea, params);
    const getMargin = (el)=>parseInt(window.getComputedStyle(el).marginLeft) + parseInt(window.getComputedStyle(el).marginRight)
    ;
    setTimeout(()=>{
        if ('MutationObserver' in window) {
            const initialPopupWidth = parseInt(window.getComputedStyle(_indexJs.getPopup()).width);
            const textareaResizeHandler = ()=>{
                const textareaWidth = textarea.offsetWidth + getMargin(textarea);
                if (textareaWidth > initialPopupWidth) _indexJs.getPopup().style.width = `${textareaWidth}px`;
                else _indexJs.getPopup().style.width = null;
            };
            new MutationObserver(textareaResizeHandler).observe(textarea, {
                attributes: true,
                attributeFilter: [
                    'style'
                ]
            });
        }
    });
    return textarea;
};

},{"../../classes.js":"7VE26","../../utils.js":"k0tm2","../../dom/index.js":"12RRK","../../../privateProps.js":"aOEMu","@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"aOEMu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    promise: new WeakMap(),
    innerParams: new WeakMap(),
    domCache: new WeakMap()
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"4zukM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderFooter", ()=>renderFooter
);
var _indexJs = require("../../dom/index.js");
const renderFooter = (instance, params)=>{
    const footer = _indexJs.getFooter();
    _indexJs.toggle(footer, params.footer);
    if (params.footer) _indexJs.parseHtmlToContainer(params.footer, footer);
    // Custom class
    _indexJs.applyCustomClass(footer, params, 'footer');
};

},{"../../dom/index.js":"12RRK","@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"cDRgk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderCloseButton", ()=>renderCloseButton
);
var _indexJs = require("../../dom/index.js");
const renderCloseButton = (instance, params)=>{
    const closeButton = _indexJs.getCloseButton();
    _indexJs.setInnerHtml(closeButton, params.closeButtonHtml);
    // Custom class
    _indexJs.applyCustomClass(closeButton, params, 'closeButton');
    _indexJs.toggle(closeButton, params.showCloseButton);
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
};

},{"../../dom/index.js":"12RRK","@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"6Igih":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderIcon", ()=>renderIcon
);
var _classesJs = require("../../classes.js");
var _utilsJs = require("../../utils.js");
var _indexJs = require("../../dom/index.js");
var _privatePropsJs = require("../../../privateProps.js");
var _privatePropsJsDefault = parcelHelpers.interopDefault(_privatePropsJs);
const renderIcon = (instance, params)=>{
    const innerParams = _privatePropsJsDefault.default.innerParams.get(instance);
    const icon = _indexJs.getIcon();
    // if the given icon already rendered, apply the styling without re-rendering the icon
    if (innerParams && params.icon === innerParams.icon) {
        // Custom or default content
        setContent(icon, params);
        applyStyles(icon, params);
        return;
    }
    if (!params.icon && !params.iconHtml) return _indexJs.hide(icon);
    if (params.icon && Object.keys(_classesJs.iconTypes).indexOf(params.icon) === -1) {
        _utilsJs.error(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${params.icon}"`);
        return _indexJs.hide(icon);
    }
    _indexJs.show(icon);
    // Custom or default content
    setContent(icon, params);
    applyStyles(icon, params);
    // Animate icon
    _indexJs.addClass(icon, params.showClass.icon);
};
const applyStyles = (icon, params)=>{
    for(const iconType in _classesJs.iconTypes)if (params.icon !== iconType) _indexJs.removeClass(icon, _classesJs.iconTypes[iconType]);
    _indexJs.addClass(icon, _classesJs.iconTypes[params.icon]);
    // Icon color
    setColor(icon, params);
    // Success icon background color
    adjustSuccessIconBackgoundColor();
    // Custom class
    _indexJs.applyCustomClass(icon, params, 'icon');
};
// Adjust success icon background color to match the popup background color
const adjustSuccessIconBackgoundColor = ()=>{
    const popup = _indexJs.getPopup();
    const popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
    const successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');
    for(let i = 0; i < successIconParts.length; i++)successIconParts[i].style.backgroundColor = popupBackgroundColor;
};
const setContent = (icon, params)=>{
    icon.textContent = '';
    if (params.iconHtml) _indexJs.setInnerHtml(icon, iconContent(params.iconHtml));
    else if (params.icon === 'success') _indexJs.setInnerHtml(icon, `\n      <div class="swal2-success-circular-line-left"></div>\n      <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n      <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n      <div class="swal2-success-circular-line-right"></div>\n    `);
    else if (params.icon === 'error') _indexJs.setInnerHtml(icon, `\n      <span class="swal2-x-mark">\n        <span class="swal2-x-mark-line-left"></span>\n        <span class="swal2-x-mark-line-right"></span>\n      </span>\n    `);
    else {
        const defaultIconHtml = {
            question: '?',
            warning: '!',
            info: 'i'
        };
        _indexJs.setInnerHtml(icon, iconContent(defaultIconHtml[params.icon]));
    }
};
const setColor = (icon, params)=>{
    if (!params.iconColor) return;
    icon.style.color = params.iconColor;
    icon.style.borderColor = params.iconColor;
    for (const sel of [
        '.swal2-success-line-tip',
        '.swal2-success-line-long',
        '.swal2-x-mark-line-left',
        '.swal2-x-mark-line-right'
    ])_indexJs.setStyle(icon, sel, 'backgroundColor', params.iconColor);
    _indexJs.setStyle(icon, '.swal2-success-ring', 'borderColor', params.iconColor);
};
const iconContent = (content)=>`<div class="${_classesJs.swalClasses['icon-content']}">${content}</div>`
;

},{"../../classes.js":"7VE26","../../utils.js":"k0tm2","../../dom/index.js":"12RRK","../../../privateProps.js":"aOEMu","@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"lSctF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderImage", ()=>renderImage
);
var _classesJs = require("../../classes.js");
var _indexJs = require("../../dom/index.js");
const renderImage = (instance, params)=>{
    const image = _indexJs.getImage();
    if (!params.imageUrl) return _indexJs.hide(image);
    _indexJs.show(image, '');
    // Src, alt
    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt);
    // Width, height
    _indexJs.applyNumericalStyle(image, 'width', params.imageWidth);
    _indexJs.applyNumericalStyle(image, 'height', params.imageHeight);
    // Class
    image.className = _classesJs.swalClasses.image;
    _indexJs.applyCustomClass(image, params, 'image');
};

},{"../../classes.js":"7VE26","../../dom/index.js":"12RRK","@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"hcESp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderProgressSteps", ()=>renderProgressSteps
);
var _classesJs = require("../../classes.js");
var _utilsJs = require("../../utils.js");
var _indexJs = require("../../dom/index.js");
const createStepElement = (step)=>{
    const stepEl = document.createElement('li');
    _indexJs.addClass(stepEl, _classesJs.swalClasses['progress-step']);
    _indexJs.setInnerHtml(stepEl, step);
    return stepEl;
};
const createLineElement = (params)=>{
    const lineEl = document.createElement('li');
    _indexJs.addClass(lineEl, _classesJs.swalClasses['progress-step-line']);
    if (params.progressStepsDistance) lineEl.style.width = params.progressStepsDistance;
    return lineEl;
};
const renderProgressSteps = (instance, params)=>{
    const progressStepsContainer = _indexJs.getProgressSteps();
    if (!params.progressSteps || params.progressSteps.length === 0) return _indexJs.hide(progressStepsContainer);
    _indexJs.show(progressStepsContainer);
    progressStepsContainer.textContent = '';
    if (params.currentProgressStep >= params.progressSteps.length) _utilsJs.warn("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)");
    params.progressSteps.forEach((step, index)=>{
        const stepEl = createStepElement(step);
        progressStepsContainer.appendChild(stepEl);
        if (index === params.currentProgressStep) _indexJs.addClass(stepEl, _classesJs.swalClasses['active-progress-step']);
        if (index !== params.progressSteps.length - 1) {
            const lineEl = createLineElement(params);
            progressStepsContainer.appendChild(lineEl);
        }
    });
};

},{"../../classes.js":"7VE26","../../utils.js":"k0tm2","../../dom/index.js":"12RRK","@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"5XUSo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderTitle", ()=>renderTitle
);
var _indexJs = require("../../dom/index.js");
const renderTitle = (instance, params)=>{
    const title = _indexJs.getTitle();
    _indexJs.toggle(title, params.title || params.titleText, 'block');
    if (params.title) _indexJs.parseHtmlToContainer(params.title, title);
    if (params.titleText) title.innerText = params.titleText;
    // Custom class
    _indexJs.applyCustomClass(title, params, 'title');
};

},{"../../dom/index.js":"12RRK","@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"1FdPk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderPopup", ()=>renderPopup
);
var _classesJs = require("../../classes.js");
var _indexJs = require("../../dom/index.js");
const renderPopup = (instance, params)=>{
    const container = _indexJs.getContainer();
    const popup = _indexJs.getPopup();
    // Width
    if (params.toast) {
        _indexJs.applyNumericalStyle(container, 'width', params.width);
        popup.style.width = '100%';
        popup.insertBefore(_indexJs.getLoader(), _indexJs.getIcon());
    } else _indexJs.applyNumericalStyle(popup, 'width', params.width);
    // Padding
    _indexJs.applyNumericalStyle(popup, 'padding', params.padding);
    // Background
    if (params.background) popup.style.background = params.background;
    _indexJs.hide(_indexJs.getValidationMessage());
    // Classes
    addClasses(popup, params);
};
const addClasses = (popup, params)=>{
    // Default Class + showClass when updating Swal.update({})
    popup.className = `${_classesJs.swalClasses.popup} ${_indexJs.isVisible(popup) ? params.showClass.popup : ''}`;
    if (params.toast) {
        _indexJs.addClass([
            document.documentElement,
            document.body
        ], _classesJs.swalClasses['toast-shown']);
        _indexJs.addClass(popup, _classesJs.swalClasses.toast);
    } else _indexJs.addClass(popup, _classesJs.swalClasses.modal);
    // Custom class
    _indexJs.applyCustomClass(popup, params, 'popup');
    if (typeof params.customClass === 'string') _indexJs.addClass(popup, params.customClass);
    // Icon class (#1842)
    if (params.icon) _indexJs.addClass(popup, _classesJs.swalClasses[`icon-${params.icon}`]);
};

},{"../../classes.js":"7VE26","../../dom/index.js":"12RRK","@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"fQQ1z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fire", ()=>fire
);
function fire(...args) {
    const Swal = this;
    return new Swal(...args);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"cDuDS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Returns an extended version of `Swal` containing `params` as defaults.
 * Useful for reusing Swal configuration.
 *
 * For example:
 *
 * Before:
 * const textPromptOptions = { input: 'text', showCancelButton: true }
 * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
 * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
 *
 * After:
 * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
 * const {value: firstName} = await TextPrompt('What is your first name?')
 * const {value: lastName} = await TextPrompt('What is your last name?')
 *
 * @param mixinParams
 */ parcelHelpers.export(exports, "mixin", ()=>mixin
);
function mixin(mixinParams) {
    class MixinSwal extends this {
        _main(params, priorityMixinParams) {
            return super._main(params, Object.assign({
            }, mixinParams, priorityMixinParams));
        }
    }
    return MixinSwal;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"9x1Ls":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "showLoading", ()=>showLoading
);
parcelHelpers.export(exports, "enableLoading", ()=>showLoading
);
var _indexJs = require("../utils/dom/index.js");
var _sweetalert2Js = require("../sweetalert2.js");
var _sweetalert2JsDefault = parcelHelpers.interopDefault(_sweetalert2Js);
var _classesJs = require("../utils/classes.js");
/**
 * Shows loader (spinner), this is useful with AJAX requests.
 * By default the loader be shown instead of the "Confirm" button.
 */ const showLoading = (buttonToReplace)=>{
    let popup = _indexJs.getPopup();
    if (!popup) _sweetalert2JsDefault.default.fire();
    popup = _indexJs.getPopup();
    const loader = _indexJs.getLoader();
    if (_indexJs.isToast()) _indexJs.hide(_indexJs.getIcon());
    else replaceButton(popup, buttonToReplace);
    _indexJs.show(loader);
    popup.setAttribute('data-loading', true);
    popup.setAttribute('aria-busy', true);
    popup.focus();
};
const replaceButton = (popup, buttonToReplace)=>{
    const actions = _indexJs.getActions();
    const loader = _indexJs.getLoader();
    if (!buttonToReplace && _indexJs.isVisible(_indexJs.getConfirmButton())) buttonToReplace = _indexJs.getConfirmButton();
    _indexJs.show(actions);
    if (buttonToReplace) {
        _indexJs.hide(buttonToReplace);
        loader.setAttribute('data-button-to-replace', buttonToReplace.className);
    }
    loader.parentNode.insertBefore(loader, buttonToReplace);
    _indexJs.addClass([
        popup,
        actions
    ], _classesJs.swalClasses.loading);
};

},{"../utils/dom/index.js":"12RRK","../sweetalert2.js":"48x8v","../utils/classes.js":"7VE26","@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"s627T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getTimerLeft", ()=>getTimerLeft
);
parcelHelpers.export(exports, "stopTimer", ()=>stopTimer
);
parcelHelpers.export(exports, "resumeTimer", ()=>resumeTimer
);
parcelHelpers.export(exports, "toggleTimer", ()=>toggleTimer
);
parcelHelpers.export(exports, "increaseTimer", ()=>increaseTimer
);
parcelHelpers.export(exports, "isTimerRunning", ()=>isTimerRunning
);
var _domUtilsJs = require("../utils/dom/domUtils.js");
var _globalStateJs = require("../globalState.js");
var _globalStateJsDefault = parcelHelpers.interopDefault(_globalStateJs);
const getTimerLeft = ()=>{
    return _globalStateJsDefault.default.timeout && _globalStateJsDefault.default.timeout.getTimerLeft();
};
const stopTimer = ()=>{
    if (_globalStateJsDefault.default.timeout) {
        _domUtilsJs.stopTimerProgressBar();
        return _globalStateJsDefault.default.timeout.stop();
    }
};
const resumeTimer = ()=>{
    if (_globalStateJsDefault.default.timeout) {
        const remaining = _globalStateJsDefault.default.timeout.start();
        _domUtilsJs.animateTimerProgressBar(remaining);
        return remaining;
    }
};
const toggleTimer = ()=>{
    const timer = _globalStateJsDefault.default.timeout;
    return timer && (timer.running ? stopTimer() : resumeTimer());
};
const increaseTimer = (n)=>{
    if (_globalStateJsDefault.default.timeout) {
        const remaining = _globalStateJsDefault.default.timeout.increase(n);
        _domUtilsJs.animateTimerProgressBar(remaining, true);
        return remaining;
    }
};
const isTimerRunning = ()=>{
    return _globalStateJsDefault.default.timeout && _globalStateJsDefault.default.timeout.isRunning();
};

},{"../utils/dom/domUtils.js":"25xyi","../globalState.js":"fYxKj","@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"fYxKj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "restoreActiveElement", ()=>restoreActiveElement
);
var _constantsJs = require("./constants.js");
const globalState = {
};
exports.default = globalState;
const focusPreviousActiveElement = ()=>{
    if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
        globalState.previousActiveElement.focus();
        globalState.previousActiveElement = null;
    } else if (document.body) document.body.focus();
};
const restoreActiveElement = (returnFocus)=>{
    return new Promise((resolve)=>{
        if (!returnFocus) return resolve();
        const x = window.scrollX;
        const y = window.scrollY;
        globalState.restoreFocusTimeout = setTimeout(()=>{
            focusPreviousActiveElement();
            resolve();
        }, _constantsJs.RESTORE_FOCUS_TIMEOUT) // issues/900
        ;
        window.scrollTo(x, y);
    });
};

},{"./constants.js":"37Tta","@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"37Tta":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RESTORE_FOCUS_TIMEOUT", ()=>RESTORE_FOCUS_TIMEOUT
);
const RESTORE_FOCUS_TIMEOUT = 100;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"6Cj8C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bindClickHandler", ()=>bindClickHandler
);
let bodyClickListenerAdded = false;
const clickHandlers = {
};
function bindClickHandler(attr = 'data-swal-template') {
    clickHandlers[attr] = this;
    if (!bodyClickListenerAdded) {
        document.body.addEventListener('click', bodyClickListener);
        bodyClickListenerAdded = true;
    }
}
const bodyClickListener = (event)=>{
    for(let el = event.target; el && el !== document; el = el.parentNode)for(const attr in clickHandlers){
        const template = el.getAttribute(attr);
        if (template) {
            clickHandlers[attr].fire({
                template
            });
            return;
        }
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"1Z6kQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultParams", ()=>defaultParams
);
parcelHelpers.export(exports, "updatableParams", ()=>updatableParams
);
parcelHelpers.export(exports, "deprecatedParams", ()=>deprecatedParams
);
parcelHelpers.export(exports, "isValidParameter", ()=>isValidParameter
);
parcelHelpers.export(exports, "isUpdatableParameter", ()=>isUpdatableParameter
);
parcelHelpers.export(exports, "isDeprecatedParameter", ()=>isDeprecatedParameter
);
parcelHelpers.export(exports, "showWarningsForParams", ()=>showWarningsForParams
);
var _utilsJs = require("../utils/utils.js");
const defaultParams = {
    title: '',
    titleText: '',
    text: '',
    html: '',
    footer: '',
    icon: undefined,
    iconColor: undefined,
    iconHtml: undefined,
    template: undefined,
    toast: false,
    showClass: {
        popup: 'swal2-show',
        backdrop: 'swal2-backdrop-show',
        icon: 'swal2-icon-show'
    },
    hideClass: {
        popup: 'swal2-hide',
        backdrop: 'swal2-backdrop-hide',
        icon: 'swal2-icon-hide'
    },
    customClass: {
    },
    target: 'body',
    backdrop: true,
    heightAuto: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    stopKeydownPropagation: true,
    keydownListenerCapture: false,
    showConfirmButton: true,
    showDenyButton: false,
    showCancelButton: false,
    preConfirm: undefined,
    preDeny: undefined,
    confirmButtonText: 'OK',
    confirmButtonAriaLabel: '',
    confirmButtonColor: undefined,
    denyButtonText: 'No',
    denyButtonAriaLabel: '',
    denyButtonColor: undefined,
    cancelButtonText: 'Cancel',
    cancelButtonAriaLabel: '',
    cancelButtonColor: undefined,
    buttonsStyling: true,
    reverseButtons: false,
    focusConfirm: true,
    focusDeny: false,
    focusCancel: false,
    returnFocus: true,
    showCloseButton: false,
    closeButtonHtml: '&times;',
    closeButtonAriaLabel: 'Close this dialog',
    loaderHtml: '',
    showLoaderOnConfirm: false,
    showLoaderOnDeny: false,
    imageUrl: undefined,
    imageWidth: undefined,
    imageHeight: undefined,
    imageAlt: '',
    timer: undefined,
    timerProgressBar: false,
    width: undefined,
    padding: undefined,
    background: undefined,
    input: undefined,
    inputPlaceholder: '',
    inputLabel: '',
    inputValue: '',
    inputOptions: {
    },
    inputAutoTrim: true,
    inputAttributes: {
    },
    inputValidator: undefined,
    returnInputValueOnDeny: false,
    validationMessage: undefined,
    grow: false,
    position: 'center',
    progressSteps: [],
    currentProgressStep: undefined,
    progressStepsDistance: undefined,
    willOpen: undefined,
    didOpen: undefined,
    didRender: undefined,
    willClose: undefined,
    didClose: undefined,
    didDestroy: undefined,
    scrollbarPadding: true
};
const updatableParams = [
    'allowEscapeKey',
    'allowOutsideClick',
    'background',
    'buttonsStyling',
    'cancelButtonAriaLabel',
    'cancelButtonColor',
    'cancelButtonText',
    'closeButtonAriaLabel',
    'closeButtonHtml',
    'confirmButtonAriaLabel',
    'confirmButtonColor',
    'confirmButtonText',
    'currentProgressStep',
    'customClass',
    'denyButtonAriaLabel',
    'denyButtonColor',
    'denyButtonText',
    'didClose',
    'didDestroy',
    'footer',
    'hideClass',
    'html',
    'icon',
    'iconColor',
    'iconHtml',
    'imageAlt',
    'imageHeight',
    'imageUrl',
    'imageWidth',
    'preConfirm',
    'preDeny',
    'progressSteps',
    'returnFocus',
    'reverseButtons',
    'showCancelButton',
    'showCloseButton',
    'showConfirmButton',
    'showDenyButton',
    'text',
    'title',
    'titleText',
    'willClose', 
];
const deprecatedParams = {
};
const toastIncompatibleParams = [
    'allowOutsideClick',
    'allowEnterKey',
    'backdrop',
    'focusConfirm',
    'focusDeny',
    'focusCancel',
    'returnFocus',
    'heightAuto',
    'keydownListenerCapture'
];
const isValidParameter = (paramName)=>{
    return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
};
const isUpdatableParameter = (paramName)=>{
    return updatableParams.indexOf(paramName) !== -1;
};
const isDeprecatedParameter = (paramName)=>{
    return deprecatedParams[paramName];
};
const checkIfParamIsValid = (param)=>{
    if (!isValidParameter(param)) _utilsJs.warn(`Unknown parameter "${param}"`);
};
const checkIfToastParamIsValid = (param)=>{
    if (toastIncompatibleParams.includes(param)) _utilsJs.warn(`The parameter "${param}" is incompatible with toasts`);
};
const checkIfParamIsDeprecated = (param)=>{
    if (isDeprecatedParameter(param)) _utilsJs.warnAboutDeprecation(param, isDeprecatedParameter(param));
};
const showWarningsForParams = (params)=>{
    if (!params.backdrop && params.allowOutsideClick) _utilsJs.warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
    for(const param in params){
        checkIfParamIsValid(param);
        if (params.toast) checkIfToastParamIsValid(param);
        checkIfParamIsDeprecated(param);
    }
};
exports.default = defaultParams;

},{"../utils/utils.js":"k0tm2","@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"kUtGx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _hideLoadingJs = require("./instanceMethods/hideLoading.js");
parcelHelpers.exportAll(_hideLoadingJs, exports);
var _getInputJs = require("./instanceMethods/getInput.js");
parcelHelpers.exportAll(_getInputJs, exports);
var _closeJs = require("./instanceMethods/close.js");
parcelHelpers.exportAll(_closeJs, exports);
var _enableDisableElementsJs = require("./instanceMethods/enable-disable-elements.js");
parcelHelpers.exportAll(_enableDisableElementsJs, exports);
var _validationMessageJs = require("./instanceMethods/validation-message.js");
parcelHelpers.exportAll(_validationMessageJs, exports);
var _progressStepsJs = require("./instanceMethods/progress-steps.js");
parcelHelpers.exportAll(_progressStepsJs, exports);
var _mainJs = require("./instanceMethods/_main.js");
parcelHelpers.exportAll(_mainJs, exports);
var _updateJs = require("./instanceMethods/update.js");
parcelHelpers.exportAll(_updateJs, exports);
var _destroyJs = require("./instanceMethods/_destroy.js");
parcelHelpers.exportAll(_destroyJs, exports);

},{"./instanceMethods/hideLoading.js":"hGLP3","./instanceMethods/getInput.js":"dkILK","./instanceMethods/close.js":"c2aYU","./instanceMethods/enable-disable-elements.js":"j1cNu","./instanceMethods/validation-message.js":"gI0eo","./instanceMethods/progress-steps.js":"4ins2","./instanceMethods/_main.js":"aW7Nj","./instanceMethods/update.js":"7INks","./instanceMethods/_destroy.js":"cWF3M","@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"hGLP3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hideLoading", ()=>hideLoading
);
parcelHelpers.export(exports, "disableLoading", ()=>hideLoading
);
var _indexJs = require("../utils/dom/index.js");
var _classesJs = require("../utils/classes.js");
var _privatePropsJs = require("../privateProps.js");
var _privatePropsJsDefault = parcelHelpers.interopDefault(_privatePropsJs);
/**
 * Hides loader and shows back the button which was hidden by .showLoading()
 */ function hideLoading() {
    // do nothing if popup is closed
    const innerParams = _privatePropsJsDefault.default.innerParams.get(this);
    if (!innerParams) return;
    const domCache = _privatePropsJsDefault.default.domCache.get(this);
    _indexJs.hide(domCache.loader);
    if (_indexJs.isToast()) {
        if (innerParams.icon) _indexJs.show(_indexJs.getIcon());
    } else showRelatedButton(domCache);
    _indexJs.removeClass([
        domCache.popup,
        domCache.actions
    ], _classesJs.swalClasses.loading);
    domCache.popup.removeAttribute('aria-busy');
    domCache.popup.removeAttribute('data-loading');
    domCache.confirmButton.disabled = false;
    domCache.denyButton.disabled = false;
    domCache.cancelButton.disabled = false;
}
const showRelatedButton = (domCache)=>{
    const buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute('data-button-to-replace'));
    if (buttonToReplace.length) _indexJs.show(buttonToReplace[0], 'inline-block');
    else if (_indexJs.allButtonsAreHidden()) _indexJs.hide(domCache.actions);
};

},{"../utils/dom/index.js":"12RRK","../utils/classes.js":"7VE26","../privateProps.js":"aOEMu","@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"dkILK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Get input element by specified type or, if type isn't specified, by params.input
parcelHelpers.export(exports, "getInput", ()=>getInput
);
var _indexJs = require("../utils/dom/index.js");
var _privatePropsJs = require("../privateProps.js");
var _privatePropsJsDefault = parcelHelpers.interopDefault(_privatePropsJs);
function getInput(instance) {
    const innerParams = _privatePropsJsDefault.default.innerParams.get(instance || this);
    const domCache = _privatePropsJsDefault.default.domCache.get(instance || this);
    if (!domCache) return null;
    return _indexJs.getInput(domCache.popup, innerParams.input);
}

},{"../utils/dom/index.js":"12RRK","../privateProps.js":"aOEMu","@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"c2aYU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "close", ()=>close
);
parcelHelpers.export(exports, "closePopup", ()=>close
);
parcelHelpers.export(exports, "closeModal", ()=>close
);
parcelHelpers.export(exports, "closeToast", ()=>close
);
var _scrollbarFixJs = require("../utils/scrollbarFix.js");
var _iosFixJs = require("../utils/iosFix.js");
var _ariaJs = require("../utils/aria.js");
var _indexJs = require("../utils/dom/index.js");
var _classesJs = require("../utils/classes.js");
var _globalStateJs = require("../globalState.js");
var _globalStateJsDefault = parcelHelpers.interopDefault(_globalStateJs);
var _privatePropsJs = require("../privateProps.js");
var _privatePropsJsDefault = parcelHelpers.interopDefault(_privatePropsJs);
var _privateMethodsJs = require("../privateMethods.js");
var _privateMethodsJsDefault = parcelHelpers.interopDefault(_privateMethodsJs);
/*
 * Instance method to close sweetAlert
 */ function removePopupAndResetState(instance, container, returnFocus, didClose) {
    if (_indexJs.isToast()) triggerDidCloseAndDispose(instance, didClose);
    else {
        _globalStateJs.restoreActiveElement(returnFocus).then(()=>triggerDidCloseAndDispose(instance, didClose)
        );
        _globalStateJsDefault.default.keydownTarget.removeEventListener('keydown', _globalStateJsDefault.default.keydownHandler, {
            capture: _globalStateJsDefault.default.keydownListenerCapture
        });
        _globalStateJsDefault.default.keydownHandlerAdded = false;
    }
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    // workaround for #2088
    // for some reason removing the container in Safari will scroll the document to bottom
    if (isSafari) {
        container.setAttribute('style', 'display:none !important');
        container.removeAttribute('class');
        container.innerHTML = '';
    } else container.remove();
    if (_indexJs.isModal()) {
        _scrollbarFixJs.undoScrollbar();
        _iosFixJs.undoIOSfix();
        _ariaJs.unsetAriaHidden();
    }
    removeBodyClasses();
}
function removeBodyClasses() {
    _indexJs.removeClass([
        document.documentElement,
        document.body
    ], [
        _classesJs.swalClasses.shown,
        _classesJs.swalClasses['height-auto'],
        _classesJs.swalClasses['no-backdrop'],
        _classesJs.swalClasses['toast-shown'], 
    ]);
}
function close(resolveValue) {
    const popup = _indexJs.getPopup();
    if (!popup) return;
    resolveValue = prepareResolveValue(resolveValue);
    const innerParams = _privatePropsJsDefault.default.innerParams.get(this);
    if (!innerParams || _indexJs.hasClass(popup, innerParams.hideClass.popup)) return;
    const swalPromiseResolve = _privateMethodsJsDefault.default.swalPromiseResolve.get(this);
    _indexJs.removeClass(popup, innerParams.showClass.popup);
    _indexJs.addClass(popup, innerParams.hideClass.popup);
    const backdrop = _indexJs.getContainer();
    _indexJs.removeClass(backdrop, innerParams.showClass.backdrop);
    _indexJs.addClass(backdrop, innerParams.hideClass.backdrop);
    handlePopupAnimation(this, popup, innerParams);
    // Resolve Swal promise
    swalPromiseResolve(resolveValue);
}
const prepareResolveValue = (resolveValue)=>{
    // When user calls Swal.close()
    if (typeof resolveValue === 'undefined') return {
        isConfirmed: false,
        isDenied: false,
        isDismissed: true
    };
    return Object.assign({
        isConfirmed: false,
        isDenied: false,
        isDismissed: false
    }, resolveValue);
};
const handlePopupAnimation = (instance, popup, innerParams)=>{
    const container = _indexJs.getContainer();
    // If animation is supported, animate
    const animationIsSupported = _indexJs.animationEndEvent && _indexJs.hasCssAnimation(popup);
    if (typeof innerParams.willClose === 'function') innerParams.willClose(popup);
    if (animationIsSupported) animatePopup(instance, popup, container, innerParams.returnFocus, innerParams.didClose);
    else // Otherwise, remove immediately
    removePopupAndResetState(instance, container, innerParams.returnFocus, innerParams.didClose);
};
const animatePopup = (instance, popup, container, returnFocus, didClose)=>{
    _globalStateJsDefault.default.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, returnFocus, didClose);
    popup.addEventListener(_indexJs.animationEndEvent, function(e) {
        if (e.target === popup) {
            _globalStateJsDefault.default.swalCloseEventFinishedCallback();
            delete _globalStateJsDefault.default.swalCloseEventFinishedCallback;
        }
    });
};
const triggerDidCloseAndDispose = (instance, didClose)=>{
    setTimeout(()=>{
        if (typeof didClose === 'function') didClose.bind(instance.params)();
        instance._destroy();
    });
};

},{"../utils/scrollbarFix.js":"3uI1Z","../utils/iosFix.js":"3ZJC6","../utils/aria.js":"6xQsy","../utils/dom/index.js":"12RRK","../utils/classes.js":"7VE26","../globalState.js":"fYxKj","../privateProps.js":"aOEMu","../privateMethods.js":"1KoVS","@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"3uI1Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fixScrollbar", ()=>fixScrollbar
);
parcelHelpers.export(exports, "undoScrollbar", ()=>undoScrollbar
);
var _indexJs = require("./dom/index.js");
const fixScrollbar = ()=>{
    // for queues, do not do this more than once
    if (_indexJs.states.previousBodyPadding !== null) return;
    // if the body has overflow
    if (document.body.scrollHeight > window.innerHeight) {
        // add padding so the content doesn't shift after removal of scrollbar
        _indexJs.states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
        document.body.style.paddingRight = `${_indexJs.states.previousBodyPadding + _indexJs.measureScrollbar()}px`;
    }
};
const undoScrollbar = ()=>{
    if (_indexJs.states.previousBodyPadding !== null) {
        document.body.style.paddingRight = `${_indexJs.states.previousBodyPadding}px`;
        _indexJs.states.previousBodyPadding = null;
    }
};

},{"./dom/index.js":"12RRK","@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"3ZJC6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "iOSfix", ()=>iOSfix
);
parcelHelpers.export(exports, "undoIOSfix", ()=>undoIOSfix
);
/* istanbul ignore file */ var _indexJs = require("./dom/index.js");
var _classesJs = require("../utils/classes.js");
const iOSfix = ()=>{
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
    if (iOS && !_indexJs.hasClass(document.body, _classesJs.swalClasses.iosfix)) {
        const offset = document.body.scrollTop;
        document.body.style.top = `${offset * -1}px`;
        _indexJs.addClass(document.body, _classesJs.swalClasses.iosfix);
        lockBodyScroll();
        addBottomPaddingForTallPopups() // #1948
        ;
    }
};
const addBottomPaddingForTallPopups = ()=>{
    const safari = !navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i);
    if (safari) {
        const bottomPanelHeight = 44;
        if (_indexJs.getPopup().scrollHeight > window.innerHeight - bottomPanelHeight) _indexJs.getContainer().style.paddingBottom = `${bottomPanelHeight}px`;
    }
};
const lockBodyScroll = ()=>{
    const container = _indexJs.getContainer();
    let preventTouchMove;
    container.ontouchstart = (e)=>{
        preventTouchMove = shouldPreventTouchMove(e);
    };
    container.ontouchmove = (e)=>{
        if (preventTouchMove) {
            e.preventDefault();
            e.stopPropagation();
        }
    };
};
const shouldPreventTouchMove = (event)=>{
    const target = event.target;
    const container = _indexJs.getContainer();
    if (isStylys(event) || isZoom(event)) return false;
    if (target === container) return true;
    if (!_indexJs.isScrollable(container) && target.tagName !== 'INPUT' && target.tagName !== 'TEXTAREA' && !(_indexJs.isScrollable(_indexJs.getHtmlContainer()) && _indexJs.getHtmlContainer().contains(target))) return true;
    return false;
};
const isStylys = (event)=>{
    return event.touches && event.touches.length && event.touches[0].touchType === 'stylus';
};
const isZoom = (event)=>{
    return event.touches && event.touches.length > 1;
};
const undoIOSfix = ()=>{
    if (_indexJs.hasClass(document.body, _classesJs.swalClasses.iosfix)) {
        const offset = parseInt(document.body.style.top, 10);
        _indexJs.removeClass(document.body, _classesJs.swalClasses.iosfix);
        document.body.style.top = '';
        document.body.scrollTop = offset * -1;
    }
};

},{"./dom/index.js":"12RRK","../utils/classes.js":"7VE26","@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"6xQsy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setAriaHidden", ()=>setAriaHidden
);
parcelHelpers.export(exports, "unsetAriaHidden", ()=>unsetAriaHidden
);
var _gettersJs = require("./dom/getters.js");
var _utilsJs = require("./utils.js");
const setAriaHidden = ()=>{
    const bodyChildren = _utilsJs.toArray(document.body.children);
    bodyChildren.forEach((el)=>{
        if (el === _gettersJs.getContainer() || el.contains(_gettersJs.getContainer())) return;
        if (el.hasAttribute('aria-hidden')) el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
        el.setAttribute('aria-hidden', 'true');
    });
};
const unsetAriaHidden = ()=>{
    const bodyChildren = _utilsJs.toArray(document.body.children);
    bodyChildren.forEach((el)=>{
        if (el.hasAttribute('data-previous-aria-hidden')) {
            el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
            el.removeAttribute('data-previous-aria-hidden');
        } else el.removeAttribute('aria-hidden');
    });
};

},{"./dom/getters.js":"gH9CJ","./utils.js":"k0tm2","@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"1KoVS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    swalPromiseResolve: new WeakMap()
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"j1cNu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "enableButtons", ()=>enableButtons
);
parcelHelpers.export(exports, "disableButtons", ()=>disableButtons
);
parcelHelpers.export(exports, "enableInput", ()=>enableInput
);
parcelHelpers.export(exports, "disableInput", ()=>disableInput
);
var _privatePropsJs = require("../privateProps.js");
var _privatePropsJsDefault = parcelHelpers.interopDefault(_privatePropsJs);
function setButtonsDisabled(instance, buttons, disabled) {
    const domCache = _privatePropsJsDefault.default.domCache.get(instance);
    buttons.forEach((button)=>{
        domCache[button].disabled = disabled;
    });
}
function setInputDisabled(input, disabled) {
    if (!input) return false;
    if (input.type === 'radio') {
        const radiosContainer = input.parentNode.parentNode;
        const radios = radiosContainer.querySelectorAll('input');
        for(let i = 0; i < radios.length; i++)radios[i].disabled = disabled;
    } else input.disabled = disabled;
}
function enableButtons() {
    setButtonsDisabled(this, [
        'confirmButton',
        'denyButton',
        'cancelButton'
    ], false);
}
function disableButtons() {
    setButtonsDisabled(this, [
        'confirmButton',
        'denyButton',
        'cancelButton'
    ], true);
}
function enableInput() {
    return setInputDisabled(this.getInput(), false);
}
function disableInput() {
    return setInputDisabled(this.getInput(), true);
}

},{"../privateProps.js":"aOEMu","@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"gI0eo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Show block with validation message
parcelHelpers.export(exports, "showValidationMessage", ()=>showValidationMessage
);
// Hide block with validation message
parcelHelpers.export(exports, "resetValidationMessage", ()=>resetValidationMessage
);
var _indexJs = require("../utils/dom/index.js");
var _classesJs = require("../utils/classes.js");
var _privatePropsJs = require("../privateProps.js");
var _privatePropsJsDefault = parcelHelpers.interopDefault(_privatePropsJs);
function showValidationMessage(error) {
    const domCache = _privatePropsJsDefault.default.domCache.get(this);
    const params = _privatePropsJsDefault.default.innerParams.get(this);
    _indexJs.setInnerHtml(domCache.validationMessage, error);
    domCache.validationMessage.className = _classesJs.swalClasses['validation-message'];
    if (params.customClass && params.customClass.validationMessage) _indexJs.addClass(domCache.validationMessage, params.customClass.validationMessage);
    _indexJs.show(domCache.validationMessage);
    const input = this.getInput();
    if (input) {
        input.setAttribute('aria-invalid', true);
        input.setAttribute('aria-describedby', _classesJs.swalClasses['validation-message']);
        _indexJs.focusInput(input);
        _indexJs.addClass(input, _classesJs.swalClasses.inputerror);
    }
}
function resetValidationMessage() {
    const domCache = _privatePropsJsDefault.default.domCache.get(this);
    if (domCache.validationMessage) _indexJs.hide(domCache.validationMessage);
    const input = this.getInput();
    if (input) {
        input.removeAttribute('aria-invalid');
        input.removeAttribute('aria-describedby');
        _indexJs.removeClass(input, _classesJs.swalClasses.inputerror);
    }
}

},{"../utils/dom/index.js":"12RRK","../utils/classes.js":"7VE26","../privateProps.js":"aOEMu","@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"4ins2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getProgressSteps", ()=>getProgressSteps
);
var _privatePropsJs = require("../privateProps.js");
var _privatePropsJsDefault = parcelHelpers.interopDefault(_privatePropsJs);
function getProgressSteps() {
    const domCache = _privatePropsJsDefault.default.domCache.get(this);
    return domCache.progressSteps;
}

},{"../privateProps.js":"aOEMu","@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"aW7Nj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_main", ()=>_main
);
var _paramsJs = require("../utils/params.js");
var _paramsJsDefault = parcelHelpers.interopDefault(_paramsJs);
var _indexJs = require("../utils/dom/index.js");
var _timerJs = require("../utils/Timer.js");
var _timerJsDefault = parcelHelpers.interopDefault(_timerJs);
var _utilsJs = require("../utils/utils.js");
var _setParametersJs = require("../utils/setParameters.js");
var _setParametersJsDefault = parcelHelpers.interopDefault(_setParametersJs);
var _getTemplateParamsJs = require("../utils/getTemplateParams.js");
var _globalStateJs = require("../globalState.js");
var _globalStateJsDefault = parcelHelpers.interopDefault(_globalStateJs);
var _openPopupJs = require("../utils/openPopup.js");
var _privatePropsJs = require("../privateProps.js");
var _privatePropsJsDefault = parcelHelpers.interopDefault(_privatePropsJs);
var _privateMethodsJs = require("../privateMethods.js");
var _privateMethodsJsDefault = parcelHelpers.interopDefault(_privateMethodsJs);
var _inputUtilsJs = require("../utils/dom/inputUtils.js");
var _buttonsHandlersJs = require("./buttons-handlers.js");
var _keydownHandlerJs = require("./keydown-handler.js");
var _popupClickHandlerJs = require("./popup-click-handler.js");
var _dismissReasonJs = require("../utils/DismissReason.js");
var _ariaJs = require("../utils/aria.js");
function _main(userParams, mixinParams = {
}) {
    _paramsJs.showWarningsForParams(Object.assign({
    }, mixinParams, userParams));
    if (_globalStateJsDefault.default.currentInstance) {
        _globalStateJsDefault.default.currentInstance._destroy();
        if (_indexJs.isModal()) _ariaJs.unsetAriaHidden();
    }
    _globalStateJsDefault.default.currentInstance = this;
    const innerParams = prepareParams(userParams, mixinParams);
    _setParametersJsDefault.default(innerParams);
    Object.freeze(innerParams);
    // clear the previous timer
    if (_globalStateJsDefault.default.timeout) {
        _globalStateJsDefault.default.timeout.stop();
        delete _globalStateJsDefault.default.timeout;
    }
    // clear the restore focus timeout
    clearTimeout(_globalStateJsDefault.default.restoreFocusTimeout);
    const domCache = populateDomCache(this);
    _indexJs.render(this, innerParams);
    _privatePropsJsDefault.default.innerParams.set(this, innerParams);
    return swalPromise(this, domCache, innerParams);
}
const prepareParams = (userParams, mixinParams)=>{
    const templateParams = _getTemplateParamsJs.getTemplateParams(userParams);
    const params = Object.assign({
    }, _paramsJsDefault.default, mixinParams, templateParams, userParams) // precedence is described in #2131
    ;
    params.showClass = Object.assign({
    }, _paramsJsDefault.default.showClass, params.showClass);
    params.hideClass = Object.assign({
    }, _paramsJsDefault.default.hideClass, params.hideClass);
    return params;
};
const swalPromise = (instance, domCache, innerParams)=>{
    return new Promise((resolve)=>{
        // functions to handle all closings/dismissals
        const dismissWith = (dismiss)=>{
            instance.closePopup({
                isDismissed: true,
                dismiss
            });
        };
        _privateMethodsJsDefault.default.swalPromiseResolve.set(instance, resolve);
        domCache.confirmButton.onclick = ()=>_buttonsHandlersJs.handleConfirmButtonClick(instance)
        ;
        domCache.denyButton.onclick = ()=>_buttonsHandlersJs.handleDenyButtonClick(instance)
        ;
        domCache.cancelButton.onclick = ()=>_buttonsHandlersJs.handleCancelButtonClick(instance, dismissWith)
        ;
        domCache.closeButton.onclick = ()=>dismissWith(_dismissReasonJs.DismissReason.close)
        ;
        _popupClickHandlerJs.handlePopupClick(instance, domCache, dismissWith);
        _keydownHandlerJs.addKeydownHandler(instance, _globalStateJsDefault.default, innerParams, dismissWith);
        _inputUtilsJs.handleInputOptionsAndValue(instance, innerParams);
        _openPopupJs.openPopup(innerParams);
        setupTimer(_globalStateJsDefault.default, innerParams, dismissWith);
        initFocus(domCache, innerParams);
        // Scroll container to top on open (#1247, #1946)
        setTimeout(()=>{
            domCache.container.scrollTop = 0;
        });
    });
};
const populateDomCache = (instance)=>{
    const domCache = {
        popup: _indexJs.getPopup(),
        container: _indexJs.getContainer(),
        actions: _indexJs.getActions(),
        confirmButton: _indexJs.getConfirmButton(),
        denyButton: _indexJs.getDenyButton(),
        cancelButton: _indexJs.getCancelButton(),
        loader: _indexJs.getLoader(),
        closeButton: _indexJs.getCloseButton(),
        validationMessage: _indexJs.getValidationMessage(),
        progressSteps: _indexJs.getProgressSteps()
    };
    _privatePropsJsDefault.default.domCache.set(instance, domCache);
    return domCache;
};
const setupTimer = (globalState, innerParams, dismissWith)=>{
    const timerProgressBar = _indexJs.getTimerProgressBar();
    _indexJs.hide(timerProgressBar);
    if (innerParams.timer) {
        globalState.timeout = new _timerJsDefault.default(()=>{
            dismissWith('timer');
            delete globalState.timeout;
        }, innerParams.timer);
        if (innerParams.timerProgressBar) {
            _indexJs.show(timerProgressBar);
            setTimeout(()=>{
                if (globalState.timeout && globalState.timeout.running) _indexJs.animateTimerProgressBar(innerParams.timer);
            });
        }
    }
};
const initFocus = (domCache, innerParams)=>{
    if (innerParams.toast) return;
    if (!_utilsJs.callIfFunction(innerParams.allowEnterKey)) return blurActiveElement();
    if (!focusButton(domCache, innerParams)) _keydownHandlerJs.setFocus(innerParams, -1, 1);
};
const focusButton = (domCache, innerParams)=>{
    if (innerParams.focusDeny && _indexJs.isVisible(domCache.denyButton)) {
        domCache.denyButton.focus();
        return true;
    }
    if (innerParams.focusCancel && _indexJs.isVisible(domCache.cancelButton)) {
        domCache.cancelButton.focus();
        return true;
    }
    if (innerParams.focusConfirm && _indexJs.isVisible(domCache.confirmButton)) {
        domCache.confirmButton.focus();
        return true;
    }
    return false;
};
const blurActiveElement = ()=>{
    if (document.activeElement && typeof document.activeElement.blur === 'function') document.activeElement.blur();
};

},{"../utils/params.js":"1Z6kQ","../utils/dom/index.js":"12RRK","../utils/Timer.js":"dZCHA","../utils/utils.js":"k0tm2","../utils/setParameters.js":"h95dY","../utils/getTemplateParams.js":"l9pST","../globalState.js":"fYxKj","../utils/openPopup.js":"58pDX","../privateProps.js":"aOEMu","../privateMethods.js":"1KoVS","../utils/dom/inputUtils.js":"16yiQ","./buttons-handlers.js":"kFDoB","./keydown-handler.js":"aDq2B","./popup-click-handler.js":"iHyH1","../utils/DismissReason.js":"eC93E","../utils/aria.js":"6xQsy","@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"dZCHA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Timer {
    constructor(callback, delay){
        this.callback = callback;
        this.remaining = delay;
        this.running = false;
        this.start();
    }
    start() {
        if (!this.running) {
            this.running = true;
            this.started = new Date();
            this.id = setTimeout(this.callback, this.remaining);
        }
        return this.remaining;
    }
    stop() {
        if (this.running) {
            this.running = false;
            clearTimeout(this.id);
            this.remaining -= new Date() - this.started;
        }
        return this.remaining;
    }
    increase(n) {
        const running = this.running;
        if (running) this.stop();
        this.remaining += n;
        if (running) this.start();
        return this.remaining;
    }
    getTimerLeft() {
        if (this.running) {
            this.stop();
            this.start();
        }
        return this.remaining;
    }
    isRunning() {
        return this.running;
    }
}
exports.default = Timer;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"h95dY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./utils.js");
var _indexJs = require("./dom/index.js");
var _defaultInputValidatorsJs = require("./defaultInputValidators.js");
var _defaultInputValidatorsJsDefault = parcelHelpers.interopDefault(_defaultInputValidatorsJs);
function setDefaultInputValidators(params) {
    // Use default `inputValidator` for supported input types if not provided
    if (!params.inputValidator) Object.keys(_defaultInputValidatorsJsDefault.default).forEach((key)=>{
        if (params.input === key) params.inputValidator = _defaultInputValidatorsJsDefault.default[key];
    });
}
function validateCustomTargetElement(params) {
    // Determine if the custom target element is valid
    if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
        _utilsJs.warn('Target parameter is not valid, defaulting to "body"');
        params.target = 'body';
    }
}
function setParameters(params) {
    setDefaultInputValidators(params);
    // showLoaderOnConfirm && preConfirm
    if (params.showLoaderOnConfirm && !params.preConfirm) _utilsJs.warn("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request");
    validateCustomTargetElement(params);
    // Replace newlines with <br> in title
    if (typeof params.title === 'string') params.title = params.title.split('\n').join('<br />');
    _indexJs.init(params);
}
exports.default = setParameters;

},{"./utils.js":"k0tm2","./dom/index.js":"12RRK","./defaultInputValidators.js":"b80Cf","@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"b80Cf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    email: (string, validationMessage)=>{
        return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
    },
    url: (string, validationMessage)=>{
        // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
        return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"l9pST":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getTemplateParams", ()=>getTemplateParams
);
var _paramsJs = require("./params.js");
var _paramsJsDefault = parcelHelpers.interopDefault(_paramsJs);
var _utilsJs = require("./utils.js");
const swalStringParams = [
    'swal-title',
    'swal-html',
    'swal-footer'
];
const getTemplateParams = (params)=>{
    const template = typeof params.template === 'string' ? document.querySelector(params.template) : params.template;
    if (!template) return {
    };
    const templateContent = template.content;
    showWarningsForElements(templateContent);
    const result = Object.assign(getSwalParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));
    return result;
};
const getSwalParams = (templateContent)=>{
    const result = {
    };
    _utilsJs.toArray(templateContent.querySelectorAll('swal-param')).forEach((param)=>{
        showWarningsForAttributes(param, [
            'name',
            'value'
        ]);
        const paramName = param.getAttribute('name');
        let value = param.getAttribute('value');
        if (typeof _paramsJsDefault.default[paramName] === 'boolean' && value === 'false') value = false;
        if (typeof _paramsJsDefault.default[paramName] === 'object') value = JSON.parse(value);
        result[paramName] = value;
    });
    return result;
};
const getSwalButtons = (templateContent)=>{
    const result = {
    };
    _utilsJs.toArray(templateContent.querySelectorAll('swal-button')).forEach((button)=>{
        showWarningsForAttributes(button, [
            'type',
            'color',
            'aria-label'
        ]);
        const type = button.getAttribute('type');
        result[`${type}ButtonText`] = button.innerHTML;
        result[`show${_utilsJs.capitalizeFirstLetter(type)}Button`] = true;
        if (button.hasAttribute('color')) result[`${type}ButtonColor`] = button.getAttribute('color');
        if (button.hasAttribute('aria-label')) result[`${type}ButtonAriaLabel`] = button.getAttribute('aria-label');
    });
    return result;
};
const getSwalImage = (templateContent)=>{
    const result = {
    };
    const image = templateContent.querySelector('swal-image');
    if (image) {
        showWarningsForAttributes(image, [
            'src',
            'width',
            'height',
            'alt'
        ]);
        if (image.hasAttribute('src')) result.imageUrl = image.getAttribute('src');
        if (image.hasAttribute('width')) result.imageWidth = image.getAttribute('width');
        if (image.hasAttribute('height')) result.imageHeight = image.getAttribute('height');
        if (image.hasAttribute('alt')) result.imageAlt = image.getAttribute('alt');
    }
    return result;
};
const getSwalIcon = (templateContent)=>{
    const result = {
    };
    const icon = templateContent.querySelector('swal-icon');
    if (icon) {
        showWarningsForAttributes(icon, [
            'type',
            'color'
        ]);
        if (icon.hasAttribute('type')) result.icon = icon.getAttribute('type');
        if (icon.hasAttribute('color')) result.iconColor = icon.getAttribute('color');
        result.iconHtml = icon.innerHTML;
    }
    return result;
};
const getSwalInput = (templateContent)=>{
    const result = {
    };
    const input = templateContent.querySelector('swal-input');
    if (input) {
        showWarningsForAttributes(input, [
            'type',
            'label',
            'placeholder',
            'value'
        ]);
        result.input = input.getAttribute('type') || 'text';
        if (input.hasAttribute('label')) result.inputLabel = input.getAttribute('label');
        if (input.hasAttribute('placeholder')) result.inputPlaceholder = input.getAttribute('placeholder');
        if (input.hasAttribute('value')) result.inputValue = input.getAttribute('value');
    }
    const inputOptions = templateContent.querySelectorAll('swal-input-option');
    if (inputOptions.length) {
        result.inputOptions = {
        };
        _utilsJs.toArray(inputOptions).forEach((option)=>{
            showWarningsForAttributes(option, [
                'value'
            ]);
            const optionValue = option.getAttribute('value');
            const optionName = option.innerHTML;
            result.inputOptions[optionValue] = optionName;
        });
    }
    return result;
};
const getSwalStringParams = (templateContent, paramNames)=>{
    const result = {
    };
    for(const i in paramNames){
        const paramName = paramNames[i];
        const tag = templateContent.querySelector(paramName);
        if (tag) {
            showWarningsForAttributes(tag, []);
            result[paramName.replace(/^swal-/, '')] = tag.innerHTML.trim();
        }
    }
    return result;
};
const showWarningsForElements = (template)=>{
    const allowedElements = swalStringParams.concat([
        'swal-param',
        'swal-button',
        'swal-image',
        'swal-icon',
        'swal-input',
        'swal-input-option', 
    ]);
    _utilsJs.toArray(template.children).forEach((el)=>{
        const tagName = el.tagName.toLowerCase();
        if (allowedElements.indexOf(tagName) === -1) _utilsJs.warn(`Unrecognized element <${tagName}>`);
    });
};
const showWarningsForAttributes = (el, allowedAttributes)=>{
    _utilsJs.toArray(el.attributes).forEach((attribute)=>{
        if (allowedAttributes.indexOf(attribute.name) === -1) _utilsJs.warn([
            `Unrecognized attribute "${attribute.name}" on <${el.tagName.toLowerCase()}>.`,
            `${allowedAttributes.length ? `Allowed attributes are: ${allowedAttributes.join(', ')}` : 'To set the value, use HTML within the element.'}`
        ]);
    });
};

},{"./params.js":"1Z6kQ","./utils.js":"k0tm2","@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"58pDX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SHOW_CLASS_TIMEOUT", ()=>SHOW_CLASS_TIMEOUT
);
parcelHelpers.export(exports, "openPopup", ()=>openPopup
);
var _indexJs = require("./dom/index.js");
var _classesJs = require("./classes.js");
var _scrollbarFixJs = require("./scrollbarFix.js");
var _iosFixJs = require("./iosFix.js");
var _ariaJs = require("./aria.js");
var _globalStateJs = require("../globalState.js");
var _globalStateJsDefault = parcelHelpers.interopDefault(_globalStateJs);
const SHOW_CLASS_TIMEOUT = 10;
const openPopup = (params)=>{
    const container = _indexJs.getContainer();
    const popup = _indexJs.getPopup();
    if (typeof params.willOpen === 'function') params.willOpen(popup);
    const bodyStyles = window.getComputedStyle(document.body);
    const initialBodyOverflow = bodyStyles.overflowY;
    addClasses(container, popup, params);
    // scrolling is 'hidden' until animation is done, after that 'auto'
    setTimeout(()=>{
        setScrollingVisibility(container, popup);
    }, SHOW_CLASS_TIMEOUT);
    if (_indexJs.isModal()) {
        fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
        _ariaJs.setAriaHidden();
    }
    if (!_indexJs.isToast() && !_globalStateJsDefault.default.previousActiveElement) _globalStateJsDefault.default.previousActiveElement = document.activeElement;
    if (typeof params.didOpen === 'function') setTimeout(()=>params.didOpen(popup)
    );
    _indexJs.removeClass(container, _classesJs.swalClasses['no-transition']);
};
const swalOpenAnimationFinished = (event)=>{
    const popup = _indexJs.getPopup();
    if (event.target !== popup) return;
    const container = _indexJs.getContainer();
    popup.removeEventListener(_indexJs.animationEndEvent, swalOpenAnimationFinished);
    container.style.overflowY = 'auto';
};
const setScrollingVisibility = (container, popup)=>{
    if (_indexJs.animationEndEvent && _indexJs.hasCssAnimation(popup)) {
        container.style.overflowY = 'hidden';
        popup.addEventListener(_indexJs.animationEndEvent, swalOpenAnimationFinished);
    } else container.style.overflowY = 'auto';
};
const fixScrollContainer = (container, scrollbarPadding, initialBodyOverflow)=>{
    _iosFixJs.iOSfix();
    if (scrollbarPadding && initialBodyOverflow !== 'hidden') _scrollbarFixJs.fixScrollbar();
    // sweetalert2/issues/1247
    setTimeout(()=>{
        container.scrollTop = 0;
    });
};
const addClasses = (container, popup, params)=>{
    _indexJs.addClass(container, params.showClass.backdrop);
    // the workaround with setting/unsetting opacity is needed for #2019 and 2059
    popup.style.setProperty('opacity', '0', 'important');
    _indexJs.show(popup, 'grid');
    setTimeout(()=>{
        // Animate popup right after showing it
        _indexJs.addClass(popup, params.showClass.popup);
        // and remove the opacity workaround
        popup.style.removeProperty('opacity');
    }, SHOW_CLASS_TIMEOUT) // 10ms in order to fix #2062
    ;
    _indexJs.addClass([
        document.documentElement,
        document.body
    ], _classesJs.swalClasses.shown);
    if (params.heightAuto && params.backdrop && !params.toast) _indexJs.addClass([
        document.documentElement,
        document.body
    ], _classesJs.swalClasses['height-auto']);
};

},{"./dom/index.js":"12RRK","./classes.js":"7VE26","./scrollbarFix.js":"3uI1Z","./iosFix.js":"3ZJC6","./aria.js":"6xQsy","../globalState.js":"fYxKj","@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"16yiQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "handleInputOptionsAndValue", ()=>handleInputOptionsAndValue
);
parcelHelpers.export(exports, "getInputValue", ()=>getInputValue
);
var _indexJs = require("./index.js");
var _classesJs = require("../classes.js");
var _domUtilsJs = require("./domUtils.js");
var _utilsJs = require("../utils.js");
var _showLoadingJs = require("../../staticMethods/showLoading.js");
const handleInputOptionsAndValue = (instance, params)=>{
    if (params.input === 'select' || params.input === 'radio') handleInputOptions(instance, params);
    else if ([
        'text',
        'email',
        'number',
        'tel',
        'textarea'
    ].includes(params.input) && (_utilsJs.hasToPromiseFn(params.inputValue) || _utilsJs.isPromise(params.inputValue))) {
        _showLoadingJs.showLoading(_indexJs.getConfirmButton());
        handleInputValue(instance, params);
    }
};
const getInputValue = (instance, innerParams)=>{
    const input = instance.getInput();
    if (!input) return null;
    switch(innerParams.input){
        case 'checkbox':
            return getCheckboxValue(input);
        case 'radio':
            return getRadioValue(input);
        case 'file':
            return getFileValue(input);
        default:
            return innerParams.inputAutoTrim ? input.value.trim() : input.value;
    }
};
const getCheckboxValue = (input)=>input.checked ? 1 : 0
;
const getRadioValue = (input)=>input.checked ? input.value : null
;
const getFileValue = (input)=>input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null
;
const handleInputOptions = (instance, params)=>{
    const popup = _indexJs.getPopup();
    const processInputOptions = (inputOptions)=>populateInputOptions[params.input](popup, formatInputOptions(inputOptions), params)
    ;
    if (_utilsJs.hasToPromiseFn(params.inputOptions) || _utilsJs.isPromise(params.inputOptions)) {
        _showLoadingJs.showLoading(_indexJs.getConfirmButton());
        _utilsJs.asPromise(params.inputOptions).then((inputOptions)=>{
            instance.hideLoading();
            processInputOptions(inputOptions);
        });
    } else if (typeof params.inputOptions === 'object') processInputOptions(params.inputOptions);
    else _utilsJs.error(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof params.inputOptions}`);
};
const handleInputValue = (instance, params)=>{
    const input = instance.getInput();
    _indexJs.hide(input);
    _utilsJs.asPromise(params.inputValue).then((inputValue)=>{
        input.value = params.input === 'number' ? parseFloat(inputValue) || 0 : `${inputValue}`;
        _indexJs.show(input);
        input.focus();
        instance.hideLoading();
    }).catch((err)=>{
        _utilsJs.error(`Error in inputValue promise: ${err}`);
        input.value = '';
        _indexJs.show(input);
        input.focus();
        instance.hideLoading();
    });
};
const populateInputOptions = {
    select: (popup, inputOptions, params)=>{
        const select = _domUtilsJs.getChildByClass(popup, _classesJs.swalClasses.select);
        const renderOption = (parent, optionLabel, optionValue)=>{
            const option = document.createElement('option');
            option.value = optionValue;
            _indexJs.setInnerHtml(option, optionLabel);
            option.selected = isSelected(optionValue, params.inputValue);
            parent.appendChild(option);
        };
        inputOptions.forEach((inputOption)=>{
            const optionValue = inputOption[0];
            const optionLabel = inputOption[1];
            // <optgroup> spec:
            // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
            // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
            // check whether this is a <optgroup>
            if (Array.isArray(optionLabel)) {
                const optgroup = document.createElement('optgroup');
                optgroup.label = optionValue;
                optgroup.disabled = false // not configurable for now
                ;
                select.appendChild(optgroup);
                optionLabel.forEach((o)=>renderOption(optgroup, o[1], o[0])
                );
            } else renderOption(select, optionLabel, optionValue);
        });
        select.focus();
    },
    radio: (popup, inputOptions, params)=>{
        const radio = _domUtilsJs.getChildByClass(popup, _classesJs.swalClasses.radio);
        inputOptions.forEach((inputOption)=>{
            const radioValue = inputOption[0];
            const radioLabel = inputOption[1];
            const radioInput = document.createElement('input');
            const radioLabelElement = document.createElement('label');
            radioInput.type = 'radio';
            radioInput.name = _classesJs.swalClasses.radio;
            radioInput.value = radioValue;
            if (isSelected(radioValue, params.inputValue)) radioInput.checked = true;
            const label = document.createElement('span');
            _indexJs.setInnerHtml(label, radioLabel);
            label.className = _classesJs.swalClasses.label;
            radioLabelElement.appendChild(radioInput);
            radioLabelElement.appendChild(label);
            radio.appendChild(radioLabelElement);
        });
        const radios = radio.querySelectorAll('input');
        if (radios.length) radios[0].focus();
    }
};
/**
 * Converts `inputOptions` into an array of `[value, label]`s
 * @param inputOptions
 */ const formatInputOptions = (inputOptions)=>{
    const result = [];
    if (typeof Map !== 'undefined' && inputOptions instanceof Map) inputOptions.forEach((value, key)=>{
        let valueFormatted = value;
        if (typeof valueFormatted === 'object') valueFormatted = formatInputOptions(valueFormatted);
        result.push([
            key,
            valueFormatted
        ]);
    });
    else Object.keys(inputOptions).forEach((key)=>{
        let valueFormatted = inputOptions[key];
        if (typeof valueFormatted === 'object') valueFormatted = formatInputOptions(valueFormatted);
        result.push([
            key,
            valueFormatted
        ]);
    });
    return result;
};
const isSelected = (optionValue, inputValue)=>{
    return inputValue && inputValue.toString() === optionValue.toString();
};

},{"./index.js":"12RRK","../classes.js":"7VE26","./domUtils.js":"25xyi","../utils.js":"k0tm2","../../staticMethods/showLoading.js":"9x1Ls","@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"kFDoB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "handleConfirmButtonClick", ()=>handleConfirmButtonClick
);
parcelHelpers.export(exports, "handleDenyButtonClick", ()=>handleDenyButtonClick
);
parcelHelpers.export(exports, "handleCancelButtonClick", ()=>handleCancelButtonClick
);
var _domUtilsJs = require("../utils/dom/domUtils.js");
var _inputUtilsJs = require("../utils/dom/inputUtils.js");
var _gettersJs = require("../utils/dom/getters.js");
var _utilsJs = require("../utils/utils.js");
var _showLoadingJs = require("../staticMethods/showLoading.js");
var _dismissReasonJs = require("../utils/DismissReason.js");
var _privatePropsJs = require("../privateProps.js");
var _privatePropsJsDefault = parcelHelpers.interopDefault(_privatePropsJs);
const handleConfirmButtonClick = (instance)=>{
    const innerParams = _privatePropsJsDefault.default.innerParams.get(instance);
    instance.disableButtons();
    if (innerParams.input) handleConfirmOrDenyWithInput(instance, 'confirm');
    else confirm(instance, true);
};
const handleDenyButtonClick = (instance)=>{
    const innerParams = _privatePropsJsDefault.default.innerParams.get(instance);
    instance.disableButtons();
    if (innerParams.returnInputValueOnDeny) handleConfirmOrDenyWithInput(instance, 'deny');
    else deny(instance, false);
};
const handleCancelButtonClick = (instance, dismissWith)=>{
    instance.disableButtons();
    dismissWith(_dismissReasonJs.DismissReason.cancel);
};
const handleConfirmOrDenyWithInput = (instance, type /* 'confirm' | 'deny' */ )=>{
    const innerParams = _privatePropsJsDefault.default.innerParams.get(instance);
    const inputValue = _inputUtilsJs.getInputValue(instance, innerParams);
    if (innerParams.inputValidator) handleInputValidator(instance, inputValue, type);
    else if (!instance.getInput().checkValidity()) {
        instance.enableButtons();
        instance.showValidationMessage(innerParams.validationMessage);
    } else if (type === 'deny') deny(instance, inputValue);
    else confirm(instance, inputValue);
};
const handleInputValidator = (instance, inputValue, type /* 'confirm' | 'deny' */ )=>{
    const innerParams = _privatePropsJsDefault.default.innerParams.get(instance);
    instance.disableInput();
    const validationPromise = Promise.resolve().then(()=>_utilsJs.asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage))
    );
    validationPromise.then((validationMessage)=>{
        instance.enableButtons();
        instance.enableInput();
        if (validationMessage) instance.showValidationMessage(validationMessage);
        else if (type === 'deny') deny(instance, inputValue);
        else confirm(instance, inputValue);
    });
};
const deny = (instance, value)=>{
    const innerParams = _privatePropsJsDefault.default.innerParams.get(instance || undefined);
    if (innerParams.showLoaderOnDeny) _showLoadingJs.showLoading(_gettersJs.getDenyButton());
    if (innerParams.preDeny) {
        const preDenyPromise = Promise.resolve().then(()=>_utilsJs.asPromise(innerParams.preDeny(value, innerParams.validationMessage))
        );
        preDenyPromise.then((preDenyValue)=>{
            if (preDenyValue === false) instance.hideLoading();
            else instance.closePopup({
                isDenied: true,
                value: typeof preDenyValue === 'undefined' ? value : preDenyValue
            });
        });
    } else instance.closePopup({
        isDenied: true,
        value
    });
};
const succeedWith = (instance, value)=>{
    instance.closePopup({
        isConfirmed: true,
        value
    });
};
const confirm = (instance, value)=>{
    const innerParams = _privatePropsJsDefault.default.innerParams.get(instance || undefined);
    if (innerParams.showLoaderOnConfirm) _showLoadingJs.showLoading();
    if (innerParams.preConfirm) {
        instance.resetValidationMessage();
        const preConfirmPromise = Promise.resolve().then(()=>_utilsJs.asPromise(innerParams.preConfirm(value, innerParams.validationMessage))
        );
        preConfirmPromise.then((preConfirmValue)=>{
            if (_domUtilsJs.isVisible(_gettersJs.getValidationMessage()) || preConfirmValue === false) instance.hideLoading();
            else succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
        });
    } else succeedWith(instance, value);
};

},{"../utils/dom/domUtils.js":"25xyi","../utils/dom/inputUtils.js":"16yiQ","../utils/dom/getters.js":"gH9CJ","../utils/utils.js":"k0tm2","../staticMethods/showLoading.js":"9x1Ls","../utils/DismissReason.js":"eC93E","../privateProps.js":"aOEMu","@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"aDq2B":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addKeydownHandler", ()=>addKeydownHandler
);
parcelHelpers.export(exports, "setFocus", ()=>setFocus
);
var _indexJs = require("../utils/dom/index.js");
var _dismissReasonJs = require("../utils/DismissReason.js");
var _utilsJs = require("../utils/utils.js");
var _domJs = require("../staticMethods/dom.js");
var _privatePropsJs = require("../privateProps.js");
var _privatePropsJsDefault = parcelHelpers.interopDefault(_privatePropsJs);
const addKeydownHandler = (instance, globalState, innerParams, dismissWith)=>{
    if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
        globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
            capture: globalState.keydownListenerCapture
        });
        globalState.keydownHandlerAdded = false;
    }
    if (!innerParams.toast) {
        globalState.keydownHandler = (e)=>keydownHandler(instance, e, dismissWith)
        ;
        globalState.keydownTarget = innerParams.keydownListenerCapture ? window : _indexJs.getPopup();
        globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
        globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
            capture: globalState.keydownListenerCapture
        });
        globalState.keydownHandlerAdded = true;
    }
};
const setFocus = (innerParams, index, increment)=>{
    const focusableElements = _indexJs.getFocusableElements();
    // search for visible elements and select the next possible match
    if (focusableElements.length) {
        index = index + increment;
        // rollover to first item
        if (index === focusableElements.length) index = 0;
        else if (index === -1) index = focusableElements.length - 1;
        return focusableElements[index].focus();
    }
    // no visible focusable elements, focus the popup
    _indexJs.getPopup().focus();
};
const arrowKeysNextButton = [
    'ArrowRight',
    'ArrowDown', 
];
const arrowKeysPreviousButton = [
    'ArrowLeft',
    'ArrowUp', 
];
const keydownHandler = (instance, e, dismissWith)=>{
    const innerParams = _privatePropsJsDefault.default.innerParams.get(instance);
    if (!innerParams) return; // This instance has already been destroyed
    if (innerParams.stopKeydownPropagation) e.stopPropagation();
    // ENTER
    if (e.key === 'Enter') handleEnter(instance, e, innerParams);
    else if (e.key === 'Tab') handleTab(e, innerParams);
    else if ([
        ...arrowKeysNextButton,
        ...arrowKeysPreviousButton
    ].includes(e.key)) handleArrows(e.key);
    else if (e.key === 'Escape') handleEsc(e, innerParams, dismissWith);
};
const handleEnter = (instance, e, innerParams)=>{
    // #720 #721
    if (e.isComposing) return;
    if (e.target && instance.getInput() && e.target.outerHTML === instance.getInput().outerHTML) {
        if ([
            'textarea',
            'file'
        ].includes(innerParams.input)) return; // do not submit
        _domJs.clickConfirm();
        e.preventDefault();
    }
};
const handleTab = (e, innerParams)=>{
    const targetElement = e.target;
    const focusableElements = _indexJs.getFocusableElements();
    let btnIndex = -1;
    for(let i = 0; i < focusableElements.length; i++)if (targetElement === focusableElements[i]) {
        btnIndex = i;
        break;
    }
    if (!e.shiftKey) // Cycle to the next button
    setFocus(innerParams, btnIndex, 1);
    else // Cycle to the prev button
    setFocus(innerParams, btnIndex, -1);
    e.stopPropagation();
    e.preventDefault();
};
const handleArrows = (key)=>{
    const confirmButton = _indexJs.getConfirmButton();
    const denyButton = _indexJs.getDenyButton();
    const cancelButton = _indexJs.getCancelButton();
    if (![
        confirmButton,
        denyButton,
        cancelButton
    ].includes(document.activeElement)) return;
    const sibling = arrowKeysNextButton.includes(key) ? 'nextElementSibling' : 'previousElementSibling';
    const buttonToFocus = document.activeElement[sibling];
    if (buttonToFocus) buttonToFocus.focus();
};
const handleEsc = (e, innerParams, dismissWith)=>{
    if (_utilsJs.callIfFunction(innerParams.allowEscapeKey)) {
        e.preventDefault();
        dismissWith(_dismissReasonJs.DismissReason.esc);
    }
};

},{"../utils/dom/index.js":"12RRK","../utils/DismissReason.js":"eC93E","../utils/utils.js":"k0tm2","../staticMethods/dom.js":"1UUYb","../privateProps.js":"aOEMu","@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"iHyH1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "handlePopupClick", ()=>handlePopupClick
);
var _utilsJs = require("../utils/utils.js");
var _dismissReasonJs = require("../utils/DismissReason.js");
var _privatePropsJs = require("../privateProps.js");
var _privatePropsJsDefault = parcelHelpers.interopDefault(_privatePropsJs);
const handlePopupClick = (instance, domCache, dismissWith)=>{
    const innerParams = _privatePropsJsDefault.default.innerParams.get(instance);
    if (innerParams.toast) handleToastClick(instance, domCache, dismissWith);
    else {
        // Ignore click events that had mousedown on the popup but mouseup on the container
        // This can happen when the user drags a slider
        handleModalMousedown(domCache);
        // Ignore click events that had mousedown on the container but mouseup on the popup
        handleContainerMousedown(domCache);
        handleModalClick(instance, domCache, dismissWith);
    }
};
const handleToastClick = (instance, domCache, dismissWith)=>{
    // Closing toast by internal click
    domCache.popup.onclick = ()=>{
        const innerParams = _privatePropsJsDefault.default.innerParams.get(instance);
        if (innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton || innerParams.timer || innerParams.input) return;
        dismissWith(_dismissReasonJs.DismissReason.close);
    };
};
let ignoreOutsideClick = false;
const handleModalMousedown = (domCache)=>{
    domCache.popup.onmousedown = ()=>{
        domCache.container.onmouseup = function(e) {
            domCache.container.onmouseup = undefined;
            // We only check if the mouseup target is the container because usually it doesn't
            // have any other direct children aside of the popup
            if (e.target === domCache.container) ignoreOutsideClick = true;
        };
    };
};
const handleContainerMousedown = (domCache)=>{
    domCache.container.onmousedown = ()=>{
        domCache.popup.onmouseup = function(e) {
            domCache.popup.onmouseup = undefined;
            // We also need to check if the mouseup target is a child of the popup
            if (e.target === domCache.popup || domCache.popup.contains(e.target)) ignoreOutsideClick = true;
        };
    };
};
const handleModalClick = (instance, domCache, dismissWith)=>{
    domCache.container.onclick = (e)=>{
        const innerParams = _privatePropsJsDefault.default.innerParams.get(instance);
        if (ignoreOutsideClick) {
            ignoreOutsideClick = false;
            return;
        }
        if (e.target === domCache.container && _utilsJs.callIfFunction(innerParams.allowOutsideClick)) dismissWith(_dismissReasonJs.DismissReason.backdrop);
    };
};

},{"../utils/utils.js":"k0tm2","../utils/DismissReason.js":"eC93E","../privateProps.js":"aOEMu","@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"7INks":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Updates popup parameters.
 */ parcelHelpers.export(exports, "update", ()=>update
);
var _indexJs = require("../../src/utils/dom/index.js");
var _utilsJs = require("../../src/utils/utils.js");
var _sweetalert2Js = require("../sweetalert2.js");
var _sweetalert2JsDefault = parcelHelpers.interopDefault(_sweetalert2Js);
var _privatePropsJs = require("../privateProps.js");
var _privatePropsJsDefault = parcelHelpers.interopDefault(_privatePropsJs);
function update(params) {
    const popup = _indexJs.getPopup();
    const innerParams = _privatePropsJsDefault.default.innerParams.get(this);
    if (!popup || _indexJs.hasClass(popup, innerParams.hideClass.popup)) return _utilsJs.warn(`You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.`);
    const validUpdatableParams = {
    };
    // assign valid params from `params` to `defaults`
    Object.keys(params).forEach((param)=>{
        if (_sweetalert2JsDefault.default.isUpdatableParameter(param)) validUpdatableParams[param] = params[param];
        else _utilsJs.warn(`Invalid parameter to update: "${param}". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md`);
    });
    const updatedParams = Object.assign({
    }, innerParams, validUpdatableParams);
    _indexJs.render(this, updatedParams);
    _privatePropsJsDefault.default.innerParams.set(this, updatedParams);
    Object.defineProperties(this, {
        params: {
            value: Object.assign({
            }, this.params, params),
            writable: false,
            enumerable: true
        }
    });
}

},{"../../src/utils/dom/index.js":"12RRK","../../src/utils/utils.js":"k0tm2","../sweetalert2.js":"48x8v","../privateProps.js":"aOEMu","@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}],"cWF3M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_destroy", ()=>_destroy
);
var _globalStateJs = require("../globalState.js");
var _globalStateJsDefault = parcelHelpers.interopDefault(_globalStateJs);
var _privatePropsJs = require("../privateProps.js");
var _privatePropsJsDefault = parcelHelpers.interopDefault(_privatePropsJs);
var _privateMethodsJs = require("../privateMethods.js");
var _privateMethodsJsDefault = parcelHelpers.interopDefault(_privateMethodsJs);
function _destroy() {
    const domCache = _privatePropsJsDefault.default.domCache.get(this);
    const innerParams = _privatePropsJsDefault.default.innerParams.get(this);
    if (!innerParams) return; // This instance has already been destroyed
    // Check if there is another Swal closing
    if (domCache.popup && _globalStateJsDefault.default.swalCloseEventFinishedCallback) {
        _globalStateJsDefault.default.swalCloseEventFinishedCallback();
        delete _globalStateJsDefault.default.swalCloseEventFinishedCallback;
    }
    // Check if there is a swal disposal defer timer
    if (_globalStateJsDefault.default.deferDisposalTimer) {
        clearTimeout(_globalStateJsDefault.default.deferDisposalTimer);
        delete _globalStateJsDefault.default.deferDisposalTimer;
    }
    if (typeof innerParams.didDestroy === 'function') innerParams.didDestroy();
    disposeSwal(this);
}
const disposeSwal = (instance)=>{
    // Unset this.params so GC will dispose it (#1569)
    delete instance.params;
    // Unset globalState props so GC will dispose globalState (#1569)
    delete _globalStateJsDefault.default.keydownHandler;
    delete _globalStateJsDefault.default.keydownTarget;
    // Unset WeakMaps so GC will be able to dispose them (#1569)
    unsetWeakMaps(_privatePropsJsDefault.default);
    unsetWeakMaps(_privateMethodsJsDefault.default);
    // Unset currentInstance
    delete _globalStateJsDefault.default.currentInstance;
};
const unsetWeakMaps = (obj)=>{
    for(const i in obj)obj[i] = new WeakMap();
};

},{"../globalState.js":"fYxKj","../privateProps.js":"aOEMu","../privateMethods.js":"1KoVS","@parcel/transformer-js/src/esmodule-helpers.js":"lTbh3"}]},["eBPpe","ajoad"], "ajoad", "parcelRequire2880")

//# sourceMappingURL=index.550d17ae.js.map
