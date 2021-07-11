FROM node:16

WORKDIR /app

COPY /package.json ./

COPY /yarn.lock ./

RUN yarn

COPY . .

ENV PORT=3333

EXPOSE 3333

CMD ["node", "dist/apps/nest-graphql/main.js"]
