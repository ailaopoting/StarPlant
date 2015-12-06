/**
 * Created by Administrator on 2015/5/23.
 */
var Weapon = (function (_super) {
    __extends(Weapon, _super);
    function Weapon() {
        _super.call(this);
        this.key = 0; //对象的标识
        this.timer = new egret.Timer(1000); //默认1秒
        this.i = 0; //起始帧
        this.n = 0; //帧数
        this.j = 0; //播放计数
        this.m = true; //是否循环播放
    }
    var d = __define,c=Weapon;p=c.prototype;
    /**设置定时器的 时间间隔 毫秒*/
    p.setTimer = function (time) {
        this.timer.delay = time;
    };
    /**是否启动定时器*/
    p.isTimer = function (is) {
        if (is) {
            this.timer.start();
        }
        else {
            this.timer.stop();
        }
    };
    /**复位第一帧*/
    p.setIndex = function () {
        this.mc.gotoAndStop(this.i);
    };
    //参数 stepA 是 方向标识，用于 新对象 跳帧
    p.startRole = function (step, step2, step3) {
        this.i = step;
        this.n = step2;
        this.m = step3;
        var data = RES.getRes("w_1_json");
        var tex = RES.getRes("w_1_png");
        this.mcf = new egret.MovieClipDataFactory(data, tex);
        this.mc = new egret.MovieClip(this.mcf.generateMovieClipData("w_1"));
        this.mc.gotoAndStop(this.i);
        this.addChild(this.mc);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.onRoleTimer, this);
        //this.timer.start();
        return this.mc;
    };
    p.onRoleTimer = function (evt) {
        //减去自身一帧
        if (this.j >= this.n - 1) {
            this.j = 0;
            if (!this.m) {
                this.timer.stop();
                return;
            }
        }
        else {
            this.j += 1;
        }
        this.mc.gotoAndStop(this.i + this.j);
    };
    return Weapon;
})(egret.Sprite);
egret.registerClass(Weapon,"Weapon");
