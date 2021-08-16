module.exports = {
  title: 'Amiable Doc',
  description: 'A C# SDK For Bot(Almost All Bot Platform) Plugin Development',
  base: "/Amiable-Doc/",
  themeConfig: {
    displayAllHeaders: true,
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: '概述',
        link: '/summary/'
      },
      {
        text: '指南',
        link: '/guide/'
      },
      {
        text: 'API与事件',
        link: '/api/'
      },
      {
        text: '更多',
        link: '/more/'
      },
      {
        text: '往昔的记忆',
        link: '/updatelogs/'
      },
    ],
    sidebar: {
      "/summary/": [
        "简介",
        "目标开发者"
      ],
      '/guide/': [{
          title: '基础',
          collapsable: false,
          children: [
            'ess_搭建项目',
            'ess_配置信息',
            'ess_监听事件',
            'ess_使用适配器',
            'ess_编译成插件'
          ]
        }, {
          title: '进阶',
          collapsable: false,
          children: [
            '目录结构',
            '基本配置',
            '多框架兼容',
            '编译',
            '设置窗口',
          ]
        },
        // {
        //   title: '骚操作',
        //   collapsable: false,
        //   children: [
        //     '多个插件放置在同一解决方案内',
        //     '使用MsgRoute',
        //     '使用AmiConfig过滤授权群聊',
        //     '改写APIWrapper增加API',
        //   ]
        // }

      ],
      '/api/': [{
          title: '标准',
          collapsable: false,
          children: [
            '/api/Amiable/事件.md',
          ]
        },
        {
          title: '类型',
          collapsable: false,
          children: [
            '/api/Amiable/AmiableService.md',
            '/api/Amiable/AppService.md'
          ]
        },
        {
          title: '多平台',
          collapsable: false,
          children: [
            '/api/支持的平台.md',
            '/api/适配器.md'
          ]
        }
      ]
    }
  }
}