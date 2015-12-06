var skin;
(function (skin) {
    var HelpUISkin = (function (_super) {
        __extends(HelpUISkin, _super);
        function HelpUISkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [800, 500]);
            this.elementsContent = [this.__3_i(), this.introduce_i(), this.okBtn_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        var d = __define,c=HelpUISkin;p=c.prototype;
        d(p, "skinParts"
            ,function () {
                return HelpUISkin._skinParts;
            }
        );
        p.introduce_i = function () {
            var t = new egret.gui.Label();
            this.introduce = t;
            this.__s(t, ["bold", "height", "size", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [true, 248, 18, "left", 0x1423F2, "middle", 384, 66, 175]);
            return t;
        };
        p.okBtn_i = function () {
            var t = new egret.gui.Button();
            this.okBtn = t;
            t.setStyle("size", 25);
            this.__s(t, ["height", "label", "skinName", "width", "x", "y"], [39, "确认", new egret.gui.ButtonSkin("btnStyle1_png"), 69, 214, 389]);
            return t;
        };
        p.__3_i = function () {
            var t = new egret.gui.UIAsset();
            t.setStyle("size", 17);
            t.setStyle("textColor", 0x0F3DC6);
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [346, egret.gui.getScale9Grid("12,17,271,244"), "uiBgStyle1_png", 415, 42, 109]);
            return t;
        };
        HelpUISkin._skinParts = ["introduce", "okBtn"];
        return HelpUISkin;
    })(egret.gui.Skin);
    skin.HelpUISkin = HelpUISkin;
    egret.registerClass(HelpUISkin,"skin.HelpUISkin");
})(skin || (skin = {}));
