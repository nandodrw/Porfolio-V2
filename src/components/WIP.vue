<template>
  <div
    class="flag"
    v-bind:class="{ hidden: !animationDone, show: preludeDone }"
  >
    <p>
      This portfolio page is in active development, so internal sections are not ready yet.
    </p>
    <p>
      If you would like to contact me, please do it through my
      <a href="https://www.linkedin.com/in/fernandocatacora/" target="_blank"
        >LinkedIn page</a
      >.
    </p>
    <p>Thanks for your patience, please come back soon for news ;)</p>

    <button v-on:click="goBack()">[ Return home ]</button>
  </div>
</template>

<style lang="scss" scoped>
@import "../css-modules/media-queries.scss";

.flag {
  background-color: var(--wip-background);
  color: #fff;
  padding-right: 1em;
  padding-left: 1em;
  font-size: 1.2em;
  font-family: "Fira Code", monospace;
  align-self: flex-end;
  width: 30vw;
  border: solid 0.1em #fff;
  transition: height ease-out 0.5s;
  height: 0em;
  overflow: hidden;
  box-sizing: border-box;

  @include for_breakpoint(large-tablet-portrait) {
    width: 30vh;
  }

  @include for_breakpoint(tablet-landscape) {
    width: 60%;
  }

  @include for_breakpoint(phone-landscape phone-portrait) {
    width: 100%;
    font-size: 1em;
  }

  &.show {
    height: 18.5em;
    padding-top: 1em;
    padding-bottom: 1em;

    @include for_breakpoint(phone-landscape) {
      height: 15em;
    }

    @include for_breakpoint(phone-portrait) {
      height: 26em;
    }
  }

  a {
    color: var(--patel-light);
    text-decoration: dashed underline;
  }

  button {
    color: var(--patel-light);
    background-color: transparent;
    border-style: dashed;
    font-size: 1.2em;
    border-radius: 2px;
    cursor: pointer;
  }
}
</style>

<script lang="ts">
import Vue from "vue";
import InteractionState from "@/Globals/InteractionState";
export default Vue.extend({
  data() {
    return {
      animationDone: false,
      preludeDone: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.$data.animationDone = true;
      setTimeout(() => {
        this.$data.preludeDone = true;
      }, 400);
    }, 3700);
  },
  methods: {
    goBack() {
      this.$data.preludeDone = false;
      setTimeout(() => {
        this.$data.animationDone = false;
        this.$store.commit("changeState", InteractionState.Root);
      }, 550);
    }
  }
});
</script>
