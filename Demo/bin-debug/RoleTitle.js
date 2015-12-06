/**
 *
 * 角色标题类
 *
 */
var RoleTitle = (function (_super) {
    __extends(RoleTitle, _super);
    function RoleTitle() {
        _super.call(this);
        this.createView();
    }
    var d = __define,c=RoleTitle;p=c.prototype;
    p.createView = function () {
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
    };
    p.setHP = function (hp) {
        this.txtHP.text = "HP:" + hp;
    };
    p.setName = function (name) {
        this.txtName.text = name;
    };
    return RoleTitle;
})(egret.Sprite);
egret.registerClass(RoleTitle,"RoleTitle");
