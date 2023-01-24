<template>
     <div class="block">
    <el-carousel height="620px">
      <el-carousel-item v-for="item in imgList" :key="item.id">
        <img :src="item.tu">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
    export default{
      name:'Lunbotu',
        data(){
            return{
                imgList:[
                    {id:'01',tu:require('../homePage/02.jpg')},
                    {id:'02',tu:require('../homePage/03.jpg')},
                    {id:'03',tu:require('../homePage/04.jpg')},
                    {id:'04',tu:require('../homePage/05.jpg')},
                    {id:'05',tu:require('../homePage/06.jpg')},
                ]
            }
        }
    }
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #f6f7f7;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #fff;
  }
  .block{
    width: 700px;
    border-radius: 20px;
    margin-left: 10px;
    margin-right: 10px;
  }
</style>