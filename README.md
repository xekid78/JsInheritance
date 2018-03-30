# JsInheritance
継承

## 処理
`Box()`クラスを親クラスとして`JewelryBox()`クラスを子クラスにして処理を行う。

## コード
```
(function() {
    'use strict'

    class Box {
        constructor(item) {
            this.item = item;
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
```

## 出力結果  
```
宝箱を開いた。鋼鉄の剣を手に入れた。
宝箱はキラキラと輝いている
宝箱を開いた。魔法の指輪を手に入れた。
```
  
## 開発環境
| 開発ツール |  |
|:-|:-|
| OS | Windows10 |
| 仮想化ソフト | Oracle VM VirtualBox 5.2 |
| 構築ソフト | Vagrant 2.0.2 |
| 仮想化上OS | CentOS 6.9 |
| SSHクライアント | PuTTY 0.6.8 |
| FTPクライアント | Cyberduck 6.3.5 |
| エディタ | Atom 1.24.0 |
| 開発言語 | Java Script |
| Js環境 | Node.js 8.10.0 |
