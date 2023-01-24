<template>
    <div class="outer">
        <div class="user">
        <div class="user-nav">
            <img src="./homePage/09.jpg" width="70px">
            <el-descriptions  direction="vertical" :column="4" border>
                <el-descriptions-item label="用户名">{{ this.$store.state.username }}</el-descriptions-item>
                <el-descriptions-item label="手机号">13979896693</el-descriptions-item>
                <el-descriptions-item label="收货地址" :span="2">天津市xxxxxx</el-descriptions-item>
                <el-descriptions-item label="个性签名">
                    <el-tag size="small">留得残荷听雨声</el-tag>
                </el-descriptions-item>
                <el-descriptions-item label="偏好">
                    <el-select v-model="value" placeholder="绿茶">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-descriptions-item>
                <el-descriptions-item label="等级" class="dengji">✿✿✿</el-descriptions-item>
            </el-descriptions>
            
        </div>
    </div>
    </div>
</template>

<style scoped>
    .user{
        width: 1000px;
        border: 1px solid rgb(212, 210, 210);
        margin: 0 auto;
    }
    img{
        border:2px solid #fff;
        border-radius: 50%;
    }
</style>

<script>
    export default{
        name:'User',
        data() {
      return {
        options: [{
          value: '选项1',
          label: '绿茶'
        }, {
          value: '选项2',
          label: '红茶'
        }, {
          value: '选项3',
          label: '青茶'
        }, {
          value: '选项4',
          label: '黑茶'
        }, {
          value: '选项5',
          label: '黄茶'
        },{
          value: '选项6',
          label: '花茶'
        }, {
          value: '选项7',
          label: '黄精茶'
        }],
        value: '',
        input:''
      }
    },
    props:['username']
  }
</script>