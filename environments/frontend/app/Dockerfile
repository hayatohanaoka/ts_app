FROM node:23.7.0-slim AS builder
WORKDIR /app
COPY package*.json ./
RUN rm -rf package-lock.json node_modules && npm install
COPY . .
RUN npm run build

FROM node:23.7.0-slim
WORKDIR /app
COPY package*.json ./
RUN rm -rf package-lock.json node_modules
RUN npm i --omit=dev
COPY --from=builder /app/build ./build
EXPOSE 3000
CMD ["npm", "run", "start"]
