class AssetAdapter implements egret.gui.IAssetAdapter {

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
    public getAsset(source:any, compFunc:Function, thisObject:any, oldContent:any):void {

        function onGetRes(data:any):void {
            compFunc.call(thisObject, data, source);
        }

        var content:any = source;
        if (source.prototype) {
            content = new source();
        }
        if (content instanceof egret.DisplayObject || content instanceof egret.Texture) {
            compFunc.call(thisObject, content, source);
        }
        else if (typeof(source) == "string") {
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
    }


}