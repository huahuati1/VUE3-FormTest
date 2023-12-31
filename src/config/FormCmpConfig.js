//组件配置项，用于配置左侧组件栏
export default[
	{
		title:"输入组件",
		list:[
			{
				type:"input",
				label:"单行文本",
				default:null,
			},
			{
				type:"textarea",
				label:"多行文本",
				default:null,
			},
			{
				type:"textarea",
				label:"多行文本2",
				default:null,
			}
		]
	},
	{
		title:"选择组件",
		list:[
			{
				type:"radio",
				label:"单选框",
			},
			{
				type:"checkbox",
				label:"多选框",
			}
		]
	},
	{
		title:"基础组件",
		list:[
			{
				type:"button",
				label:"按钮",
			},
		]
	}
]