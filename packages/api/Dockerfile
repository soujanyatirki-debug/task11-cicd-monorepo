
FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./
COPY packages/api/package.json ./packages/api/package.json
COPY packages/utils/package.json ./packages/utils/package.json

RUN npm ci --omit=dev --ignore-scripts

COPY packages/api/src ./packages/api/src
COPY packages/utils/src ./packages/utils/src

CMD ["node", "-e", "import('./packages/api/src/index.js').then(m => console.log(m.makeUrl('Hello CI')))"]
