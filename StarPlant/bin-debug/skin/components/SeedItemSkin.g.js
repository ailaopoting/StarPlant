var skin;
(function (skin) {
    var components;
    (function (components) {
        var SeedItemSkin = (function (_super) {
            __extends(SeedItemSkin, _super);
            function SeedItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [43, 220]);
                this.elementsContent = [this.__3_i(), this.seedInfo_i(), this.num_i(), this.__4_i(), this.borderSelected_i(), this.seedIcon_i()];
                this.states = [
                    new egret.gui.State("normal", [
                    ]),
                    new egret.gui.State("disabled", [
                    ])
                ];
            }
            var d = __define,c=SeedItemSkin;p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return SeedItemSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [42, egret.gui.getScale9Grid("10,9,58,59"), "borderStyle2_png", 42, 5, 0]);
                return t;
            };
            p.borderSelected_i = function () {
                var t = new egret.gui.UIAsset();
                this.borderSelected = t;
                this.__s(t, ["source", "x", "y"], ["borderSelectedStyle1_png", -1, -1]);
                return t;
            };
            p.num_i = function () {
                var t = new egret.gui.Label();
                this.num = t;
                this.__s(t, ["height", "size", "text", "textAlign", "textColor", "width", "x", "y"], [18, 12, "x1", "left", 0x000000, 71, 49, 22]);
                return t;
            };
            p.seedIcon_i = function () {
                var t = new egret.gui.UIAsset();
                this.seedIcon = t;
                this.__s(t, ["height", "width", "x", "y"], [31, 32, 10, 4]);
                return t;
            };
            p.seedInfo_i = function () {
                var t = new egret.gui.Label();
                this.seedInfo = t;
                this.__s(t, ["height", "size", "textAlign", "textColor", "width", "x", "y"], [30, 16, "left", 0x000000, 120, 96, 7]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["scale9Grid", "source", "x", "y"], [egret.gui.getScale9Grid("2,2,216,38"), "borderStyle1_png", -1, -1]);
                return t;
            };
            SeedItemSkin._skinParts = ["seedInfo", "num", "borderSelected", "seedIcon"];
            return SeedItemSkin;
        })(egret.gui.Skin);
        components.SeedItemSkin = SeedItemSkin;
        egret.registerClass(SeedItemSkin,"skin.components.SeedItemSkin");
    })(components = skin.components || (skin.components = {}));
})(skin || (skin = {}));
