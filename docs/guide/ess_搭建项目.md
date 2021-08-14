# 搭建项目

我们有两种推荐的项目搭建方式

## 使用AmiableGUI

> 正在开发中
>
> 赫尔绝不咕咕咕

## 使用Git Clone

### 1.下载 Core包
```bash
> git clone -b core https://github.com/heerheer/Amiable.git <你的项目文件夹>
```
例如创建 `<HorseRaceAmi>` 时
```bash
git clone -b core https://github.com/heerheer/Amiable.git HorseRaceAmi
``` 
### 2.包还原
打开sln

稍等后点击**生成解决方案**

等待Nuget包还原

### 3.修改项目配置

- 修改 *Amiable.Core项目* 的 **程序集名称** 为你的 **插件名**
- 修改 *Amiable.Core项目* 的 **程序集信息** 为你的 **插件名**
- 修改 *Amiable.Core项目* 的名字 为 你的 **<插件名>.Core**

注:修改项目名时可以取名为任何方便记忆的名字，不一定要用插件中文名
注2:修改程序集名称的目的只是方便编译出*.dll (不带<Platform\>后缀) 插件。

### 4.添加类库项目
> 这种开发方式是从Jie2GG那里深入人心的~

在解决方案中添加一个 **.Net Framework 4.8** 类库项目

并且安装 Amiable.SDK 的 Nuget包

```powershell
PM> Install-Package Amiable.SDK -Version 1.0.3
PM> Install-Package Amiable.Adapters -Version 1.0.3
```

对Core项目中添加Code项目(刚刚创建的)的引用

***
你需要注意:
- 修改SDK项目与Core项目的 **程序集信息**
- 修改SDK项目与Core项目的 **AssemblyInfo.cs**