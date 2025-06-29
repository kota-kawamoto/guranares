FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

# 開発用の依存パッケージをインストール
RUN npm install
RUN npm install -D autoprefixer postcss tailwindcss @types/node @types/react @types/react-dom

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"] 