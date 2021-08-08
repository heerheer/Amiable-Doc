# AppService

> AppService是一个App实例，用于存放当前App的所有信息。

## 日志
AppService提供了一种日志系统，允许你输出储存在本地的日志。

```csharp
AppService.Instance.Log("日志");
```

在插件程序集使用AppService的唯一方式就是使用AppService的单独实例。

## AppInfo
虽然我们在`AmiableEventArgs`中提供了AppInfo，但是依然建议使用`AppService.Instance`中的AppInfo (但两者真的没区别XD)

## DefaultApiWrapper
这是App中被适配器赋予的默认Api包装器

Amiable会在每一次Event中复制包装器并为复制的包装器设置新的数据。

不建议用户尝试使用 ~~(单Q用户可以试试...)~~