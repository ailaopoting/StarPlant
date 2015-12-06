/**
 * 用户信息处理
 * @author 
 *
 */
class UserUI extends egret.gui.SkinnableComponent{
    
    public userName: egret.gui.Label;
    public userIconRes: egret.gui.UIAsset;
    public miVal: egret.gui.Label;
    
	public constructor() {
        super();
        this.skinName = skin.components.UserUISkin;
	}
	
    public initSet(): void {
        
    }

    public setFuncDisable(): void {

    }

    public update(): void {
        this.setFuncDisable();
        //拉取用户姓名、性别、等信息
        this.userName.text =  ActorInfo.userName;
        //this.setChildIndex(this.userIcon,0);//放入框底层，正式开启todo
        this.userIconRes.source = "10000_1_png";
        this.miVal.text = ActorInfo.miMoney + "";
//        RES.getResAsync("10000_1_png",this.onIconLoaded,this);
    }
    
    private onIconLoaded(res: any): void 
    {
        
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
