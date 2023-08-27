<template>
    <div class="cartDetail">
        <div class="content">
            <van-checkbox-group v-model="data.checked">
                <div v-for="(item, index) in store.state.cartList" :key="index"> 
                    <CartListItem :item="item" />
                </div>
            </van-checkbox-group>
        </div>
    </div>
    
</template>


<script setup>
    import CartListItem from './CartListItem.vue'
    import {useStore} from 'vuex'
    import {reactive} from 'vue'
    let store = useStore()
    
    components: {
        CartListItem
    }

    const data = reactive({
        checked: []
    })

</script>
