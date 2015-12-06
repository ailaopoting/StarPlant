var skin;
(function (skin) {
    var BuyDiSkin = (function (_super) {
        __extends(BuyDiSkin, _super);
        function BuyDiSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [800, 500]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.goDi_i(), this.goPlant_i(), this.goGet_i(), this.__5_i(), this.addDiBtn_i(), this.closeBtn_i(), this.scroller_i()];
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
            this.__s(t, ["source", "width", "x", "y"], ["kuang_png", 271, 121, 422]);
            return t;
        };
        p.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["resIcon_png", 230, 388]);
            return t;
        };
        p.addDiBtn_i = function () {
            var t = new egret.gui.Button();
            this.addDiBtn = t;
            this.__s(t, ["skinName", "x", "y"], [new egret.gui.ButtonSkin("buyDiBlockMark_up_png", "buyDiBlockMark_down_png"), 131, 342]);
            return t;
        };
        p.closeBtn_i = function () {
            var t = new egret.gui.Button();
            this.closeBtn = t;
            this.__s(t, ["height", "skinName", "width", "x", "y"], [25, new egret.gui.ButtonSkin("closeBtn_png"), 29, 376, 145]);
            return t;
        };
        p.goDi_i = function () {
            var t = new egret.gui.Button();
            this.goDi = t;
            t.setStyle("bold", true);
            t.setStyle("size", 18);
            t.setStyle("textAlign", "center");
            t.setStyle("textColor", 0xE9FE08);
            this.__s(t, ["height", "label", "skinName", "width", "x", "y"], [28, "前往", new egret.gui.ButtonSkin("btnStyle1_png"), 85, 125, 434]);
            return t;
        };
        p.goGet_i = function () {
            var t = new egret.gui.Button();
            this.goGet = t;
            t.setStyle("bold", true);
            t.setStyle("size", 18);
            t.setStyle("textAlign", "center");
            t.setStyle("textColor", 0xE9FE08);
            this.__s(t, ["height", "label", "skinName", "width", "x", "y"], [28, "一键收", new egret.gui.ButtonSkin("btnStyle1_png"), 85, 304, 434]);
            return t;
        };
        p.goPlant_i = function () {
            var t = new egret.gui.Button();
            this.goPlant = t;
            t.setStyle("bold", true);
            t.setStyle("size", 18);
            t.setStyle("textAlign", "center");
            t.setStyle("textColor", 0xE9FE08);
            this.__s(t, ["height", "label", "skinName", "width", "x", "y"], [28, "一键种", new egret.gui.ButtonSkin("btnStyle1_png"), 85, 215, 434]);
            return t;
        };
        p.group_i = function () {
            var t = new egret.gui.Group();
            this.group = t;
            this.__s(t, ["height", "width"], [221, 262]);
            return t;
        };
        p.scroller_i = function () {
            var t = new egret.gui.Scroller();
            this.scroller = t;
            this.__s(t, ["height", "width", "x", "y"], [223, 264, 125, 168]);
            t.viewport = this.group_i();
            return t;
        };
        p.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "x", "y"], [338, egret.gui.getScale9Grid("12,17,271,244"), "uiBgStyle1_png", 109, 147]);
            return t;
        };
        BuyDiSkin._skinParts = ["goDi", "goPlant", "goGet", "addDiBtn", "closeBtn", "group", "scroller"];
        return BuyDiSkin;
    })(egret.gui.Skin);
    skin.BuyDiSkin = BuyDiSkin;
    egret.registerClass(BuyDiSkin,"skin.BuyDiSkin");
})(skin || (skin = {}));
