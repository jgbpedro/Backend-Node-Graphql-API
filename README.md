Backend - API com JWT
---

## Instalação
- `npm install`
- Modo produção /dist with `npm run build` or `yarn run build`
- Modo dev `npm run dev` or `yarn run dev`

## Migração do banco de dados no arquivo `src/config/seeder.js`
- `npm run db:seed`

## Graphql
Para testar as queries: `localhost:3000/graphiql`


### API's
Use rest api para fazer login e obter um json web token
>1. post `api/users/login` - login and get jwt token then frontend can store this token to use other api

### Use uma extensão no chrome para gerenciar o cabeçalho `Authorization`

1. Search `Modheader`
2. click `ADD TO CHROME`
3. refresh your page
4. open `Modheader`
5. set jwt token in your request headers
```
Exemplo:

Name: Authorization
Value: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiI1Y2EzMDFkZjkwMDRmZDExMjQwYmEyOWEiLCJleHAiOjE1NTQyMjgxNDI3NTgsImlhdCI6MTU1NDIyODA4Mn0.BNfI-5AOd-0QBPOiYTZPTogHxadMtm6XknF4ciw0dR0
```


### Buscar usuário por id
```graphql
{
    user(id: "your user id") {
        username
        displayName
    }
}
```

### Buscar usuário logado no sistema
```graphql
{
    me {
        username
        displayName
    }
}
```

### Fazer Logout
```graphql
mutation Mutation {
 logout{
  token
 }
}
```

### Atualizar usuário
```graphql
mutation Mutation {
 updateUser(id: ${your id}, username: ${your username}, displayName: ${your displayName}){
  username,
  displayName
 }
}
```