<template>
    <div class="order">
        <!-- 头部 -->
        <van-nav-bar
            title="订单"
            left-arrow
            @click-left="onClickLeft"
        />
        <!-- 内容区域 -->
        <div class="content">
            <van-tabs >
                <van-tab v-for="(item,index) in data.navData" :key="index" :title="item">
                    <div  v-for="(item, index) in store.state.payOrderList" :key="index">
                        <van-card 
                            :num="item.num"
                            :price="item.price"
                            :title="item.title"
                            :thumb="item.pic"
                        />
                    </div>
                    
                </van-tab>  
                
            </van-tabs>
        </div>
    </div>
</template>

<script setup>
    import { reactive } from "vue";
    import { useRouter } from "vue-router";
    import { useStore } from "vuex";

    let router = useRouter()
    let store = useStore()

    const data = reactive({
        navData: ['全部','交易完成','代付款','待发货']
    })

    const onClickLeft = () => {
        router.go(-1)
    }

</script>

<style>
</style>