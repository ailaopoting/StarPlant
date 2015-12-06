/**
 * 游戏图层管理
 */
var LayerManger = (function () {
    function LayerManger() {
    }
    var d = __define,c=LayerManger;p=c.prototype;
    LayerManger.setup = function (root) {
        this._root = root;
        this._stage = this._root.stage;
        this._rootRect = new egret.Rectangle(0, 0, this._root.width, this._root.height);
        this._mapLayer = new egret.Sprite();
        //        this._mapLayer.touchEnabled = false;
        //        this._mapLayer.touchChildren = true;
        this._root.addChild(this._mapLayer);
        this._uiLayer = new egret.gui.UIStage;
        //        this._uiLayer.touchEnabled = false;
        //        this._uiLayer.touchChildren = false;
        this._root.addChild(this._uiLayer);
        this._dialogLayer = new egret.Sprite();
        //        this._dialogLayer.touchEnabled = false;
        //        this._dialogLayer.touchChildren = true;
        this._root.addChild(this._dialogLayer);
        this._moduleLayer = new egret.Sprite();
        //        this._moduleLayer.touchEnabled = false;
        //        this._moduleLayer.touchChildren = true;
        this._root.addChild(this._moduleLayer);
        this._topLayer = new egret.Sprite();
        //        this._topLayer.touchEnabled = false;
        //        this._topLayer.touchChildren = true;
        this._root.addChild(this._topLayer);
        this._layerInteractionRecordMap = new HashMap;
        this._focusLayerStack = [];
    };
    d(LayerManger, "stage"
        ,function () {
            return this._stage;
        }
    );
    d(LayerManger, "root"
        ,function () {
            return this._root;
        }
    );
    d(LayerManger, "rootRect"
        ,function () {
            return this._rootRect;
        }
    );
    d(LayerManger, "mapLayer"
        ,function () {
            return this._mapLayer;
        }
    );
    d(LayerManger, "uiLayer"
        ,function () {
            return this._uiLayer;
        }
    );
    d(LayerManger, "dialogLayer"
        ,function () {
            return this._dialogLayer;
        }
    );
    d(LayerManger, "moduleLayer"
        ,function () {
            return this._moduleLayer;
        }
    );
    d(LayerManger, "topLayer"
        ,function () {
            return this._topLayer;
        }
    );
    LayerManger.recordAllLayerInteraction = function () {
        if (this._focusLayerStack.length == 0) {
            this.recordLayerInteraction(this._mapLayer);
            this.recordLayerInteraction(this._uiLayer);
            this.recordLayerInteraction(this._dialogLayer);
            this.recordLayerInteraction(this._moduleLayer);
            this.recordLayerInteraction(this._topLayer);
        }
    };
    LayerManger.recordLayerInteraction = function (layer) {
        this._layerInteractionRecordMap.add(layer, new LayerInteractionSetting(layer.touchChildren, layer.touchEnabled));
    };
    LayerManger.resetAllLayerInteraction = function () {
        this.resetLayerInteraction(this._mapLayer);
        this.resetLayerInteraction(this._uiLayer);
        this.resetLayerInteraction(this._dialogLayer);
        this.resetLayerInteraction(this._moduleLayer);
        this.resetLayerInteraction(this._topLayer);
    };
    LayerManger.resetLayerInteraction = function (layer) {
        var layerInteractionSetting = this._layerInteractionRecordMap.get(layer);
        if (layerInteractionSetting != null) {
            layer.touchChildren = layerInteractionSetting.mouseChildren;
            layer.touchEnabled = layerInteractionSetting.touchEnabled;
        }
    };
    LayerManger.pushLayerToStack = function (layer) {
        this._focusLayerStack.push(layer);
    };
    LayerManger.popLayerFromStack = function () {
        this.resetAllLayerInteraction();
        this._focusLayerStack.pop();
        if (this._focusLayerStack.length == 0) {
            return;
        }
        var top = this._focusLayerStack.pop();
        switch (top) {
            case this._topLayer:
                this.focusOnTopLayer();
                break;
            case this._moduleLayer:
                this.focusOnModuleLayer();
                break;
            case this._dialogLayer:
                this.focusOnDialogLayer();
                break;
            case this._uiLayer:
                this.focusOnUILayer();
        }
    };
    LayerManger.focusOnUILayer = function () {
        this.recordAllLayerInteraction();
        this._mapLayer.touchChildren = false;
        this._uiLayer.touchChildren = true;
        this.pushLayerToStack(this._uiLayer);
    };
    LayerManger.focusOnDialogLayer = function () {
        this.recordAllLayerInteraction();
        this._mapLayer.touchChildren = false;
        this._uiLayer.touchChildren = false;
        this._dialogLayer.touchChildren = true;
        this.pushLayerToStack(this._dialogLayer);
    };
    LayerManger.focusOnModuleLayer = function () {
        this.recordAllLayerInteraction();
        this._mapLayer.touchChildren = false;
        this._uiLayer.touchChildren = false;
        this._dialogLayer.touchChildren = false;
        this._moduleLayer.touchChildren = true;
        this.pushLayerToStack(this._moduleLayer);
    };
    LayerManger.focusOnTopLayer = function () {
        this.recordAllLayerInteraction();
        this._mapLayer.touchChildren = false;
        this._uiLayer.touchChildren = false;
        this._dialogLayer.touchChildren = false;
        this._moduleLayer.touchChildren = false;
        this._topLayer.touchChildren = true;
        this.pushLayerToStack(this._topLayer);
    };
    LayerManger.focusOnMapLayer = function () {
        this.recordAllLayerInteraction();
        this._mapLayer.touchChildren = true;
        this._uiLayer.touchChildren = false;
        this._dialogLayer.touchChildren = false;
        this._moduleLayer.touchChildren = false;
        this._topLayer.touchChildren = false;
        this.pushLayerToStack(this._mapLayer);
    };
    LayerManger.resetOperation = function () {
        this.popLayerFromStack();
    };
    /**
     *隐图层
     */
    LayerManger.hideMap = function () {
        DisplayUtil.removeForParent(this._mapLayer);
        DisplayUtil.removeForParent(this._uiLayer);
        DisplayUtil.removeForParent(this._dialogLayer);
    };
    /**
     *显图层
     */
    LayerManger.showMap = function () {
        this._root.addChild(this._mapLayer);
        this._root.addChild(this._uiLayer);
        this._root.addChild(this._dialogLayer);
        this._root.addChild(this._moduleLayer);
        this._root.addChild(this._topLayer);
    };
    return LayerManger;
})();
egret.registerClass(LayerManger,"LayerManger");
var LayerInteractionSetting = (function (_super) {
    __extends(LayerInteractionSetting, _super);
    function LayerInteractionSetting(mouseChildren, touchEnabled) {
        _super.call(this);
        this.mouseChildren = mouseChildren;
        this.touchEnabled = touchEnabled;
    }
    var d = __define,c=LayerInteractionSetting;p=c.prototype;
    return LayerInteractionSetting;
})(egret.HashObject);
egret.registerClass(LayerInteractionSetting,"LayerInteractionSetting");
