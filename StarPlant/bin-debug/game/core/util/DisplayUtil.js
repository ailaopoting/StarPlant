/**
 * 显示工具管理类
 * @author
 *
 */
var DisplayUtil = (function () {
    function DisplayUtil() {
    }
    var d = __define,c=DisplayUtil;p=c.prototype;
    DisplayUtil.removeForParent = function (curTarget) {
        if (curTarget == null) {
            return;
        }
        if (curTarget.parent == null) {
            return;
        }
        if (LayerManger.uiLayer.contains(curTarget) || LayerManger.uiLayer.contains(curTarget.parent)) {
            curTarget.parent.removeElement(curTarget);
        }
        else {
            curTarget.parent.removeChild(curTarget);
        }
    };
    return DisplayUtil;
})();
egret.registerClass(DisplayUtil,"DisplayUtil");
