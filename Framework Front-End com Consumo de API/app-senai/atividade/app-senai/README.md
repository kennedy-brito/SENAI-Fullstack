# AppSenai

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
 
## Differences between my code and the professor’s code:

This code is an exercise from the Senai Fullstack course. The way the exercise was solved no longer works with Angular 17. Here is a list of changes made:

* Angular 17 now uses standalone components as the default option, so the imports used in the `app.module.ts` file were moved to the components that use them.
* When I generated the project, I selected the option to use SSR (Server Side Rendering). This option causes some codes not to work because they are options that only work on the client side. One of these codes is the use of the `localStorage` variable. To resolve this, I used a check to see if the app is running in the browser or on the server side. I also used an implementation of `localStorage` that works on the server side. This implementation can be found in the folder src/app/LocalStorage.
* The way the guard was implemented in the course (using a class Guard) was generating an error where the class wasn’t being instantiated. To resolve this, I used a function-based guard.
* Another difference in my code is that the `subscribe()` function using two or more arguments is being [deprecated](https://rxjs.dev/deprecations/subscribe-arguments), so I used the new way to pass arguments to the `subscribe()` function.
* The final difference is that I used the child attribute in the route declaration instead of a new file for the restricted routes.

## Diferenças entre o meu código e o código do professor:

Este código é um exercício do curso Senai Fullstack. A maneira como o exercício foi resolvido não funciona mais com o Angular 17. Aqui está uma lista das mudanças feitas:

* O Angular 17 agora usa componentes standalone/independentes como opção padrão, então os imports usados no arquivo `app.module.ts` foram movidos para os componentes que os utilizam.
* Quando gerei o projeto, selecionei a opção para usar SSR (Renderização do Lado do Servidor). Esta opção faz com que alguns códigos não funcionem porque são opções que só funcionam no lado do cliente. Um desses códigos é o uso da variável `localStorage`. Para resolver isso, usei uma verificação para ver se o aplicativo está rodando no navegador ou no lado do servidor. Também usei uma implementação de `localStorage` que funciona no lado do servidor. Esta implementação pode ser encontrada na pasta src/app/LocalStorage.
* A maneira como o Guard foi implementado no curso (usando uma classe Guard) estava gerando um erro onde a classe não estava sendo instanciada. Para resolver isso, usei um Guard baseado em função.
* Outra diferença no meu código é que a função `subscribe()` usando dois ou mais argumentos está sendo [depreciada](https://rxjs.dev/deprecations/subscribe-arguments), então eu usei a nova maneira de passar argumentos para a função `subscribe()`.
* A diferença final é que eu usei o atributo child na declaração de rota em vez de um novo arquivo para as rotas restritas.
