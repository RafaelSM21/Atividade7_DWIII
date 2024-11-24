# Controle de Despesas 💰

Este projeto é uma aplicação para gerenciar despesas pessoais, permitindo que os usuários registrem, editem, excluam e visualizem suas despesas, além de calcular automaticamente o total.

## 🛠️ Tecnologias Utilizadas
- **Frontend:**
  - HTML
  - CSS
  - JavaScript
- **Backend:**
  - Node.js
  - TypeScript
  - MongoDB com Mongoose
- **Ferramentas:**
  - MongoDB Compass (para visualização do banco de dados)

## ⚙️ Funcionalidades
### Backend
- CRUD (Create, Read, Update, Delete) completo para gerenciar despesas.
- Endpoint adicional para calcular o total das despesas no banco de dados.
- Validação de entradas para evitar valores inválidos, como campos vazios ou valores negativos.

### Frontend
- Formulário para cadastrar despesas, com os campos:
  - **Descrição**
  - **Valor** (formato monetário: R$)
  - **Data** (formato dd/mm/aaaa)
- Lista de despesas com:
  - Botões de ação para "Alterar" (em azul) e "Excluir" (em vermelho).
  - Exibição do total das despesas atualizado em tempo real.
- Interface amigável, limpa e intuitiva.

## 📁 Estrutura do Projeto
| Pasta                    | Definição                                                                                  |
| ------------------------ | ------------------------------------------------------------------------------------------ |
| 📁 public/                   | Frontend para rodar o projeto                                                 |
| 📁 src/                   | Arquivos com o código fonte do projeto                                                     |
| 📁 src/controllers/        | Contém a lógica de controle para o backend                                            |
| 📁 src/models/             | Modelos Mongoose para o banco de dados                                     |
| 📁 src/routes/            | Arquivos para expor rotas de controles da aplicação                                        |
| 📁 src/index.ts               | Configuração principal do servidor     |
| 📄 .env          | Arquivo com o endereçamento de porta.     |
| 📄 .gitignore          | Arquivo com a retenção de arquivos pelo serviço de git.     |
| 📄 tsconfig.json          | Arquivo usado para configurar o typescript como sintaxe, organização de arquivos, etc.     |
| 📄 package.json           | Arquivo usado gerenciar as dependencias do projeto com o Yarn e compor scripts de terminal |

## 🚀 Como Executar o Projeto
### Pré-requisitos
- Node.js instalado
- MongoDB em execução localmente

### Passos
1. Clone o repositório:
   - git clone https://github.com/RafaelSM21/Atividade7_DWIII.git
   - cd Atividade7_DWIII

2. Instale as dependências:
   npm install

3. Configure o banco de dados:
   - Certifique-se de que o MongoDB está rodando na porta padrão.
   - O banco de dados será automaticamente conectado no endereço mongodb://127.0.0.1:27017/.

4. Execute o backend:
   npm run dev

5. Abra o navegador e acesse http://localhost:3000 para testar a aplicação

## 📋 Endpoints do Backend
### 1. GET /expense
Retorna todas as despesas cadastradas.

### 2. POST /expense
Cadastra uma nova despesa.

### 3. PUT /expense/:id
Atualiza uma despesa existente.
- Body: Os mesmos campos do POST.

### 4. DELETE /expense/:id
Exclui uma despesa pelo ID.

### 5. GET /expenses/total
Retorna o somatório do valor de todas as despesas.
