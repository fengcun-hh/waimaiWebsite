<template>
    <div class="food-list" v-if="Index === 0">
        <van-tree-select @click-nav="navClick" v-model:main-active-index="data.activeIndex" height="88vw" :items="data.items">
            <template #content>
                <div v-for="(item, index) in data.subItem" :key="index" class="item-bg">
                    <FoodListItem :item="item" :handleAdd="handleAdd" :handleChnage="handleChnage"/>
                </div>
                
            </template>
        </van-tree-select>
    </div>
    <div else>
        
    </div>
</template>

<style lang="less" scoped>
.food-list {
  margin-top: 20px;
  .item-bg {
    padding: 10px;
  }
  }
  /deep/ .van-tree-select__item--active {
    color: #ffc400;
  }
  /deep/ .van-sidebar-item--select::before {
    background-color: #ffc400;
  }
</style>

<script>
import { reactive } from "vue";
import FoodListItem from './FoodListItem.vue'
export default {
    name: 'FoodList',
    components: {
        FoodListItem
    },
    props: ['Index', 'foodData'],
    setup(props) {
        let data = reactive({
            activeIndex: 0,
            items: [{text: '分组1'}, {text: '分组2'}]
        })
        const navClick = (i) => {
            data.activeIndex = i
            initData()
        }
        const handleChange = (value, detail) => {
            data.subItem.forEach((item, index) => {
                if(item.id === detail.name) {
                    item.num = value
                }
            })
        }
        const handleAdd = (id) => {
            data.subItem.forEach((item, index) => {
                if(item.id === id) {
                    item.add = false
                    item.num += 1
                }
            })
        }
        // 初始化数据
        const initData = () => {
            let newArray = []
            props.foodData?.items?.forEach((item,index) => {
                newArray.push({
                    text: item.text,
                 })
                 if(data.activeIndex === index) {
                    data.subItem = item.children
                 }
                 
            });
            data.items = newArray
        }
        initData()
        return {
            data,
            navClick,
            handleAdd,
            handleChange
        }
    }
}
</script>