<template>
    <div class="item" @click="ToStorePage">
        <img :src="itemContent.pic" alt="">
        <div class="item-intro">
            <div class="title">
                {{ itemContent.title }}
            </div>
            <div class="sales">
                销量：{{ itemContent.sales }}
            </div>
            <div class="price">
                人均消费：{{ itemContent.price }}
            </div>
            <div class="label">
                <div v-for="(i, index) in itemContent.label" :key="index">{{ i }}</div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .item {
        background-color: #fff;
        border-radius: 10px;
        padding: 10px;
        display: flex;
        img {
            width: 120px;
            height: 120px;
            border-radius: 10px;
        }
        .item-intro {
            padding-left: 20px;
            display: flex;
            flex-flow: column;
            justify-content: space-between;
            .title {
                font-size: 18px;
            }
            .label {
                display: flex;
                div {
                    background-color: orange;
                    margin-right: 10px;
                    border-radius: 5px;
                }
            }
        }
    }
</style>

<script>
import {useRouter} from 'vue-router'
export default {
    name: 'NavListItem',
    props: ['itemContent'],
    setup() {
        let router = useRouter()
        const ToStorePage = () => {
            router.push('/store')
        }
        return {
            ToStorePage
        }
    },
}
</script>
