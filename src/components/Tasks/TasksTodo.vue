<template>
  <transition appear
              enter-active-class="animated zoomIn"
              leave-active-class="animated zoomOut absolute-top">
    <div v-if="Object.keys(tasksTodo).length">
      <list-header v-if="!settings.showTasksInOneList"
                   bgColor="bg-orange-4">Todo</list-header>
      <q-list bordered
              separator>
        <task v-for="(task,key) in tasksTodo"
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
  props: ['tasksTodo'],
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