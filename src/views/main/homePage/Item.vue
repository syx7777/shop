<template>
<div>
    <div class="head">
        <el-form ref="searchForm" :model="search">
            <el-form-item>
                <el-input v-model="search.content"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">查询</el-button>
            </el-form-item>
        </el-form>
        <h3>走过路过不要错过，本商城商品均为特价商品，限选一件，赶紧下单吧！！！</h3>
    </div>
    <div class="products">
        <el-card class="box-card" shadow="hover" v-for="p in filproducts" :key="p.id">
            <img :src='p.img' width="220" height="200">
            <h1>{{ p.name }}</h1><br>
            <h2>{{ p.money }}</h2><br>
                <van-stepper v-model="p.value" min="0" max="30" integer />
                <van-button icon="goods-collect-o" type="primary" class="btn2"></van-button>
                <van-button icon="shopping-cart-o" type="primary" class="btn1" @click="gouwuche(p)">加入购物车</van-button>
                <van-button icon="smile-o" type="primary" class="btn3">立即购买</van-button>
        </el-card>
    </div>
</div>
</template>

<style scoped>
h3{
    font-size: 20px;
    color: red;
}
.el-form{
    display: flex;
    justify-content: center;
    margin-top: 10px;
}
.el-input{
    width: 1000px;
}
.products{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
    .box-card{
        width: 250px;
        height: 450px;
    }
    .btn2{
        height: 40px;
        background-color: red;
        border: 0px;
        margin-right: 10px;
        border-radius: 10px;
    }
    .btn1{
        background-color: rgb(153, 219, 182);
        border: 0px;
        width: 130px;
        height: 40px;
        margin-top: 10px;
        border-radius: 5px;
    }
    .btn3{
        width: 186px;
        margin-top: 10px;
        background-color: rgb(255, 208, 0);
        border: 0px;
        border-radius: 5px;
    }
</style>

<script>
import { mapState } from 'vuex'
    export default{
        name:'Item',
        data(){
            return{
                products:[
                    {id:'01',name:'霄坑野生茶',money:'48.8元/斤',img:require('../homePage/itemimg/01.jpg'),value:'0'},
                    {id:'02',name:'黄山毛峰',money:'12元/斤',img:require('../homePage/itemimg/02.jpg'),value:'0'},
                    {id:'03',name:'西湖龙井',money:'60元/斤',img:require('../homePage/itemimg/03.jpg'),value:'0'},
                    {id:'04',name:'祁门红茶',money:'10元/斤',img:require('../homePage/itemimg/04.jpeg'),value:'0'},
                    {id:'05',name:'安吉白茶',money:'35.8元/斤',img:require('../homePage/itemimg/05.jpg'),value:'0'},
                    {id:'06',name:'铁观音',money:'27.2元/斤',img:require('../homePage/itemimg/06.jpeg'),value:'0'},
                    {id:'07',name:'普洱熟茶',money:'15元/饼',img:require('../homePage/itemimg/07.jpeg'),value:'0'},
                    {id:'08',name:'九华黄精茶',money:'16元/斤',img:require('../homePage/itemimg/08.jpg'),value:'0'},
                    {id:'09',name:'荞麦茶',money:'8.8元/罐',img:require('../homePage/itemimg/09.jpg'),value:'0'},
                    {id:'10',name:'玫瑰花茶',money:'4元/盒',img:require('../homePage/itemimg/10.png'),value:'0'},
                    {id:'11',name:'菊花茶',money:'5.8元/盒',img:require('../homePage/itemimg/11.png'),value:'0'},
                    {id:'12',name:'茉莉花茶',money:'8.9元/罐',img:require('../homePage/itemimg/12.jpeg'),value:'0'},
                    {id:'13',name:'苦丁茶',money:'2.9元/袋',img:require('../homePage/itemimg/13.jpg'),value:'0'},
                    {id:'14',name:'白毫银针',money:'58元/斤',img:require('../homePage/itemimg/14.jpg'),value:'0'},
                    {id:'15',name:'冻顶乌龙',money:'68元/斤',img:require('../homePage/itemimg/15.jpg'),value:'0'},
                ],
                search:{
                    content:''
                }
            }
        },
        methods:{
            gouwuche(p){
                this.$store.commit('GETITEMLIST1',p)
            }
        },
        mounted(){
            // 派发action，获取item组件的数据
            this.$store.dispatch('getItemList')
        },
        computed:{
            ...mapState({
                itemList1:state=>state.itemList1
            }),
            filproducts(){
                const arr = this.products.filter((m)=>{
                    return m.name.indexOf(this.search.content) !==-1
                })
                return arr
            }
        }
    }
</script>