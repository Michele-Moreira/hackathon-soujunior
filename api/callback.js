const ACCESS_TOKEN_URL = 'https://github.com/login/oauth/access_token'

function readStateCookie(cookieHeader) {
  return (cookieHeader ?? '')
    .split(';')
    .map((part) => part.trim().split('='))
    .find(([name]) => name === 'decap_oauth_state')?.[1]
}

function renderHandshake(status, payload) {
  return `<!doctype html>
<html lang="pt-BR">
  <head><meta charset="UTF-8" /><title>Autenticando…</title></head>
  <body>
    <p>Autenticando com o GitHub…</p>
    <script>
      (function () {
        var message = 'authorization:github:${status}:' + ${JSON.stringify(JSON.stringify(payload))};
        // Só o painel do próprio site recebe o token: outra origem que abrir esta janela fica sem resposta.
        var siteOrigin = window.location.origin;
        function receive(event) {
          if (event.origin !== siteOrigin) return;
          window.opener.postMessage(message, siteOrigin);
          window.removeEventListener('message', receive, false);
        }
        window.addEventListener('message', receive, false);
        window.opener.postMessage('authorizing:github', siteOrigin);
      })();
    </script>
  </body>
</html>`
}

export default async function handler(request, response) {
  const { code, state } = request.query
  const expectedState = readStateCookie(request.headers.cookie)

  response.setHeader('Content-Type', 'text/html; charset=utf-8')
  response.setHeader('Set-Cookie', 'decap_oauth_state=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0')

  if (!code || !state || state !== expectedState) {
    response.status(400).send(renderHandshake('error', { message: 'Falha na verificação do login. Tente de novo.' }))
    return
  }

  const tokenResponse = await fetch(ACCESS_TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code,
    }),
  })

  const data = await tokenResponse.json()

  if (!data.access_token) {
    response.status(401).send(renderHandshake('error', { message: data.error_description ?? 'O GitHub não devolveu o token.' }))
    return
  }

  response.status(200).send(renderHandshake('success', { token: data.access_token, provider: 'github' }))
}
