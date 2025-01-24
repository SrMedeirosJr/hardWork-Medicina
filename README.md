Hardwork Medicina API
<p align="center"> <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a> </p>
API desenvolvida com NestJS para gerenciamento de usuários, com suporte a CRUD completo, documentação interativa via Swagger, e integração com banco de dados MySQL.

📝 Descrição
Este projeto é uma aplicação backend criada para realizar o gerenciamento de usuários. Ele inclui:

Operações CRUD para usuários.
Suporte a endpoints RESTful.
Integração com banco de dados MySQL usando TypeORM.
Migrations para gerenciamento do esquema do banco.
Testes automatizados para garantir a funcionalidade do sistema.
Documentação de API interativa com Swagger.
🚀 Tecnologias
As principais tecnologias utilizadas neste projeto incluem:

NestJS: Framework para construção de aplicações server-side em Node.js.
TypeScript: Linguagem usada no desenvolvimento.
TypeORM: ORM utilizado para integração com o banco de dados MySQL.
MySQL: Banco de dados relacional.
Swagger: Ferramenta para documentação interativa de APIs.
⚙️ Funcionalidades
Cadastro de usuários: Criação de novos usuários com validações.
Atualização de usuários: Atualização completa ou parcial dos dados de um usuário.
Listagem de usuários: Listagem de todos os usuários, com possibilidade de filtrar usuários ativos.
Remoção lógica de usuários: Exclusão de usuários sem apagar os dados do banco.
Documentação da API: Disponível através do Swagger.
📁 Estrutura do Projeto
bash
hardwork-medicina
├── src
│   ├── helpers                # Utilitários e mensagens de erro/sucesso
│   ├── interceptors           # Interceptores para tratamento de respostas
│   ├── middleware             # Middleware para logging
│   ├── migrations             # Migrations do banco de dados
│   ├── users                  # Módulo de usuários
│   ├── app.controller.ts      # Controlador principal
│   ├── app.module.ts          # Módulo raiz
│   ├── app.service.ts         # Serviço principal
│   ├── data-source.ts         # Configuração do TypeORM
│   ├── main.ts                # Arquivo de entrada do aplicativo
│   └── teste-data-source.ts   # Arquivo para testes de conexão com o banco
├── test                       # Testes automatizados
│   ├── e2e                    # Testes end-to-end
│   ├── integration            # Testes de integração
│   └── unit                   # Testes unitários
├── .gitignore                 # Arquivos e pastas ignorados pelo Git
├── docker-compose.yml         # Configuração para Docker
├── package.json               # Dependências e scripts do projeto
├── README.md                  # Documentação do projeto
└── tsconfig.json              # Configuração do TypeScript
🛠️ Instalação
Clone o repositório:

bash

git clone https://github.com/seu-usuario/seu-repositorio.git
cd hardwork-medicina
Instale as dependências:

bash

npm install
Configure o banco de dados: Crie um banco MySQL chamado my_nest_api e configure as credenciais no arquivo data-source.ts.

Execute as migrations:

bash

npm run typeorm migration:run
(Opcional) Execute o banco com Docker:

bash

docker-compose up -d
▶️ Uso
Ambiente de Desenvolvimento:
bash

# Execute a aplicação em modo desenvolvimento:
npm run start:dev
Documentação da API:
Acesse o Swagger em: http://localhost:8080/swagger-ui

🧪 Testes
Executar Testes Unitários:
bash

npm run test
Executar Testes End-to-End:
bash

npm run test:e2e
Gerar Cobertura de Testes:
bash

npm run test:cov
📋 Endpoints Principais
Listagem de usuários ativos
GET /users
Retorna todos os usuários ativos.

Criação de um novo usuário
POST /users
Cria um novo usuário.
Body:

{
  "nome": "John Doe",
  "email": "john.doe@example.com"
}
Atualização completa de um usuário
PUT /users/:id
Atualiza todos os dados de um usuário.

Atualização parcial de um usuário
PATCH /users/:id
Atualiza apenas os campos enviados no body.

Exclusão lógica de um usuário
DELETE /users/:id
Marca um usuário como deletado sem removê-lo do banco.

🛡️ Segurança e Deploy
Consulte a documentação oficial do NestJS para informações sobre:

Autenticação e autorização.
Deploy em ambientes de produção.
✍️ Licença
Este projeto é licenciado sob os termos da licença MIT. Para mais detalhes, consulte o arquivo LICENSE.
