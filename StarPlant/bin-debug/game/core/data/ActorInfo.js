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
    ActorInfo.diGrowBase = 1; //地块定时基本值
    ActorInfo.normalClick = 1; //普通点击效果
    ActorInfo.miAddPower = [0, 0.1, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19, 0.20, 0.21, 0.22, 0.23, 0.24, 0.25, 0.26, 0.27, 0.28, 0.29, 0.3, 0.31, 0.32, 0.33, 0.34, 0.35, 0.36, 0.37, 0.38, 0.39, 0.4, 0.41, 0.42, 0.43, 0.44, 0.45, 0.46, 0.47, 0.48, 0.49, 0.5, 0.51, 0.52, 0.53, 0.54, 0.55, 0.56, 0.57, 0.58, 0.59, 0.6, 0.61, 0.62, 0.63, 0.64, 0.65, 0.66, 0.67, 0.68, 0.69, 0.7, 0.71, 0.72, 0.73, 0.74, 0.75, 0.76, 0.77, 0.78, 0.79, 0.8, 0.81, 0.82, 0.83, 0.84, 0.85, 0.86, 0.87, 0.88, 0.89, 0.9, 0.91, 0.92, 0.93, 0.94, 0.95, 0.96, 0.97, 0.98, 0.99, 1, 1.1, 1.12, 1.13, 1.14, 1.15, 1.16, 1.17, 1.18, 1.19]; //植物金钱加成 总共100级
    ActorInfo.clickPower = 0; //点击效果加成
    ActorInfo.clickPowerLeftTime = 0; //需要通过后台时间戳计算
    ActorInfo.growPower = 0; //植物成长效果加成
    ActorInfo.growPowerLeftTime = 0; //需要通过后台时间戳计算
    ActorInfo.DOWN_ADD_VAL = 2; //按下每秒添加值
    ActorInfo.isDowAction = false; //是否加速功能按钮down状态
    ActorInfo.downPower = false; // 鼠标按下持续加速效果
    ActorInfo.downPowerLeftTime = 0; //需要通过后台时间戳计算
    ActorInfo.itemBagInfo = new ItemBagInfo; //背包信息
    ActorInfo.diTileInfo = new DiTitleInfo; //地块信息
    return ActorInfo;
})();
egret.registerClass(ActorInfo,"ActorInfo");
