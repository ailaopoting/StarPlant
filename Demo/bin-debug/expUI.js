var expUI = (function (_super) {
    __extends(expUI, _super);
    function expUI() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=expUI;p=c.prototype;
    p.onAddToStage = function () {
        //底部的进度条
        var dark = new egret.Bitmap(RES.getRes("bardark_png"));
        this.addChild(dark);
        //上面的进度条
        this.bright = new egret.Bitmap(RES.getRes("barbright_png"));
        this.addChild(this.bright);
        this.maskRect = new egret.Rectangle(0, 0, 0, 24);
        this.bright.mask = this.maskRect; //设置空的遮罩，亮条不显示
        this.txt = new egret.TextField();
        this.txt.size = 14;
        this.txt.y = -5;
        this.txt.width = ConstantA.stageW;
        this.txt.textColor = 0xffffff; //设置颜色
        this.txt.bold = true;
        //this.txt.strokeColor = 0xFF9999;//设置描边颜色
        //this.txt.stroke = 1;//设置描边大小
        this.txt.textAlign = "center";
        this.txt.text = "0/0";
        this.addChild(this.txt);
    };
    /**
     * 加载资源文件中
     */
    p.onProgress = function (A, B, C) {
        this.txt.text = "Exp:" + A + "/" + B + C;
        var per = A / B; //加载的比例
        this.maskRect = new egret.Rectangle(0, 0, per * this.bright.width, 24); //计算遮罩的大小
        this.bright.mask = this.maskRect;
    };
    return expUI;
})(egret.Sprite);
egret.registerClass(expUI,"expUI");
