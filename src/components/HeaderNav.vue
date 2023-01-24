<template>
   <el-menu 
        :default-active="active"
        class="el-menu-demo" mode="horizontal" 
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
    >
    <div class="left">
        <el-menu-item index="/home" class="inner">首页</el-menu-item>
        <el-menu-item index="/items" class="inner">商品列表</el-menu-item>
        <el-menu-item index="/gouwu" class="inner">
                购物车
            <i class="el-icon-shopping-cart-2"></i>
        </el-menu-item>
        <el-menu-item index="/login" class="inner">登录|注册</el-menu-item>
    </div>
        
    <div class="right">
        <el-menu-item index="/user">
            个人中心
            <i class="el-icon-user"></i>
        </el-menu-item> 
    </div>
    </el-menu>

</template>

<script>

    export default{
        name:'HeaderNav',
      data(){
        return{
            active:'1'
        }
      }
}
</script>

<style scoped>
    .left{
        width: 500px;
        float: left;
    }
    .right{
        float: right;
    }
    .inner{
        float: left;
    }
    .el-icon-shopping-cart-2{
        float: right;
        margin: 20px auto;
    }
    .el-icon-user{
        float: left;
        margin: 20px auto;
    }
    .el-menu-demo{
        height: 58px;
    }
</style>