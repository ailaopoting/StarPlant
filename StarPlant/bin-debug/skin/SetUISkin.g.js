var skin;
(function (skin) {
    var SetUISkin = (function (_super) {
        __extends(SetUISkin, _super);
        function SetUISkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [800, 500]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.okBtn_i(), this.select0_i(), this.select1_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        var d = __define,c=SetUISkin;p=c.prototype;
        d(p, "skinParts"
            ,function () {
                return SetUISkin._skinParts;
            }
        );
        p.__4_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "音乐", 0xF62904, 167, 289]);
            return t;
        };
        p.okBtn_i = function () {
            var t = new egret.gui.Button();
            this.okBtn = t;
            t.setStyle("size", 15);
            t.setStyle("textAlign", "left");
            this.__s(t, ["height", "label", "skinName", "width", "x", "y"], [31, "确认", new egret.gui.ButtonSkin("btnStyle1_png"), 55, 224, 343]);
            return t;
        };
        p.select0_i = function () {
            var t = new egret.gui.RadioButton();
            this.select0 = t;
            t.setStyle("size", 20);
            t.setStyle("textColor", 0x640F04);
            this.__s(t, ["label", "selected", "skinName", "visible", "x", "y"], ["开", true, skin.simple.RadioButtonSkin, true, 224, 286]);
            return t;
        };
        p.select1_i = function () {
            var t = new egret.gui.RadioButton();
            this.select1 = t;
            t.setStyle("size", 20);
            t.setStyle("textColor", 0x070000);
            this.__s(t, ["label", "selected", "skinName", "visible", "x", "y"], ["关", false, skin.simple.RadioButtonSkin, true, 288, 286]);
            return t;
        };
        p.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [194, egret.gui.getScale9Grid("12,17,271,244"), "uiBgStyle1_png", 259, 123, 214]);
            return t;
        };
        SetUISkin._skinParts = ["okBtn", "select0", "select1"];
        return SetUISkin;
    })(egret.gui.Skin);
    skin.SetUISkin = SetUISkin;
    egret.registerClass(SetUISkin,"skin.SetUISkin");
})(skin || (skin = {}));
