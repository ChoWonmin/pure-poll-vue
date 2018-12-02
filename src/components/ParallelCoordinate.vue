<template lang="jade">
  .parallel-coordinate
    svg#parallel-coordinate(v-bind:style="{width:width, height: height}")
      g#axis
        line(v-bind:x1="padding" v-bind:y1="height - padding" v-bind:x2="width - padding" v-bind:y2="height - padding" stroke="#bbbbbb" stroke-width="2")
        template(v-for="(col,i) in axis")
          line(v-bind:x1="padding + i*diff" v-bind:y1="height - padding" v-bind:x2="padding + i*diff" v-bind:y2="padding" stroke="#bbbbbb" stroke-width="2")
          text(v-bind:x="padding + i*diff" v-bind:y="height - padding + 8" fill="black" text-anchor="middle" alignment-baseline="hanging") {{col.name}}
      g#background
        template(v-for="path in paths")
          path(v-bind:d="path.d" fill="none" stroke-width="2" opacity="1" stroke="grey")
      g#foreground
        template(v-for="(path, i) in paths")
          path(v-bind:d="path.d" fill="none" stroke-width="2" opacity="1" v-bind:stroke="colors[group[i]]" v-on:mouseover="pathHover" v-on:mouseleave="pathLeave")
</template>

<script>
import _ from 'lodash';
import colors from './color';

export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    axis: {
      type: Array,
      required: true
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
    },
    group: {
      type: Array,
      required: true
    },
    colors: {
      type: Array,
      default() {
        return colors;
      }
    }
  },
  data() {
    return {
    };
  },
  computed: {
    diff() {
      return (this.width - 2 * this.padding) / (this.axis.length - 1);
    },
    axisHeight() {
      return this.height - 2 * this.padding;
    },
    paths() {
      const tmp = [];
      for (let i = 0; i < this.items.length; i++) {
        const item = this.items[i];

        const path = {};
        path.d = `M 30 ${this.padding + this.axisHeight - this.axisHeight * (item[0] - this.axis[0].min) / (this.axis[0].max - this.axis[0].min)} `;

        for (let j = 1; j < item.length; j++) {
          const val = (item[j] - this.axis[j].min) / (this.axis[j].max - this.axis[j].min);
          const y = this.padding + this.axisHeight - this.axisHeight * val;
          path.d += `L ${this.padding + this.diff * j} ${y} `;
        }

        tmp.push(path);
      }
      return tmp;
    }
  },
  methods: {
    pathHover() {
    },
    pathLeave() {
    }
  }
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
