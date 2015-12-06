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
    private _contentDepthTimer: egret.Timer;//内容层层级处理，根据y轴排序
    public init(): void 
    {
        SoundManager.getInstance().curSound = RES.getRes("bgSound_mp3");//获取音乐文件
        //延迟2秒后音乐播放
        egret.setTimeout(function() {
            SoundManager.getInstance().curChanel = SoundManager.getInstance().curSound.play(0,0);//循环播放背景音乐
        },this,2000);
        
        this._diTile = new DiTileListUI();
        this._map.ground.addChild(this._diTile);   
        ModelLocator.getInstance().addEventListener(LogicEvent.RES_ALL_COMPLETE,this.onDiTiledLoaded,this);//地块资源加载完成
        ModelLocator.getInstance().addEventListener(LogicEvent.BUY_DI,this.onBuyDi,this);//购买地块
        ModelLocator.getInstance().addEventListener(LogicEvent.GO_PLANT,this.onNeedPlant,this);//某个地块去种植，参数:植物id、数量、位置
        ModelLocator.getInstance().addEventListener(LogicEvent.SEED_GETER,this.onGrowGeter,this);//收获
        ModelLocator.getInstance().addEventListener(LogicEvent.GO_SELECT_DI,this.onGoSelectDi,this);//买地块进入选中地块
        
        //缺少内容层根据y方向定时跟新层级处理todo
        this._contentDepthTimer = new egret.Timer(1000);
        this._contentDepthTimer.addEventListener(egret.TimerEvent.TIMER,this.onContentDepth,this);
        this._contentDepthTimer.start();
    }
    
    private onContentDepth(evt: egret.TimerEvent): void 
    {
        console.log("开始排序了");
        var contentList: egret.Sprite[] = [];
        for(var i: number = 0;i < this._map.content.numChildren;i++) 
        {
            if(this._map.content.getChildAt(i) instanceof egret.Sprite) 
            {
                contentList.push(<egret.Sprite>this._map.content.getChildAt(i));
            }
        }
        contentList = contentList.sort(sortBySlotDepth);
        for(i = 0;i < contentList.length;i++) {
            this._map.content.setChildIndex(contentList[i],i);
        }
      
        //排序通过y
        function sortBySlotDepth(a: egret.Sprite,b: egret.Sprite): number {
            console.log("执行排序了");
            if(a.y < b.y) {
                return -1;
            }
            else if(a.y > b.y) {
                return 1;
            }
            else {
                return 0;
            }
        }
    }
    
    private test(): void 
    {
        console.log("测试中======");
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
                    ActorInfo.curCoinMoney += Math.floor(10 * (1 + ActorInfo.miAddPower[ActorInfo.diTileInfo.diLevel - 1]));//向下取整
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
        
//        this._diTile.buyDiLevel.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBuyDiLevel,this);
        
        //技能点击处理
        this._diTile.skill0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onSkill0Click,this);//点击加速
        this._diTile.skill1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onSkill1Click,this);//土地生长加速
        this._diTile.skill2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onSkill2Click,this);//按住加速
    }
    
    private onSkill2Click(evt: egret.TouchEvent): void {
        if(ActorInfo.downPower) {
            console.log("已有效果不需购买!");
            return;
        }
        var alert: egret.gui.Alert = egret.gui.Alert.show("你确定花费2能量购买按住加速效果吗?","购买",this.buySkill2Buy,"确定","取消",true,true,this);
        alert.skinName = skin.simple.AlertSkin;
    }

    private buySkill2Buy(evt: egret.gui.CloseEvent): void {
        if(evt.detail == egret.gui.Alert.FIRST_BUTTON) {
            if(ActorInfo.miMoney >= 2) {
                console.log("按住加速");
                ActorInfo.miMoney -= 2;
                ToolBarUI.getInstance().userUI.update();
                //暂时土地加倍处理,时间60秒处理
                ActorInfo.downPower = true;
                ActorInfo.downPowerLeftTime = 60;
                this.initSkill2Timer();
                this._timer2.start();
            } else {
                var alert: egret.gui.Alert = egret.gui.Alert.show("所需能量不足，购买失败","提示",null,"确定");
                alert.skinName = skin.simple.AlertSkin;
            }
        } else {
            console.log("取消点击加速");
        }
    }

    private initSkill2Timer(): void {
        if(this._timer2 == null) {
            this._timer2 = new egret.Timer(1000);
            this._timer2.addEventListener(egret.TimerEvent.TIMER,this.onSkill2Tick,this);
            this._timer2.stop();
        }
    }

    private onSkill2Tick(evt: egret.TimerEvent): void {
        ActorInfo.downPowerLeftTime--;
        
        if(this._diTile.skillCD2.visible == false) {
            this._diTile.skillCD2.visible = true;
        }
        this._diTile.skillCD2.text = DateUtil.getHMS(ActorInfo.downPowerLeftTime);
        
        if(ActorInfo.downPowerLeftTime <= 0) {
            ActorInfo.downPowerLeftTime = 0;
            ActorInfo.downPower = false;
            this._timer2.stop();
            this._diTile.skillCD2.visible = false;
        }
    }
    
    private onSkill1Click(evt: egret.TouchEvent): void 
    {
        if(ActorInfo.growPower > 0) {
            console.log("已有效果不需购买!");
            return;
        }
        var alert: egret.gui.Alert = egret.gui.Alert.show("你确定花费2能量购买土地加速效果吗?","购买",this.buySkill1Buy,"确定","取消",true,true,this);
        alert.skinName = skin.simple.AlertSkin;
    }
    
    private buySkill1Buy(evt: egret.gui.CloseEvent): void {
        if(evt.detail == egret.gui.Alert.FIRST_BUTTON) {
            if(ActorInfo.miMoney >= 2) {
                console.log("土地加速");
                ActorInfo.miMoney -= 2;
                ToolBarUI.getInstance().userUI.update();
                //暂时土地加倍处理,时间60秒处理
                ActorInfo.growPower = ActorInfo.diGrowBase;
                ActorInfo.growPowerLeftTime = 60;
                this.initSkill1Timer();
                this._timer1.start();
            } else {
                var alert: egret.gui.Alert = egret.gui.Alert.show("所需能量不足，购买失败","提示",null,"确定");
                alert.skinName = skin.simple.AlertSkin;
            }
        } else {
            console.log("取消点击加速");
        }
    }

    private initSkill1Timer(): void {
        if(this._timer1 == null) {
            this._timer1 = new egret.Timer(1000);
            this._timer1.addEventListener(egret.TimerEvent.TIMER,this.onSkill1Tick,this);
            this._timer1.stop();
        }
    }

    private onSkill1Tick(evt: egret.TimerEvent): void {
        ActorInfo.growPowerLeftTime--;
        
        if(this._diTile.skillCD1.visible == false) {
            this._diTile.skillCD1.visible = true;
        }
        this._diTile.skillCD1.text = DateUtil.getHMS(ActorInfo.growPowerLeftTime);
        
        if(ActorInfo.growPowerLeftTime <= 0) {
            ActorInfo.growPowerLeftTime = 0;
            ActorInfo.growPower = 0;
            this._timer1.stop();
            this._diTile.skillCD1.visible = false;
        }
    }
    
    private onSkill0Click(evt: egret.TouchEvent): void 
    {
        if(ActorInfo.clickPower > 0) 
        {
            console.log("已有效果不需购买!");
            return;
        }
        var alert: egret.gui.Alert = egret.gui.Alert.show("你确定花费2能量购买点击加速效果吗?","购买",this.buySkill0Buy,"确定","取消",true,true,this);
        alert.skinName = skin.simple.AlertSkin;
    }
        
    private _timer0: egret.Timer;
    private _timer1: egret.Timer;
    private _timer2: egret.Timer;
    private buySkill0Buy(evt: egret.gui.CloseEvent): void {
        if(evt.detail == egret.gui.Alert.FIRST_BUTTON) {
            if(ActorInfo.miMoney >= 2) {
                console.log("点击加速");
                ActorInfo.miMoney -= 2;
                ToolBarUI.getInstance().userUI.update();
                //暂时点击加倍处理,时间60秒处理
                ActorInfo.clickPower = ActorInfo.normalClick;
                ActorInfo.clickPowerLeftTime = 60;
                this.initSkill0Timer();
                this._timer0.start();
            } else {
                var alert: egret.gui.Alert = egret.gui.Alert.show("所需能量不足，购买失败","提示",null,"确定");
                alert.skinName = skin.simple.AlertSkin;
            }
        } else {
            console.log("取消点击加速");
        }
    }
    
    private initSkill0Timer(): void {
        if(this._timer0 == null) 
        {
            this._timer0 = new egret.Timer(1000);
            this._timer0.addEventListener(egret.TimerEvent.TIMER,this.onSkill0Tick,this);
            this._timer0.stop();
        }
    }
    
    private onSkill0Tick(evt:egret.TimerEvent): void
    {
        ActorInfo.clickPowerLeftTime--;
        
        if(this._diTile.skillCD0.visible == false) 
        {
            this._diTile.skillCD0.visible = true;
        }
        this._diTile.skillCD0.text = DateUtil.getHMS(ActorInfo.clickPowerLeftTime);
        
        if(ActorInfo.clickPowerLeftTime <= 0) 
        {
            this._diTile.skillCD0.visible = false;
            ActorInfo.clickPowerLeftTime = 0;
            ActorInfo.clickPower = 0; 
            this._timer0.stop();
        }
    }
    
    private onAddDiBtn(evt: egret.TouchEvent): void {

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
