# 🌵 Raízes do Nordeste

Projeto desenvolvido para a disciplina de **Arquitetura e Desenvolvimento Front-End** do curso de **Análise e Desenvolvimento de Sistemas (ADS)** da UNINTER.

## 👨‍🎓 Autor

**Gabriel Vicioli dos Santos**  
**RU:** 4740852

---

# 📖 Sobre o Projeto

A Rede Raízes do Nordeste é uma rede de lanchonetes especializada em comidas típicas nordestinas.

Este projeto apresenta uma solução Front-End responsiva que permite aos clientes:

- Realizar cadastro e login;
- Consultar o cardápio digital;
- Pesquisar produtos;
- Adicionar produtos ao carrinho;
- Remover itens do carrinho;
- Simular pagamentos;
- Acompanhar o status do pedido;
- Participar de um programa de fidelidade;
- Visualizar promoções;
- Consultar histórico de pedidos.

O objetivo é proporcionar uma experiência digital moderna, simples e intuitiva para os clientes da rede.

---

# 🚀 Funcionalidades

## Cadastro de Usuários

Permite registrar novos usuários utilizando:

- Nome
- E-mail
- Senha

---

## Login

Autenticação de usuários cadastrados.

---

## Escolha de Unidade

O sistema permite selecionar diferentes unidades:

- Osasco
- Barueri
- São Paulo

Cada unidade apresenta produtos específicos.

---

## Cardápio Digital

Exibição dinâmica dos produtos disponíveis para venda.

Exemplos:

- Baião de Dois
- Acarajé
- Tapioca
- Carne de Sol
- Moqueca

---

## Pesquisa de Produtos

Filtro em tempo real para localizar itens do cardápio.

---

## Carrinho de Compras

Permite:

- Adicionar produtos;
- Remover produtos;
- Visualizar valor total do pedido.

---

## Simulação de Pagamento

O sistema simula integração com um gateway de pagamento externo.

Possíveis resultados:

- Pagamento aprovado;
- Pagamento recusado.

---

## Acompanhamento do Pedido

Fluxo de status:

```text
Pedido Recebido
↓
Em Preparo
↓
Pronto para Retirada
```

---

## Programa de Fidelidade

O cliente acumula pontos de acordo com o valor gasto.

Regra:

```text
A cada R$ 10,00 = 1 ponto
```

---

## Histórico de Pedidos

Registro dos pedidos realizados durante a utilização do sistema.

---

## Promoções

Área destinada à divulgação de campanhas promocionais.

---

## LGPD

O sistema apresenta aviso de consentimento relacionado à Lei Geral de Proteção de Dados (LGPD).

---

# 🛠 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- Git
- GitHub
- GitHub Pages

---

# 📂 Estrutura do Projeto

```text
raizes-do-nordeste/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

# 🎨 Arquitetura da Aplicação

```text
Usuário
   │
   ▼
Interface Web
(HTML, CSS e JavaScript)
   │
   ▼
Dados Mockados
(Cardápio Simulado)
   │
   ▼
Pagamento Externo
(Simulação)
```

---

# 📋 Requisitos Funcionais Implementados

- Cadastro de usuário
- Login
- Seleção de unidade
- Visualização de cardápio
- Pesquisa de produtos
- Adição ao carrinho
- Remoção do carrinho
- Finalização de pedido
- Simulação de pagamento
- Programa de fidelidade
- Histórico de pedidos
- Promoções
- LGPD

---

# 📱 Responsividade

A aplicação foi desenvolvida utilizando conceitos de design responsivo, permitindo utilização em:

- Computadores
- Tablets
- Smartphones

---

# 🧪 Testes Realizados

- Cadastro válido
- Cadastro inválido
- Login válido
- Login inválido
- Pesquisa de produtos
- Adição ao carrinho
- Remoção de itens
- Finalização de pedido
- Simulação de pagamento
- Responsividade

---

# 🔒 Segurança e Privacidade

O projeto considera os princípios da Lei Geral de Proteção de Dados (LGPD), exibindo aviso de consentimento para utilização das informações necessárias ao funcionamento da aplicação.

---

# 📄 Licença

Projeto acadêmico desenvolvido exclusivamente para fins educacionais na disciplina de Arquitetura e Desenvolvimento Front-End da UNINTER.
