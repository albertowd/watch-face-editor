<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-watch-variant',
          title: 'Device',
          to: `/device/${this.$route.params.name ? this.$route.params.name : 'GTS'}`
        },
        {
          icon: 'mdi-heart',
          title: 'Activity',
          to: '/'
        },
        {
          icon: 'mdi-play-box',
          title: 'Animation',
          to: '/'
        },
        {
          icon: 'mdi-battery-charging',
          title: 'Battery',
          to: '/'
        },
        {
          icon: 'mdi-clock',
          title: 'Clock',
          to: '/'
        },
        {
          icon: 'mdi-calendar',
          title: 'Date',
          to: '/'
        },
        {
          icon: 'mdi-eye',
          title: 'Status',
          to: '/'
        },
        {
          icon: 'mdi-timer-sand-full',
          title: 'Time',
          to: '/'
        },
        {
          icon: 'mdi-cloud',
          title: 'Weather',
          to: '/'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Watch Face Editor'
    }
  }
}
</script>
<style src="./default.css"></style>
<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-content>
      <v-container class="fill-height" fluid>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer app :fixed="fixed">
      <v-spacer />by Alberto Wollmann Dietrich
    </v-footer>
  </v-app>
</template>
