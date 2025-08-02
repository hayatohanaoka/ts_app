FROM oven/bun:slim AS builder
WORKDIR /app
COPY package.json ./
COPY bun.lock ./
RUN bun install
COPY src ./src
RUN bun run build

FROM oven/bun:slim
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY package.json bun.lock ./
RUN bun install --production
EXPOSE 3001
CMD ["bun", "run", "start"]
