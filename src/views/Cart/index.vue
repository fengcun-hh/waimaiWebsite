<template>
    <div>
        <!-- 头部 -->
        <van-nav-bar
            title="购物车"
            left-arrow
            @click-left="onClickLeft"
        />
        <!-- 购物车为空的时候显示 -->
        <van-empty v-if="store.state.cartList.length === 0" description="购物车为空" />
        <!-- 购物车不为空时展示商品信息 -->
        <div v-if="store.state.cartList.length !== 0">
            <CartDetail />
        </div>
        <!-- 底部提交订单页面 -->
        <van-submit-bar :loading="isLoading" :price="price" button-text="提交订单" @submit="onSubmit" />

    </div>
</template>

<script setup>
    import CartDetail from './components/CartDetail.vue'
    import { useRouter } from "vue-router";
    import { useStore } from "vuex";
    import {ref, onMounted} from 'vue'
    components: {
        CartDetail
    }
    let price = ref(0)
    let isLoading = ref(false)

    let router = useRouter()
    let store = useStore()
    const onClickLeft = () => {
        router.go(-1)
    }
    onMounted(() => {
        store.state.cartList.forEach((item) => {
            price.value = price.value + (item.num * item.price * 1)
        })
        price.value = price.value * 100
    })
    const onSubmit = () => {
        isLoading.value = true
        let timer = setTimeout(() => {
            isLoading.value = false
            clearTimeout(timer)
            // 添加订单数据
            store.state.orderList = store.state.cartList
            // 清空购物车
            store.state.cartList = []
            router.push('/createOrder')
        },1000)

    }
</script>

<style>
</style>