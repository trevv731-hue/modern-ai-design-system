# 历史归档（2026-10-13 整理备份）

本目录是 `ui-design-system-backup-20261013/` 的留存部分。原备份目录已删除。

## 保留了什么

| 内容 | 说明 |
|---|---|
| `DESIGN-SPEC.md` | 旧版长篇设计规范，新版已拆成 `docs/guides/*.md`，原件留档备查 |
| `compare.html` | 旧版 A/B 对比页 |
| `manifest.json` | 129 个文件的 SHA-256 快照清单 |
| `说明-备份来源.md` | 原备份的自述 |
| `artifacts/*.png` | 旧版验证截图（design-system 深浅色、AetherLink 深浅色、移动端、手册实拍） |

## 没保留什么，以及为什么

- **三份 zip（共约 67 MB）**：`ui-design-system-v3.zip`、`before-cleanup.zip`、`cleaned-system.zip`。
  三者都是同一套系统的旧快照（129 / 129 / 127 个文件）。用 `manifest.json` 的 SHA-256 逐项比对当前库后确认：
  - 52 项字节完全一致；
  - 56 项内容不同——都是当前库**更新后**的版本（`dist/` 产物、`.cursor` 技能包），以当前库为准；
  - 21 项路径不存在——其中 19 项是 `docs/*.md` 整体迁到了 `docs/guides/`（同名文件），`build.js` 由 `scripts/build.cjs` 取代，`DESIGN-SPEC.md` / `compare.html` 已在本目录留档。

  也就是说快照里的信息已全部被当前库覆盖或收录，留着只是占空间。真正需要旧版本时应走 Git 历史。

- **`node_modules/`（15 MB）**：`npm ci` 可重建，不纳入归档。
- **`git-status-before.txt` / `git-diff-before.patch`**：均为空文件（整理前无未提交改动），无留存价值。

## 若要核对

```bash
cd ui-design-system
python - <<'PY'
import json, hashlib, os
man = json.load(open('archive/legacy-2026-10/manifest.json', encoding='utf-8'))
print('一致', sum(1 for r,h in man.items()
      if os.path.exists(r) and hashlib.sha256(open(r,'rb').read()).hexdigest()==h))
PY
```
