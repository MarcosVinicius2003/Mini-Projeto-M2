Todo API - Gerenciamento de Tarefas
Node.js Express Sequelize SQLite

Uma API REST simples e robusta desenvolvida em Node.js para gerenciar uma lista de tarefas. Este projeto permite criar, listar, atualizar (completa ou parcial) e deletar tarefas, seguindo as melhores práticas de desenvolvimento de APIs modernas. É uma base sólida para aplicações reais, proporcionando experiência em design de APIs, manipulação de dados persistentes e fluxo de requisições HTTP.

Funcionalidades
Criar Tarefa: Adicione novas tarefas com título, descrição e status.
Listar Tarefas: Visualize todas as tarefas cadastradas.
Buscar Tarefa por ID: Encontre uma tarefa específica.
Atualizar Tarefa: Modifique completamente os dados de uma tarefa.
Atualizar Status: Altere apenas o status de uma tarefa (atualização parcial).
Deletar Tarefa: Remova uma tarefa do banco de dados.
Validação de Dados: Entradas são validadas (ex: título obrigatório, status limitado a valores permitidos).
Persistência de Dados: Utiliza banco de dados relacional (SQLite) com Sequelize ORM.
Tecnologias Utilizadas
Node.js: Ambiente de execução JavaScript no servidor.
Express.js: Framework para criação de APIs REST.
Sequelize: ORM para interação com o banco de dados.
SQLite: Banco de dados relacional leve e embutido.
Dotenv: Gerenciamento de variáveis de ambiente.
Pré-requisitos
Node.js (versão 18.x ou superior) instalado.
NPM (gerenciador de pacotes do Node.js).
Instalação
Clone o repositório:

bash

Copy code
git clone https://github.com/seu-usuario/todo-api.git
cd todo-api
Instale as dependências:

bash

Copy code
npm install
Configure as variáveis de ambiente:

Crie um arquivo .env na raiz do projeto com o seguinte conteúdo:

Copy code
PORT=3000
DB_NAME=todo.db
DB_DIALECT=sqlite
Execute o servidor:

bash

Copy code
npm start
O servidor será iniciado na porta 3000 (ou a definida no .env).
O banco de dados SQLite será criado automaticamente em todo.db.
Uso
Após iniciar o servidor, a API estará disponível em http://localhost:3000. Use ferramentas como Postman, Insomnia ou cURL para testar os endpoints.

Endpoints da API
1. Criar uma Tarefa
Método: POST
URL: /tarefas
Corpo da Requisição (JSON):
json
5 lines
Copy code
Download code
Click to expand
{
"titulo": "Minha Tarefa",
...
Resposta de Sucesso (201):
json
8 lines
Copy code
Download code
Click to expand
{
"id": 1,
...
Validações: Título obrigatório e não vazio. Status deve ser "a fazer", "em andamento" ou "concluída".
2. Listar Todas as Tarefas
Método: GET
URL: /tarefas
Resposta de Sucesso (200): Array de tarefas.
3. Buscar Tarefa por ID
Método: GET
URL: /tarefas/:id
Resposta de Sucesso (200): Objeto da tarefa.
Erro (404): Se a tarefa não existir.
4. Atualizar uma Tarefa (Completa)
Método: PUT
URL: /tarefas/:id
Corpo da Requisição (JSON): Campos a atualizar (título, descrição, status).
Resposta de Sucesso (200): Tarefa atualizada.
Erro (404): Se a tarefa não existir.
5. Atualizar Status de uma Tarefa (Parcial)
Método: PATCH
URL: /tarefas/:id/status
Corpo da Requisição (JSON):
json
3 lines
Copy code
Download code
Click to close
{
"status": "concluída"
...
Resposta de Sucesso (200): Tarefa com status atualizado.
Erro (404): Se a tarefa não existir.
6. Deletar uma Tarefa
Método: DELETE
URL: /tarefas/:id
Resposta de Sucesso (200): Mensagem de confirmação.
Erro (404): Se a tarefa não existir.
Códigos de Status HTTP
200: Sucesso (GET, PUT, PATCH, DELETE).
201: Criado (POST).
400: Requisição inválida (validações falharam).
404: Recurso não encontrado.
500: Erro interno do servidor.
Estrutura do Projeto

Copy code
todo-api/
├── src/
│   ├── config/
│   │   └── database.js          # Configuração do Sequelize e conexão com o banco
│   ├── controllers/
│   │   └── tarefasController.js # Lógica de negócio para os endpoints
│   ├── models/
│   │   └── Tarefa.js            # Modelo da entidade Tarefa
│   ├── routes/
│   │   └── tarefasRoutes.js     # Definição das rotas da API
│   └── app.js                   # Configuração principal do Express
├── .env                         # Variáveis de ambiente
├── server.js                    # Ponto de entrada da aplicação
├── package.json                 # Dependências e scripts
└── README.md                    # Este arquivo
Testes
Para testar a API:

Use Postman ou Insomnia para enviar requisições aos endpoints listados.
Exemplos de testes:
Crie uma tarefa via POST e verifique se ela aparece na lista via GET.
Atualize o status via PATCH e confirme a mudança.
Tente deletar uma tarefa inexistente para ver o erro 404.
Para testes automatizados (opcional), considere adicionar Jest:

bash

Copy code
npm install --save-dev jest supertest
Aprendizados e Considerações
Este projeto foi desenvolvido para demonstrar conceitos fundamentais de desenvolvimento backend:

Arquitetura de Software: Separação de responsabilidades (rotas, controladores, modelos).
Persistência de Dados: Uso de ORM para abstrair interações com o banco.
Validação e Segurança: Entradas validadas para prevenir erros e ataques básicos.
Boas Práticas: Código organizado, uso de variáveis de ambiente e tratamento de erros.
Escalabilidade: Fácil de expandir com autenticação, paginação ou integração com front-end.
Em produção, considere melhorias como:

Autenticação (ex: JWT).
Logs com Winston.
Rate limiting.
Migração para bancos como PostgreSQL.
Contribuição
Contribuições são bem-vindas! Siga estes passos:

Fork o repositório.
Crie uma branch para sua feature (git checkout -b feature/nova-funcionalidade).
Commit suas mudanças (git commit -m 'Adiciona nova funcionalidade').
Push para a branch (git push origin feature/nova-funcionalidade).
Abra um Pull Request.
