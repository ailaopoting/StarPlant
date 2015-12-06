var AssetAdapter = (function () {
    function AssetAdapter() {
    }
    var d = __define,c=AssetAdapter;p=c.prototype;
    /**
     * 解析素材
     * @method egret.gui.DefaultAssetAdapter#getAsset
     * @param source {any} 待解析的新素材标识符
     * @param compFunc {Function} 解析完成回调函数，示例：compFunc(content:any,source:any):void;
     * 回调参数content接受两种类型：DisplayObject或Texture。
     * @param thisObject {any} compFunc的this引用
     * @param oldContent any 旧的内容对象,传入值有可能为null。
     * 对于某些类型素材，例如MovieClip，可以重用传入的显示对象,只修改其数据再返回。
     */
    p.getAsset = function (source, compFunc, thisObject, oldContent) {
        function onGetRes(data) {
            compFunc.call(thisObject, data, source);
        }
        var content = source;
        if (source.prototype) {
            content = new source();
        }
        if (content instanceof egret.DisplayObject || content instanceof egret.Texture) {
            compFunc.call(thisObject, content, source);
        }
        else if (typeof (source) == "string") {
            if (RES.hasRes(source)) {
                RES.getResAsync(source, onGetRes, this);
            }
            else {
                RES.getResByUrl(source, onGetRes, this);
            }
        }
        else {
            compFunc.call(thisObject, content, source);
        }
    };
    return AssetAdapter;
})();
egret.registerClass(AssetAdapter,"AssetAdapter",["egret.gui.IAssetAdapter"]);
