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
     var coment = "Ruby（ルビー）は、日本発の世界中で使われているプログラミング言語です。Railsを用いてWebアプリの開発を行えます。Portfolio内のWebApphaはRubyを用いて作成しています。"
   }else if(icon_name === "php_icon"){
     var coment = "PHPはWebに組み込まれるために開発されたプログラミング言語です。PHPを用いたWebサイトの作成を行えます。"
   }else if(icon_name === "html_icon"){
     var coment = "HTMLはWebブラウザで表示するためにマークアップ言語です。このサイトもHTMLを使用し作成しています。"
   }else if(icon_name === "css_icon"){
     var coment = "あらゆるデバイスでスタイルを作るための言語です。このサイトもCSSを使用しデザインしています。"
   }else if(icon_name === "js_icon"){
     var coment = "ブラウザ上で動作し、様々な機能を付加できるスクリプト言語です。JavaScriptを用いて動きのあるリッチなサイトの作成を行えます。このPOPもJavaScriptで表示しています。"
   }else if(icon_name === "tax_icon"){
     var coment = "法人税、所得税、消費税の申告書の作成を行えます。税理士科目の簿記論及び財務諸表論取得済み。法人税法を勉強中"
   }else if(icon_name === "accounting_icon"){
     var coment = "帳票からの記帳代行を行えます。10年ほど経理業務を行っておりますので、間違いない記帳やアドバイスを行えます。日商簿記1級取得済み。Freeeやマネーフォワード、TKC、弥生会計など各種会計ソフトを扱えます。"
   }else if(icon_name === "ps_icon"){
     var coment = "Potoshopとはアドビシステムズが販売している画像編集ソフトです。画像の切り抜きや補正などを行えます。現在勉強中です。"
   }else if(icon_name === "draw_icon"){
     var coment = "イラストやアイコンの作成など。現在勉強中。未だ画力的には小学生並み。"
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
 