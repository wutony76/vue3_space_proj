# Stage 1: 建置 Vue 專案
FROM node:18-alpine AS builder

WORKDIR /app

# 安裝依賴（利用快取）
COPY package.json yarn.lock* package-lock.json* ./
RUN if [ -f yarn.lock ]; then yarn install --frozen-lockfile; else npm ci; fi

# 複製原始碼並建置
COPY . .
RUN yarn build

# Stage 2: 用 Nginx 提供靜態檔案
FROM nginx:alpine

# 複製自訂 nginx 設定（支援 Vue Router history 模式）
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 從 builder 複製建置結果
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
