module egret-core-master.tools.templates.gui.src.skins.simple{
	export class ProgressBarSkin extends egret.gui.Skin{
		private static _skinParts:Array<string> = ["track","thumb","labelDisplay"];
		private __s:Function = egret.gui.setProperties;
		public labelDisplay:egret.gui.Label;
		public thumb:egret.gui.UIAsset;
		public track:egret.gui.Group;

		public constructor(){
			super();
			
			this.height = 20;
			this.elementsContent = [this.__4_i()];
			this.states = [
				new egret.gui.State ("normal",
					[
					])
				,
				new egret.gui.State ("disabled",
					[
					])
			];
		}

		public get skinParts():Array<string>{
			return ProgressBarSkin._skinParts;
		}
		private __4_i():egret.gui.Group{
			var t:egret.gui.Group = new egret.gui.Group();
			this.__s(t,["percentHeight","percentWidth"],[100,100])
			t.elementsContent = [this.__3_i(),this.track_i(),this.thumb_i(),this.labelDisplay_i()];
			return t;
		}
		private labelDisplay_i():egret.gui.Label{
			var t:egret.gui.Label = new egret.gui.Label();
			this.labelDisplay = t;
			this.__s(t,["horizontalCenter","maxDisplayedLines","size","textAlign","textColor","verticalAlign","verticalCenter"],[0,1,20,"center",0x707070,"middle",0])
			return t;
		}
		private __3_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["percentHeight","source","percentWidth"],[100,"progressbar_track_png",100])
			return t;
		}
		private thumb_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.thumb = t;
			t.source = "progressbar_fill_png";
			return t;
		}
		private track_i():egret.gui.Group{
			var t:egret.gui.Group = new egret.gui.Group();
			this.track = t;
			this.__s(t,["percentHeight","percentWidth"],[100,100])
			return t;
		}
	}
}