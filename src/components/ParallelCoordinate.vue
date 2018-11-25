<template lang="jade">
  .parallel-coordinate
    .text {{axis}}
    svg#parallel-coordinate(v-bind:style="{width:width, height: height}")
      g#axis
        line(v-bind:x1="padding" v-bind:y1="height - padding" v-bind:x2="width - padding" v-bind:y2="height - padding" stroke="#bbbbbb" stroke-width="2")
        template(v-for="(col,i) in axis")
          line(v-bind:x1="padding + i*diff" v-bind:y1="height - padding" v-bind:x2="padding + i*diff" v-bind:y2="padding" stroke="#bbbbbb" stroke-width="2")
          text(v-bind:x="padding + i*diff" v-bind:y="height - padding + 8" fill="black" text-anchor="middle" alignment-baseline="hanging") {{col}}
      g#background
      g#foreground
        template(v-for="i in [1]")
          path(d="M 30 100 L 10 75 L 60 75" fill="none" stroke="red" stroke-width="2")

</template>

<script>
import _ from 'lodash';

export default {
  props: {
    items: {
      type: Array,
      default() {
        return [
          {
            name: 'A',
            value: 80,
            1: '1',
            2: '3',
            3: '4'
          },
          {
            name: 'B',
            value: 40,
            1: '1',
            2: '3',
            3: '4'
          },
          {
            name: 'C',
            value: 100,
            1: '1',
            2: '3',
            3: '4'
          }
        ];
      }
    },
    axis: {
      type: Array,
      default() {
        return [
          '1번 문항', '2번 문항', '3번 문항', '4번 문항', '5번 문항'
        ];
      }
    },
    width: {
      type: Number,
      default: 900
    },
    height: {
      type: Number,
      default: 500
    },
    padding: {
      type: Number,
      default: 30
    }
  },
  data() {
    return {
      diff: -1,
      path: [],

    };
  },
  mounted() {
    this.diff = (this.width - 2*this.padding) / (this.axis.length-1);
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];

      const path = {};
      path.d = `M ${this.padding} 100 L ${this.padding + this.diff} 300`;
      for (let j = 0; j < this.item.length; j++) {

      }

    }
  },
  methods: {}
};
</script>

<style scoped lang="sass">
.parallel-coordinate
  min-width: 900px
  min-height: 600px
  #parallel-coordinate
    width: 100%
    height: 100%
    background-color: #fff
</style>
