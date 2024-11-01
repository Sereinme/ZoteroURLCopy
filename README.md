# Zotero URL Copy

## 项目名称
Zotero URL Copy

## 作者
Sereinme

## 创建日期
2024-11-01

## 版本
1.0

## 描述
此脚本用于从Zotero项目中选择的条目复制URL到剪贴板。

## 使用方法
1. 打开Zotero。
2. 进入工具->开发者->Run Javascript，选择作为异步函数执行。
3. 选择你想要复制URL的条目。
4. 运行此脚本。
5. 选中的条目的URL将被复制到剪贴板。

## 代码说明
- **主要逻辑**:
  - 获取当前活动的Zotero面板中选中的条目。
  - 遍历每个选中的条目，构建URL字符串。
  - 将构建好的URL字符串复制到剪贴板。

- **函数**:
  - `copyToClipboard(clipboardText)`: 将文本复制到剪贴板。如果文本为空，则显示错误提示。

## 依赖
- **Zotero API**: 脚本使用了Zotero的API来获取选中的条目和操作剪贴板。
- **Mozilla Components**: 使用了Mozilla的组件来处理剪贴板操作和错误提示。

## 注意事项
- 确保在Zotero环境中运行此脚本。
- 如果没有选中任何条目，脚本会显示错误提示。

## 示例
假设选中了两个条目，其键分别为`ABC123`和`DEF456`，则复制到剪贴板的URL为：

```js
zotero://select/items/ABC123
zotero://select/items/DEF456
```

## 贡献
欢迎提交问题和Pull Request来改进此脚本。

## 许可证
此项目采用MIT许可证，详情参见LICENSE文件。
