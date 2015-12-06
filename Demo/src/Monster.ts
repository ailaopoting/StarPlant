/**
 * Created by Administrator on 2015/5/23.
 */

class Monster extends egret.Sprite {
    private mc:egret.MovieClip;
    private mcf:egret.MovieClipDataFactory;
    public key:number = 0;//对象的标识

    //private timer:egret.Timer = new egret.Timer(1000);//默认1秒
    private timer:egret.Timer;//默认1秒

    private i:number = 0;//起始帧
    private n:number = 0;//帧数
    private j:number = 0;//播放计数

    public constructor() {
        super();
    }
    public setTimer(time:number){
        this.timer.delay = time;
    }
    public isTimer(is:boolean){
        if(is){
            this.timer.start();
        }else{
            this.timer.stop();
        }
    }
    public setFrame(step:number , step2:number){
        this.i = step;
        this.n = step2;
    }
    //参数 stepA 是 方向标识，用于 新对象 跳帧
    public startRole(josn:string,png:string, mc_name:string, step:number , step2:number ,time:number): egret.MovieClip {
        this.i = step;
        this.n = step2;


/*        var data = RES.getRes("monster_json");
        var tex = RES.getRes("monster_png");
        this.mcf = new egret.MovieClipDataFactory(data,tex);
        this.mc = new egret.MovieClip( this.mcf.generateMovieClipData("monster"));
*/
        var data = RES.getRes(josn);
        var tex = RES.getRes(png);
        this.mcf = new egret.MovieClipDataFactory(data,tex);
        this.mc = new egret.MovieClip( this.mcf.generateMovieClipData(mc_name));
        
         //对象创建就会显示第一帧....所以要 跳帧，要不然 在 更换动作 新对象 的时候..就会显示第一帧..就呵呵了
        this.mc.gotoAndStop(this.i);
        this.addChild(this.mc);
        if(time > 0){
            this.timer = new egret.Timer(time);
            this.timer.addEventListener(egret.TimerEvent.TIMER, this.onRoleTimer, this);
            this.timer.start();
        }
        return this.mc;
    }

    private onRoleTimer(evt:egret.Event):void
    {
        //减去自身一帧
        if(this.j >= this.n -1){
            this.j = 0;
        }else{
            this.j += 1;
        }
        //console.log("调试输出：",this.i,this.j);//调试
        this.mc.gotoAndStop(this.i + this.j);
    }
}