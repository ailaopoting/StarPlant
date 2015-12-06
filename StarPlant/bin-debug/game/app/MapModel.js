/**
 * 地图模型
 * @author
 *
 */
var MapModel = (function (_super) {
    __extends(MapModel, _super);
    function MapModel() {
        _super.call(this);
        this.init();
    }
    var d = __define,c=MapModel;p=c.prototype;
    p.init = function () {
        this._far = new egret.Sprite;
        this._far.touchEnabled = this._far.touchChildren = true;
        this._ground = new egret.Sprite;
        this._ground.touchEnabled = this._ground.touchChildren = true;
        this._content = new egret.Sprite;
        this._content.touchEnabled = this._content.touchChildren = true;
        this._front = new egret.Sprite;
        this._front.touchEnabled = this._front.touchChildren = true;
        this.addChild(this._far);
        this.addChild(this._ground);
        this.addChild(this._content);
        this.addChild(this._front);
    };
    d(p, "far"
        ,function () {
            return this._far;
        }
    );
    d(p, "ground"
        ,function () {
            return this._ground;
        }
    );
    d(p, "content"
        ,function () {
            return this._content;
        }
    );
    d(p, "front"
        ,function () {
            return this._front;
        }
    );
    p.show = function () {
        LayerManger.mapLayer.addChild(this);
    };
    p.hide = function () {
        DisplayUtil.removeForParent(this);
    };
    p.dispose = function () {
        this.disposeMap();
        this._far.removeChildren();
        this._ground.removeChildren();
        this._content.removeChildren();
        this._front.removeChildren();
    };
    p.addMap = function (mapName) {
        this.disposeMap();
        this._map = new egret.Bitmap();
        RES.getResAsync(mapName, this.onGetMapRes, this);
    };
    p.onGetMapRes = function (data) {
        this._map.texture = data;
        this._ground.addChildAt(this._map, 0);
        ModelLocator.getInstance().dispatchEvent(new LogicEvent(LogicEvent.COMPLETE_SCENE, false, false));
    };
    p.disposeMap = function () {
        if (this._map) {
            DisplayUtil.removeForParent(this._map);
            this._map = null;
        }
    };
    return MapModel;
})(egret.DisplayObjectContainer);
egret.registerClass(MapModel,"MapModel");
