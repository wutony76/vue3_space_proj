# vue3 space proj

Vue 3 專案，v12.22.12

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

## Project setup

```bash
yarn install
```

### Compiles and hot-reloads for development

```bash
yarn serve
```

### Compiles and minifies for production

```bash
yarn build
```

### Lints and fixes files

```bash
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

---

## Docker

### 建置並啟動（推薦）

```bash
docker compose up --build
```

啟動後瀏覽：http://localhost:8080

### 背景執行

```bash
docker compose up -d --build
```

### 停止容器

```bash
docker compose down
```

### 僅建置映像（不啟動）

```bash
docker build -t vue3-space-proj .
```

### 執行已建置的映像

```bash
docker run -p 8080:80 vue3-space-proj
```

### 查看執行中容器

```bash
docker compose ps
```

### 查看容器日誌

```bash
docker compose logs -f
```
