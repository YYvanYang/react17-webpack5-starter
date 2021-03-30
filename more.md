# [HMR 加载样式](https://webpack.docschina.org/guides/hot-module-replacement/#hmr-with-stylesheets)
借助于 style-loader，使用模块热替换来加载 CSS 实际上极其简单。此 loader 在幕后使用了 module.hot.accept，在 CSS 依赖模块更新之后，会将其 patch(修补) 到 <style> 标签中。

首先使用以下命令安装两个 loader ：
```
npm install --save-dev style-loader css-loader
```
然后更新配置文件，使用这两个 loader。

