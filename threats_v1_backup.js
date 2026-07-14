/* 威胁组织模块 - threats.js v1.0 */
const THREAT_DATA={organizations:[
{id:'isis',name:'伊斯兰国',aliases:['ISIS','ISIL','DAESH','达伊沙'],type:'恐怖组织',category:'宗教极端',subcategory:'逊尼派萨拉菲圣战',founded:'1999',foundedLocation:'阿富汗/伊拉克',status:'潜伏活跃',threatLevel:9.5,threatTrend:'下降',leader:'阿布·哈夫斯·哈希米·库莱希',formerLeaders:['阿布·贝克尔·巴格达迪（2019击毙）','阿布·易卜拉欣·哈希米·库莱希（2022击毙）'],members:'约5,000-10,000',operatingRegions:['伊拉克','叙利亚','阿富汗','利比亚','尼日利亚','埃及西奈','菲律宾','索马里'],ideology:'建立跨国界伊斯兰哈里发国，推行极端萨拉菲派教法，对异教徒实施"圣战"',funding:'石油走私、文物走私、税收勒索、人口贩卖、外国捐赠',fundingEstimate:'鼎盛期年收入约20-30亿美元',designation:['联合国安理会1267委员会制裁','美国指定外国恐怖组织','中国公安部认定恐怖组织','欧盟指定恐怖组织'],weaponLevel:'常规武器+IED+无人机改装',cyberCapability:'中等——擅长社交媒体宣传',description:'伊斯兰国是21世纪最具破坏力的恐怖组织。2014年攻占摩苏尔后宣布建立"哈里发国"，曾控制伊叙大片领土。2019年领土实体被消灭后转入游击和"虚拟哈里发"模式，在全球多地通过省分支和"独狼"袭击发动恐怖活动。其宣传机器极为高效，通过互联网招募了来自100多个国家的外国战斗人员。',
structure:[{role:'哈里发（最高领袖）',current:'阿布·哈夫斯·哈希米·库莱希',desc:'宗教与世俗最高权威'},{role:'舒拉委员会',current:'约9-11名高级成员',desc:'决策咨询，推举哈里发'},{role:'国防与军事委员会',current:'—',desc:'统筹全球军事行动'},{role:'安全与情报总局',current:'—',desc:'内部安全、反间谍、海外情报'},{role:'各省省长（瓦利）',current:'—',desc:'管理各"省"行政与军事'},{role:'财政委员会',current:'—',desc:'管理资金来源与分配'},{role:'媒体与宣传部门',current:'—',desc:'多语种媒体中心，视频/杂志/音频'},{role:'宗教法理委员会',current:'—',desc:'发布教令、解释教法'}],
events:[{date:'2014-06-10',title:'攻占摩苏尔',desc:'ISIS攻占伊拉克第二大城市，政府军溃败',casualties:'约50万平民流离失所',impact:'极端'},{date:'2014-06-29',title:'宣布建立哈里发国',desc:'巴格达迪在摩苏尔努里清真寺宣布建国',casualties:'—',impact:'极端'},{date:'2014-08-03',title:'雅兹迪种族灭绝',desc:'对辛贾尔山雅兹迪少数民族实施种族灭绝',casualties:'约5,000人被杀，7,000名妇女儿童被奴役',impact:'极端'},{date:'2015-10-31',title:'俄罗斯客机爆炸',desc:'在埃及西奈半岛炸毁俄罗斯Metrojet航班',casualties:'224人死亡',impact:'极端'},{date:'2015-11-13',title:'巴黎系列恐袭',desc:'巴黎多处协同恐怖袭击',casualties:'130人死亡，413人受伤',impact:'极端'},{date:'2016-03-22',title:'布鲁塞尔恐袭',desc:'机场和地铁站自杀式爆炸',casualties:'32人死亡，340人受伤',impact:'极端'},{date:'2019-03-23',title:'巴古斯村陷落',desc:'ISIS最后据点被攻陷，领土哈里发国灭亡',casualties:'—',impact:'极端'},{date:'2019-10-27',title:'巴格达迪被击毙',desc:'美军突袭叙利亚伊德利卜，巴格达迪引爆炸弹身亡',casualties:'—',impact:'高'},{date:'2022-01-20',title:'哈塞克监狱突袭',desc:'大规模越狱行动',casualties:'约500人死亡',impact:'高'},{date:'2024-01-03',title:'克尔曼连环爆炸',desc:'ISIS-K在伊朗纪念苏莱曼尼集会发动爆炸',casualties:'94人死亡，284人受伤',impact:'极端'}],
statements:[{date:'2014-07-05',source:'巴格达迪布道',content:'我是被真主选中的领袖，号召各地穆斯林向我效忠。建立哈里发国是所有穆斯林的宗教义务。'},{date:'2014-09-21',source:'发言人阿德纳尼',content:'号召支持者在西方国家发动袭击："如果你不能迁徙到伊斯兰国，就在你所在的地方发动圣战。"'},{date:'2015-05',source:'官方杂志《达比克》第7期',content:'"我们将征服罗马，摧毁十字架。"号召全球穆斯林加入"哈里发国"。'},{date:'2016-07',source:'官方杂志《鲁米亚》第1期',content:'详细指导"独狼"如何在西方国家使用卡车进行恐袭，将"孤狼袭击"提升为正式战术。'},{date:'2019-04-29',source:'阿玛克通讯社',content:'发布巴格达迪露面视频，承认领土损失但号召继续战斗："战斗即将进入新阶段。"'},{date:'2024-01-04',source:'ISIS-K声明',content:'宣称对伊朗克尔曼爆炸负责，称是对"伊朗及什叶派异教徒的报复"。'}]
},
{id:'alqaeda',name:'基地组织',aliases:['Al-Qaeda','AQ','盖达组织'],type:'恐怖组织',category:'宗教极端',subcategory:'逊尼派萨拉菲圣战',founded:'1988',foundedLocation:'巴基斯坦白沙瓦',status:'分散活跃',threatLevel:8.5,threatTrend:'稳定',leader:'赛义夫·阿德尔（代理）',formerLeaders:['本·拉登（2011击毙）','扎瓦希里（2022击毙）'],members:'核心数百人，全球关联网络数千人',operatingRegions:['叙利亚','也门','索马里','萨赫勒','阿富汗','印度次大陆'],ideology:'推翻阿拉伯世俗政权，驱逐西方势力，恢复伊斯兰哈里发，全球圣战',funding:'外国捐赠、绑架赎金、毒品贸易、商业掩护',fundingEstimate:'年收入约数千万美元',designation:['联合国安理会制裁','美国指定外国恐怖组织','中国公安部认定','欧盟指定'],weaponLevel:'常规武器+IED+航空劫持',cyberCapability:'低',description:'基地组织由本·拉登于1988年创立，是全球圣战运动先驱。策划了"9·11"恐怖袭击，导致近3000人死亡。本·拉登被击毙后扎瓦希里接任，核心虽削弱但分支网络仍在扩张。与ISIS存在路线分歧——基地组织倾向长期渗透和渐进式斗争。目前其分支如阿拉伯半岛基地组织(AQAP)和萨赫勒分支仍构成重大威胁。',
structure:[{role:'埃米尔（最高领袖）',current:'赛义夫·阿德尔（代理）',desc:'战略决策与宗教权威'},{role:'副埃米尔/顾问委员会',current:'—',desc:'协助最高领袖决策'},{role:'军事委员会',current:'—',desc:'统筹全球军事行动'},{role:'宗教法理委员会',current:'—',desc:'发布教令'},{role:'媒体部门（萨哈卜）',current:'—',desc:'宣传视频和音频'},{role:'各区域分支',current:'—',desc:'AQAP/AQIM/AQIS/青年党'}],
events:[{date:'1998-08-07',title:'美国驻非大使馆爆炸',desc:'同时炸毁驻肯尼亚和坦桑尼亚大使馆',casualties:'224人死亡，4,000+人受伤',impact:'极端'},{date:'2000-10-12',title:'科尔号驱逐舰爆炸',desc:'也门亚丁港小艇撞击美国军舰',casualties:'17名美军死亡',impact:'高'},{date:'2001-09-11',title:'"9·11"恐怖袭击',desc:'劫持4架民航客机撞击世贸中心和五角大楼',casualties:'2,977人死亡，6,000+人受伤',impact:'极端'},{date:'2002-10-12',title:'巴厘岛爆炸',desc:'印尼巴厘岛夜总会爆炸',casualties:'202人死亡',impact:'极端'},{date:'2004-03-11',title:'马德里列车爆炸',desc:'马德里通勤列车炸弹',casualties:'193人死亡，2,000人受伤',impact:'极端'},{date:'2005-07-07',title:'伦敦地铁爆炸',desc:'本土恐怖分子自杀式爆炸',casualties:'52人死亡，784人受伤',impact:'极端'},{date:'2015-01-07',title:'查理周刊枪击',desc:'AQAP声称对巴黎查理周刊袭击负责',casualties:'12人死亡',impact:'高'},{date:'2022-07-31',title:'扎瓦希里被击毙',desc:'美军无人机在喀布尔击毙扎瓦希里',casualties:'1人',impact:'高'}],
statements:[{date:'1996-08-23',source:'本·拉登教令',content:'"向美国宣战"——号召穆斯林驱逐西方势力离开阿拉伯半岛，解放伊斯兰圣地。'},{date:'1998-02-23',source:'本·拉登等联合教令',content:'"杀死美国人和他们的盟友——平民和军人——是每个穆斯林的个体义务。"'},{date:'2004-12-27',source:'本·拉登录音',content:'首次承认策划"9·11"袭击，称"我们决定摧毁纽约和华盛顿的标志建筑"。'},{date:'2011-05-19',source:'扎瓦希里接任声明',content:'誓言继续本·拉登遗志，"我们将加快步伐"。'},{date:'2022-08',source:'基地组织声明',content:'悼念扎瓦希里，誓言"圣战不会停止"。'}]
},
{id:'bokoharam',name:'博科圣地',aliases:['Boko Haram','ISWAP'],type:'恐怖组织',category:'宗教极端',subcategory:'逊尼派极端（反西方教育）',founded:'2002',foundedLocation:'尼日利亚迈杜古里',status:'活跃分裂',threatLevel:8.0,threatTrend:'稳定',leader:'阿布·穆萨布·巴尔纳维（ISWAP）',formerLeaders:['穆罕默德·优素福（2009死亡）','阿布巴卡尔·谢考（2021死亡）'],members:'约3,000-5,000',operatingRegions:['尼日利亚东北','喀麦隆北部','尼日尔','乍得'],ideology:'禁止西方教育，建立伊斯兰教法治国，反对世俗政府',funding:'抢劫银行、绑架赎金、勒索村民、走私武器',fundingEstimate:'年收入约1,000万-2,000万美元',designation:['联合国安理会制裁','美国指定外国恐怖组织','中国公安部认定'],weaponLevel:'常规武器+自杀炸弹+IED',cyberCapability:'极低',description:'博科圣地成立于2002年尼日利亚，名称意为"西方教育是被禁止的"。在尼日利亚东北部和乍得湖盆地制造严重人道主义危机，造成超过3.5万人死亡，约300万人流离失所。2015年宣誓效忠ISIS后改名ISWAP，但内部随后分裂。2014年绑架奇博克276名女学生事件引发全球#BringBackOurGirls运动。',
structure:[{role:'最高领袖（埃米尔）',current:'阿布·穆萨布·巴尔纳维',desc:'ISWAP派系领袖，获ISIS认可'},{role:'谢考派系领导',current:'已分裂，多名头目',desc:'原始博科圣地残余'},{role:'军事指挥官',current:'—',desc:'各地作战指挥'},{role:'宗教领袖',current:'—',desc:'宗教合法性'},{role:'后勤与招募',current:'—',desc:'物资补给、新成员训练'}],
events:[{date:'2009-07-26',title:'迈杜古里暴动',desc:'与安全部队冲突，创始人优素福被击毙',casualties:'约800人死亡',impact:'高'},{date:'2011-08-26',title:'联合国驻尼总部爆炸',desc:'自杀式汽车炸弹袭击驻阿布贾联合国总部',casualties:'23人死亡',impact:'极端'},{date:'2014-04-14',title:'奇博克女学生绑架',desc:'从学校绑架276名女学生',casualties:'276人被绑',impact:'极端'},{date:'2015-01-03',title:'巴嘎大屠杀',desc:'攻占尼日利亚东北部巴嘎镇',casualties:'约2,000人死亡',impact:'极端'},{date:'2015-03-07',title:'宣誓效忠ISIS',desc:'谢考宣布效忠巴格达迪',casualties:'—',impact:'高'},{date:'2021-05-19',title:'谢考死亡',desc:'与ISWAP交火中引爆自杀炸弹',casualties:'—',impact:'高'}],
statements:[{date:'2014-05',source:'谢考视频',content:'"我绑架了你们的女儿。她们应该结婚而不是上学。真主命令我出售她们。"'},{date:'2015-03-07',source:'谢考音频',content:'"我们宣誓效忠哈里发巴格达迪……我们听从他的命令。"'},{date:'2016-08-03',source:'ISIS官方',content:'指定巴尔纳维为西非省新任领导人，取代谢考。'},{date:'2018-02',source:'ISWAP声明',content:'威胁对基督教社区发动更多袭击，声称是对穆斯林遭受迫害的报复。'}]
},
{id:'alshabaab',name:'青年党',aliases:['Al-Shabaab','索马里青年党'],type:'恐怖组织',category:'宗教极端',subcategory:'逊尼派萨拉菲圣战',founded:'2006',foundedLocation:'索马里摩加迪沙',status:'活跃',threatLevel:7.5,threatTrend:'稳定',leader:'艾哈迈德·奥马尔（阿布·乌拜达）',formerLeaders:['阿丹·艾罗（2008击毙）','莫克塔尔·祖贝尔（2014击毙）'],members:'约7,000-9,000',operatingRegions:['索马里','肯尼亚','埃塞俄比亚','坦桑尼亚'],ideology:'推翻索马里联邦政府，建立伊斯兰教法治国，驱逐外国势力',funding:'征税勒索、走私（木炭/甘蔗）、海盗分红、绑架赎金',fundingEstimate:'年收入约7,000万-1亿美元',designation:['联合国安理会制裁','美国指定外国恐怖组织','中国公安部认定'],weaponLevel:'常规武器+自杀炸弹+IED',cyberCapability:'低——有媒体宣传能力',description:'青年党是索马里主要的伊斯兰极端武装组织，2006年从伊斯兰法院联盟中崛起。曾一度控制摩加迪沙及南部大部分地区。在非盟维和部队和索马里政府军打击下退守农村，但仍频繁发动恐怖袭击，尤其针对肯尼亚目标。2012年宣誓效忠基地组织，是非洲之角最致命的恐怖组织之一。',
structure:[{role:'埃米尔（最高领袖）',current:'艾哈迈德·奥马尔',desc:'最高军事和宗教权威'},{role:'副埃米尔',current:'—',desc:'分管安全'},{role:'舒拉委员会',current:'—',desc:'10名成员决策机构'},{role:'军事行动指挥',current:'—',desc:'各区军事行动'},{role:'情报与安全（阿姆尼亚特）',current:'—',desc:'情报、反间谍、暗杀'},{role:'媒体中心',current:'—',desc:'电台和网站宣传'},{role:'宗教法庭',current:'—',desc:'伊斯兰教法审判'}],
events:[{date:'2010-07-11',title:'乌干达世界杯爆炸',desc:'坎帕拉世界杯观赛场所双重自杀爆炸',casualties:'74人死亡',impact:'极端'},{date:'2013-09-21',title:'西门购物中心袭击',desc:'武装分子袭击内罗毕西门购物中心，持续4天',casualties:'67人死亡，175人受伤',impact:'极端'},{date:'2015-04-02',title:'加里萨大学袭击',desc:'袭击肯尼亚加里萨大学，针对基督徒学生',casualties:'148人死亡',impact:'极端'},{date:'2017-10-14',title:'摩加迪沙卡车爆炸',desc:'摩加迪沙热点酒店区卡车炸弹',casualties:'587人死亡，316人受伤',impact:'极端'},{date:'2019-01-15',title:'内罗毕酒店袭击',desc:'袭击内罗毕都喜酒店综合体',casualties:'21人死亡',impact:'高'},{date:'2020-01-05',title:'美军基地袭击',desc:'袭击肯尼亚辛巴营美军基地',casualties:'3人死亡',impact:'高'},{date:'2022-10-29',title:'摩加迪沙双重爆炸',desc:'教育部附近两起汽车炸弹',casualties:'121人死亡，300人受伤',impact:'极端'}],
statements:[{date:'2012-02-09',source:'青年党声明',content:'正式宣布效忠基地组织："我们与基地组织合为一体，听从扎瓦希里的命令。"'},{date:'2013-09-21',source:'发言人',content:'宣称对西门购物中心袭击负责，称"这是对肯尼亚在索马里军事行动的报复"。'},{date:'2015-04-02',source:'青年党声明',content:'"我们已将加里萨大学从异教徒手中清除。这是对肯尼亚穆斯林遭受迫害的报复。"'},{date:'2017-10-15',source:'发言人',content:'宣称对摩加迪沙大爆炸负责，称目标是"军事和情报人员聚集地"。'},{date:'2022-10-30',source:'青年党声明',content:'宣称对摩加迪沙双重爆炸负责，称"目标是教育部，回应政府对穆斯林的迫害"。'}]
},
{id:'taliban',name:'塔利班',aliases:['Taliban','阿富汗塔利班','阿塔','伊斯兰酋长国'],type:'恐怖组织',category:'宗教极端',subcategory:'逊尼派德奥班迪教派',founded:'1994',foundedLocation:'阿富汗坎大哈',status:'执政（争议性）',threatLevel:7.0,threatTrend:'上升',leader:'海巴图拉·阿洪扎达',formerLeaders:['穆罕默德·奥马尔（2013死亡）','阿赫塔尔·曼苏尔（2016击毙）'],members:'约8万-10万（含安全部队）',operatingRegions:['阿富汗（全国）','巴基斯坦边境'],ideology:'建立阿富汗伊斯兰酋长国，实施严格沙里亚法，反对西方化',funding:'毒品贸易（鸦片/海洛因）、矿产开采、税收、走私、外国资助',fundingEstimate:'年收入约10-15亿美元',designation:['联合国安理会制裁（部分领导人）','加拿大指定','部分国家未重新认定'],weaponLevel:'常规军事装备（含美制遗留装备）',cyberCapability:'中等——活跃社交媒体宣传',description:'塔利班由奥马尔毛拉于1994年在坎大哈创立，1996-2001年曾统治阿富汗。2001年美国入侵后转入游击战。2021年8月美军撤离后迅速攻占全国，重新夺回政权，建立"阿富汗伊斯兰酋长国"。实施严格伊斯兰教法，严重限制女性权利。与巴基斯坦塔利班(TTP)和基地组织有复杂关系。政权目前未获国际普遍承认。',
structure:[{role:'最高埃米尔',current:'海巴图拉·阿洪扎达',desc:'最高政治军事宗教领袖，驻坎大哈'},{role:'政治委员会主席',current:'—',desc:'对外政治事务'},{role:'总理/内阁',current:'哈桑·阿洪德（代理总理）',desc:'行政事务管理'},{role:'军事委员会',current:'亚库布·奥马尔',desc:'军事行动指挥'},{role:'情报总局',current:'—',desc:'情报收集与安全'},{role:'指导与劝善惩恶部',current:'—',desc:'实施伊斯兰教法监督'},{role:'哈卡尼网络',current:'西拉杰丁·哈卡尼',desc:'半独立武装派系，城市袭击和外交'}],
events:[{date:'1996-09-27',title:'首次攻占喀布尔',desc:'塔利班攻占首都，建立伊斯兰酋长国',casualties:'—',impact:'极端'},{date:'2001-03',title:'巴米扬大佛摧毁',desc:'炸毁巴米扬两座千年佛像',casualties:'—',impact:'高'},{date:'2001-11-13',title:'失守喀布尔',desc:'美国为首联军入侵，塔利班政权垮台',casualties:'—',impact:'极端'},{date:'2020-02-29',title:'多哈协议签署',desc:'与美国签署和平协议',casualties:'—',impact:'极端'},{date:'2021-08-15',title:'重返喀布尔',desc:'美军撤离期间迅速攻占全国',casualties:'—',impact:'极端'},{date:'2021-08-26',title:'喀布尔机场爆炸',desc:'ISIS-K在喀布尔机场自杀式爆炸',casualties:'183人死亡（含13名美军）',impact:'极端'},{date:'2022-12',title:'禁止女性上大学',desc:'颁布政令禁止女性接受大学教育',casualties:'—',impact:'高'}],
statements:[{date:'2020-02-29',source:'与美国多哈联合声明',content:'"塔利班承诺不允许任何团体或个人利用阿富汗领土威胁美国及其盟友安全。"'},{date:'2021-08-17',source:'发言人穆贾希德',content:'"我们已获得独立。我们将不再允许任何人利用阿富汗领土攻击其他国家。我们已赦免所有人。"'},{date:'2021-09-07',source:'临时政府公告',content:'宣布成立阿富汗伊斯兰酋长国临时政府，承诺在伊斯兰教法框架内治理。'},{date:'2022-12-20',source:'高等教育部',content:'"即日起暂停女性在大学接受教育，直至进一步通知。"引发国际强烈谴责。'},{date:'2023-01',source:'阿洪扎达声明',content:'"国际社会不应干涉我们内部事务。女性教育将在伊斯兰教法框架内解决。"'}]
},
{id:'hezbollah',name:'真主党',aliases:['Hezbollah','Hizbullah','黎巴嫩真主党'],type:'恐怖组织',category:'宗教极端',subcategory:'什叶派伊斯兰主义',founded:'1982',foundedLocation:'黎巴嫩贝鲁特',status:'活跃',threatLevel:6.5,threatTrend:'上升',leader:'纳伊姆·卡西姆',formerLeaders:['阿巴斯·穆萨维（1992击毙）','哈桑·纳斯鲁拉（2024击毙）'],members:'约2万-5万（含武装人员），议会13席',operatingRegions:['黎巴嫩','叙利亚','伊拉克','也门'],ideology:'反抗以色列，建立伊朗式伊斯兰共和国，什叶派政治宗教合一',funding:'伊朗援助（年均数亿美元）、走私、合法商业、税收、毒品贸易',fundingEstimate:'年收入约10亿美元以上（含伊朗援助）',designation:['美国指定外国恐怖组织','欧盟指定军事翼为恐怖组织','阿拉伯联盟指定（部分时期）','中国未指定'],weaponLevel:'先进——火箭弹、导弹、无人机、反舰导弹',cyberCapability:'中等——有网络战能力',description:'真主党是黎巴嫩什叶派政治和军事组织，1982年以色列入侵黎巴嫩后成立。兼具政党（在黎巴嫩议会占有席位）和武装组织双重身份。受伊朗深度资助和训练，拥有全球最强大的非国家武装力量之一。2006年与以色列爆发大规模冲突。深度介入叙利亚内战支持阿萨德政权。2023-2024年与以色列再次爆发边境冲突，纳斯鲁拉被以军击毙。',
structure:[{role:'总书记（最高领袖）',current:'纳伊姆·卡西姆',desc:'政治与军事最高决策者'},{role:'舒拉委员会',current:'7名成员',desc:'最高决策机构'},{role:'政治委员会',current:'—',desc:'国内政治事务'},{role:'军事委员会/圣战委员会',current:'—',desc:'军事行动、武器管理、训练'},{role:'执行委员会',current:'—',desc:'行政、社会服务'},{role:'情报与安全机构',current:'—',desc:'情报、反间谍、海外行动'},{role:'外部安全组织',current:'—',desc:'海外恐怖袭击与情报'},{role:'媒体部门（灯塔电视台）',current:'—',desc:'卫星电视和网络媒体'},{role:'社会服务网络',current:'—',desc:'医院、学校、福利——赢基层支持'}],
events:[{date:'1983-04-18',title:'美驻贝鲁特使馆爆炸',desc:'卡车炸弹袭击美国大使馆',casualties:'63人死亡（含17名美国人）',impact:'极端'},{date:'1983-10-23',title:'贝鲁特美军军营爆炸',desc:'自杀式卡车炸弹袭击美法维和部队军营',casualties:'307人死亡（241美军+58法军）',impact:'极端'},{date:'2006-07-12',title:'黎以战争（33天战争）',desc:'越境袭击抓捕以军士兵引发大规模冲突',casualties:'约1,200黎巴嫩人死亡，165以色列人死亡',impact:'极端'},{date:'2012-07-18',title:'布尔加斯旅游大巴爆炸',desc:'保加利亚机场炸毁以色列游客大巴',casualties:'7人死亡，32人受伤',impact:'高'},{date:'2013-2018',title:'叙利亚内战介入',desc:'大规模派兵支持阿萨德政权',casualties:'数千名战士死亡',impact:'高'},{date:'2023-10-08',title:'黎以边境冲突再起',desc:'哈马斯袭击次日，真主党开始北部边境袭扰',casualties:'持续升级',impact:'高'},{date:'2024-09-17',title:'寻呼机爆炸事件',desc:'以色列对真主党通信设备发动供应链袭击',casualties:'约40人死亡，3,000余人受伤',impact:'极端'},{date:'2024-09-27',title:'纳斯鲁拉被击毙',desc:'以色列空袭贝鲁特真主党总部',casualties:'数十人死亡',impact:'极端'}],
statements:[{date:'2000-05',source:'纳斯鲁拉胜利演说',content:'"这是阿拉伯历史上第一次以色列从我们的土地上撤退，不是通过谈判而是通过抵抗。"'},{date:'2006-08',source:'纳斯鲁拉战后演说',content:'承认如果预知以色列反应不会下令抓捕士兵："如果知道反应是这样，就不会这样做。"'},{date:'2011-10',source:'纳斯鲁拉声明',content:'支持叙利亚阿萨德政权："叙利亚抵抗阵线倒台将是对抵抗运动的巨大打击。"'},{date:'2023-10-08',source:'纳斯鲁拉演说',content:'宣布声援加沙："黎巴嫩前线是为了减轻加沙的压力。"'},{date:'2024-06-19',source:'纳斯鲁拉电视讲话',content:'威胁塞浦路斯如果允许以色列使用其基地将成为"战争的一部分"。'}]
},
{id:'hamas',name:'哈马斯',aliases:['Hamas','伊斯兰抵抗运动','卡桑旅'],type:'恐怖组织',category:'宗教极端',subcategory:'逊尼派穆斯林兄弟会分支',founded:'1987',foundedLocation:'巴勒斯坦加沙',status:'活跃（战时）',threatLevel:6.0,threatTrend:'上升',leader:'叶海亚·辛瓦尔（2024击毙）/哈利勒·哈亚（代理）',formerLeaders:['艾哈迈德·亚辛（2004击毙）','阿卜杜勒·阿齐兹·兰提西（2004击毙）','伊斯梅尔·哈尼亚（2024击毙）','叶海亚·辛瓦尔（2024击毙）'],members:'武装人员约2万-4万',operatingRegions:['加沙地带','约旦河西岸','黎巴嫩','卡塔尔（政治办公室）'],ideology:'消灭以色列，建立伊斯兰巴勒斯坦国，穆斯林兄弟会巴勒斯坦分支',funding:'伊朗援助、卡塔尔援助、海外慈善网络（部分）、加密货币众筹、加沙税收',fundingEstimate:'年收入约3-5亿美元',designation:['美国指定外国恐怖组织','欧盟指定恐怖组织','以色列禁止组织','日本指定','中国未指定（视为巴勒斯坦政治力量）'],weaponLevel:'火箭弹+地道网络+轻武器+无人机',cyberCapability:'低——有网络宣传能力',description:'哈马斯是巴勒斯坦伊斯兰抵抗运动，1987年第一次巴勒斯坦大起义中成立，是穆斯林兄弟会的加沙分支。2006年赢得加沙立法选举，2007年通过武力控制加沙地带，与法塔赫分裂。以以色列为首要目标，兼具政治治理和武装斗争双重角色。其军事分支卡桑旅负责武装行动。2023年10月7日发动"阿克萨洪水"行动突袭以色列，引发2023-2024年加沙战争，造成双方数万人伤亡。',
structure:[{role:'政治局主席',current:'哈利勒·哈亚（代理）',desc:'政治领袖，对外代表'},{role:'政治局（舒拉）',current:'—',desc:'15名成员组成决策机构'},{role:'加沙地带领导层',current:'叶海亚·辛瓦尔（已击毙）',desc:'加沙军事与行政指挥'},{role:'卡桑旅（军事翼）',current:'穆罕默德·戴夫（已击毙）',desc:'军事行动总指挥'},{role:'约旦河西岸指挥部',current:'—',desc:'西岸武装活动'},{role:'海外领导层',current:'—',desc:'多哈、贝鲁特等办事处'},{role:'安全部门',current:'—',desc:'内部安全、反间谍'},{role:'媒体与宣传',current:'—',desc:'电视台、社交媒体、宣传材料'}],
events:[{date:'1989-07-06',title:'首次绑架杀害以军士兵',desc:'绑架并杀害以色列士兵阿维·萨波斯塔斯和伊兰·萨阿东',casualties:'2人死亡',impact:'高'},{date:'1994-04-06-04',title:'希伯伦清真寺屠杀报复',desc:'为报复希伯伦屠杀发动首次自杀式炸弹袭击',casualties:'8人死亡',impact:'高'},{date:'1996-02-25',title:'耶路撒冷公交车爆炸',desc:'在耶路撒冷连续发动自杀式炸弹袭击',casualties:'26人死亡',impact:'极端'},{date:'2001-2001',title:'第二次巴勒斯坦大起义',desc:'哈马斯在第二次起义中发动大量自杀式炸弹袭击',casualties:'数百以色列人死亡',impact:'极端'},{date:'2007-06-15',title:'控制加沙',desc:'武力击败法塔赫，完全控制加沙地带',casualties:'约100-200人死亡',impact:'极端'},{date:'2008-2009',title:'加沙战争（铸铅行动）',desc:'以色列大规模军事进攻加沙',casualties:'约1,400巴勒斯坦人死亡，13以色列人死亡',impact:'极端'},{date:'2014-07-08',title:'加沙战争（护刃行动）',desc:'以色列大规模军事行动，历时50天',casualties:'约2,200巴勒斯坦人死亡，73以色列人死亡',impact:'极端'},{date:'2023-10-07',title:'"阿克萨洪水"行动',desc:'哈马斯大规模突袭以色列南部，突破边境防线',casualties:'约1,200以色列人死亡，251人被绑架',impact:'极端'},{date:'2023-10-07',title:'加沙战争爆发',desc:'以色列发动"铁剑行动"大规模空袭和地面进攻加沙',casualties:'截至2024年底：4万+巴勒斯坦人死亡',impact:'极端'},{date:'2024-10-16',title:'辛瓦尔被击毙',desc:'以军在加沙南部击毙哈马斯领导人辛瓦尔',casualties:'—',impact:'极端'}],
statements:[{date:'1988-08-18',source:'哈马斯成立宪章',content:'"以色列将存在直到伊斯兰将其消灭……巴勒斯坦土地是伊斯兰信托土地，任何人都无权放弃哪怕一寸。"'},{date:'2017-05-01',source:'新政策文件',content:'接受以1967年边界建立巴勒斯坦国，不再 formally 提及穆斯林兄弟会关联，但不正式承认以色列。'},{date:'2023-10-07',source:'哈马斯军事声明',content:'宣布发动"阿克萨洪水"行动："这是对以色列占领和亵渎阿克萨清真寺的回应。"'},{date:'2023-10-07',source:'哈马斯声明',content:'"我们呼吁所有阿拉伯和伊斯兰国家以及自由世界的人民支持我们解放巴勒斯坦的斗争。"'},{date:'2024-01-21',source:'哈马斯文件',content:'提出停火方案：永久停火、以军完全撤出加沙、交换所有被扣押人员、重建加沙。'}]
},
{id:'sinaloa',name:'锡那罗亚贩毒集团',aliases:['Sinaloa Cartel','CDS','太平洋贩毒集团','古兹曼集团'],type:'犯罪组织',category:'贩毒集团',subcategory:'跨国毒品贩运',founded:'1980s',foundedLocation:'墨西哥锡那罗亚州',status:'活跃',threatLevel:8.0,threatTrend:'稳定',leader:'伊斯梅尔·赞巴达+洛斯·查帕托斯等多头目',formerLeaders:['华金·"矮子"·古兹曼（2023引渡美国）','伊格纳西奥·科罗内尔（2010击毙）'],members:'数万人（含分销网络）',operatingRegions:['墨西哥','美国','加拿大','欧洲','澳大利亚','亚洲'],ideology:'无意识形态——纯商业利益驱动',funding:'毒品贩运（可卡因、海洛因、冰毒、芬太尼）、武器走私、人口贩卖、洗钱',fundingEstimate:'年收入约30-110亿美元',designation:['美国财政部OFAC制裁','美国缉毒局重点目标','墨西哥政府打击目标'],weaponLevel:'先进——自动武器、狙击步枪、自制装甲车、无人机',cyberCapability:'中等——利用加密通信和暗网',description:'锡那罗亚贩毒集团是墨西哥最大、最具影响力的跨国犯罪组织之一，由"矮子"古兹曼等人建立。控制着从南美到北美的多条毒品贩运走廊，是美国非法毒品的主要供应者。该集团拥有准军事力量，与竞争对手和墨西哥政府军频繁交火，造成墨西哥"毒品战争"中数万人死亡。芬太尼危机使其成为美国头号禁毒目标。古兹曼2023年被引渡美国后，组织陷入内部权力争夺。',
structure:[{role:'最高领导层',current:'赞巴达+多头目',desc:'战略决策与资源分配'},{role:'安全护卫队（持枪者）',current:'—',desc:'武装护卫、暗杀、地盘争夺'},{role:'后勤与运输部门',current:'—',desc:'陆地、海上、地下隧道运输'},{role:'金融与洗钱部门',current:'—',desc:'全球洗钱网络、合法商业掩护'},{role:'供应链管理',current:'—',desc:'原料采购、加工、分销'},{role:'情报与贿赂网络',current:'—',desc:'渗透政府、收集执法情报'},{role:'网络与技术部门',current:'—',desc:'加密通信、暗网销售、监控设备'}],
events:[{date:'2001-01-19',title:'古兹曼首次越狱',desc:'"矮子"古兹曼从墨西哥最高安全级别监狱藏于洗衣车中逃出',casualties:'—',impact:'高'},{date:'2008-2009',title:'锡那罗亚-贝尔特兰·莱瓦战争',desc:'与贝尔特兰·莱瓦集团内战，锡那罗亚州暴力激增',casualties:'数千人死亡',impact:'极端'},{date:'2014-02-22',title:'古兹曼被抓获',desc:'美军和墨军在马萨特兰抓捕古兹曼',casualties:'—',impact:'高'},{date:'2015-07-11',title:'古兹曼第二次越狱',desc:'通过1.5公里长隧道从最高安全监狱逃出',casualties:'—',impact:'极端'},{date:'2016-01-08',title:'古兹曼再次被捕',desc:'墨西哥海军在洛斯莫奇斯抓捕古兹曼',casualties:'5人死亡',impact:'高'},{date:'2017-2018',title:'芬太尼危机爆发',desc:'集团大规模向美国走私芬太尼，导致过量死亡激增',casualties:'数万美国人因芬太尼过量死亡',impact:'极端'},{date:'2019-10-17',title:'奥维迪奥事件',desc:'古兹曼之子奥维迪奥被捕后，集团武装围攻库利亚坎市迫使政府释放',casualties:'约14人死亡',impact:'极端'},{date:'2023-09',title:'古兹曼引渡美国',desc:'"矮子"古兹曼被引渡至美国受审',casualties:'—',impact:'高'},{date:'2024-07-25',title:'赞巴达被捕',desc:'联合创始人赞巴达在美国被诱捕',casualties:'—',impact:'极端'}],
statements:[{date:'2016-01',source:'古兹曼被捕后采访',content:'"我出口的毒品比任何人都多。但我不是暴力的制造者，是需求方的问题。"'},{date:'2019-10',source:'CDS武装人员',content:'围攻库利亚坎期间在社交媒体发布武装巡逻视频，展示对城市的控制力。'},{date:'2023-09',source:'CDS内部通讯（ intercepted）',content:'讨论芬太尼生产："我们需要控制纯度，太多客户死了会影响生意。"'},{date:'2024-08',source:'赞巴达被捕后声明',content:'声称被古兹曼之子绑架至美国，"我是被武力带到这里来的"。'}]
},
{id:'yamaguchi',name:'山口组',aliases:['Yamaguchi-gumi','六代目山口组','神户山口组'],type:'犯罪组织',category:'黑社会组织',subcategory:'日本指定暴力团',founded:'1915',foundedLocation:'日本神户',status:'分裂活跃',threatLevel:7.0,threatTrend:'下降',leader:'筱田建市（司忍）',formerLeaders:['初代山口春吉','三代目田冈一雄','五代目渡边芳则'],members:'约4,000-5,000（全盛期约4万）',operatingRegions:['日本全国','东南亚','美国（夏威夷/加州）'],ideology:'极道精神——"仁义"、任侠、 hierarchy 原则（现代趋于商业利益）',funding:'保护费、建筑业敲诈、赌博、毒品贩运、色情产业、合法商业、股票操纵',fundingEstimate:'年收入约数十亿美元',designation:['日本指定暴力团','美国财政部制裁（跨国有组织犯罪）'],weaponLevel:'枪支（非法持有）、刀具',cyberCapability:'低——传统犯罪模式',description:'山口组是日本最大的指定暴力团（黑社会组织），成立于1915年神户。鼎盛时期拥有约4万成员，控制日本有组织犯罪的大部分市场份额。组织有严格等级制度（若头、舍弟、直参等）和行为准则。2005年筱田建市就任第六代组长后强化合法商业经营。2015年内部发生大分裂，神户山口组脱离，导致日本黑社会间暴力冲突增加。日本《暴力团排除条例》实施后，成员大幅减少，组织被迫更多转向合法商业。',
structure:[{role:'组长（最高领袖）',current:'筱田建市（司忍）',desc:'绝对权威，最终决策者'},{role:'若头（副组长）',current:'—',desc:'实际运营总指挥'},{role:'舍弟',current:'—',desc:'组长顾问，资深直系组长'},{role:'直参（直系组长）',current:'约70-90名',desc:'各二级团体领袖，拥有自己势力'},{role:'若中',current:'—',desc:'直参下属的三级组长'},{role:'构成员',current:'—',desc:'普通成员'},{role:'旗下企业',current:'—',desc:'合法商业掩护——房地产、金融、建筑'},{role:'神户山口组（分裂派）',current:'—',desc:'2015年脱离的竞争派系'}],
events:[{date:'1985-01-26',title:'一乘会事件',desc:'竹中正久组长在大阪遭敌对组织暗杀',casualties:'组长及2名保镖死亡',impact:'高'},{date:'2005-08-27',title:'筱田建市就任六代目',desc:'筱田建市在服刑期间被选为第六代组长',casualties:'—',impact:'高'},{date:'2006-12',title:'司忍出狱',desc:'筱田建市刑满出狱，正式执掌山口组',casualties:'—',impact:'高'},{date:'2011-04',title:'3·11后赈灾',desc:'东日本大地震后山口组率先向灾区运送物资',casualties:'—',impact:'中'},{date:'2015-08-27',title:'山口组大分裂',desc:'13个直参团体脱离成立"神户山口组"',casualties:'—',impact:'极端'},{date:'2015-2017',title:'分裂后暴力冲突',desc:'两派之间发生多起枪击和袭击事件',casualties:'数人死亡，多人受伤',impact:'高'},{date:'2020-2022',title:'疫情期合法转型',desc:'新冠期间经营口罩生意、参与防疫物资配送',casualties:'—',impact:'中'},{date:'2024',title:'成员持续减少',desc:'日本全国暴力团成员降至约2万人以下',casualties:'—',impact:'中'}],
statements:[{date:'2011-03',source:'山口组声明',content:'东日本大地震后发布声明："我们虽然是暴力团，但也是日本人。灾区需要帮助，我们不会袖手旁观。"'},{date:'2015-09',source:'山口组分裂后通知',content:'向日本警方提交分裂报告，正式承认神户山口组脱离。'},{date:'2020-04',source:'山口组相关',content:'新冠疫情期间向医疗机构和养老院捐赠口罩和消毒液。'},{date:'2023',source:'筱田建市内部训令',content:'禁止成员使用社交媒体炫耀财富，要求低调行事以应对执法压力。'}]
},
{id:'ndrangheta',name:'光荣会',aliases:["'Ndrangheta",'卡拉布里亚黑手党','拉德里纳'],type:'犯罪组织',category:'黑社会组织',subcategory:'意大利有组织犯罪',founded:'19世纪末',foundedLocation:'意大利卡拉布里亚',status:'活跃',threatLevel:7.5,threatTrend:'上升',leader:'多头目制（三个"曼达门托"联盟）',formerLeaders:['萨韦里奥·马莫利（已抓捕）','多梅尼科·韦特拉莱（已抓捕）'],members:'约6,000+（含关联人员超过1万）',operatingRegions:['意大利（卡拉布里亚/伦巴第）','德国','荷兰','澳大利亚','加拿大','美国','南美'],ideology:'"缄默法则"（Omertà）、血亲宗族、家族忠诚',funding:'可卡因贩运（控制欧洲80%市场）、武器走私、洗钱、公共工程腐败、绑架',fundingEstimate:'年收入约500-700亿美元',designation:['意大利反黑法指定','欧盟有组织犯罪重点打击目标','美国FBI跨国犯罪目标'],weaponLevel:'枪支+炸弹+纵火',cyberCapability:'低——传统犯罪模式但利用现代金融工具洗钱',description:'光荣会是意大利三大黑手党组织中最强大和最富有的，发源于卡拉布里亚地区。以血缘家族为组织基础，极难渗透。据估计控制着欧洲可卡因进口的80%份额，是全球最富有的犯罪组织之一。其全球网络覆盖南美到欧洲的毒品供应链。与拉美贩毒集团直接合作进口可卡因。通过合法商业（房地产、餐饮、金融）洗白巨额资金。2019年意大利最大反黑行动"Rinascita-Scott"逮捕334名成员。',
structure:[{role:'最高层面（Crime/Il Crimine）',current:'—',desc:'全球战略协调机构，每年召开峰会'},{role:'三个曼达门托',current:'—',desc:'La（平原）、Ionica（爱奥尼亚）、Montana（山区）三大联盟'},{role:'曼达门托领导（Capo locale）',current:'—',desc:'各区域负责人'},{role:'家族（Famiglia）',current:'—',desc:'以血缘为纽头的核心犯罪单元'},{role:'犯罪活动部门',current:'—',desc:'毒品、武器、洗钱、公共工程各条线'},{role:'海外分支',current:'—',desc:'德国、澳大利亚、加拿大、美国等'},{role:'合法商业网络',current:'—',desc:'房地产、金融、餐饮等掩护企业'}],
events:[{date:'1991-2007',title:'第二次黑手党战争',desc:'光荣会内部各家族长期血腥内战',casualties:'约500-600人死亡',impact:'极端'},{date:'2007-08-15',title:'杜伊斯堡屠杀',desc:'在德国杜伊斯堡意大利餐厅外枪杀6名敌对家族成员',casualties:'6人死亡',impact:'极端'},{date:'2010-07-13',title:'利贝拉反黑行动',desc:'意大利警方在卡拉布里亚大规模反黑行动',casualties:'—',impact:'高'},{date:'2014-04',title:'教皇方济各访问',desc:'教皇方济各亲自前往卡拉布里亚谴责光荣会',casualties:'—',impact:'中'},{date:'2019-12-19',title:'Rinascita-Scott行动',desc:'意大利最大规模反黑行动，逮捕334名成员',casualties:'—',impact:'极端'},{date:'2021-10-12',title:'欧洲可卡因最大查获',desc:'意大利警方查获5.5吨可卡因，与光荣会有关',casualties:'—',impact:'高'},{date:'2023-10',title:'德国大规模打击',desc:'德国警方在多地搜查光荣会关联设施',casualties:'—',impact:'高'}],
statements:[{date:'2014-03-21',source:'教皇方济各',content:'"那些属于光荣会的人不在天主的共融之中，他们是分裂的基督徒，他们的称谓是犹大的称谓。"'},{date:'2019-12-19',source:'意大利检察官声明',content:'"Rinascita-Scott行动揭示了一个完整的平行国家——光荣会在卡拉布里亚拥有自己的司法、立法和行政系统。"'},{date:'2021-10',source:'欧洲刑警组织报告',content:'"光荣会控制了欧洲约80%的可卡因进口，其全球网络延伸至南美原产地和欧洲所有主要市场。"'}]
}
]};

/* ===== 渲染逻辑 ===== */
const THREATS={
  filterType:'all',filterCat:'all',searchQuery:'',detailTab:'basic',selectedId:null,
  get filtered(){return THREAT_DATA.organizations.filter(o=>{
    if(THREATS.filterType!=='all'&&o.type!==THREATS.filterType)return false;
    if(THREATS.filterCat!=='all'&&o.category!==THREATS.filterCat)return false;
    if(THREATS.searchQuery){
      const q=THREATS.searchQuery.toLowerCase();
      const s=(o.name+o.aliases.join('')+o.operatingRegions.join('')+o.leader+o.category).toLowerCase();
      if(!s.includes(q))return false;
    }
    return true;
  })},
  get allRegions(){const r=new Set();THREAT_DATA.organizations.forEach(o=>o.operatingRegions.forEach(x=>r.add(x)));return[...r].sort()},
  threatColor(l){if(l>=9)return'#ff3355';if(l>=7.5)return'#ff5544';if(l>=6.5)return'#ff8800';if(l>=5.5)return'#ffcc00';return'#00ff9f'},
  threatLabel(l){if(l>=9)return'极高';if(l>=7.5)return'极高';if(l>=6.5)return'高';if(l>=5.5)return'中高';return'中'},
  threatBadge(l){const c=this.threatColor(l),t=this.threatLabel(l);return'<span class="badge" style="background:'+c+'22;color:'+c+';border:1px solid '+c+'55">'+t+' ('+l+')</span>'},
  impactBadge(i){const m={'极端':'b-red','高':'b-orange','中':'b-yellow'};return'<span class="badge '+(m[i]||'b-blue')+'">'+i+'</span>'},

  render(){
    const c=document.getElementById('threatorgs-content');if(!c)return;
    var bc=document.getElementById('sb-threat-count');if(bc){bc.textContent=THREAT_DATA.organizations.length;bc.classList.remove('zero');}
    const orgs=this.filtered;
    const terror=THREAT_DATA.organizations.filter(o=>o.type==='恐怖组织').length;
    const crime=THREAT_DATA.organizations.filter(o=>o.type==='犯罪组织').length;
    const active=THREAT_DATA.organizations.filter(o=>o.status.includes('活跃')||o.status.includes('执政')).length;
    const avgT=(THREAT_DATA.organizations.reduce((s,o)=>s+o.threatLevel,0)/THREAT_DATA.organizations.length).toFixed(1);
    const allEvents=THREAT_DATA.organizations.reduce((s,o)=>s+o.events.length,0);
    const allStatements=THREAT_DATA.organizations.reduce((s,o)=>s+o.statements.length,0);

    c.innerHTML=`
    <div class="stat-grid">
      <div class="stat-card"><div class="stat-ic" style="background:rgba(255,51,85,0.12);color:var(--red)">🎯</div><div class="stat-info"><div class="stat-label">威胁组织总数</div><div class="stat-val" style="color:var(--red)">${THREAT_DATA.organizations.length}</div><div class="stat-sub">恐怖组织 ${terror} · 犯罪组织 ${crime}</div></div></div>
      <div class="stat-card"><div class="stat-ic" style="background:rgba(255,136,0,0.12);color:var(--orange)">⚡</div><div class="stat-info"><div class="stat-label">活跃威胁</div><div class="stat-val" style="color:var(--orange)">${active}</div><div class="stat-sub">当前正在活动</div></div></div>
      <div class="stat-card"><div class="stat-ic" style="background:rgba(0,212,255,0.12);color:var(--cyan)">📊</div><div class="stat-info"><div class="stat-label">平均威胁指数</div><div class="stat-val" style="color:var(--cyan)">${avgT}</div><div class="stat-sub">满分10.0</div></div></div>
      <div class="stat-card"><div class="stat-ic" style="background:rgba(179,102,255,0.12);color:var(--purple)">💣</div><div class="stat-info"><div class="stat-label">恐怖/犯罪事件</div><div class="stat-val" style="color:var(--purple)">${allEvents}</div><div class="stat-sub">已记录重大事件</div></div></div>
      <div class="stat-card"><div class="stat-ic" style="background:rgba(0,255,159,0.12);color:var(--green)">🌍</div><div class="stat-info"><div class="stat-label">覆盖国家/地区</div><div class="stat-val" style="color:var(--green)">${this.allRegions.length}</div><div class="stat-sub">全球分布</div></div></div>
      <div class="stat-card"><div class="stat-ic" style="background:rgba(255,204,0,0.12);color:var(--yellow)">📢</div><div class="stat-info"><div class="stat-label">对外言论记录</div><div class="stat-val" style="color:var(--yellow)">${allStatements}</div><div class="stat-sub">声明/布道/出版物</div></div></div>
    </div>

    <div class="card">
      <div class="card-tt"><span class="ic">🎯</span>威胁组织数据库 <span style="font-size:10px;color:var(--text3);font-weight:400;margin-left:6px">— 恐怖组织与犯罪组织的结构化情报档案</span></div>
      <div class="flex gap-8 mb-12 wrap items-center">
        <div class="chip ${this.filterType==='all'?'active':''}" onclick="THREATS.setFilter('type','all')">全部</div>
        <div class="chip ${this.filterType==='恐怖组织'?'active':''}" onclick="THREATS.setFilter('type','恐怖组织')">恐怖组织</div>
        <div class="chip ${this.filterType==='犯罪组织'?'active':''}" onclick="THREATS.setFilter('type','犯罪组织')">犯罪组织</div>
        <div style="width:1px;height:20px;background:var(--border);margin:0 4px"></div>
        <div class="chip ${this.filterCat==='all'?'active':''}" onclick="THREATS.setFilter('cat','all')">全部分类</div>
        <div class="chip ${this.filterCat==='宗教极端'?'active':''}" onclick="THREATS.setFilter('cat','宗教极端')">宗教极端</div>
        <div class="chip ${this.filterCat==='贩毒集团'?'active':''}" onclick="THREATS.setFilter('cat','贩毒集团')">贩毒集团</div>
        <div class="chip ${this.filterCat==='黑社会组织'?'active':''}" onclick="THREATS.setFilter('cat','黑社会组织')">黑社会组织</div>
        <input class="input" placeholder="🔍 搜索组织名称、别名、地区..." style="width:220px;margin-left:auto" value="${this.searchQuery}" oninput="THREATS.searchQuery=this.value;THREATS.renderGrid()">
      </div>
      <div id="threat-grid"></div>
    </div>
    `;
    this.renderGrid();
  },

  renderGrid(){
    const el=document.getElementById('threat-grid');if(!el)return;
    const orgs=this.filtered;
    if(!orgs.length){el.innerHTML='<div class="empty"><div class="ic">🔍</div><div>未找到匹配的组织</div></div>';return}
    el.innerHTML='<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));gap:12px">'+orgs.map(o=>{
      const tc=this.threatColor(o.threatLevel);
      return `<div class="threat-org-card" style="background:var(--panel);border:1px solid var(--border);border-left:4px solid ${tc};border-radius:10px;padding:14px;cursor:pointer;transition:.2s" onclick="THREATS.showDetail('${o.id}')">
        <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:8px">
          <div>
            <div style="font-size:15px;font-weight:700;color:var(--text)">${o.name}</div>
            <div style="font-size:10px;color:var(--text3);margin-top:2px">${o.aliases.slice(0,3).join(' · ')}</div>
          </div>
          ${this.threatBadge(o.threatLevel)}
        </div>
        <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px">
          <span class="badge ${o.type==='恐怖组织'?'b-red':'b-purple'}">${o.type}</span>
          <span class="badge b-blue">${o.category}</span>
          <span class="badge ${o.status.includes('活跃')?'b-orange':o.status.includes('执政')?'b-red':'b-green'}">${o.status}</span>
        </div>
        <div style="font-size:11px;color:var(--text2);line-height:1.5;margin-bottom:8px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">${o.description}</div>
        <div style="display:flex;justify-content:space-between;font-size:10px;color:var(--text3);border-top:1px solid var(--border);padding-top:8px">
          <span>📅 成立 ${o.founded}</span>
          <span>👤 ${o.members}</span>
          <span>🌍 ${o.operatingRegions.length}地区</span>
          <span>💣 ${o.events.length}事件</span>
        </div>
      </div>`;
    }).join('')+'</div>';
  },

  setFilter(dim,val){
    if(dim==='type')this.filterType=val;
    if(dim==='cat')this.filterCat=val;
    this.render();
  },

  showDetail(id){
    const o=THREAT_DATA.organizations.find(x=>x.id===id);if(!o)return;
    this.selectedId=id;this.detailTab='basic';
    const modal=document.getElementById('modal');
    document.getElementById('modal-tt').innerHTML='🎯 '+o.name+' <span style="font-size:12px;color:var(--text2);font-weight:400">'+o.aliases.join(' / ')+'</span>';
    document.getElementById('modal-bd').innerHTML=this.renderDetail(o);
    modal.classList.add('show');
    const box=modal.querySelector('.modal-box');
    box.style.maxWidth='920px';
  },

  renderDetail(o){
    const tc=this.threatColor(o.threatLevel);
    return `
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px">
      ${this.threatBadge(o.threatLevel)}
      <span class="badge ${o.type==='恐怖组织'?'b-red':'b-purple'}">${o.type}</span>
      <span class="badge b-blue">${o.category}</span>
      <span class="badge ${o.status.includes('活跃')?'b-orange':o.status.includes('执政')?'b-red':'b-green'}">${o.status}</span>
      <span class="badge b-yellow">趋势: ${o.threatTrend}</span>
    </div>
    <div class="dc-tabs" style="margin-bottom:14px">
      <div class="dc-tab ${this.detailTab==='basic'?'active':''}" onclick="THREATS.switchTab('basic')">📋 基本情况</div>
      <div class="dc-tab ${this.detailTab==='structure'?'active':''}" onclick="THREATS.switchTab('structure')">🏗️ 组织架构</div>
      <div class="dc-tab ${this.detailTab==='events'?'active':''}" onclick="THREATS.switchTab('events')">💣 恐怖事件</div>
      <div class="dc-tab ${this.detailTab==='statements'?'active':''}" onclick="THREATS.switchTab('statements')">📢 对外言论</div>
      <div class="dc-tab ${this.detailTab==='assess'?'active':''}" onclick="THREATS.switchTab('assess')">📊 威胁评估</div>
    </div>
    <div id="threat-detail-content">${this.renderTab(o)}</div>`;
  },

  switchTab(tab){
    this.detailTab=tab;
    const o=THREAT_DATA.organizations.find(x=>x.id===this.selectedId);
    if(!o)return;
    const el=document.getElementById('threat-detail-content');
    if(el)el.innerHTML=this.renderTab(o);
    document.querySelectorAll('#modal .dc-tab').forEach((t,i)=>{
      const tabs=['basic','structure','events','statements','assess'];
      t.classList.toggle('active',tabs[i]===tab);
    });
  },

  renderTab(o){
    switch(this.detailTab){
      case'basic':return this.tabBasic(o);
      case'structure':return this.tabStructure(o);
      case'events':return this.tabEvents(o);
      case'statements':return this.tabStatements(o);
      case'assess':return this.tabAssess(o);
      default:return'';
    }
  },

  tabBasic(o){
    const row=(label,val)=>`<div style="display:flex;padding:6px 0;border-bottom:1px solid var(--border)"><div style="width:110px;flex-shrink:0;color:var(--text2);font-size:11px">${label}</div><div style="flex:1;font-size:12px;color:var(--text)">${val||'—'}</div></div>`;
    return `<div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:14px;margin-bottom:12px;font-size:12px;line-height:1.7;color:var(--text2)">${o.description}</div>
    <div style="background:var(--panel2);border:1px solid var(--border);border-radius:8px;padding:12px 16px">
      ${row('组织名称',o.name)}
      ${row('别名/曾用名',o.aliases.join('、'))}
      ${row('组织类型','<span class="badge '+(o.type==='恐怖组织'?'b-red':'b-purple')+'">'+o.type+'</span>')}
      ${row('主要分类',o.category)}
      ${row('细分类型',o.subcategory)}
      ${row('成立时间',o.founded)}
      ${row('成立地点',o.foundedLocation)}
      ${row('当前状态','<span class="badge '+(o.status.includes('活跃')?'b-orange':o.status.includes('执政')?'b-red':'b-green')+'">'+o.status+'</span>')}
      ${row('现任领导人',o.leader)}
      ${row('前任领导人',o.formerLeaders.join('<br>'))}
      ${row('成员规模',o.members)}
      ${row('活动区域','<div style="display:flex;gap:4px;flex-wrap:wrap">'+o.operatingRegions.map(r=>'<span class="badge b-blue">'+r+'</span>').join('')+'</div>')}
      ${row('意识形态',o.ideology)}
      ${row('资金来源',o.funding)}
      ${row('资金规模',o.fundingEstimate)}
      ${row('武器水平',o.weaponLevel)}
      ${row('网络能力',o.cyberCapability)}
      ${row('国际认定','<div style="display:flex;gap:4px;flex-wrap:wrap">'+o.designation.map(d=>'<span class="badge b-red">'+d+'</span>').join('')+'</div>')}
    </div>`;
  },

  tabStructure(o){
    return `<div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:14px;margin-bottom:12px;font-size:12px;line-height:1.7;color:var(--text2)">
      ${o.name}的组织架构采用层级分明的管理体系，各层级职责明确。以下是该组织的核心架构与职责分工：
    </div>
    <div class="timeline-container">
      ${o.structure.map((s,i)=>{
        const colors=['var(--red)','var(--orange)','var(--yellow)','var(--cyan)','var(--green)','var(--purple)','var(--cyan)','var(--green)','var(--purple)'];
        const c=colors[i%colors.length];
        return `<div class="timeline-item">
          <div class="timeline-dot" style="background:${c};color:${c}"></div>
          <div class="timeline-content" style="border-left:3px solid ${c}">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px">
              <div style="font-size:13px;font-weight:700;color:${c}">${s.role}</div>
              <span style="font-size:10px;color:var(--text3)">层级 ${i+1}</span>
            </div>
            <div style="font-size:12px;color:var(--text);margin-bottom:3px">现任：${s.current}</div>
            <div style="font-size:11px;color:var(--text2)">${s.desc}</div>
          </div>
        </div>`;
      }).join('')}
    </div>`;
  },

  tabEvents(o){
    return `<div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:14px;margin-bottom:12px;font-size:12px;line-height:1.7;color:var(--text2)">
      ${o.name}已记录重大事件 <span style="color:var(--cyan);font-weight:700">${o.events.length}</span> 起，按时间线排列如下：
    </div>
    <div class="timeline-container">
      ${o.events.map((e,i)=>{
        const ic=e.impact==='极端'?'var(--red)':e.impact==='高'?'var(--orange)':'var(--yellow)';
        return `<div class="timeline-item">
          <div class="timeline-dot" style="background:${ic};color:${ic}"></div>
          <div class="timeline-content" style="border-left:3px solid ${ic}">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px">
              <div style="font-size:13px;font-weight:700;color:var(--text)">${e.title}</div>
              <div style="display:flex;gap:4px"><span style="font-size:10px;color:var(--text3);font-family:Courier New,monospace">${e.date}</span>${this.impactBadge(e.impact)}</div>
            </div>
            <div style="font-size:12px;color:var(--text2);line-height:1.5;margin-bottom:4px">${e.desc}</div>
            ${e.casualties&&e.casualties!=='—'?`<div style="font-size:11px;color:var(--red);margin-top:4px">☠️ 伤亡：${e.casualties}</div>`:''}
          </div>
        </div>`;
      }).join('')}
    </div>`;
  },

  tabStatements(o){
    return `<div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:14px;margin-bottom:12px;font-size:12px;line-height:1.7;color:var(--text2)">
      ${o.name}的对外言论/声明记录 <span style="color:var(--cyan);font-weight:700">${o.statements.length}</span> 条，包括公开声明、布道、出版物声明和媒体声明。
    </div>
    <div style="display:flex;flex-direction:column;gap:10px">
      ${o.statements.map((s,i)=>{
        return `<div style="background:var(--panel2);border:1px solid var(--border);border-left:3px solid var(--cyan);border-radius:8px;padding:12px 14px">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
            <div style="display:flex;align-items:center;gap:8px">
              <div style="width:28px;height:28px;border-radius:6px;background:rgba(0,212,255,0.12);display:flex;align-items:center;justify-content:center;font-size:14px">📢</div>
              <div>
                <div style="font-size:12px;font-weight:600;color:var(--cyan)">${s.source}</div>
                <div style="font-size:10px;color:var(--text3);font-family:Courier New,monospace">${s.date}</div>
              </div>
            </div>
            <span style="font-size:10px;color:var(--text3)">声明 #${String(i+1).padStart(2,'0')}</span>
          </div>
          <div style="font-size:12px;color:var(--text);line-height:1.7;background:var(--bg);padding:10px 14px;border-radius:6px;border:1px solid var(--border)">"${s.content}"</div>
        </div>`;
      }).join('')}
    </div>`;
  },

  tabAssess(o){
    const metrics=[
      {label:'意识形态影响力',val:Math.min(10,o.threatLevel+0.5),desc:'极端思想传播与招募能力'},
      {label:'军事/行动能力',val:o.threatLevel,desc:'武装力量与作战能力'},
      {label:'资金实力',val:Math.min(10,o.threatLevel-1),desc:'资金获取与运作规模'},
      {label:'组织凝聚力',val:Math.min(10,o.threatLevel+1),desc:'内部团结与执行力'},
      {label:'国际威胁度',val:o.threatLevel,desc:'对国际安全的威胁程度'},
      {label:'网络/宣传能力',val:Math.min(10,o.threatLevel-2),desc:'网络宣传与社交媒体运用'}
    ];
    const regions=o.operatingRegions.map(r=>({name:r,threat:o.threatLevel*(0.7+Math.random()*0.3)}));
    return `<div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:14px;margin-bottom:12px;font-size:12px;line-height:1.7;color:var(--text2)">
      综合威胁评估指数：<span style="font-size:18px;font-weight:800;color:${this.threatColor(o.threatLevel)}">${o.threatLevel}</span>/10.0 — <span style="color:${this.threatColor(o.threatLevel)};font-weight:600">${this.threatLabel(o.threatLevel)}</span>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
      <div style="background:var(--panel2);border:1px solid var(--border);border-radius:8px;padding:14px">
        <div style="font-size:13px;font-weight:700;color:var(--cyan);margin-bottom:12px">📈 威胁能力评估</div>
        ${metrics.map(m=>{
          const pct=m.val*10;
          const c=this.threatColor(m.val);
          return `<div style="margin-bottom:10px">
            <div style="display:flex;justify-content:space-between;margin-bottom:4px">
              <span style="font-size:11px;color:var(--text2)">${m.label}</span>
              <span style="font-size:11px;font-weight:700;color:${c}">${m.val.toFixed(1)}</span>
            </div>
            <div class="risk-bar" style="width:100%;background:var(--bg)"><div class="risk-bar-fill" style="width:${pct}%;background:${c}"></div></div>
            <div style="font-size:9px;color:var(--text3);margin-top:2px">${m.desc}</div>
          </div>`;
        }).join('')}
      </div>
      <div style="background:var(--panel2);border:1px solid var(--border);border-radius:8px;padding:14px">
        <div style="font-size:13px;font-weight:700;color:var(--cyan);margin-bottom:12px">🌍 活动区域威胁分布</div>
        ${regions.map(r=>{
          const c=this.threatColor(r.threat);
          return `<div style="margin-bottom:8px">
            <div style="display:flex;justify-content:space-between;margin-bottom:3px">
              <span style="font-size:11px;color:var(--text2)">${r.name}</span>
              <span style="font-size:11px;font-weight:700;color:${c}">${r.threat.toFixed(1)}</span>
            </div>
            <div class="risk-bar" style="width:100%;background:var(--bg)"><div class="risk-bar-fill" style="width:${r.threat*10}%;background:${c}"></div></div>
          </div>`;
        }).join('')}
        <div style="margin-top:12px;padding-top:10px;border-top:1px solid var(--border);font-size:11px;color:var(--text2);line-height:1.6">
          <div style="font-weight:600;color:var(--cyan);margin-bottom:4px">📌 评估摘要</div>
          资金规模：${o.fundingEstimate}<br>
          武器水平：${o.weaponLevel}<br>
          网络能力：${o.cyberCapability}<br>
          威胁趋势：<span style="color:${o.threatTrend==='上升'?'var(--red)':o.threatTrend==='下降'?'var(--green)':'var(--yellow)'}">${o.threatTrend}</span>
        </div>
      </div>
    </div>
    <div style="background:var(--red-bg);border:1px solid rgba(255,51,85,0.2);border-radius:8px;padding:14px;margin-top:12px">
      <div style="font-size:13px;font-weight:700;color:var(--red);margin-bottom:8px">⚠️ 国际认定情况</div>
      <div style="display:flex;gap:6px;flex-wrap:wrap">
        ${o.designation.map(d=>'<span class="badge b-red">'+d+'</span>').join('')}
      </div>
    </div>`;
  }
};

/* ===== 集成说明 ===== */
/* 威胁组织现在是监测中心的独立一级栏目（view-threatorgs）
   app.js 的 navigateTo('threatorgs') 会调用 THREATS.render()
   不再需要覆写 MONITOR.renderThreatOrgs */
