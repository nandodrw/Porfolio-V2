<template>
  <nav class="nav-bar">
    <ul class="navigation-list">
      <li><a v-on:click="changeState('wps')">Web Projects Showcase</a></li>
      <li class="align-self-center">
        <a v-on:click="changeState('ar')">Augmented Reality</a>
      </li>
      <li>
        <a v-on:click="changeState('gde')">Game development Experience</a>
      </li>
      <li class="align-self-center">
        <a v-on:click="changeState('v')">Ventures</a>
      </li>
      <li><a v-on:click="changeState('bsm')">Blog and Social Media</a></li>
      <li class="align-self-center">
        <a v-on:click="changeState('c')">Contact</a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@import "../css-modules/media-queries.scss";

.nav-bar {
  height: 100%;
  display: flex;
  justify-content: flex-end;
  font-family: "Fira Code", monospace;
  padding-right: 3rem;
  padding-top: 1rem;
  box-sizing: border-box;

  @include for_breakpoint(tablet-landscape) {
    padding-right: 0;
    padding-top: 0;
  }

  @include for_breakpoint(phone-landscape) {
    justify-content: flex-start;
  }

  @include for_breakpoint(phone-portrait) {
    padding-right: 0rem;
    padding-top: 6rem;
  }
}

.navigation-list {
  height: 90%;
  color: var(--hight-contrast-light);
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: fit-content;

  @include for_breakpoint(tablet-landscape) {
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 40%;
  }

  @include for_breakpoint(phone-landscape) {
    flex-direction: row;
    width: 87%;
    height: 100%;
    padding-left: 2em;
    box-sizing: border-box;
    justify-content: space-around;
  }

  @include for_breakpoint(phone-portrait) {
    height: 100%;
    width: 100%;
    justify-content: space-around;
    align-items: center;
  }

  @include for_breakpoint(large-tablet-portrait) {
    justify-content: space-evenly;
    align-items: center;
  }
}

.navigation-list li {
  cursor: pointer;

  a {
    color: var(--navigation-text);
    text-decoration: none;
    font-size: 1.2em;
    font-weight: 600;

    @include for_breakpoint(large-tablet-portrait) {
      font-size: 2.3vw;
    }

    @include for_breakpoint(phone-landscape) {
      font-size: 4vh !important;
    }

    @include for_breakpoint(big-monitor-landscape tablet-landscape) {
      font-size: 2.5vh;
    }
  }

  padding: 0.6em 1.5em;
  background-color: var(--call-to-action);
  height: fit-content;
  width: fit-content;
  outline: solid #000 !important;
  transition: transform cubic-bezier(0.165, 0.84, 0.44, 1) 0.5s,
    box-shadow ease-out 0.25s;
  transform: skew(-10deg, -2deg);
  box-shadow: 0.9em 0.9em 0 0.05em var(--call-to-action-complement),
    1.1em 1.1em 0 0.05em #000;

  // &:nth-child(1),
  // &:nth-child(3),
  // &:nth-child(5) {
  //   transform: skew(-10deg, -2deg);
  //   box-shadow: 0.9em 0.9em 0 0.05em var(--call-to-action-complement), 1.1em 1.1em 0 0.05em #000;
  // }

  // &:nth-child(2),
  // &:nth-child(4),
  // &:nth-child(6) {
  //   transform: skew(10deg, 2deg);
  //   box-shadow: -0.9em -0.9em 0 0.05em var(--call-to-action-complement), -1.1em -1.1em 0 0.05em #000;
  // }

  // @include for_breakpoint(phone-landscape) {
  //   &:nth-child(1),
  //   &:nth-child(3),
  //   &:nth-child(5),
  //   &:nth-child(2),
  //   &:nth-child(4),
  //   &:nth-child(6) {
  //     // transform: skew(0deg, 0deg);
  //     // box-shadow: -0.9em -0.9em 0 0.05em var(--call-to-action-complement), -1.1em -1.1em 0 0.05em #000;

  //     transform: skew(-10deg, -2deg);
  //     box-shadow: 0.9em 0.9em 0 0.05em var(--call-to-action-complement), 1.1em 1.1em 0 0.05em #000;
  //   }
  // }

  &:nth-child(1) {
    @include for_breakpoint(tablet-landscape) {
      order: 1;
    }
  }

  &:nth-child(2) {
    @include for_breakpoint(tablet-landscape) {
      order: 1;
    }
  }

  &:nth-child(3) {
    @include for_breakpoint(tablet-landscape) {
      order: 4;
    }
  }

  &:nth-child(4) {
    @include for_breakpoint(tablet-landscape) {
      order: 3;
    }
  }

  &:nth-child(5) {
    @include for_breakpoint(tablet-landscape) {
      order: 5;
    }
  }

  &:nth-child(6) {
    @include for_breakpoint(tablet-landscape) {
      order: 6;
    }
  }

  &:hover {
    transform: skew(0, 0);
    box-shadow: 0em 0.3em 0 0em var(--call-to-action-complement);
  }
}
</style>

<script lang="ts">
import Vue from "vue";
import InteractionState from "@/Globals/InteractionState";

export default Vue.extend({
  methods: {
    changeState(stateKey: string) {
      switch (stateKey) {
        case "wps":
          this.$store.commit(
            "changeState",
            InteractionState.WebProjectShowcase
          );
          break;

        case "ar":
          this.$store.commit("changeState", InteractionState.AugmentedReality);
          break;

        case "gde":
          this.$store.commit(
            "changeState",
            InteractionState.GameDevelopmentExperience
          );
          break;

        case "v":
          this.$store.commit("changeState", InteractionState.Ventures);
          break;

        case "bsm":
          this.$store.commit(
            "changeState",
            InteractionState.BlogAndSocialMedia
          );
          break;

        case "c":
          this.$store.commit("changeState", InteractionState.Contact);
          break;

        default:
          break;
      }
    }
  }
});
</script>
