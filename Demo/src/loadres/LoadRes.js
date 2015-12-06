/**
 * Created by Administrator on 2015/5/26.
 */
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var LoadRes = (function (_super) {
    __extends(LoadRes, _super);
    function LoadRes() {
        _super.call(this);
        /**加载进度界面*/
        this.loadingView = new LoadingUI();
        this.Group_Zu = []; //储存 已加载的 组名字
        this.Zu = []; //等待加载
        this.isJZ = false; //是否正在加载
        this.timer = new egret.Timer(1000 / 1);
    }
    LoadRes.prototype.onAddToStage = function (Group) {
        console.warn("加载:" + Group);
        if (!this.timer.running) {
            this.timer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
            this.timer.start();
        }
        this.Zu.push(Group);
    };
    LoadRes.prototype.onTimer = function (e) {
        if (this.isJZ) {
            return;
        }
        else {
            if (this.Zu.length > 0) {
                this.addChild(this.loadingView);
                this.isJZ = true;
                RES.setMaxLoadingThread(5); //设置最大加载线程
                RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
                RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
                RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
                RES.loadGroup(this.Zu[0]);
            }
            else {
                this.timer.stop();
                this.timer.removeEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
                this.dispatchEvent(new egret.Event("stopRes")); //派发全部加载完毕事件
            }
        }
    };
    /**
     * 资源组加载出错
     */
    LoadRes.prototype.onResourceLoadError = function (event) {
        //TODO
        console.warn("加载失败Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        this.onResourceLoadComplete(event);
    };
    /**
     * preload资源组加载进度
     */
    LoadRes.prototype.onResourceProgress = function (event) {
        this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        //console.warn("加载进度Group:" + event.groupName  + "  " +  event.itemsLoaded + "/" + event.itemsTotal);
    };
    /**
     * preload资源组加载完成
     */
    LoadRes.prototype.onResourceLoadComplete = function (event) {
        this.loadingView.setProgress(0, 0);
        this.removeChild(this.loadingView);
        //这里。。
        RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        this.Group_Zu.push(event.groupName); //保存 组名字
        console.warn("加载完成:" + event.groupName);
        this.dispatchEvent(new egret.Event(event.groupName));
        this.Zu.splice(0, 1);
        this.isJZ = false;
    };
    return LoadRes;
})(egret.Sprite);
//# sourceMappingURL=LoadRes.js.map