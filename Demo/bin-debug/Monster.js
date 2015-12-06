/**
 * Created by Administrator on 2015/5/23.
 */
var Monster = (function (_super) {
    __extends(Monster, _super);
    function Monster() {
        _super.call(this);
        this.key = 0; //对象的标识
        this.i = 0; //起始帧
        this.n = 0; //帧数
        this.j = 0; //播放计数
    }
    var d = __define,c=Monster;p=c.prototype;
    p.setTimer = function (time) {
        this.timer.delay = time;
    };
    p.isTimer = function (is) {
        if (is) {
            this.timer.start();
        }
        else {
            this.timer.stop();
        }
    };
    p.setFrame = function (step, step2) {
        this.i = step;
        this.n = step2;
    };
    //参数 stepA 是 方向标识，用于 新对象 跳帧
    p.startRole = function (josn, png, mc_name, step, step2, time) {
        this.i = step;
        this.n = step2;
        /*        var data = RES.getRes("monster_json");
                var tex = RES.getRes("monster_png");
                this.mcf = new egret.MovieClipDataFactory(data,tex);
                this.mc = new egret.MovieClip( this.mcf.generateMovieClipData("monster"));
        */
        var data = RES.getRes(josn);
        var tex = RES.getRes(png);
        this.mcf = new egret.MovieClipDataFactory(data, tex);
        this.mc = new egret.MovieClip(this.mcf.generateMovieClipData(mc_name));
        //对象创建就会显示第一帧....所以要 跳帧，要不然 在 更换动作 新对象 的时候..就会显示第一帧..就呵呵了
        this.mc.gotoAndStop(this.i);
        this.addChild(this.mc);
        if (time > 0) {
            this.timer = new egret.Timer(time);
            this.timer.addEventListener(egret.TimerEvent.TIMER, this.onRoleTimer, this);
            this.timer.start();
        }
        return this.mc;
    };
    p.onRoleTimer = function (evt) {
        //减去自身一帧
        if (this.j >= this.n - 1) {
            this.j = 0;
        }
        else {
            this.j += 1;
        }
        //console.log("调试输出：",this.i,this.j);//调试
        this.mc.gotoAndStop(this.i + this.j);
    };
    return Monster;
})(egret.Sprite);
egret.registerClass(Monster,"Monster");
