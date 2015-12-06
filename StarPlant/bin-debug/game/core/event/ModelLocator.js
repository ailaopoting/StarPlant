/**
 * 全局抛事件管理者
 * @author
 *
 */
var ModelLocator = (function (_super) {
    __extends(ModelLocator, _super);
    function ModelLocator() {
        _super.call(this);
    }
    var d = __define,c=ModelLocator;p=c.prototype;
    ModelLocator.getInstance = function () {
        if (this._self == null) {
            this._self = new ModelLocator;
        }
        return this._self;
    };
    return ModelLocator;
})(egret.EventDispatcher);
egret.registerClass(ModelLocator,"ModelLocator");
