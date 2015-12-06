/**
 * 地图模型
 * @author 
 *
 */
class MapModel extends egret.DisplayObjectContainer{
    private _far: egret.Sprite;//远景层
    private _ground: egret.Sprite;//地面层
    private _content: egret.Sprite;//内容层
    private _front: egret.Sprite;//前景层
    
    private _map: egret.Bitmap;//地图资源
    public type: string;
    
	public constructor() {
        super();
        this.init();
	}
	
    private init(): void 
    {
        this._far = new egret.Sprite;
        this._far.touchEnabled = this._far.touchChildren = true;
        
        this._ground = new egret.Sprite;
        this._ground.touchEnabled = this._ground.touchChildren = true;
        
        this._content = new egret.Sprite;
        this._content.touchEnabled = this._content.touchChildren = true;
        
        this._front = new egret.Sprite;
        this._front.touchEnabled = this._front.touchChildren = true;
        
        this.addChild(this._far);
        this.addChild(this._ground);
        this.addChild(this._content);
        this.addChild(this._front);
    }
	
    public get far(): egret.Sprite 
    {
        return this._far;
    }
    
    public get ground(): egret.Sprite {
        return this._ground;
    }
    
    public get content(): egret.Sprite 
    {
        return this._content;
    }
    
    public get front(): egret.Sprite 
    {
        return this._front;
    }
    
    public show(): void 
    {
        LayerManger.mapLayer.addChild(this);
    }
    
    public hide(): void 
    {
        DisplayUtil.removeForParent(this);
    }
    
    public dispose(): void 
    {
        this.disposeMap();
        this._far.removeChildren();
        this._ground.removeChildren();
        this._content.removeChildren();
        this._front.removeChildren();
    }
    
    public addMap(mapName:string): void 
    {
        this.disposeMap();
        this._map = new egret.Bitmap();
        RES.getResAsync(mapName,this.onGetMapRes,this);
    }
    
    private onGetMapRes(data:any): void 
    {
        this._map.texture = data;
        this._ground.addChild(this._map);
        ModelLocator.getInstance().dispatchEvent(new LogicEvent(LogicEvent.COMPLETE,false,false));
    }
    
    public disposeMap(): void
    {
        if(this._map) 
        {
            DisplayUtil.removeForParent(this._map);
            this._map = null;
        }
    }
}
