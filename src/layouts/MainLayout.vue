<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title class="absolute-center">
          Awesome Todo
        </q-toolbar-title>

        <q-btn v-if="!loggedIn"
               flat
               to="/auth"
               icon-right="account_circle"
               label="Login"
               class="absolute-right"></q-btn>
        <q-btn v-else
               flat
               @click="logoutUser"
               icon-right="account_circle"
               label="Logout"
               class="absolute-right"></q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen"
              :breakpoint="767"
              :width="250"
              show-if-above
              bordered
              content-class="bg-primary">
      <q-list dark>
        <q-item-label header
                      class="text-grey-4">
          Navigation
        </q-item-label>
        <EssentialLink v-for="link in essentialLinks"
                       :key="link.title"
                       v-bind="link" />
        <q-item v-if="$q.platform.is.electron"
                exact
                clickable
                @click="quitApp"
                class="text-grey-13 absolute-bottom">
          <q-item-section avatar>
            <q-icon name="power_settings_new" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Quit</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-footer>
      <q-tabs>
        <q-route-tab v-for="(link,index) in essentialLinks"
                     :key="index"
                     :icon="link.icon"
                     :to="link.link"
                     :label="link.title" />
      </q-tabs>

    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import { mapState, mapActions } from 'vuex'

const linksData = [
  {
    title: 'Todo',
    caption: '',
    icon: 'list',
    link: '/'
  },
  {
    title: 'Settings',
    caption: '',
    icon: 'settings',
    link: '/settings'
  }
];

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  computed: {
    ...mapState('auth', ['loggedIn'])
  },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  },
  methods: {
    ...mapActions('auth', ['logoutUser']),
    quitApp () {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Really quit Awesome Todo?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        if (this.$q.platform.is.electron)
        {
          require('electron').ipcRenderer.send('quit-app')

        }
      })
    }
  }
}
</script>

<style lang="scss">
@media screen and (min-width: 768px) {
  .q-footer {
    display: none;
  }
}
.q-drawer {
  .q-router-link--exact-active {
    color: white !important;
  }
}
</style>
