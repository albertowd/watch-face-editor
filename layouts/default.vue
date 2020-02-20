<script>
export default {
  data () {
    return {
      drawer: false
    }
  },
  computed: {
    by () {
      return this.$t('app.by')
    },
    items () {
      return [
        {
          disabled: false,
          icon: 'mdi-watch-variant',
          title: this.$t('device.title'),
          to: '/device'
        },
        {
          disabled: !this.$store.state.activity.allowed,
          icon: 'mdi-heart',
          title: this.$t('activity.title'),
          to: '/activity'
        },
        {
          disabled: !this.$store.state.animation.allowed,
          icon: 'mdi-play-box',
          title: this.$t('animation.title'),
          to: '/animation'
        },
        {
          disabled: !this.$store.state.background.allowed,
          icon: 'mdi-wallpaper',
          title: this.$t('background.title'),
          to: '/background'
        },
        {
          disabled: !this.$store.state.battery.allowed,
          icon: 'mdi-battery-charging',
          title: this.$t('battery.title'),
          to: '/battery'
        },
        {
          disabled: !this.$store.state.clock.allowed,
          icon: 'mdi-clock',
          title: this.$t('clock.title'),
          to: '/clock'
        },
        {
          disabled: !this.$store.state.date.allowed,
          icon: 'mdi-calendar',
          title: this.$t('date.title'),
          to: '/date'
        },
        {
          disabled: false,
          icon: 'mdi-json',
          title: this.$t('json.title'),
          to: '/json'
        },
        {
          disabled: !this.$store.state.status.allowed,
          icon: 'mdi-eye',
          title: this.$t('status.title'),
          to: '/status'
        },
        {
          disabled: !this.$store.state.time.allowed,
          icon: 'mdi-timer-sand-full',
          title: this.$t('time.title'),
          to: '/time'
        },
        {
          disabled: !this.$store.state.weather.allowed,
          icon: 'mdi-cloud',
          title: this.$t('weather.title'),
          to: '/weather'
        }
      ]
    }
  },
  methods: {
    changeLang (lang) {
      this.$store.commit('SET_LANG', lang)
    }
  }
}
</script>
<style src="./default.css"></style>
<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" clipped fixed app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :disabled="item.disabled"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar clipped-left fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="$t('app.title')" />
      <v-spacer></v-spacer>
      <v-menu left bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-spacer></v-spacer>
          <v-list-item @click="changeLang('en')">English</v-list-item>
          <v-list-item @click="changeLang('pt')">Português</v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-content>
      <v-container class="fill-height" fluid>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer app :fixed="true">
      <v-spacer />{{ by }} Alberto Wollmann Dietrich
    </v-footer>
  </v-app>
</template>
