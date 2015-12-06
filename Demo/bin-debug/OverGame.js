/**
 * Created by Administrator on 2015/5/16.
 * 期待:QQ804772778
 */
var OverGame = (function (_super) {
    __extends(OverGame, _super);
    function OverGame() {
        _super.call(this);
        this.createView();
    }
    var d = __define,c=OverGame;p=c.prototype;
    p.createView = function () {
        this.gameIntro();
    };
    //========================这段代码用来调度事件（进入、开始、结束）==========================
    p.gameIntro = function () {
        ConstantA.element = new OverGameUI();
        ConstantA.guiLayer.addElement(ConstantA.element);
        ConstantA.element.btn1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
    };
    p.onButtonClick = function (event) {
        //调度事件 转到 游戏介绍
        this.dispatchEvent(new egret.Event("GameIntro"));
    };
    return OverGame;
})(egret.DisplayObjectContainer);
egret.registerClass(OverGame,"OverGame");
