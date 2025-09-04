<template>
    <h1>i am app copmonent</h1>
    <h2>name:{{ name }}</h2>
    <h2>age:{{ age }}</h2>
    <h2>sex:{{ sex }}</h2>
    <button @click="sayHello">Say Hello</button>
    <button @click="changeSex">Change Sex</button>
    <button @click="test1">test vue2 load vue3 </button>
    <button @click="test2">test vue3 load vue2 </button>
</template>


<script>
import { h } from 'vue'
export default {
  name: 'App',

  data(){
    return{
      sex:'female'
    }
  },
  methods:{
    changeSex(){
      this.sex = this.sex === 'female' ? 'male' : 'female'
    },
    test1(){
      console.log(this.name),
      console.log(this.age)
      this.sayHello()
    }
  },

  setup(){
    let name = 'xiahui'
    let age = 18

    function sayHello(){
      alert(`hello ${name}, you are ${age} years old`)
    }

    // error  vue3 cannot access vue2 data directly
    function test2(){
      console.log(this.sex),
      this.changeSex()
    }

    return {
      //return function
      sayHello,
      // test2,
      //return object
      name,
      age,

    }
    // return ()=> {h('xiahui','18')}
  }
}
</script>

