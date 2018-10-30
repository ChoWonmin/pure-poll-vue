<template lang="jade">
  .main
    .search-wrap
      input(placeholder="다음으로 PurePoll 검색").search-input
    .sort-bar
      DropDown(:name="'여론조사'",
      :optionIcons="[{text:'기관명', icon:'keyboard'},{text:'여론조사', icon:'phone'}]")
      DropDown(:name="'항목 별'",
      :optionIcons="[{text:'정치', icon:'keyboard'},{text:'경제', icon:'phone'},{text:'외교', icon:'phone'}]")
      DropDown(:name="'여론조사'",
      :optionIcons="[{text:'기관명', icon:'keyboard'},{text:'여론조사', icon:'phone'}]")
    .container
      .items-wrapper.grid
        .item-wrapper(v-for="item in list").cell-2
          .item
            .image-wrap.test
            .content-wrap
              .name 2018년 대선 정책 여론조사
              .org-name 한국 갤럽
              .line
              .category 경제
              .info-wrapper
                i.material-icons.icon poll
                .text.response 138
                i.material-icons.icon remove_red_eye
                .text.view 558
                .empty
                i.material-icons.icon start
</template>

<script>
import { dataModule, storageModule } from '../api/firebase.wrapper';
import DropDown from '../components/DropDown.';

export default {
  components: {
    DropDown
  },
  data() {
    return {
      pollList: undefined,
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    };
  },
  async mounted() {
    this.pollList = (await dataModule.get('pollList')).val();
  },
  methods: {
    async upload(file) {
      let uid = (await storageModule.upload('poll/wonmin.jpg', file)).metadata.md5Hash; // new Blob([file], { type: file.type })
    }
  }
};
</script>

<style scoped lang="sass">
  @import "../style/global"
  @import "../style/variable"
  @import "../style/grid"

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
              height: 50%
              background-color: #00acc1
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
