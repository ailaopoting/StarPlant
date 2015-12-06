var skin;
(function (skin) {
    var BuyDiSkin = (function (_super) {
        __extends(BuyDiSkin, _super);
        function BuyDiSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [800, 500]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.addDiBtn_i(), this.closeBtn_i(), this.scroller_i(), this.__5_i(), this.__6_i(), this.diLevel_i(), this.moneyAdd_i(), this.buyDiLevel_i(), this.goDi_i(), this.goPlant_i(), this.goGet_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        var d = __define,c=BuyDiSkin;p=c.prototype;
        d(p, "skinParts"
            ,function () {
                return BuyDiSkin._skinParts;
            }
        );
        p.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "width", "x", "y"], ["kuang_png", 277, 116, 413]);
            return t;
        };
        p.__5_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["bold", "size", "text", "textColor", "x", "y"], [true, 14, "地块等级", 0x000000, 125, 402]);
            return t;
        };
        p.__6_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["bold", "size", "text", "textColor", "x", "y"], [true, 14, "收获加成", 0x000000, 277, 402]);
            return t;
        };
        p.addDiBtn_i = function () {
            var t = new egret.gui.Button();
            this.addDiBtn = t;
            this.__s(t, ["height", "skinName", "width", "x", "y"], [44, new egret.gui.ButtonSkin("buyDiBlockMark_up_png", "buyDiBlockMark_down_png"), 44, 128, 349]);
            return t;
        };
        p.buyDiLevel_i = function () {
            var t = new egret.gui.Button();
            this.buyDiLevel = t;
            this.__s(t, ["height", "skinName", "width", "x", "y"], [17, new egret.gui.ButtonSkin("buyDiBlockMark_up_png", "buyDiBlockMark_down_png"), 19, 234, 403]);
            return t;
        };
        p.closeBtn_i = function () {
            var t = new egret.gui.Button();
            this.closeBtn = t;
            this.__s(t, ["height", "skinName", "width", "x", "y"], [25, new egret.gui.ButtonSkin("closeBtn_png"), 29, 370, 158]);
            return t;
        };
        p.diLevel_i = function () {
            var t = new egret.gui.Label();
            this.diLevel = t;
            this.__s(t, ["bold", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [true, 14, "Lv1", "center", 0xF91E05, "middle", 44, 187, 402]);
            return t;
        };
        p.goDi_i = function () {
            var t = new egret.gui.Button();
            this.goDi = t;
            t.setStyle("bold", true);
            t.setStyle("size", 18);
            t.setStyle("textColor", 0xE9FE08);
            t.setStyle("verticalAlign", "middle");
            this.__s(t, ["height", "label", "skinName", "width", "x", "y"], [30, "前往", new egret.gui.ButtonSkin("btnStyle1_png"), 85, 125, 432]);
            return t;
        };
        p.goGet_i = function () {
            var t = new egret.gui.Button();
            this.goGet = t;
            t.setStyle("bold", true);
            t.setStyle("size", 18);
            t.setStyle("textColor", 0xE9FE08);
            t.setStyle("verticalAlign", "middle");
            this.__s(t, ["height", "label", "skinName", "width", "x", "y"], [30, "一键收", new egret.gui.ButtonSkin("btnStyle1_png"), 85, 301, 432]);
            return t;
        };
        p.goPlant_i = function () {
            var t = new egret.gui.Button();
            this.goPlant = t;
            t.setStyle("bold", true);
            t.setStyle("size", 18);
            t.setStyle("textColor", 0xE9FE08);
            t.setStyle("verticalAlign", "middle");
            this.__s(t, ["height", "label", "skinName", "width", "x", "y"], [30, "一键种", new egret.gui.ButtonSkin("btnStyle1_png"), 85, 212, 432]);
            return t;
        };
        p.group_i = function () {
            var t = new egret.gui.Group();
            this.group = t;
            this.__s(t, ["height", "width"], [221, 262]);
            return t;
        };
        p.moneyAdd_i = function () {
            var t = new egret.gui.Label();
            this.moneyAdd = t;
            this.__s(t, ["bold", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [true, 14, "0%", "center", 0xF91E05, "middle", 44, 342, 402]);
            return t;
        };
        p.scroller_i = function () {
            var t = new egret.gui.Scroller();
            this.scroller = t;
            this.__s(t, ["height", "width", "x", "y"], [223, 264, 122, 173]);
            t.viewport = this.group_i();
            return t;
        };
        p.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [338, egret.gui.getScale9Grid("12,17,271,244"), "uiBgStyle1_png", 301, 106, 149]);
            return t;
        };
        BuyDiSkin._skinParts = ["addDiBtn", "closeBtn", "group", "scroller", "diLevel", "moneyAdd", "buyDiLevel", "goDi", "goPlant", "goGet"];
        return BuyDiSkin;
    })(egret.gui.Skin);
    skin.BuyDiSkin = BuyDiSkin;
    egret.registerClass(BuyDiSkin,"skin.BuyDiSkin");
})(skin || (skin = {}));
