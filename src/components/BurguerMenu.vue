<template>
  <div class="mobile-menu">
    <div class="burguer" v-on:click="toggleNavigationMenu()">
      <div class="stick" v-bind:class="{ 'cross-top': displayed }"></div>
      <div class="stick" v-bind:class="{ hidden: displayed }"></div>
      <div class="stick" v-bind:class="{ 'cross-bottom': displayed }"></div>
    </div>
    <div class="overlay" v-bind:class="{ overlayDisplayed: displayed }"></div>
    <div class="navigation-holder" v-if="showNavigation">
      <Navigation></Navigation>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mobile-menu {
  z-index: 2;
}

.burguer {
  display: flex;
  align-self: flex-start;
  flex-direction: column;
  justify-content: space-between;
  height: 4em;
  z-index: 5;
  position: relative;
}

.overlay {
  z-index: 3;
  position: absolute;
  width: 0px;
  height: 0px;
  top: 0;
  right: 0;
  transform: translate3d(50%, -50%, 0);
  background-color: var(--mobile-menu-background);
  border-radius: 50%;
  transition: width ease-in 0.6s, height ease-in 0.6s;
}

.navigation-holder {
  z-index: 4;
  // background-color: ;
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
}

.overlayDisplayed {
  width: 2500px;
  height: 2500px;
}

.stick {
  width: 3.5em;
  height: 0.7em;
  transition: transform ease 0.5s, box-shadow ease 0.5s;
  background-color: var(--call-to-action);
  outline: solid #000 !important;
  transform: skew(-10deg, -2deg);
  box-shadow: 0.3em 0.3em 0 0.05em var(--call-to-action-complement),
    0.5em 0.5em 0 0.06em #000;
}

.cross-top {
  transform: rotate3d(0, 0, 1, 45deg) translate3d(0.8em, 1.5em, 0);
  box-shadow: 0em 0em 0 0em transparent;
}

.cross-bottom {
  transform: rotate3d(0, 0, 1, -45deg) translate3d(0.9em, -1.5em, 0);
  box-shadow: 0em 0em 0 0em transparent;
}
</style>

<script lang="ts">
import Vue from "vue";
import Navigation from "../components/Navigation.vue";
import { mapState } from "vuex";

export default Vue.extend({
  components: {
    Navigation
  },
  data() {
    return {
      displayed: false,
      showNavigation: false
    };
  },
  computed: mapState(["currentState"]),
  watch: {
    currentState(newVal, oldVal) {
      this.$data.displayed = false;
      this.$data.showNavigation = false;
    }
  },
  methods: {
    toggleNavigationMenu() {
      this.$data.displayed = !this.$data.displayed;
      if (this.$data.displayed) {
        setTimeout(() => {
          this.$data.showNavigation = true;
        }, 600);
      } else {
        this.$data.showNavigation = false;
      }
    }
  }
});
</script>
