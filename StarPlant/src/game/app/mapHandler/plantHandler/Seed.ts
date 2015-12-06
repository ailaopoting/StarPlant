/**
 * 种子状态
 * @author 
 *
 */
class Seed extends egret.Sprite{
    public res: egret.Bitmap;//种子状态资源
    
    
    private _timer: egret.Timer;
    
    private _curPoint: number;//当前累积点数
    private _needPointList: number[] = [20,40,60,80];//当前所需各个生长阶段点数
    private _id: number = 10000;//植物id
    private _checkTime: number;//当前时间戳
    private _curPeriod: number = 0;//当前阶段
    public diIndex: number;
    
	public constructor(diPos:number) {
        super();
        
        this.res = new egret.Bitmap;
        this.res.touchEnabled = true;
        this.addChild(this.res);
        
        this._timer = new egret.Timer(1000);
        this._timer.addEventListener(egret.TimerEvent.TIMER,this.onGrow,this);
        this._timer.stop();
        
        this.diIndex = diPos;
	}
	
    /**设置定时器的 时间间隔 毫秒*/
    public setTimer(time: number) {
        this._timer.delay = time;
    }
    /**是否启动定时器*/
    public isTimer(is: boolean) {
        if(is) {
            this._timer.start();
        } else {
            this._timer.stop();
        }
    }
    
    private onGrow(evt:egret.TimerEvent): void 
    {
        this._curPoint++;
        this.growStateHandle();
    }
    
    public onAddGrow(addPoint:number=1): void 
    {
        this._curPoint += addPoint;
        this.growStateHandle();
    }
    
    //植物状态处理
    private growStateHandle(): void 
    {
        if(this._curPoint < this._needPointList[0]) 
        {
            this._curPeriod = 1;
        }
        else if(this._curPoint >= this._needPointList[0] && this._curPoint < this._needPointList[1]) {
            this._curPeriod = 2;
        }
        else if(this._curPoint >= this._needPointList[1] && this._curPoint < this._needPointList[2]) {
            this._curPeriod = 3;
        }
        else if(this._curPoint >= this._needPointList[2] && this._curPoint < this._needPointList[3]) {
            this._curPeriod = 4;
        }
        else 
        {
            this._curPeriod = 5;
            this._timer.stop();
        } 
        RES.getResAsync(this._id + "_" + this._curPeriod + "_png",this.resLoaded,this);
    }
    
    //是否可以领取
    public canGet(): boolean 
    {
        var result: boolean;
        if(this._curPeriod == 5) {
            result = true;
        } else 
        {
            result = false;
        }
        return result;
    }
    
    private resLoaded(res: any): void 
    {
        this.res.texture = res;
        this.res.x = -this.res.width / 2;
        this.res.y = -this.res.height;
    }
    
    public get curPeriod(): number 
    {
        return this._curPeriod;
    }
    
    public setData(id:number,checkTime:number): void 
    {
        this._id = id;
        this._checkTime = checkTime;
        //todo 
        this._curPoint = 0;
        this.isTimer(true);
        
        this.res.addEventListener(egret.TouchEvent.TOUCH_END,this.onGlowGet,this);
        ModelLocator.getInstance().addEventListener(LogicEvent.CLICK_NORMAL_ADD_SPEED,this.onNormalAdd,this);
    }
    
    private onNormalAdd(evt: LogicEvent): void 
    {
        console.log("点击加速了!!!");
        this._curPoint++;
        this.growStateHandle();
    }
    
    private onGlowGet(evt: egret.TouchEvent): void 
    {
        ModelLocator.getInstance().dispatchEvent(new LogicEvent(LogicEvent.SEED_GETER,false,false,this));
    }
    
    //收获通知
    public dispacheGeterHandle(): void 
    {
        ModelLocator.getInstance().dispatchEvent(new LogicEvent(LogicEvent.SEED_GETER,false,false,this));
    }
    
    public show(): void 
    {
        this.visible = true;
    }
    
    public hide(): void 
    {
        this.visible = false;
    }
    
    public dispose(): void 
    {
        if(this._timer) 
        {
            this._timer.removeEventListener(egret.TimerEvent.TIMER,this.onGrow,this);
            this._timer = null;
        }
        if(this.res) 
        {
            this.res.removeEventListener(egret.TouchEvent.TOUCH_END,this.onGlowGet,this);
            DisplayUtil.removeForParent(this.res);
            this.res = null;
        }
        ModelLocator.getInstance().removeEventListener(LogicEvent.CLICK_NORMAL_ADD_SPEED,this.onNormalAdd,this);
    }
}

