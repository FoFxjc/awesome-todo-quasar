<template>
  <q-page>
    <div class="q-pa-md absolute full-width full-height column">

      <template v-if="tasksDownloaded">
        <div class="row q-mb-lg">
          <search></search>
          <sort></sort>
        </div>

        <p v-if="search && !Object.keys(tasksTodo).length && !Object.keys(tasksCompleted).length">No Search Results.</p>
        <q-scroll-area class="q-scroll-area-tasks">
          <no-tasks v-if="!Object.keys(tasksTodo).length && !search && !settings.showTasksInOneList"></no-tasks>
          <tasks-todo v-else
                      :tasksTodo="tasksTodo"></tasks-todo>
          <tasks-completed :tasksCompleted="tasksCompleted"></tasks-completed>
        </q-scroll-area>

        <div class="absolute-bottom text-center q-mb-lg no-pointer-events">
          <q-btn round
                 class="all-pointer-events"
                 color="primary"
                 size="24px"
                 icon="add"
                 @click="showAddTask=true" />
        </div>
        <q-dialog v-model="showAddTask">
          <add-task @close="showAddTask = false" />
        </q-dialog>
      </template>
      <template v-else>
        <span class="absolute-center">
          <q-spinner color="primary"
                     size="3em" />
        </span>

      </template>

    </div>

  </q-page>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import AddTask from 'components/Tasks/Models/AddTask'
import TasksTodo from 'components/Tasks/TasksTodo'
import TasksCompleted from 'components/Tasks/TasksCompleted'
import NoTasks from 'components/Tasks/NoTasks'
import Search from 'components/Tools/Search'
import Sort from 'components/Tools/Sort'
export default {
  name: 'PageIndex',
  components: {
    AddTask,
    TasksTodo,
    TasksCompleted,
    NoTasks,
    Search,
    Sort
  },
  mounted () {
    this.$root.$on('showAddTask', () => {
      this.showAddTask = true
    })
  },
  computed: {
    ...mapGetters('tasks', ['tasksTodo', 'tasksCompleted']),
    ...mapGetters('settings', ['settings']),
    ...mapState('tasks', ['search', 'tasksDownloaded'])
  },
  data () {
    return {
      showAddTask: false
    }
  }
}
</script>
<style lang="scss">
.q-scroll-area-tasks {
  display: flex;
  flex-grow: 1;
  .scroll {
    height: auto !important;
  }
}
</style>
