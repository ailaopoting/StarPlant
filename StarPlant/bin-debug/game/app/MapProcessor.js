/**
 * 地图处理基类
 * @author
 *
 */
var MapProcessor = (function () {
    function MapProcessor(map) {
        this._map = map;
    }
    var d = __define,c=MapProcessor;p=c.prototype;
    p.init = function () {
    };
    p.dispose = function () {
    };
    p.closeInteractor = function (object) {
        object.touchEnabled = false;
        //        object.buttonMode = false;
    };
    p.initInteractor = function (object) {
        if (object) {
            object.touchChildren = false;
            object.touchEnabled = true;
        }
    };
    // 检测当前是否能跳转
    p.checkChangeable = function () {
        return true;
    };
    MapProcessor.createMapProcessor = function (mapModel) {
        var classDefine = egret.getDefinitionByName(this.CLASS_PATH + mapModel.type);
        if (classDefine == null) {
            classDefine = MapProcessor;
        }
        return new classDefine(mapModel);
    };
    MapProcessor.CLASS_PATH = "MapProcessor_";
    return MapProcessor;
})();
egret.registerClass(MapProcessor,"MapProcessor");
