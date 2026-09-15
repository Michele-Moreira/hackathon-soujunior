import { randomUUID } from 'node:crypto'

const AUTHORIZE_URL = 'https://github.com/login/oauth/authorize'

export default function handler(request, response) {
  const clientId = process.env.GITHUB_CLIENT_ID

  if (!clientId) {
    response.status(500).send('GITHUB_CLIENT_ID não configurado nas variáveis de ambiente da Vercel.')
    return
  }

  const protocol = request.headers['x-forwarded-proto'] ?? 'https'
  const host = request.headers['x-forwarded-host'] ?? request.headers.host
  const state = randomUUID()

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: `${protocol}://${host}/api/callback`,
    scope: 'repo,user',
    state,
  })

  response.setHeader('Set-Cookie', `decap_oauth_state=${state}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=600`)
  response.redirect(302, `${AUTHORIZE_URL}?${params}`)
}
