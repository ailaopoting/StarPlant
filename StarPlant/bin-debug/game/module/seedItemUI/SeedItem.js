/**
 * 种子项
 * @author
 *
 */
var SeedItem = (function (_super) {
    __extends(SeedItem, _super);
    function SeedItem(varInfo) {
        _super.call(this);
        this.skinName = skin.components.SeedItemSkin;
        this.info = varInfo;
    }
    var d = __define,c=SeedItem;p=c.prototype;
    p.initSet = function () {
    };
    p.setFuncDisable = function () {
    };
    p.update = function () {
        this.setFuncDisable();
    };
    p.dispose = function () {
    };
    p.childrenCreated = function () {
        this.borderSelected.visible = false;
        this.seedIcon.source = this.info.source;
        this.num.text = "x" + this.info.num;
        this.seedInfo.text = this.info.introduce;
    };
    p.updateNum = function () {
        this.num.text = "x" + this.info.num;
    };
    p.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    return SeedItem;
})(egret.gui.SkinnableComponent);
egret.registerClass(SeedItem,"SeedItem");
