一个自定义的二维码弹窗
1. 弹窗内容可自定义
2. 使用 wxqrcode 生成 base64 编码的二维码图片
3. 使用 wx:if 和 wx:else 或 hidden 解决遮罩层（蒙层）下可点击的问题。

问题1：
  经测试，wxqrcode.js 库能生成二维码的 text 长度最大为 62 个字符，估计是 bug，换用 qrcode.js 库即可。

  
展示：

![](https://github.com/MoTec95/QRPop/blob/master/scr-cap/qrpop.gif)