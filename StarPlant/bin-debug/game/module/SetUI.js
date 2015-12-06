/**
 * 设置面板
 * @author
 *
 */
var SetUI = (function (_super) {
    __extends(SetUI, _super);
    function SetUI() {
        _super.call(this);
        this._state = 0; //0播放  1静音
        this.skinName = skin.SetUISkin;
    }
    var d = __define,c=SetUI;p=c.prototype;
    SetUI.getInstance = function () {
        if (null == this._self) {
            this._self = new SetUI;
        }
        return this._self;
    };
    p.initSet = function () {
        this.okBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onOkBtn, this);
        this.select0.visible = this.select1.visible = true;
        this.select0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelect0, this);
        this.select1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelect1, this);
    };
    p.onSelect0 = function (evt) {
        this.select0.selected = true;
        this.select1.selected = false;
        this._state = 0;
        //播放音乐
        SoundManager.getInstance().curChanel = SoundManager.getInstance().curSound.play(0, 0);
    };
    p.onSelect1 = function (evt) {
        this.select0.selected = false;
        this.select1.selected = true;
        this._state = 1;
        //停止音乐
        SoundManager.getInstance().curChanel.stop();
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
        var rdb = new egret.gui.RadioButton();
        rdb.label = "选择我1";
        rdb.value = 1;
        this.addElement(rdb);
    };
    p.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    return SetUI;
})(egret.gui.SkinnableContainer);
egret.registerClass(SetUI,"SetUI");
