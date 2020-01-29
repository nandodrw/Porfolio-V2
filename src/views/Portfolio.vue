<template>
  <div class="full-percentage universe-background">
    <div class="full-percentage hello-grid">
      <h1 class="item-me header-grid" v-on:click="goToRoot()">
        <span class="header-item-1 flex content-center align-center">Hi,</span>
        <span class="header-item-2 flex content-center align-center">I'm</span>
        <span class="header-item-3 flex content-start items-start"
          >Fernando</span
        >
        <span class="header-item-4 flex content-start align-end">Catacora</span>
      </h1>
      <div class="burguer-menu-container">
        <BurguerMenu></BurguerMenu>
      </div>
      <div class="navigation-container" v-if="showMenu">
        <Navigation></Navigation>
      </div>
      <div class="WIP-container" v-if="!showMenu">
        <WIP></WIP>
      </div>
      <div ref="canvasContainer" class="canvas-container">
        <HeadPlanet v-bind:container="canvasContainer"></HeadPlanet>
      </div>
      <div class="skill-stament" v-bind:class="{ hidden: !showMenu }">
        <SkillStaments></SkillStaments>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../css-modules/media-queries.scss";

.hello-grid {
  display: grid;
  box-sizing: border-box;
  grid-template-columns: 1rem auto 10fr 40fr 1rem;
  grid-template-rows: 1rem 70fr 30fr 1rem;
  z-index: 2;
  position: relative;
  overflow: hidden;

  @include for_breakpoint(tablet-landscape) {
    grid-template-columns: 1rem auto 5fr 65fr 1rem;
  }

  @include for_breakpoint(phone-landscape) {
    grid-template-columns: 1rem auto 40fr 10fr 1rem;
    grid-template-rows: 1rem 10fr 20fr auto 50fr 1rem;
  }

  @include for_breakpoint(phone-portrait large-tablet-portrait) {
    grid-template-columns: 1rem 30fr 70fr 1rem;
    grid-template-rows: 1rem 70fr 30fr 1rem;
  }

  @include for_breakpoint(large-tablet-portrait) {
    grid-template-columns: 1rem 25fr 20fr 50fr 1rem;
  }
}

.burguer-menu-container {
  display: none;
  z-index: 3;

  @include for_breakpoint(phone-landscape) {
    display: flex;
    grid-column: 4 / 5;
    grid-row: 2 / 3;
    justify-content: flex-end;
  }

  @include for_breakpoint(phone-portrait) {
    display: flex;
    grid-column: 3 / 4;
    grid-row: 2 / 3;
    justify-content: flex-end;
  }
}

.WIP-container {
  z-index: 5;
  grid-column: 4 / 5;
  grid-row: 2 / 3;
  display: flex;

  @include for_breakpoint(phone-landscape) {
    grid-column: 3 / 4;
    grid-row: 3 / 4;
    justify-content: flex-end;
  }

  @include for_breakpoint(phone-portrait) {
    grid-column: 3 / 4;
    grid-row: 2 / 3;
    justify-content: flex-end;
  }

  @include for_breakpoint(thin-phone-landscape) {
    grid-column: 3 / 5;
    grid-row: 3 / 4;
    justify-content: flex-end;
  }
}

.item-me {
  cursor: pointer;

  grid-column: 2 / 3;
  grid-row: 2 / 4;

  @include for_breakpoint(tablet-landscape) {
    font-size: 1.7rem;
  }

  @include for_breakpoint(phone-landscape) {
    grid-column: 2 / 4;
    grid-row: 2 / 3;
  }

  @include for_breakpoint(phone-portrait) {
    grid-column: 2 / 3;
    grid-row: 2 / 4;
  }
}

.header-grid {
  display: grid;
  grid-template-columns: 50fr 50fr;
  grid-template-rows: 15fr 5fr 30fr 50fr;

  @include for_breakpoint(phone-landscape) {
    grid-template-columns: 15fr 0fr 15fr 70fr;
    grid-template-rows: 50fr 50fr;
  }
}

.header-item-1 {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  font-size: 9vh;
  align-self: flex-end;
  padding-bottom: 0.25em;
  padding-left: 0.2em;
  text-shadow: 0.5rem 0.5rem 0 $nature-purple;

  @include for_breakpoint(phone-landscape) {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
    text-shadow: -0.2rem 0.3rem 0 $nature-purple;
    font-size: 1.5em;
    align-self: flex-end;
    padding-bottom: 0.2em;
  }

  @include for_breakpoint(phone-portrait) {
    font-size: 1.1em;
    text-shadow: -0.2rem 0.3rem 0 $nature-purple;
    align-self: flex-end;
    padding-bottom: 0.4em;
    padding-left: 0.3em;
    box-sizing: border-box;
  }
}

.header-item-2 {
  grid-row: 2 / 3;
  grid-column: 1 / 3;
  font-size: 5vh;
  text-shadow: 0.5rem 0.5rem 0 $nature-purple;

  @include for_breakpoint(phone-landscape) {
    grid-column: 3 / 4;
    grid-row: 2 / 3;
    text-shadow: -0.2rem 0.3rem 0 $nature-purple;
    font-size: 1.5em;
    align-self: flex-start;
  }

  @include for_breakpoint(phone-portrait) {
    font-size: 1em;
    text-shadow: -0.2rem 0.3rem 0 $nature-purple;
  }
}

.header-item-3 {
  grid-row: 3 / 5;
  grid-column: 1 / 2;
  writing-mode: vertical-rl;
  text-orientation: upright;
  padding-top: 1rem;
  // font-size: 2.5em;
  font-size: 11vh;
  letter-spacing: 0.4rem;
  text-shadow: -0.5rem 0.5rem 0 $nature-purple;

  @include for_breakpoint(phone-landscape) {
    grid-column: 4 / 5;
    grid-row: 1 / 2;
    font-size: 2em;
    writing-mode: horizontal-tb;
    text-shadow: -0.2rem 0.3rem 0 $nature-purple;
  }

  @include for_breakpoint(phone-portrait) {
    font-size: 1.5em;
    text-shadow: -0.2rem -0.3rem 0 $nature-purple;
  }
}

.header-item-4 {
  grid-row: 4 / 5;
  grid-column: 2 / 3;
  writing-mode: vertical-rl;
  text-orientation: upright;
  // font-size: 1.5em;
  font-size: 6.5vh;
  letter-spacing: 0.5rem;
  text-shadow: -0.5rem 0.5rem 0 $nature-purple;

  @include for_breakpoint(phone-landscape) {
    grid-column: 4 / 5;
    grid-row: 2 / 3;
    writing-mode: horizontal-tb;
    align-items: flex-start;
    justify-content: flex-end;
    font-size: 1.2em;
    text-shadow: -0.2rem 0.3rem 0 $nature-purple;
  }

  @include for_breakpoint(phone-portrait) {
    font-size: 0.8em;
    text-shadow: -0.2rem -0.3rem 0 $nature-purple;
  }
}

h1 {
  margin: 0%;
  font-family: "Arame";
  font-weight: bold;
  z-index: 2;
  font-size: 2.7em;
  color: var(--main-name-text);
}

.canvas-container {
  grid-column: 2 / 5;
  grid-row: 2 / 4;
  z-index: 1;
  overflow: hidden;

  @include for_breakpoint(phone-landscape) {
    grid-column: 2 / 6;
    grid-row: 2 / 6;
    writing-mode: horizontal-tb;
  }

  @include for_breakpoint(phone-portrait large-tablet-portrait) {
    grid-column: 1 / 6;
    grid-row: 1 / 5;
  }
}

.skill-stament {
  grid-column: 4 / 6;
  grid-row: 3 / 5;
  z-index: 2;
  overflow: hidden;

  @include for_breakpoint(phone-landscape) {
    grid-column: 2 / 5;
    grid-row: 4 / 6;
    display: flex;
  }

  @include for_breakpoint(phone-portrait large-tablet-portrait) {
    grid-column: 3 / 5;
    grid-row: 3 / 4;
    display: flex;
  }
}

.navigation-container {
  grid-column: 4/5;
  grid-row: 2/3;
  z-index: 2;

  @include for_breakpoint(phone-landscape phone-portrait) {
    display: none;
  }

  @include for_breakpoint(large-tablet-portrait) {
    grid-column: 4 / 5;
    grid-row: 2 / 3;
  }
}

.universe-background {
  background: linear-gradient(
    to bottom,
    var(--background-gradient-step-1) 0%,
    var(--background-gradient-step-1) 30%,
    // var(--background-gradient-step-1-2) 40%,
    // var(--background-gradient-step-2) 55%,
    var(--background-gradient-step-4) 80%,
    var(--background-gradient-step-4) 100%
  );
}
</style>

<script lang="ts">
import Vue from "vue";
import HeadPlanet from "../components/HeadPlanet.vue";
import SkillStaments from "../components/SkillStaments.vue";
import Navigation from "../components/Navigation.vue";
import BurguerMenu from "../components/BurguerMenu.vue";
import WIP from "../components/WIP.vue";
import "../css-modules/flex-helpers.scss";
import "../css-modules/containers.scss";
import "../css-modules/fonts.scss";
import "../css-modules/variables.scss";
import InteractionState from "@/Globals/InteractionState";
import { mapState } from "vuex";

export default Vue.extend({
  components: {
    HeadPlanet,
    Navigation,
    SkillStaments,
    BurguerMenu,
    WIP
  },
  data: function() {
    return {
      skill: "code",
      canvasContainer: null,
      showMenu: true
    };
  },
  computed: mapState(["currentState"]),
  watch: {
    currentState(newVal, oldVal) {
      if (oldVal === InteractionState.Root && newVal != InteractionState.Root) {
        this.$data.showMenu = false;
      } else if (newVal === InteractionState.Root) {
        this.$data.showMenu = true;
      }
    }
  },
  methods: {
    goToRoot() {
      this.$store.commit("changeState", InteractionState.Root);
    }
  },
  mounted() {
    window.requestAnimationFrame(() => {
      this.$data.canvasContainer = this.$refs.canvasContainer;
    });
  }
});
</script>
