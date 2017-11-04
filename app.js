//自定义机器人演示代码
/*
作者：陈希章
*/
var restify = require("restify");
var builder= require("botbuilder");

var server =restify.createServer();
server.listen(process.env.port||process.env.PORT || 3978,function(){
    console.log("%s 开始监听 %s",server.name,server.url);
});



var connector = new builder.ChatConnector({
    appId:"48edda2d-19fb-4a65-add1-06d226dd0001",
    appPassword:"scjqFZY78{moqCJQO598>_?"
});

server.post("/api/messages",connector.listen());

var bot = new builder.UniversalBot(connector,function(session){
    session.send("我收到了你的消息 :%s",session.message.text);
});