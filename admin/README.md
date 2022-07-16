
![Screenshot]()

## Demo

## Tech stack
Desired features & modules:

- [x] Node v8.x with async/await
- [x] Moleculer microservices backend
- [x] NodeJS frontend (VueX, Vue-router)
- [x] MongoDB
- [x] Central configuration
- [x] Global REST API
- [x] Swagger API docs
- [x] GraphQL endpoint
- [x] Full authentication
    - [x] Login
    - [x] Sign Up
    - [x] Passwordless account
    - [x] Forgot password
    - [x] Reset password    
    - [x] Account verification
    - [x] Social login
        - [x] Google
        - [x] Facebook
        - [x] Github
    - [x] Two-factor authentication
    - [ ] LDAP
- [x] ACL/RBAC (user roles & permissions)
- [x] I18N
- [x] Websocket
- [ ] Plugin system
- [ ] Caching with tags
- [x] Metrics & monitoring
- [x] Unit test & E2E test with Jest, Cypress
- [x] Docker files
- [ ] Kubernetes & Helm chart files

## Monitoring
In production, this project contains monitoring feature with [Prometheus](https://prometheus.io/) & [Grafana](https://grafana.com/).

[Read more about it](monitoring/README.md)

## NPM Scripts

- `dev`: Start development mode (load all services locally)
- `start`: Start production mode (don't load any services, use `SERVICES` env variable)
- `now-start`: Start production preview on now.sh
- `cli`: Start a CLI and connect to production
- `build`: Build frontend code
- `lint`: Run ESLint
- `deps`: Check & update NPM dependencies
- `ci`: Run continuous backend test mode
- `ci:e2e`: Run continuous E2E test mode 
- `test`: Run all tests (backend, frontend, E2E)
- `test:backend`: Run backend tests
- `test:frontend`: Run frontend tests
- `test:e2e`: Run E2E tests
- `dc:up`: Start the stack in production with Docker Compose
- `dc:down`: Stop the stack in production with Docker Compose
