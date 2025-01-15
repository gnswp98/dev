<template>
<div class="userinfo-box">

	
	
	
	
	
	
	
	
	
	
<div class="login-wrap">
  <div class="login-info">
    <h3 class="tit">내게 필요한 민원/생활/혜택<br>정보를 확인하세요.</h3>
    <a href="/nlogin?Mcode=10003&amp;regType=ctab" class="btn-login">로그인</a>
  </div>
  <div class="join-find-wrap">
    <div class="left">
      <a href="/nlogin/findUsrId">아이디찾기</a>
      <span class="bar"></span>
      <a href="/nlogin/findUsrPwd">비밀번호찾기</a>
    </div>
    <div class="right">
      <a href="/nlogin/usr?Mcode=10004">회원가입</a>
    </div>
  </div>
</div>





</div>
</template>

<script>
  import '@/assets/css/LoginCSS.css'

  export default{

  };
</script>

<style>
.join-find-wrap .right {
    float: right;
}

.join-find-wrap span.bar {
    display: inline-block;
    margin: 0 8px;
    width: 1px;
    height: 10px;
    background: #ddd;
}

.join-find-wrap a {
    display: inline-block;
    font-size: 17px;
    line-height: 22px;
    color: #1d1d1d;
    letter-spacing: -0.34px;
    font-weight: 400;
}

.join-find-wrap .left {
    float: left;
}

.login-wrap .join-find-wrap {
    overflow: hidden;
    margin: 25px 0 0;
}

.login-wrap .login-info a.btn-login {
    margin: 40px 0 0;
    display: block;
    width: 100%;
    height: 52px;
    line-height: 52px;
    font-weight: bold;
    font-size: 17px;
    color: #fff;
    background: #3382e9;
    border-radius: 8px;
}

.userinfo-box {
    width: 400px;
    border: 1px solid #e2e5eb;
    border-radius: 12px;
    box-shadow: 10px 10px 27px rgba(0, 0, 0, 0.06);
}

.main-visual .inner-wrap {
    display: flex
;
    justify-content: space-between;
}
.renew2022-main-wrap .inner-wrap {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
}

.login-wrap {
    padding: 163px 26px 28px 26px;
    text-align: center;
    background: url(@/assets/images/ico-main-login.png) center top 60px no-repeat;
}
.renew2022-main-wrap *, .mygov-renew * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body, div, dl, dt, dd, th, td, ul, ol, li, h1, h2, h3, h4, h5, h6, form, fieldset, p, blockquote, button, input, textarea {
    margin: 0;
    padding: 0;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
* {
    font-family: "Pretendard GOV", -apple-system, "Apple SD Gothic Neo", "Apple Gothic", BlinkMacSystemFont, sans-serif !important;
}

</style>