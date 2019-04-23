<template>
  <div class="container">
    <div class="level">
      <div class="level-item has-text-centered">
        <div v-for="todoItem in todos" :key="todoItem.id" class="card" style="width: 300px;margin: .5em;">
          <header class="card-header">
            <h1 class="card-header-title title">{{ todoItem.title }}</h1>
          </header>
          <div class="card-content">
            {{ todoItem.desc }}
          </div>
          <footer class="card-footer">
            <a href="#" @click="onClickEdit(todoItem)" class="card-footer-item">Edit</a>
            <a href="#" @click="onClickDelete(todoItem)" class="card-footer-item">Delete</a>
          </footer>
        </div>
      </div>
    </div>
    <br>
    <div class="form">
      <div class="field">
        <input type="text" v-model="todo.title" placeholder="Type title" class="input">
      </div>
      <div class="field">
        <input type="text" v-model="todo.desc" placeholder="Type description" class="input">
      </div>
      <div class="field">
        <button @click="onSaveNewTodo" class="button is-primary">Save</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToDoList',
  data () {
    return {
      todos: [],
      todo: {
        id: '',
        title: '',
        desc: ''
      }
    }
  },
  methods: {
    onSaveNewTodo () {
      if (!this.todo.id) {
        // save new data
        this.todo.id = new Date().getTime()
        this.todos.push(this.todo)
      } else {
        // update data
        this.todos = this.todos.map(item => {
          if (item.id === this.todo.id) {
            item = Object.assign({}, item, this.todo)
          }
          return item
        })
      }
      this.todo = {
        id: '',
        title: '',
        desc: ''
      }
    },
    onClickEdit (todo) {
      this.todo = Object.assign({}, todo)
    },
    onClickDelete (todo) {
      this.todos = this.todos.filter(item => item.id !== todo.id)
    }
  }
}
</script>
