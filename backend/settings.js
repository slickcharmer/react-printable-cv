module.exports = {
  useRecaptcha: true,
  siteKey: '1Ab_CdEfGhIjK',
  secretKey: '2Ab_CdEfGhIjK',
  useHttps: true,
  privateKeyPath: '/etc/letsencrypt/live/example.com/privkey.pem',
  certificatePath: '/etc/letsencrypt/live/example.com/cert.pem',
  caPath: '/etc/letsencrypt/live/example.com/chain.pem',
  routePath: '/cv',
  rootRedirectTo: 'https://example.com/',
}
