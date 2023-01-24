<template>
    <div class="content">
        <ul>
            <li>商品名称：{{ this.$store.state.itemList1.name }}</li>
            <li>商品件数：{{ this.$store.state.itemList1.value }}</li>
            <li>商品单价：{{ this.$store.state.itemList1.money }}</li>
            <el-button type="success" round @click="sum">合计</el-button>
            <div class="jiaGe">{{ Sum }}</div>
        </ul>
    </div>
</template>
<script>
    export default{
        name:'Gouwu',
        props:['itemList1'],
        data(){
            return{
                Sum:null,
            }
        },
        methods:{
            sum(){
                const money=parseFloat(this.$store.state.itemList1.money)
                const num = this.$store.state.itemList1.value
                this.Sum=money*num
            }
        }
    }
</script>

<style scoped>
    .content{
        margin:20px;
    }
    .el-button{
        margin-top: 10px;
    }
    .jiaGe{
        margin-top: 10px;
    }
</style>