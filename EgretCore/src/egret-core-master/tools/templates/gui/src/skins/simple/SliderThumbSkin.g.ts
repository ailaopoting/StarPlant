module egret-core-master.tools.templates.gui.src.skins.simple{
	export class SliderThumbSkin extends egret.gui.Skin{
		private __s:Function = egret.gui.setProperties;

		public constructor(){
			super();
			
			this.__s(this,["height","width"],[0,0])
			this.elementsContent = [this.__4_i()];
			this.states = [
				new egret.gui.State ("up",
					[
					])
				,
				new egret.gui.State ("down",
					[
					])
				,
				new egret.gui.State ("disabled",
					[
					])
			];
		}

		private __4_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["hslider_thumb_png",-9,-9])
			return t;
		}
	}
}