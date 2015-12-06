/**
 * Created by Administrator on 2015/6/2.
 */

class Point {
    public x:number;
    public y:number;
}
class NpcDH {
    public type:number;
    public txt:string;
}
class RoleClass
{
    name: string = "";
    level: number = 1;
    exp: number = 0;
    hp: number = 0;
    maxHp: number = 0;
    attack: number = 0;
    map: number = 0;
}
class MonsterClass {
    id: number = 0;
    name: string = "";
    model: string = "";
    exp: number = 0;
    hp: number = 0;
    maxHp: number = 0;
    attack: number = 0;
    task: number = 0;
    map_elementA:egret.MovieClip = new egret.MovieClip();
    map_elementB:egret.MovieClip = new egret.MovieClip();
    map_elementC:egret.MovieClip = new egret.MovieClip();
    map_elementD:egret.MovieClip = new egret.MovieClip();
    map_element_type:number;
    
    map_element_in:number;
    isRun:boolean = false;
    isDeath:boolean = false;
    
    txtName: egret.TextField = new egret.TextField;
    txtHp: egret.TextField = new egret.TextField;
          
}