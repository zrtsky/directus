module.exports = function (env) {
	return {
		// User inputs from railway starter button
		ADMIN_EMAIL: env.ADMIN_EMAIL,
		ADMIN_PASSWORD: env.ADMIN_PASSWORD,
		KEY: env.KEY,
		SECRET: env.SECRET,

		MAX_PAYLOAD_SIZE: "1000mb",

		// Reference: https://docs.railway.app/deploy/exposing-your-app
		PORT: env.PORT,

		// Reference: https://docs.railway.app/develop/variables#railway-provided-variables
		PUBLIC_URL: `https://${env.RAILWAY_STATIC_URL}`,

		// Database variables from Railway PostgreSQL Plugin
		// Reference: https://docs.railway.app/plugins/postgresql
		DB_CLIENT: "pg",
		DB_HOST: env.PGHOST,
		DB_PORT: env.PGPORT,
		DB_DATABASE: env.PGDATABASE,
		DB_USER: env.PGUSER,
		DB_PASSWORD: env.PGPASSWORD,
		STORAGE_LOCATIONS: "cloudinary",
		STORAGE_CLOUDINARY_DRIVER: "cloudinary",

		// AWS
		//STORAGE_S3_KEY: env.STORAGE_S3_KEY,
		//STORAGE_S3_SECRET: env.STORAGE_S3_SECRET,
		//STORAGE_S3_REGION: env.STORAGE_S3_REGION,
		//STORAGE_S3_BUCKET:  env.STORAGE_S3_BUCKET,
		//STORAGE_S3_ENDPOINT: env.STORAGE_S3_ENDPOINT,

		// CLOUDINARY
		STORAGE_CLOUDINARY_CLOUD_NAME: env.STORAGE_CLOUDINARY_CLOUD_NAME,
		STORAGE_CLOUDINARY_API_KEY: env.STORAGE_CLOUDINARY_API_KEY,
		STORAGE_CLOUDINARY_API_SECRET: env.STORAGE_CLOUDINARY_API_SECRET,
		STORAGE_CLOUDINARY_ACCESS_MODE: "public",
	}
}
