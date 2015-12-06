var skin;
(function (skin) {
    var DiListSkin = (function (_super) {
        __extends(DiListSkin, _super);
        function DiListSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["currentState", "height", "width"], ["0", 800, 500]);
            this.elementsContent = [this.__3_i(), this.diTile0_i(), this.diTile1_i(), this.diTile2_i(), this.diTile3_i(), this.diTile4_i(), this.diTile5_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        var d = __define,c=DiListSkin;p=c.prototype;
        d(p, "skinParts"
            ,function () {
                return DiListSkin._skinParts;
            }
        );
        p.diTile0_i = function () {
            var t = new egret.gui.Button();
            this.diTile0 = t;
            this.__s(t, ["alpha", "height", "label", "skinName", "width", "x", "y"], [0, 81, "按钮", new egret.gui.ButtonSkin("btnStyle1_png"), 114, 30, 262]);
            return t;
        };
        p.diTile1_i = function () {
            var t = new egret.gui.Button();
            this.diTile1 = t;
            this.__s(t, ["alpha", "height", "label", "skinName", "width", "x", "y"], [0, 81, "按钮", new egret.gui.ButtonSkin("btnStyle1_png"), 114, 146, 262]);
            return t;
        };
        p.diTile2_i = function () {
            var t = new egret.gui.Button();
            this.diTile2 = t;
            this.__s(t, ["alpha", "height", "label", "skinName", "width", "x", "y"], [0, 81, "按钮", new egret.gui.ButtonSkin("btnStyle1_png"), 114, 39, 345]);
            return t;
        };
        p.diTile3_i = function () {
            var t = new egret.gui.Button();
            this.diTile3 = t;
            this.__s(t, ["alpha", "height", "label", "skinName", "width", "x", "y"], [0, 81, "按钮", new egret.gui.ButtonSkin("btnStyle1_png"), 114, 160, 349]);
            return t;
        };
        p.diTile4_i = function () {
            var t = new egret.gui.Button();
            this.diTile4 = t;
            this.__s(t, ["alpha", "height", "label", "skinName", "width", "x", "y"], [0, 104, "按钮", new egret.gui.ButtonSkin("btnStyle1_png"), 128, 39, 444]);
            return t;
        };
        p.diTile5_i = function () {
            var t = new egret.gui.Button();
            this.diTile5 = t;
            this.__s(t, ["alpha", "height", "label", "skinName", "width", "x", "y"], [0, 104, "按钮", new egret.gui.ButtonSkin("btnStyle1_png"), 142, 176, 442]);
            return t;
        };
        p.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["di_png", 11, 251]);
            return t;
        };
        DiListSkin._skinParts = ["diTile0", "diTile1", "diTile2", "diTile3", "diTile4", "diTile5"];
        return DiListSkin;
    })(egret.gui.Skin);
    skin.DiListSkin = DiListSkin;
    egret.registerClass(DiListSkin,"skin.DiListSkin");
})(skin || (skin = {}));
