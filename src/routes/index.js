//Layout
import { HeaderOnly } from "../components/Layout";

import Home from "~/pages/Home";
import Contact from "~/pages/Contact";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/contact", component: Contact },
  { path: "/profile", component: Profile },
  { path: "/upload", component: Upload, layout: HeaderOnly },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
