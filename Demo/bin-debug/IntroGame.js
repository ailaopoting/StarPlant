/**
 * Created by Administrator on 2015/5/16.
 * 期待:QQ804772778
 */
var IntroGame = (function (_super) {
    __extends(IntroGame, _super);
    function IntroGame() {
        _super.call(this);
        this.gameStart();
    }
    var d = __define,c=IntroGame;p=c.prototype;
    //========================这段代码用来调度事件（进入、开始、结束）==========================
    p.gameStart = function () {
        ConstantA.element = new IntroGameUI();
        ConstantA.guiLayer.addElement(ConstantA.element);
        ConstantA.element.btn1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick1, this);
        ConstantA.element.btn2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick2, this);
    };
    p.onButtonClick1 = function (event) {
        //字母、数字 和 中文 的length 都是按字面个数来算的，
        /*if (ConstantA.element.input1.text == "" || ConstantA.element.input1.text.length < 6){
                egret.gui.Alert.show("btn1帐号不能为空 或 少于6个字");
            return;
        }
        if (ConstantA.element.input2.text == "" || ConstantA.element.input2.text.length < 6){
                egret.gui.Alert.show("btn1密码不能为空 或 少于6个字");
            return;
        }*/
        if (Main.isLoadResOK) {
            //(文档里介绍：需要一个TOUCH_TAP事件才能正常播放音效？？？)
            //延迟5秒后音乐播放
            egret.setTimeout(function () {
                ConstantA.BgSound.play(-1); //循环播放背景音乐
            }, this, 5000); //间隔时间为5秒钟
            //调度事件 转到 开始游戏
            this.dispatchEvent(new egret.Event("GameStart"));
        }
        else {
            egret.gui.Alert.show("资源加载中...精彩内容即将为你呈现...请稍后");
        }
    };
    p.onButtonClick2 = function (event) {
        if (ConstantA.element.input1.text == "" || ConstantA.element.input1.text.length < 6) {
            egret.gui.Alert.show("btn2帐号不能为空 或 少于6个字");
            return;
        }
        if (ConstantA.element.input2.text == "" || ConstantA.element.input2.text.length < 6) {
            egret.gui.Alert.show("btn2密码不能为空 或 少于6个字");
            return;
        }
        //赋值给文本框
        ConstantA.element.label1.text = "你注册的帐号是：" + ConstantA.element.input1.text;
    };
    return IntroGame;
})(egret.DisplayObjectContainer);
egret.registerClass(IntroGame,"IntroGame");
