# Stage 1: Install GrapesJS from npm (official package)
FROM node:20-alpine AS builder
WORKDIR /build
COPY package.json ./
RUN npm install --production

# Stage 2: Serve via nginx
FROM nginx:alpine
# Copy GrapesJS dist from npm (official source)
COPY --from=builder /build/node_modules/grapesjs/dist /usr/share/nginx/html/grapesjs
COPY --from=builder /build/node_modules/grapesjs-preset-webpage/dist /usr/share/nginx/html/grapesjs-preset-webpage
COPY --from=builder /build/node_modules/grapesjs-blocks-basic/dist /usr/share/nginx/html/grapesjs-blocks-basic
# Copy the editor page and nginx config
COPY public /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
