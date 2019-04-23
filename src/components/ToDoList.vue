<template>
  <div>
    <div v-for="todoItem in todos" :key="todoItem.id" class="todo__item">
      <h1>{{ todoItem.title }}</h1>
      <p>{{ todoItem.desc }}</p>

      <button @click="onClickEdit(todoItem)" class="todo__btn todo__btn--edit">Edit</button>
      <button @click="onClickDelete(todoItem)" class="todo__btn todo__btn--delete">Delete</button>
    </div>
    <br>
    <div class="todo__form">
      <input type="text" v-model="todo.title" placeholder="Type title" class="todo__input">
      <input type="text" v-model="todo.desc" placeholder="Type description" class="todo__input">
      <button @click="onSaveNewTodo" class="todo__btn todo__btn--save">Save</button>
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

<style lang="css" scoped>
.todo__item {
  border: 2px solid #ddd;
  border-radius: 0.25em;
  padding: 1em;
  margin: 1em;
  text-align: left;
}
.todo__form{
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin: 1em;
}
.todo__input{
  width: 100%;
  max-width: 250px;
  padding: 1em;
  border: 1px solid #ddd;
  border-radius: 0.25em;
  margin: .25em 0;
}
.todo__btn {
  padding: 1em 3em;
  margin: 0.5em;
  border: 0;
  outline: 0;
  border-radius: 0.25em;
  cursor: pointer;
}
.todo__btn--edit {
  background-color: #00d0b2;
}
.todo__btn--delete {
  background-color: #ff3760;
}
.todo__btn--save {
  background-color: #3273dc;
}
</style>
