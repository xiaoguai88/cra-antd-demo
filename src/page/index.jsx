import Loadable from "react-loadable";
import Loading from "./component/loading";

// 组件懒加载设置
const Home = Loadable({
  loader: () => import("./home"),
  loading: Loading,
});
const Dashboard = Loadable({
  loader: () => import("./dashboard"),
  loading: Loading,
});
const Notification = Loadable({
  loader: () => import("./notifications"),
  loading: Loading,
});
const Login = Loadable({
  loader: () => import("./login"),
  loading: Loading,
});
const NotFound = Loadable({
  loader: () => import("./component/notFound"),
  loading: Loading,
});
export { Home, Dashboard, Notification, Login, NotFound };
