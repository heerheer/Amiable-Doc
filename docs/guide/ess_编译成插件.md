# 编译成插件

## 

## 编译后位置

位置位于你的解决方案下 **/publish** 

## 快速生成多个框架的dll

您可以使用我们推荐的bat命令行来生成

您需要更改<appid>为你的appid:**针对Lyp框架**

```bat
@ECHO OFF
set name= %1
copy %name% %~n1.MQ.dll
copy %name% %~n1.XQ.dll
copy %name% %~n1.kum.dll
copy %name% %~n1.xlz.dll
copy %name% <appid>
pause
```

创建bat后将原来生成的dll拖入即可自动生成多个结尾的dll
