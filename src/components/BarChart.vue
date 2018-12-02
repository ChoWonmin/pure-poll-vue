<template lang="jade">
  .bar-chart
    svg#barchart(v-bind:style="{width:width, height: height}")
      g#background
      g#foreground
        template(v-for="rect in rects")
          rect(fill="#faaaaa" v-bind:x="rect.x" v-bind:y="rect.y" v-bind:width="rect.width" v-bind:height="rect.height")
          text(v-bind:x="rect.x + rectWidth/2" v-bind:y="padding + rectHeight + 4" fill="black" text-anchor="middle" alignment-baseline="hanging") {{rect.name}}
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default() {
        return [
          {
            name: '1번',
            value: 25
          },
          {
            name: '2번',
            value: 30
          },
          {
            name: '3번',
            value: 10
          },
          {
            name: '4번',
            value: 35
          }
        ];
      }
    },
    width: {
      type: Number,
      default: 300
    },
    height: {
      type: Number,
      default: 200
    },
    rectWidth: {
      type: Number,
      default: 30
    },
    padding: {
      type: Number,
      default: 30
    },
    gap: {
      type: Number,
      default: 5
    }
  },
  data() {
    return {
      rects: [],
      rectHeight: -1,
      maxValue: -1
    };
  },
  mounted() {
    this.maxValue = this.items.reduce((ac, a) => (ac.value > a.value) ? ac.value : a.value);
    this.rectHeight = this.height - 2 * this.padding;

    for (let i=0; i<this.items.length; i++) {
      const rect = {
        x: this.padding + i * (this.rectWidth + this.gap),
        y: this.padding + (this.maxValue - this.items[i].value ) / this.maxValue * this.rectHeight,
        width: this.rectWidth,
        height: this.items[i].value / this.maxValue * this.rectHeight,
        name: this.items[i].name
      };
      this.rects.push(rect);
    }
  },
  methods: {
  }
};
</script>

<style scoped lang="sass">
  .bar-chart
    min-width: 300px
    #barchart
      width: 100%
      height: 100%
      background-color: #fff
</style>
