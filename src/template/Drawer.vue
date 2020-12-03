<template>
  <v-navigation-drawer
    id="drawer"
    v-model="drawer"
    :dark="barColor !== 'rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)'"
    :expand-on-hover="expandOnHover"
    :right="$vuetify.rtl"
    :src="barImage"
    mobile-breakpoint="960"
    app
    width="260"
    v-bind="$attrs"
  >
    <template v-slot:img="props">
      <v-img
        :gradient="`to bottom, ${barColor}`"
        v-bind="props"
      />
    </template>

    <v-divider class="mb-1" />

    <v-list
      dense
      nav
    >
      <v-list-item>
        <v-list-item-avatar
          class="align-self-center"
          color="white"
          contain
        >
          <v-img
            src="data:image/jpeg;base64,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"
            max-height="50"
          />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title
            class="display-1"
            v-text="profile.title"
          />
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider class="mb-2" />

    <v-list
      expand
      nav
    >
      <!-- Style cascading bug  -->
      <!-- https://github.com/vuetifyjs/vuetify/pull/8574 -->
      <div />

      <template v-for="(item, i) in computedItems">
        <base-item-group
          v-if="item.children"
          :key="`group-${i}`"
          :item="item"
        >
          <!--  -->
        </base-item-group>

        <base-item
          v-else
          :key="`item-${i}`"
          :item="item"
        />
      </template>

      <div />
    </v-list>

  </v-navigation-drawer>
</template>

<script>
  // Utilities
  import {
    mapState,
  } from 'vuex'

  export default {
    name: 'Drawer',

    props: {
      expandOnHover: {
        type: Boolean,
        default: false,
      },
    },

    data: () => ({
      items: [
        {
          icon: 'mdi-view-dashboard',
          title: 'dashboard',
          to: '/dashboard',
        },
        {
          icon: 'mdi-format-list-bulleted-square',
          title: 'todos',
          to: '/todo',
        }
      ],
    }),

    computed: {
      ...mapState(['barColor', 'barImage']),
      drawer: {
        get () {
          return this.$store.state.drawer
        },
        set (val) {
          this.$store.commit('SET_DRAWER', val)
        },
      },
      computedItems () {
        return this.items.map(this.mapItem)
      },
      profile () {
        return {
          avatar: true,
          title: this.$t('avatar')
        }
      },
    },

    methods: {
      mapItem (item) {
        return {
          ...item,
          children: item.children ? item.children.map(this.mapItem) : undefined,
          title: this.$t(item.title),
        }
      },
    },
  }
</script>

<style lang="sass">
  @import '~vuetify/src/styles/tools/_rtl.sass'

  #core-navigation-drawer
    .v-list-group__header.v-list-item--active:before
      opacity: .24

    .v-list-item
      &__icon--text,
      &__icon:first-child
        justify-content: center
        text-align: center
        width: 20px

        +ltr()
          margin-right: 24px
          margin-left: 12px !important

        +rtl()
          margin-left: 24px
          margin-right: 12px !important

    .v-list--dense
      .v-list-item
        &__icon--text,
        &__icon:first-child
          margin-top: 10px

    .v-list-group--sub-group
      .v-list-item
        +ltr()
          padding-left: 8px

        +rtl()
          padding-right: 8px

      .v-list-group__header
        +ltr()
          padding-right: 0

        +rtl()
          padding-right: 0

        .v-list-item__icon--text
          margin-top: 19px
          order: 0

        .v-list-group__header__prepend-icon
          order: 2

          +ltr()
            margin-right: 8px

          +rtl()
            margin-left: 8px
</style>