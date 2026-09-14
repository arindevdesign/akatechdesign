# Converter o portfólio para a versão V5 anexada

## Objetivo
Reproduzir no app atual a aparência, os textos e as interações do arquivo `akatech_v5_preview.html`, mantendo a implementação em React/TanStack e usando as imagens locais já existentes.

## Alterações
- Atualizar cabeçalho e navegação com indicador “Disponível”, menu móvel em tela cheia e links sociais corretos.
- Ajustar o topo com o novo texto profissional, botão de download do CV e detalhes visuais da referência.
- Atualizar a seção de projetos para o título “Desenvolvidos com intenção”, etiquetas de conteúdo fictício e botões “Saber mais”.
- Expandir cada modal com galeria de seis posições, processo em quatro etapas e resultado mensurável conforme o anexo.
- Atualizar “Sobre” com UX/UI + front-end, tecnologias e competências adicionais.
- Alterar contato para “Bora prototipar?”, usar `akatechdesign@gmail.com` e oferecer download do CV.
- Corrigir links reais de GitHub, Behance e LinkedIn.
- Implementar o cursor cromático personalizado em dispositivos compatíveis, respeitando redução de movimento.
- Ajustar os metadados da página conforme o conteúdo da V5.

## Detalhes técnicos
- Converter o JavaScript do HTML para estado e efeitos React, sem inserir o HTML bruto.
- Consolidar os estilos novos no sistema visual global existente.
- Preservar as imagens locais dos quatro projetos, evitando dependência de links externos.
- O link do currículo apontará para `/cv-arin-kuramoto.pdf`; como o PDF não veio no anexo, o botão ficará pronto para quando o arquivo for adicionado.
- Validar abertura/fechamento do menu e dos modais, além das versões desktop e móvel.
