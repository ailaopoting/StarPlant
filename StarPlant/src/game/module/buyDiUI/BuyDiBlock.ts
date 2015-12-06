/**
 * 地块购买单位
 * @author 
 *
 */
class BuyDiBlock extends egret.gui.SkinnableComponent {
    public unSelect: egret.gui.UIAsset;
    public select: egret.gui.UIAsset;
    public canGetMark: egret.gui.UIAsset;
    public num: egret.gui.Label;
    public fullMark: egret.gui.UIAsset;
    

    public info: any;
    public isInit: boolean = false;//资源是否初始化

    public constructor(varInfo: any) {
        super();
        this.skinName = skin.components.BuyDiBlockSkin;
        this.info = varInfo;
    }

    public initSet(): void {
        this.setSelectState(false);
        
        this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this);
    }

    private onClick(evt: egret.TouchEvent): void 
    {
        this.setSelectState(true);
        ModelLocator.getInstance().dispatchEvent(new LogicEvent(LogicEvent.SELECT_DI_BLOCK,false,false,this));
    }
    
    public setFuncDisable(): void {

    }
    
    public setSelectState(val: boolean): void 
    {
        if(val) {
            this.unSelect.visible = false;
            this.select.visible = true;
        } else 
        {
            this.unSelect.visible = true;
            this.select.visible = false;
        }
    }

    public setData(varInfo: any): void 
    {
        this.info = varInfo;
        this.update();
    }
    
    public update(): void {
        this.setFuncDisable();
        this.num.text = this.info.id + "";
        
        var index: number = this.info.id - 1;
        var startIndex: number = index * 6;
        var isFull: boolean = true; //当前地块是否植物已种满处理
        var canGet: boolean = false;//当前地块是否有可收获处理
        for(var i: number = startIndex;i < startIndex+6;i++) 
        {
            if(ActorInfo.diTileInfo.seedList[i] == null) 
            {
                isFull = false;
            }
            if(ActorInfo.diTileInfo.seedList[i]) 
            {
                if(ActorInfo.diTileInfo.seedList[i].canGet()) 
                {
                    canGet = true;
                }
            }
        }
        this.fullMark.visible = isFull;
        this.canGetMark.visible = canGet;
    }

    public dispose(): void {
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this);
        DisplayUtil.removeForParent(this);
    }

    public childrenCreated() {
        this.initSet();
        this.isInit = true;
        this.update();
    }

    public partAdded(partName: string,instance: any): void {
        super.partAdded(partName,instance);
    }
}

