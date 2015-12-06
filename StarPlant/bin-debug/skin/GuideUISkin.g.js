var skin;
(function (skin) {
    var GuideUISkin = (function (_super) {
        __extends(GuideUISkin, _super);
        function GuideUISkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [800, 500]);
            this.elementsContent = [this.__3_i(), this.selectBtn0_i(), this.selectBtn1_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        var d = __define,c=GuideUISkin;p=c.prototype;
        d(p, "skinParts"
            ,function () {
                return GuideUISkin._skinParts;
            }
        );
        p.selectBtn0_i = function () {
            var t = new egret.gui.Button();
            this.selectBtn0 = t;
            this.__s(t, ["alpha", "skinName", "touchChildren", "touchEnabled", "width", "x", "y"], [0, new egret.gui.ButtonSkin("btnStyle1_png"), true, true, 135, 89, 307]);
            return t;
        };
        p.selectBtn1_i = function () {
            var t = new egret.gui.Button();
            this.selectBtn1 = t;
            this.__s(t, ["alpha", "skinName", "touchChildren", "touchEnabled", "width", "x", "y"], [0, new egret.gui.ButtonSkin("btnStyle1_png"), true, true, 135, 295, 308]);
            return t;
        };
        p.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["guideUiBg_png", 15, 150]);
            return t;
        };
        GuideUISkin._skinParts = ["selectBtn0", "selectBtn1"];
        return GuideUISkin;
    })(egret.gui.Skin);
    skin.GuideUISkin = GuideUISkin;
    egret.registerClass(GuideUISkin,"skin.GuideUISkin");
})(skin || (skin = {}));
