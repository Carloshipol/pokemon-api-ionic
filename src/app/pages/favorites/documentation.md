# Documentação - Pokedex App

## Arquitetura

O projeto segue uma arquitetura modular baseada nos princípios do Angular, com separação de responsabilidades por:

- **Pages:** Componentes de interface (Home, Details, Favorites)
- **Services:** Serviços responsáveis por comunicação com API (PokemonService) e manipulação de favoritos (FavoriteService)
- **Routing:** Definido no arquivo `app-routing.module.ts` para navegação entre telas

## API Utilizada

- **PokeAPI:** https://pokeapi.co/api/v2/

Endpoints principais:
- Listagem de Pokémons: `/pokemon?limit=20&offset=0`
- Detalhes do Pokémon: `/pokemon/{name}`

## Tecnologias Utilizadas

- Ionic + Angular
- TypeScript
- SCSS
- PokeAPI (REST)
- LocalStorage para persistência local (favoritos)

## Funcionalidades

- Lista de Pokémons com paginação
- Tela de detalhes com:
  - Nome
  - Imagens (frente, costas)
  - Tipos
  - Habilidades
  - Altura
  - Peso
- Marcar/desmarcar como favorito
- Página de favoritos
- Responsivo (modo paisagem e retrato)
- Navegação entre telas

## Gerenciamento de Dados

- **Pokémons:** Dados obtidos da PokeAPI via HttpClient.
- **Favoritos:** Persistência via LocalStorage.

## Estrutura de Pastas
src/
├── app/
│ ├── pages/
│ │ ├── home/
│ │ ├── details/
│ │ └── favorites/
│ ├── services/
│ ├── app-routing.module.ts
│ └── app.module.ts


## Boas Práticas

- Injeção de dependência (services)
- Componentização
- Código modular e reutilizável
- Commits semânticos e frequentes
- Responsividade garantida pelo Ionic Framework

## Melhorias Futuras

- Testes unitários com Jasmine e Karma
- Integração com Firebase para favoritos na nuvem
- Implementação de tema claro/escuro
- Deploy como PWA (Progressive Web App)

