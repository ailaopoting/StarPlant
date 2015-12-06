/**
 * 全局抛事件管理者
 * @author 
 *
 */
class ModelLocator extends egret.EventDispatcher {
    private static _self: ModelLocator;

    public constructor() {
        super();

    }

    public static getInstance(): ModelLocator {
        if(this._self == null) {
            this._self = new ModelLocator;
        }
        return this._self;
    }
}

