<template lang="jade">
  .pie-chart
    .text
    svg#pie-chart(v-bind:style="{width: width, height: height}")
      circle.donut-ring(v-bind:cx = "(width/2)", v-bind:cy = "(height/2)", v-bind:r="radius", v-bind:fill = "holeColor", v-bind:stroke="donutColor", v-bind:stroke-width="donutWidth")
      template(v-for = "pie in pies")
        circle.donut-segment(v-bind:stroke = "pie.pieColor" v-bind:cx="width/2" v-bind:cy="height/2" v-bind:r="radius" fill="transparent" v-bind:stroke-width="pie.changedWidth" v-bind:stroke-dasharray="pie.da" v-bind:stroke-dashoffset="pie.offset" v-bind:transform="transformString")
        rect.rect(v-bind:fill="pie.pieColor" v-bind:x="pie.namePoint" v-bind:y="height/32" v-bind:width="width/8" v-bind:height="height/8")
        text(fill="black" v-bind:x="pie.namePoint + (width/24)" v-bind:y="(height/5)") {{pie.name}}
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default() {
        return [
          {value: 2, name: 'A'},
          {value: 3, name: 'B'},
          {value: 2, name: 'C'},
          {value: 4, name: 'D'},
          {value: 4, name: 'E'},
          {value: 7, name: 'F'},
          {value: 6, name: 'G'}
        ]
      }
    },
    colorArray: {
      type: Array,
      default() {
        return[
          {color: '#57C17B'},
          {color: '#BFBB40'},
          {color: '#026E8A'},
          {color: '#BF4048'},
          {color: '#6F87D8'},
          {color: '#4168BF'},
          {color: '#bbb'}
        ]
      }
    },
    width: {
      type: Number,
      default: 300
    },
    height: {
      type: Number,
      default: 300
    },
    radius: {
      type: Number,
      default: 16
    },
    donutWidth: {
      type: Number,
      default: 34
    },
    pieWidth: {
      type: Number,
      default: 34
    },
    holeColor: {
      type: String,
      default: '#fff'
    },
    donutColor: {
      type: String,
      default: '#d2d3d4'
    },
    transformString:{
      type: String,
      default: 'rotate(0 0 0)'
    }
  },
  data() {
    return{
      pies: [],
      total: 100,
      totalValue: 0,
      ratio: 1,
      hasUsed: 0,
      pieWidthChange: this.pieWidth,
      startPoint: this.width/64
    };
  },
  mounted() {
    for (let i=0; i<this.items.length; i++) {
      this.totalValue += this.items[i].value;
    };
    this.ratio = (this.radius * 100) / 15.9154943092;
    this.transformString = `rotate(-90 ${this.width/2} ${this.height/2})`;
    for (let i=0; i<this.items.length; i++) {
      const item = this.items[i];
      const color = this.colorArray[i];
      const pie = {};
      pie['name'] = item.name;
      pie['changedWidth'] = (this.pieWidthChange / 50) * ((parseInt(item.value)*(this.ratio))/this.totalValue);

      pie['namePoint'] = this.startPoint;
      this.startPoint += ((this.width/this.items.length));

      pie['offset'] = this.hasUsed;
      this.hasUsed -= (parseInt(item.value)*(this.ratio))/this.totalValue ;

      pie['pieColor'] = color.color;
      pie['da'] = ((parseInt(item.value)*(this.ratio))/this.totalValue + ' ' + (this.ratio - (parseInt(item.value)*(this.ratio))/this.totalValue));
      this.pies.push(pie);
    }

  },
  methods: {}
};
</script>

<style scoped lang="sass">
.pie-chart
  width: 100%
  heigth: 100%
  svg#pie-chart
    min-width: 300px
    min-height: 300px
    background-color: #fff


</style>
