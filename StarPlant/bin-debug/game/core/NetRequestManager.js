/**
 * 请求后台数据管理类
 * @author
 *
 */
var NetRequestManager = (function () {
    function NetRequestManager() {
    }
    var d = __define,c=NetRequestManager;p=c.prototype;
    //所有以json格式向后台发送请求，回包也回json格式，请求格式{"type":1,"param1":1.....},回包格式{"statusCode":0,"type":1,"param1":1.....}
    NetRequestManager.requestToNet = function (askJson, callBack, errorBack) {
        this._waitList.push({ askJson: askJson, callBack: callBack, errorBack: errorBack });
        this.processNextRequest();
    };
    NetRequestManager.processNextRequest = function () {
        if (this._waitList.length && this._isRequesting == false) {
            this._isRequesting = true;
            var obj = this._waitList.shift();
            this._callBack = obj.callBack;
            this._errorBack = obj.errorBack;
            //统一打包成json数据传输给后台
            //            var requestVar: egret.URLVariables = new egret.URLVariables;
            if (null == this._loader) {
                this._loader = new egret.URLLoader();
            }
            //            loader.dataFormat = egret.URLLoaderDataFormat.TEXT;
            this._request = new egret.URLRequest("http://design.smax.cc/api/personLibHandler.aspx?" + obj.askJson);
            //            request.contentType = "application/octet-stream";//egret里面怎么设置呢？
            this._request.method = egret.URLRequestMethod.POST;
            this._loader.load(this._request);
            this._loader.addEventListener(egret.Event.COMPLETE, this.onNetOk, this);
            this._loader.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onNetError, this);
        }
    };
    NetRequestManager.onNetError = function (evt) {
        this._loader.removeEventListener(egret.Event.COMPLETE, this.onNetOk, this);
        this._loader.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.onNetError, this);
        console.log("消息发送收到IO_ERROR错误====================");
        this._isRequesting = false;
        this._callBack = null;
        this.processNextRequest();
    };
    NetRequestManager.onNetOk = function (evt) {
        this._loader.removeEventListener(egret.Event.COMPLETE, this.onNetOk, this);
        this._loader.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.onNetError, this);
        console.log("消息收到回包了====================");
        var backJson = JSON.parse(evt.target.data);
        if (backJson.statusCode > 0) {
            if (null != this._callBack) {
                this._callBack(backJson);
            }
        }
        else {
            this._errorBack(backJson.statusCode);
        }
    };
    NetRequestManager._waitList = [];
    NetRequestManager._isRequesting = false;
    return NetRequestManager;
})();
egret.registerClass(NetRequestManager,"NetRequestManager");
