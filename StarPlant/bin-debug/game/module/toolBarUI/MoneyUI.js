/**
 * 财富处理
 * @author
 *
 */
var MoneyUI = (function (_super) {
    __extends(MoneyUI, _super);
    function MoneyUI() {
        _super.call(this);
        this._state = 0; //0.当前  1.总
        this.skinName = skin.components.MoneyUISkin;
    }
    var d = __define,c=MoneyUI;p=c.prototype;
    p.initSet = function () {
        this.allMoney.addEventListener(egret.TouchEvent.TOUCH_TAP, this.allMoneyClick, this);
        this.curMoney.addEventListener(egret.TouchEvent.TOUCH_TAP, this.curMoneyClick, this);
    };
    p.allMoneyClick = function (evt) {
        this._state = 0;
        this.stateHandle();
    };
    p.curMoneyClick = function (evt) {
        this._state = 1;
        this.stateHandle();
    };
    p.stateHandle = function () {
        if (this._state == 0) {
            this.curMoney.visible = true;
            this.allMoney.visible = false;
            this.moneyState.text = "当前";
            this.moneyVal.text = ActorInfo.curCoinMoney + "";
        }
        else {
            this.curMoney.visible = false;
            this.allMoney.visible = true;
            this.moneyState.text = "总财";
            this.moneyVal.text = ActorInfo.allCoinMoney + "";
        }
    };
    p.setFuncDisable = function () {
    };
    p.update = function () {
        this.setFuncDisable();
        //拉取信息
        this.stateHandle();
    };
    p.dispose = function () {
    };
    p.childrenCreated = function () {
        this.initSet();
        this.update();
    };
    p.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    return MoneyUI;
})(egret.gui.SkinnableComponent);
egret.registerClass(MoneyUI,"MoneyUI");
