function CreateLogger(e){"undefined"==typeof window.logger&&(window.logger=require("logger"),e===!0&&(window.logger.socket=new WebSocket("ws://"+window.LogHost+":"+window.LogPort),window.logger.socket.onopen=function(){"undefined"==typeof window.logger.socket.connected&&(window.logger.socket.connected=!0)}))}window.GameHost="chahu.h5ii.com",window.GamePort=18080,window.LogHost="chahu.h5ii.com",window.LogPort=38086,window.GameVersion="1.1",cc.sys.isNative?cc.sys.os===cc.sys.OS_ANDROID?window.GameVersion="android"+window.GameVersion:cc.sys.oc===cc.sys.OS_IOS&&(window.GameVersion="ios"+window.GameVersion):cc.sys.isMobile?window.GameVersion="webMobile"+window.GameVersion:window.GameVersion="web"+window.GameVersion,window.GameLog=function(e){if("undefined"==typeof window.logger)return void cc.log(e);var o=Array.prototype.slice.call(arguments);window.logger.apply(logger,o)},window.GameEvent=function(){var e=require("gameEvent");return e.inst},window.GameSocket=function(){var e=require("socket");return e},window.AudioMng=function(){var e=require("AudioMng");return e.inst},window.Notify=function(){var e=require("notifyAnim");return e.inst},window.Voice=function(){return"undefined"==typeof window.gameVoice&&(window.gameVoice=new(require("Voice"))),window.gameVoice},window.UploadRecordedFileSuccess=function(e){window.Voice().UploadCallback(e)},window.PlayRecordedFileEnd=function(e){window.Voice().PlayRecordedFileEnd(e)},window.WeiXin=function(){return"undefined"==typeof window.weiXinModule&&(window.weiXinModule=new(require("weiXin"))),window.weiXinModule},window.WeiXinCodeToAccessToken=function(e,o){var i=window.WeiXin();i.CodeToAccessToken(e,o,i.GetCallBack())},window.SetRoomIdByUrlScheme=function(e){window.schemeRoomId=parseInt(e)},window.SetSpriteImage=function(e,o,i){var n=new Date;e.lastSetSpriteImageTime=n,"undefined"!=typeof i&&i!==!1?cc.loader.loadRes(o,cc.SpriteFrame,function(e,o){return function(i,n){GameLog(o.lastSetSpriteImageTime.getTime(),e.getTime()),o.lastSetSpriteImageTime>e||(o.spriteFrame=n)}}(n,e)):cc.loader.load(o,function(e,o){return function(i,n){if(!(o.lastSetSpriteImageTime>e)){if(i)return void cc.error(i.messsgae||i);var r=n instanceof cc.Texture2D;if(r){var w=new cc.SpriteFrame(n);o.spriteFrame=w}}}}(n,e))},window.CardSpriteFrameCache=new Array(5);for(var l=0;l<5;++l){CardSpriteFrameCache[l]=new Array(50);for(var i=0;i<50;++i)CardSpriteFrameCache[l].push(null)}window.LoadAllCardSpriteFrame=function(){for(var e=[null,"left","down","right","up"],o=function(e,o){return function(i,n){i||(window.CardSpriteFrameCache[e-1][o]=n)}},i=1;i<=4;++i)for(var n=0;n<50;++n)cc.loader.loadRes(i+"/"+e[i]+n,cc.SpriteFrame,o(i,n));for(var r=0;r<50;++r)cc.loader.loadRes("2/sdown"+r,cc.SpriteFrame,o(5,r))};