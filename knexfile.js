module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/fullmealdeal'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
