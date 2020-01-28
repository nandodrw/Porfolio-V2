<template>
  <p class="stament">
    <span class="cajetin">
      <span class="">I&nbsp;</span>
      <transition name="slide-fade" mode="out-in">
        <span :key="action1" class="action">{{ action1 }}</span>
      </transition>
      and
      <transition name="slide-fade" mode="out-in">
        <span :key="action2" class="action">{{ action2 }}</span>
      </transition>
    </span>
    <br /><br /><span class="object-container">
      <span
        class="letter"
        v-bind:class="{ hiddentext: object[0] == '_' }"
        name="letter-1"
        >{{ object[0] }}</span
      >
      <span
        class="letter"
        v-bind:class="{ hiddentext: object[1] == '_' }"
        name="letter-1"
        >{{ object[1] }}</span
      >
      <span
        class="letter"
        v-bind:class="{ hiddentext: object[2] == '_' }"
        name="letter-2"
        >{{ object[2] }}</span
      >
      <span
        class="letter"
        v-bind:class="{ hiddentext: object[3] == '_' }"
        name="letter-3"
        >{{ object[3] }}</span
      >
      <span
        class="letter"
        v-bind:class="{ hiddentext: object[4] == '_' }"
        name="letter-4"
        >{{ object[4] }}</span
      >
      <span
        class="letter"
        v-bind:class="{ hiddentext: object[5] == '_' }"
        name="letter-5"
        >{{ object[5] }}</span
      >
      <span
        class="letter"
        v-bind:class="{ hiddentext: object[6] == '_' }"
        name="letter-6"
        >{{ object[6] }}</span
      >
      <span
        class="letter"
        v-bind:class="{ hiddentext: object[7] == '_' }"
        name="letter-7"
        >{{ object[7] }}</span
      >
      <span
        class="letter"
        v-bind:class="{ hiddentext: object[8] == '_' }"
        name="letter-8"
        >{{ object[8] }}</span
      >
      <span
        class="letter"
        v-bind:class="{ hiddentext: object[9] == '_' }"
        name="letter-9"
        >{{ object[9] }}</span
      >
      <span
        class="letter"
        v-bind:class="{ hiddentext: object[10] == '_' }"
        name="letter-10"
        >{{ object[10] }}</span
      >
      <span
        class="letter"
        v-bind:class="{ hiddentext: object[11] == '_' }"
        name="letter-11"
        >{{ object[11] }}</span
      >
      <span
        class="letter"
        v-bind:class="{ hiddentext: object[12] == '_' }"
        name="letter-12"
        >{{ object[12] }}</span
      >
      <span
        class="letter"
        v-bind:class="{ hiddentext: object[13] == '_' }"
        name="letter-13"
        >{{ object[13] }}</span
      >
      <span
        class="letter"
        v-bind:class="{ hiddentext: object[14] == '_' }"
        name="letter-14"
        >{{ object[14] }}</span
      >
      <span
        class="letter"
        v-bind:class="{ hiddentext: object[15] == '_' }"
        name="letter-15"
        >{{ object[15] }}</span
      >
      <span
        class="letter"
        v-bind:class="{ hiddentext: object[16] == '_' }"
        name="letter-16"
        >{{ object[16] }}</span
      >
      <span
        class="letter"
        v-bind:class="{ hiddentext: object[17] == '_' }"
        name="letter-17"
        >{{ object[17] }}</span
      >
      <span
        class="letter"
        v-bind:class="{ hiddentext: object[18] == '_' }"
        name="letter-18"
        >{{ object[18] }}</span
      >
      <span
        class="letter"
        v-bind:class="{ hiddentext: object[19] == '_' }"
        name="letter-19"
        >{{ object[19] }}</span
      >
      <span
        class="letter"
        v-bind:class="{ hiddentext: object[20] == '_' }"
        name="letter-20"
        >{{ object[20] }}</span
      >
      <span
        class="letter"
        v-bind:class="{ hiddentext: object[21] == '_' }"
        name="letter-21"
        >{{ object[21] }}</span
      >
      <span
        class="letter"
        v-bind:class="{ hiddentext: object[22] == '_' }"
        name="letter-23"
        >{{ object[22] }}</span
      >
    </span>
  </p>
</template>

<style lang="scss" scoped>
@import "../css-modules/media-queries.scss";

.stament {
  font-family: "Fira Code", monospace;
  font-weight: 100;
  font-size: 2.3em;
  text-align: left;
  margin: 0;
  height: 100%;
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  padding-top: 1em;
  padding-left: 1em;
  box-sizing: border-box;
  overflow: hidden;
  color: var(--skill-statement-font);

  @include for_breakpoint(tablet-landscape) {
    font-size: 2rem;
  }

  @include for_breakpoint(phone-landscape) {
    padding-top: 0.1em;
    font-size: 1.2em;
    height: fit-content;
    align-self: center;
  }

  @include for_breakpoint(phone-portrait) {
    padding-top: 0.1em;
    font-size: 1.2em;
    height: fit-content;
    align-self: flex-start;
    box-sizing: border-box;
    height: 100%;
    padding-right: 0.1em;
    padding-left: 0.1em;
  }

  @include for_breakpoint(large-tablet-portrait) {
    padding-top: 15%;
    font-size: 2em;
    height: fit-content;
    align-self: flex-start;
    box-sizing: border-box;
    height: 100%;
  }
}

.hiddentext {
  color: transparent;
  width: 0.4em;
}

.object-container {
  font-weight: 500;
  outline: solid black !important;
  display: inline-block;

  @include for_breakpoint(phone-portrait large-tablet-portrait) {
    background-color: #fff;
  }
}

.letter {
  content: " ";
  font-size: 1.7em;
  display: inline-block;
  background-color: #fff;

  &:nth-child(1) {
    padding: 0 0.3rem;
  }
}

.cajetin {
  padding: 0 0.3rem;
  background-color: #fff;
  outline: solid black !important;
}

.action {
  font-weight: 500;
}

.left-space {
  padding-left: 3em;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>

<script lang="ts">
import Vue from "vue";
import TextTransition from "../Libraries/TextTransition";
import { Sprite } from "three";

const textTransition = new TextTransition();

export default Vue.extend({
  data() {
    return {
      staments: [
        {
          actions: ["design", "develop"],
          object: "Video Games"
        },
        {
          actions: ["architecture", "code"],
          object: "Frontend Applications"
        },
        {
          actions: ["design", "develop"],
          object: "Augmented Reality"
        },
        {
          actions: ["architecture", "code"],
          object: "Backend Applications"
        },
        {
          actions: ["design", "develop"],
          object: "Web Applications"
        },
        {
          actions: ["research", "design"],
          object: "UI/UX"
        },
        {
          actions: ["architecture", "develop"],
          object: "Mobile Applications"
        },
        {
          actions: ["design", "code"],
          object: "Digital Experiences"
        }
      ],
      currentStatement: {
        actions: ["architecture", "develop"],
        object: "Frontend Applications"
      },
      current: -1,
      timeTransition: 7000,
      animationTime: NaN
    };
  },
  mounted() {
    this.nextSkill();
  },
  computed: {
    action1() {
      return this.$data.currentStatement.actions[0];
    },
    action2() {
      return this.$data.currentStatement.actions[1];
    },
    object() {
      return this.$data.currentStatement.object;
    }
  },
  methods: {
    nextStatement() {
      this.$data.current++;
      if (this.$data.current >= this.$data.staments.length) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.$data.current = 0;
      }
      return this.$data.staments[this.$data.current];
    },
    nextSkill() {
      const comp = this;
      const nextSt = comp.nextStatement();
      this.$data.currentStatement.actions = nextSt.actions;
      textTransition.AnimateTextTransition(
        comp.$data.currentStatement.object,
        nextSt.object,
        45,
        22,
        (intermediate: string, done: boolean) => {
          if (done) {
            setTimeout(function() {
              comp.nextSkill();
            }, 2000);
          } else {
            comp.$data.currentStatement.object = intermediate;
          }
        }
      );
    }
  }
});
</script>
