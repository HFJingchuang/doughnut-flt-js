var _getCallbackId = function () {
    var ramdom = parseInt(Math.random() * 100000);
    return 'iCallback_' + new Date().getTime() + ramdom;
}


// var _sendTpRequest = function (methodName, params, callbackId) {
//     // if Android
//     if (window.JsNativeBridge) {
//         window.JsNativeBridge.callHandler(methodName, params, callbackId);
//     }

//     // if iOS
//     if (window.webkit) {
//         window.webkit.messageHandlers[methodName].postMessage({
//             body: {
//                 'params': params,
//                 'callback': callbackId
//             }
//         });
//     }
// }

var donut = {
    getAppInfo: function () {
        return new Promise(function (resolve, reject) {
            var callbackId = _getCallbackId();

            window[callbackId] = function (result) {
                resolve(result);
            }
            GetAppInfo.postMessage(callbackId);

        });
    },
    getDeviceId: function () {
        return new Promise(function (resolve, reject) {
            var callbackId = _getCallbackId();

            window[callbackId] = function (result) {
                resolve(result);
            }

            GetDeviceId.postMessage(callbackId);

        });

    },
    getWallets: function () {
        return new Promise(function (resolve, reject) {
            var callbackId = _getCallbackId();

            window[callbackId] = function (result) {
                resolve(result);
            }

            GetWallets.postMessage(callbackId);

        });
    },
    getCurrentWallet: function () {
        return new Promise(function (resolve, reject) {
            var callbackId = _getCallbackId();

            window[callbackId] = function (result) {
                resolve(result);
            }

            GetCurrentWallet.postMessage(callbackId);
        });
    },
    sign: function (params) {

        return new Promise(function (resolve, reject) {
            var callbackId = _getCallbackId();

            window[callbackId] = function (result) {
                resolve(result);
            }

            params['callback'] = callbackId;
            Sign.postMessage(JSON.stringify(params));
        });
    },
    transfer: function (params) {

        return new Promise(function (resolve, reject) {
            var callbackId = _getCallbackId();

            window[callbackId] = function (result) {
                resolve(result);
            }

            params['callback'] = callbackId;
            Transfer.postMessage(JSON.stringify(params));
        });
    },
    invokeQRScanner: function () {
        return new Promise(function (resolve, reject) {
            var callbackId = _getCallbackId();

            window[callbackId] = function (result) {
                resolve(result);
            }

            InvokeQRScanner(callbackId);

        });
    },
    // back: function () {
    //     _sendTpRequest('back', '', '');
    // },
    fullScreen: function () {
        FullScreen.postMessage('');
    },
    close: function () {
        Close.postMessage();
    },
    shareToSNS: function (params) {
        return new Promise(function (resolve, reject) {
            var callbackId = _getCallbackId();

            window[callbackId] = function (result) {
                resolve(result);
            }

            params['callback'] = callbackId;
            ShareToSNS.postMessage(JSON.stringify(params));
        });
    },
};


module.exports = donutFlt;