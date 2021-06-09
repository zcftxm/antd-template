import Vue from 'vue';
import {
  ConfigProvider,
  Layout,
  Input,
  InputNumber,
  Button,
  Breadcrumb,
  PageHeader,
  Switch,
  Radio,
  Checkbox,
  Select,
  Card,
  Form,
  Row,
  Col,
  Modal,
  Spin,
  Table,
  Tabs,
  Icon,
  Menu,
  Drawer,
  Popover,
  Tooltip,
  Popconfirm,
  message,
  notification
} from 'ant-design-vue'

Vue.use(ConfigProvider)
Vue.use(Layout)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Button)
Vue.use(Breadcrumb)
Vue.use(PageHeader)
Vue.use(Switch)
Vue.use(Radio)
Vue.use(Checkbox)
Vue.use(Select)
Vue.use(Card)
Vue.use(Form)
Vue.use(Row)
Vue.use(Col)
Vue.use(Modal)
Vue.use(Spin)
Vue.use(Table)
Vue.use(Tabs)
Vue.use(Icon)
Vue.use(Menu)
Vue.use(Drawer)
Vue.use(Popover)
Vue.use(Tooltip)
Vue.use(Popconfirm)
Vue.use(message)
Vue.use(notification)

Vue.prototype.$confirm = Modal.confirm
Vue.prototype.$message = message
Vue.prototype.$notification = notification
Vue.prototype.$info = Modal.info
Vue.prototype.$success = Modal.success
Vue.prototype.$error = Modal.error
Vue.prototype.$warning = Modal.warning