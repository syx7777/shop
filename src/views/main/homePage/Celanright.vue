<template>
    <div class="index-right-box">
        <h2 class="content">其他产品</h2>
        <div v-for="m,index in otherList" :key="index" class="content">
                    <h3>{{ m.othertitle }}</h3>
            <ul>
                <li v-for="l,index in m.list" :key="index">
                    <router-link to="/item">{{ l.name }}</router-link>
                        <span class="flag" v-if="l.hot">
                            <i class="el-icon-s-flag"></i>
                        </span>
                </li>
            </ul>
        </div>
        <img src="../homePage/07.png" width="200px" height="100px" class="content">
    </div>
</template>

<script>

    export default{
        name:'Celanright',
        data(){
            return{
                otherList:[
                    {
                        othertitle:'黄精茶',
                        list:[
                            {id:1,name:'九华黄精茶',hot:true},
                            {id:2,name:'九华黄精丸',hot:false},
                        ]
                    },
                    {
                        othertitle:'荞麦茶',
                        list:[
                            {id:1,name:'黑荞麦茶',hot:false},
                            {id:2,name:'白荞麦茶',hot:false},
                        ]
                    },
                    {
                        othertitle:'花茶',
                        list:[
                            {id:1,name:'玫瑰花茶',hot:false},
                            {id:2,name:'菊花茶',hot:true},
                            {id:3,name:'茉莉茶',hot:false},
                        ]
                    },
                    {
                        othertitle:'苦丁茶',
                        list:[
                            {id:1,name:'大叶苦丁茶',hot:false},
                            {id:2,name:'小叶苦丁茶',hot:false},
                        ]
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    .index-right-box{
        width:215px;
        border-radius: 20px;
        background-color:rgba(165, 212, 191,.5)
    }
    h2{
        font-size: 20px;
    }
    h3{
        color: #366d36;
        font-weight: 500;
        font-size: 20px;
    }
    .content{
        padding-left: 15px;
        padding-top: 10px;
        height: 95px;
        /* background-color: rgba(165, 212, 191,.5); */
    }
    a{
        color: rgb(102, 100, 100);
        font-size: 16px;
    }
    .flag{
        color: red;
        padding-left: 2px;
        font-size: 12px;
        font-weight: 100;
    }
</style>