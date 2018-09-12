import { mapState } from 'vuex';


export default {
  computed: mapState({
    count: state => state.count,
    countAlias: 'count'
  })
};
