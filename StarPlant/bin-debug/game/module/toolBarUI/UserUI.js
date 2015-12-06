/**
 * 用户信息处理
 * @author
 *
 */
var UserUI = (function (_super) {
    __extends(UserUI, _super);
    function UserUI() {
        _super.call(this);
        this.skinName = skin.components.UserUISkin;
    }
    var d = __define,c=UserUI;p=c.prototype;
    p.initSet = function () {
    };
    p.setFuncDisable = function () {
    };
    p.update = function () {
        this.setFuncDisable();
        //拉取用户姓名、性别、等信息
        this.userName.text = ActorInfo.userName;
        //this.setChildIndex(this.userIcon,0);//放入框底层，正式开启todo
        this.userIconRes.source = "10000_5_png";
        this.miVal.text = ActorInfo.miMoney + "";
        //        RES.getResAsync("10000_1_png",this.onIconLoaded,this);
    };
    p.onIconLoaded = function (res) {
    };
    p.dispose = function () {
    };
    p.childrenCreated = function () {
        this.initSet();
        this.update();
    };
    p.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    return UserUI;
})(egret.gui.SkinnableComponent);
egret.registerClass(UserUI,"UserUI");
