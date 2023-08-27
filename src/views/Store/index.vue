<template>
    <div>
        <!-- 头部 -->
        <van-nav-bar
            title="店铺"
            left-arrow
            @click-left="onClickLeft"
        />
        <!-- 店铺图片 -->
        <div class="store-intro">
            <van-swipe :autoplay="3000" width="calc(100vw - 40px)">
                <van-swipe-item default="1">
                    <img src="https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440" alt="">
                </van-swipe-item>
                <van-swipe-item default="2">
                    <img src="https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440" alt="">
                </van-swipe-item>
                <van-swipe-item default="3">
                    <img src="https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440" alt="">
                </van-swipe-item>
            </van-swipe>   
        </div>
        <!-- 店铺的tab页面 -->
        <van-tabs color="#ffc400">
            <van-tab v-for="(item, index) in data" :key="index" :title="item.name">
                <FoodList :Index="index" :foodData="item.data" />
            </van-tab>
        </van-tabs>
        <!-- 底部 -->
        <van-action-bar>
            <van-action-bar-icon icon="chat-o" text="客服" dot />
            <van-action-bar-icon @click="goCartPage" icon="cart-o" text="购物车" :badge="store.state.cartList.length" />
            <van-action-bar-button type="warning" @click="addToCart" text="加入购物车" />
            <van-action-bar-button @click="goBuyPage" type="danger" text="立即购买" />
        </van-action-bar>

    </div>
</template>

<style lang="less" scoped>
.store-intro {
    padding-left: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(100vw - 40px);
    img {
        width: 100%;
        height: 100%;
    }
}
</style> 

<script setup>
    import { reactive } from "vue";
    import { useRouter } from "vue-router";
    import {storeData} from '../../Config/index'
    import FoodList from './components/FoodList.vue'
    import {useStore} from 'vuex'
    import { Toast } from 'vant';
    import { getCurrentInstance } from 'vue';

    components: {
        FoodList
    }
    let store = useStore()
    const { proxy } = getCurrentInstance()

    let data = reactive(storeData)


    const addToCart = (a) => {
        const newList = []
        console.log(data)
        data.forEach(item => {
            item.data.items?.forEach(item => {
                item.children.forEach(item => {
                    if(item.num > 0) {
                        newList.push(item)
                    }
                })
            })
        })
        if(newList.length === 0) {
            proxy.$toast('购物车为空，请添加商品')
            return;
        }
        store.commit('addCart', newList)
    }

    let router = useRouter()

    const onClickLeft = () => {
        router.go(-1)
    }

    const goCartPage = () => {
        router.push('/cart')
    }
    const goBuyPage = () => {
        router.push('/pay')
    }

</script>