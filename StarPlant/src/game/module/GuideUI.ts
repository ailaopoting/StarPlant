/**
 * 引导面板
 * @author 
 *
 */
class GuideUI extends egret.gui.SkinnableComponent {   
    public selectBtn0: egret.gui.Button;
    public selectBtn1: egret.gui.Button;
    
    private static _self: GuideUI;

    public static getInstance(): GuideUI {
        if(null == this._self) {
            this._self = new GuideUI;
        }
        return this._self;
    }

    public constructor() {
        super();
        this.skinName = skin.GuideUISkin;
        this.initSet();
    }

    private initSet(): void {
//        LayerManger.moduleLayer.touchEnabled = LayerManger.moduleLayer.touchChildren = true; 
        this.touchEnabled = this.touchChildren = true;
    }

    private initEvent(): void {
        this.selectBtn0.touchChildren = this.selectBtn1.touchChildren = true;
        this.selectBtn0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTap0,this);
        this.selectBtn1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTap1,this);
    }
    
    private onTap0(evt: egret.TouchEvent): void 
    {
        console.log("你选择了A!");
        ActorInfo.allCoinMoney += 100;
        ActorInfo.curCoinMoney += 100;
        ToolBarUI.getInstance().moneyUI.update();
        this.hide();
    }

    private onTap1(evt: egret.TouchEvent): void {
        console.log("你选择了B!");
        ActorInfo.allCoinMoney += 100;
        ActorInfo.curCoinMoney += 50;
        ToolBarUI.getInstance().moneyUI.update();
        this.hide();
    }

    public setFuncDisable(): void {

    }

    public update(): void {
        this.setFuncDisable();

    }

    public show(): void {
        this.update();
        LayerManger.uiLayer.addElement(this);
    }

    public hide(): void {
        DisplayUtil.removeForParent(this);
    }

    public dispose(): void {

    }

    public childrenCreated() {
        this.initEvent();
    }

    public partAdded(partName: string,instance: any): void {
        super.partAdded(partName,instance);
    }
}


//模块面板模板==================================================
//class GuideUI extends egret.gui.SkinnableComponent {   
    //    private static _self: ToolBarUI;
    //    
    //    public static getInstance(): ToolBarUI {
    //        if(null == this._self) {
    //            this._self = new ToolBarUI;
    //        }
    //        return this._self;
    //    }
    //    
    //    public constructor() {
    //        super();
    //        this.skinName = skin.ToolBarSkin;
    //        
    //        this.initSet();
    //        this.initEvent();
    //    }
    //    
    //    private initSet(): void 
    //    {
    //        
    //    }
    //    
    //    private initEvent(): void 
    //    {
    //        
    //    }
    //    
    //    public setFuncDisable(): void 
    //    {
    //        
    //    }
    //    
    //    public update(): void 
    //    {
    //        this.setFuncDisable();
    //        
    //    }
    //    
    //    public show(): void 
    //    {
    //        this.update();
    //        LayerManger.uiLayer.addChild(this);
    //    }
    //
    //    public hide(): void 
    //    {
    //        DisplayUtil.removeForParent(this);
    //    }
    //    
    //    public dispose(): void 
    //    {
    //        
    //    }
    //    
    //    public childrenCreated() {
    //                     
    //    }
    //
    //    public partAdded(partName: string,instance: any): void {
    //        super.partAdded(partName,instance);
    //    }
//}