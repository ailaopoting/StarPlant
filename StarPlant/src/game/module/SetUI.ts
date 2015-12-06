/**
 * 设置面板
 * @author 
 *
 */
class SetUI extends egret.gui.SkinnableContainer {
    public okBtn: egret.gui.Button;
    public select0: egret.gui.RadioButton;
    public select1: egret.gui.RadioButton;
    private static _self: SetUI;
    
    private _state: number = 0;//0播放  1静音

    public static getInstance(): SetUI {
        if(null == this._self) {
            this._self = new SetUI;
        }
        return this._self;
    }

    public constructor() {
        super();
        this.skinName = skin.SetUISkin;
    }

    private initSet(): void {
        this.okBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onOkBtn,this);
        this.select0.visible = this.select1.visible = true;
        this.select0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onSelect0,this);
        this.select1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onSelect1,this);
    }

    private onSelect0(evt: egret.TouchEvent): void 
    {
        this.select0.selected = true;
        this.select1.selected = false;
        this._state = 0;
        //播放音乐
        SoundManager.getInstance().curChanel = SoundManager.getInstance().curSound.play(0,0);
    }
    
    private onSelect1(evt: egret.TouchEvent): void 
    {
        this.select0.selected = false;
        this.select1.selected = true;
        this._state = 1;
        //停止音乐
        SoundManager.getInstance().curChanel.stop();
    }
    
    private onOkBtn(evt: egret.TouchEvent): void {
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
        var rdb: egret.gui.RadioButton = new egret.gui.RadioButton();
        rdb.label = "选择我1";
        rdb.value = 1;
        this.addElement(rdb);
    }

    public partAdded(partName: string,instance: any): void {
        super.partAdded(partName,instance);
    }
}

