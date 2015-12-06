module egret-core-master.tools.templates.gui.src.skins.simple{
	export class SkinnableDataContainer extends egret.gui.Skin{
		private static _skinParts:Array<string> = ["dataGroup"];
		private __s:Function = egret.gui.setProperties;
		public dataGroup:egret.gui.DataGroup;

		public constructor(){
			super();
			
			this.elementsContent = [this.dataGroup_i()];
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
			return SkinnableDataContainer._skinParts;
		}
		private dataGroup_i():egret.gui.DataGroup{
			var t:egret.gui.DataGroup = new egret.gui.DataGroup();
			this.dataGroup = t;
			t.itemRenderer = new egret.gui.ClassFactory(egret.gui.ItemRenderer);
			t.layout = this.__3_i();
			return t;
		}
		private __3_i():egret.gui.VerticalLayout{
			var t:egret.gui.VerticalLayout = new egret.gui.VerticalLayout();
			this.__s(t,["gap","horizontalAlign"],[0,"contentJustify"])
			return t;
		}
	}
}