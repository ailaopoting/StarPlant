/**
 * 音乐管理
 * @author
 *
 */
var SoundManager = (function () {
    function SoundManager() {
    }
    var d = __define,c=SoundManager;p=c.prototype;
    SoundManager.getInstance = function () {
        if (null == this._self) {
            this._self = new SoundManager;
        }
        return this._self;
    };
    return SoundManager;
})();
egret.registerClass(SoundManager,"SoundManager");
