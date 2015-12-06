/**
 * 种植UI
 * @author
 *
 */
var SeedItemUI = (function (_super) {
    __extends(SeedItemUI, _super);
    function SeedItemUI() {
        _super.call(this);
        this.itemList = [];
        this._curSelect = -1;
        this.isShow = false; //显示状态
        this.isInit = false; //是否初始化
        this.tabList = [];
        this.tabSelectedList = [];
        this._curTabIndex = 0;
        this.skinName = skin.SeedItemUISkin;
    }
    var d = __define,c=SeedItemUI;p=c.prototype;
    SeedItemUI.getInstance = function () {
        if (null == this._self) {
            this._self = new SeedItemUI;
        }
        return this._self;
    };
    p.initSet = function () {
        this.tabList.push(this.tabBtn0);
        this.tabList.push(this.tabBtn1);
        this.tabList.push(this.tabBtn2);
        this.tabList.push(this.tabBtn3);
        this.tabSelectedList.push(this.tabSelected0);
        this.tabSelectedList.push(this.tabSelected1);
        this.tabSelectedList.push(this.tabSelected2);
        this.tabSelectedList.push(this.tabSelected3);
        this.tabSelected0.visible = this.tabSelected1.visible = this.tabSelected2.visible = this.tabSelected3.visible = false;
        this.tabSelected0.touchEnabled = this.tabSelected0.touchChildren = false;
        this.tabSelected1.touchEnabled = this.tabSelected1.touchChildren = false;
        this.tabSelected2.touchEnabled = this.tabSelected2.touchChildren = false;
        this.tabSelected3.touchEnabled = this.tabSelected3.touchChildren = false;
        var item;
        for (var i = 0; i < 4; i++) {
            item = [];
            this.itemList.push(item);
            //数据模拟种子todo
            var nameList = ["神器:", "机甲:", "神兽:", "植物"];
            for (var j = 0; j < 10; j++) {
                item.push(new SeedItem({ id: 10000, source: "10000_5_png", num: 10, introduce: nameList[i] + "这是一颗神奇的种子" }));
            }
        }
        console.log("种子列表已经实例化");
        this.scroller.viewport = this.group;
    };
    p.initEvent = function () {
        if (this.closeBtn != null) {
            this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseBtn, this);
        }
        for (var i = 0; i < this.itemList.length; i++) {
            for (var j = 0; j < this.itemList[i].length; j++) {
                this.itemList[i][j].addEventListener(egret.TouchEvent.TOUCH_TAP, this.onItemClick, this);
            }
        }
        this.goPlant.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goPlantClick, this);
        this.goAllPlant.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goAllPlantClick, this);
        for (i = 0; i < this.tabList.length; i++) {
            this.tabList[i].addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTabClick, this);
        }
    };
    p.onTabClick = function (evt) {
        var index = this.tabList.indexOf(evt.currentTarget);
        if (index == this._curTabIndex) {
            return;
        }
        if (this._curSelect != -1) {
            this.itemList[this._curTabIndex][this._curSelect].borderSelected.visible = false;
            this._curSelect = -1;
        }
        this.tabSelectedList[this._curTabIndex].visible = false;
        this._curTabIndex = index;
        this.filterByIndex();
    };
    p.filterByIndex = function () {
        this.group.removeAllElements();
        for (var i = 0; i < this.tabSelectedList.length; i++) {
            if (i == this._curTabIndex) {
                this.tabSelectedList[i].visible = true;
            }
        }
        for (i = 0; i < this.itemList[this._curTabIndex].length; i++) {
            this.group.addElement(this.itemList[this._curTabIndex][i]);
            this.itemList[this._curTabIndex][i].x = 15;
            this.itemList[this._curTabIndex][i].y = i * 50;
        }
    };
    p.goAllPlantClick = function (evt) {
        if (this._curSelect == -1) {
            console.log("当前没选任何地块");
            return;
        }
        //todo 向后台发协议，成功回调后地块重新跟新数据即可，此处单机模拟处理
        //在当前地块放置选择植物
        var posArr = [];
        var idList = [];
        if (this.otherInitData != null) {
            var allPosArr;
            if (this.otherInitData.clickIndex != null) {
                posArr = this.getCanPos(Math.floor(this.otherInitData.clickIndex / 6));
            }
            if (this.otherInitData.buyBlockIndex != null) {
                posArr = this.getCanPos(this.otherInitData.buyBlockIndex);
            }
            for (var i = 0; i < posArr.length; i++) {
                idList.push(this.itemList[this._curTabIndex][this._curSelect].info.id);
            }
            //删除种子处理======================
            var itemNum = this.itemList[this._curTabIndex][this._curSelect].info.num;
            itemNum -= posArr.length;
            this.itemList[this._curTabIndex][this._curSelect].info.num = itemNum;
            this.itemList[this._curTabIndex][this._curSelect].updateNum();
            if (itemNum == 0) {
                this.itemList[this._curTabIndex].splice(this._curSelect, 1);
                this._curSelect = -1;
                this.filterByIndex();
            }
        }
        if (posArr.length == 0) {
            console.log("当前没有地块可种!");
            return;
        }
        ModelLocator.getInstance().dispatchEvent(new LogicEvent(LogicEvent.GO_PLANT, false, false, { idList: idList, posList: posArr }));
    };
    p.goPlantClick = function (evt) {
        if (this._curSelect == -1) {
            console.log("当前没选任何地块");
            return;
        }
        //todo 向后台发协议，成功回调后地块重新跟新数据即可，此处单机模拟处理
        //在当前地块放置选择植物
        var posArr = [];
        var idList = [];
        if (this.otherInitData != null) {
            if (this.otherInitData.clickIndex != null) {
                idList.push(this.itemList[this._curTabIndex][this._curSelect].info.id);
                posArr.push(this.otherInitData.clickIndex);
            }
            if (this.otherInitData.buyBlockIndex != null) {
                var allPosArr = this.getCanPos(this.otherInitData.buyBlockIndex);
                if (allPosArr.length > 0) {
                    posArr.push(allPosArr[0]);
                }
                idList.push(this.itemList[this._curTabIndex][this._curSelect].info.id);
            }
            //删除种子处理======================
            var itemNum = this.itemList[this._curTabIndex][this._curSelect].info.num;
            itemNum -= posArr.length;
            this.itemList[this._curTabIndex][this._curSelect].info.num = itemNum;
            this.itemList[this._curTabIndex][this._curSelect].updateNum();
            if (itemNum == 0) {
                this.itemList[this._curTabIndex].splice(this._curSelect, 1);
                this._curSelect = -1;
                this.filterByIndex();
            }
        }
        if (posArr.length == 0) {
            console.log("当前没有地块可种!");
            return;
        }
        ModelLocator.getInstance().dispatchEvent(new LogicEvent(LogicEvent.GO_PLANT, false, false, { idList: idList, posList: posArr }));
    };
    //获得当前可种植位置数组
    p.getCanPos = function (blockIndex) {
        var canPosList = [];
        var startIndex = blockIndex * 6;
        for (var i = startIndex; i < startIndex + 6; i++) {
            if (ActorInfo.diTileInfo.seedList[i] == null) {
                if (canPosList.length < this.itemList[this._curTabIndex][this._curSelect].info.num) {
                    canPosList.push(i);
                }
            }
        }
        return canPosList;
    };
    p.getCanIdList = function (blockIndex) {
        var canIdList = [];
        var startIndex = blockIndex * 6;
        for (var i = startIndex; i < startIndex + 6; i++) {
            if (ActorInfo.diTileInfo.seedList[i] == null) {
                canIdList.push(i);
            }
        }
        return canIdList;
    };
    p.onItemClick = function (evt) {
        var index = this.itemList[this._curTabIndex].indexOf(evt.currentTarget);
        console.log("当前选择的植物index:" + index);
        if (this._curSelect == -1) {
            this._curSelect = index;
        }
        else if (this._curSelect != -1) {
            this.itemList[this._curTabIndex][this._curSelect].borderSelected.visible = false;
            this._curSelect = index;
        }
        this.itemList[this._curTabIndex][this._curSelect].borderSelected.visible = true;
    };
    p.onCloseBtn = function (evt) {
        this.hide();
    };
    p.setFuncDisable = function () {
        this.setItemDisable(false);
    };
    p.setItemDisable = function (val) {
        for (var i = 0; i < this.itemList.length; i++) {
            this.itemList[i].touchEnabled = this.itemList[i].touchChildren = val;
        }
    };
    p.update = function () {
        this.setFuncDisable();
        //跟新种子状态,demo临时处理
        this.filterByIndex();
        //状态重置
        //        for(var i: number = 0;i < this.itemList.length;i++) {
        //            for(var j: number = 0;j < this.itemList[i].length;j++) 
        //            {
        //                (<SeedItem>this.itemList[i][j]).borderSelected.visible = false;
        //            }
        //        }
        this.setItemDisable(true);
    };
    p.show = function (info) {
        if (info === void 0) { info = null; }
        this.beforeShow(info);
        LayerManger.uiLayer.addElement(this);
        if (this.isInit == true) {
            this.update();
        }
    };
    p.beforeShow = function (info) {
        if (info === void 0) { info = null; }
        this.otherInitData = info;
    };
    p.hide = function () {
        DisplayUtil.removeForParent(this);
        this.otherInitData = null;
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
    return SeedItemUI;
})(egret.gui.SkinnableComponent);
egret.registerClass(SeedItemUI,"SeedItemUI");
