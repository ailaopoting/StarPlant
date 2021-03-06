/**
 * Created by Administrator on 2015/5/31.
 */
var CreateMap = (function (_super) {
    __extends(CreateMap, _super);
    function CreateMap() {
        _super.call(this);
        /**地图 NPC 数组*/
        this.mapsNpc = [];
        /**地图 元素 数组*/
        this.mapsElement = [];
        /**地图 怪物 数组*/
        this.mapsMonster = [];
        /**被点击的 对象*/
        this.touchObj = new MonsterClass();
        /**被点击的 对象剪辑*/
        this.touchObjMc = new egret.MovieClip();
        /**被点击的对象的X坐标*/
        this.touchX = 0;
        /**将要传送到的地图ID*/
        this.outID = 0;
        this.j = 0; //延迟刷新计次
        /**对话内容的数组*/
        this.DuiHua = [];
        /**NPC对话 步长*/
        this.n = 0;
        /**NPC头像*/
        this.NpcTouXiang = "";
        /**主角头像*/
        this.RoleTouXiang = "role-1_png";
        /**对话*/
        this.DH = [];
    }
    var d = __define,c=CreateMap;p=c.prototype;
    /**清除所有 对象*/
    p.Clear = function () {
        this.removeChildren();
        this.mapsNpc = [];
        this.mapsElement = [];
        this.mapsMonster = [];
        return true;
    };
    p.mm = function (ditu_json, npc_json, duihua_json, monster_json) {
        if (this.Clear()) {
            //加载配置
            RES.getResAsync(ditu_json, this.startAnimation, this);
            RES.getResAsync(npc_json, this.startNpc, this);
            RES.getResAsync(duihua_json, this.startDuiHua, this);
            RES.getResAsync(monster_json, this.startMonster, this);
            console.log("调试输出：" + ditu_json + "  " + npc_json + "  " + ditu_json + "  " + monster_json); //调试
        }
    };
    /**初始化 元素*/
    p.newMoA = function (x, y, name, type) {
        var sky = new egret.Bitmap();
        sky.texture = RES.getRes(name);
        sky.x = x;
        sky.y = y;
        this.mapsElement.push(sky); //地图元素，无需 碰撞的
    };
    /**初始化 NPC*/
    p.newMoB = function (id, x, y, name, model, m_mc, type, task) {
        var mo = new MonsterClass();
        //console.log("调试输出：",model);//调试
        var step = 1;
        var m_json = "npc_json";
        var m_png = "npc_png";
        var m_mc = m_mc;
        switch (model) {
            case "goomba_png":
                mo.map_elementA = new Monster().startRole(m_json, m_png, m_mc, 1, 2, 500);
                //mo.map_elementB = new Monster().startRole(m_json,m_png,m_mc,1, 2, 0);
                //mo.map_elementC = new Monster().startRole(m_json,m_png,m_mc,1, 2, 0);
                //mo.map_elementD = new Monster().startRole(m_json,m_png,m_mc,1, 2, 0);
                mo.isRun = true;
                step = 1;
                break;
            default:
                console.log("调试输出：解析NPC的json出错"); //调试
                return;
        }
        mo.map_element_in = step;
        mo.map_elementA.x = mo.map_elementB.x = mo.map_elementC.x = mo.map_elementD.x = x;
        mo.map_elementA.y = mo.map_elementB.y = mo.map_elementC.y = mo.map_elementD.y = y;
        mo.map_element_type = type;
        mo.id = id;
        mo.name = name;
        mo.task = task;
        mo.txtName = new egret.TextField;
        mo.txtName.width = 120;
        mo.txtName.height = 22;
        mo.txtName.x = x + (mo.map_elementA.width - mo.txtName.width) / 2 - mo.map_elementA.width / 2;
        mo.txtName.y = y - mo.map_elementA.height - mo.txtName.height;
        mo.txtName.size = 18;
        mo.txtName.textAlign = "center";
        mo.txtName.text = name;
        this.mapsNpc.push(mo); //NPC
    };
    /**初始化 怪物*/
    p.newMoC = function (id, x, y, name, model, exp, hp, attack, type) {
        var mo = new MonsterClass();
        //console.log("调试输出：",name);//调试
        //console.log("调试输出："+id+"|"+x+"|"+y+"|"+name+"|"+model+"|"+exp+"|"+hp+"|"+attack+"|"+type);//调试
        /**怪的初始动作*/
        var step = 1;
        var m_json = "mo_json";
        var m_png = "mo_png";
        var m_mc = "mo1";
        switch (model) {
            case "turtle_png":
                mo.map_elementA = new Monster().startRole(m_json, m_png, m_mc, 1, 1, 500); //乌龟
                mo.map_elementB = new Monster().startRole(m_json, m_png, m_mc, 3, 1, 500);
                mo.map_elementC = new Monster().startRole(m_json, m_png, m_mc, 1, 2, 500);
                mo.map_elementD = new Monster().startRole(m_json, m_png, m_mc, 3, 2, 500);
                mo.isRun = true;
                step = 4;
                break;
            default:
                console.log("调试输出：解析NPC的json出错"); //调试
                return;
        }
        mo.map_element_in = step;
        mo.map_elementA.x = mo.map_elementB.x = mo.map_elementC.x = mo.map_elementD.x = x;
        mo.map_elementA.y = mo.map_elementB.y = mo.map_elementC.y = mo.map_elementD.y = y;
        mo.map_element_type = type;
        mo.id = id;
        mo.name = name;
        mo.model = model;
        mo.exp = exp;
        mo.hp = hp;
        mo.maxHp = hp;
        mo.attack = attack;
        mo.txtName = new egret.TextField;
        mo.txtName.width = 160;
        mo.txtName.height = 22;
        mo.txtName.x = x + (mo.map_elementA.width - mo.txtName.width) / 2;
        mo.txtName.y = y - mo.txtName.height;
        mo.txtName.size = 18;
        mo.txtName.textAlign = "center";
        mo.txtName.text = name;
        mo.txtHp = new egret.TextField;
        mo.txtHp.width = 80;
        mo.txtHp.height = 22;
        mo.txtHp.x = x + (mo.map_elementA.width - mo.txtHp.width) / 2;
        mo.txtHp.y = mo.txtName.y - mo.txtHp.height;
        mo.txtHp.size = 18;
        mo.txtHp.textAlign = "center";
        mo.txtHp.text = "HP:" + hp;
        this.mapsMonster.push(mo); //怪
    };
    /** 设置地图元素的x位置 */
    p.setMapX = function (x) {
        for (var index = 0; index < this.mapsElement.length; index++) {
            this.mapsElement[index].x += x;
        }
        for (var index = 0; index < this.mapsNpc.length; index++) {
            this.mapsNpc[index].map_elementA.x += x;
            this.mapsNpc[index].map_elementB.x += x;
            this.mapsNpc[index].map_elementC.x += x;
            this.mapsNpc[index].map_elementD.x += x;
            this.mapsNpc[index].txtName.x += x;
        }
        for (var index = 0; index < this.mapsMonster.length; index++) {
            this.mapsMonster[index].map_elementA.x += x;
            this.mapsMonster[index].map_elementB.x += x;
            this.mapsMonster[index].map_elementC.x += x;
            this.mapsMonster[index].map_elementD.x += x;
            this.mapsMonster[index].txtName.x += x;
            this.mapsMonster[index].txtHp.x += x;
        }
        //间隔10次，减少些刷新次数
        if (this.j >= 10) {
            this.j = 0;
            this.setDis(0);
        }
        else {
            this.j += 1;
        }
    };
    /** 显示舞台范围的对象 */
    p.setDis = function (x) {
        this.X(this.mapsElement, x);
        this.XX(this.mapsNpc, x);
        this.XX(this.mapsMonster, x);
    };
    p.X = function (mo, x) {
        for (var index = 0; index < mo.length; index++) {
            //判断是否在可显示范围
            if (mo[index].x > x - mo[index].width - 100 && mo[index].x < x + mo[index].width + ConstantA.stageW + 100) {
                this.addChild(mo[index]); //显示到舞台
            }
            else if (mo[index].stage) {
                this.removeChild(mo[index]); //从舞台删除
            }
        }
    };
    p.XX = function (mo, x) {
        var mp;
        var ii;
        for (var index = 0; index < mo.length; index++) {
            switch (mo[index].map_element_in) {
                case 1:
                    mp = mo[index].map_elementA;
                    break;
                case 2:
                    mp = mo[index].map_elementB;
                    break;
                case 3:
                    mp = mo[index].map_elementC;
                    break;
                case 4:
                    mp = mo[index].map_elementD;
                    break;
                default:
                    mp = mo[index].map_elementA;
                    break;
            }
            ii = mo[index].map_element_type;
            //判断是否在可显示范围
            if (mp.x > x - 100 && mp.x < x + ConstantA.stageW + 100) {
                //判断类型为NPC 加侦听器
                if (ii == 3 || ii == 4 || ii == 6) {
                    mp.touchEnabled = true;
                    mp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
                    this.addChild(mo[index].txtName); //显示到舞台
                    this.addChild(mo[index].txtHp); //显示到舞台
                }
                this.addChild(mp); //显示到舞台
            }
            else if (mp.stage) {
                if (ii == 3 || ii == 4 || ii == 6) {
                    mp.touchEnabled = false;
                    mp.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
                    this.removeChild(mo[index].txtName); //从舞台删除
                    this.removeChild(mo[index].txtHp); //从舞台删除
                }
                this.removeChild(mp); //从舞台删除
            }
        }
    };
    /**被选中的对象*/
    p.onTouch = function (e) {
        this.touchObjMc = e.target;
        var ma;
        var mo = new MonsterClass();
        var isMo = false;
        for (var index = 0; index < this.mapsNpc.length; index++) {
            switch (this.mapsNpc[index].map_element_in) {
                case 1:
                    ma = this.mapsNpc[index].map_elementA;
                    break;
                case 2:
                    ma = this.mapsNpc[index].map_elementB;
                    break;
                case 3:
                    ma = this.mapsNpc[index].map_elementC;
                    break;
                case 4:
                    ma = this.mapsNpc[index].map_elementD;
                    break;
                default:
                    ma = this.mapsNpc[index].map_elementA;
                    break;
            }
            if (e.target == ma) {
                mo = this.mapsNpc[index];
                isMo = true;
                break;
            }
        }
        if (!isMo) {
            for (var index = 0; index < this.mapsMonster.length; index++) {
                switch (this.mapsMonster[index].map_element_in) {
                    case 1:
                        ma = this.mapsMonster[index].map_elementA;
                        break;
                    case 2:
                        ma = this.mapsMonster[index].map_elementB;
                        break;
                    case 3:
                        ma = this.mapsMonster[index].map_elementC;
                        break;
                    case 4:
                        ma = this.mapsMonster[index].map_elementD;
                        break;
                    default:
                        ma = this.mapsMonster[index].map_elementA;
                        break;
                }
                if (e.target == ma) {
                    mo = this.mapsMonster[index];
                    isMo = true;
                    break;
                }
            }
        }
        if (!isMo) {
            console.log("调出:没有对应的NPC 或 地图元素"); //调试   
        }
        //NPC
        if (mo.map_element_type == 3) {
            //this.DuiHua = [];//清空对话组
            this.getDuiHua(mo.task); //获取对话内容
            if (this.NpcTouXiang == "") {
                this.NpcTouXiang = "npc-1_png"; //默认NPC头像
            }
            if (this.DuiHua.length > 0) {
                this.disDH(this.NpcTouXiang, this.DuiHua[0].txt);
                this.n += 1;
            }
            else {
                this.disDH(this.NpcTouXiang, "哦咿～哦咿～哦咿咿咿咿咿咿咿～\n暂时没有对话内容");
            }
        }
        //怪物
        if (mo.map_element_type == 6) {
            //console.log("调出:OOO");//调试   
            this.touchObj = mo;
            //调度事件 攻击
            this.touchX = ma.x;
            this.dispatchEvent(new egret.Event("GongJi"));
        }
        //传送
        if (mo.map_element_type == 4) {
            //console.log("调出:transfer " + mo.task);//调试
            this.outID = mo.task;
            //调度事件 切换地图
            this.dispatchEvent(new egret.Event("transfer"));
        }
    };
    /**显示对话框 和 对话内容*/
    p.disDH = function (npc_png, content) {
        ConstantA.element.npc_bg_1.source = "bg-npc_png";
        if (npc_png != "") {
            ConstantA.element.npc_bg_2.source = npc_png;
        }
        ConstantA.element.shut_1.source = "shut_png";
        ConstantA.element.dialogue_1.text = content;
        ConstantA.guiLayer.addElement(ConstantA.element.npc_bg_1);
        ConstantA.guiLayer.addElement(ConstantA.element.npc_bg_2);
        ConstantA.guiLayer.addElement(ConstantA.element.shut_1);
        ConstantA.guiLayer.addElement(ConstantA.element.dialogue_1);
        ConstantA.element.npc_bg_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onDialogue, this);
        ConstantA.element.npc_bg_2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onDialogue, this);
        ConstantA.element.shut_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onShut, this);
        ConstantA.element.dialogue_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onDialogue, this);
    };
    /**点击 切换 npc对话内容*/
    p.onDialogue = function (e) {
        if (this.n == this.DuiHua.length) {
            this.isShut();
            return;
        }
        //npc对话框
        if (this.DuiHua.length > 0 && this.n < this.DuiHua.length) {
            //console.log("调出:" + this.DuiHua.length + "|" + this.n + "|" + this.DuiHua[this.n].txt);//调试
            //切换对话头像
            if (this.DuiHua[this.n].type == 1) {
                this.disDH(this.NpcTouXiang, this.DuiHua[this.n].txt);
            }
            else if (this.DuiHua[this.n].type == 2) {
                this.disDH(this.RoleTouXiang, this.DuiHua[this.n].txt);
            }
            this.n += 1;
        }
    };
    /**关闭对话框*/
    p.onShut = function (e) {
        this.isShut();
    };
    p.isShut = function () {
        this.n = 0;
        ConstantA.element.dialogue_1.text = "";
        ConstantA.guiLayer.removeElement(ConstantA.element.npc_bg_1);
        ConstantA.guiLayer.removeElement(ConstantA.element.npc_bg_2);
        ConstantA.guiLayer.removeElement(ConstantA.element.shut_1);
        ConstantA.guiLayer.removeElement(ConstantA.element.dialogue_1);
        ConstantA.element.npc_bg_1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onDialogue, this);
        ConstantA.element.npc_bg_2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onDialogue, this);
        ConstantA.element.shut_1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onShut, this);
        ConstantA.element.dialogue_1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onDialogue, this);
    };
    p.removeMo = function (map_element) {
        this.removeChild(map_element);
    };
    p.addMo = function (map_element) {
        this.addChild(map_element);
    };
    /**
    * 解析地图的 元素 的json文件
    *
    */
    p.startAnimation = function (result) {
        for (var count = 0; count < result.length; count++) {
            var lineArr = result[count];
            var info;
            var x = 0;
            var y = 0;
            var name = "";
            var type = 0;
            for (var index = 0; index < lineArr.length; index++) {
                info = lineArr[index];
                x = parseInt(info["x"]);
                y = parseInt(info["y"]);
                name = info["name"];
                type = parseInt(info["type"]);
                //console.log("调试输出：",x,y,name,type);//调试
                this.newMoA(x, y, name, type);
            }
        }
        this.setDis(0); //刷新显示舞台对象
    };
    /**
    * 解析NPC的json文件
    *
    */
    p.startNpc = function (result) {
        for (var count = 0; count < result.length; count++) {
            var lineArr = result[count];
            var info;
            var id = 0;
            var x = 0;
            var y = 0;
            var name = "";
            var model = "";
            var m_mc = "";
            var type = 0;
            var task = 0;
            for (var index = 0; index < lineArr.length; index++) {
                info = lineArr[index];
                id = parseInt(info["id"]);
                x = parseInt(info["x"]);
                y = parseInt(info["y"]);
                name = info["name"];
                model = info["model"];
                m_mc = info["m_mc"];
                type = parseInt(info["type"]);
                task = parseInt(info["task"]);
                //console.log("调试输出："+x+y+name+type);//调试
                this.newMoB(id, x, y, name, model, m_mc, type, task);
            }
        }
        this.setDis(0); //刷新显示舞台对象
    };
    /**
    * 解析对话的json文件
    *
    */
    p.startDuiHua = function (result) {
        for (var count = 0; count < result.length; count++) {
            var lineArr = result[count];
            var info;
            for (var index = 0; index < lineArr.length; index++) {
                info = lineArr[index];
                this.DH.push(info);
            }
        }
        //this.getDuiHua(2);
    };
    /**
    * 获取对话
    *
    */
    p.getDuiHua = function (task_id) {
        this.DuiHua = [];
        this.NpcTouXiang = "";
        var info;
        var id = 0;
        var content = "";
        var dh;
        for (var count = 0; count < this.DH.length; count++) {
            info = this.DH[count];
            id = parseInt(info["id"]);
            //console.log("调出M:" + id);//调试
            if (id == task_id) {
                this.NpcTouXiang = info["icon"]; //NPC头像
                for (var a = 1; a < 30; a++) {
                    if (info["A" + a] != undefined) {
                        content = info["A" + a];
                        dh = new NpcDH();
                        dh.type = 1; //1为NPC说话
                        dh.txt = content;
                        this.DuiHua.push(dh);
                    }
                    if (info["B" + a] != undefined) {
                        content = info["B" + a];
                        dh = new NpcDH();
                        dh.type = 2; //2为主角说话
                        dh.txt = content;
                        this.DuiHua.push(dh);
                    }
                    if (content == undefined) {
                        break;
                    }
                }
            }
        }
    };
    /**
    * 解析 怪物 的json文件
    *
    */
    p.startMonster = function (result) {
        for (var count = 0; count < result.length; count++) {
            var lineArr = result[count];
            var info;
            var id = 0;
            var x = 0;
            var y = 0;
            var name = "";
            var model = "";
            var exp = 0;
            var hp = 0;
            var attack = 0;
            var type = 0;
            for (var index = 0; index < lineArr.length; index++) {
                info = lineArr[index];
                id = parseInt(info["id"]);
                x = parseInt(info["x"]);
                y = parseInt(info["y"]);
                name = info["name"];
                model = info["model"];
                exp = parseInt(info["exp"]);
                hp = parseInt(info["hp"]);
                attack = parseInt(info["attack"]);
                type = parseInt(info["type"]);
                //console.log("调试输出：" + id + "|" + x + "|" + y + "|" + name + "|" + model + "|" + exp + "|" + hp + "|" + attack + "|" + type);//调试
                this.newMoC(id, x, y, name, model, exp, hp, attack, type);
            }
        }
        this.setDis(0); //刷新显示舞台对象
    };
    return CreateMap;
})(egret.Sprite);
egret.registerClass(CreateMap,"CreateMap");
