<template>
    <!-- 头部 -->
    <van-nav-bar
            title="创建订单"
            left-arrow
            @click-left="onClickLeft"
    />
    <div class='create-order'>
        <van-contact-card type="edit" :name="data.name" :tel="data.tel" :address='data.address' @click='editAddress' />
        <div class='content'>
            <div v-for='(item, index) in store.state.orderList' :key='index'>
                <van-card
                    :num="item.num"
                    :price="item.price"
                    :title="item.title"
                    :thumb="item.pic"
                />
            </div>
        </div>
        <!-- 底部支付区域 -->
        <div class='pay-wrap'>
            <div class='price'>
                <span>商品金额</span>
                <span>{{ price }}</span>
            </div>
            <van-button @click="handleCreateOrder" class='pay-btn' type='primary'>支付</van-button>
        </div>
    </div>
</template>

<script setup>
    import {useRouter} from 'vue-router'
    import {useStore} from 'vuex'
    import {reactive,ref} from 'vue'
    import { onMounted } from 'vue';
    import { Dialog } from 'vant';
    import { showDialog } from 'vant';

    let router = useRouter()
    let store = useStore()
    let price = ref(0)
    const data = reactive({
        tel: '11111111',
        name: 'mike',
        address: '湖北武汉'
    })
    const calTotalPrice = () => {
        store.state.orderList.forEach((item) => {
            price.value = price.value + (item.num * item.price * 1)
        })
    }
    const handleCreateOrder = () => {
        store.state.orderList.forEach((item) => {
            store.state.payOrderList.push(item)
        })
        // 订单列表清空
        store.state.orderList = []
        Dialog(
            {
                title: '提示',
                message: '生成订单成功'
            }
        ).then(router.push('/order'))
    }
    const initAddress = () => {
        store.state.userAddress.forEach((item) => {
            if(item.isDefault) {
                data.name = item.name
                data.tel = item.tel
            }
        })
    }
    const editAddress = () => {
        router.push('/address')
    }
    const onClickLeft = () => {
        router.go(-1)
    }
    onMounted(() => {
        calTotalPrice()
        initAddress()
    })
</script>

<style lang='less' scoped>
    .create-order {
        display: flex;
        flex-flow: column;
        height: 100%;
        .content {
            flex: 1;
            overflow-y: auto;
        }
        .pay-wrap {
            padding: 10px 0;
            width: 100%;
            background: #fff;
            border-top: 1px solid #e9e9e9;
            > div {
                display: flex;
                justify-content: space-between;
                padding: 0 5%;
                margin: 10px 0;
                font-size: 14px;
                span:nth-child(2) {
                    color: red;
                    font-size: 18px;
                }
            }
            .pay-btn {
                width: 100%;
                margin: 0 auto;
            }
        }
    }
</style>
