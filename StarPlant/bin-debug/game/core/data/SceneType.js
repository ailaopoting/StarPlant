/**
 * 场景类型
 * @author
 *
 */
var SceneType = (function () {
    function SceneType() {
    }
    var d = __define,c=SceneType;p=c.prototype;
    SceneType.FIGHT = "fight"; //战斗场景
    SceneType.PLANT = "plant"; //种植场景
    return SceneType;
})();
egret.registerClass(SceneType,"SceneType");
