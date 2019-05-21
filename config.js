require('dotenv').config();

module.exports = {
  host: process.env.LOOKER_EMBED_HOST || 'self-signed.localhost.com:9999',
  secret: process.env.LOOKER_EMBED_SECRET || 'ranger2'
}
