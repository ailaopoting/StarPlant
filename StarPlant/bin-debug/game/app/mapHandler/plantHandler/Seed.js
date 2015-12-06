/**
 * 种子状态
 * @author
 *
 */
var Seed = (function (_super) {
    __extends(Seed, _super);
    function Seed(diPos) {
        _super.call(this);
        this._needPointList = [20, 40, 60, 80]; //当前所需各个生长阶段点数
        this._id = 10000; //植物id
        this._curPeriod = 0; //当前阶段
        this.res = new egret.Bitmap;
        this.res.touchEnabled = true;
        this.addChild(this.res);
        this._timer = new egret.Timer(1000);
        this._timer.addEventListener(egret.TimerEvent.TIMER, this.onGrow, this);
        this._timer.stop();
        this.diIndex = diPos;
    }
    var d = __define,c=Seed;p=c.prototype;
    /**设置定时器的 时间间隔 毫秒*/
    p.setTimer = function (time) {
        this._timer.delay = time;
    };
    /**是否启动定时器*/
    p.isTimer = function (is) {
        if (is) {
            this._timer.start();
        }
        else {
            this._timer.stop();
        }
    };
    p.onGrow = function (evt) {
        this._curPoint += ActorInfo.diGrowBase + ActorInfo.growPower;
        if (ActorInfo.growPower > 0) {
            console.log("土地效果加成中...");
        }
        if (ActorInfo.isDowAction && ActorInfo.downPower) {
            this._curPoint += ActorInfo.DOWN_ADD_VAL;
            console.log("按下效果加成中...");
        }
        this.growStateHandle();
    };
    p.onAddGrow = function (addPoint) {
        if (addPoint === void 0) { addPoint = 1; }
        this._curPoint += addPoint;
        this.growStateHandle();
    };
    //植物状态处理
    p.growStateHandle = function () {
        if (this._curPoint < this._needPointList[0]) {
            this._curPeriod = 1;
        }
        else if (this._curPoint >= this._needPointList[0] && this._curPoint < this._needPointList[1]) {
            this._curPeriod = 2;
        }
        else if (this._curPoint >= this._needPointList[1] && this._curPoint < this._needPointList[2]) {
            this._curPeriod = 3;
        }
        else if (this._curPoint >= this._needPointList[2] && this._curPoint < this._needPointList[3]) {
            this._curPeriod = 4;
        }
        else {
            this._curPeriod = 5;
            this._timer.stop();
        }
        RES.getResAsync(this._id + "_" + this._curPeriod + "_png", this.resLoaded, this);
    };
    //是否可以领取
    p.canGet = function () {
        var result;
        if (this._curPeriod == 5) {
            result = true;
        }
        else {
            result = false;
        }
        return result;
    };
    p.resLoaded = function (res) {
        this.res.texture = res;
        this.res.x = -this.res.width / 2;
        this.res.y = -this.res.height;
    };
    d(p, "curPeriod"
        ,function () {
            return this._curPeriod;
        }
    );
    p.setData = function (id, checkTime) {
        this._id = id;
        this._checkTime = checkTime;
        //todo 
        this._curPoint = 0;
        this.isTimer(true);
        this.res.addEventListener(egret.TouchEvent.TOUCH_END, this.onGlowGet, this);
        ModelLocator.getInstance().addEventListener(LogicEvent.CLICK_NORMAL_ADD_SPEED, this.onNormalAdd, this);
    };
    p.onNormalAdd = function (evt) {
        this._curPoint += ActorInfo.normalClick + ActorInfo.clickPower;
        if (ActorInfo.clickPower > 0) {
            console.log("点击效果加成中...");
        }
        this.growStateHandle();
    };
    p.onGlowGet = function (evt) {
        ModelLocator.getInstance().dispatchEvent(new LogicEvent(LogicEvent.SEED_GETER, false, false, this));
    };
    //收获通知
    p.dispacheGeterHandle = function () {
        ModelLocator.getInstance().dispatchEvent(new LogicEvent(LogicEvent.SEED_GETER, false, false, this));
    };
    p.show = function () {
        this.visible = true;
    };
    p.hide = function () {
        this.visible = false;
    };
    p.dispose = function () {
        if (this._timer) {
            this._timer.removeEventListener(egret.TimerEvent.TIMER, this.onGrow, this);
            this._timer = null;
        }
        if (this.res) {
            this.res.removeEventListener(egret.TouchEvent.TOUCH_END, this.onGlowGet, this);
            DisplayUtil.removeForParent(this.res);
            this.res = null;
        }
        ModelLocator.getInstance().removeEventListener(LogicEvent.CLICK_NORMAL_ADD_SPEED, this.onNormalAdd, this);
    };
    return Seed;
})(egret.Sprite);
egret.registerClass(Seed,"Seed");
