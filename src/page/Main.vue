<template lang="jade">
  .container
    input.upload-btn(type="file" v-on:change="detectFiles($event.target.files)")
    .items-wrapper
      .item(v-for="item in pollList") {{ item }}
</template>

<script>
import { dataModule, storageModule } from '../api/firebase.wrapper';

export default {
  data() {
    return {
      pollList: undefined
    };
  },
  async mounted() {
    this.pollList = (await dataModule.get('pollList')).val();
  },
  methods: {
    detectFiles(files) {
      console.log(files);
      Array.from(Array(files.length).keys()).map(x => {
        this.upload(files[x]);
      });
    },
    upload(file) {
      console.log(file.type);
      storageModule.upload('poll/', file) // new Blob([file], { type: file.type })
    }
  }
};
</script>

<style scoped lang="sass">
  .upload-btn
    background-color: #0d47a1
    color: #eeeeee
    width: 120px
    height: 48px
    position: fixed
    top: 400px
    right: 120px
    font-size: 36px
</style>
