# API Champions League

Este projeto é uma API para gerenciamento de jogadores e clubes da Champions League.

## 📌 Funcionalidades

- Cadastro, listagem, atualização e remoção de jogadores.
- Listagem de clubes.
- Estrutura modularizada para melhor manutenção.

## 🚀 Tecnologias Utilizadas

- **Node.js** com **Express** para a construção do servidor.
- **TypeScript** para tipagem estática e melhor manutenção do código.
- **fs/promises** para leitura de arquivos JSON.


## 🔧 Instalação e Uso

### 1️⃣ Clone o repositório
```bash
git clone https://github.com/LucasDamasioDias/API-Champions-League.git
cd API-Champions-League
```

### 2️⃣ Instale as dependências
```bash
npm install
```

###3️⃣ Inicie o servidor
```bash
npm run start:dev
```
O servidor será iniciado em `http://localhost:3333`

## 🔗 Endpoints da API

### Jogadores
- **GET** `/players` - Lista todos os jogadores
- **GET** `/players/:id` - Obtém um jogador específico por ID
- **POST** `/players` - Adiciona um novo jogador
- **PATCH** `/players/:id` - Atualiza dados de um jogador
- **DELETE** `/players/:id` - Remove um jogador

### Clubes
- **GET** `/clubs` - Lista todos os clubes

## 🛠 Contribuição
Sinta-se à vontade para contribuir! Faça um **fork** do projeto, crie um branch com sua funcionalidade e abra um **Pull Request**.

## 📜 Licença
Este projeto está licenciado sob a **MIT License**.

