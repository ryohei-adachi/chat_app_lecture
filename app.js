// Expressをインポート
let express = require('express');
const app = express();
const server = require('http').Server(app);
// Socket.ioをインポート
const io = require('socket.io')(server);


app.use(express.static('public')); 

app.get('/' , (req, res) => {
   res.sendFile(__dirname + '/index.html');
});

// クライアントと接続ができたら、'接続成功'とターミナルに表示される
io.on("connection", socket => {
  console.log('接続成功');
  //クライアントからメッセージ情報を受け取る
  socket.on('message_event', (data) => { 
      //受信したメッセージをターミナルに表示
      console.log('message: '+ data)

      //全クライアントに対して、メッセージ情報を送信する
      io.emit('message', data); 
  });
});

server.listen(3000,'X.X.X.X'); //X.X.X.XにIPアレスを設定してください
