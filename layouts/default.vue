<script>
import preview from '~/components/device/preview/preview.vue'

export default {
  components: {
    preview
  },
  data () {
    return {
      drawer: false,
      modelIndex: 0
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
          disabled: !this.$store.state.device.features.activity,
          icon: 'mdi-heart',
          title: this.$t('activity.title'),
          to: '/activity'
        },
        {
          disabled: !this.$store.state.device.features.animation,
          icon: 'mdi-play-box',
          title: this.$t('animation.title'),
          to: '/animation'
        },
        {
          disabled: !this.$store.state.device.features.background,
          icon: 'mdi-wallpaper',
          title: this.$t('background.title'),
          to: '/background'
        },
        {
          disabled: !this.$store.state.device.features.battery,
          icon: 'mdi-battery-charging',
          title: this.$t('battery.title'),
          to: '/battery'
        },
        {
          disabled: !this.$store.state.device.features.clock,
          icon: 'mdi-clock',
          title: this.$t('clock.title'),
          to: '/clock'
        },
        {
          disabled: !(this.$store.state.device.features.date.monthAndDay.oneline || this.$store.state.device.features.date.monthAndDay.separate.day || this.$store.state.device.features.date.monthAndDay.separate.month || this.$store.state.device.features.date.monthAndDay.separate.monthName || this.$store.state.device.features.date.weekDay),
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
          disabled: !(this.$store.state.device.features.shortcuts.pulse || this.$store.state.device.features.shortcuts.state || this.$store.state.device.features.shortcuts.weather),
          icon: 'mdi-hand-pointing-up',
          title: this.$t('shortcuts.title'),
          to: '/shortcuts'
        },
        {
          disabled: !(this.$store.state.device.features.status.alarm || this.$store.state.device.features.status.bluetooth || this.$store.state.device.features.status.dnd || this.$store.state.device.features.status.lock),
          icon: 'mdi-eye',
          title: this.$t('status.title'),
          to: '/status'
        },
        {
          disabled: !(this.$store.state.device.features.time.ampm || this.$store.state.device.features.time.delimiter || this.$store.state.device.features.time.hours || this.$store.state.device.features.time.minutes || this.$store.state.device.features.time.seconds),
          icon: 'mdi-timer-sand-full',
          title: this.$t('time.title'),
          to: '/time'
        },
        {
          disabled: !this.$store.state.device.features.weather,
          icon: 'mdi-cloud',
          title: this.$t('weather.title'),
          to: '/weather'
        }
      ]
    },
    locale () {
      return this.$store.state.i18n.locale
    },
    name () {
      return `${this.$store.state.device.vendor} ${this.$store.state.device.model}`
    },
    tDevices () {
      return this.$t('app.devices')
    },
    tLanguages () {
      return this.$t('app.languages')
    }
  },
  methods: {
    checkLocale (locale) {
      return locale === this.$store.state.i18n.locale
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
      <v-toolbar-title v-text="`${$t('app.title')} - ${name}`" />
      <v-spacer></v-spacer>
      <v-menu left bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-subheader>{{ tDevices }}</v-subheader>
        <v-list>
          <v-list-item-group v-model="modelIndex">
            <v-list-item exact to="?device=gts">Amazfit GTS</v-list-item>
            <v-list-item exact to="?device=mb4">Mi Band 4</v-list-item>
          </v-list-item-group>
        </v-list>
        <v-divider />
        <v-subheader>{{ tLanguages }}</v-subheader>
        <v-list>
          <v-list-item exact to="?locale=en">English</v-list-item>
          <v-list-item exact to="?locale=pt">Português</v-list-item>
        </v-list>
        <v-divider />
        <v-list>
          <v-list-item disabled>About</v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-content>
      <v-layout align-center fill-height justify-center wrap>
        <preview class="mr-10" />
        <nuxt />
      </v-layout>
    </v-content>
    <v-footer app :fixed="true">
      <v-btn class="purple" href="https://github.com/albertowd/watch-face-editor" target="_blank"><v-icon>mdi-github-circle</v-icon></v-btn>
      <v-spacer />{{ by }} Alberto Wollmann Dietrich
    </v-footer>
  </v-app>
</template>
