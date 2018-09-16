<template lang="jade">
  .login
    .info-container.center-wrapper
      .info
        .title.eng PurePoll
        .sub-title 안전한 여론조사
        .description 신 개념 블록체인 여론조사 서비스
        .sub-info
          .line 언제어디서나.
          .line 당신의 의견을
          .line 정확하게
    .login-form.center-wrapper
      .center
        .title 아이디와 비밀번호를 입력해주세요
        .line
          .inputWithIcon
            input#id-input(placeholder='ID', type='text')
            i.material-icons mail
          .inputWithIcon
            input#password-input(placeholder='password', type='password')
            i.material-icons vpn_key
        .line
          .result 로그인 하세요
        .line
          .btn#login-btn 로그인
</template>

<script>
export default {
  data() {
    return '';
  },
  methods: {}
};
</script>

<style scoped lang="sass">
  .info-container
    width: 50%
    background-color: $sub-color
    .info
      color: #ffffff
      .title
        font-size: 40px
        font-weight: bold
      .sub-title
        font-size: 24px
        font-weight: bold
        border-bottom: solid 1px #ffffff
        width: 170px
        margin-top: 10px
        padding-bottom: 4px
      .description
        margin-top: 8px
      .sub-info
        margin-top: 12px
        .line

    .login-form
      width: 50%
      .center
        .title
          margin-bottom: 8px
        .line
          margin-bottom: 4px
</style>
