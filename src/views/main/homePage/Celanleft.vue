<template>
            <div class="index-left-box">
                <h2 class="content">全部茶品</h2>
                <div v-for="p,index in productList" :key="index" class="content">
                    <h3>{{ p.title }}</h3>
                <ul>
                    <li v-for="item,index in p.list" :key="index">
                        <router-link to="/item">{{ item.name }}</router-link> 
                        <span class="flag" v-if="item.hot">
                            <i class="el-icon-s-flag"></i>
                        </span>
                    </li>
                </ul>
                </div>
            </div>
</template>

<style scoped>
    .index-left-box{        
        /* margin-left: 80px; */
        width:220px;
        border-radius: 20px;
        background-color:rgba(165, 212, 191,.5);
    }
    .content{
        padding-left: 15px;
        padding-top: 9px;
    }
    h2{
        font-size: 20px;
    }
    h3{
        color: #366d36;
        font-weight: 500;
        font-size: 20px;
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

<script>

    export default{
        name:'Celan',
        data(){
            return{
                productList:[
                   {
                    title:'绿茶',
                    list:[
                        {id:1,name:'黄山毛峰',hot:false},
                        {id:4,name:'霄坑野茶',hot:true},
                        {id:2,name:'太平猴魁',hot:false},
                        {id:3,name:'西湖龙井',hot:false},
                    ]
                   },
                   {
                    title:'红茶',
                    list:[
                        {id:1,name:'祁门红茶',hot:true},
                        {id:2,name:'云南滇红',hot:false},
                        {id:3,name:'正山小种',hot:false},
                        {id:4,name:'金骏眉',hot:false},
                    ]
                   },
                   {
                    title:'白茶',
                    list:[
                        {id:1,name:'安吉白茶',hot:false},
                        {id:2,name:'白毫银针',hot:true},
                        {id:3,name:'白牡丹',hot:false},
                        {id:4,name:'贡眉',hot:false},
                    ]
                   },
                   {
                    title:'青茶',
                    list:[
                        {id:1,name:'大红袍',hot:false},
                        {id:2,name:'铁观音',hot:false},
                        {id:3,name:'武夷岩茶',hot:false},
                        {id:4,name:'冻顶乌龙',hot:true},
                    ]
                   },
                   {
                    title:'黑茶',
                    list:[
                        {id:1,name:'安化黑茶',hot:false},
                        {id:2,name:'雅安藏茶',hot:false},
                        {id:3,name:'普洱熟茶',hot:true},
                        {id:4,name:'六堡茶',hot:false},
                    ]
                   },
                ]
            }
        }
    }
</script>