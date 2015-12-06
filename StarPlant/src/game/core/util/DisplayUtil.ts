/**
 * 显示工具管理类
 * @author 
 *
 */
class DisplayUtil {
	public constructor() {
	}

    public static removeForParent(curTarget: egret.DisplayObject): void {
        if(curTarget == null) {
            return;
        }
        if(curTarget.parent == null) {
            return;
        }
        if(LayerManger.uiLayer.contains(curTarget) || LayerManger.uiLayer.contains(curTarget.parent)) {
            (<any>curTarget.parent).removeElement(curTarget);
        } else 
        {
            curTarget.parent.removeChild(curTarget);
        }
    }
}
