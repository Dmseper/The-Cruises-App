<template>
  <div class="main">
    <div class="header">
      <img src="@/assets/logo/logo.png" class="logo sub" alt="Логотип">
      <nav>
        <router-link to="/">Главная</router-link>
        |
        <router-link to="/regions">Регионы</router-link>
        |
        <router-link to="/cruises">Круизы</router-link>
        |
        <router-link to="/liners">Лайнеры</router-link>
        |

        <router-link to="/company">Компании</router-link>
        |
        <router-link to="/about">О нас</router-link>

      </nav>
      <div class="account sub" >
        <router-link to="/account">Личный кабинет</router-link>
      </div>
    </div>
    <div class="work-space">
      <router-view/>
    </div>


  </div>
</template>

<style lang="scss" >
@import "@/common/scss/style.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.header {
  background-color: $background-header;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
}
.logo {
  width: 80px;
  height: 80px;
  left: 20px;
}

nav {
  padding: 30px;
  color: white;
  margin: 0 130px;
   a{
    &.router-link-exact-active {
      color: $active;
    }
  }
}
.account {
  right: 20px;
}
.work-space {
  padding: 20px 20px;
  background-color: $background-block;
  height: 100%;

}
.sub {
  position: absolute;
}

</style>
