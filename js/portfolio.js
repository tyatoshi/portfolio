 $(".popup_help").click(function() {
   // 「?」にマウスが重なった場合の処理です。

   // ヘルプウィンドウのトップマージンを定義します。
   // 0だと「?」と上端が揃います。
   var marginTop = 80;

   // ヘルプウィンドウのレフトマージンを定義します。
   // 0だと「?」と左端が揃います。
   var marginLeft = 20;

   // ヘルプウィンドウ表示させる際のスピードを定義します。
   var speed = 300;

   // ヘルプウィンドウのオブジェクトを取得します。
   var popupObj = $(".popup_help_window");

   if (!popupObj.length) {
     // ウィンドウがなければ作成します。
     popupObj = $("<p/>").addClass("popup_help_window").appendTo($("body"));
   }
   
   var icon_name = $(this).attr("id");
   console.log(icon_name)
   
   if(icon_name === "ruby_icon"){
     var coment = "Ruby（ルビー）は、日本発の世界中で使われているプログラミング言語です。WebAppなどの作成に用います。"
   }else if(icon_name === "php_icon"){
     var coment = "Webに組み込まれるために開発されたプログラミング言語です。"
   }else if(icon_name === "html_icon"){
     var coment = "Webブラウザで表示するためにマークアップ言語です。このサイトもHTMLを使用し作成しています。"
   }else if(icon_name === "css_icon"){
     var coment = "あらゆるデバイスでスタイルを作るための言語です。このサイトもCSSを使用しデザインしています。"
   }else if(icon_name === "js_icon"){
     var coment = "ブラウザ上で動作し、様々な機能を付加できるスクリプト言語です。このPOPもJavaScriptで表示しています。"
   }
   
   
   // ウィンドウにメッセージを設定します。
   popupObj.text(coment);

   // ウィンドウのオフセットを計算します。
   var offsetTop = $(this).offset().top + marginTop;
   var offsetLeft = $(this).offset().left + marginLeft;

   // ウィンドウの位置を整え、表示します。
   popupObj.css({
     "top": offsetTop,
     "left": offsetLeft
   }).show(speed);

 }).mouseout(function() {
   // 「?」からマウスが離れた場合、テキストを空にしてウィンドウを隠します。
   $(".popup_help_window").text("").hide("fast");
 });
 