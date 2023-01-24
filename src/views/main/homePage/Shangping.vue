<template>
    <el-card class="box-card" shadow="hover">
        <div class="content">
            <p>花草清香，茗饮健康</p>
            <p>礼御古今，茶阅知音</p>
            <p>清新芳寻堂，绿饮花草茶</p>
            <el-button type="primary" icon="el-icon-search" @click="chakan" class="btn">查看商品</el-button>
        </div>
        <div class="tu">
            <img src="../homePage/08.png" width="200px" height="150px">
        </div>
    </el-card>
</template>

<script>
    export default{
        name:'Shangping',
        methods:{
            chakan(){
                this.$router.push('/items')
            }
        }
    }
</script>

<style scoped>
.box-card {
    width: 690px;
    height: 150px;
    background-color: rgba(165, 212, 191,.5);
  }
  .btn{
    margin-top: 10px;
    background-color:transparent;
    border: 1px solid #2186e4;
    color: black;
  }
  .btn:hover{
    background-color: rgb(232, 225, 120);
    border: 1px dashed #fec529;
    color:black;
  }
  .content{
    float: left;
  }
</style>