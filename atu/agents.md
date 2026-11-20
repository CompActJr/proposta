# AGENTS.md - Landing Page de Proposta Comercial

## Estrutura de Arquivos
- `index.html`: Estrutura semântica da landing page.
- `style.css`: Estilização, variáveis de tema e responsividade.
- `script.js`: Interatividade, animações leves e ações do usuário.
- `/docs`: Consulte este diretório para especificações de escopo, textos e regras de negócio.
- `/images`: Utilize exclusivamente os ativos visuais armazenados nesta pasta.

## Identidade Visual e Tipografia
- **Cores (CSS Variables):**
  - `--bg-primary`: `#FFA040` (Fundo principal)
  - `--bg-secondary`: `#4066FF` (Cards e seções de destaque)
  - `--text-primary`: `#F8FAFC` (Títulos e textos principais em fundos brancos, em CTAS e Banner e seções e demais botoes usar o branco)
  - `--text-muted`: `#0049AB` (Textos de apoio)
  - `--accent`: `#3B82F6` (Botões CTA e links)
- **Fontes:**
  - Títulos: `'Plus Jakarta Sans', sans-serif` (Pesos: 600, 700)
  - Corpo: `'Inter', sans-serif` (Pesos: 400, 500)

## Espaçamento e Responsividade
- **Mobile (`< 768px`):**
  - Padding interno de seção: `3rem 1.25rem`
  - Margem entre blocos/cards: `1.25rem`
- **Desktop (`>= 768px`):**
  - Padding interno de seção: `6rem 2rem`
  - Margem entre blocos/cards: `2rem`
  - Largura máxima do container: `1200px` (`margin: 0 auto`)

## Regras de Código e UI
1. **Separação estrita:** Proibido CSS ou JS inline no HTML. Mantenha os três arquivos desacoplados.
2. **Minimalismo visual:** Evite o excesso de ícones; priorize tipografia, hierarquia visual e imagens de `/images`.
3. **Código limpo:** Não insira comentários óbvios ou desnecessários no HTML, CSS ou JS. Código deve ser autoexplicativo.
4. **Foco em conversão:** Garanta que a proposta de valor e os botões de ação (CTA) estejam visíveis na primeira dobra.