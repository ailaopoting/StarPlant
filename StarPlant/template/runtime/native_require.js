
var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/game/game.js",
	"libs/modules/game/game.native.js",
	"libs/modules/res/res.js",
	"libs/modules/gui/gui.js",
	"libs/modules/tween/tween.js",
	"libs/modules/puremvc/puremvc.js",
	"bin-debug/AssetAdapter.js",
	"bin-debug/game/core/util/DisplayUtil.js",
	"bin-debug/game/app/GameScene.js",
	"bin-debug/game/app/MapProcessor.js",
	"bin-debug/game/app/mapHandler/MapProcessor_fight.js",
	"bin-debug/game/app/mapHandler/MapProcessor_plant.js",
	"bin-debug/game/app/mapHandler/plantHandler/Seed.js",
	"bin-debug/game/app/MapModel.js",
	"bin-debug/game/core/components/PageBar.js",
	"bin-debug/game/core/data/actorInfo/DiTitleInfo.js",
	"bin-debug/game/core/data/actorInfo/ItemBagInfo.js",
	"bin-debug/game/core/data/ActorInfo.js",
	"bin-debug/game/core/data/SceneType.js",
	"bin-debug/game/core/event/eventItem/LogicEvent.js",
	"bin-debug/game/core/event/ModelLocator.js",
	"bin-debug/game/core/LayerManger.js",
	"bin-debug/game/core/net/RequestType.js",
	"bin-debug/game/core/NetRequestManager.js",
	"bin-debug/game/core/SoundManager.js",
	"bin-debug/game/core/util/AnchorUtil.js",
	"bin-debug/game/core/util/HashMap.js",
	"bin-debug/game/module/buyDiUI/BuyDiBlock.js",
	"bin-debug/game/module/BuyDiUI.js",
	"bin-debug/game/module/codeRule/UiRule.js",
	"bin-debug/game/module/DiTileListUI.js",
	"bin-debug/game/module/GuideUI.js",
	"bin-debug/game/module/HelpUI.js",
	"bin-debug/game/module/seedItemUI/SeedItem.js",
	"bin-debug/game/module/SeedItemUI.js",
	"bin-debug/game/module/SetUI.js",
	"bin-debug/game/module/toolBarUI/MoneyUI.js",
	"bin-debug/game/module/toolBarUI/UserUI.js",
	"bin-debug/game/module/ToolBarUI.js",
	"bin-debug/LoadingUI.js",
	"bin-debug/Main.js",
	"bin-debug/skin/BuyDiSkin.g.js",
	"bin-debug/skin/components/BuyDiBlockSkin.g.js",
	"bin-debug/skin/components/MoneyUISkin.g.js",
	"bin-debug/skin/components/SeedItemSkin.g.js",
	"bin-debug/skin/components/UserUISkin.g.js",
	"bin-debug/skin/DiListSkin.g.js",
	"bin-debug/skin/GuideUISkin.g.js",
	"bin-debug/skin/HelpUISkin.g.js",
	"bin-debug/skin/SeedItemUISkin.g.js",
	"bin-debug/skin/SetUISkin.g.js",
	"bin-debug/skin/simple/AlertSkin.g.js",
	"bin-debug/skin/simple/RadioButtonSkin.g.js",
	"bin-debug/skin/ToolBarSkin.g.js",
	//----auto game_file_list end----
];

var window = {};

egret_native.setSearchPaths([""]);

egret_native.requireFiles = function () {
    for (var key in game_file_list) {
        var src = game_file_list[key];
        require(src);
    }
};

egret_native.egretInit = function () {
    egret_native.requireFiles();
    egret.TextField.default_fontFamily = "/system/fonts/DroidSansFallback.ttf";
    //egret.dom为空实现
    egret.dom = {};
    egret.dom.drawAsCanvas = function () {
    };
};

egret_native.egretStart = function () {
    var option = {
        //以下为自动修改，请勿修改
        //----auto option start----
		entryClassName: "Main",
		frameRate: 60,
		scaleMode: "showAll",
		contentWidth: 500,
		contentHeight: 800,
		showPaintRect: false,
		showFPS: false,
		fpsStyles: "x:0,y:0,size:30,textColor:0x00c200,bgAlpha:0.9",
		showLog: false,
		logFilter: "",
		maxTouches: 2,
		textureScaleFactor: 1
		//----auto option end----
    };

    egret.native.NativePlayer.option = option;
    egret.runEgret();
    egret_native.Label.createLabel(egret.TextField.default_fontFamily, 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};