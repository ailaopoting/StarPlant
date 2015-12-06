/**
*  GUI 组件示例
*  逻辑类:    src/scene/Showcase.ts
*  皮肤:      src/skins/scene/ShowcaseSkin.exml
*/
class StateGameUI extends egret.gui.SkinnableComponent {
    
    public constructor() {
        super();
        
        //  指定当前类的皮肤名称
        //  Assign the skin name used by this Component
        this.skinName = "skins.scene.StateGameSkin";
    }
    
    
    /*
    在皮肤中（skins/scene/ShowcaseSkin.exml），如果组件有 id 属性，
    那么皮肤中的这个组件会被赋值给逻辑类（Showcase）中与这个 id 同名
    的属性（皮肤部件）。
    由于皮肤绑定的过程是延迟处理的，在构造函数并不能访问这些属性。
    你可以在 "childrenCreated" 方法中使用这些组件。
    */
    
    public btn1:egret.gui.Button;
    public btn2:egret.gui.Button;
    public btn3:egret.gui.Button;
    public btn4:egret.gui.Button;
    public bg_1: egret.gui.UIAsset;
    
    public npc_bg_1: egret.gui.UIAsset = new egret.gui.UIAsset();
    public npc_bg_2: egret.gui.UIAsset= new egret.gui.UIAsset();
    public shut_1: egret.gui.UIAsset= new egret.gui.UIAsset();
    public dialogue_1: egret.gui.Label= new egret.gui.Label();
    
    //public bg_1_H: number = 0;   
    
    
    /**
    所有子项和皮肤中的组件都已经创建完毕并完成测量，可以使用
    */
    public childrenCreated() {
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
        
        
    }
    
    /**
    partAdded 是皮肤部件赋值到逻辑类的入口，你可以在这里进行
    必要的初始化操作。比如需要随屏幕改变组件的尺寸，写在这里
    可以避免写在 childrenCreated 中修改造成的多次测量。
    */
    public partAdded(partName:string, instance:any):void {
        super.partAdded(partName, instance);
        if (instance == this.npc_bg_1) {
                   //     
            
            }
        
    }
        
}