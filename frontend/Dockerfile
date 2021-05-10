# => Build container
FROM node:alpine as builder
WORKDIR /client
COPY package.json .
RUN yarn
COPY ./public ./public
COPY ./src ./src
RUN yarn build

# => Run container
FROM nginx:1.15.2-alpine
# Static build
COPY --from=builder /client/build /usr/share/nginx/html/
# Default port exposure
EXPOSE 80
