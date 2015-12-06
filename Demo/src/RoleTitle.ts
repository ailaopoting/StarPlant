/**
 *
 * 角色标题类
 *
 */
class RoleTitle extends egret.Sprite{
    private txtHP:egret.TextField;
    private txtName:egret.TextField;
	public constructor() {
        super();
        this.createView();
	}
    
    
    private createView():void {
        this.txtHP = new egret.TextField();
        this.addChild(this.txtHP);
        this.txtHP.x = 0;
        this.txtHP.y = 0;
        this.txtHP.width = 80;
        this.txtHP.height = 22;
        this.txtHP.size = 18;
        this.txtHP.textAlign = "center";
        this.txtHP.text = "HP:250";
        
        this.txtName = new egret.TextField();
        this.addChild(this.txtName);
        this.txtName.width = 80;
        this.txtName.height = 22;
        this.txtName.x = (this.txtHP.width - this.txtName.width) / 2;
        this.txtName.y = this.txtHP.height;
        this.txtName.size = 18;
        this.txtName.textAlign = "center";
        this.txtName.text = "呵呵";
        //console.log("调试输出：标题");
    }
    
    public setHP(hp:number):void {
        this.txtHP.text = "HP:" + hp;
    }
    public setName(name:string):void {
        this.txtName.text = name;
    }
}
