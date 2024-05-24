// 事前準備: htmlのheadタグの中にVue.js 2系のCDN版をインポートしてください
// 問1: マスタッシュ構文を使ったデータバインディングでid:app内のpタグの中をHello World!に変更してください
// 問2: v-htmlを使ったデータバインディングでid:app内spanタグの中を、aタグとしてください。（変数aTagに代入してある文字列を使ってください）
// 問3: v-bindを使ったデータバインディングでspanタグに、class『red』と『bold』を付与してください。
// 問4: ディレクティブ（v-if）を使用して変数holidayがtrueのときだけ、id:app-2の要素が表示されるようにしてください
//      変数holidayをfalseにして、表示されないことを確認してください。
// 問5: v-forを使用して、配列arrayの中身をid:app-3内にliタグで表示させてください。olタグの中に入れて、箇条書きリストとしてください。

// 問6: 問4で作成した箇条書きリストにチェックボックスを追加して、v-on, v-model, v-bind等を使用してチェックが入るとその項目に取り消し線が出てくるメソッドをバインドしてください。
//      画面上でそのような動作になっていれば正解でv-on, v-model, v-bindをすべて使っていなければいけないということはありません。
//      また適宜arrayの値を書き換えても構いません。


const atag = `
    <a href="#">
        htmlタグとして認識されていますか？
    </a>
    `

let holiday =  true;

let array = [
    { text: 'JavaScriptの学習' },
    { text: 'Vueの学習' },
    { text: '実践あるのみ' }
];

new Vue({
    el: '#app',
    data: {
      message: 'Hello World!'
    }
  });