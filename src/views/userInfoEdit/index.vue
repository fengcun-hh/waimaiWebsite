<template>
    <div>
        <!-- 头部 -->
        <van-nav-bar
            title="用户信息管理"
            left-arrow
            @click-left="onClickLeft"
        />
        <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名" :rules="[{required: true, message: '请填写用户名'}]">

        </van-field>
        <van-field v-model="sign" name="个性签名" label="个性签名" placeholder="个性签名" :rules="[{required: true, message: '请填写个性签名'}]">

        </van-field>
        <van-field v-model="password" name="密码" label="密码" placeholder="密码" :rules="[{required: true, message: '请填写密码'}]">

        </van-field>
        <van-button round block type="primary" @click="save">
            保存
        </van-button> 
    </div>
</template>

<script setup>
    import { useRouter } from "vue-router"
    import { Toast } from "vant";
    let router = useRouter()
    const onClickLeft = () => {
        router.go(-1)
    }
    const save = () => {
        Toast("信息保存成功")
    }
</script>

<style lang="less" scoped>
/deep/ .van-button--danger {
  background-color: #ffc400;
  border-color: #ffc400;
}
.save-btn {
  width: 80%;
  margin: 20px auto;
}
</style>
