/**
 * 帮助说明面板
 * @author 
 *
 */
class HelpUI extends egret.gui.SkinnableComponent {
    public okBtn: egret.gui.Button;
    public introduce: egret.gui.Label;
    private static _self: HelpUI;

    public static getInstance(): HelpUI {
        if(null == this._self) {
            this._self = new HelpUI;
        }
        return this._self;
    }

    public constructor() {
        super();
        this.skinName = skin.HelpUISkin;
    }

    private initSet(): void {
       
        this.introduce.text = "1.点击收获单个果实，滑动可收获全部\n2.小心墙外生物，进入基地要及时消灭\n3.能量站可加速成长，\n 还能触发趣味事件，奖励多多\n4.完成所有成就可获得一枚[绝世神种]\n据说了解它的人不超过3个\n5.独特的战斗系统,可根据自己的偏好,优先选择种植类型\n6.提升基地等级,\n 获得收益加成,挑战高级BOSS";
        this.okBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onOkBtn,this); 
    }
    
    private onOkBtn(evt: egret.TouchEvent): void 
    {
        DisplayUtil.removeForParent(this);
        
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
        this.initSet();
    }

    public partAdded(partName: string,instance: any): void {
        super.partAdded(partName,instance);
    }
}

