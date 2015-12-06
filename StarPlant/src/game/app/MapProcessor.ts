/**
 * 地图处理基类
 * @author 
 *
 */
class MapProcessor {

    public static CLASS_PATH: String = "MapProcessor_";

    protected  _map: MapModel;

    public constructor(map: MapModel) {
        this._map = map;
    }


    public init(): void {

    }

    public dispose(): void {

    }

    protected  closeInteractor(object: egret.Sprite): void {
        object.touchEnabled = false;
        //        object.buttonMode = false;
    }

    protected  initInteractor(object: egret.Sprite): void {
        if(object) {
            object.touchChildren = false;
            object.touchEnabled = true;
            //            object.buttonMode = true;
        }
    }
		
    // 检测当前是否能跳转
    public checkChangeable(): Boolean {
        return true;
    }

    public static createMapProcessor(mapModel: MapModel): MapProcessor {
        var classDefine = egret.getDefinitionByName(this.CLASS_PATH + mapModel.type);
        if(classDefine == null) 
        {
            classDefine = MapProcessor;
        }
        return new classDefine(mapModel);
    }
}


