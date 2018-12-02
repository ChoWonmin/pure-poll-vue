<template lang="jade">
  .main
    .search-wrap
      input(placeholder="다음으로 PurePoll 검색" v-model="searchWord").search-input
    .container
      .items-wrapper.grid
        .load(v-show="!isLoad")
          Spinner()
        router-link(tag="div", :to="{name: 'VisPoll', params:{poll: item}}").item-wrapper(v-for="item in searchList" v-show="isLoad").cell-2
          .item
            .image-wrap
              img(v-bind:src="item.mainImage").mainImage
            .content-wrap
              .name {{item.name}}
              .org-name {{item.meta.orgName}}
              .line
              .category {{item.meta.category}}
              .info-wrapper
                // i.material-icons.icon poll
                // .text.response 138
                // i.material-icons.icon remove_red_eye
                // .text.view 558
                // .empty
                // i.material-icons.icon start
</template>

<script>
import { dataModule, storageModule } from '../api/firebase.wrapper';
import Spinner from '../components/Spinner';

export default {
  components: {
    Spinner
  },
  data() {
    return {
      pollList: undefined,
      isLoad: false,
      searchWord: ''
    };
  },
  async mounted() {
    this.pollList = (await dataModule.get('pollList')).val();
    for (const k in this.pollList) {
      this.pollList[k].mainImage = await storageModule.dowonloadUrl(`pollList/${this.pollList[k].mainImage}`);
    }
    this.isLoad = true;
  },
  computed: {
    searchList() {
      const tmp = {};
      _.forEach(this.pollList, (e) => {
        if (e.name.search(this.searchWord) > -1)
          tmp[e.id] = e;
      });
      return tmp;
    }
  },
  methods: {
    getImage: async url => await storageModule.dowonloadUrl(`pollList/${url}.jpeg`)
  }
};
</script>

<style scoped lang="sass">
  @import "../style/global"
  @import "../style/variable"
  @import "../style/grid"
  @import "../style/pollMoadl"

  .main
    width: 100%
    margin-top: $header-height
    .search-wrap
      width: 100%
      height: 140px
      .search-input
        width: 100%
        height: 100%
        outline: none
        border: none
        @include bottom-shadow(.12)
        text-align: center
        font-size: 30px
        font-weight: bold
        color: $grey-color
    .sort-bar
      width: 100%
      height: 60px
      display: flex
    .container
      max-width: 1440px
      margin: auto
      .items-wrapper
        .item-wrapper
          padding: 20px
          .item
            width: 200px
            height: 300px
            background-color: $white-color
            border-radius: 3px
            @include card-box-shadow
            .image-wrap
              width: 100%
              height: 50%
              overflow: hidden
              @include bottom-shadow(.12)
              display: flex
              align-items: center
              .mainImage
                width: 100%
                height: auto
            .content-wrap
              height: 50%
              padding: 10px 10px 0 10px
              .name
                font-size: 14px
                height: 50px
                font-weight: bold
              .org-name
                height: 32px
              .line
                width: 16px
                height: 1px
                @include bottom-shadow(.12)
              .category
                padding-top: 4px
                height: 24px
                @include bottom-shadow(.12)
              .info-wrapper
                padding-top: 4px
                display: flex
                color: $grey-color
                .icon
                  font-size: 20px
                  width: 20px
                .text
                  color: $black-color
                  height: 20px
                  width: 36px
                  line-height: 22px
                  text-indent: 4px
</style>
