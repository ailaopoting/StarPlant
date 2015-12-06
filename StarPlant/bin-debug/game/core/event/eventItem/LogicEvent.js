/**
 * 自定义事件
 * @author
 *
 */
var LogicEvent = (function (_super) {
    __extends(LogicEvent, _super);
    function LogicEvent(type, bubules, cancelable, data) {
        _super.call(this, type, bubules, cancelable, data);
        this.data = data;
    }
    var d = __define,c=LogicEvent;p=c.prototype;
    //自定义事件列表
    LogicEvent.RES_ALL_COMPLETE = "resAllComplete"; //资源全部加载完成
    LogicEvent.LOGIN = "login";
    LogicEvent.START_SCENE = "startScene"; //开始切换场景
    LogicEvent.COMPLETE_SCENE = "completeScene"; //场景切换完成
    LogicEvent.GO_PLANT = "goPlant"; //某个地块去种植，参数:植物id、数量、位置
    LogicEvent.SEED_GETER = "seedGeter"; //种子收获
    LogicEvent.CLICK_NORMAL_ADD_SPEED = "clickNormalAddSpeed"; //普通点击加速
    LogicEvent.BUY_DI = "buyDi"; //购买地块
    LogicEvent.SELECT_DI_BLOCK = "selectDiBlock"; //购买地块面板选中地块
    LogicEvent.GO_SELECT_DI = "goSelectDi"; //购买地块面板去指定地块
    return LogicEvent;
})(egret.Event);
egret.registerClass(LogicEvent,"LogicEvent");
