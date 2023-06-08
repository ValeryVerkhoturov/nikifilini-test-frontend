FROM node:18

WORKDIR /app

COPY . .

RUN npm install

RUN npm i -g @nestjs/cli



ENV PORT=8080

EXPOSE 8080

CMD [ "npm", "run", "serve"]