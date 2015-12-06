/**
 * 引导面板
 * @author
 *
 */
var GuideUI = (function (_super) {
    __extends(GuideUI, _super);
    function GuideUI() {
        _super.call(this);
        this.skinName = skin.GuideUISkin;
        this.initSet();
    }
    var d = __define,c=GuideUI;p=c.prototype;
    GuideUI.getInstance = function () {
        if (null == this._self) {
            this._self = new GuideUI;
        }
        return this._self;
    };
    p.initSet = function () {
        //        LayerManger.moduleLayer.touchEnabled = LayerManger.moduleLayer.touchChildren = true; 
        this.touchEnabled = this.touchChildren = true;
    };
    p.initEvent = function () {
        this.selectBtn0.touchChildren = this.selectBtn1.touchChildren = true;
        this.selectBtn0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap0, this);
        this.selectBtn1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap1, this);
    };
    p.onTap0 = function (evt) {
        console.log("你选择了A!");
        ActorInfo.allCoinMoney += 100;
        ActorInfo.curCoinMoney += 100;
        ToolBarUI.getInstance().moneyUI.update();
        this.hide();
    };
    p.onTap1 = function (evt) {
        console.log("你选择了B!");
        ActorInfo.allCoinMoney += 100;
        ActorInfo.curCoinMoney += 50;
        ToolBarUI.getInstance().moneyUI.update();
        this.hide();
    };
    p.setFuncDisable = function () {
    };
    p.update = function () {
        this.setFuncDisable();
    };
    p.show = function () {
        this.update();
        LayerManger.uiLayer.addElement(this);
    };
    p.hide = function () {
        DisplayUtil.removeForParent(this);
    };
    p.dispose = function () {
    };
    p.childrenCreated = function () {
        this.initEvent();
    };
    p.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    return GuideUI;
})(egret.gui.SkinnableComponent);
egret.registerClass(GuideUI,"GuideUI");
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
