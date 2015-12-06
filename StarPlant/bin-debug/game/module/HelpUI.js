/**
 * 帮助说明面板
 * @author
 *
 */
var HelpUI = (function (_super) {
    __extends(HelpUI, _super);
    function HelpUI() {
        _super.call(this);
        this.skinName = skin.HelpUISkin;
    }
    var d = __define,c=HelpUI;p=c.prototype;
    HelpUI.getInstance = function () {
        if (null == this._self) {
            this._self = new HelpUI;
        }
        return this._self;
    };
    p.initSet = function () {
        this.introduce.text = "1.点击收获单个果实，滑动可收获全部\n2.小心墙外生物，进入基地要及时消灭\n3.能量站可加速成长，\n 还能触发趣味事件，奖励多多\n4.完成所有成就可获得一枚[绝世神种]\n据说了解它的人不超过3个\n5.独特的战斗系统,可根据自己的偏好,优先选择种植类型\n6.提升基地等级,\n 获得收益加成,挑战高级BOSS";
        this.okBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onOkBtn, this);
    };
    p.onOkBtn = function (evt) {
        DisplayUtil.removeForParent(this);
    };
    p.setFuncDisable = function () {
    };
    p.update = function () {
        this.setFuncDisable();
    };
    p.show = function () {
        this.update();
        LayerManger.uiLayer.addElement(this);
    };
    p.hide = function () {
        DisplayUtil.removeForParent(this);
    };
    p.dispose = function () {
    };
    p.childrenCreated = function () {
        this.initSet();
    };
    p.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    return HelpUI;
})(egret.gui.SkinnableComponent);
egret.registerClass(HelpUI,"HelpUI");
