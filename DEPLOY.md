# 部署到 GitHub Pages（给别人预览）

预览地址（部署成功后）：

**https://itlingmao-itcat.github.io/helix-tech-website/**

## 你本机只需做一次（Mac 终端）

1. 确认已登录 GitHub CLI（或已配置 git 凭据）：

```bash
gh auth login
```

2. 用下面整段命令：创建仓库 → 推送 → 打开 Pages 设置提示：

```bash
# 用最新同步的 zip（路径按你本机实际）
ZIP="$HOME/Library/Application Support/Cursor/AgentStores/cursor_agent_stores/u417863558/files/helix-tech-website-source.zip"
WORKDIR="$HOME/Desktop/helix-tech-website-deploy"
rm -rf "$WORKDIR"
mkdir -p "$WORKDIR"
unzip -o "$ZIP" -d "$WORKDIR"
cd "$WORKDIR/helix-tech-website"

# 若桌面已有改过的目录，也可直接 cd 到那个目录

# 创建公开仓库并推送 main
gh repo create helix-tech-website --public --source=. --remote=origin --push

# 若仓库已存在：
# git branch -M main
# git remote add origin https://github.com/itlingmao-itcat/helix-tech-website.git
# git push -u origin main
```

3. 打开仓库设置启用 Pages：

- 打开：https://github.com/itlingmao-itcat/helix-tech-website/settings/pages  
- **Build and deployment → Source** 选 **GitHub Actions**  
- 等 Actions 跑完（约 1–3 分钟）

4. 把链接发给别人：

https://itlingmao-itcat.github.io/helix-tech-website/

## 说明

- 站点已配置为 **静态导出**（`output: "export"`），适合 GitHub Pages。  
- Cloud Agent **没有**你的 GitHub 推送权限，所以创建仓库 / 推送必须在你本机完成。  
- 更省事的替代：把同一仓库导入 [Vercel](https://vercel.com) 一键部署（也适合 Next.js）。
