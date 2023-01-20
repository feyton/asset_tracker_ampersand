FROM node:16-alpine3.12
WORKDIR /src/app
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install
COPY . .
EXPOSE 4000:4000
CMD ["node", "index.js"]