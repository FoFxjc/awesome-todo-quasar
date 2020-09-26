<template>
  <q-card>
    <model-header>Edit Task</model-header>
    <q-form @submit="submitForm">
      <q-card-section class="q-pt-none">
        <model-taskname :name.sync="taskToSubmit.name"
                        ref="modelTaskName"></model-taskname>
        <model-duedate :dueDate.sync="taskToSubmit.dueDate"
                       @clear="clearDueDate"></model-duedate>
        <model-duetime v-if="taskToSubmit.dueDate"
                       :dueTime.sync="taskToSubmit.dueTime"></model-duetime>
      </q-card-section>
      <model-bottom></model-bottom>
    </q-form>

  </q-card>
</template>
<script>
import { mapActions } from 'vuex'
import minxinAddEditTask from 'src/mixins/mixin-add-edit-task'
export default {
  mixins: [minxinAddEditTask],
  props: ['task', 'id'],
  mounted () {
    this.taskToSubmit = Object.assign({}, this.task)
  },
  data () {
    return {
      taskToSubmit: {
        name: "",
        completed: false,
        dueDate: "",
        dueTime: ""
      },
    }
  },
  methods: {
    ...mapActions('tasks', ['updateTask']),
    submitTask () {
      this.updateTask({
        id: this.id,
        updates: this.taskToSubmit
      })
      this.$emit('close')
    },
  }
}
</script>
<style lang="scss" scoped>
</style>