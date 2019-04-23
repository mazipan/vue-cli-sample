<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ToDoList></ToDoList>
  </div>
</template>

<script>
// @ is an alias to /src
import ToDoList from '@/components/ToDoList.vue'

export default {
  name: 'home',
  components: {
    ToDoList
  }
}
</script>
