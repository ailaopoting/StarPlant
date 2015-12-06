/**
 * 地块元素处理
 * @author 
 *
 */
class DiTileListUI extends egret.gui.SkinnableComponent {   
    public diTileList: egret.gui.Button[] = [];
    public diTile0: egret.gui.Button;
    public diTile1: egret.gui.Button;
    public diTile2: egret.gui.Button;
    public diTile3: egret.gui.Button;
    public diTile4: egret.gui.Button;
    public diTile5: egret.gui.Button;
    
//    private _callBack: Function;

    public constructor() {
        super();
        this.skinName = skin.DiListSkin;
        
//        this._callBack = callBack;
//        this.initSet();
    }

    public initSet(): void {
        this.diTileList.push(this.diTile0);
        this.diTileList.push(this.diTile1);
        this.diTileList.push(this.diTile2);
        this.diTileList.push(this.diTile3);
        this.diTileList.push(this.diTile4);
        this.diTileList.push(this.diTile5);
    }

    public setFuncDisable(): void {

    }

    public update(): void {
        this.setFuncDisable();

    }

    public dispose(): void {
       
    }

    public childrenCreated() {
//        if(this._callBack != null) 
//        {
//            this._callBack();
//        }
        ModelLocator.getInstance().dispatchEvent(new LogicEvent(LogicEvent.RES_ALL_COMPLETE,false,false,this));
    }

    public partAdded(partName: string,instance: any): void {
        super.partAdded(partName,instance);
    }
}
