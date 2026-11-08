# Registro de rotas

Rotas curtas (`videresaude.cnvt.link/whatsapp`) são opcionais: valem quando o link também é divulgado fora da página (bio, QR code, impresso) ou muda com frequência.

- **Sem rastreamento**: redirect no `vercel.json`.
- **Com rastreamento**: arquivo `public/<rota>.html`, copiado de `modelos/rota-rastreada.html`.

Uma rota fica em **um lugar só**. Se ela estiver nos dois, o `vercel.json` ganha.

| Rota        | Destino                                                                                     | Onde fica                | Rastreada |
| ----------- | ------------------------------------------------------------------------------------------- | ------------------------ | --------- |
| `/`         | Página principal (`public/index.html`)                                                      | arquivo                  | sim*      |
| `/whatsapp` | Página de transição que abre o WhatsApp (88) 3613-4001 com a mensagem de `?text=` (padrão: "Olá, gostaria de agendar uma consulta na VIDERE.") | `public/whatsapp.html` | sim* |

\* As páginas registram a visita e os cliques (`data-track`) assim que os IDs forem preenchidos em `public/tracking.js` (hoje vazios).

O `/whatsapp` é uma página (não um redirect) porque mostra a frase de saúde e a mensagem antes de abrir o WhatsApp. O `index.html` monta o link de cada especialista como `/whatsapp?text=<mensagem codificada>`.
