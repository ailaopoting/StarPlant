/**
 * Created by Administrator on 2015/5/16.
 * 期待:QQ804772778
 */
class OverGame extends egret.DisplayObjectContainer {
    public constructor() {
        super();
        this.createView();
    }
    private createView():void {

        this.gameIntro();
    }
    //========================这段代码用来调度事件（进入、开始、结束）==========================
    private gameIntro():void {
        ConstantA.element = new OverGameUI();
        ConstantA.guiLayer.addElement(ConstantA.element);
        ConstantA.element.btn1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
    }
    private onButtonClick(event:egret.TouchEvent):void {
                                
        //调度事件 转到 游戏介绍
        this.dispatchEvent(new egret.Event("GameIntro"));
    }
}