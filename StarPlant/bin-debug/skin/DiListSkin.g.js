var skin;
(function (skin) {
    var DiListSkin = (function (_super) {
        __extends(DiListSkin, _super);
        function DiListSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["currentState", "height", "width"], ["0", 800, 500]);
            this.elementsContent = [this.__3_i(), this.diTile0_i(), this.diTile1_i(), this.diTile2_i(), this.diTile3_i(), this.diTile4_i(), this.diTile5_i(), this.skill0_i(), this.skill1_i(), this.skill2_i(), this.skillCD0_i(), this.skillCD1_i(), this.skillCD2_i()];
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
            this.__s(t, ["alpha", "height", "label", "skinName", "width", "x", "y"], [0, 81, "按钮", new egret.gui.ButtonSkin("btnStyle1_png"), 114, 30, 242]);
            return t;
        };
        p.diTile1_i = function () {
            var t = new egret.gui.Button();
            this.diTile1 = t;
            this.__s(t, ["alpha", "height", "label", "skinName", "width", "x", "y"], [0, 81, "按钮", new egret.gui.ButtonSkin("btnStyle1_png"), 114, 146, 242]);
            return t;
        };
        p.diTile2_i = function () {
            var t = new egret.gui.Button();
            this.diTile2 = t;
            this.__s(t, ["alpha", "height", "label", "skinName", "width", "x", "y"], [0, 81, "按钮", new egret.gui.ButtonSkin("btnStyle1_png"), 114, 39, 325]);
            return t;
        };
        p.diTile3_i = function () {
            var t = new egret.gui.Button();
            this.diTile3 = t;
            this.__s(t, ["alpha", "height", "label", "skinName", "width", "x", "y"], [0, 81, "按钮", new egret.gui.ButtonSkin("btnStyle1_png"), 114, 160, 329]);
            return t;
        };
        p.diTile4_i = function () {
            var t = new egret.gui.Button();
            this.diTile4 = t;
            this.__s(t, ["alpha", "height", "label", "skinName", "width", "x", "y"], [0, 104, "按钮", new egret.gui.ButtonSkin("btnStyle1_png"), 128, 39, 424]);
            return t;
        };
        p.diTile5_i = function () {
            var t = new egret.gui.Button();
            this.diTile5 = t;
            this.__s(t, ["alpha", "height", "label", "skinName", "width", "x", "y"], [0, 104, "按钮", new egret.gui.ButtonSkin("btnStyle1_png"), 142, 176, 422]);
            return t;
        };
        p.skill0_i = function () {
            var t = new egret.gui.Button();
            this.skill0 = t;
            t.setStyle("bold", true);
            t.setStyle("size", 15);
            t.setStyle("textAlign", "center");
            t.setStyle("textColor", 0xF8EF06);
            t.setStyle("verticalAlign", "middle");
            this.__s(t, ["height", "label", "skinName", "width", "x", "y"], [28, "点击Up", new egret.gui.ButtonSkin("btnStyle1_png", "btnStyle1_png", "btnStyle1_png"), 64, 41, 591]);
            return t;
        };
        p.skill1_i = function () {
            var t = new egret.gui.Button();
            this.skill1 = t;
            t.setStyle("bold", true);
            t.setStyle("size", 15);
            t.setStyle("textAlign", "center");
            t.setStyle("textColor", 0xF8EF06);
            t.setStyle("verticalAlign", "middle");
            this.__s(t, ["height", "label", "skinName", "width", "x", "y"], [28, "基础up", new egret.gui.ButtonSkin("btnStyle1_png", "btnStyle1_png", "btnStyle1_png"), 64, 162, 591]);
            return t;
        };
        p.skill2_i = function () {
            var t = new egret.gui.Button();
            this.skill2 = t;
            t.setStyle("bold", true);
            t.setStyle("size", 15);
            t.setStyle("textAlign", "center");
            t.setStyle("textColor", 0xF8EF06);
            t.setStyle("verticalAlign", "middle");
            this.__s(t, ["height", "label", "skinName", "width", "x", "y"], [28, "按住up", new egret.gui.ButtonSkin("btnStyle1_png", "btnStyle1_png", "btnStyle1_png"), 64, 282, 592]);
            return t;
        };
        p.skillCD0_i = function () {
            var t = new egret.gui.Label();
            this.skillCD0 = t;
            this.__s(t, ["bold", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [true, 15, "00:00", "center", 0x0E4401, "middle", 66, 41, 645]);
            return t;
        };
        p.skillCD1_i = function () {
            var t = new egret.gui.Label();
            this.skillCD1 = t;
            this.__s(t, ["bold", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [true, 15, "00:00", "center", 0x0E4401, "middle", 66, 162, 646]);
            return t;
        };
        p.skillCD2_i = function () {
            var t = new egret.gui.Label();
            this.skillCD2 = t;
            this.__s(t, ["bold", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [true, 15, "00:00", "center", 0x0E4401, "middle", 66, 281, 647]);
            return t;
        };
        p.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["di_png", 11, 231]);
            return t;
        };
        DiListSkin._skinParts = ["diTile0", "diTile1", "diTile2", "diTile3", "diTile4", "diTile5", "skill0", "skill1", "skill2", "skillCD0", "skillCD1", "skillCD2"];
        return DiListSkin;
    })(egret.gui.Skin);
    skin.DiListSkin = DiListSkin;
    egret.registerClass(DiListSkin,"skin.DiListSkin");
})(skin || (skin = {}));
