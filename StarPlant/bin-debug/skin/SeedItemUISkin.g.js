var skin;
(function (skin) {
    var SeedItemUISkin = (function (_super) {
        __extends(SeedItemUISkin, _super);
        function SeedItemUISkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [800, 500]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.tabBtn0_i(), this.tabBtn1_i(), this.tabBtn2_i(), this.tabBtn3_i(), this.goPlant_i(), this.goAllPlant_i(), this.closeBtn_i(), this.scroller_i(), this.tabSelected0_i(), this.tabSelected1_i(), this.tabSelected2_i(), this.tabSelected3_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        var d = __define,c=SeedItemUISkin;p=c.prototype;
        d(p, "skinParts"
            ,function () {
                return SeedItemUISkin._skinParts;
            }
        );
        p.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "width", "x", "y"], ["kuang_png", 272, 122, 529]);
            return t;
        };
        p.closeBtn_i = function () {
            var t = new egret.gui.Button();
            this.closeBtn = t;
            this.__s(t, ["height", "skinName", "width", "x", "y"], [25, new egret.gui.ButtonSkin("closeBtn_png"), 29, 367, 231]);
            return t;
        };
        p.goAllPlant_i = function () {
            var t = new egret.gui.Button();
            this.goAllPlant = t;
            t.setStyle("size", 18);
            t.setStyle("verticalAlign", "middle");
            this.__s(t, ["height", "label", "skinName", "width", "x", "y"], [34, "一键全种", new egret.gui.ButtonSkin("btnStyle1_png"), 85, 280, 550]);
            return t;
        };
        p.goPlant_i = function () {
            var t = new egret.gui.Button();
            this.goPlant = t;
            t.setStyle("size", 18);
            t.setStyle("verticalAlign", "middle");
            this.__s(t, ["height", "label", "skinName", "width", "x", "y"], [34, "种植", new egret.gui.ButtonSkin("btnStyle1_png"), 85, 145, 550]);
            return t;
        };
        p.group_i = function () {
            var t = new egret.gui.Group();
            this.group = t;
            this.__s(t, ["height", "width"], [44, 70]);
            return t;
        };
        p.scroller_i = function () {
            var t = new egret.gui.Scroller();
            this.scroller = t;
            this.__s(t, ["height", "width", "x", "y"], [244, 246, 133, 293]);
            t.viewport = this.group_i();
            return t;
        };
        p.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [393, egret.gui.getScale9Grid("14,52,250,288"), "uiBgStyle2_png", 299, 109, 216]);
            return t;
        };
        p.tabBtn0_i = function () {
            var t = new egret.gui.Button();
            this.tabBtn0 = t;
            t.setStyle("bold", true);
            t.setStyle("size", 18);
            t.setStyle("textAlign", "center");
            t.setStyle("textColor", 0xF8EF06);
            t.setStyle("verticalAlign", "middle");
            this.__s(t, ["height", "label", "skinName", "width", "x", "y"], [31, "神器", new egret.gui.ButtonSkin("btnStyle1_png", "btnStyle1_png", "btnStyle1_png"), 71, 126, 261]);
            return t;
        };
        p.tabBtn1_i = function () {
            var t = new egret.gui.Button();
            this.tabBtn1 = t;
            t.setStyle("bold", true);
            t.setStyle("size", 18);
            t.setStyle("textAlign", "center");
            t.setStyle("textColor", 0xF8EF06);
            t.setStyle("verticalAlign", "middle");
            this.__s(t, ["height", "label", "skinName", "width", "x", "y"], [31, "机甲", new egret.gui.ButtonSkin("btnStyle1_png", "btnStyle1_png", "btnStyle1_png"), 71, 191, 261]);
            return t;
        };
        p.tabBtn2_i = function () {
            var t = new egret.gui.Button();
            this.tabBtn2 = t;
            t.setStyle("bold", true);
            t.setStyle("size", 18);
            t.setStyle("textAlign", "center");
            t.setStyle("textColor", 0xF8EF06);
            t.setStyle("verticalAlign", "middle");
            this.__s(t, ["height", "label", "skinName", "width", "x", "y"], [31, "神兽", new egret.gui.ButtonSkin("btnStyle1_png", "btnStyle1_png", "btnStyle1_png"), 71, 256, 261]);
            return t;
        };
        p.tabBtn3_i = function () {
            var t = new egret.gui.Button();
            this.tabBtn3 = t;
            t.setStyle("bold", true);
            t.setStyle("size", 18);
            t.setStyle("textAlign", "center");
            t.setStyle("textColor", 0xF8EF06);
            t.setStyle("verticalAlign", "middle");
            this.__s(t, ["height", "label", "skinName", "width", "x", "y"], [31, "植物", new egret.gui.ButtonSkin("btnStyle1_png", "btnStyle1_png", "btnStyle1_png"), 71, 321, 261]);
            return t;
        };
        p.tabSelected0_i = function () {
            var t = new egret.gui.Button();
            this.tabSelected0 = t;
            t.setStyle("bold", true);
            t.setStyle("size", 18);
            t.setStyle("textAlign", "center");
            t.setStyle("textColor", 0xF84F06);
            t.setStyle("verticalAlign", "middle");
            this.__s(t, ["height", "label", "skinName", "width", "x", "y"], [31, "神器", new egret.gui.ButtonSkin("btnStyle1_png", "btnStyle1_png", "btnStyle1_png"), 71, 127, 261]);
            return t;
        };
        p.tabSelected1_i = function () {
            var t = new egret.gui.Button();
            this.tabSelected1 = t;
            t.setStyle("bold", true);
            t.setStyle("size", 18);
            t.setStyle("textAlign", "center");
            t.setStyle("textColor", 0xF84F06);
            t.setStyle("verticalAlign", "middle");
            this.__s(t, ["height", "label", "skinName", "width", "x", "y"], [31, "机甲", new egret.gui.ButtonSkin("btnStyle1_png", "btnStyle1_png", "btnStyle1_png"), 71, 192, 261]);
            return t;
        };
        p.tabSelected2_i = function () {
            var t = new egret.gui.Button();
            this.tabSelected2 = t;
            t.setStyle("bold", true);
            t.setStyle("size", 18);
            t.setStyle("textAlign", "center");
            t.setStyle("textColor", 0xF82A06);
            t.setStyle("verticalAlign", "middle");
            this.__s(t, ["height", "label", "skinName", "width", "x", "y"], [31, "神兽", new egret.gui.ButtonSkin("btnStyle1_png", "btnStyle1_png", "btnStyle1_png"), 71, 256, 261]);
            return t;
        };
        p.tabSelected3_i = function () {
            var t = new egret.gui.Button();
            this.tabSelected3 = t;
            t.setStyle("bold", true);
            t.setStyle("size", 18);
            t.setStyle("textAlign", "center");
            t.setStyle("textColor", 0xF84F06);
            t.setStyle("verticalAlign", "middle");
            this.__s(t, ["height", "label", "skinName", "width", "x", "y"], [31, "植物", new egret.gui.ButtonSkin("btnStyle1_png", "btnStyle1_png", "btnStyle1_png"), 71, 321, 261]);
            return t;
        };
        SeedItemUISkin._skinParts = ["tabBtn0", "tabBtn1", "tabBtn2", "tabBtn3", "goPlant", "goAllPlant", "closeBtn", "group", "scroller", "tabSelected0", "tabSelected1", "tabSelected2", "tabSelected3"];
        return SeedItemUISkin;
    })(egret.gui.Skin);
    skin.SeedItemUISkin = SeedItemUISkin;
    egret.registerClass(SeedItemUISkin,"skin.SeedItemUISkin");
})(skin || (skin = {}));
