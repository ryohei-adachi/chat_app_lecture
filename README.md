# ①node.jsをインストールする

+ 下記サイトにアクセスして、偶数バージョンのnode.jsをダウンロードする。
  
※偶数バージョンのnode.jsは長期間サポートしてくれるバージョン(LTSと呼ぶ)

<br>

https://nodejs.org/ja/download/

<br><br>

+ ダウンロードしたexeファイルを実行して、「next」で進んでいき、node.jsをインストールする

<br><br>

<img src="https://github.com/ryohei-adachi/chat_app_lecture/assets/75190594/da009876-d3f5-4664-af5f-aeee071ec34f" width="70%" />

<br><br>

<img src="https://github.com/ryohei-adachi/chat_app_lecture/assets/75190594/da0361a3-1207-47ca-b4f8-cc30acb791fd" width="70%" />

※accept～にチェックを入れる

<br><br>

<img src="https://github.com/ryohei-adachi/chat_app_lecture/assets/75190594/afaf0753-27f9-4c87-9081-6872d375da10" width="70%" />

<br><br>

<img src="https://github.com/ryohei-adachi/chat_app_lecture/assets/75190594/8f9433c7-e290-4009-b6d1-61bfd5ac57af" width="70%" />

<br><br>

<img src="https://github.com/ryohei-adachi/chat_app_lecture/assets/75190594/3513c2cd-56fa-4e0d-9eec-d8667f8938cb" width="70%" />

<br><br>

<img src="https://github.com/ryohei-adachi/chat_app_lecture/assets/75190594/49429347-318f-4bdf-b893-e87900dc5a17" width="70%" />

<br><br>

<img src="https://github.com/ryohei-adachi/chat_app_lecture/assets/75190594/544d2d63-b8f5-4ba6-8a47-27a0e27e34c3" width="70%" />

<br><br>

<img src="https://github.com/ryohei-adachi/chat_app_lecture/assets/75190594/cca226d5-d1cd-4597-8a5b-c89ce0541d7c" width="70%" />

<br><br>

+ コマンドプロンプトを開いて、以下コマンドを打ってnode.jsのバージョンが表示されることを確認(Windows)
+ ターミナルを開いて、以下コマンドを打ってnode.jsのバージョンが表示されることを確認(Mac)



```
node -v
```

# ②Expressをインストールする

<br>

※Expressとは、Webサーバの機能を提供するnode.jsで利用できるフレームワーク

+作業用フォルダをデスクトップ上に作る

<br><br>
+ コマンドプロンプト(Windows)、ターミナル(Mac)を開き、以下のコマンドを入力する

```
cd <作業用フォルダのパス>
npｍ init
```

<br>

<img src="https://github.com/ryohei-adachi/chat_app_lecture/assets/75190594/65de577c-8089-4323-9d0d-996c18cce84c" width="70%" />

<br>

<img src="https://github.com/ryohei-adachi/chat_app_lecture/assets/75190594/7600a7ed-a564-4d35-8d61-3bfa7135c1db" width="70%" />

<br><br>

+ さらに以下のコマンドを入力する


```
npm install express
```

# ③socket.ioのインストール

※socket.ioとは、サーバとクライアントの間で双方向の通信するWebSocketの技術を提供するライブラリ

※WebSocketの技術とは、クライアントとWebサーバとの間で双方向通信を行うための仕組み

<br><br>

+ コマンドプロンプト(Windows)、ターミナル(Mac)を開き、以下のコマンドを入力する

```
npm install --save socket.io
```

# ④「app.js」、「index.html」、「/public/style.css」のダウンロードと配置

+ 「app.js」、「index.html」、「/public/style.css」を本リポジトリからダウンロードする

+ ダウンロードした「app.js」、「index.html」、「/public/style.css」を作業フォルダに配置する

# ⑤IPアドレス箇所の書き換え



+ コマンドプロンプト(Windows)、ターミナル(Mac)を開き、以下のコマンドを入力する
