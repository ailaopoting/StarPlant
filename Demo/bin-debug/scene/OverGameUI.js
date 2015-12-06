/**
*  GUI 组件示例
*  逻辑类:    src/scene/Showcase.ts
*  皮肤:      src/skins/scene/ShowcaseSkin.exml
*/
var OverGameUI = (function (_super) {
    __extends(OverGameUI, _super);
    function OverGameUI() {
        _super.call(this);
        //  指定当前类的皮肤名称
        //  Assign the skin name used by this Component
        this.skinName = "skins.scene.OverGameSkin";
    }
    var d = __define,c=OverGameUI;p=c.prototype;
    /**
    所有子项和皮肤中的组件都已经创建完毕并完成测量，可以使用
    */
    p.childrenCreated = function () {
        //
    };
    /**
    partAdded 是皮肤部件赋值到逻辑类的入口，你可以在这里进行
    必要的初始化操作。比如需要随屏幕改变组件的尺寸，写在这里
    可以避免写在 childrenCreated 中修改造成的多次测量。
    */
    p.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this.btn1) {
        }
    };
    return OverGameUI;
})(egret.gui.SkinnableComponent);
egret.registerClass(OverGameUI,"OverGameUI");
