# ①node.jsをインストールする

+ 下記サイトにアクセスして、偶数バージョンのnode.jsをダウンロードする。
  
※偶数バージョンのnode.jsは長期間サポートしてくれるバージョン(LTSと呼ぶ)


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

+ 作業用フォルダをデスクトップ上に作る

<img src="https://github.com/ryohei-adachi/chat_app_lecture/assets/75190594/9b982f89-5316-40dd-8eab-23db7860aedb" width="70%" />

<br><br>
+ コマンドプロンプト(Windows)、ターミナル(Mac)を開き、以下のコマンドを入力する

```
cd <作業用フォルダのパス>
npｍ init
```
<br>

<img src="https://github.com/ryohei-adachi/chat_app_lecture/assets/75190594/6d7860b3-be5f-4f01-96fb-85e979d8aee2" width="70%" />

<br>

※デスクトップ上に「chat_app」という作業用フォルダを作った場合、「cd Desktop/char_app」となる

<br>

「Error: EPERM: operation not permitted, uv_cwd」というエラーが起きた場合は、環境設定 > セキュリティとプライバシ > ファイルとフォルダで、ターミナルの"デスクトップ"のアクセス許可にチェックしてください。(Mac)

<img src="https://github.com/ryohei-adachi/chat_app_lecture/assets/75190594/4ed541fd-48b4-4f8d-b385-0a82b8f542f3" width="70%" />


↓Windows(コマンドプロンプト)上でnpm initコマンドを実行
<br>

<img src="https://github.com/ryohei-adachi/chat_app_lecture/assets/75190594/65de577c-8089-4323-9d0d-996c18cce84c" width="70%" />

<br>

<br>
↓Mac(ターミナル)上でnpm initコマンドを実行

<br>

<img src="https://github.com/ryohei-adachi/chat_app_lecture/assets/75190594/c81495dd-3054-440f-9a23-aebcbc7fa1be" width="70%" />
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
<br><br>
↓Mac(ターミナル)で、Expressとsocket.ioのインストール

<img src="https://github.com/ryohei-adachi/chat_app_lecture/assets/75190594/d0c5e7c8-0496-4bcf-bd05-7b4758f085a2" width="70%" />


# ④「app.js」、「index.html」、「/public/style.css」のダウンロードと配置

+ 「app.js」、「index.html」、「/public/style.css」を本リポジトリからダウンロードする

<br>

<img src="https://github.com/ryohei-adachi/chat_app_lecture/assets/75190594/15dcaa02-5f0c-4198-bea5-3a857277491f" width="70%" />


+ ダウンロードした「app.js」、「index.html」、「/public/style.css」を作業フォルダに配置する

<br>

<img src="https://github.com/ryohei-adachi/chat_app_lecture/assets/75190594/96fef3ea-07b5-40f2-a6f9-0c357b119829" width="70%" />

# ⑤「inde.html」のbodyタグの中身を完成させる

<br>



+ ダウンロードした「inde.html」をテキストエディタ(VisualStudio、メモ帳、さくらエディタなど)で開く

<br>

<img src="https://github.com/ryohei-adachi/chat_app_lecture/assets/75190594/94d575cd-9b46-4443-8340-326fb186dc3d" width="70%" />

<br>

+ 「inde.html」のbodyタグの中身に下記内容を記載する

※「ここにformタグを追加してください」コメントの下に記載する

```
<!--ここにformタグを追加してください-->
<form id="message_form" action="#">
    <div class="form">
        <input id="input_msg" autocomplete="off" />
        <button>
         Send
         </button>
    </div>
</form>
```

<br>

<img src="https://github.com/ryohei-adachi/chat_app_lecture/assets/75190594/66187750-4c7f-4821-97e1-6c84a619ace3" width="70%" />

<br>

+ 記載した後は、ファイルを保存する

# ⑥IPアドレス箇所の書き換え

+ ダウンロードした「inde.html」と「app.js」をテキストエディタ(VisualStudio、メモ帳、さくらエディタなど)で開く

<br>

+ コマンドプロンプトを開き、以下のコマンドを入力して、PCに割り当てらているIPアドレスを確認する(Windows)

```
ipconfig
```

<br>

+ 「Appleメニュー」（画面左上リンゴのマーク）> 「システム設定」> ［Wi-Fi］> 接続済みSSIDの右にある［詳細］をクリックしてIPアドレスを確認する(Mac)

<br>

<img src="https://github.com/ryohei-adachi/chat_app_lecture/assets/75190594/098fe7b4-2c0b-4758-860e-2336e86ba3a5" width="70%" />

<br>
<br>

<img src="https://github.com/ryohei-adachi/chat_app_lecture/assets/75190594/e7bbe436-cb49-4a14-8f0a-c335c9163225" width="70%" />

+ 「inde.html」と「app.js」のX.X.X.Xの個所を確認したIPアドレスに書き換えて、保存する

<br>

<img src="https://github.com/ryohei-adachi/chat_app_lecture/assets/75190594/737731b9-fab5-4d1b-8b60-f97c1b0e30ce" width="70%" />

<br><br>

<img src="https://github.com/ryohei-adachi/chat_app_lecture/assets/75190594/2542efa7-b098-4124-936c-00e8f8b9267d" width="70%" />


<br>

# ⑦アプリの起動

<br>

+ コマンドプロンプト、ターミナルを開き、下記のコマンドを入力する

```
cd <プロジェクト名>
node app.js
```

<br>

+ 以下のURLにアクセスする

<br>


http://localhost:3000
