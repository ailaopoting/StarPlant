/**
 * 用户信息集合
 * @author
 *
 */
var ActorInfo = (function () {
    function ActorInfo() {
    }
    var d = __define,c=ActorInfo;p=c.prototype;
    ActorInfo.userName = "朱演"; //用户登录名
    ActorInfo.allCoinMoney = 100; //总非付费财富
    ActorInfo.miMoney = 100; //付费金钱
    ActorInfo.curCoinMoney = 10; //当前非付费财富
    ActorInfo.itemBagInfo = new ItemBagInfo; //背包信息
    ActorInfo.diTileInfo = new DiTitleInfo; //地块信息
    return ActorInfo;
})();
egret.registerClass(ActorInfo,"ActorInfo");
