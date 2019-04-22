// app.js

// phina.jsをグローバルに展開
phina.globalize();

// MainSceneを定義
phina.define('MainScene', {
  superClass: 'CanvasScene',
  init: function(){
    this.superInit();
    this.backgroundColor = '#185674'; // 任意の背景色
  }
});

// メインの処理
phina.main(function() {
  // アプリケーションの作成
  var app = GameApp({
    startLabel: 'main'
  });
  app.run();
});
