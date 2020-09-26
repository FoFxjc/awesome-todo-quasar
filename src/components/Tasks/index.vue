<template>
  <q-item clickable
          v-touch-hold:1500.mouse="showEditTaskModal"
          @click="updateTask({id:id,updates:{completed:!task.completed}})"
          :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
          v-ripple>
    <q-item-section side
                    top>
      <q-checkbox :value="task.completed"
                  class="no-pointer-events" />
    </q-item-section>

    <q-item-section>
      <q-item-label :class="{ 'text-strikethrough': task.completed }"
                    v-html="$options.filters.searchHightlight(task.name,search)">{{task.name | searchHightlight(search)}}</q-item-label>
    </q-item-section>
    <q-item-section v-if="task.dueDate"
                    side>
      <div class="row">
        <div class="column justify-center">
          <q-icon name="event"
                  class="q-mr-xs"
                  size="18px" />
        </div>

        <div class="column">
          <q-item-label class="row justify-end"
                        caption>{{task.dueDate | niceData}}</q-item-label>
          <q-item-label class="row justify-end"
                        caption>
            <small>{{ taskdueTime }}</small>
          </q-item-label>
        </div>

      </div>

    </q-item-section>
    <q-item-section side>
      <div class="row">
        <q-btn @click.stop="showEditTaskModal"
               flat
               round
               dense
               color="primary"
               icon="edit" />
        <q-btn @click.stop="promptToDelete(id)"
               flat
               round
               dense
               color="red"
               icon="delete" />
      </div>

    </q-item-section>

    <q-dialog v-model="showEditTask">
      <edit-task @close="showEditTask = false"
                 :task="task"
                 :id="id" />
    </q-dialog>
  </q-item>
</template>

<script>
import EditTask from 'components/Tasks/Models/EditTask'
import { mapActions, mapState, mapGetters } from 'vuex'
import { date } from 'quasar'
const { formatDate } = date
export default {
  props: ['task', 'id'],
  components: {
    EditTask
  },
  data () {
    return {
      showEditTask: false
    }
  },
  computed: {
    ...mapState('tasks', ['search']),
    ...mapGetters('settings', ['settings']),
    taskdueTime () {
      if (this.settings.show12HourTimeFormat)
      {
        return date.formatDate(this.task.dueDate + ' ' + this.task.dueTime, 'h:mmA')
      }
      return this.task.dueTime
    }
  },
  filters: {
    niceData (value) {
      return date.formatDate(value, 'MMM D')
    },
    searchHightlight (value, search) {
      if (search)
      {
        let searchRegExp = new RegExp(search, 'ig')
        return value.replace(searchRegExp, (match) => {
          return '<span class="bg-yellow-6">' + match + '</span>'
        })
      }
      return value
    }
  },
  methods: {
    ...mapActions('tasks', ['updateTask', 'deleteTask']),
    showEditTaskModal () {
      this.showEditTask = true
    },
    promptToDelete (id) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Really delete?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.deleteTask(id)
      })
    }
  }
}
</script>
