var skin;
(function (skin) {
    var simple;
    (function (simple) {
        var AlertSkin = (function (_super) {
            __extends(AlertSkin, _super);
            function AlertSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["maxWidth", "minHeight", "minWidth", "width"], [710, 230, 370, 284]);
                this.elementsContent = [this.__1_i(), this.moveArea_i(), this.contentDisplay_i(), this.__5_i()];
            }
            var d = __define,c=AlertSkin;p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return AlertSkin._skinParts;
                }
            );
            p.__2_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["percentHeight", "width"], [100, 288]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                t.setStyle("size", 25);
                t.setStyle("textAlign", "center");
                t.setStyle("verticalAlign", "middle");
                this.__s(t, ["source", "width", "x", "y"], ["kuang_png", 268, 7, 43]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.BasicLayout();
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["width", "x", "y"], [256, 19, 162]);
                t.layout = this.__4_i();
                t.elementsContent = [this.firstButton_i(), this.secondButton_i()];
                return t;
            };
            p.contentDisplay_i = function () {
                var t = new egret.gui.Label();
                this.contentDisplay = t;
                this.__s(t, ["bold", "fontFamily", "height", "padding", "size", "textColor", "verticalAlign", "width", "x", "y"], [true, "宋体", 107, 10, 20, 0x000000, "middle", 266, 13, 51]);
                return t;
            };
            p.firstButton_i = function () {
                var t = new egret.gui.Button();
                this.firstButton = t;
                t.setStyle("bold", true);
                t.setStyle("size", 17);
                t.setStyle("textAlign", "center");
                this.__s(t, ["height", "label", "skinName", "width", "x", "y"], [29, "确定", new egret.gui.ButtonSkin("btnStyle1_png", "btnStyle1_png"), 66, 34, -1]);
                return t;
            };
            p.moveArea_i = function () {
                var t = new egret.gui.Group();
                this.moveArea = t;
                this.__s(t, ["height", "left", "right"], [55, 3, 9]);
                t.elementsContent = [this.__2_i(), this.titleDisplay_i(), this.__3_i()];
                return t;
            };
            p.secondButton_i = function () {
                var t = new egret.gui.Button();
                this.secondButton = t;
                t.setStyle("bold", true);
                t.setStyle("size", 17);
                t.setStyle("textAlign", "center");
                this.__s(t, ["height", "label", "skinName", "width", "x"], [29, "取消", new egret.gui.ButtonSkin("btnStyle1_png", "btnStyle1_png"), 66, 165]);
                return t;
            };
            p.__1_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x"], [216, "uiBgStyle1_png", 293, 0]);
                return t;
            };
            p.titleDisplay_i = function () {
                var t = new egret.gui.Label();
                this.titleDisplay = t;
                this.__s(t, ["bold", "fontFamily", "height", "maxDisplayedLines", "minHeight", "size", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [true, "宋体", 30, 1, 28, 24, "center", 0x000000, "middle", 271, 7, 13]);
                return t;
            };
            AlertSkin._skinParts = ["titleDisplay", "moveArea", "contentDisplay", "firstButton", "secondButton"];
            return AlertSkin;
        })(egret.gui.Skin);
        simple.AlertSkin = AlertSkin;
        egret.registerClass(AlertSkin,"skin.simple.AlertSkin");
    })(simple = skin.simple || (skin.simple = {}));
})(skin || (skin = {}));
