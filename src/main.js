import { createApp } from 'vue'
import App from './App.vue'
// 引入样式重置文件
import './assets/reset.css'
// 引入路由文件
import router from './router'
// 导入vuex仓库
import store from './store/index'
// 按需引入需要的vant组件
import { Tab, Tabs } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import { ConfigProvider } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { ActionBar, ActionBarIcon, ActionBarButton } from 'vant';
import { Toast } from 'vant';
import { Empty } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';
import { SubmitBar } from 'vant';
import { ContactCard } from 'vant';
import { Card } from 'vant';
import { Dialog } from 'vant';
import { AddressList } from 'vant';
import { AddressEdit } from 'vant';

import 'vant/es/dialog/style';
import 'vant/es/toast/style';

const app = createApp(App)
app.config.globalProperties.$toast = Toast

app.use(router)
app.use(Tabbar)
app.use(TabbarItem)
app.use(Tab);
app.use(Tabs);
app.use(ConfigProvider);
app.use(Swipe)
app.use(SwipeItem);
app.use(ActionBar);
app.use(ActionBarIcon);
app.use(ActionBarButton);
app.use(Toast);
app.use(Empty);
app.use(Checkbox);
app.use(CheckboxGroup);
app.use(SubmitBar);
app.use(ContactCard);
app.use(Card);
app.use(Dialog);
app.use(AddressList);
app.use(AddressEdit);

app.use(store)

app.mount('#app')
