<template>
    <div class="login">
        <!-- 头部 -->
        <van-nav-bar
            title="登录"
            left-arrow
            @click-left="onClickLeft"
        />
        <div class="img">买团</div>
        <van-form @submit="onSubmit">
            <van-field v-model="data.username" name="用户名" label="用户名" placeholder="用户名" :rules="[{required: true, message: '请填写用户名'}]">

            </van-field>
            <van-field v-model="data.password" name="密码" label="密码" placeholder="密码" :rules="[{required: true, message: '请填写密码'}]">

            </van-field>
            <div style="margin:16px">
                <van-button round block type="info" class="register" @click="toLogin">
                    登录
                </van-button>
                <van-button round block type="info" class="register" @click="toRegister">
                    去注册
                </van-button>
            </div>
        </van-form>
    </div>
</template>

<script setup>
    import { reactive } from "vue"
    import { useRouter } from "vue-router"
    let router = useRouter()
    const data = reactive({
        username: '',
        password: ''
    })
    const toLogin = () => {
        router.push('/mine')
    }
    const toRegister = () => {
        router.push('/register')
    }
    const onClickLeft = () => {
        router.go(-1)
    }
</script>

<style lang="less" scoped>
.login {
  .img {
    width: 200px;
    height: 200px;
    background-color: #ffc400;
    font-size: 80px;
    line-height: 200px;
    text-align: center;
    border-radius: 40px;
    margin: 20px auto;
  }
  .register {
    margin-top: 20px;
  }
}
</style>