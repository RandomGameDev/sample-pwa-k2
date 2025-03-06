FROM 387299341402.dkr.ecr.ap-southeast-1.amazonaws.com/node:22-alpine3.18 as build

ARG ENV_FILE
ENV ENV_FILE=${ENV_FILE}

WORKDIR /app
COPY ./package.json .
COPY ./package-lock.json .
RUN npm install
COPY . .
COPY ${ENV_FILE} .env

RUN npm install -g dotenv-cli
RUN dotenv -e .env printenv

RUN npm run build

FROM 387299341402.dkr.ecr.ap-southeast-1.amazonaws.com/nginx:stable-alpine3.17
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]