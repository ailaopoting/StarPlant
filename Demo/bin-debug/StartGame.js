/**
 * Created by Administrator on 2015/5/16.
 * 期待:QQ804772778
 */
var StartGame = (function (_super) {
    __extends(StartGame, _super);
    //=====================主代码开始=======================
    function StartGame() {
        _super.call(this);
        /**地图*/
        this.ditu = new CreateMap();
        /**加载*/
        this.loadRes = new LoadRes();
        /**角色池*/
        this.RolePool_0_1 = new RolePool();
        /**主角*/
        this.Role_0_1 = new role();
        /**武器池*/
        this.WeaponPool_0_1 = new WeaponPool();
        /**武器*/
        this.Weapon_0_1 = new Weapon();
        /**角色属性*/
        this.roleClass = ConstantA.roleClass;
        /**主角标题*/
        this.roleTitle = new RoleTitle();
        /**主角初始的 XY*/
        this.startPoint = new Point();
        /**主角的 XY*/
        this.downPoint = new Point();
        /**主角运动速度*/
        this.speed = 3;
        /**主角的 方向*/
        this.M = 1;
        /**主角定时器*/
        this.GameFrame = new egret.Timer(1000 / 60);
        /**地图X坐标偏移*/
        this.offset = ConstantA.stageW / 2;
        /**攻击事件定时器*/
        this.GongJiFrame = new egret.Timer(1000 / 2);
        /**首次加载角色是否已经创建完毕*/
        this.isCreateRo = false;
        /**升级经验条*/
        this.eUI = new expUI();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=StartGame;p=c.prototype;
    p.onAddToStage = function (event) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.createView();
    };
    p.createView = function () {
        this.createGameScene(); //创建游戏场景
    };
    //===============================创建游戏场景==================================
    /**
     * 创建游戏场景
     */
    p.createGameScene = function () {
        //添加 主角走动 的定时器 事件侦听
        this.GameFrame.addEventListener(egret.TimerEvent.TIMER, this.onGameFrame, this);
        //添加 攻击事件 的定时器
        this.GongJiFrame.addEventListener(egret.TimerEvent.TIMER, this.onGongJiFrame, this);
        //加载UI界面
        ConstantA.element = new StateGameUI();
        ConstantA.guiLayer.addElement(ConstantA.element);
        ConstantA.element.btn1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonA_Click, this);
        ConstantA.element.btn2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonB_Click, this);
        ConstantA.element.btn3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonC_Click, this);
        ConstantA.element.btn4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonD_Click, this);
        //设置触摸层
        this.touchLayer = new egret.TextField;
        this.touchLayer.x = this.touchLayer.y = 0;
        this.touchLayer.width = ConstantA.stageW;
        this.touchLayer.height = ConstantA.stageH;
        this.addChild(this.touchLayer);
        //this.touchLayer.touchEnabled = true;//触摸启用(这里已改为 所有可选中对象创建完毕 才开启)
        this.touchLayer.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouch, this);
        this.touchLayer.addEventListener(egret.TouchEvent.TOUCH_END, this.onStop, this);
        this.touchLayer.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onStop, this);
        this.addChild(this.loadRes); //这个主要是用来显示 加载类 里面的 UI
        //如果默认地图ID为空，地图ID = 1
        if (this.roleClass.map == 0) {
            this.roleClass.map = 1;
        }
        this.loadMap();
        this.loadPlayer();
        //侦听 全部资源加载完毕 事件
        this.loadRes.addEventListener("stopRes", this.onRes, this);
    };
    /**加载地图*/
    p.loadMap = function () {
        var Group;
        Group = "map_" + this.roleClass.map;
        this.loadRes.onAddToStage(Group);
        this.loadRes.addEventListener(Group, this.onRes, this);
    };
    /**加载角色*/
    p.loadPlayer = function () {
        var Group;
        Group = "player0_1";
        this.loadRes.onAddToStage(Group);
        this.loadRes.addEventListener(Group, this.onRes, this);
    };
    /**响应 结束游戏按钮1 的事件*/
    p.onButtonA_Click = function (event) {
        //删除所有侦听器（会不会是多此一举呢？）
        ConstantA.element.btn1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonA_Click, this);
        ConstantA.element.btn2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonB_Click, this);
        ConstantA.element.btn3.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonC_Click, this);
        ConstantA.element.btn4.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonD_Click, this);
        this.touchLayer.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouch, this);
        this.touchLayer.removeEventListener(egret.TouchEvent.TOUCH_END, this.onStop, this);
        this.touchLayer.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onStop, this);
        this.GameFrame.stop;
        this.GameFrame.removeEventListener(egret.TimerEvent.TIMER, this.onGameFrame, this);
        this.GongJiFrame.stop;
        this.GongJiFrame.removeEventListener(egret.TimerEvent.TIMER, this.onGongJiFrame, this);
        this.ditu.removeEventListener("GongJi", this.onDitu, this);
        this.ditu.removeEventListener("transfer", this.onDitu, this);
        ConstantA.BgSound.close(); //停止背景音乐
        //派发事件 结束游戏（给 调用和侦听 这个程序 的 Main 发消息GameOver，游戏结束了）
        this.dispatchEvent(new egret.Event("GameOver"));
    };
    /**响应 复活按钮2 的事件*/
    p.onButtonB_Click = function (event) {
        egret.gui.Alert.show("满血复活\n将消耗100个元宝！");
        this.roleClass.hp = this.roleClass.maxHp;
        this.roleTitle.setHP(this.roleClass.hp);
    };
    /**响应 商城按钮3 的事件*/
    p.onButtonC_Click = function (event) {
        //获取音乐文件
        //this.BgSound = RES.getRes("bg_1_mp3");
        //this.BgSound.play();
        ConstantA.BgSound.close();
        //this.BgSound.pause;
        //this.BgSound.destroy;
        //this.BgSound = new egret.Sound();
        //this.BgSound.play(true);
        //console.log("调试输出：Sound 尼玛丫的停不下来....")
        egret.gui.Alert.show("暂未开发\n敬请期待！");
    };
    /**响应 切换地图 按钮4 的事件*/
    p.onButtonD_Click = function (event) {
        egret.gui.Alert.show("暂未开发\n敬请期待！");
    };
    /**响应 资源加载事件*/
    p.onRes = function (e) {
        //console.log("调试输出e："+e.type)
        //地图
        if (e.type == "map_" + this.roleClass.map) {
            var A = this.roleClass.map;
            if (this.ditu.parent) {
            }
            else {
                this.addChild(this.ditu);
                this.ditu.addEventListener("GongJi", this.onDitu, this); //加地图侦听 攻击事件
                this.ditu.addEventListener("transfer", this.onDitu, this); //侦听 地图传送事件
            }
            this.ditu.mm("ditu" + A + "_json", "npc" + A + "_json", "duihua" + A + "_json", "monster" + A + "_json");
        }
        //角色
        if (e.type == "player0_1") {
            this.startPoint.x = ConstantA.stageW / 2;
            ;
            this.startPoint.y = 500;
            this.tiaozheng(3);
            if (this.roleClass.level == 1) {
                //初始化 角色属性
                this.roleClass.name = "萌妹子";
                this.roleClass.maxHp = 120;
                this.roleClass.hp = this.roleClass.maxHp;
                this.roleClass.attack = 2;
            }
            //角色标题
            this.roleTitle.setName(this.roleClass.name);
            this.roleTitle.setHP(this.roleClass.hp);
            this.addChild(this.roleTitle);
        }
        //全部加载结束
        if (e.type == "stopRes") {
            this.loadRes.removeEventListener("map_1", this.onRes, this); //删除侦听器
            this.loadRes.removeEventListener("player0_1", this.onRes, this);
            this.loadRes.removeEventListener("stopRes", this.onRes, this);
            console.log("在StartGame类的所有资源 加载完毕"); //调试
            if (!this.eUI.parent) {
                //第一个经验条
                this.eUI.y = ConstantA.stageH - 260 - this.eUI.height - 10;
                this.addChild(this.eUI);
                var lvExp = parseInt(ConstantA.levelExp["" + (this.roleClass.level + 1)]); //升级所需经验
                this.eUI.onProgress(this.roleClass.exp, lvExp, "  Lv:" + this.roleClass.level + "  Att:" + this.roleClass.attack);
            }
            //删除 loadResUI 的显示
            this.removeChild(this.loadRes); //这个主要是用来显示 加载类 里面的 UI
        }
        else {
            //调整 各显示对象的 层次
            if (this.touchLayer.parent) {
                this.setChildIndex(this.touchLayer, this.numChildren); //触摸层
            }
            if (this.ditu.parent) {
                this.setChildIndex(this.ditu, this.numChildren); //地图
            }
            if (this.Role_0_1.parent) {
                this.setChildIndex(this.Role_0_1, this.numChildren); //主角
            }
            if (this.roleTitle.parent) {
                this.setChildIndex(this.roleTitle, this.numChildren); //标题
            }
            if (this.Weapon_0_1.parent) {
                this.setChildIndex(this.Weapon_0_1, this.numChildren); //武器
            }
            if (this.eUI.parent) {
                this.setChildIndex(this.eUI, this.numChildren); //经验条
            }
            if (this.loadRes.parent) {
                this.setChildIndex(this.loadRes, this.numChildren); //加载资源时显示的 进度条UI
            }
        }
    };
    /**响应地图事件*/
    p.onDitu = function (e) {
        //console.log("调试输出：地图事件" + e.type);
        if (e.type == "GongJi") {
            if (this.ditu.touchX > this.Role_0_1.x) {
                //调整怪的方向动作
                this.ditu.touchObj.map_element_in = 3;
                this.ditu.removeMo(this.ditu.touchObjMc);
                this.ditu.addMo(this.ditu.touchObj.map_elementC);
                //调整主角的动作
                this.tiaozheng(1);
            }
            else {
                this.ditu.touchObj.map_element_in = 4;
                this.ditu.removeMo(this.ditu.touchObjMc);
                this.ditu.addMo(this.ditu.touchObj.map_elementD);
                this.tiaozheng(2);
            }
            this.GongJiFrame.start(); //启动攻击事件定时器
        }
        else if (e.type == "transfer") {
            if (this.ditu.parent) {
                this.ditu.removeChildren(); //容器实例的子级列表中删除所有 对象实例。
            }
            RES.destroyRes("map_" + this.roleClass.map); //销毁缓存的资源
            //传送到的地图ID
            this.roleClass.map = this.ditu.outID;
            //=============================
            this.addChild(this.loadRes); //这个主要是用来显示 加载类 里面的 UI
            this.loadMap();
            this.loadRes.addEventListener("stopRes", this.onRes, this); //侦听 全部资源加载完毕 事件
        }
    };
    /**响应攻击事件*/
    p.onGongJiFrame = function (e) {
        //刷新怪标题
        if (this.ditu.touchObj.hp > 0) {
            this.ditu.touchObj.hp -= this.roleClass.attack;
            if (this.ditu.touchObj.hp < 0)
                this.ditu.touchObj.hp = 0;
            this.ditu.touchObj.txtHp.text = "" + this.ditu.touchObj.hp;
        }
        else {
            var lvExp = parseInt(ConstantA.levelExp["" + (this.roleClass.level + 1)]); //升级所需经验
            if (!isNaN(lvExp)) {
                this.roleClass.exp += this.ditu.touchObj.exp;
                //是否满足升级条件
                if (this.roleClass.exp >= lvExp) {
                    this.roleClass.level += 1;
                    this.roleClass.attack += 5; //攻击+1
                    this.roleClass.maxHp += 10;
                    this.roleClass.hp = this.roleClass.maxHp;
                    this.roleClass.exp = 0;
                }
            }
            else {
                this.GongJiFrame.stop();
                this.tiaozheng(3); //角色动作，正面站立
            }
            //console.log( "调试输出：被攻击对象的lvExp:" + lvExp + " Exp:" + this.roleClass.exp + " lv:" + this.roleClass.level + " att:" + this.roleClass.attack );
            this.eUI.onProgress(this.roleClass.exp, lvExp, "  Lv:" + this.roleClass.level + "  Att:" + this.roleClass.attack);
            this.ditu.touchObj.hp = this.ditu.touchObj.maxHp; //怪死亡 后，HP复位
            this.ditu.touchObj.txtHp.text = "HP:" + this.ditu.touchObj.hp;
            return;
        }
        //刷新主角标题
        if (this.roleClass.hp > 0) {
            this.roleClass.hp -= this.ditu.touchObj.attack;
            if (this.roleClass.hp < 0) {
                this.roleClass.hp = 0;
            }
            this.roleTitle.setHP(this.roleClass.hp);
        }
        else {
            this.GongJiFrame.stop();
            this.tiaozheng(6); //角色动作，死亡
        }
    };
    /**响应屏幕的鼠标点击*/
    p.onTouch = function (e) {
        //先判断 对象 是否已显示到舞台
        if (this.isCreateRo) {
            //获取到用户点击的点
            this.downPoint.x = e.stageX;
            this.downPoint.y = e.stageY;
            //console.log("调试输出：" + this.downPoint.x + "||" + this.downPoint.y);//调试
            //计算角速度
            this.angleSpeed = Math.atan2(this.downPoint.y - this.Role_0_1.y, this.downPoint.x - this.Role_0_1.x);
            //选择方向
            this.M = this.FangXiang(this.angleSpeed * 180 / Math.PI);
            if (this.M == 1) {
                this.tiaozheng(4);
            }
            else {
                this.tiaozheng(5);
            }
            this.GameFrame.start(); //启用 走动定时器
            this.ditu.touchObj.txtHp.text = "HP:" + this.ditu.touchObj.hp; //停止攻击后 加上字符串 HP:
            this.GongJiFrame.stop(); //停用 攻击定时器
        }
    };
    /**判断方向 1右边，2左边*/
    p.FangXiang = function (N) {
        var F = 1;
        if (N <= 90 && N >= -90) {
            F = 1;
        }
        else {
            F = 2;
        }
        return F;
    };
    /**调整角色动作
    * n:起始动作
    * 1,右边-攻击 2,左边-攻击 3,正面-站立 4,右边-走 5,左边-走 6,左边-死亡
    */
    p.tiaozheng = function (n) {
        var J = new Point();
        //先判断 是否已有 对象 显示到舞台
        if (this.isCreateRo) {
            this.Role_0_1.isTimer(false); //从 舞台 删除前，先停止 对象里的 定时器
            this.removeChild(this.Role_0_1); //清除显示
            this.removeChild(this.Weapon_0_1);
            J.x = this.Role_0_1.x;
            J.y = this.Role_0_1.y;
        }
        else {
            J.x = this.startPoint.x;
            J.y = this.startPoint.y;
        }
        switch (n) {
            case 1:
                //右边-攻击
                this.Role_0_1 = this.RolePool_0_1.getRole(1, 1, 7, 100, true); //key ,起始帧，帧数，帧间隔(毫秒)
                this.Weapon_0_1 = this.WeaponPool_0_1.getRole(1, 1, 7, 100, true); //key ,起始帧，帧数，帧间隔(毫秒)
                this.Weapon_0_1.scaleX = this.Role_0_1.scaleX = -1; //水平反转
                this.addChild(this.Weapon_0_1);
                this.addChild(this.Role_0_1);
                break;
            case 2:
                //左边-攻击
                this.Role_0_1 = this.RolePool_0_1.getRole(2, 1, 7, 100, true);
                this.Weapon_0_1 = this.WeaponPool_0_1.getRole(2, 1, 7, 100, true);
                this.addChild(this.Weapon_0_1);
                this.addChild(this.Role_0_1);
                break;
            case 3:
                //正面-站立
                this.Role_0_1 = this.RolePool_0_1.getRole(3, 8, 7, 200, true);
                this.Weapon_0_1 = this.WeaponPool_0_1.getRole(3, 8, 7, 200, true);
                this.addChild(this.Weapon_0_1);
                this.addChild(this.Role_0_1);
                break;
            case 4:
                //右边-走
                this.Role_0_1 = this.RolePool_0_1.getRole(4, 15, 7, 200, true);
                this.Weapon_0_1 = this.WeaponPool_0_1.getRole(4, 15, 7, 200, true);
                this.Weapon_0_1.scaleX = this.Role_0_1.scaleX = -1; //水平反转
                this.addChild(this.Weapon_0_1);
                this.addChild(this.Role_0_1);
                break;
            case 5:
                //左边-走
                this.Role_0_1 = this.RolePool_0_1.getRole(5, 15, 7, 200, true);
                this.Weapon_0_1 = this.WeaponPool_0_1.getRole(5, 15, 7, 200, true);
                this.addChild(this.Weapon_0_1);
                this.addChild(this.Role_0_1);
                break;
            case 6:
                //左边-死亡
                this.Role_0_1 = this.RolePool_0_1.getRole(6, 22, 8, 200, false);
                this.Weapon_0_1 = this.WeaponPool_0_1.getRole(6, 22, 8, 200, false);
                this.addChild(this.Weapon_0_1);
                this.addChild(this.Role_0_1);
                break;
        }
        this.Weapon_0_1.x = this.Role_0_1.x = J.x;
        this.Weapon_0_1.y = this.Role_0_1.y = J.y;
        //设置角色标题的位置
        this.roleTitle.x = this.Role_0_1.x + (this.Role_0_1.width - this.roleTitle.width) / 2 - this.Role_0_1.width / 2;
        this.roleTitle.y = this.Role_0_1.y - this.Role_0_1.height - this.roleTitle.height;
        //设置 标题 到最顶层
        if (this.roleTitle.parent) {
            this.setChildIndex(this.roleTitle, this.numChildren);
        }
        //首次 创建角色完毕 才能开启 触摸
        if (!this.isCreateRo) {
            this.isCreateRo = true;
            this.touchLayer.touchEnabled = true; //触摸启用
        }
    };
    /**响应 控制角色走动的 定时器 事件*/
    p.onGameFrame = function (e) {
        //计算出 x 、 y速度
        var vx = -Math.round(Math.cos(this.angleSpeed) * this.speed);
        //嗷嗷嗷....这里个VX 正负怎么会反过来的呢？？暂时不理了
        this.ditu.setMapX(vx);
        this.offset -= vx;
    };
    /**响应 触摸放开 事件*/
    p.onStop = function (e) {
        //console.log( "调试输出X：" + this.offset);
        this.GameFrame.stop();
        this.tiaozheng(3); //调整 角色动作，正面-站立
    };
    return StartGame;
})(egret.DisplayObjectContainer);
egret.registerClass(StartGame,"StartGame");
