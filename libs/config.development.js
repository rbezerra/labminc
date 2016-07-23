module.exports = {
	database: "labminc",
	username: "",
	password: "",
	params: {
		dialect: "sqlite",
		storage: "labminc.sqlite",
		define: {
			underscored: true
		}
	},
	jwtSecret: "L4BM1NC-AP1",
	jwtSession: {session: false}
};
