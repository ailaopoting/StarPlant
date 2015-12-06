/**
 * 购买地块面板
 * @author 
 *
 */
class BuyDiUI extends egret.gui.SkinnableComponent {
    
    private static _self: BuyDiUI;
    
    public isInit: boolean = false;
    public closeBtn: egret.gui.Button;
    
    public goDi: egret.gui.Button;//前往
    public goPlant: egret.gui.Button;//一键种植
    public goGet: egret.gui.Button;//一键收获
    public addDiBtn: egret.gui.Button;//买地按钮
    
    
    public group: egret.gui.Group;
    public scroller: egret.gui.Scroller;
    
    private COLUMN: number = 5;//列数
    
    public static getInstance(): BuyDiUI {
        if(null == this._self) {
            this._self = new BuyDiUI;
        }
        return this._self;
    }

    public constructor() {
        super();
        this.skinName = skin.BuyDiSkin;
    }

    public initSet(): void {
        this.scroller.viewport = this.group;
        this.addDiBtn.visible = false;
        this.group.addElement(this.addDiBtn);
    }

    public initEvent(): void {
        this.addDiBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onAddDiBtn,this);
        this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onCloseBtn,this);
        this.goDi.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onGoDi,this);
        this.goPlant.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onGoPlant,this);
        this.goGet.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onGoGet,this);//一键收获
        ModelLocator.getInstance().addEventListener(LogicEvent.SELECT_DI_BLOCK,this.onBlockSelected,this);
    }
    
    private onGoDi(evt: egret.TouchEvent): void 
    {
        this.hide();
        ModelLocator.getInstance().dispatchEvent(new LogicEvent(LogicEvent.GO_SELECT_DI,false,false,this._curSelectBlock + 1));
    }
    
    private onGoPlant(evt: egret.TouchEvent): void 
    {
        this.hide();
        if(this._curSelectBlock == -1) 
        {
            console.log("当前还未选择地块,不可一键种植!");
            return;
        }
        ModelLocator.getInstance().dispatchEvent(new LogicEvent(LogicEvent.GO_SELECT_DI,false,false,this._curSelectBlock + 1));
        SeedItemUI.getInstance().show({ buyBlockIndex: this._curSelectBlock});
    }
    
    private onGoGet(evt: egret.TouchEvent): void 
    {
        var startIndex: number = this._curSelectBlock * 6;
        for(var i: number = startIndex;i < (startIndex + 6);i++) 
        {
            if(ActorInfo.diTileInfo.seedList[i]) 
            {
                ActorInfo.diTileInfo.seedList[i].dispacheGeterHandle();
            }
        }
        //后台全部收获，是否需要侦听抛事件回来再跟新呢?todo，临时就延时跟新吧
        egret.setTimeout(() => 
            { 
                this.update();
            },this,2000);
    }
    
    private _curSelectBlock: number = -1;//当前选中地块
    private onBlockSelected(evt: LogicEvent): void 
    {
        var index: number = this._blockList.indexOf(evt.data);
        if(index == this._curSelectBlock) 
        {
            return;
        }
        if(this._curSelectBlock > -1) 
        {
            this._blockList[this._curSelectBlock].setSelectState(false);
        }
        this._curSelectBlock = index;
        this._blockList[this._curSelectBlock].setSelectState(true);
    }

    private onAddDiBtn(evt: egret.TouchEvent): void 
    {
        var alert: egret.gui.Alert = egret.gui.Alert.show("你确定花费2能量购买地块吗?","购买",this.selectHandle,"确定","取消");
        alert.skinName = skin.simple.AlertSkin;
    }
    
    private selectHandle(evt: egret.gui.CloseEvent): void 
    {
        if(evt.detail == egret.gui.Alert.FIRST_BUTTON) {
            if(ActorInfo.miMoney >= 2) {
                console.log("开启地块");
                ActorInfo.miMoney -= 2;
                ToolBarUI.getInstance().userUI.update();
                ActorInfo.diTileInfo.openNum += 1;
                ModelLocator.getInstance().dispatchEvent(new LogicEvent(LogicEvent.BUY_DI,false,false,this));
                BuyDiUI.getInstance().update();
            } else 
            {
                var alert: egret.gui.Alert = egret.gui.Alert.show("所需能量不足，购买失败","提示",null,"确定");
                alert.skinName = skin.simple.AlertSkin;
            }
        }else 
        {
            console.log("取消开启地块");
            egret.gui.Alert
        }
    }
    
    private onCloseBtn(evt: egret.TouchEvent): void {
        this.hide();
    }

    public setFuncDisable(): void {
       
    }

   
    private _blockList: BuyDiBlock[] = [];
    public update(): void {
        this.setFuncDisable();
        //拉取数据处理todo
        for(var j: number = 0;j < this._blockList.length;j++) 
        {
            this._blockList[j].dispose();
        }
        this._blockList = [];
        var row: number = Math.ceil(ActorInfo.diTileInfo.openNum / this.COLUMN);
        var buyItem: BuyDiBlock;
        for(var i: number = 0;i < (ActorInfo.diTileInfo.openNum + 1);i++) 
        {
            if(i != ActorInfo.diTileInfo.openNum) {
                buyItem = new BuyDiBlock({id:(i+1)});
                this.group.addElement(buyItem);
                buyItem.x = (i % this.COLUMN) * 50 + 8;
                buyItem.y = Math.floor(i / this.COLUMN)*56;
                this._blockList.push(buyItem);
            } else 
            {
                this.addDiBtn.visible = true;
                this.addDiBtn.x = (i % this.COLUMN) * 50 + 8;
                this.addDiBtn.y = Math.floor(i / this.COLUMN) * 56;
            }
        }
    }

    public show(): void {
        LayerManger.uiLayer.addElement(this);
        if(this.isInit == true) {
            this.update();
        }
    }

    public hide(): void {
        DisplayUtil.removeForParent(this);
    }

    public childrenCreated() {
        this.initSet();
        this.initEvent();
        if(this.isInit == false) {
            this.update();
            this.isInit = true;
        }
    }
    
    public partAdded(partName: string,instance: any): void {
        super.partAdded(partName,instance);
    }
}

