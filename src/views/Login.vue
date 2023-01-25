<template>
<div class="login">
   <el-card class="box-card">
<!-- 标题 -->
    <div slot="header" class="head">
        <span>新艺茶铺</span>
    </div>
    <div slot="header">
        <el-tabs v-model="activeName" @tab-click="handleClick" stretch>
            <!-- 登录ui -->
            <el-tab-pane label="登录" name="login">
                <el-form :model="loginForm" status-icon ref="loginForm" :rules="rules">
                    <el-form-item label="用户名" label-width="60px" prop="username">
                        <el-input type="text" v-model="loginForm.username"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" label-width="60px" prop="password">
                        <el-input type="password" v-model="loginForm.password"></el-input>
                    </el-form-item>
                    <el-form-item class="button">
                        <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <!-- 注册ui -->
            <el-tab-pane label="注册" name="enroll">
                <el-form :model="enrollForm" status-icon ref="enrollForm" :rules="rules">
                    <el-form-item label="用户名" label-width="70px" prop="username">
                        <el-input type="text" v-model="enrollForm.username"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" label-width="70px" prop="password">
                        <el-input type="password" v-model="enrollForm.password"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" label-width="70px" prop="configurePassword">
                        <el-input type="password" v-model="enrollForm.configurePassword"></el-input>
                    </el-form-item>
                    <el-form-item class="button">
                        <el-button type="primary" @click="submitForm('enrollForm')">注册</el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
        </el-tabs>
    </div>
    <div>

    </div>
   </el-card>
</div>
</template>

<script>

export default{
    data() {
        // 验证规则
         var validateUserName=(rule, value, callback)=>{
            if( value ===''){
                callback(new Error('请输入用户名'))
            }else{
                callback()
            }
         };
         var validatePassWord=(rule, value, callback)=>{
            if( value ===''){
                callback(new Error('请输入密码'))
            }else{
                callback()
            }
         };
         var validateconfigurePassWord=(rule, value, callback)=>{
            if( value ===''){
                callback(new Error('请再次输入密码'))
            }else if(value !== this.enrollForm.password){
                callback(new Error('两次密码不一致'))
            }
            else{
                callback()
            }
         };
        return {
            activeName: 'login',
            loginForm:{
                username:'',
                password:''
            },
            enrollForm:{
                username:'',
                password:'',
                configurePassword:''
            },
            rules:{
                username:[
                    {
                        validator:validateUserName,
                        trigger:'blur'
                    }
                ],
                password:[{
                    validator:validatePassWord,
                    trigger:'blur'
                }
                ],
                configurePassword:[{
                    validator:validateconfigurePassWord,
                    trigger:'blur'
                }]
            },
            activeTab:'login'
      };
    },
    methods:{
        submitForm(formName){
            this.$refs[formName].validate((valid) => {
          if (valid) {
            if(this.activeTab==='login'){
                // console.log(this.loginForm);
                this.$store.commit('UPDATEDUSERNAME',this.loginForm.username),
                this.$store.commit('UPDATEDPASSWORD',this.loginForm.password),
                this.$router.push('/home')
            }
            if(this.activeTab==='enroll'){
                console.log(this.enrollForm)
                alert('注册成功')
            }
          } else {
            console.log('error submit!!');
            return false;
          }
        })
        },
        handleClick(tab){
            this.activeTab=tab.name
        }
    }
}
</script>

<style scoped>
    .login{
        width: 1200px;
        margin: 0 auto;
    }
    .box-card{
            width: 500px;
            margin: 100px auto;
        }
    .head{
        text-align: center;
    }
    .button{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>