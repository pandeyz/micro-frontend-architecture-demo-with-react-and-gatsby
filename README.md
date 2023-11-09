# micro-frontend-architecture-demo-with-react-and-gatsby
This is a demo of micro frontend architecture which is integrated with react and gatsby.

Steps to setup the project:

1. Clone the repo.
2. Run `npm install` on individual project.
3. Here `react-mf-host` is the project which exposes the `HelloWorld` component.
4. `react-mf-client` is the project in ReactJS, it is consuming the `HelloWorld` component hosted by `react-mf-host`.
5. `gatsby-mf-client` is the project in Gatsby, it is consuming the `HelloWorld` component hosted by `react-mf-host`.
6. Run command `npm run` for `react-mf-host` so that the client will be available to consume. It will run on `http://localhost:8081/` and it will also expose `remoteEntry.js` file.
7. For both of the client run command `npm run` individually and both will run.
