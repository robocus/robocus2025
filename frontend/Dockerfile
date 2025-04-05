FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

EXPOSE 3000

# Add environment variable to ensure Next.js listens on the correct port
ENV PORT=3000

CMD ["npm", "run", "start"]