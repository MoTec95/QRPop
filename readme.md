一个自定义的二维码弹窗
1. 弹窗内容可自定义
2. 使用 wxqrcode.js 生成 base64 编码的二维码图片
3. 使用 wx:if 和 wx:else 或 hidden 解决遮罩层（蒙层）下可点击的问题。
   至于使用 wx:if 还是 hidden
   一般来说，wx:if 有更高的切换消耗而 hidden 有更高的初始渲染消耗。
   因此，如果需要频繁切换的情景下，用 hidden 更好，如果在运行时条件不大可能改变则 wx:if 较好。
   可以参考[官方文档](https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/conditional.html)的说明。

问题1：
  经测试，wxqrcode.js 库能生成二维码的 text 长度最大为 62 个字符，估计是 bug，换用 qrcode.js 库即可。

  
展示：

![](https://github.com/MoTec95/QRPop/blob/master/scr-cap/qrpop.gif)