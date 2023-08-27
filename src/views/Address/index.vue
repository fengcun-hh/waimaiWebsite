<template>
    <div>
        <!-- 头部 -->
        <van-nav-bar
            title="地址管理"
            left-arrow
            @click-left="onClickLeft"
        />
        <!-- 地址管理区域 -->
        <van-address-list
            v-model="chosenAddressId"
            :list="data.list"
            default-tag-text="默认"
            @add="onAdd"
            @edit="onEdit"
        />
    </div>
</template>


<script setup>
    import { useRouter } from 'vue-router';
    import { useStore } from 'vuex';
    import { onMounted, reactive,ref } from 'vue';

    let store = useStore()
    let router = useRouter()

    let data = reactive({
        list: []
    })

    const onClickLeft = () => {
        router.go(-1)
    }

    let chosenAddressId = ref('0')

    const initAddress = () => {
        data.list = store.state.userAddress.map((item) => {
            return {
                id: item.id,
                name: item.name,
                tel: item.tel,
                address: item.address,
                isDefault:item.isDefault
            }
        })
        store.state.userAddress.forEach((item) => {
            if(item.isDefault) {
                chosenAddressId.value = item.id
            }
        })

    }

    onMounted(() => {
        initAddress()
    })

    const onAdd = () => {
        router.push({
            path: '/editAddress',
            query: {
                type: 'add'
            }
        })
    }

    const onEdit = (item) => {
        router.push({
            path: '/editAddress',
            query: {
                id: item.id,
                type: 'edit'
            }
        })
    }
</script>