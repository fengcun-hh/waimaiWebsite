<template>
    <div>
        <!-- 主页头部页面 -->
        <div class="header">
            <!-- 头部左边区域 -->
            <div class="left">外卖</div>
            <!-- 头部右边区域 -->
            <div class="right">
                <van-icon name="location-o"></van-icon>
                <span>宁波大学</span>
                <van-icon name="arrow"></van-icon>
            </div>
        </div>
        <!-- 主页搜索框区域 -->
        <div class="search">
            <div class="serach-box">
                <input type="text">
            </div>
            <div class="search-button">
                <div>
                    <span>搜索</span>
                </div>
            </div>
        </div>
        <!-- 主页导航图标区域 -->
        <div class="sort">
            <!-- 大的分类图标区域 -->
            <div class="big-sort">
                <div v-for="(item, index) in iconData.big_sort" :key="index">
                    <svg class="icon" aria-hidden="true">
                        <use :xlink:href="`#${item.icon}`"></use>
                    </svg>
                    {{ item.name }}
                </div>
            </div>
            <!-- 小的分类图标区域 -->
            <div class="small-sort">
                <div v-for="(item, index) in iconData.small_sort" :key="index">
                    <svg class="icon" aria-hidden="true">
                        <use :xlink:href="`#${item.icon}`"></use>
                    </svg>
                    {{ item.name }}
                </div>
            </div>
        </div>
        <div class="tab-area">
            <!-- tab页面区域 -->
            <van-tabs v-model:active="activeTabIndex">
                <van-tab v-for="(item,index) in iconData.centent_nav_list" :key="index" :title="item.tab" >
                    <NavList :navList="item.data"></NavList>
                </van-tab>    
            </van-tabs>
            <van-tabbar route v-model="active">
                <van-tabbar-item to="/home" icon="home-o">主页</van-tabbar-item>
                <van-tabbar-item to="/cart" icon="cart-o">购物车</van-tabbar-item>
                <van-tabbar-item to="/order" icon="label-o">订单</van-tabbar-item>
                <van-tabbar-item to="/my" icon="user-o">我的</van-tabbar-item>
            </van-tabbar>
        </div>
    </div>
</template>

<script setup>
    import NavList from './components/NavList.vue'
    components: {
        NavList
    }
    import {reactive,ref} from 'vue'
    // 从配置文件中取主页图标的配置文件
    import data from '../../Config/index'
    
    // 设置为响应式数据
    let iconData = reactive(data) 

    // 定义当前的tab页面下标
    let activeTabIndex = ref(0)

    
</script>

<style lang="less" scoped>
    .header {
        background-color: orange;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 10px 10px 40px;
        .right {
            span {
                font-size: 20px;
                font-weight: 600;
                margin: 0 5px;
            }
        }
    }
    .search {
        height: 40px;
        padding: 20px 20px 0px 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        .serach-box {
            flex: 1;
            input {
                outline: none;
                border: 1px solid orange;
                border-radius: 5px;
                width: 100%;
                height: 32px;
            }
        }
        .search-button {
            height: 100%;
            margin: 10px;
            width: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: orange;
            border-radius: 20px
        }
    }
    .sort {
        padding: 20px 0;
        .big-sort {
            display: flex;
            div {
                flex: 1;
                display: flex;
                justify-content: center;
                flex-flow: column;
                align-items: center;
                .icon {
                    width: 50px;
                    height: 50px;
                    margin-bottom: 5px;
                }
            }
        }
        .small-sort {
            display: flex;
            flex-wrap: wrap;
            margin-top: 20px;
            div {
                display: flex;
                justify-content: center;
                flex-flow: column;
                align-items: center;
                width: 20%;
                .icon {
                    width: 30px;
                    height: 30px;
                    margin: 10px;
                }
            }
        }
    }
    .tab-area {
        
    }
</style>