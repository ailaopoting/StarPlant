/**
 *  GUI 组件示例
 *  逻辑类:    src/scene/Showcase.ts
 *  皮肤:      src/skins/scene/ShowcaseSkin.exml
 */
class IntroGameUI extends egret.gui.SkinnableComponent {

    public constructor() {
        super();

        //  指定当前类的皮肤名称
        //  Assign the skin name used by this Component
        this.skinName = "skins.scene.IntroGameSkin";
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
    public input1: egret.gui.TextInput;
    public input2: egret.gui.TextInput;
    public label1: egret.gui.Label;


    /**
     所有子项和皮肤中的组件都已经创建完毕并完成测量，可以使用
     */
    public childrenCreated() {
        //
        //                
        }

    /**
     partAdded 是皮肤部件赋值到逻辑类的入口，你可以在这里进行
     必要的初始化操作。比如需要随屏幕改变组件的尺寸，写在这里
     可以避免写在 childrenCreated 中修改造成的多次测量。
     */
    public partAdded(partName:string, instance:any):void {
        super.partAdded(partName, instance);
        if (instance == this.btn1) {
            //
        }
    }
    
}