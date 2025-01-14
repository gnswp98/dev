<template>
    <div class="sidebar">
      <ul>
        <li class="home_btn" @click="navigate('Home')">홈페이지</li>
        <li @click="navigate('Login')">로그인 페이지</li>
        <li @click="navigate('Contact')">Contact</li>
        <li @click="navigate('map')">찾아오시는 길</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      navigate(view) {
        this.$emit('navigate', view); // 부모 컴포넌트로 view 이벤트 전달
      },
    },
  };
</script>

<style>
    li{
        margin-top: 10px;
    }

    ul{
        margin-top: 30px;
    }

    .home_btn{
        padding-top: 10px;
    }
</style>