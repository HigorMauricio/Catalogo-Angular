# Catálogo de Álbuns - Web

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## Sobre o Projeto
Uma aplicação web Front-end (Single Page Application) desenvolvida para gerenciar e exibir uma curadoria de álbuns musicais. O projeto teve como foco o treinamento e aprendizado de Angular, TypeScript e Tailwind, com ele eu aprendi:

-  Componentização;
- Comunicação entre componentes (@Input);
- HTML Dinâmico (@if, @for);
- Models, tipagem e modelagem de dados do TypeScript;
- Services;
- Consumo de dados assíncrono, com json;
- Estlização Mobile-Fisrt;
- Tags do Tailwind.

> **OBS:** A estilização foi feita com o auxílio do Gemini.

> **Aviso Legal:** Este é um projeto estritamente educacional e sem fins lucrativos, criado como portfólio de desenvolvimento web. Todos os direitos de imagem (capas) e trechos de áudio (prévias de 30 segundos) pertencem aos seus respectivos artistas e gravadoras, enquadrando-se no uso aceitável para fins de demonstração técnica.

## Funcionalidades Principais
* **Reprodutor de Áudio Global:** Um serviço inteligente que garante que apenas a prévia de um álbum seja reproduzida por vez, alterando dinamicamente a interface do usuário.
* **Consumo de Dados Assíncrono:** A galeria de álbuns é populada dinamicamente através do `HttpClient`, consumindo uma "API" (`db.json`) baseada em Observables.
* **Interações e Animações CSS:** Cartões interativos com efeito 3D (*Flip Card*) para exibir a *tracklist* e controles de áudio na parte traseira, tudo feito apenas com Tailwind CSS.
* **Design 100% Responsivo:** Menu de navegação adaptativo (Hamburger Menu para mobile) estruturado com abordagens *Mobile-First*.

## Tecnologias e Arquitetura

Este projeto foi construído utilizando os padrões mais recentes da indústria:
* **Angular 17+:** Uso intensivo da nova sintaxe de controle de fluxo (`@if`, `@for`).
* **Angular Signals:** Substituição de variáveis comuns e ciclos do `NgZone` por Signals (`signal`, `.set()`, `.computed()`).
* **RxJS:** Uso de Observables para lidar com as requisições HTTP e transferência de dados assíncronos.
* **Tailwind CSS:** Estilização utilitária, garantindo um código HTML limpo, controle preciso de SVGs em linha e um tema escuro consistente.

## Acessar o Projeto:
Acesse o Site:
````
https://higormauricio.github.io/Catalogo-Angular/
````
