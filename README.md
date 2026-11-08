# VIDERE — link app

Página de especialistas da clínica VIDERE (Sobral-CE), publicada em `videre.cnvt.link` pela Vercel. HTML, CSS e JS puros, sem build. Diretrizes em [CLAUDE.md](CLAUDE.md); rotas em [ROTAS.md](ROTAS.md).

```
public/index.html           a página (filtro, grade de especialistas, contato)
public/whatsapp.html        transição que abre o WhatsApp com a mensagem de ?text=
public/logo.svg             logo
public/imagens/especialistas/  fotos
public/tracking.js          Google Analytics e Pixel da Meta (IDs vazios)
```

## Tarefas comuns

- **Adicionar especialista:** em `index.html`, copie um `<li>` da grade, troque nome, especialidade, conselho, foto, `data-nome`, `data-artigo` (o/a), `data-categoria` e `data-track`. Foto quadrada em `public/imagens/especialistas/`.
- **Remover:** apague o `<li>` (e a foto, se não for usar mais).
- **Categorias:** edite os `<option>` do `<select id="categoria">`; o valor precisa bater com o `data-categoria` dos cards.
- **Mensagens do WhatsApp:** lista `mensagens` no script do `index.html`.
- **Número e frases:** `NUMERO` e `frases` no script do `whatsapp.html`.

## Rodar localmente

```bash
python3 -m http.server 4321 -d public
```

Deploy: Vercel, Root Directory = pasta da videre (o `vercel.json` já define `public`).
