module.exports = {
	database: "labminc_test",
	username: "",
	password: "",
	params: {
		dialect: "sqlite",
		storage: "labminc.sqlite",
		logging: false,
		define: {
			underscored: true
		}
	},
	jwtSecret: "L4BM1NC-AP1",
	jwtSession: {session: false}
};
