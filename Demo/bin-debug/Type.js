/**
 * Created by Administrator on 2015/6/2.
 */
var Point = (function () {
    function Point() {
    }
    var d = __define,c=Point;p=c.prototype;
    return Point;
})();
egret.registerClass(Point,"Point");
var NpcDH = (function () {
    function NpcDH() {
    }
    var d = __define,c=NpcDH;p=c.prototype;
    return NpcDH;
})();
egret.registerClass(NpcDH,"NpcDH");
var RoleClass = (function () {
    function RoleClass() {
        this.name = "";
        this.level = 1;
        this.exp = 0;
        this.hp = 0;
        this.maxHp = 0;
        this.attack = 0;
        this.map = 0;
    }
    var d = __define,c=RoleClass;p=c.prototype;
    return RoleClass;
})();
egret.registerClass(RoleClass,"RoleClass");
var MonsterClass = (function () {
    function MonsterClass() {
        this.id = 0;
        this.name = "";
        this.model = "";
        this.exp = 0;
        this.hp = 0;
        this.maxHp = 0;
        this.attack = 0;
        this.task = 0;
        this.map_elementA = new egret.MovieClip();
        this.map_elementB = new egret.MovieClip();
        this.map_elementC = new egret.MovieClip();
        this.map_elementD = new egret.MovieClip();
        this.isRun = false;
        this.isDeath = false;
        this.txtName = new egret.TextField;
        this.txtHp = new egret.TextField;
    }
    var d = __define,c=MonsterClass;p=c.prototype;
    return MonsterClass;
})();
egret.registerClass(MonsterClass,"MonsterClass");
