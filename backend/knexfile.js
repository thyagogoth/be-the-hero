// Update with your config settings.
// knexjs.org

module.exports = {
	
	development: {
		client: 'sqlite3',
		connection: {
			filename: './src/database/db.sqlite'
		},
		migrations: {
			directory: './src/database/migrations'
		},
		useNullAsDefault: true,
	},
	
	staging: {
		client: 'postgresql',
		connection: {
			database: 'my_db',
			user:     'username',
			password: 'password'
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: 'knex_migrations'
		}
	},
	
	production: {
		client: 'postgresql',
		connection: {
			database: 'my_db',
			user:     'username',
			password: 'password'
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: 'knex_migrations'
		}
	}

	// client: 'mysql',
	// connection: {
	// 	host: '127.0.0.1',
	// 	user: 'root',
	// 	password: '',
	// 	database: 'be_the_hero'
	// },
	
	// npx knex migrate:make create_ongs
};
