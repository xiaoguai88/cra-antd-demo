import { Login, Home, Dashboard, NotFound, Notification } from "../page"; // 外层路由
import {
  DribbbleOutlined,
  FieldTimeOutlined,
  AlertOutlined,
} from "@ant-design/icons";

export const mainRoutes = [
  {
    pathname: "/login",
    component: Login,
  },
  {
    pathname: "/404",
    component: NotFound,
  },
];
// 内层路由
export const adminRoutes = [
  {
    pathname: "/admin/home",
    component: Home,
    icon: <DribbbleOutlined />,
    text: "文章列表",
  },
  {
    pathname: "/admin/dashboard",
    component: Dashboard,
    icon: <FieldTimeOutlined />,
    text: "仪表盘",
  },
  {
    pathname: "/admin/notification",
    component: Notification,
    icon: <AlertOutlined />,
    text: "通知中心",
  },
];
