/**
 * 地块信息
 * @author
 *
 */
var DiTitleInfo = (function () {
    //    public diInfo: any = {
    //        "1": {
    //            "id": 10000,//种子id
    //            "state": 1,//种子当前状态1.种子   2.状态1   3.状态2   4.状态3   5.状态4
    //            "timePoint":12345,//种植时间戳
    //            "leftTime":80//剩余时间
    //             },
    //        "2": {
    //            "id": 10000,//种子id
    //            "state": 2,//种子当前状态1.种子   2.状态1   3.状态2   4.状态3   5.状态4
    //            "timePoint": 12345,//种植时间戳
    //            "leftTime": 70//剩余时间
    //        },
    //        "3": {
    //            "id": 10000,//种子id
    //            "state": 3,//种子当前状态1.种子   2.状态1   3.状态2   4.状态3   5.状态4
    //            "timePoint": 12345,//种植时间戳
    //            "leftTime": 60//剩余时间
    //        },
    //        "4": {
    //            "id": 10000,//种子id
    //            "state": 4,//种子当前状态1.种子   2.状态1   3.状态2   4.状态3   5.状态4
    //            "timePoint": 12345,//种植时间戳
    //            "leftTime": 50//剩余时间
    //        },
    //        "5": {
    //            "id": 10000,//种子id
    //            "state": 5,//种子当前状态1.种子   2.状态1   3.状态2   4.状态3   5.状态4
    //            "timePoint": 12345,//种植时间戳
    //            "leftTime": 40//剩余时间
    //        }
    //    };
    function DiTitleInfo() {
        this.diLevel = 1; //地块等级
        this.openNum = 1; //开启地块数 
        this.seedList = []; //植物种植项
        this.diInfo = null;
    }
    var d = __define,c=DiTitleInfo;p=c.prototype;
    //是否重新网络拉取,回调函数
    p.requestInfo = function (isReNet, callBack) {
        if (isReNet === void 0) { isReNet = false; }
        if (callBack === void 0) { callBack = null; }
        if (this.diInfo == null) {
            //  NetRequestManager.requestToNet(); 缓存处理，如果初始化没拉取成功则执行首次数据拉取
            if (callBack != null) {
                callBack();
            }
        }
        else {
            if (isReNet) {
                //  NetRequestManager.requestToNet(); 缓存处理，如果初始化没拉取成功则执行首次数据拉取
                if (callBack != null) {
                    callBack();
                }
            }
            else {
                if (callBack != null) {
                    callBack();
                }
            }
        }
    };
    return DiTitleInfo;
})();
egret.registerClass(DiTitleInfo,"DiTitleInfo");
