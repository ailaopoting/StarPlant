/**
 * 主界面功能显示
 * @author
 *
 */
var ToolBarUI = (function (_super) {
    __extends(ToolBarUI, _super);
    function ToolBarUI() {
        _super.call(this);
        this.isShow = false; //显示状态
        this.isInit = false; //是否初始化
        this.skinName = skin.ToolBarSkin;
    }
    var d = __define,c=ToolBarUI;p=c.prototype;
    ToolBarUI.getInstance = function () {
        if (null == this._self) {
            this._self = new ToolBarUI;
        }
        return this._self;
    };
    p.initSet = function () {
        this.pargeBar = new PageBar(this.preDiBtn, this.nextDiBtn, this._pageBarTotal);
        this.userUI = new UserUI;
        this.userUI.x = 2;
        this.userUI.y = 0;
        LayerManger.uiLayer.addElement(this.userUI);
        this.moneyUI = new MoneyUI;
        this.moneyUI.x = 140;
        this.moneyUI.y = 0;
        LayerManger.uiLayer.addElement(this.moneyUI);
        this.eventTip.visible = false;
        this.eventRandomHandle();
    };
    p.setPageBarTotal = function (val) {
        this._pageBarTotal = val;
    };
    //随机事件处理
    p.eventRandomHandle = function () {
    };
    p.initEvent = function () {
        console.log("添加事件了==================");
        this.shopBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onShopBtn, this);
        this.addSpeedBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onAddSpeed, this); //加速点击
        this.addSpeedBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onLastAddSpeedDwon, this); //加速按下中
        this.addSpeedBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.onLastAddSpeedUp, this); //加速抬起
        this.helpBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHelp, this);
        this.setBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSet, this);
        this.buyDi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBuyDi, this);
    };
    p.onLastAddSpeedDwon = function (evt) {
        ActorInfo.isDowAction = true;
    };
    p.onLastAddSpeedUp = function (evt) {
        ActorInfo.isDowAction = false;
    };
    p.onAddSpeed = function (evt) {
        ModelLocator.getInstance().dispatchEvent(new LogicEvent(LogicEvent.CLICK_NORMAL_ADD_SPEED, false, false));
    };
    p.onHelp = function (evt) {
        HelpUI.getInstance().show();
    };
    p.onSet = function (evt) {
        SetUI.getInstance().show();
    };
    p.onBuyDi = function (evt) {
        BuyDiUI.getInstance().show();
    };
    p.onShopBtn = function (evt) {
    };
    p.setFuncDisable = function () {
    };
    p.update = function () {
        this.setFuncDisable();
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
    p.dispose = function () {
    };
    /**
     所有子项和皮肤中的组件都已经创建完毕并完成测量，可以使用
     */
    p.childrenCreated = function () {
        this.initSet();
        this.initEvent();
        ModelLocator.getInstance().dispatchEvent(new LogicEvent(LogicEvent.RES_ALL_COMPLETE, false, false, this));
        if (this.isInit == false) {
            this.update();
            this.isInit = true;
        }
    };
    /**
     partAdded 是皮肤部件赋值到逻辑类的入口，你可以在这里进行
     必要的初始化操作。比如需要随屏幕改变组件的尺寸，写在这里
     可以避免写在 childrenCreated 中修改造成的多次测量。
     */
    p.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        //        if(instance == this.btn1) {
        //            
        //        }
    };
    return ToolBarUI;
})(egret.gui.SkinnableComponent);
egret.registerClass(ToolBarUI,"ToolBarUI");
