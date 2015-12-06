/**
 * 地块元素处理
 * @author
 *
 */
var DiTileListUI = (function (_super) {
    __extends(DiTileListUI, _super);
    //    private _callBack: Function;
    function DiTileListUI() {
        _super.call(this);
        this.diTileList = [];
        this.skinName = skin.DiListSkin;
        //        this._callBack = callBack;
        //        this.initSet();
    }
    var d = __define,c=DiTileListUI;p=c.prototype;
    p.initSet = function () {
        this.diTileList.push(this.diTile0);
        this.diTileList.push(this.diTile1);
        this.diTileList.push(this.diTile2);
        this.diTileList.push(this.diTile3);
        this.diTileList.push(this.diTile4);
        this.diTileList.push(this.diTile5);
    };
    p.setFuncDisable = function () {
    };
    p.update = function () {
        this.setFuncDisable();
    };
    p.dispose = function () {
    };
    p.childrenCreated = function () {
        //        if(this._callBack != null) 
        //        {
        //            this._callBack();
        //        }
        ModelLocator.getInstance().dispatchEvent(new LogicEvent(LogicEvent.RES_ALL_COMPLETE, false, false, this));
    };
    p.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    return DiTileListUI;
})(egret.gui.SkinnableComponent);
egret.registerClass(DiTileListUI,"DiTileListUI");
