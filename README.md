# doughnut-js
Doughnut-flt API for DAPP.

## Javascript SDK for Doughnut-flt  Dapp.

## <a name='Installation'></a>Installation

```bash
npm install doughnut-js
```

## <a name='Usage'></a>Usage

Npm
```javascript
var donutFlt = require('doughnut-flt-js')
console.log(donutFlt.isConnected());
```

Browser
```html
<script src="./dist/donut-flt.min.js"></script>
<script>
    console.log(donutFlt.isConnected());
</script>
```


## <a name='Contents'></a>Contents

<!-- vscode-markdown-toc -->
* [1. API](#API)
    * [1.1 donutFlt.getAppInfo](#donutFlt.getAppInfo)
    * [1.2 donutFlt.getDeviceId](#donutFlt.getDeviceId)
    * [1.3 donutFlt.getCurrentWallet](#donutFlt.getCurrentWallet)
    * [1.4 donutFlt.getWallets](#donutFlt.getWallets)
    * [1.5 donutFlt.sign](#donutFlt.sign)
    * [1.6 donutFlt.transfer](#donutFlt.transfer)
    * [1.7 donutFlt.invokeQRScanner](#donutFlt.invokeQRScanner)
    * [1.8 donutFlt.back](#donutFlt.back)
    * [1.9 donutFlt.close](#donutFlt.close)
    * [1.10 donutFlt.fullScreen](#donutFlt.fullScreen)
    * [1.11 donutFlt.shareToSNS](#donutFlt.shareToSNS)
    
<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->


#### <a name='donutFlt.getAppInfo'></a>1.1 donutFlt.getAppInfo


```javascript
donutFlt.getAppInfo()
```

##### Returns

`Object`:
- `result`: `Boolean`
- `data`: `Object`
    - `name`: `String`
    - `system`: `String`
    - `version`: `String`
    - `sys_version`: `String`
- `msg`: `String`

##### Example

```javascript
donutFlt.getAppInfo().then(JSON.stringify(console.log))

> "{"result":true,"data":{"name":"doughnutflt","system":"Android SDK built for x86","version":"1.0.0","sys_version":"1"}}"
```

#### <a name='donutFlt.getDeviceId'></a>1.3 donutFlt.getDeviceId

```javascript
donutFlt.getDeviceId()
```

##### Returns

`Object`:
- `result`: `Boolean`
- `data`: `String`
- `msg`: `String`

##### Example

```javascript
donutFlt.getDeviceId().then(console.log)

> "{"result":true,"data":"f9820900-c802-11ea-baa8-e5d5e4c22f75"}"
```

#### <a name='donutFlt.getCurrentWallet'></a>1.4 donutFlt.getCurrentWallet

获取用户当前钱包信息

```javascript
donutFlt.getCurrentWallet()
```

##### Returns

`Object`:
- `result`: `Boolean`
- `data`: `Object`
    - `chainType`: `String`
    - `name`: `String`
    - `address`: `String`
    - `dateTime`: `String`
- `msg`: `String`

##### Example

```javascript
donutFlt.getCurrentWallet().then(console.log)

> "{"result":true,"data":{"chainType":"SWTC","name":"123","address":"jP6XU2waFkx4N2LnivC4nzfKLnwWn4WH4Q","dateTime":"2020-07-20 13-53-47"}}"
```

#### <a name='donutFlt.getWallets'></a>1.5 donutFlt.getWallets

获取用户钱包列表

```javascript
donutFlt.getWallets()
```

##### Returns

`Object`:
- `result`: `Boolean`
- `data`: `Array`
    - `chainType`: `String`
    - `name`: `String`
    - `address`: `String`
    - `dateTime`: `String`
- `msg`: `String`

##### Example

```javascript
donutFlt.getWallets().then(console.log)

> "{"result":true,"data":[{"chainType":"SWTC","name":"123","address":"jP6XU2waFkx4N2LnivC4nzfKLnwWn4WH4Q","dateTime":"2020-07-20 13-53-47"}]}"
```

#### <a name='donutFlt.sign'></a>1.6 donutFlt.sign

```javascript
donutFlt.sign(params)
```

##### Parameters

`params`- `Object`: tx object
- `chainType`:"String",
- `to`: `String`
- `token`: `Float` 
- `issuer`: `String|Object`
- `value`: `String|Object`
- `fee`: `String`
- `gasLimit`: `String`
- `gasPrice`: `String`
- `memo`: `Number`

##### Returns

`Object`:
- `result`: `Boolean`
- `data`: `Stirng`
- `msg`: `String`

##### Example

```javascript
var tx = {
        "chainType":"SWTC",
        "to": "jKBCwv4EcyvYtD4PafP17PLpnnZ16szQsC",
        "token": "swt",
        "issuer": "",
        "value": "0.001",
        "memo": "test for sign",
        "fee": "0.0001"
      }
donutFlt.sign(tx).then(console.log)

> "{"result": true,"signedTx": "12000022800000002...E68EA5E58FA3E1F1"}"
```

#### <a name='donutFlt.transfer'></a>1.7 donutFlt.transfer

```javascript
donutFlt.transfer(params)
```

##### Parameters

`params`- `Object`: tx object
- `to`: `String`
- `currency`: `Float` 
- `issuer`: `String|Object`
- `value`: `String|Object`
- `gas`: `String`
- `memo`: `Number`

##### Returns

`Object`:
- `result`: `Boolean`
- `txHash`: `Stirng`
- `msg`: `String`

##### Example

```javascript
var tx = {
        "to": "jKBCwv4EcyvYtD4PafP17PLpnnZ16szQsC",
        "currency": "swt",
        "issuer": "",
        "value": "0.001",
        "memo": "test for transfer",
        "gas": "0.0001"
      }
donutFlt.transfer(tx).then(console.log)

> {
    result: true,
    txHash: "092DD86EF938CFBE344BC26AAA0F36DAE3632535B5439B9CB5BDBD5693691B69",
    msg: 'success'
}
```

#### <a name='donutFlt.invokeQRScanner'></a>1.8 donutFlt.invokeQRScanner

扫码

```javascript
donutFlt.invokeQRScanner()
```

##### Returns

`String`

##### Example

```javascript
donutFlt.invokeQRScanner().then(console.log)

> "jKBCwv4EcyvYtD4PafP17PLpnnZ16szQsC"
```

#### <a name='donutFlt.back'></a>1.9 donutFlt.back

```javascript
donutFlt.back()
```

##### Example

```javascript
donutFlt.back()

```

#### <a name='donutFlt.close'></a>1.10 donutFlt.close

```javascript
donutFlt.close()
```

##### Example

```javascript
donutFlt.close()

```


#### <a name='donutFlt.fullScreen'></a>1.11 donutFlt.fullScreen

```javascript
donutFlt.fullScreen(params)
```

##### Parameters

`params`:
`String` 1 - fullScreen,  0 - cancel


##### Example

```javascript
donutFlt.fullScreen(1)
```


#### <a name='donutFlt.shareToSNS'></a>1.12 donutFlt.shareToSNS

```javascript
donutFlt.shareToSNS(params)
```

##### Parameters

`params`- `Object`: object
- `title`: `String`
- `url`: `Float` 
- `text`: `String|Object`
- `imgUrl`: `String|Object`

##### Example

```javascript
var params = {
	"title": "js分享",
	"url": "https://github.com/HFJingchuang/doughnut-js",
	"text": "js分享测试",
	"imgUrl": "http://www.someserver.com/测试图片网络地址.jpg"
}
donutFlt.shareToSNS(params)
```
