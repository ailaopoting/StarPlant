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
        if(curTarget instanceof egret.gui.SkinnableComponent || curTarget instanceof egret.gui.SkinnableContainer) 
        {
            (<any>curTarget.parent).removeElement(curTarget);
        }
        else 
        {
            curTarget.parent.removeChild(curTarget);
        }
    }
}
