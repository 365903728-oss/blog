# GitHub Pages 部署指南

本项目已配置为自动部署到 GitHub Pages。

## 前置条件

1. **创建 GitHub 仓库**
   - 在 GitHub 上创建一个名为 `cpp-problems` 的新仓库
   - 或者在现有仓库中设置

2. **本地 Git 初始化**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

3. **连接远程仓库**
   ```bash
   git remote add origin https://github.com/你的用户名/cpp-problems.git
   git branch -M main
   ```

## 配置项说明

### next.config.ts
```typescript
output: "export"              // 静态导出
basePath: "/cpp-problems"     // GitHub Pages 路径前缀
images.unoptimized: true       // 禁用图片优化
```

### GitHub Actions
- **触发条件**: 推送到 `main` 分支时自动部署
- **部署目标**: `gh-pages` 分支
- **构建输出**: `./out` 目录

## 部署步骤

### 方式一：推送代码自动部署

1. **推送代码到 GitHub**
   ```bash
   git push -u origin main
   ```

2. **等待 GitHub Actions 完成**
   - 访问仓库的 "Actions" 标签页查看部署进度
   - 构建和部署通常需要 2-5 分钟

3. **启用 GitHub Pages**
   - 进入仓库 **Settings** > **Pages**
   - **Source** 选择: **GitHub Actions**
   - 点击保存

4. **访问网站**
   ```
   https://你的用户名.github.io/cpp-problems/
   ```

### 方式二：手动本地构建

如果需要在本地测试构建：

```bash
npm run build
```

构建结果将输出到 `./out` 目录。

## 配置验证

### 检查清单

- [ ] 仓库名为 `cpp-problems`（或修改了 `basePath`）
- [ ] GitHub Pages 已启用
- [ ] GitHub Actions 权限已设置
- [ ] Source 选择为 "GitHub Actions"

## 常见问题

### 1. 样式丢失
**原因**: 静态导出后需要手动复制样式文件

**解决**: 确保 `app/globals.css` 中的样式被正确导入

### 2. 图片 404
**原因**: GitHub Pages 不支持 Next.js 图片优化

**解决**: 已设置 `images.unoptimized: true`

### 3. 路由 404
**原因**: `basePath` 设置不正确

**解决**:
- 检查仓库名是否与 `basePath` 一致
- 确保使用 `Link` 组件而非 `<a>` 标签

### 4. GitHub Actions 失败
**原因**: 仓库权限不足

**解决**:
- Settings > Actions > General > Workflow permissions
- 启用 "Read and write permissions"

## 自定义域名（可选）

如果需要使用自定义域名：

1. 在仓库根目录创建 `CNAME` 文件
2. 文件内容为你的域名，例如：`example.com`
3. 推送后 GitHub Pages 会自动配置

## 相关资源

- [GitHub Pages 文档](https://docs.github.com/pages)
- [Next.js 静态导出](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Actions 文档](https://docs.github.com/actions)
