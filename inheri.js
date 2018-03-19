(function() {
    'use strict'

    class Box {
        constructor(item) {
            this.item = item
        }

        open() {
            console.log("宝箱を開いた。" + this.item + "を手に入れた。");
        }
    }

    class JewelryBox extends Box {
        look() {
            console.log("宝箱はキラキラと輝いている");
        }
    }

    var box = new Box("鋼鉄の剣");
    box.open();

    var jewelrybox = new JewelryBox("魔法の指輪");
    jewelrybox.look();
    jewelrybox.open();

})();
