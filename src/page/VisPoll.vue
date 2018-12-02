<template lang="jade">
  .container
    .item-wrapper
      .item
        .question-wrapper.flex-wrapper
          .question {{1}}. {{currentItem.question}}
        .choices(v-for="choice, j in currentItem.choices")
          .line.flex-wrapper
            input(type='radio').radio-input
            .num {{j+1}}.
            .choice {{choice.value}}
    .bar-wapper
      PieChart(:radius="50", :donut-width="10", :pie-width="30")
      BarChart()
    .bar-wapper
      ParallelCoordinate(:width="900", :height="500", :items="parallelData", :axis="axis", :group="colorGroup")
</template>

<script>
import _ from 'lodash';
import { dataModule } from '../api/firebase.wrapper';
import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';
import ParallelCoordinate from '../components/ParallelCoordinate';

export default {
  components: {
    BarChart,
    PieChart,
    ParallelCoordinate
  },
  data() {
    return {
      poll: this.$route.params.poll,
      resList: [],
      barData: [
        {
          name: 'A',
          value: 80
        },
        {
          name: 'B',
          value: 60
        },
        {
          name: 'C',
          value: 40
        },
        {
          name: 'D',
          value: 100
        },
        {
          name: 'A',
          value: 80
        },
        {
          name: 'B',
          value: 60
        },
        {
          name: 'C',
          value: 40
        },
        {
          name: 'D',
          value: 100
        }
      ]
    };
  },
  async mounted() {
    this.resList = (await dataModule.get(`resList/${this.poll.id}`)).val();
  },
  computed: {
    parallelData() {
      return _.map(this.resList, e => e.poll);
    },
    pieData() {
      const tmp = [];
      const group = _.groupBy(this.resList, 'resLocation');
      _.forEach(group, (e, key) => {
        const obj = {};
        obj.name = key;
        obj.value = e.length;
        tmp.push(obj);
      });
      return tmp;
    },
    axis() {
      const tmp = _.map(this.parallelData[0], (e, i) => {
        const obj = {};
        obj.name = `${i + 1}번 문항`;
        obj.min = e;
        obj.max = e;
        return obj;
      });

      for (let i = 1; i < this.parallelData.length; i++) {
        const item = this.parallelData[i];
        _.forEach(tmp, (e, j) => {
          if (e.max < item[j])
            e.max = item[j];
          if (e.min > item[j])
            e.min = item[j];
        });
      }

      return tmp;
    },
    colorGroup() {
      const tmp = [];
      let groups = Object.keys(_.groupBy(this.resList, 'resLocation'));
      const colorMap = {};
      groups = _.forEach(groups, (e, i) => {
        colorMap[e] = i;
      });

      _.forEach(this.resList, (e) => {
        const color = colorMap[e.resLocation];
        tmp.push(color);
      });

      return tmp;
    },
    currentItem() {
      return this.poll.items[1];
    }
  },
  methods: {}
};
</script>

<style scoped lang="sass">
@import "../style/variable"
@import "../style/global"
@import "../style/grid"
.container
  background-color: #fff
  .item-wrapper
    .item
      .question-wrapper
        height: 54px
        padding: 6px 32px
        font-size: 24px
        line-height: 44px
        .question
          height: 44px
          @include bottom-shadow(.5)
      .choices
        padding: 6px 24px
        .line
          padding: 12px

  .bar-wapper
    display: flex
</style>
