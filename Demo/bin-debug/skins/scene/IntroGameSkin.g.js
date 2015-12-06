var skins;
(function (skins) {
    var scene;
    (function (scene) {
        var IntroGameSkin = (function (_super) {
            __extends(IntroGameSkin, _super);
            function IntroGameSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.btn1_i(), this.label1_i(), this.btn2_i(), this.__4_i(), this.__5_i(), this.input2_i(), this.input1_i(), this.__6_i()];
                this.states = [
                    new egret.gui.State("normal", [
                    ]),
                    new egret.gui.State("disabled", [
                    ])
                ];
            }
            var d = __define,c=IntroGameSkin;p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return IntroGameSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                t.setStyle("size", 30);
                this.__s(t, ["bottom", "height", "horizontalCenter", "scale9Grid", "source"], [301, 50, 1.5, egret.gui.getScale9Grid("81,7,212,22"), "an-5_png"]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "height", "horizontalCenter", "scale9Grid", "source"], [242, 50, 1.5, egret.gui.getScale9Grid("80,8,212,20"), "an-6_png"]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["horizontalCenter", "size", "text", "top"], [2, 60, "《剑仙》", 85]);
                return t;
            };
            p.btn1_i = function () {
                var t = new egret.gui.Button();
                this.btn1 = t;
                t.setStyle("size", 30);
                this.__s(t, ["bottom", "height", "horizontalCenter", "skinName", "width"], [166, 50, -83, new egret.gui.ButtonSkin("an-3_jpg", "an-4_jpg"), 140]);
                return t;
            };
            p.btn2_i = function () {
                var t = new egret.gui.Button();
                this.btn2 = t;
                this.__s(t, ["bottom", "height", "horizontalCenter", "skinName", "width"], [166, 50, 87, new egret.gui.ButtonSkin("an-1_jpg", "an-2_jpg"), 140]);
                return t;
            };
            p.input1_i = function () {
                var t = new egret.gui.TextInput();
                this.input1 = t;
                this.__s(t, ["bottom", "height", "horizontalCenter", "width", "x"], [310, 36, 34, 210, 169]);
                return t;
            };
            p.input2_i = function () {
                var t = new egret.gui.TextInput();
                this.input2 = t;
                this.__s(t, ["bottom", "height", "horizontalCenter", "width", "x"], [250, 36, 34, 210, 169]);
                return t;
            };
            p.label1_i = function () {
                var t = new egret.gui.Label();
                this.label1 = t;
                this.__s(t, ["height", "horizontalCenter", "size", "text", "textAlign", "textColor", "top", "width"], [122, 9, 28, "剑宗首重勇剑，主张拔剑无理，攻剑。气宗首重智剑，主张用剑无招，拒剑。术宗首重仁剑，主张弃剑无危，守剑。", "left", 0xB9F701, 165, 402]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "source", "top"], [0, 0, 0, "bg_png", 0]);
                return t;
            };
            IntroGameSkin._skinParts = ["btn1", "label1", "btn2", "input2", "input1"];
            return IntroGameSkin;
        })(egret.gui.Skin);
        scene.IntroGameSkin = IntroGameSkin;
        egret.registerClass(IntroGameSkin,"skins.scene.IntroGameSkin");
    })(scene = skins.scene || (skins.scene = {}));
})(skins || (skins = {}));
