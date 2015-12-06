/**
 * UI模板
 * @author 
 *
 */
class UiRule extends egret.gui.SkinnableComponent {

    private static _self: UiRule;

    public isInit: boolean;
    
   
    public static getInstance(): UiRule {
        if(null == this._self) {
            this._self = new UiRule;
        }
        return this._self;
    }

    public constructor() {
        super();
//        this.skinName = skin.BuyDiSkin;
    }

    public initSet(): void {

    }

    public initEvent(): void {

    }

    private onCloseBtn(evt: egret.TouchEvent): void {
        this.hide();
    }

    public setFuncDisable(): void {

    }


    public update(): void {
        this.setFuncDisable();
        //拉取数据处理
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



