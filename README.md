# Amiable是什么

<div align=center>
  
<img src="https://heerheer.github.io/Amiable-Doc/Amiable_Icon.png" height="200" width="200"> </img>

一个Onebot标准的多框架兼容C# Bot开发SDK

![](https://img.shields.io/github/issues/heerheer/Amiable)
![](https://img.shields.io/github/stars/heerheer/Amiable)
![](https://img.shields.io/badge/OneBot-v11-black?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAABwCAMAAADxPgR5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAxQTFRF////29vbr6+vAAAAk1hCcwAAAAR0Uk5T////AEAqqfQAAAKcSURBVHja7NrbctswDATQXfD//zlpO7FlmwAWIOnOtNaTM5JwDMa8E+PNFz7g3waJ24fviyDPgfhz8fHP39cBcBL9KoJbQUxjA2iYqHL3FAnvzhL4GtVNUcoSZe6eSHizBcK5LL7dBr2AUZlev1ARRHCljzRALIEog6H3U6bCIyqIZdAT0eBuJYaGiJaHSjmkYIZd+qSGWAQnIaz2OArVnX6vrItQvbhZJtVGB5qX9wKqCMkb9W7aexfCO/rwQRBzsDIsYx4AOz0nhAtWu7bqkEQBO0Pr+Ftjt5fFCUEbm0Sbgdu8WSgJ5NgH2iu46R/o1UcBXJsFusWF/QUaz3RwJMEgngfaGGdSxJkE/Yg4lOBryBiMwvAhZrVMUUvwqU7F05b5WLaUIN4M4hRocQQRnEedgsn7TZB3UCpRrIJwQfqvGwsg18EnI2uSVNC8t+0QmMXogvbPg/xk+Mnw/6kW/rraUlvqgmFreAA09xW5t0AFlHrQZ3CsgvZm0FbHNKyBmheBKIF2cCA8A600aHPmFtRB1XvMsJAiza7LpPog0UJwccKdzw8rdf8MyN2ePYF896LC5hTzdZqxb6VNXInaupARLDNBWgI8spq4T0Qb5H4vWfPmHo8OyB1ito+AysNNz0oglj1U955sjUN9d41LnrX2D/u7eRwxyOaOpfyevCWbTgDEoilsOnu7zsKhjRCsnD/QzhdkYLBLXjiK4f3UWmcx2M7PO21CKVTH84638NTplt6JIQH0ZwCNuiWAfvuLhdrcOYPVO9eW3A67l7hZtgaY9GZo9AFc6cryjoeFBIWeU+npnk/nLE0OxCHL1eQsc1IciehjpJv5mqCsjeopaH6r15/MrxNnVhu7tmcslay2gO2Z1QfcfX0JMACG41/u0RrI9QAAAABJRU5ErkJggg==)
  
![MQ适配器](https://img.shields.io/static/v1?label=MQ-Adapter&message=LTS-1.0&color=0080FF&style=for-the-badge)
![Kum适配器](https://img.shields.io/badge/Kum--Adapter-1.0-green)
![XQ适配器](https://img.shields.io/badge/XQ--Adapter-1.0-yellow)
![Lyp适配器](https://img.shields.io/badge/小羽+--Adapter-1.0-yellow)
![小栗子适配器](https://img.shields.io/badge/Xlz--Adapter-1.0-gray)
 </div>

## 简介
Amiable是一个c# 全平台兼容 开发SDK

开源 社区支持 Onebot标准

开源地址 https://github.com/heerheer/Amiable
## 目标群体
消息类插件开发者，为爱发电开发者

## API与事件
API与事件提供极少，基本只会包含 **消息收发** 和 **群/好友申请**

## 已支持框架
- 先驱 (未完善)
- Kum (未完善)
- MQ (未完善)
- Lyp (未完善)
- 小栗子 (未完善)

# 官方文档
超级重要!
## https://heerheer.github.io/Amiable-Doc/


# Amiable标准
## Onebot 大法好
Amiable近乎~~都~~采用**Onebot**标准

## Amiable特定类型
### AmiableEventType
Amiable将事件重新转换成为AmiableEventType

你可以在 [官方文档](#官方文档) 查看相应枚举。

# Amiable社区
Amiable是一个完全开源的SDK

开源地址 https://github.com/heerheer/Amiable
## Github
我记得Github是有个什么讨论区的(???)

没错就是这个地方 https://github.com/heerheer/Amiable/discussions

## Botfan.cn
botfan.cn 是蛙蛙(孤独的蛙) 创建的给Bot爱好者的社区，虽然什么人都没有，但是希望能建立一个综合的社区。(或者综合类型的插件发布站)

## QQ/Telegram/Discourse交流群
建立中

## 你知道吗
你知道吗：这个文档赫尔甚至直接在本地写md了。(因为懒)

# 快速上手
您只需要这样..那样..然后点击生成解决方案..就有一个插件了~

(bushi

因为多平台兼容的特殊性，每一个你需要的平台都需要安装对应的**Adapter**

~~适配器模式(~~

具体方法您需要在[官方文档](#官方文档)查看


# 样例
## DrawStick2
[抽签2 Kum与先驱通用版]()

有一说一我还没写完Enable事件，下次再发吧

## 赛马amiable版


您可以在MQ社区看到赛马Ami的发布帖子[MQ版本](https://bbs.myqqx.cn/forum.php?mod=viewthread&tid=214)