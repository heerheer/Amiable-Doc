# AmiableService类

> 这是Amiable的核心类，用于注册各种需要用到的东西，比如AppInfo与事件容器。

## App
一个`AppService`实例

## Events
被Amiable注册的事件容器

## RegEvents()
Amiable的利用反射的注册事件逻辑。

## SetAppInfo()
Amiable的设置应用信息的逻辑。

**需要在这里设置您的应用信息**

当然:我们推荐你将应用AppInfo数据写入另外的类库项目中，在`AmiableService.cs`中直接调用函数。

这样做可以方便使用一个解决方案多个插件项目
。
同时避免忘记在Core中使用其他程序集的类导致反射加载事件失败。

例如

```csharp
App.AppInfo = ReplyBot.GetAppInfo();
//App.AppInfo = HorseRaceBot.GetAppInfo();
```