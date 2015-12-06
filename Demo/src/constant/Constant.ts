/**
 * 全局 变量？
 */

class ConstantA {
    /** UI的舞台 */
    public static guiLayer:egret.gui.UIStage;
    /** UI的元素 */
    public static element:any;
    /**舞台宽*/
    public static stageW: number = 0;
    /**舞台高*/
    public static stageH: number = 0;
    /**角色属性*/
    public static roleClass: RoleClass = new RoleClass();
    /**升级所需经验组*/
    public static levelExp: any = {
        "2": 20, "3": 60, "4": 120, "5": 250, "6": 360, "7": 490, "8": 640, "9": 810, "10": 1000, "11": 1210,
        "12": 1440, "13": 1690, "14": 1960, "15": 2250, "16": 2560, "17": 2890, "18": 3240, "19": 3610, "20": 4000,
        "21": 4410, "22": 4840, "23": 5290, "24": 5760, "25": 6250, "26": 6760, "27": 7290, "28": 7840, "29": 8410,
        "30": 9000
    };
    /**背景音乐*/
    public static BgSound: egret.Sound;
    
}