(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{375:function(e,n,t){"use strict";t.r(n);var s=t(45),a=Object(s.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"编写事件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编写事件"}},[e._v("#")]),e._v(" 编写事件")]),e._v(" "),t("h2",{attrs:{id:"添加一个类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加一个类"}},[e._v("#")]),e._v(" 添加一个类")]),e._v(" "),t("p",[e._v("例如，我们在解决方案内添加了一个新的项目")]),e._v(" "),t("p",[e._v("Amiable.Example")]),e._v(" "),t("p",[e._v("在这个类库项目中，我们添加一个")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('public class A_GroupMsgEvent : IPluginEvent\n    {\n        public AmiableEventType EventType => AmiableEventType.Group;\n\n        public void Process(AmiableEventArgs _e)\n        {\n            var e = _e.AsMessageEventArgs();\n           \n            if (e.RawMessage == "Amiable")\n            {\n                var sb = new StringBuilder();\n                sb.AppendLine("如果你看到了这个消息，就代表当前测试成功了~");\n                sb.AppendLine("这是一个由Amiable开发SDK制作的样例插件");\n                sb.AppendLine("项目地址:https://github.com/heerheer/Amiable");\n                sb.AppendLine("当前开发状态:1%");\n                sb.AppendLine($"当前使用的API适配器:{_e.ApiWrapper.GetType().Name}");\n                e.SendMessage(sb.ToString());\n            }\n\n        }\n    }\n')])])]),t("p",[t("strong",[e._v("事件必须继承IPluginEvent")])])])}),[],!1,null,null,null);n.default=a.exports}}]);