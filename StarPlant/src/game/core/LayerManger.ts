/**
 * 游戏图层管理 
 */	
class LayerManger {
    private static _root: Main;
    private static _stage: egret.Stage;
    private static _rootRect: egret.Rectangle;
    private static _mapLayer: egret.Sprite;
    private static _uiLayer: egret.gui.UIStage;
    private static _dialogLayer: egret.Sprite;
    private static _moduleLayer: egret.Sprite;
    private static _topLayer: egret.Sprite;

    private static _focusLayerStack: Array<egret.DisplayObjectContainer>;

    private static _layerInteractionRecordMap:HashMap;

    public constructor() {
    }

    public static setup(root: Main): void {
        this._root = root;
        this._stage = this._root.stage;
        this._rootRect = new egret.Rectangle(0,0,this._root.width,this._root.height);

        this._mapLayer = new egret.Sprite();
//        this._mapLayer.touchEnabled = false;
//        this._mapLayer.touchChildren = true;
        this._root.addChild(this._mapLayer);

        this._uiLayer = new egret.gui.UIStage;
//        this._uiLayer.touchEnabled = false;
//        this._uiLayer.touchChildren = false;
        this._root.addChild(this._uiLayer);

        this._dialogLayer = new egret.Sprite();
//        this._dialogLayer.touchEnabled = false;
//        this._dialogLayer.touchChildren = true;
        this._root.addChild(this._dialogLayer);

        this._moduleLayer = new egret.Sprite();
//        this._moduleLayer.touchEnabled = false;
//        this._moduleLayer.touchChildren = true;
        this._root.addChild(this._moduleLayer);

        this._topLayer = new egret.Sprite();
//        this._topLayer.touchEnabled = false;
//        this._topLayer.touchChildren = true;
        this._root.addChild(this._topLayer);

        this._layerInteractionRecordMap = new HashMap;
        this._focusLayerStack = [];
    }

    public static get stage(): egret.Stage {
        return this._stage;
    }
    public static get root(): Main {
        return this._root;
    }
    public static get rootRect(): egret.Rectangle {
        return this._rootRect;
    }

    public static get mapLayer(): egret.Sprite {
        return this._mapLayer;
    }

    public static get uiLayer(): egret.gui.UIStage {
        return this._uiLayer;
    }

    public static get dialogLayer(): egret.Sprite {
        return this._dialogLayer;
    }

    public static get moduleLayer(): egret.Sprite {
        return this._moduleLayer;
    }

    public static get topLayer(): egret.Sprite {
        return this._topLayer;
    }


    private static recordAllLayerInteraction(): void {
        if(this._focusLayerStack.length == 0) {
            this.recordLayerInteraction(this._mapLayer);
            this.recordLayerInteraction(this._uiLayer);
            this.recordLayerInteraction(this._dialogLayer);
            this.recordLayerInteraction(this._moduleLayer);
            this.recordLayerInteraction(this._topLayer);
        }
    }

    private static recordLayerInteraction(layer: egret.DisplayObjectContainer): void {
        this._layerInteractionRecordMap.add(layer,new LayerInteractionSetting(layer.touchChildren,layer.touchEnabled));
    }

    private static resetAllLayerInteraction(): void {
        this.resetLayerInteraction(this._mapLayer);
        this.resetLayerInteraction(this._uiLayer);
        this.resetLayerInteraction(this._dialogLayer);
        this.resetLayerInteraction(this._moduleLayer);
        this.resetLayerInteraction(this._topLayer);
    }

    private static resetLayerInteraction(layer: egret.DisplayObjectContainer): void {
        var layerInteractionSetting: any = this._layerInteractionRecordMap.get(layer);
        if(layerInteractionSetting != null) {
            layer.touchChildren = (<LayerInteractionSetting>layerInteractionSetting).mouseChildren;
            layer.touchEnabled = (<LayerInteractionSetting>layerInteractionSetting).touchEnabled;
        }
    }

    private static pushLayerToStack(layer: egret.DisplayObjectContainer): void {
        this._focusLayerStack.push(layer);
    }

    private static popLayerFromStack(): void {
        this.resetAllLayerInteraction();
        this._focusLayerStack.pop();
        if(this._focusLayerStack.length == 0) {
            return;
        }
        var top: egret.DisplayObjectContainer = this._focusLayerStack.pop();
        switch(top) {
            case this._topLayer:
                this.focusOnTopLayer();
                break;
            case this._moduleLayer:
                this.focusOnModuleLayer();
                break;
            case this._dialogLayer:
                this.focusOnDialogLayer();
                break;
            case this._uiLayer:
                this.focusOnUILayer();
        }
    }

    public static focusOnUILayer(): void {
        this.recordAllLayerInteraction();
        this._mapLayer.touchChildren = false;
        this._uiLayer.touchChildren = true;
        this.pushLayerToStack(this._uiLayer);
    }

    public static focusOnDialogLayer(): void {
        this.recordAllLayerInteraction();
        this._mapLayer.touchChildren = false;
        this._uiLayer.touchChildren = false;
        this._dialogLayer.touchChildren = true;
        this.pushLayerToStack(this._dialogLayer);
    }

    public static focusOnModuleLayer(): void {
        this.recordAllLayerInteraction();
        this._mapLayer.touchChildren = false;
        this._uiLayer.touchChildren = false;
        this._dialogLayer.touchChildren = false;
        this._moduleLayer.touchChildren = true;
        this.pushLayerToStack(this._moduleLayer);
    }

    public static focusOnTopLayer(): void {
        this.recordAllLayerInteraction();
        this._mapLayer.touchChildren = false;
        this._uiLayer.touchChildren = false;
        this._dialogLayer.touchChildren = false;
        this._moduleLayer.touchChildren = false;
        this._topLayer.touchChildren = true;
        this.pushLayerToStack(this._topLayer);
    }

    public static focusOnMapLayer(): void {
        this.recordAllLayerInteraction();
        this._mapLayer.touchChildren = true;
        this._uiLayer.touchChildren = false;
        this._dialogLayer.touchChildren = false;
        this._moduleLayer.touchChildren = false;
        this._topLayer.touchChildren = false;
        this.pushLayerToStack(this._mapLayer);
    }

    public static resetOperation(): void {
        this.popLayerFromStack();
    }
		
    /**
     *隐图层 
     */		   public static hideMap(): void {
        DisplayUtil.removeForParent(this._mapLayer);
        DisplayUtil.removeForParent(this._uiLayer);
        DisplayUtil.removeForParent(this._dialogLayer);
    }
		
    /**
     *显图层 
     */		   public static showMap(): void {
        this._root.addChild(this._mapLayer);
        this._root.addChild(this._uiLayer);
        this._root.addChild(this._dialogLayer);
        this._root.addChild(this._moduleLayer);
        this._root.addChild(this._topLayer);
    }

}

class LayerInteractionSetting extends egret.HashObject{
    public mouseChildren: boolean;
    public touchEnabled: boolean;

    constructor(mouseChildren: boolean,touchEnabled: boolean) {
        super();
        this.mouseChildren = mouseChildren;
        this.touchEnabled = touchEnabled;
    }
}
