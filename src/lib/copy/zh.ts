import type { Copy } from '$lib/i18n';
import { P } from '$lib/prices';

// Simplified Chinese. Machine translation; have a native speaker read it before promotion.
export const zh: Copy = {
	prices: P.zh,
	taxNote: '不含关税及进口税',
	bar: '都柏林设计。中国制造。',
	photo: '照片待补',
	nav: { made: '产地', inventory: '全部', permanent: '常设', house: '关于我们', care: '保养', contact: '联系', back: '创始支持者', language: '语言' },
	foot: {
		objects: '物件',
		lines: '系列',
		permanent: '常设',
		ma: 'MA，牛仔',
		ji: 'GRUND，T恤',
		ovol: 'ÖVÖL，外套',
		baram: 'BARAM，束脚裤',
		qutn: 'QUTN，衬衫',
		house: '关于我们',
		care: '保养与维修',
		back: '创始支持者',
		contact: '联系',
		tagline: 'VNTA 旗下品牌。都柏林。',
		legal:
			'Apple、MacBook、MacBook Air、MacBook Pro、AirPods 和 AirTag 是 Apple Inc. 的商标。Maison Seul 与 Apple 无关联，亦未获其认可。'
	},
	home: {
		title: 'Maison Seul',
		description: 'Maison Seul。都柏林的一家设计工作室：一件物件，以及常在的衣物。',
		tagline: '更少的东西。更好的东西。'
	},
	case01: {
		title: 'SKRIN / Maison Seul',
		description: 'SKRIN。一只铝制登机箱。第 001 版，共一百件。一百位创始支持者。',
		kicker: '物件 01 / 登机箱',
		variant: 'Graphite / 第 001 版 / 100 件',
		status: '尚未发售。',
		backNote: '一百位创始支持者让 SKRIN 成为可能。每人获得一只箱子，其姓名缩写将刻在此后每一只 SKRIN 的内部。',
		cta: `成为创始支持者，${P.zh.case01Back}`,
		backersTitle: '创始支持者',
		backersText: '他们的姓名缩写刻在此后每一只 SKRIN 箱盖内的铭牌上。每张所有权卡都写有他们的名字和缘由。',
		note: '此表面处理只做一次。箱盖内编号 001 至 100。',
		viewsLabel: '视图',
		views: ['正面', '四分之三侧', '原铝角', '内部', '编号铭牌'],
		followSuffix: '照片待补。',
		introTitle: '一只箱子。别无他物。',
		intro:
			'一只铝制登机箱：没有标志，留一角原铝，并为你随身之物预留了位置。这是 Maison Seul 的第一件物件。',
		carryTitle: '为你随身之物而做',
		carrySub: 'MacBook、AirTag、充电器。各有其位。',
		carry: [
			{ title: 'MacBook 内袋', text: '箱盖内的软垫内袋，可容纳 16 英寸 MacBook Pro 及更小的机型。' },
			{ title: 'AirTag 暗袋', text: '框架内的隐藏口袋。放进一枚 AirTag，便可忘了它的存在。' },
			{ title: '线材袋', text: '扁平拉链袋，放充电器、线材和 AirPods，不再四处滚动。' }
		],
		reasonsLabel: '细节',
		reasons: [
			{ title: '一角原铝。', text: '七个角为石墨色，一角保留原铝。' },
			{ title: '四颗螺丝。', text: '每个轮子都可用螺丝刀拆下。' },
			{ title: '它会留下痕迹。', text: '铝会记住每一段旅程。这正是用意所在。' },
			{ title: '没有标志。', text: '只有你的编号，小小地刻在提手旁。' }
		],
		specsTitle: '细节',
		specs: [
			{
				label: '细节',
				lines: [
					'铝制框架，两个锁扣，无拉链',
					'TSA 认可密码锁',
					'四个双万向轮，可更换',
					'伸缩拉杆，可更换'
				]
			},
			{
				label: '尺寸与重量',
				lines: [
					'55 × 40 × 20 厘米（21.7 × 15.7 × 7.9 英寸），含轮子与提手',
					'重量与容量待首件样品确认'
				]
			},
			{
				label: '兼容性',
				lines: [
					'箱盖内袋可容纳 16 英寸、14 英寸 MacBook Pro 及 MacBook Air',
					'框架口袋可放一枚 AirTag。不含 AirTag',
					'符合 Ryanair（付费登机行李）、Aer Lingus、Lufthansa 和 British Airways 的登机尺寸限制',
					'Lufthansa 允许总重 8 公斤，留给你的物品约 3.7 公斤。航空公司规定会变，出行前请核实'
				]
			},
			{ label: '表面处理', lines: ['Graphite，哑光阳极氧化', '一角为原铝'] },
			{ label: '材料', lines: ['铝镁合金箱壳与框架', '涤纶内衬，浅灰色'] },
			{ label: '包装内含', lines: ['SKRIN', '防尘罩', '印有你编号的所有权卡', '保养与维修卡'] },
			{
				label: '退货与保修',
				lines: [
					'未使用可于 14 天内退货，全额退款',
					'箱壳、框架、轮子、拉杆和锁扣保修 5 年。凹痕和划痕不在保修范围内'
				]
			}
		],
		faqTitle: '问题',
		faq: [
			{
				q: '在哪里制造？',
				a: '都柏林设计。中国制造，由一家专业铝制品工厂生产。发货之前，我们会在此公布工厂名称。每一批货出厂前都经过检验。'
			},
			{
				q: '一百件售完之后呢？',
				a: 'Graphite 不再生产。SKRIN 会以新的表面处理继续，每一版的零件都保持库存。'
			},
			{
				q: '什么是创始支持者？',
				a: `在 SKRIN 问世之前出资支持它的 100 人之一。支付 ${P.zh.case01Back}，箱子完成时你将获得一只，你的姓名缩写会刻在此后每一只 SKRIN 内部，你的名字会印在每一张所有权卡上。如果它最终未能发货，你的钱将全额退还。`
			},
			{
				q: 'Maison Seul 是 Apple 旗下的吗？',
				a: '不是。我们围绕 Apple 设备来设计，因为我们设计所面向的人，大多随身带着它们。'
			}
		],
		trustLabel: '承诺',
		trust: ['都柏林设计，中国制造', '限量编号', '可维修', '14 天退货']
	},
	ma: {
		title: '常设 / Maison Seul',
		description: '常设系列。MA，三种版型的牛仔：一、二、三。GRUND，T恤与长袖。ÖVÖL，轻款与厚款外套。QUTN，府绸与帆布衬衫。BARAM，气球束脚裤。SĪ，真丝家居套装。',
		kicker: '常设系列',
		lead: '三种版型的牛仔，按留出的空间编号：一、二、三。「間」（Ma）是日语，指事物之间的空间。在这里，是布料与你之间的空间。',
		lead2: '九十年代东京的比例，以建筑的线条重新绘制。不是限量版。持续生产，一直都在。',
		stylesLabel: '三种版型',
		denim: '牛仔',
		fitLabel: '版型',
		fits: ['直筒', '阔腿', '桶形'],
		fitNote: '数字代表「間」的多少：布料与你之间的空间。',
		styles: [
			'从臀部到裤脚笔直而下，全程留有余量。',
			'低腰阔腿。裤脚堆在鞋面上。',
			'膝部向外弧出，裤脚处收回。'
		],
		outline: '轮廓',
		price: '价格',
		status: '状态',
		statusValue: '开发中',
		arrives: '到货',
		arrivesValue: '完成之时。',
		edition: '版次',
		editionValue: '无。常设。',
		cta: `成为创始支持者，${P.zh.maBack}`,
		backersTitle: '创始支持者',
		backersText: '一百位创始支持者让 MA 成为可能。他们的姓名缩写将织入我们设计的图案中，出现在此后每一条 MA 的内侧。每位支持者在完成时获得一条，款式和尺码自选。'
	},
	ji: {
		title: 'GRUND',
		lead: '一件T恤，一件长袖。Grund 在德语中意为地面，也意为根基。其他一切都立于其上的那一层。',
		lead2: '九十年代牛仔品牌T恤的比例：方正、落肩、衣身短而直。以德式的克制裁剪：长度精确，领口贴合，外面不印任何东西。',
		pieces: [
			{ name: 'Tee', line: '短袖及肘。下摆落在臀部。' },
			{ name: 'Longsleeve', line: '长袖口在手腕处堆叠。衣身相同。' }
		],
		coloursLabel: '三种颜色',
		colours: ['Unlit', 'Concrete', 'Blinding White'],
		detailsLabel: '做法',
		details: [
			'240 克厚棉针织布，圆筒编织：没有侧缝。',
			'窄罗纹领口，保持形状。',
			'外面没有标志。名字印在内侧领口处。'
		],
		priceTee: 'Tee',
		priceLong: 'Longsleeve'
	},
	ovol: {
		lead: '两件外套。Övöl 是蒙古语的冬天，写作 ӨВӨЛ。乌兰巴托是世界上最冷的首都；这两件为那样的日子而裁。',
		lead2: 'Light 挡风遮雨，可收进自身口袋。Heavy 填充羽绒，应对真正的寒冷。同样方正的肩，同样加长的后身，外面不印任何东西。',
		pieces: [
			{ name: 'Light', line: '连帽外壳。压胶接缝，双向拉链。' },
			{ name: 'Heavy', line: '羽绒填充，高领，宽绗缝格。' }
		],
		coloursLabel: '两种颜色',
		colours: ['Unlit', 'Concrete'],
		details: [
			'Light：防水透气的三层外壳。',
			'Heavy：防泼水面料下填充羽绒。',
			'口袋尺寸可放手机和手套。名字印在内侧。'
		]
	},
	baram: {
		lead: '束脚裤。Baram 是韩语的风，写作 바람。裤腿像帆一样鼓满空气。',
		lead2: '大腿和膝部宽松，向下收窄至开口裤脚，裤腿鼓起并垂落在鞋面上。无罗纹裤口。抽绳腰头，低腰穿着。',
		pieces: [{ name: 'Jogger', line: '一种剪裁。气球裤腿，开口裤脚。' }],
		coloursLabel: '两种颜色',
		colours: ['Unlit', 'Concrete'],
		details: [
			'400 克棉质卫衣布，内里磨毛。',
			'深侧袋，一个后袋。',
			'外面没有标志。名字印在腰头内侧。'
		]
	},
	qutn: {
		lead: '衬衫。Qutn 是阿拉伯语的棉，写作 قطن。英语的 cotton 一词即源于此，而织出最好府绸的长绒棉，生长在尼罗河畔。',
		lead2: '九十年代衬衫的比例：方正、落肩、长而直的下摆，可塞可放。纽扣藏于素面门襟之下。没有口袋，没有标志。',
		pieces: [
			{ name: 'Poplin', line: '挺括轻薄。单穿。' },
			{ name: 'Canvas', line: '更厚重，敞开作外搭衬衫。' }
		],
		coloursLabel: '三种颜色',
		colours: ['Blinding White', 'Unlit', 'Concrete'],
		details: [
			'Poplin：紧密织造的双股棉。',
			'Canvas：致密的棉帆布，越穿越软。',
			'暗门襟。名字印在过肩内侧。'
		]
	},
	inventory: {
		title: '全部 / Maison Seul',
		description: 'Maison Seul 所做的一切，尽在此处。一件限量编号的物件，以及常在的衣物。',
		kicker: '全部',
		h1: '一切，尽在此处。',
		lead: '一件限量编号的物件。常在的衣物，男女尺码皆有。目前均未发售。',
		filterLabel: '显示',
		cats: { all: '全部', objects: '物件', tops: '上装', outer: '外套', bottoms: '下装', lounge: '家居服' },
		edition: '第 001 版 / 100',
		permanent: '常设',
		pieces: '{n} 件',
		sortLabel: '排序',
		sortNo: '按编号',
		sortLow: '价格 ↑',
		sortHigh: '价格 ↓'
	},
	si: {
		lead: '家居服。Sī，即汉语的「丝」，繁体作「絲」。丝绸最早在中国织成，距今已有五千多年。',
		lead2: '一套，男女皆宜：一件开领衬衫，一条抽绳长裤，每道边缘都有滚边。只有一种颜色，石墨色，是房间开灯之前的那种灰黑。',
		pieces: [
			{ name: 'Shirt', line: '开领，一个胸袋，滚边。' },
			{ name: 'Trouser', line: '抽绳腰头，直筒宽松裤腿。' }
		],
		coloursLabel: '一种颜色',
		colours: ['Graphite'],
		details: [
			'砂洗真丝：柔软哑光，而非光亮。',
			'成套出售。男女尺码皆有。',
			'名字印在领口内侧。'
		],
		set: '套装'
	},
	made: { title: '产地 / Maison Seul', description: '为 Maison Seul 生产的工厂、所在地及各自生产的产品。', h1: '在哪里制造。', lead: '所有产品在都柏林设计，由中国成熟的制造商生产。这里列出各家工厂、所在地以及各自生产的产品。每家工厂的名称会在其产品发货前公布。', factory: '工厂', location: '所在地', makes: '生产', since: '创立于', photos: '照片稍后发布', tbc: '发货前公布', inspect: '每批产品离开工厂前都经过检验。' },
	ui: { menu: '菜单', close: '关闭', piece: '单品', colour: '颜色', ask: '向工作室咨询', notOnSale: '尚未发售。准备好时送达。', editionOf: '限量100件', sort: '排序', sizes: '男女尺码。', made: '都柏林设计，中国制造，发货前逐件检验。', back: '返回全部' },
	house: {
		title: '关于我们 / Maison Seul',
		description: 'Maison Seul 是一家位于都柏林的设计工作室。一件物件，以及常在的衣物。',
		kicker: '关于我们',
		h1: '更少。更好。',
		lead: 'Maison Seul 是一家位于都柏林的设计工作室。我们做一件物件，以限量编号版推出，以及一个小小的常设衣橱。一切都为长久保留而做。',
		sections: [
			{
				h: '一件物件，一个衣橱',
				p: ['不为填满目录而做任何东西。登机箱 SKRIN 是那唯一的物件。围绕它的是一个常设衣橱：MA（牛仔）、GRUND（T恤）、QUTN（衬衫）、ÖVÖL（外套）、BARAM（束脚裤）和 SĪ（家居服），每一个系列都以塑造它的那个地方的语言命名。']
			},
			{
				h: '限量版与常设系列',
				p: [
					'SKRIN 以限量编号版推出。每种表面处理只做一次，数量固定，每一件内侧都带有编号。设计不变；下一版换新的表面处理。',
					'衣物是常设的。持续生产，不编号，也永不停产，所以你现在买的这一件，等你需要再买时依然还在。'
				]
			},
			{
				h: '用得更久',
				p: [
					'每一个会磨损的部件都可以更换，每一版的这些零件我们都保持库存。凹痕和划痕不是缺陷。铝会记下它去过的地方。'
				]
			},
			{
				h: '在哪里制造',
				p: [
					'都柏林设计。中国制造。目前，我们所做的一切都在那里制造：SKRIN 由一家专业铝制品工厂生产，衣物由我们以同样用心挑选的服装工厂生产。每一家工厂都列在「产地」页面上，并在任何产品发货之前于该页公布名称，每一批货出厂前我们都会检验。', '我们宁愿告诉你在哪里制造，也不愿让你去猜。如果有所改变，这一页会最先更新。'
				]
			},
			{ h: 'VNTA 旗下', p: ['Maison Seul 是 VNTA 旗下品牌。'] }
		]
	},
	care: {
		title: '保养与维修 / Maison Seul',
		description: '如何保养 SKRIN 和衣物、更换零件以及送修。',
		kicker: '保养与维修',
		h1: '四颗螺丝，以及配套的零件。',
		lead: '轮子、拉杆和锁扣都可用螺丝刀拆下。每一版的零件我们都有保留，所以 SKRIN 可以一直用下去，而不必换新。',
		everydayTitle: '日常保养',
		everyday: [
			'用柔软的湿布擦拭箱壳。必要时加少许温和肥皂。不要用任何研磨性物品。',
			'用湿布擦拭内衬。打开晾干。',
			'空箱、合上、直立存放，避免阳光直射。',
			'凹痕和划痕是铝的一部分。它们不属于保修范围内的缺陷，我们也不会假装它们不会出现。'
		],
		clothesTitle: '衣物',
		clothes: [
			'每一件内侧都有洗涤标签。请首先遵照标签。',
			'牛仔：尽量少洗，冷水，翻面洗涤。悬挂晾干。',
			'棉与抓绒：30°C 水温，翻面，与相近颜色同洗。平铺或悬挂晾干。',
			'羽绒：30°C 轻柔程序洗涤，然后低温滚筒烘干，直至完全干透。',
			'真丝：冷水手洗或干洗。平铺晾干，避免阳光直射。'
		],
		wheelTitle: '更换轮子',
		wheel: [
			'清空箱子，背面朝下平放。',
			'用螺丝刀拧下固定轮子的四颗螺丝。',
			'取下旧轮子。',
			'装上新轮子，均匀拧紧四颗螺丝。不要拧得过紧。'
		],
		wheelAfter: '拉杆、锁扣和箱脚也以同样方式拆卸。完整指南随箱附送。',
		partsTitle: '备用零件',
		partsHead: ['零件', '说明'],
		parts: [
			['双万向轮', '一角。四颗螺丝。'],
			['伸缩拉杆', '整套组件。'],
			['带密码锁的锁扣', '一个锁扣。'],
			['护角', '石墨色或原铝。'],
			['箱脚', '两只一套。']
		],
		partsAfter: '5 年保修期内免费。之后按成本价加邮费出售。价格将在开售时公布。',
		repairTitle: '由我们维修',
		repairBefore: '发送邮件至',
		repairAfter: '，附上你的编号和问题照片。我们会寄出零件，如有需要则安排维修。'
	},
	backers: {
		title: '创始支持者 / Maison Seul',
		description: 'SKRIN 的一百位创始支持者。完成时获得你的箱子，你的姓名缩写留在此后的每一只之中。',
		kicker: '创始支持者',
		h1: '让它成为可能。',
		lead: 'Maison Seul 由希望它存在的人出资支持。SKRIN 是第一件物件，有一百位创始支持者。作为回报，你将永远成为它的一部分。',
		count: '{n} / 100 位支持者',
		noneYet: '尚无。成为第一位。',
		items: {
			case01: {
				sub: '铝制登机箱。第 001 版。',
				gives: [
					'一只 SKRIN，完成时交付',
					'你的姓名缩写（最多三个字母），刻在此后每一只 SKRIN 内部的支持者铭牌上',
					'你的名字和缘由，印在每一张所有权卡上'
				],
				cta: `支持 SKRIN，${P.zh.case01Back}`
			},
			ma: {
				sub: '三种款式的牛仔。常设。',
				gives: [
					'一条你所选款式和尺码的 MA，完成时交付',
					'你的姓名缩写织入 MA 图案，出现在此后每一条的内侧',
					'你的名字和缘由，印在每一张所有权卡上'
				],
				cta: `支持 MA，${P.zh.maBack}`
			}
		},
		amountLabel: '创始支持者',
		termsTitle: '条款，直说',
		terms: [
			'何时：完成之时。不承诺任何日期，每个阶段我们都会写信告知支持者。',
			'如果它最终未能发货，你将获得全额退款。',
			'在你的箱子发货之前，你可以随时申请全额退款。若已开始生产，你的姓名缩写可能已在制成的产品中。',
			'支持是以创始价格进行的预订，而非投资。它不赋予任何公司股份。',
			'一百位支持者。每人限支持一次。',
			`开售后的正常价格：${P.zh.case01}。`
		],
		paidNote: '付款在安全的结账页面完成。',
		emailNote: '结账页面即将开放。在此之前，请发邮件给我们登记你的名字。不会收取任何费用。',
		emailCta: '登记我的名字',
		emailSubject: '创始支持者',
		emailBody: '我想成为 SKRIN 的创始支持者。\n\n姓名缩写（最多 3 个字母）：\n姓名：\n'
	},
	contact: {
		title: '联系 / Maison Seul',
		description: '联系 Maison Seul。',
		kicker: '联系',
		h1: '一个地址。',
		reply: '由真人回复。',
		repairTitle: '维修或零件',
		repair: '请附上你的编号和一张照片。编号在箱盖内的铭牌上。'
	}
};
