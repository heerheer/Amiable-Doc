# 使用适配器

## AppService

暂时默认增加了五个框架的适配器

```csharp
public static void ServiceBuilder(AppService service)
    {
        //添加对这些框架的API包装器
        service.AddMQConfig().AddKumConfig().AddXQConfig().AddLypConfig().AddXlzConfig();
    }
```

## 改动

- 旧版Amiable(SDK 1.0.0)需要改变service的UseConfig()才能改变API适配器

