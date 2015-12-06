/**
*  GUI 组件示例
*  逻辑类:    src/scene/Showcase.ts
*  皮肤:      src/skins/scene/ShowcaseSkin.exml
*/
var StateGameUI = (function (_super) {
    __extends(StateGameUI, _super);
    function StateGameUI() {
        _super.call(this);
        this.npc_bg_1 = new egret.gui.UIAsset();
        this.npc_bg_2 = new egret.gui.UIAsset();
        this.shut_1 = new egret.gui.UIAsset();
        this.dialogue_1 = new egret.gui.Label();
        //  指定当前类的皮肤名称
        //  Assign the skin name used by this Component
        this.skinName = "skins.scene.StateGameSkin";
    }
    var d = __define,c=StateGameUI;p=c.prototype;
    //public bg_1_H: number = 0;   
    /**
    所有子项和皮肤中的组件都已经创建完毕并完成测量，可以使用
    */
    p.childrenCreated = function () {
        ConstantA.stageW = this.width;
        ConstantA.stageH = this.height;
        //this.bg_1_H = this.bg_1.height;
        this.npc_bg_1.width = ConstantA.stageW;
        this.npc_bg_1.height = 180;
        this.npc_bg_1.x = 0;
        this.npc_bg_1.y = this.bg_1.y - this.npc_bg_1.height;
        this.npc_bg_2.width = 160;
        this.npc_bg_2.height = 220;
        this.npc_bg_2.x = 0;
        this.npc_bg_2.y = this.bg_1.y - this.npc_bg_2.height;
        this.shut_1.width = 31;
        this.shut_1.height = 23;
        this.shut_1.x = this.npc_bg_1.width - this.shut_1.width - 10;
        this.shut_1.y = this.npc_bg_1.y + 5;
        this.dialogue_1.width = this.npc_bg_1.width - this.npc_bg_2.width - this.shut_1.width - 10;
        this.dialogue_1.height = this.npc_bg_1.height - this.shut_1.height - 20;
        this.dialogue_1.size = 22;
        this.dialogue_1.text = "";
        this.dialogue_1.x = this.npc_bg_2.width + 5;
        this.dialogue_1.y = this.npc_bg_1.y + this.shut_1.height;
    };
    /**
    partAdded 是皮肤部件赋值到逻辑类的入口，你可以在这里进行
    必要的初始化操作。比如需要随屏幕改变组件的尺寸，写在这里
    可以避免写在 childrenCreated 中修改造成的多次测量。
    */
    p.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this.npc_bg_1) {
        }
    };
    return StateGameUI;
})(egret.gui.SkinnableComponent);
egret.registerClass(StateGameUI,"StateGameUI");
