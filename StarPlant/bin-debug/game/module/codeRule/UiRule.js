/**
 * UI模板
 * @author
 *
 */
var UiRule = (function (_super) {
    __extends(UiRule, _super);
    function UiRule() {
        _super.call(this);
        //        this.skinName = skin.BuyDiSkin;
    }
    var d = __define,c=UiRule;p=c.prototype;
    UiRule.getInstance = function () {
        if (null == this._self) {
            this._self = new UiRule;
        }
        return this._self;
    };
    p.initSet = function () {
    };
    p.initEvent = function () {
    };
    p.onCloseBtn = function (evt) {
        this.hide();
    };
    p.setFuncDisable = function () {
    };
    p.update = function () {
        this.setFuncDisable();
        //拉取数据处理
    };
    p.show = function () {
        LayerManger.uiLayer.addElement(this);
        if (this.isInit == true) {
            this.update();
        }
    };
    p.hide = function () {
        DisplayUtil.removeForParent(this);
    };
    p.childrenCreated = function () {
        this.initSet();
        this.initEvent();
        if (this.isInit == false) {
            this.update();
            this.isInit = true;
        }
    };
    p.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    return UiRule;
})(egret.gui.SkinnableComponent);
egret.registerClass(UiRule,"UiRule");
