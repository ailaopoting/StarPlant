/**
 * 游戏场景
 * @author
 *
 */
var GameScene = (function () {
    function GameScene() {
        this.initSet();
        ModelLocator.getInstance().addEventListener(LogicEvent.START_SCENE, this.onStartScene, this);
        ModelLocator.getInstance().addEventListener(LogicEvent.COMPLETE_SCENE, this.onCompleteScene, this);
    }
    var d = __define,c=GameScene;p=c.prototype;
    GameScene.getInstance = function () {
        if (this._self == null) {
            this._self = new GameScene;
        }
        return this._self;
    };
    p.onStartScene = function (evt) {
        //切换开始，可能需要加载UI显示，对于大型游戏
        //释放当前场景资源,对于h5小型游戏可缓存
        this.dispose();
        //处理当前新场景初始化等
        var getData = evt.data;
        this.type = getData.type;
        this.mapModel.type = getData.type;
        if (this.type == SceneType.PLANT) {
            this.mapModel.addMap("bg_png");
            ToolBarUI.getInstance().show();
        }
        else if (this.type == SceneType.FIGHT) {
            this.mapModel.addMap("fight_png");
        }
        this.curMapProcess = MapProcessor.createMapProcessor(this.mapModel);
        this.curMapProcess.init();
        GameScene.getInstance().show();
        //引导处理
        GuideUI.getInstance().show();
    };
    p.onCompleteScene = function (evt) {
        //切换开始，可能需要加载UI显示，对于大型游戏,要关闭加载UI等操作
    };
    p.initSet = function () {
        if (this.mapModel) {
            this.mapModel.dispose();
            this.mapModel = null;
        }
        this.mapModel = new MapModel;
    };
    p.show = function () {
        this.mapModel.show();
    };
    p.hide = function () {
        this.mapModel.hide();
    };
    p.dispose = function () {
        if (this.mapModel) {
            this.mapModel.dispose();
        }
        if (this.curMapProcess) {
            this.curMapProcess.dispose();
        }
    };
    return GameScene;
})();
egret.registerClass(GameScene,"GameScene");
