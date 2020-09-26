<template>
  <q-page padding>
    <q-list class="q-mb-md"
            bordered
            padding>
      <q-item-label header>Settings</q-item-label>

      <q-item tag="label"
              v-ripple>
        <q-item-section>
          <q-item-label>Show 12 hour time format</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-toggle color="blue"
                    v-model="show12HourTimeFormat" />
        </q-item-section>
      </q-item>
      <q-item tag="label"
              v-ripple>
        <q-item-section>
          <q-item-label>Show Tasks In One List</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-toggle color="blue"
                    v-model="showTasksInOneList" />
        </q-item-section>
      </q-item>
    </q-list>
    <q-list bordered
            padding>
      <q-item-label header>More</q-item-label>

      <q-item tag="label"
              to="/settings/help"
              v-ripple>
        <q-item-section>
          <q-item-label>Help</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right"></q-icon>
        </q-item-section>
      </q-item>
      <q-item tag="label"
              @click="visitOurWebsite"
              v-ripple>
        <q-item-section>
          <q-item-label>Visit our website</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right"></q-icon>
        </q-item-section>
      </q-item>
      <q-item tag="label"
              @click="EmailUs"
              v-ripple>
        <q-item-section>
          <q-item-label>Email Us</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right"></q-icon>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { openURL } from 'quasar'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'PageIndex',
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters('settings', ['settings']),
    show12HourTimeFormat: {
      get () {
        return this.settings.show12HourTimeFormat
      },
      set (value) {
        this.setShow12HourTimeFormat(value)
      }
    },
    showTasksInOneList: {
      get () {
        return this.settings.showTasksInOneList
      },
      set (value) {
        this.setShowTasksInOneList(value)
      }
    }
  },
  methods: {
    ...mapActions('settings', ['setShow12HourTimeFormat', 'setShowTasksInOneList']),
    visitOurWebsite () {
      openURL('http://www.google.com')
    },
    EmailUs () {
      window.location.href = 'mailto:hello@awesometodo?subject=Awesome ToDo Feedback'
    }
  }
}
</script>
