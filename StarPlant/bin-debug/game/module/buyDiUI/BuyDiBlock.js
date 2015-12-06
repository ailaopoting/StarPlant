/**
 * 地块购买单位
 * @author
 *
 */
var BuyDiBlock = (function (_super) {
    __extends(BuyDiBlock, _super);
    function BuyDiBlock(varInfo) {
        _super.call(this);
        this.isInit = false; //资源是否初始化
        this.skinName = skin.components.BuyDiBlockSkin;
        this.info = varInfo;
    }
    var d = __define,c=BuyDiBlock;p=c.prototype;
    p.initSet = function () {
        this.setSelectState(false);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
    };
    p.onClick = function (evt) {
        this.setSelectState(true);
        ModelLocator.getInstance().dispatchEvent(new LogicEvent(LogicEvent.SELECT_DI_BLOCK, false, false, this));
    };
    p.setFuncDisable = function () {
    };
    p.setSelectState = function (val) {
        if (val) {
            this.unSelect.visible = false;
            this.select.visible = true;
        }
        else {
            this.unSelect.visible = true;
            this.select.visible = false;
        }
    };
    p.setData = function (varInfo) {
        this.info = varInfo;
        this.update();
    };
    p.update = function () {
        this.setFuncDisable();
        this.num.text = this.info.id + "";
        var index = this.info.id - 1;
        var startIndex = index * 6;
        var isFull = true; //当前地块是否植物已种满处理
        var canGet = false; //当前地块是否有可收获处理
        for (var i = startIndex; i < startIndex + 6; i++) {
            if (ActorInfo.diTileInfo.seedList[i] == null) {
                isFull = false;
            }
            if (ActorInfo.diTileInfo.seedList[i]) {
                if (ActorInfo.diTileInfo.seedList[i].canGet()) {
                    canGet = true;
                }
            }
        }
        this.fullMark.visible = isFull;
        this.canGetMark.visible = canGet;
    };
    p.dispose = function () {
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        DisplayUtil.removeForParent(this);
    };
    p.childrenCreated = function () {
        this.initSet();
        this.isInit = true;
        this.update();
    };
    p.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    return BuyDiBlock;
})(egret.gui.SkinnableComponent);
egret.registerClass(BuyDiBlock,"BuyDiBlock");
