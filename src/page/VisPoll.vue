<template lang="jade">
  .container
    .bar-wapper
      ParallelCoordinate(:width="900", :height="500", :items="parallelData", :axis="axis", :group="group")
    .bar-wapper
    //  PieChart(:radius="50", :donut-width="10", :pie-width="30")
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
      poll: undefined,
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
    this.poll = this.$route.params.poll;
    this.resList = (await dataModule.get(`resList/${this.poll.id}`)).val();
    //this.resList = (await dataModule.get('resList/-LS4HX3UDSdh3jKbdPfU')).val();
  },
  computed: {
    parallelData() {
      const tmp = [];

      _.forEach(this.resList, (e) => {
        tmp.push(e.poll);
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
    group() {
      const tmp = [];
      _.forEach(this.resList, e => {
        if (e.gender === '경상남도')
          tmp.push('1');
        else if (e.gender === '전라남도')
          tmp.push('2');
        else if (e.resLocation === '전라북도')
          tmp.push('3');
      })
      return tmp;
    }
  },
  methods: {}
};
</script>

<style scoped lang="sass">

</style>
