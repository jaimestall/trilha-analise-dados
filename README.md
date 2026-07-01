# Trilha Análise de Dados

**Descrição**  
Site estático que organiza uma trilha de estudos em Análise de Dados: lista de tópicos por nível, modal de detalhes com notas, prioridade e marcação de concluído, export/import do progresso em JSON e interface responsiva e limpa.

---

## Conteúdo do repositório

- `index.html` — marcação principal e modal.  
- `style.css` — estilos e layout refinado.  
- `app.js` — lógica: renderização, modal, export/import, `localStorage`.  
- `assets/` (opcional) — imagens, fontes e outros recursos.

---

## Como rodar localmente

**Abrir diretamente**  
- Abra `index.html` no navegador.

**Servir com Python (recomendado para testes locais)**  
```bash
# Python 3
python -m http.server 8000
# abra http://localhost:8000