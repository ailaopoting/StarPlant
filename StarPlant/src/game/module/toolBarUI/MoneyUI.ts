/**
 * 财富处理
 * @author 
 *
 */
class MoneyUI extends egret.gui.SkinnableComponent {
    public moneyState: egret.gui.Label;
    public moneyVal: egret.gui.Label;
    public allMoney: egret.gui.Button;
    public curMoney: egret.gui.Button;
    
    private _state: number = 0;//0.当前  1.总

    public constructor() {
        super();
        this.skinName = skin.components.MoneyUISkin;
    }

    public initSet(): void {
        this.allMoney.addEventListener(egret.TouchEvent.TOUCH_TAP,this.allMoneyClick,this);
        this.curMoney.addEventListener(egret.TouchEvent.TOUCH_TAP,this.curMoneyClick,this);
    }
    
    private allMoneyClick(evt: egret.TouchEvent): void 
    {
        this._state = 0;
        this.stateHandle();
    }
    
    private curMoneyClick(evt: egret.TouchEvent): void {
        this._state = 1;
        this.stateHandle();
    }
    
    private stateHandle(): void 
    {
        if(this._state == 0) {
            this.curMoney.visible = true;
            this.allMoney.visible = false;
            this.moneyState.text = "当前";
            this.moneyVal.text = ActorInfo.curCoinMoney + "";
        } else 
        {
            this.curMoney.visible = false;
            this.allMoney.visible = true;
            this.moneyState.text = "总财";
            this.moneyVal.text = ActorInfo.allCoinMoney + "";
        }
    }

    public setFuncDisable(): void {

    }

    public update(): void {
        this.setFuncDisable();
        //拉取信息
        this.stateHandle();
    }

    public dispose(): void {

    }

    public childrenCreated() {
        this.initSet();
        this.update();
    }

    public partAdded(partName: string,instance: any): void {
        super.partAdded(partName,instance);
    }
}

