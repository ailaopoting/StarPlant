/**
 * 自定义事件
 * @author 
 *
 */
class LogicEvent extends egret.Event{
    //自定义事件列表
    public static RES_ALL_COMPLETE: string = "resAllComplete";//资源全部加载完成
    public static LOGIN: string = "login";
    public static START_SCENE: string = "startScene";//开始切换场景
    public static COMPLETE_SCENE: string = "completeScene";//场景切换完成
    public static GO_PLANT: string = "goPlant";//某个地块去种植，参数:植物id、数量、位置
    public static SEED_GETER: string = "seedGeter";//种子收获
    public static CLICK_NORMAL_ADD_SPEED: string = "clickNormalAddSpeed";//普通点击加速
    public static BUY_DI: string = "buyDi";//购买地块
    public static SELECT_DI_BLOCK: string = "selectDiBlock";//购买地块面板选中地块
    public static GO_SELECT_DI: string = "goSelectDi";//购买地块面板去指定地块
    
    public data: any;
    
	public constructor(type:string,bubules?:boolean,cancelable?:boolean,data?:any) {
        super(type,bubules,cancelable,data);
        this.data = data;
	}
}
