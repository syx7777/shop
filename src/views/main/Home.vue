<template>
  <div class="home">
    <!-- 主体 -->
    <div class="center">
      <Sousuo/>
      <div class="up">
        <Celanleft/><Lunbotu/><Celanright/>
      </div>
    </div>
      <div class="shangping">
        <Shangping/>
      </div>
  </div>
</template>

<script>
import Celanleft from './homePage/Celanleft.vue'
import Lunbotu from '../main/homePage/Lunbotu.vue'
import Celanright from '../main/homePage/Celanright.vue'
import Shangping from '../main/homePage/Shangping.vue'
import Sousuo from '../main/homePage/Sousuo.vue';
export default {
  name: 'Home',
  components:{Celanleft,Lunbotu,Celanright,Shangping,Sousuo}
}
</script>

<style scoped>
.center{
  width: 1200px;
  background-color:#fff;
  margin: 0 auto;
}
.up{
  display: flex;
  justify-content: center;
}
.shangping{
  display: block;
  width: 700px;
  margin: 0 auto;

}
</style>
