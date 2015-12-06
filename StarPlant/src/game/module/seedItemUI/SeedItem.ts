/**
 * 种子项
 * @author 
 *
 */
class SeedItem extends egret.gui.SkinnableComponent{
    public borderSelected: egret.gui.UIAsset;
    public seedIcon: egret.gui.UIAsset;
    public num: egret.gui.Label;
    public seedInfo: egret.gui.Label;
    
    public info: any;
    
	public constructor(varInfo:any) {
        super();
        this.skinName = skin.components.SeedItemSkin;
        this.info = varInfo;
	}
	
    public initSet(): void {
    }

    public setFuncDisable(): void {

    }

    public update(): void {
        this.setFuncDisable();

    }

    public dispose(): void {

    }

    public childrenCreated() {
      this.borderSelected.visible = false;
      
      this.seedIcon.source = this.info.source;
      this.num.text = "x" + this.info.num;
      this.seedInfo.text = this.info.introduce;
    }
    
    public updateNum(): void 
    {
        this.num.text = "x" + this.info.num;
    }

    public partAdded(partName: string,instance: any): void {
        super.partAdded(partName,instance);
    }
}
