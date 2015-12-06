/**
 * 背包信息
 * @author
 *
 */
var ItemBagInfo = (function () {
    function ItemBagInfo() {
        this.seedList = {
            "10000": {
                "time": "60/60/60/60",
                "harvest": 50000,
                "sum": 1,
                "type": 1,
                "attack": 3,
                "buy": 10000
            },
            "2": {
                "time": "60/60/60/60",
                "harvest": 150000,
                "sum": 2,
                "type": 1,
                "attack": 3,
                "buy": 50000
            },
            "3": {
                "time": "60/60/60/60",
                "harvest": 300000,
                "sum": 3,
                "type": 1,
                "attack": 3,
                "buy": 100000
            },
            "4": {
                "time": "60/60/60/60",
                "harvest": 500000,
                "sum": 4,
                "type": 1,
                "attack": 3,
                "buy": 1
            },
            "5": {
                "time": "60/60/60/60",
                "harvest": 5000000,
                "sum": 5,
                "type": 1,
                "attack": 3,
                "buy": null
            },
            "6": {
                "time": "60/60/60/60",
                "harvest": 50000,
                "sum": 6,
                "type": 2,
                "defense": 3,
                "attack": null,
                "buy": 10000
            },
            "7": {
                "time": "60/60/60/60",
                "harvest": 150000,
                "sum": 7,
                "type": 2,
                "defense": 3,
                "attack": null,
                "buy": 50000
            },
            "8": {
                "time": "60/60/60/60",
                "harvest": 300000,
                "sum": 8,
                "type": 2,
                "defense": 3,
                "attack": null,
                "buy": 100000
            },
            "9": {
                "time": "60/60/60/60",
                "harvest": 500000,
                "sum": 9,
                "type": 2,
                "defense": 3,
                "attack": null,
                "buy": 1
            },
            "10": {
                "time": "60/60/60/60",
                "harvest": 5000000,
                "sum": 10,
                "type": 2,
                "defense": 3,
                "attack": null,
                "buy": null
            },
            "11": {
                "time": "60/60/60/60",
                "harvest": 50000,
                "sum": 11,
                "type": 3,
                "hp": 6,
                "defense": null,
                "attack": null,
                "buy": 10000
            },
            "12": {
                "time": "60/60/60/60",
                "harvest": 150000,
                "sum": 12,
                "type": 3,
                "hp": 6,
                "defense": null,
                "attack": null,
                "buy": 50000
            },
            "13": {
                "time": "60/60/60/60",
                "harvest": 300000,
                "sum": 13,
                "type": 3,
                "hp": 6,
                "defense": null,
                "attack": null,
                "buy": 100000
            },
            "14": {
                "time": "60/60/60/60",
                "harvest": 500000,
                "sum": 14,
                "type": 3,
                "hp": 6,
                "defense": null,
                "attack": null,
                "buy": 1
            },
            "15": {
                "time": "60/60/60/60",
                "harvest": 5000000,
                "sum": 15,
                "type": 3,
                "hp": 6,
                "defense": null,
                "attack": null,
                "buy": null
            },
            "16": {
                "time": "60/60/60/60",
                "harvest": 50000,
                "sum": 16,
                "type": 4,
                "hp": 2,
                "defense": 1,
                "attack": 1,
                "buy": 10000
            },
            "17": {
                "time": "60/60/60/60",
                "harvest": 150000,
                "sum": 17,
                "type": 4,
                "hp": 2,
                "defense": 1,
                "attack": 1,
                "buy": 50000
            },
            "18": {
                "time": "60/60/60/60",
                "harvest": 300000,
                "sum": 18,
                "type": 4,
                "hp": 2,
                "defense": 1,
                "attack": 1,
                "buy": 100000
            },
            "19": {
                "time": "60/60/60/60",
                "harvest": 500000,
                "sum": 19,
                "type": 4,
                "hp": 2,
                "defense": 1,
                "attack": 1,
                "buy": 1
            },
            "20": {
                "time": "60/60/60/60",
                "harvest": 5000000,
                "sum": 20,
                "type": 4,
                "hp": 2,
                "defense": 1,
                "attack": 1,
                "buy": null
            }
        };
        if (this.seedList == null) {
        }
    }
    var d = __define,c=ItemBagInfo;p=c.prototype;
    return ItemBagInfo;
})();
egret.registerClass(ItemBagInfo,"ItemBagInfo");
