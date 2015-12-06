var skins;
(function (skins) {
    var scene;
    (function (scene) {
        var OverGameSkin = (function (_super) {
            __extends(OverGameSkin, _super);
            function OverGameSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.btn1_i()];
                this.states = [
                    new egret.gui.State("normal", [
                    ]),
                    new egret.gui.State("disabled", [
                    ])
                ];
            }
            var d = __define,c=OverGameSkin;p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return OverGameSkin._skinParts;
                }
            );
            p.btn1_i = function () {
                var t = new egret.gui.Button();
                this.btn1 = t;
                this.__s(t, ["horizontalCenter", "label", "verticalCenter"], [7, "新的开始", 30]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "source", "top"], [-160, 0, 0, "bgB_jpg", 0]);
                return t;
            };
            OverGameSkin._skinParts = ["btn1"];
            return OverGameSkin;
        })(egret.gui.Skin);
        scene.OverGameSkin = OverGameSkin;
        egret.registerClass(OverGameSkin,"skins.scene.OverGameSkin");
    })(scene = skins.scene || (skins.scene = {}));
})(skins || (skins = {}));
