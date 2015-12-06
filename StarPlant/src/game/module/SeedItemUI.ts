/**
 * 种植UI
 * @author 
 *
 */
class SeedItemUI extends egret.gui.SkinnableComponent{
    public tabBtn0: egret.gui.Button;
    public tabBtn1: egret.gui.Button;
    public tabBtn2: egret.gui.Button;
    public tabBtn3: egret.gui.Button;
    
    public tabSelected0: egret.gui.Button;
    public tabSelected1: egret.gui.Button;
    public tabSelected2: egret.gui.Button;
    public tabSelected3: egret.gui.Button;
    
    public group: egret.gui.Group;
    public scroller: egret.gui.Scroller;
    
    public goPlant: egret.gui.Button;//去种植
    public goAllPlant: egret.gui.Button;//一键全种
    
    public itemList: any[] = [];
    private _curSelect: number = -1;
    
    public closeBtn: egret.gui.Button;
    public isShow: boolean = false;//显示状态
    public isInit: boolean = false;//是否初始化
    
    private static _self: SeedItemUI;
    public otherInitData: any;//面板显示外部模板提供传参
    
    public static getInstance(): SeedItemUI {
        if(null == this._self) {
            this._self = new SeedItemUI;
        }
        return this._self;
    }

    public constructor() {
        super();
        this.skinName = skin.SeedItemUISkin;
    }

    private tabList: egret.gui.Button[] = [];
    private tabSelectedList: egret.gui.Button[] = [];
    public initSet(): void {
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
        
        var item: SeedItem[];
        for(var i: number = 0;i < 4;i++) 
        {
            item = [];
            this.itemList.push(item);
            //数据模拟种子todo
            var nameList: string[] = ["神器:","机甲:","神兽:","植物"];
            for(var j: number = 0;j < 10;j++) //todo 默认植物种类，这块需要实际处理
            {
                item.push(new SeedItem({ id:10000,source: "10000_5_png",num: 10,introduce: nameList[i] + "这是一颗神奇的种子"}));
            }
        }
        console.log("种子列表已经实例化");
        this.scroller.viewport = this.group;
    }
    
    public initEvent(): void 
    {        
        if(this.closeBtn != null) 
        {
            this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onCloseBtn,this);
        }
        
        for(var i: number = 0;i < this.itemList.length;i++) {
            for(var j: number = 0;j < this.itemList[i].length;j++) 
            {
                (<SeedItem>this.itemList[i][j]).addEventListener(egret.TouchEvent.TOUCH_TAP,this.onItemClick,this);
            }
        }
        
        this.goPlant.addEventListener(egret.TouchEvent.TOUCH_TAP,this.goPlantClick,this);
        this.goAllPlant.addEventListener(egret.TouchEvent.TOUCH_TAP,this.goAllPlantClick,this);
        
        for(i = 0;i < this.tabList.length;i++) 
        {
            this.tabList[i].addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTabClick,this);
        }
    }
    
    private _curTabIndex: number = 0;
    private onTabClick(evt: egret.TouchEvent): void 
    {
        var index: number = this.tabList.indexOf(evt.currentTarget);
        if(index == this._curTabIndex) 
        {
            return;
        }
        if(this._curSelect != -1) 
        {
            (<SeedItem>this.itemList[this._curTabIndex][this._curSelect]).borderSelected.visible = false;
            this._curSelect = -1;
        }
        this.tabSelectedList[this._curTabIndex].visible = false;
        this._curTabIndex = index;
        this.filterByIndex();
    }
    
    private filterByIndex(): void 
    {
        this.group.removeAllElements();
        for(var i: number = 0;i < this.tabSelectedList.length;i++) 
        {
            if(i == this._curTabIndex) 
            {
                this.tabSelectedList[i].visible = true;
            }
        }
        for(i = 0;i < this.itemList[this._curTabIndex].length;i++) {
            this.group.addElement(this.itemList[this._curTabIndex][i]);
            this.itemList[this._curTabIndex][i].x = 15;
            this.itemList[this._curTabIndex][i].y = i * 50;
        }
    }
    
    private goAllPlantClick(evt: egret.TouchEvent): void 
    {
        if(this._curSelect == -1) {
            console.log("当前没选任何地块");
            return;
        }
        //todo 向后台发协议，成功回调后地块重新跟新数据即可，此处单机模拟处理
        //在当前地块放置选择植物
        var posArr: number[] = [];
        var idList: number[] = [];
        if(this.otherInitData != null) 
        {
            var allPosArr;
            if(this.otherInitData.clickIndex != null) //点击地块打开此面板的
            {
                posArr = this.getCanPos(Math.floor(this.otherInitData.clickIndex/6));
            }
            if(this.otherInitData.buyBlockIndex != null) //通过地块购买面板打开此面板的,按次序选择一个可用地块
            {
                posArr = this.getCanPos(this.otherInitData.buyBlockIndex);
            }
            for(var i: number = 0;i < posArr.length;i++) {
                idList.push((<SeedItem>this.itemList[this._curTabIndex][this._curSelect]).info.id);
            }
            //删除种子处理======================
            var itemNum: number = this.itemList[this._curTabIndex][this._curSelect].info.num;
            itemNum -= posArr.length;
            this.itemList[this._curTabIndex][this._curSelect].info.num = itemNum;
            this.itemList[this._curTabIndex][this._curSelect].updateNum();
            if(itemNum == 0) //数量为0，删除重新布局列表
            {
                this.itemList[this._curTabIndex].splice(this._curSelect,1);
                this._curSelect = -1;
                this.filterByIndex();
            }
        }
        if(posArr.length == 0) {
            console.log("当前没有地块可种!");
            return;
        }
        ModelLocator.getInstance().dispatchEvent(new LogicEvent(LogicEvent.GO_PLANT,false,false,{ idList: idList,posList: posArr }));
    }
    
    private goPlantClick(evt: egret.TouchEvent): void 
    {
        if(this._curSelect == -1) 
        {
            console.log("当前没选任何地块");
            return;
        }
        //todo 向后台发协议，成功回调后地块重新跟新数据即可，此处单机模拟处理
        //在当前地块放置选择植物
        var posArr: number[] = [];
        var idList: number[] = [];
        if(this.otherInitData != null) 
        {
            if(this.otherInitData.clickIndex != null) //点击地块打开此面板的
            {
                idList.push((<SeedItem>this.itemList[this._curTabIndex][this._curSelect]).info.id);
                posArr.push(this.otherInitData.clickIndex);
            }
            if(this.otherInitData.buyBlockIndex != null) //通过地块购买面板打开此面板的,按次序选择一个可用地块
            {
                var allPosArr = this.getCanPos(this.otherInitData.buyBlockIndex);
                if(allPosArr.length > 0) 
                {
                    posArr.push(allPosArr[0]);
                }
                idList.push((<SeedItem>this.itemList[this._curTabIndex][this._curSelect]).info.id);
            }
            
            //删除种子处理======================
            var itemNum: number = this.itemList[this._curTabIndex][this._curSelect].info.num;
            itemNum -= posArr.length;
            this.itemList[this._curTabIndex][this._curSelect].info.num = itemNum;
            this.itemList[this._curTabIndex][this._curSelect].updateNum();
            if(itemNum == 0) //数量为0，删除重新布局列表
            {
                this.itemList[this._curTabIndex].splice(this._curSelect,1);
                this._curSelect = -1;
                this.filterByIndex();
            }
        } 
        if(posArr.length == 0) 
        {
            console.log("当前没有地块可种!");
            return;
        }
        ModelLocator.getInstance().dispatchEvent(new LogicEvent(LogicEvent.GO_PLANT,false,false,{ idList: idList,posList: posArr}));
    }
    
    //获得当前可种植位置数组
    private getCanPos(blockIndex:number): any
    {
        var canPosList: number[] = [];
        var startIndex: number = blockIndex * 6;
        for(var i: number = startIndex;i < startIndex + 6;i++) {
            if(ActorInfo.diTileInfo.seedList[i] == null) {
                if(canPosList.length < (<SeedItem>this.itemList[this._curTabIndex][this._curSelect]).info.num) 
                {
                    canPosList.push(i);
                }
            }
        }
        return canPosList;
    }
    
    private getCanIdList(blockIndex: number): any {
        var canIdList: number[] = [];
        var startIndex: number = blockIndex * 6;
        for(var i: number = startIndex;i < startIndex + 6;i++) {
            if(ActorInfo.diTileInfo.seedList[i] == null) {
                canIdList.push(i);
            }
        }
        return canIdList;
    }
    
    private onItemClick(evt: egret.TouchEvent): void 
    {
        var index: number = this.itemList[this._curTabIndex].indexOf(evt.currentTarget);
        console.log("当前选择的植物index:" + index);
        if(this._curSelect == -1) 
        {
            this._curSelect = index;
        }
        else if(this._curSelect != -1) 
        {
            (<SeedItem>this.itemList[this._curTabIndex][this._curSelect]).borderSelected.visible = false;
            this._curSelect = index;
        }
        (<SeedItem>this.itemList[this._curTabIndex][this._curSelect]).borderSelected.visible = true;
    }
    
    private onCloseBtn(evt: egret.TouchEvent): void 
    {
        this.hide();
    }

    public setFuncDisable(): void {
        this.setItemDisable(false);
    }
    
    private setItemDisable(val: boolean): void 
    {
        for(var i: number = 0;i < this.itemList.length;i++) {
            (<SeedItem>this.itemList[i]).touchEnabled = (<SeedItem>this.itemList[i]).touchChildren = val;
        }
    }

    public update(): void {
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
    }
    
    public show(info:any = null): void {
        this.beforeShow(info);
        LayerManger.uiLayer.addElement(this);
        if(this.isInit == true) 
        {
            this.update();
        }
    }
    
    private beforeShow(info:any = null): void
    {
        this.otherInitData = info;
    }

    public hide(): void {
        DisplayUtil.removeForParent(this);
        this.otherInitData = null;
    }

    public childrenCreated() {
        this.initSet();
        this.initEvent();
        if(this.isInit == false) 
        {
            this.update();
            this.isInit = true;
        }
    }

    public partAdded(partName: string,instance: any): void {
        super.partAdded(partName,instance);
    }
}
