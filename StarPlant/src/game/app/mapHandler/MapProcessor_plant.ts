/**
 * 种植场景处理
 * @author 
 *
 */
class MapProcessor_plant extends MapProcessor{
	public constructor(model:MapModel) {
        super(model);
	}
	
    private _diTile: DiTileListUI;
    private _bgMusic: egret.Sound;
    
    public init(): void 
    {
        SoundManager.getInstance().curSound = RES.getRes("bgSound_mp3");//获取音乐文件
        //延迟2秒后音乐播放
        egret.setTimeout(function() {
            SoundManager.getInstance().curChanel = SoundManager.getInstance().curSound.play(0,0);//循环播放背景音乐
        },this,2000);
        
        this._diTile = new DiTileListUI();
        this._map.content.addChild(this._diTile );   
        ModelLocator.getInstance().addEventListener(LogicEvent.RES_ALL_COMPLETE,this.onDiTiledLoaded,this);
        ModelLocator.getInstance().addEventListener(LogicEvent.BUY_DI,this.onBuyDi,this);//购买地块
        ModelLocator.getInstance().addEventListener(LogicEvent.GO_PLANT,this.onNeedPlant,this);//某个地块去种植，参数:植物id、数量、位置
        ModelLocator.getInstance().addEventListener(LogicEvent.SEED_GETER,this.onGrowGeter,this);//收获
        ModelLocator.getInstance().addEventListener(LogicEvent.GO_SELECT_DI,this.onGoSelectDi,this);//买地块进入选中地块
        
        //缺少内容层根据y方向定时跟新层级处理todo
    }
    
    private onGoSelectDi(evt:LogicEvent): void 
    {
        ToolBarUI.getInstance().pargeBar.currentPage = <number>evt.data;
        this.diChangeHandle();
    }
    
    private setFuncDisable(): void 
    {
        
    }
    
    private onGrowGeter(evt: LogicEvent): void 
    {
        var index: number = ActorInfo.diTileInfo.seedList.indexOf(evt.data);
        if(index != -1) 
        {
            if(ActorInfo.diTileInfo.seedList[index]) 
            {
                if(ActorInfo.diTileInfo.seedList[index].curPeriod == 5) {
                    ActorInfo.curCoinMoney += 10;
                    ToolBarUI.getInstance().moneyUI.update();
                    console.log("已收获:" + index);
                    ActorInfo.diTileInfo.seedList[index].dispose();
                    ActorInfo.diTileInfo.seedList[index] = null;
                } else 
                {
                    console.log("还未成熟，不可领取");
                }
            }
           
        }
    }
    
    //toolbar资源加载完成处理
    private toolBarResCompleteHandle(): void 
    {
        this.diChangeHandle();
    }
    
    //拉取种植状态
    private updateDiInfo(): void 
    {
        this.setFuncDisable();
        //获取当前可种植地块todo
        //单机
        ToolBarUI.getInstance().setPageBarTotal(ActorInfo.diTileInfo.openNum);
        ToolBarUI.getInstance().pargeBar.totalPage = ActorInfo.diTileInfo.openNum;
        ToolBarUI.getInstance().pargeBar.removeEventListener(PageBar.PAGE_CHANGE,this.onPageBar,this);
        ToolBarUI.getInstance().pargeBar.addEventListener(PageBar.PAGE_CHANGE,this.onPageBar,this);
        ActorInfo.diTileInfo.diInfo = {};
//        "1": {
//            "id": 10000,//种子id
//            "state": 1,//种子当前状态1.种子   2.状态1   3.状态2   4.状态3   5.状态4
//            "timePoint":12345,//种植时间戳
//            "leftTime":80//剩余时间
//             },
    }
    
    private onPageBar(evt: egret.Event): void 
    {
        this.diChangeHandle();
    }
       
    //地块状态切换
    private diChangeHandle(): void 
    { 
        var startIndex: number = (ToolBarUI.getInstance().pargeBar.currentPage - 1) * 6;
        console.log("当前地块开始索引:" + startIndex);
        var i: number = 0;
        for(var i: number = 0;i < ToolBarUI.getInstance().pargeBar.totalPage * 6;i++) {
            if(ActorInfo.diTileInfo.seedList[i]) {
                console.log("当前地块隐藏索引:" + i);
                ActorInfo.diTileInfo.seedList[i].hide();
            }
            if(i >= startIndex && i < (startIndex + 6)) {
                if(ActorInfo.diTileInfo.seedList[i]) {
                    ActorInfo.diTileInfo.seedList[i].show();
                    console.log("当前地块显示索引:" + i);
                }
            }
        }
    }
    
    private _curSelectDiIndex: number = -1;//当前选择地块索引
    private _diPos: egret.Point[] = [new egret.Point(85,310),new egret.Point(202,310),new egret.Point(110,400),new egret.Point(227,400),new egret.Point(117,510),new egret.Point(264,510)];
    private onNeedPlant(evt: LogicEvent): void 
    {
        SeedItemUI.getInstance().hide();
        var idList = evt.data.idList;
        var num = evt.data.num;
        var posList = evt.data.posList;
//        ActorInfo.diTileInfo.diInfo[(this._curSelectDiIndex + 1) + ""] =  //todo 动态设置json属性?
//        {
//            "id": 10000,//种子id
//            "state": 1,//种子当前状态1.种子   2.状态1   3.状态2   4.状态3   5.状态4
//            "timePoint":12345,//种植时间戳
//            "leftTime":80//剩余时间
//        };
        var item: Seed;
        for(var i: number = 0;i < posList.length; i++) 
        {
            item = new Seed(posList[i]);
            ActorInfo.diTileInfo.seedList[posList[i]] = item;
            item.setData(idList[i],1234);//todo 后台记录时间戳,此处1234随便写
            console.log("当前新增植物索引:" + posList[i] + "   种子id:" + idList[i]);
            this._map.content.addChild(item);
            item.x = this._diPos[<number>posList[i] % 6].x;
            item.y = this._diPos[<number>posList[i] % 6].y;
        }
    }
    
    private onDiTiledLoaded(evt: LogicEvent): void 
    {
//      ModelLocator.getInstance().removeEventListener(LogicEvent.RES_ALL_COMPLETE,this.onDiTiledLoaded,this);
        if(evt.data == this._diTile) 
        {
            this._diTile.initSet();
            this.initEvent();
        }
        if(evt.data == ToolBarUI.getInstance()) 
        {
            this.updateDiInfo();
        }
    }
    
    private onBuyDi(evt: LogicEvent): void 
    {
        this.updateDiInfo();
    }
    
    public initEvent(): void {
        for(var i: number = 0;i < this._diTile.diTileList.length;i++) {
            this._diTile.diTileList[i].addEventListener(egret.TouchEvent.TOUCH_TAP,this.onDiClick,this);
        }
    }
    
    private onDiClick(evt: egret.TouchEvent): void {
        var index: number = this._diTile.diTileList.indexOf(evt.currentTarget);
        this._curSelectDiIndex = (ToolBarUI.getInstance().pargeBar.currentPage - 1) * 6 + index;
        if(ActorInfo.diTileInfo.seedList[this._curSelectDiIndex] == null) 
        {
            SeedItemUI.getInstance().show({ clickIndex: this._curSelectDiIndex});
        }
    }
    
    public dispose(): void 
    {
        ModelLocator.getInstance().removeEventListener(LogicEvent.RES_ALL_COMPLETE,this.onDiTiledLoaded,this);
    }
}
