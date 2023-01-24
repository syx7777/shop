<template>
    <!-- 首页头部 -->
    <div class="outer">
        <!-- 左边图标 -->
        <router-link to="/home" class="left">
            <img src="../homePage/01.png" width="100" height="100">
        </router-link>
        <!-- 右边搜索框 -->
        <div class="right">
            <form action="">
                <input type="text" class="sousuo">
                <button class="btn" @click="goSerch">
                    <i class="el-icon-search"></i>
                </button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Sousuo',
        methods:{
            goSerch(){
                this.$router.push('/items')
            }
        }
    }
</script>

<style scoped>
    .outer{
        height: 97px;
        padding-top: 24px;
        background-color: #fff;
        display: flex;
        flex-direction: row;
    }
    .left{
        width: 100px;
        height: 100px;
        margin-left: 300px;
    }
    .sousuo{
        width: 500px;
        height: 32px;
        margin-top: 17px;
        border-radius: 10px 0 0 10px;
    }
    .btn{
        width:62px;
        height: 36px;
        background-color:#ffd04b;
        border: 1px solid;
    }
</style>