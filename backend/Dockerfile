# Building stage
FROM node:20-alpine AS builder

WORKDIR /usr/src/app

COPY . .

RUN npm ci
RUN npm run build

# Running stage
FROM node:20-alpine AS runner

WORKDIR /usr/src/app

ENV NODE_ENV=production

COPY package.json package-lock.json ./
COPY --from=builder /usr/src/app/dist ./dist

RUN npm ci

RUN chown node:node -R /usr/src/app

USER node

CMD ["node", "dist/main"]