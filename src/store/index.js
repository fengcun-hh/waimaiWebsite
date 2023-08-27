import { createStore } from "vuex";

export default createStore({
    state: {
        cartList: [], // 购物车数据
        orderList: [], // 列表数据
        userAddress: [
            {
                id: 1001,
                name: 'jason',
                tel: '15874859686',
                province: '广东省',
                city: '深圳市',
                county: '南山区',
                addressDetail: '深圳湾',
                isDefault: true,
                areaCode: '110101',
              },
              {
                id: 1002,
                name: 'allen',
                tel: '15874859685',
                province: '湖北省',
                city: '武汉市',
                county: '武昌区',
                addressDetail: '黄鹤楼',
                isDefault: false,
                areaCode: '110101',
              },
        ],
        // 支付的订单列表
        payOrderList: [],
        // 用户地址
        userAddress: [
            {
              id: '1',
              name: '张三',
              tel: '13000000000',
              address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
              isDefault: true,
            },
            {
              id: '2',
              name: '李四',
              tel: '1310000000',
              address: '浙江省杭州市拱墅区莫干山路 50 号',
            },
        ]
    },
    mutations: {
        addCart(state,value) {
            state.cartList = value
        },
        updateAddress(state,[address, id]) {
            state.userAddress.forEach((item) => {
                if(item.id === id) {
                    item.name = address.name
                    item.tel = address.tel
                    item.address = `${address.province}${address.city}${address.county}${address.addressDetail}`
                    item.isDefault = address.isDefault
                }
            })
        },
        updateDefaultAddress(state,id) {
            state.userAddress.forEach((item) => {
                if(item.isDefault && item.id !== id) {
                    item.isDefault = false
                }
            })
        },
        newAddress(state,address) {
            console.log(1111)
            state.userAddress.push({
                id: (state.userAddress.length + 1) + '',
                name: address.name,
                tel: address.tel,
                address: `${address.province}${address.city}${address.county}${address.addressDetail}`,
                isDefault: address.isDefault
            })

        }
    },
    actions: {

    }
})