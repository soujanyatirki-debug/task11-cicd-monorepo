FROM node:20-alpine
WORKDIR /app
COPY . .
CMD ["node", "-e", "import('./packages/api/src/index.js').then(m=>console.log(m.makeUrl('Hello CI')))"]
