FROM node:14-alpine
WORKDIR /app
COPY . .
CMD ["node", "/app/index.js"]