/**
 * 全局 变量？
 */
var ConstantA = (function () {
    function ConstantA() {
    }
    /**舞台宽*/
    ConstantA.stageW = 0;
    /**舞台高*/
    ConstantA.stageH = 0;
    /**角色属性*/
    ConstantA.roleClass = new RoleClass();
    /**升级所需经验组*/
    ConstantA.levelExp = {
        "2": 20,
        "3": 60,
        "4": 120,
        "5": 250,
        "6": 360,
        "7": 490,
        "8": 640,
        "9": 810,
        "10": 1000,
        "11": 1210,
        "12": 1440,
        "13": 1690,
        "14": 1960,
        "15": 2250,
        "16": 2560,
        "17": 2890,
        "18": 3240,
        "19": 3610,
        "20": 4000,
        "21": 4410,
        "22": 4840,
        "23": 5290,
        "24": 5760,
        "25": 6250,
        "26": 6760,
        "27": 7290,
        "28": 7840,
        "29": 8410,
        "30": 9000
    };
    return ConstantA;
})();
//# sourceMappingURL=Constant.js.map