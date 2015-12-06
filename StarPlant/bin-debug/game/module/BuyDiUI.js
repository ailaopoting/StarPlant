/**
 * 购买地块面板
 * @author
 *
 */
var BuyDiUI = (function (_super) {
    __extends(BuyDiUI, _super);
    function BuyDiUI() {
        _super.call(this);
        this.isInit = false;
        this.COLUMN = 5; //列数
        this._curSelectBlock = -1; //当前选中地块
        this._blockList = [];
        this.skinName = skin.BuyDiSkin;
    }
    var d = __define,c=BuyDiUI;p=c.prototype;
    BuyDiUI.getInstance = function () {
        if (null == this._self) {
            this._self = new BuyDiUI;
        }
        return this._self;
    };
    p.initSet = function () {
        this.scroller.viewport = this.group;
        this.addDiBtn.visible = false;
        this.group.addElement(this.addDiBtn);
    };
    p.initEvent = function () {
        this.addDiBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onAddDiBtn, this);
        this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseBtn, this);
        this.goDi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGoDi, this);
        this.goPlant.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGoPlant, this);
        this.goGet.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGoGet, this); //一键收获
        ModelLocator.getInstance().addEventListener(LogicEvent.SELECT_DI_BLOCK, this.onBlockSelected, this);
    };
    p.onGoDi = function (evt) {
        this.hide();
        ModelLocator.getInstance().dispatchEvent(new LogicEvent(LogicEvent.GO_SELECT_DI, false, false, this._curSelectBlock + 1));
    };
    p.onGoPlant = function (evt) {
        this.hide();
        if (this._curSelectBlock == -1) {
            console.log("当前还未选择地块,不可一键种植!");
            return;
        }
        ModelLocator.getInstance().dispatchEvent(new LogicEvent(LogicEvent.GO_SELECT_DI, false, false, this._curSelectBlock + 1));
        SeedItemUI.getInstance().show({ buyBlockIndex: this._curSelectBlock });
    };
    p.onGoGet = function (evt) {
        var _this = this;
        var startIndex = this._curSelectBlock * 6;
        for (var i = startIndex; i < (startIndex + 6); i++) {
            if (ActorInfo.diTileInfo.seedList[i]) {
                ActorInfo.diTileInfo.seedList[i].dispacheGeterHandle();
            }
        }
        //后台全部收获，是否需要侦听抛事件回来再跟新呢?todo，临时就延时跟新吧
        egret.setTimeout(function () {
            _this.update();
        }, this, 2000);
    };
    p.onBlockSelected = function (evt) {
        var index = this._blockList.indexOf(evt.data);
        if (index == this._curSelectBlock) {
            return;
        }
        if (this._curSelectBlock > -1) {
            this._blockList[this._curSelectBlock].setSelectState(false);
        }
        this._curSelectBlock = index;
        this._blockList[this._curSelectBlock].setSelectState(true);
    };
    p.onAddDiBtn = function (evt) {
        var alert = egret.gui.Alert.show("你确定花费2能量购买地块吗?", "购买", this.selectHandle, "确定", "取消");
        alert.skinName = skin.simple.AlertSkin;
    };
    p.selectHandle = function (evt) {
        if (evt.detail == egret.gui.Alert.FIRST_BUTTON) {
            if (ActorInfo.miMoney >= 2) {
                console.log("开启地块");
                ActorInfo.miMoney -= 2;
                ToolBarUI.getInstance().userUI.update();
                ActorInfo.diTileInfo.openNum += 1;
                ModelLocator.getInstance().dispatchEvent(new LogicEvent(LogicEvent.BUY_DI, false, false, this));
                BuyDiUI.getInstance().update();
            }
            else {
                var alert = egret.gui.Alert.show("所需能量不足，购买失败", "提示", null, "确定");
                alert.skinName = skin.simple.AlertSkin;
            }
        }
        else {
            console.log("取消开启地块");
            egret.gui.Alert;
        }
    };
    p.onCloseBtn = function (evt) {
        this.hide();
    };
    p.setFuncDisable = function () {
    };
    p.update = function () {
        this.setFuncDisable();
        for (var j = 0; j < this._blockList.length; j++) {
            this._blockList[j].dispose();
        }
        this._blockList = [];
        var row = Math.ceil(ActorInfo.diTileInfo.openNum / this.COLUMN);
        var buyItem;
        for (var i = 0; i < (ActorInfo.diTileInfo.openNum + 1); i++) {
            if (i != ActorInfo.diTileInfo.openNum) {
                buyItem = new BuyDiBlock({ id: (i + 1) });
                this.group.addElement(buyItem);
                buyItem.x = (i % this.COLUMN) * 50 + 8;
                buyItem.y = Math.floor(i / this.COLUMN) * 56;
                this._blockList.push(buyItem);
            }
            else {
                this.addDiBtn.visible = true;
                this.addDiBtn.x = (i % this.COLUMN) * 50 + 8;
                this.addDiBtn.y = Math.floor(i / this.COLUMN) * 56;
            }
        }
    };
    p.show = function () {
        LayerManger.uiLayer.addElement(this);
        if (this.isInit == true) {
            this.update();
        }
    };
    p.hide = function () {
        DisplayUtil.removeForParent(this);
    };
    p.childrenCreated = function () {
        this.initSet();
        this.initEvent();
        if (this.isInit == false) {
            this.update();
            this.isInit = true;
        }
    };
    p.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    return BuyDiUI;
})(egret.gui.SkinnableComponent);
egret.registerClass(BuyDiUI,"BuyDiUI");
