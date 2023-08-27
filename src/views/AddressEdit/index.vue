<template>
    <div>
        <!-- 头部 -->
        <van-nav-bar
            title="地址管理"
            left-arrow
            @click-left="onClickLeft"
        />
        <!-- 地址编辑区域 -->
        <van-address-edit
            :area-list="data"
            show-delete
            :address-info="addressInfo"
            show-set-default
            show-search-result
            :area-columns-placeholder="['请选择', '请选择', '请选择']"
            @save="onSave"
            @delete="onDelete"
        />
    </div>
</template>

<script setup>
    import { useRouter,useRoute } from 'vue-router';
    import { onMounted, reactive } from 'vue';
    import { useStore } from 'vuex';
    
    let router = useRouter()
    let route = useRoute()

    let store = useStore()
    let data = reactive({
        province_list: {
          110000: "广东省",
          120000: "浙江省",
        },
        city_list: {
          110100: "广州市",
          110200: "深圳市",
          120100: "杭州市",
          120200: "宁波市",
        },
        county_list: {
          110101: "天河区",
          110102: "海珠区",
          120102: "上城区",
          130102: "下城区",
        }
    })
    let addressInfo = reactive({
        id: '',
        name: '',
        tel: '',
        address: '',
        isDefault: false,
    })
    const onSave = (address) => {
        if(route.query.type === 'edit') {
            store.commit('updateAddress', [address, route.query.id])
            
            if(address.isDefault) {
                store.commit('updateDefaultAddress', route.query.id)      
            }
        } else {
            console.log(1111)
            store.commit('newAddress', address)
        }
        console.log(1111)
        router.push('/address')
    }
    const onDelete = () => {
        router.push('/address')
    }
    const init = () => {
        store.state.userAddress.forEach((item) => {
            if(item.id === route.query.id) {
               addressInfo.id = item.id
               addressInfo.name = item.name
               addressInfo.tel = item.tel
               addressInfo.address = item.address
               addressInfo.isDefault = item.isDefault
            }
        })
    }
    onMounted(() => {
        init()
    })
    const onClickLeft = () => {
        router.go(-1)
    }
</script>