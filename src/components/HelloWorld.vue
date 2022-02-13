<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
　　　　　　　　<h2>{{ text }}</h2> <!--追加!!!!!!!-->
  <button v-on:click="callAlert()">Add 1</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      text: 'Test data' //追加!!!!!!!
    }
  },methods:{
    callAlert(){alert('Hello')}
  }
}
</script>