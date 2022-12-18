<template>
  <div class="wrapper">
    <div class="left-regions">
      <div class="region">
        <img src="@/assets/regions/europe.jpg" alt="">
        <div   class="name-region"> <h2>Европа</h2> </div>

      </div>
      <div class="region">
        <img src="@/assets/regions/italy.jpg" alt="">
        <div  class="name-region"> <h2>Средиземное море</h2> </div>
      </div>
      <div class="region">
        <img src="@/assets/regions/asia.jpg" alt="">
        <div  class="name-region"> <h2>Азия</h2> </div>
      </div>
    </div>
    <div class="right-regions">
      <div class="region">
        <img src="@/assets/regions/caribs.jpg" alt="">
        <div  class="name-region"> <h2>Карибские острова</h2> </div>
      </div>
      <div class="region">
        <img src="@/assets/regions/egypt.jpg" alt="">
        <div  class="name-region"> <h2>Эмираты</h2> </div>
      </div>
      <div class="region">
        <img src="@/assets/regions/antarctica.jpg" alt="">
        <div  class="name-region"> <h2>Антарктика</h2> </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "RegionsView"
}
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  gap: 2px;
  justify-content: center;
  align-items: center;
}

.region {
}
.region:hover {
 cursor: pointer;
}
.name-region {
  position: relative;
  left: 10px;
  bottom: 200px;
  width: 180px;
  height: 0;
}
img {
  border-radius: 20px;

}

</style>