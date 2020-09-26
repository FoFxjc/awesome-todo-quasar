<template>
  <transition appear
              enter-active-class="animated zoomIn"
              leave-active-class="animated zoomOut">
    <div :class="[{'q-mt-lg':!settings.showTasksInOneList}]"
         v-if="Object.keys(tasksCompleted).length">
      <list-header v-if="!settings.showTasksInOneList"
                   bgColor="bg-green-4">Completed</list-header>
      <q-list bordered
              separator>
        <task v-for="(task,key) in tasksCompleted"
              :key="key"
              :task="task"
              :id="key"></task>
      </q-list>
    </div>
  </transition>
</template>
<script>
import { mapGetters } from 'vuex'
import Task from 'components/Tasks/index'
import ListHeader from 'components/Shared/ListHeader'
export default {
  props: ['tasksCompleted'],
  computed: {
    ...mapGetters('settings', ['settings'])
  },
  components: {
    Task,
    ListHeader
  }

}
</script>
<style lang="scss" scoped>
</style>