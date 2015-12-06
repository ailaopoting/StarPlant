/**
 * 用户信息集合
 * @author 
 *
 */
class ActorInfo {
	public constructor() {
	}
	
    public static userId: number;//用户id
    public static userName: string = "朱演";//用户登录名
    public static userPassword: string;//用户登录密码
    public static allCoinMoney: number = 100;//总非付费财富
    public static miMoney: number = 100;//付费金钱
    public static curCoinMoney: number = 10;//当前非付费财富
    
    public static itemBagInfo: ItemBagInfo = new ItemBagInfo;//背包信息
    public static diTileInfo: DiTitleInfo = new DiTitleInfo//地块信息
}
