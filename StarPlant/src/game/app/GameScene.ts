/**
 * 游戏场景
 * @author 
 *
 */
class GameScene {
    public type: string;
    public mapModel: MapModel;

    private static _self: GameScene;
    
    public curMapProcess: MapProcessor;
    
    public static getInstance(): GameScene 
    {
        if(this._self == null) 
        {
            this._self = new GameScene;
        }
        return this._self;
    }

    public constructor() {
        this.initSet();
        ModelLocator.getInstance().addEventListener(LogicEvent.START_SCENE,this.onStartScene,this);
        ModelLocator.getInstance().addEventListener(LogicEvent.COMPLETE_SCENE,this.onCompleteScene,this);
    }
    
    private onStartScene(evt: LogicEvent): void 
    {
        //切换开始，可能需要加载UI显示，对于大型游戏
        
        //释放当前场景资源,对于h5小型游戏可缓存
        this.dispose();
        
        //处理当前新场景初始化等
        var getData: any = evt.data;
        this.type = getData.type;
        this.mapModel.type = getData.type;
        if(this.type == SceneType.PLANT) {
            this.mapModel.addMap("bg_png");
            ToolBarUI.getInstance().show();
        }
        else if(this.type == SceneType.FIGHT) 
        {
            this.mapModel.addMap("fight_png");
        }
        
        this.curMapProcess = MapProcessor.createMapProcessor(this.mapModel);
        this.curMapProcess.init();
        GameScene.getInstance().show();
        
        //引导处理
        //GuideUI.getInstance().show();
        
        
    }
    
    private onCompleteScene(evt: LogicEvent): void 
    {
        //切换开始，可能需要加载UI显示，对于大型游戏,要关闭加载UI等操作
    }
    
    private initSet(): void 
    {
        if(this.mapModel) 
        {
            this.mapModel.dispose();
            this.mapModel = null;
        }
        this.mapModel = new MapModel;
    }

    private show(): void {
        this.mapModel.show();
    }

    private hide(): void {
        this.mapModel.hide();
    }

    private dispose(): void {
        if(this.mapModel) 
        {
            this.mapModel.dispose();
        }
        if(this.curMapProcess) 
        {
            this.curMapProcess.dispose();
        }
    }
}

