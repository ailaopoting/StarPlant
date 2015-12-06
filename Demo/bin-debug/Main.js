var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        /**加载*/
        this.loadRes = new LoadRes();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=Main;p=c.prototype;
    p.onAddToStage = function (event) {
        //inject the custom material parser
        //注入自定义的素材解析器
        egret.gui.mapClass("egret.gui.IAssetAdapter", AssetAdapter);
        // load skin theme configuration file, you can manually modify the file. And replace the default skin.
        //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
        egret.gui.Theme.load("resource/theme.thm");
        //Config loading process interface
        //设置加载进度界面
        this.loadingView = new LoadingUI();
        this.stage.addChild(this.loadingView);
        // initialize the Resource loading library
        //初始化Resource资源加载库
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/resource.json", "resource/");
    };
    /**
     * 配置文件加载完成,开始预加载preload资源组。
     * Loading of configuration file is complete, start to pre-load the preload resource group
     */
    p.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.loadGroup("preload");
    };
    /**
     * preload资源组加载完成
     * preload resource group is loaded
     */
    p.onResourceLoadComplete = function (event) {
        if (event.groupName == "preload") {
            this.stage.removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            this.addChild(this.loadRes); //这个主要是用来显示 加载类 里面的 UI
            /**组名*/
            var Group;
            //加载通用皮肤的纹理组
            Group = "skins";
            this.loadRes.onAddToStage(Group);
            this.loadRes.addEventListener(Group, this.onRes, this);
            //加载NPC组
            Group = "npc";
            this.loadRes.onAddToStage(Group);
            this.loadRes.addEventListener(Group, this.onRes, this);
            //加载monster组
            Group = "monster";
            this.loadRes.onAddToStage(Group);
            this.loadRes.addEventListener(Group, this.onRes, this);
            this.loadMusic();
            //侦听 全部资源加载完毕 事件
            this.loadRes.addEventListener("stopRes", this.onRes, this);
            //创建场景
            this.createScene();
            this._state = -1;
            this.state = Main.STATE_INTRO; //侦听调度事件
        }
    };
    /**加载音乐*/
    p.loadMusic = function () {
        var Group;
        Group = "music";
        this.loadRes.onAddToStage(Group);
        this.loadRes.addEventListener(Group, this.onRes, this);
    };
    /**
     * 资源组加载出错
     * Resource group loading failed
     */
    p.onResourceLoadError = function (event) {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //ignore loading failed projects
        this.onResourceLoadComplete(event);
    };
    /**
     * preload资源组加载进度
     * loading process of preload resource
     */
    p.onResourceProgress = function (event) {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    };
    /**通用皮肤纹理加载完成*/
    p.onRes = function (e) {
        if (e.type == "skins") {
            console.log("通用皮肤纹理skins组加载完成"); //调试
        }
        if (e.type == "npc") {
            console.log("npc组加载完成"); //调试
        }
        if (e.type == "monster") {
            console.log("monster组加载完成"); //调试
        }
        //音乐
        if (e.type == "music") {
            console.log("music组加载完成"); //调试
            ConstantA.BgSound = RES.getRes("bg_1_mp3"); //获取音乐文件
        }
        //全部加载结束
        if (e.type == "stopRes") {
            this.loadRes.removeEventListener("skins", this.onRes, this); //删除侦听器
            this.loadRes.removeEventListener("npc", this.onRes, this);
            this.loadRes.removeEventListener("monster", this.onRes, this);
            this.loadRes.removeEventListener("stopRes", this.onRes, this);
            this.loadRes.removeEventListener("music", this.onRes, this);
            this.removeChild(this.loadRes); //删除 加载类
            Main.isLoadResOK = true;
            console.log("在Main类的所有资源 加载完毕"); //调试
        }
    };
    /**
     * 创建场景界面
     */
    p.createScene = function () {
        //游戏场景层，游戏场景相关内容可以放在这里面。
        //纯色背景
        var shp = new egret.Shape;
        //shp.graphics.lineStyle(0, 0x00ffff);//边框
        shp.graphics.beginFill(0x336699); //填充
        shp.graphics.drawRoundRect(0, 0, this.stage.stageWidth, this.stage.stageHeight, 3, 3);
        shp.graphics.endFill();
        this.addChild(shp);
        //GUI的组件必须都在这个容器内部,UIStage会始终自动保持跟舞台一样大小。
        ConstantA.stageW = this.stage.stageWidth;
        ConstantA.stageH = this.stage.stageHeight;
        ConstantA.guiLayer = new egret.gui.UIStage();
        //this.addChild(ConstantA.guiLayer);
        this.addChild(ConstantA.guiLayer);
    };
    d(p, "state",undefined
        //===============================侦听调度事件，切换界面==================================
        ,function (s) {
            console.log("执行了啊=========================");
            if (this._state != s) {
                this._state = s;
                console.log("当前状态值：", this._state);
                //删除舞台显示的对象
                if (this._curState && this._curState.parent) {
                    this.removeChild(this._curState);
                }
                //删除UI元素
                if (ConstantA.element) {
                    ConstantA.guiLayer.removeElement(ConstantA.element);
                }
                switch (this._state) {
                    case Main.STATE_INTRO:
                        this._curState = new IntroGame();
                        this._curState.addEventListener("GameStart", this.gameStart, this);
                        this.addChild(this._curState);
                        break;
                    case Main.STATE_GAME:
                        this._curState = new StartGame();
                        this._curState.addEventListener("GameOver", this.gameOver, this);
                        this.addChild(this._curState);
                        break;
                    case Main.STATE_OVER:
                        this._curState = new OverGame();
                        this._curState.addEventListener("GameIntro", this.gameIntro, this);
                        this.addChild(this._curState);
                        break;
                }
                //设置UI最顶层
                this.setChildIndex(ConstantA.guiLayer, this.numChildren);
                //如果 资源加载中 的UI显示，则 设置为 最顶层
                if (this.loadRes.parent) {
                    this.setChildIndex(this.loadRes, this.numChildren);
                }
            }
        }
    );
    p.gameStart = function (e) {
        console.log("A1"); //调试
        this.state = Main.STATE_GAME;
    };
    p.gameOver = function (e) {
        console.log("A2"); //调试
        this.state = Main.STATE_OVER;
    };
    p.gameIntro = function (e) {
        console.log("A3"); //调试
        this.state = Main.STATE_INTRO;
    };
    Main.STATE_INTRO = 1;
    Main.STATE_GAME = 2;
    Main.STATE_OVER = 3;
    Main.isLoadResOK = false;
    return Main;
})(egret.DisplayObjectContainer);
egret.registerClass(Main,"Main");
