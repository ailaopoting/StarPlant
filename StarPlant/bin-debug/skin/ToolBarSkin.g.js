var skin;
(function (skin) {
    var ToolBarSkin = (function (_super) {
        __extends(ToolBarSkin, _super);
        function ToolBarSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [800, 500]);
            this.elementsContent = [this.giftBtn_i(), this.setBtn_i(), this.goPkBtn_i(), this.addSpeedBtn_i(), this.nextDiBtn_i(), this.goDoorBtn_i(), this.gloryBtn_i(), this.shopBtn_i(), this.preDiBtn_i(), this.rankBtn_i(), this.helpBtn_i(), this.eventTip_i(), this.buyDi_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        var d = __define,c=ToolBarSkin;p=c.prototype;
        d(p, "skinParts"
            ,function () {
                return ToolBarSkin._skinParts;
            }
        );
        p.buyDi_i = function () {
            var t = new egret.gui.Button();
            this.buyDi = t;
            this.__s(t, ["skinName", "x", "y"], [new egret.gui.ButtonSkin("buyDi_up_png", "buyDi_down_png"), 420, 434]);
            return t;
        };
        p.eventTip_i = function () {
            var t = new egret.gui.Button();
            this.eventTip = t;
            this.__s(t, ["skinName", "x", "y"], [new egret.gui.ButtonSkin("eventTip_up_png", "eventTip_down_png"), 250, 63]);
            return t;
        };
        p.giftBtn_i = function () {
            var t = new egret.gui.Button();
            this.giftBtn = t;
            t.setStyle("size", 20);
            t.setStyle("textColor", 0x150707);
            this.__s(t, ["bottom", "enabled", "horizontalCenter", "left", "skinName", "top", "width"], [698, true, 101.5, 326, new egret.gui.ButtonSkin("giftBtn_up_png", "giftBtn_down_png", "giftBtn_disable_png"), 54, 51]);
            return t;
        };
        p.gloryBtn_i = function () {
            var t = new egret.gui.Button();
            this.gloryBtn = t;
            this.__s(t, ["skinName", "x", "y"], [new egret.gui.ButtonSkin("glory_up_png", "glory_down_png", "glory_disable_png"), 139, 682]);
            return t;
        };
        p.goDoorBtn_i = function () {
            var t = new egret.gui.Button();
            this.goDoorBtn = t;
            this.__s(t, ["skinName", "x", "y"], [new egret.gui.ButtonSkin("goDoor_up_png", "goDoor_down_png", "goDoor_disable_png"), 264, 682]);
            return t;
        };
        p.goPkBtn_i = function () {
            var t = new egret.gui.Button();
            this.goPkBtn = t;
            this.__s(t, ["skinName", "x", "y"], [new egret.gui.ButtonSkin("goPk_up_png", "goPk_down_png", "goPk_disable_png"), 411, 145]);
            return t;
        };
        p.helpBtn_i = function () {
            var t = new egret.gui.Button();
            this.helpBtn = t;
            this.__s(t, ["height", "skinName", "width", "x", "y"], [41, new egret.gui.ButtonSkin("help_up_png", "help_down_png"), 44, 393, 56]);
            return t;
        };
        p.nextDiBtn_i = function () {
            var t = new egret.gui.Button();
            this.nextDiBtn = t;
            this.__s(t, ["height", "skinName", "width", "x", "y"], [40, new egret.gui.ButtonSkin("diNextBtn_up_png", "diNextBtn_down_png", "diNextBtn_disable_png"), 38, 242, 545]);
            return t;
        };
        p.preDiBtn_i = function () {
            var t = new egret.gui.Button();
            this.preDiBtn = t;
            this.__s(t, ["height", "skinName", "width", "x", "y"], [37, new egret.gui.ButtonSkin("diPreBtn_disable_png", "diPreBtn_down_png", "diPreBtn_disable_png"), 37, 80, 548]);
            return t;
        };
        p.rankBtn_i = function () {
            var t = new egret.gui.Button();
            this.rankBtn = t;
            this.__s(t, ["skinName", "x", "y"], [new egret.gui.ButtonSkin("rank_up_png", "rank_down_png", "rank_disable_png"), 388, 686]);
            return t;
        };
        p.setBtn_i = function () {
            var t = new egret.gui.Button();
            this.setBtn = t;
            this.__s(t, ["height", "skinName", "width", "x", "y"], [38, new egret.gui.ButtonSkin("set_up_png", "set_down_png"), 40, 454, 58]);
            return t;
        };
        p.shopBtn_i = function () {
            var t = new egret.gui.Button();
            this.shopBtn = t;
            this.__s(t, ["skinName", "x", "y"], [new egret.gui.ButtonSkin("shop_up_png", "shop_down_png"), 15, 680]);
            return t;
        };
        p.addSpeedBtn_i = function () {
            var t = new egret.gui.Button();
            this.addSpeedBtn = t;
            this.__s(t, ["height", "skinName", "width", "x", "y"], [203, new egret.gui.ButtonSkin("addSpeed_up_png", "addSpeed_down_png", "addSpeed_disable_png"), 199, 290, 217]);
            return t;
        };
        ToolBarSkin._skinParts = ["giftBtn", "setBtn", "goPkBtn", "addSpeedBtn", "nextDiBtn", "goDoorBtn", "gloryBtn", "shopBtn", "preDiBtn", "rankBtn", "helpBtn", "eventTip", "buyDi"];
        return ToolBarSkin;
    })(egret.gui.Skin);
    skin.ToolBarSkin = ToolBarSkin;
    egret.registerClass(ToolBarSkin,"skin.ToolBarSkin");
})(skin || (skin = {}));
