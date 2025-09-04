<template>
    <h1>i am app copmonent</h1>
    <h2>name:{{ name }}</h2>
    <h2>age:{{ age }}</h2>
    <h2>work:{{ job.work }}</h2>
    <h2>salary:{{ job.salary }}</h2>
    <button @click="changeName">change name</button>
</template>


<script>
import { ref } from 'vue'
export default {
  name: 'App',

  setup(){
    let name = ref('xiahui')
    let age = ref(18)
    let job = ref(
      {
        work:'front-head',
        salary:'30k',
      }
    )

    function sayHello(){
      alert(`hello ${name}, you are ${age} years old`)
    }

    function changeName(){
      name.value ='zhangsan'
      age.value = 24
      // console.log(name)
      // console.log(name.value)    
      job.value.work = 'back-end'
      job.value.salary = '50k'

    }

    return {
      sayHello,
      changeName,
      name,
      age,
      job,
    }
  }
}
</script>

