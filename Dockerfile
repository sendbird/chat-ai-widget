# builder
FROM node:18.17.1-alpine AS builder

WORKDIR /app
COPY ./packages/url-webdemo ./

RUN npm install
RUN npm run build

# production
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
