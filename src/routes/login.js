export default [
	{
		path: "/login",
		component: () => import("@/views/login/Login"),
		meta: { layout: "BlankLayout", leftMenu: "false" }
	},
	{
		path: "/login-callback",
		component: () => import("@/views/login/LoginCallback"),
		meta: { layout: "BlankLayout", leftMenu: "false" }
	}
];