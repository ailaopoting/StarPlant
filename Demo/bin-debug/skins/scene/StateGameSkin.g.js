var skins;
(function (skins) {
    var scene;
    (function (scene) {
        var StateGameSkin = (function (_super) {
            __extends(StateGameSkin, _super);
            function StateGameSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.bg_1_i(), this.btn1_i(), this.btn2_i(), this.btn3_i(), this.btn4_i(), this.__4_i(), this.__5_i()];
                this.states = [
                    new egret.gui.State("normal", [
                    ]),
                    new egret.gui.State("disabled", [
                    ])
                ];
            }
            var d = __define,c=StateGameSkin;p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return StateGameSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new StateGameUI();
                this.__s(t, ["x", "y"], [122, 397]);
                return t;
            };
            p.__5_i = function () {
                var t = new IntroGameUI();
                this.__s(t, ["x", "y"], [271, 370]);
                return t;
            };
            p.bg_1_i = function () {
                var t = new egret.gui.UIAsset();
                this.bg_1 = t;
                this.__s(t, ["bottom", "height", "left", "right", "source"], [1, 260, 0, 0, "bg-1_png"]);
                return t;
            };
            p.btn1_i = function () {
                var t = new egret.gui.Button();
                this.btn1 = t;
                t.setStyle("bold", true);
                t.setStyle("textAlign", "center");
                t.setStyle("verticalAlign", "top");
                this.__s(t, ["bottom", "height", "label", "left", "width"], [105, 50, "重新开始", 142, 140]);
                return t;
            };
            p.btn2_i = function () {
                var t = new egret.gui.Button();
                this.btn2 = t;
                t.setStyle("bold", true);
                t.setStyle("size", 30);
                this.__s(t, ["bottom", "height", "label", "left", "width"], [195, 50, "复活", 20, 80]);
                return t;
            };
            p.btn3_i = function () {
                var t = new egret.gui.Button();
                this.btn3 = t;
                t.setStyle("bold", true);
                this.__s(t, ["bottom", "label", "right"], [185, "商城", 17]);
                return t;
            };
            p.btn4_i = function () {
                var t = new egret.gui.Button();
                this.btn4 = t;
                t.setStyle("bold", true);
                this.__s(t, ["bottom", "height", "label", "left", "width"], [195, 50, "切换地图", 141, 141]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter", "visible"], [0, "bgA_jpg", 80, false]);
                return t;
            };
            StateGameSkin._skinParts = ["bg_1", "btn1", "btn2", "btn3", "btn4"];
            return StateGameSkin;
        })(egret.gui.Skin);
        scene.StateGameSkin = StateGameSkin;
        egret.registerClass(StateGameSkin,"skins.scene.StateGameSkin");
    })(scene = skins.scene || (skins.scene = {}));
})(skins || (skins = {}));
