/**
 * 主界面功能显示
 * @author 
 *
 */
class ToolBarUI extends egret.gui.SkinnableComponent
{
    public giftBtn: egret.gui.Button;
    public setBtn: egret.gui.Button;
    public goPkBtn: egret.gui.Button;
    public addSpeedBtn: egret.gui.Button;
    public goDoorBtn: egret.gui.Button;
    public shopBtn: egret.gui.Button;
    public preDiBtn: egret.gui.Button;
    public nextDiBtn: egret.gui.Button;
    public rankBtn: egret.gui.Button;
    public helpBtn: egret.gui.Button;
    public userUI: UserUI;
    public moneyUI: MoneyUI;
    public pargeBar: PageBar;
    public eventTip: egret.gui.Button;//随机事件标志按钮
    public buyDi: egret.gui.Button;//买地
    
    private _pageBarTotal: number;
    
    private static _self: ToolBarUI;
    public isShow: boolean = false;//显示状态
    public isInit: boolean = false;//是否初始化
    
    public static getInstance(): ToolBarUI {
        if(null == this._self) {
            this._self = new ToolBarUI;
        }
        return this._self;
    }
    
    public constructor() {
        super();
        this.skinName = skin.ToolBarSkin;
    }
    
    private initSet(): void 
    {
        this.pargeBar = new PageBar(this.preDiBtn,this.nextDiBtn,this._pageBarTotal);
        
        this.userUI = new UserUI;
        this.userUI.x = 2;
        this.userUI.y = 0;
        LayerManger.uiLayer.addElement(this.userUI);
        
        this.moneyUI = new MoneyUI;
        this.moneyUI.x = 140;
        this.moneyUI.y = 0;
        LayerManger.uiLayer.addElement(this.moneyUI);
        
        this.eventTip.visible = false;
        this.eventRandomHandle();
    }
    
    public setPageBarTotal(val: number): void 
    {
        this._pageBarTotal = val;
    }
    
    //随机事件处理
    private eventRandomHandle(): void 
    {
        
    }
    
    private initEvent(): void 
    {
        console.log("添加事件了==================");
        this.shopBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onShopBtn,this);
        this.addSpeedBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onAddSpeed,this);
        this.helpBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onHelp,this);
        this.setBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onSet,this);
        this.buyDi.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBuyDi,this);
    }
    
    private onAddSpeed(evt: egret.TouchEvent): void 
    {
        ModelLocator.getInstance().dispatchEvent(new LogicEvent(LogicEvent.CLICK_NORMAL_ADD_SPEED,false,false));
    }
    
    private onHelp(evt: egret.TouchEvent): void 
    {
        HelpUI.getInstance().show();
    }
    
    private onSet(evt: egret.TouchEvent): void {
        SetUI.getInstance().show();
    }
    
    private onBuyDi(evt: egret.TouchEvent): void {
        BuyDiUI.getInstance().show();
    }
    
    private onShopBtn(evt: egret.TouchEvent): void 
    {
        
    }
    
    public setFuncDisable(): void 
    {
        
    }
    
    public update(): void 
    {
        this.setFuncDisable();
        
    }
    
    public show(): void 
    {
        LayerManger.uiLayer.addElement(this);
        if(this.isInit == true) {
            this.update();
        }
    }

    public hide(): void 
    {
        DisplayUtil.removeForParent(this);
    }
    
    public dispose(): void 
    {
        
    }
    
    /**
     所有子项和皮肤中的组件都已经创建完毕并完成测量，可以使用
     */
    public childrenCreated() {
        this.initSet();
        this.initEvent();
        ModelLocator.getInstance().dispatchEvent(new LogicEvent(LogicEvent.RES_ALL_COMPLETE,false,false,this));
        if(this.isInit == false) {
            this.update();
            this.isInit = true;
        }
    }

    /**
     partAdded 是皮肤部件赋值到逻辑类的入口，你可以在这里进行
     必要的初始化操作。比如需要随屏幕改变组件的尺寸，写在这里
     可以避免写在 childrenCreated 中修改造成的多次测量。
     */
    public partAdded(partName: string,instance: any): void {
        super.partAdded(partName,instance);
//        if(instance == this.btn1) {
//            
//        }
    }
}
