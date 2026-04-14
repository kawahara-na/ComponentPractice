<script setup lang="ts">
//typescriptの専用・推奨

//分割代入で受け取り、propsで渡された値がない場合の初期値も設定できる
const {
  foo = 'Foo',
  title = 'タイトル無し',
  number = 0,
  text = 'テキストなし',
} = defineProps<{
  foo: String
  title: String
  number: Number
  text?: String // ?:にすることで入力が任意(オプショナル)になる
}>()

// definePropsは2回以上呼び出すとエラーになる

//配列で受け取るとany型になる
// const props = defineProps(['foo', 'title', 'number'])

//objectで受け取ることができる(ランタイム型指定)
// const props2 = defineProps({
//   title: String,
//   number: Number,
// })

// export default {
//     props:['foo'],
//     setup(props) {
//         console.log(props.foo);
//     }
// }
// script setup がない場合の setup()は第一引数にpropsをうけとる
</script>
<template>
  <div>
    <h2>Props</h2>
    <br />{{ foo }} <br />タイトル：{{ title }} 番号：{{ number }} <br />テキスト(任意)：{{ text }}
  </div>
</template>
