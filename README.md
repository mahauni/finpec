# Como rodar o projeto

Para rodar o projeto digite esse comando no terminal:

npm install && npm start

A API estará rodando na porta 1234

As rotas disponíveis na API:
---

### POST | /operations | Registrar as operações
Description: Registro de um array the operações podendo ele receber uma ou multiplas operações

Rules:
Ao tentar vender mais do que tem disponível, o sistema retorna um erro de operação inválida

Request Body:
Array of operations

Operation Object: {
"operation": "buy" | "sell",
"unit-cost": number,
"quantity": number
}

example:
```json
[
{"operation":"buy", "unit-cost":10.00, "quantity":10000},
{"operation":"sell", "unit-cost":20.00, "quantity":5000},
]
```

Response:
{ "message": "Operações registradas com sucesso." }

---

### GET | /capital-gain | Retorna o capital atual
Description: Retorna o capital ganho ou perda total com base em todas as operações ate o momento

Response:
{ "capitalGain": 50000.00 }


