import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("/ws", "pages/ws/page.tsx")
] satisfies RouteConfig;
