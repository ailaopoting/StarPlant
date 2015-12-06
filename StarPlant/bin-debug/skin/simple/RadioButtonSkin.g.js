var skin;
(function (skin) {
    var simple;
    (function (simple) {
        var RadioButtonSkin = (function (_super) {
            __extends(RadioButtonSkin, _super);
            function RadioButtonSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__9_i()];
                this.states = [
                    new egret.gui.State("up", [
                        new egret.gui.SetProperty("__8", "source", "radioBtnStyle1_up_png")
                    ]),
                    new egret.gui.State("down", [
                    ]),
                    new egret.gui.State("disabled", [
                    ]),
                    new egret.gui.State("upAndSelected", [
                        new egret.gui.SetProperty("__8", "source", "radioBtnStyle1_upAndSelected_png")
                    ]),
                    new egret.gui.State("downAndSelected", [
                    ]),
                    new egret.gui.State("disabledAndSelected", [
                        new egret.gui.SetProperty("__8", "source", "radiobutton_select_disabled_png")
                    ])
                ];
            }
            var d = __define,c=RadioButtonSkin;p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return RadioButtonSkin._skinParts;
                }
            );
            p.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__8 = t;
                this.__s(t, ["fillMode", "height", "verticalCenter", "width"], ["scale", 24, 1, 24]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["percentHeight", "percentWidth"], [100, 100]);
                t.layout = this.__7_i();
                t.elementsContent = [this.__8_i(), this.labelDisplay_i()];
                return t;
            };
            p.labelDisplay_i = function () {
                var t = new egret.gui.Label();
                this.labelDisplay = t;
                this.__s(t, ["fontFamily", "maxDisplayedLines", "size", "textAlign", "textColor", "verticalAlign"], ["Tahoma", 1, 20, "center", 0x000000, "middle"]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.verticalAlign = "middle";
                return t;
            };
            RadioButtonSkin._skinParts = ["labelDisplay"];
            return RadioButtonSkin;
        })(egret.gui.Skin);
        simple.RadioButtonSkin = RadioButtonSkin;
        egret.registerClass(RadioButtonSkin,"skin.simple.RadioButtonSkin");
    })(simple = skin.simple || (skin.simple = {}));
})(skin || (skin = {}));
