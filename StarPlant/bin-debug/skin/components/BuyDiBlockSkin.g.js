var skin;
(function (skin) {
    var components;
    (function (components) {
        var BuyDiBlockSkin = (function (_super) {
            __extends(BuyDiBlockSkin, _super);
            function BuyDiBlockSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [48, 48]);
                this.elementsContent = [this.unSelect_i(), this.select_i(), this.num_i(), this.canGetMark_i(), this.fullMark_i()];
                this.states = [
                    new egret.gui.State("normal", [
                    ]),
                    new egret.gui.State("disabled", [
                    ])
                ];
            }
            var d = __define,c=BuyDiBlockSkin;p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return BuyDiBlockSkin._skinParts;
                }
            );
            p.fullMark_i = function () {
                var t = new egret.gui.UIAsset();
                this.fullMark = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [16, "diFull_png", 25, 30, 29]);
                return t;
            };
            p.num_i = function () {
                var t = new egret.gui.Label();
                this.num = t;
                this.__s(t, ["bold", "text", "textAlign", "textColor", "width", "x", "y"], [true, "1", "center", 0xEFCC09, 40, 4, 6]);
                return t;
            };
            p.select_i = function () {
                var t = new egret.gui.UIAsset();
                this.select = t;
                this.__s(t, ["bottom", "left", "right", "source", "top"], [0, 0, 0, "buyDiBlock2_png", 0]);
                return t;
            };
            p.canGetMark_i = function () {
                var t = new egret.gui.UIAsset();
                this.canGetMark = t;
                this.__s(t, ["source", "x", "y"], ["buyDiBlockTip_png", 31, 1]);
                return t;
            };
            p.unSelect_i = function () {
                var t = new egret.gui.UIAsset();
                this.unSelect = t;
                this.__s(t, ["bottom", "left", "right", "source", "top"], [0, 0, 0, "buyDiBlock1_png", 0]);
                return t;
            };
            BuyDiBlockSkin._skinParts = ["unSelect", "select", "num", "canGetMark", "fullMark"];
            return BuyDiBlockSkin;
        })(egret.gui.Skin);
        components.BuyDiBlockSkin = BuyDiBlockSkin;
        egret.registerClass(BuyDiBlockSkin,"skin.components.BuyDiBlockSkin");
    })(components = skin.components || (skin.components = {}));
})(skin || (skin = {}));
