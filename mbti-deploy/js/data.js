// ============================================================
// CS2选手MBTI人格测试 - 数据文件 v3（完整修复版）
// 含25道原创CS2场景题 + 每题1道延展性追问
// 选项值：A/B=左侧字母(I/S/T/J)，C/D=右侧字母(E/N/F/P)
// getDimScore：A/B→0（左侧），C/D→1（右侧）
// 追问揭示更深层偏好，权重1.5
// ============================================================

const CS2MBTI = {

    config: {
        totalQuestions: 29,          // 总题目数（含4道区分题）
        showTimer: true,
        autoAdvance: true,
        autoAdvanceDelay: 350
    },

    mbtiNames: {
        "INTJ": "战略家 / 策划者",
        "INTP": "逻辑学家 / 思想者",
        "ENTJ": "指挥官 / 领导者",
        "ENTP": "辩论家 / 创新者",
        "INFJ": "提倡者 / 理想主义者",
        "INFP": "调停者 / 哲人",
        "ENFJ": "主人公 / 领袖",
        "ENFP": "竞选者 / 热情者",
        "ISTJ": "物流师 / 守护者",
        "ISFJ": "守卫者 / 照顾者",
        "ESTJ": "总经理 / 执行者",
        "ESFJ": "执政官 / 供给者",
        "ISTP": "鉴赏家 / 探险家",
        "ISFP": "艺术家 / 探险家",
        "ESTP": "企业家 / 挑战者",
        "ESFP": "表演者 / 活跃者"
    },

    questions: [

        // ═══════════════ 第一题：能量倾向 E/I ═══════════════
        // I：内向独处  E：外向社交
        {
            id: 1, category: "能量倾向 E/I", dimension: "EI",
            text: "决赛前夜，你更倾向于？",
            options: [
                { key: "A", value: "I", text: "安静待着，提前入睡，保持最佳状态" },
                { key: "B", value: "I", text: "默默看录像，一个人静静回顾关键回合" },
                { key: "C", value: "E", text: "和队友一起吃饭，互相打气" },
                { key: "D", value: "E", text: "拉着队友出去散步聊天，释放压力" }
            ],
            followUp: {
                text: "追问：和一个完全陌生的新队友初次交流，你更在意？",
                options: [
                    { key: "A", value: "I", text: "他的游戏风格和习惯，聊游戏内容" },
                    { key: "B", value: "I", text: "他私下是什么性格，好不好相处" },
                    { key: "C", value: "E", text: "他打过什么成绩，有什么代表作" },
                    { key: "D", value: "E", text: "他有什么特别的要求或者癖好" }
                ],
                insight: "这揭示了你社交的切入点——以「事」还是「人」会友"
            }
        },

        // ═══════════════ 第二题：能量倾向 E/I ═══════════════
        {
            id: 2, category: "能量倾向 E/I", dimension: "EI",
            text: "刚刚赢下冠军，队友提议去聚餐庆祝，你会？",
            options: [
                { key: "A", value: "I", text: "礼貌拒绝，想回家安静休息" },
                { key: "B", value: "I", text: "不去了，一个人默默回味这份快乐" },
                { key: "C", value: "E", text: "爽快答应，这种时刻当然要一起嗨" },
                { key: "D", value: "E", text: "去，待一会就走，一个人回家消化" }
            ],
            followUp: {
                text: "追问：你更享受庆祝活动中的哪个环节？",
                options: [
                    { key: "A", value: "I", text: "等人群散去后，在心里默默回味" },
                    { key: "B", value: "I", text: "第二天醒来，看到奖杯还在桌上" },
                    { key: "C", value: "E", text: "大家一起举杯喊口号的那一刻" },
                    { key: "D", value: "E", text: "拍搞怪合影，发社交媒体纪念" }
                ],
                insight: "这揭示了你情绪体验的「内驱力」——外部互动还是内心感受"
            }
        },

        // ═══════════════ 第三题：能量倾向 E/I ═══════════════
        {
            id: 3, category: "能量倾向 E/I", dimension: "EI",
            text: "当你回顾职业生涯时，你更在意？",
            options: [
                { key: "A", value: "I", text: "个人数据和成长，有没变强" },
                { key: "B", value: "I", text: "哪几场比赛是自己打得最满意的" },
                { key: "C", value: "E", text: "团队的氛围和与队友之间的回忆" },
                { key: "D", value: "E", text: "和队友一起经历了哪些难忘的瞬间" }
            ],
            followUp: {
                text: "追问：如果可以重来，你更想改变哪一段经历？",
                options: [
                    { key: "A", value: "I", text: "那场我没打好、影响了整个赛季的比赛" },
                    { key: "B", value: "I", text: "某个我没敢做、后来证明是对的决定" },
                    { key: "C", value: "E", text: "那个我没能和队友好好告别的瞬间" },
                    { key: "D", value: "E", text: "那场输掉的决赛，我永远不会忘记" }
                ],
                insight: "这揭示了你对「遗憾」的定义——自我实现还是关系连结"
            }
        },

        // ═══════════════ 第四题：能量倾向 E/I ═══════════════
        {
            id: 4, category: "能量倾向 E/I", dimension: "EI",
            text: "打比赛时，你更习惯哪种沟通方式？",
            options: [
                { key: "A", value: "I", text: "除非必要不多说话，专注自己的操作" },
                { key: "B", value: "I", text: "报关键信息即可，不需要太多废话" },
                { key: "C", value: "E", text: "多报点，多指挥，让队友知道你的想法" },
                { key: "D", value: "E", text: "用声音带动全队气氛，给大家信心" }
            ],
            followUp: {
                text: "追问：当你意识到自己今天状态很差时，你会？",
                options: [
                    { key: "A", value: "I", text: "默默调整，不多说话，不影响队友" },
                    { key: "B", value: "I", text: "自己扛住，告诉自己下个回合会好" },
                    { key: "C", value: "E", text: "直接告诉队友我状态不好，大家多担待" },
                    { key: "D", value: "E", text: "主动要求换位置，服从团队安排" }
                ],
                insight: "这揭示了你处理「脆弱」的方式——独自消化还是向外求助"
            }
        },

        // ═══════════════ 第五题：能量倾向 E/I ═══════════════
        {
            id: 5, category: "能量倾向 E/I", dimension: "EI",
            text: "训练结束后，你更倾向于？",
            options: [
                { key: "A", value: "I", text: "回家自己看Demo录像，一个人消化" },
                { key: "B", value: "I", text: "在基地再待一会，看看回放整理思路" },
                { key: "C", value: "E", text: "和队友一起去吃点东西，边吃边复盘" },
                { key: "D", value: "E", text: "拉着队友开黑，趁热打铁多磨合" }
            ],
            followUp: {
                text: "追问：一个人安静独处时，你通常会？",
                options: [
                    { key: "A", value: "I", text: "听音乐，让脑子完全放空" },
                    { key: "B", value: "I", text: "翻看比赛录像或者职业联赛" },
                    { key: "C", value: "E", text: "刷社交媒体，看看队友在发什么" },
                    { key: "D", value: "E", text: "给家人或朋友打个视频电话" }
                ],
                insight: "这揭示了你的「充电方式」——独处时向内探索还是保持连结"
            }
        },

        // ═══════════════ 第六题：能量倾向 E/I ═══════════════
        {
            id: 6, category: "能量倾向 E/I", dimension: "EI",
            text: "输掉比赛后，你更想？",
            options: [
                { key: "A", value: "I", text: "一个人安静待着，想想哪里出了问题" },
                { key: "B", value: "I", text: "马上复盘，把问题归类整理出来" },
                { key: "C", value: "E", text: "找队友一起吃饭，边吃边消化情绪" },
                { key: "D", value: "E", text: "主动安慰队友，一起扛下这次失败" }
            ],
            followUp: {
                text: "追问：你最受不了队友的哪种习惯？",
                options: [
                    { key: "A", value: "I", text: "每次开局都要迟到，打乱整体计划" },
                    { key: "B", value: "I", text: "每次训练都临时改时间，让人措手不及" },
                    { key: "C", value: "E", text: "赢了得意忘形，输了互相甩锅" },
                    { key: "D", value: "E", text: "从来不主动说自己的想法，等别人安排" }
                ],
                insight: "这揭示了你对「混乱」 vs 「沉闷」的容忍边界"
            }
        },

        // ═══════════════ 第七题：信息获取 N/S ═══════════════
        // S：具体细节  N：宏观直觉
        {
            id: 7, category: "信息获取 N/S", dimension: "SN",
            text: "学一张新地图时，你通常？",
            options: [
                { key: "A", value: "S", text: "先记住每个点位的名称和标准站位" },
                { key: "B", value: "S", text: "跟着教学视频，一步一步模仿练熟" },
                { key: "C", value: "N", text: "理解这个位置为什么这样打，寻找变化规律" },
                { key: "D", value: "N", text: "先看整体结构，找到自己喜欢的节奏" }
            ],
            followUp: {
                text: "追问：教练给了你一份很详细的新地图教案，但节奏很快，你会？",
                options: [
                    { key: "A", value: "S", text: "硬着头皮跟，能记多少是多少" },
                    { key: "B", value: "S", text: "录下来，课后自己慢慢研究" },
                    { key: "C", value: "N", text: "先暂停，把原理弄懂再继续" },
                    { key: "D", value: "N", text: "问教练能不能用自己的方式先试试" }
                ],
                insight: "这揭示了你对「深度理解」 vs 「快速上手」的优先级"
            }
        },

        // ═══════════════ 第八题：信息获取 N/S ═══════════════
        {
            id: 8, category: "信息获取 N/S", dimension: "SN",
            text: "对面突然换了一套冷门战术，你第一反应是？",
            options: [
                { key: "A", value: "S", text: "临时应变，先稳住，按标准打法应对" },
                { key: "B", value: "S", text: "等Demo回放后再分析，现在先别慌" },
                { key: "C", value: "N", text: "这是套路！对手在埋伏，我来分析他们的意图" },
                { key: "D", value: "N", text: "对面有高人，马上叫暂停和队友商量" }
            ],
            followUp: {
                text: "追问：你更享受哪种「赢」的感觉？",
                options: [
                    { key: "A", value: "S", text: "赛前准备到位，每个细节都执行完美" },
                    { key: "B", value: "S", text: "个人数据爆发，靠枪法碾压取胜" },
                    { key: "C", value: "N", text: "读透了对手的套路，精准预判拿下回合" },
                    { key: "D", value: "N", text: "团队配合天衣无缝，像一个人打的" }
                ],
                insight: "这揭示了你成就感的来源——战略洞察还是完美执行"
            }
        },

        // ═══════════════ 第九题：信息获取 N/S ═══════════════
        {
            id: 9, category: "信息获取 N/S", dimension: "SN",
            text: "你更关注对手的哪种信息？",
            options: [
                { key: "A", value: "S", text: "具体的数据：爆头率、常用枪械、常用位置" },
                { key: "B", value: "S", text: "最近几场比赛的表现和状态趋势" },
                { key: "C", value: "N", text: "他们最招牌的打法和选手个人习惯" },
                { key: "D", value: "N", text: "对手整体风格和心理状态，胜率如何" }
            ],
            followUp: {
                text: "追问：比赛中关键时刻，你更依赖什么做判断？",
                options: [
                    { key: "A", value: "S", text: "对自己状态的判断，相信肌肉记忆" },
                    { key: "B", value: "S", text: "对队友位置的信任，按战术执行就好" },
                    { key: "C", value: "N", text: "对整体局势的直觉，读懂对手下一步" },
                    { key: "D", value: "N", text: "对对手习惯的分析，预判他的选择" }
                ],
                insight: "这揭示了你的「决策锚点」——系统思考还是即时反馈"
            }
        },

        // ═══════════════ 第十题：信息获取 N/S ═══════════════
        {
            id: 10, category: "信息获取 N/S", dimension: "SN",
            text: "开局前，你更倾向于？",
            options: [
                { key: "A", value: "S", text: "严格按赛前制定的计划执行，不多想" },
                { key: "B", value: "S", text: "相信自己的肌肉记忆，按感觉打" },
                { key: "C", value: "N", text: "想象可能发生的各种情况，提前在心里预演" },
                { key: "D", value: "N", text: "保持开放心态，边打边读局势" }
            ],
            followUp: {
                text: "追问：如果突然被换到一张从没打过的地图参赛，你会？",
                options: [
                    { key: "A", value: "S", text: "先跟着队友走，熟悉基本站位再说" },
                    { key: "B", value: "S", text: "相信平时的积累，按直觉先打几回合" },
                    { key: "C", value: "N", text: "先冷静下来，快速分析地图结构找感觉" },
                    { key: "D", value: "N", text: "主动问队友能不能让我先观察一下" }
                ],
                insight: "这揭示了你面对「未知」时的第一反应模式——分析还是适应"
            }
        },

        // ═══════════════ 第十一题：信息获取 N/S ═══════════════
        {
            id: 11, category: "信息获取 N/S", dimension: "SN",
            text: "描述你发挥最好的一场比赛，你会说？",
            options: [
                { key: "A", value: "S", text: "我的Rating 1.45，爆头率58%，关键回合全拿下" },
                { key: "B", value: "S", text: "赛前准备很充分，每个细节都执行到位" },
                { key: "C", value: "N", text: "那场感觉全队心有灵犀，像开了天眼一样" },
                { key: "D", value: "N", text: "那场对面被我完全读透，打出了碾压局" }
            ],
            followUp: {
                text: "追问：你觉得什么样的比赛最让你有成就感？",
                options: [
                    { key: "A", value: "S", text: "从头领先到尾，干净利落地拿下比赛" },
                    { key: "B", value: "S", text: "队友都发挥失常，但我一个人扛下了胜利" },
                    { key: "C", value: "N", text: "在大家都不看好时，靠策略翻盘取胜" },
                    { key: "D", value: "N", text: "全队配合天衣无缝，像一个人打的" }
                ],
                insight: "这揭示了你对「成功」的定义——突破常规还是稳定卓越"
            }
        },

        // ═══════════════ 第十二题：信息获取 N/S ═══════════════
        {
            id: 12, category: "信息获取 N/S", dimension: "SN",
            text: "新赛季更新了枪械数值，你的第一反应是？",
            options: [
                { key: "A", value: "S", text: "先打靶场测一测新数据，再决定怎么打" },
                { key: "B", value: "S", text: "等教练的分析报告，按安排来练" },
                { key: "C", value: "N", text: "想想哪些选手会因此受益或吃亏" },
                { key: "D", value: "N", text: "这改动会影响整体战术生态，先研究大趋势" }
            ],
            followUp: {
                text: "追问：你更关注比赛转播中的什么内容？",
                options: [
                    { key: "A", value: "S", text: "具体选手的枪法表现和数据" },
                    { key: "B", value: "S", text: "关键时刻的决策和指挥" },
                    { key: "C", value: "N", text: "双方的战术布局和临场调整" },
                    { key: "D", value: "N", text: "某位明星选手的发挥和操作" }
                ],
                insight: "这揭示了你的「注意力焦点」——全局架构还是局部细节"
            }
        },

        // ═══════════════ 第十三题：决策方式 T/F ═══════════════
        // T：理性逻辑  F：情感关怀
        {
            id: 13, category: "决策方式 T/F", dimension: "TF",
            text: "队友连续失误导致丢分，你会？",
            options: [
                { key: "A", value: "T", text: "直接指出问题在哪里，冷静分析原因" },
                { key: "B", value: "T", text: "私下沟通，比赛中先专注比赛" },
                { key: "C", value: "F", text: "先安抚情绪，鼓励他稳住，下回合会好" },
                { key: "D", value: "F", text: "默默扛起更多责任，给他空间调整" }
            ],
            followUp: {
                text: "追问：比赛结束后，你会怎么和他谈这件事？",
                options: [
                    { key: "A", value: "T", text: "拿出数据，指出具体哪几个回合出了问题" },
                    { key: "B", value: "T", text: "直接说我觉得你应该这样做" },
                    { key: "C", value: "F", text: "先聊点别的，让他放松，再自然提起" },
                    { key: "D", value: "F", text: "问他觉得自己打得怎么样，让他先说" }
                ],
                insight: "这揭示了你沟通中的「任务导向」 vs 「关系导向」"
            }
        },

        // ═══════════════ 第十四题：决策方式 T/F ═══════════════
        {
            id: 14, category: "决策方式 T/F", dimension: "TF",
            text: "队内有人打得特别菜还嘴硬，你感受如何？",
            options: [
                { key: "A", value: "T", text: "无法接受，数据和表现说明一切" },
                { key: "B", value: "T", text: "私下找机会提，公开场合给足面子" },
                { key: "C", value: "F", text: "有点无奈，但还是尽量配合团队" },
                { key: "D", value: "F", text: "算了，不影响我的比赛就行" }
            ],
            followUp: {
                text: "追问：如果队内需要牺牲你的数据来换取团队胜利，你会？",
                options: [
                    { key: "A", value: "T", text: "没问题，赢才是目的，数据是次要的" },
                    { key: "B", value: "T", text: "可以接受，但希望能解释清楚原因" },
                    { key: "C", value: "F", text: "不太情愿，因为我也是职业选手" },
                    { key: "D", value: "F", text: "会先问清楚为什么是我，不接受无脑牺牲" }
                ],
                insight: "这揭示了你对「个人价值」 vs 「集体利益」的权衡方式"
            }
        },

        // ═══════════════ 第十五题：决策方式 T/F ═══════════════
        {
            id: 15, category: "决策方式 T/F", dimension: "TF",
            text: "比赛进入关键回合，你会更关注？",
            options: [
                { key: "A", value: "T", text: "局势和战术，哪里应该先清理" },
                { key: "B", value: "T", text: "对手最可能出现在哪个位置" },
                { key: "C", value: "F", text: "队友的状态和士气，大家能不能稳住" },
                { key: "D", value: "F", text: "这一回合拿下对大家信心的影响" }
            ],
            followUp: {
                text: "追问：你会怎样评价队友这场比赛的表现？",
                options: [
                    { key: "A", value: "T", text: "他拿了几个关键击杀，Rating是多少" },
                    { key: "B", value: "T", text: "他完成了自己该做的，执行力不错" },
                    { key: "C", value: "F", text: "他在高压下的心态控制得很好" },
                    { key: "D", value: "F", text: "他今天在场上很拼，精神可嘉" }
                ],
                insight: "这揭示了你的「评价框架」——客观指标还是主观体验"
            }
        },

        // ═══════════════ 第十六题：决策方式 T/F ═══════════════
        {
            id: 16, category: "决策方式 T/F", dimension: "TF",
            text: "赛后复盘会议上，你更倾向于？",
            options: [
                { key: "A", value: "T", text: "让数据说话，输在哪赢在哪清清楚楚" },
                { key: "B", value: "T", text: "直接讲问题，赢球不骄输球不馁" },
                { key: "C", value: "F", text: "先让每个人都说说自己的感受" },
                { key: "D", value: "F", text: "想先听听教练怎么说，再补充" }
            ],
            followUp: {
                text: "追问：你觉得「好队友」最重要的是什么？",
                options: [
                    { key: "A", value: "T", text: "能在高压下做出正确决策" },
                    { key: "B", value: "T", text: "能稳定输出，对团队有稳定贡献" },
                    { key: "C", value: "F", text: "能在队友低谷时给予支持和鼓励" },
                    { key: "D", value: "F", text: "能和所有人相处融洽，维护团队氛围" }
                ],
                insight: "这揭示了你的「人际价值观」——能力优先还是情感优先"
            }
        },

        // ═══════════════ 第十七题：决策方式 T/F ═══════════════
        {
            id: 17, category: "决策方式 T/F", dimension: "TF",
            text: "有两份战队合同摆在你面前，你会优先考虑？",
            options: [
                { key: "A", value: "T", text: "哪支队伍成绩更好，赢面更大" },
                { key: "B", value: "T", text: "哪个角色更能发挥我的实力" },
                { key: "C", value: "F", text: "哪支队伍氛围更好，队友更合拍" },
                    { key: "D", value: "F", text: "哪份合同更稳定，没有成绩就走人" }
            ],
            followUp: {
                text: "追问：以下哪种情况最让你心里不舒服？",
                options: [
                    { key: "A", value: "T", text: "明明打得很好，却因为队友拖累输了" },
                    { key: "B", value: "T", text: "辛苦练了很久的战术，比赛里没打出来" },
                    { key: "C", value: "F", text: "队内氛围变差，大家表面上客气但疏远" },
                    { key: "D", value: "F", text: "有人私下对你有意见，但当面不说" }
                ],
                insight: "这揭示了你最核心的「痛苦触发点」——不公 vs 疏离"
            }
        },

        // ═══════════════ 第十八题：决策方式 T/F ═══════════════
        {
            id: 18, category: "决策方式 T/F", dimension: "TF",
            text: "关键回合输赢之后，你会更在意？",
            options: [
                { key: "A", value: "T", text: "那一回合的战术选择是否正确" },
                { key: "B", value: "T", text: "我自己有没有发挥出正常水平" },
                { key: "C", value: "F", text: "队友的情绪状态，会不会影响下一回合" },
                { key: "D", value: "F", text: "大家还能不能保持信心继续战斗" }
            ],
            followUp: {
                text: "追问：你最不想听到队友在比赛里说的话是？",
                options: [
                    { key: "A", value: "T", text: "\"我早说过这样打不行\"" },
                    { key: "B", value: "T", text: "\"这枪我明明瞄到了，怎么没打死\"" },
                    { key: "C", value: "F", text: "\"算了，随便打打吧\"" },
                    { key: "D", value: "F", text: "\"都怪XXX，上回合不该这样\"" }
                ],
                insight: "这揭示了你对「负能量」的敏感类型——推卸责任 vs 放弃"
            }
        },

        // ═══════════════ 第十九题：决策方式 T/F ═══════════════
        {
            id: 19, category: "决策方式 T/F", dimension: "TF",
            text: "队伍讨论战术时，你更习惯？",
            options: [
                { key: "A", value: "T", text: "先听所有人说完，我来整理逻辑做决策" },
                { key: "B", value: "T", text: "直接提出我的观点，有问题当场讨论" },
                { key: "C", value: "F", text: "鼓励每个人都发言，关注每个人的感受" },
                { key: "D", value: "F", text: "配合队长的安排，做好自己的部分" }
            ],
            followUp: {
                text: "追问：以下哪种评价你最看重？",
                options: [
                    { key: "A", value: "T", text: "\"他是那种用脑子打比赛的人\"" },
                    { key: "B", value: "T", text: "\"他是那种稳定输出的选手\"" },
                    { key: "C", value: "F", text: "\"他是那种让人很想靠近的队友\"" },
                    { key: "D", value: "F", text: "\"跟他当队友，场上场下都很舒服\"" }
                ],
                insight: "这揭示了你的「自我认同核心」——专业能力还是人际温度"
            }
        },

        // ═══════════════ 第二十题：生活方式 J/P ═══════════════
        // J：有计划有条理  P：灵活随性
        {
            id: 20, category: "生活方式 J/P", dimension: "JP",
            text: "比赛开局就 0 比 9 落后，你会？",
            options: [
                { key: "A", value: "J", text: "提醒大家按计划执行，不要急" },
                { key: "B", value: "J", text: "告诉队友稳住，我们能追回来" },
                { key: "C", value: "P", text: "建议临时调整，换个思路试试" },
                { key: "D", value: "P", text: "既然已经这样了，不如放开打" }
            ],
            followUp: {
                text: "追问：以下哪种评价最让你开心？",
                options: [
                    { key: "A", value: "J", text: "\"他是那种赛前准备最充分的人\"" },
                    { key: "B", value: "J", text: "\"他的执行力是我们队的标杆\"" },
                    { key: "C", value: "P", text: "\"他是那种场上随机应变最强的\"" },
                    { key: "D", value: "P", text: "\"他总能在最意想不到的时候站出来\"" }
                ],
                insight: "这揭示了你的「核心自信来源」——准备充分还是临场发挥"
            }
        },

        // ═══════════════ 第二十一题：生活方式 J/P ═══════════════
        {
            id: 21, category: "生活方式 J/P", dimension: "JP",
            text: "教练要求全队统一标准化的战术体系，你会？",
            options: [
                { key: "A", value: "J", text: "完全接受，相信教练已经做了充分准备" },
                { key: "B", value: "J", text: "先执行，有问题再反馈" },
                { key: "C", value: "P", text: "有建议就提，灵活的战术才有效" },
                { key: "D", value: "P", text: "可以学，但希望保留自己的风格" }
            ],
            followUp: {
                text: "追问：训练赛里发现一个漏洞百出的战术，你会？",
                options: [
                    { key: "A", value: "J", text: "先练完，赛后统一提给教练" },
                    { key: "B", value: "J", text: "私下找教练说明，避免公开质疑" },
                    { key: "C", value: "P", text: "马上叫停，当场提出来讨论" },
                    { key: "D", value: "P", text: "先试试看，说不定实战中有奇效" }
                ],
                insight: "这揭示了你对「权威」的态度——尊重层级 vs 平等对话"
            }
        },

        // ═══════════════ 第二十二题：生活方式 J/P ═══════════════
        {
            id: 22, category: "生活方式 J/P", dimension: "JP",
            text: "今天计划练枪，突然队友提议打娱乐模式换换心情，你会？",
            options: [
                { key: "A", value: "J", text: "有点烦躁，但为了团队和谐还是去了" },
                { key: "B", value: "J", text: "先去练一会枪，晚点再加入他们" },
                { key: "C", value: "P", text: "正好放松一下，说不定对训练有帮助" },
                { key: "D", value: "P", text: "很开心，这种随性才是兄弟战队" }
            ],
            followUp: {
                text: "追问：你对赛前的「准备仪式」有什么看法？",
                options: [
                    { key: "A", value: "J", text: "有固定仪式能让我更快进入状态" },
                    { key: "B", value: "J", text: "赛前听同一首歌，有助于集中注意力" },
                    { key: "C", value: "P", text: "不需要，看情况来就行" },
                    { key: "D", value: "P", text: "每次都试不同的方式，保持新鲜感" }
                ],
                insight: "这揭示了你对「结构化」的需求程度"
            }
        },

        // ═══════════════ 第二十三题：生活方式 J/P ═══════════════
        {
            id: 23, category: "生活方式 J/P", dimension: "JP",
            text: "队内讨论时，你更倾向于？",
            options: [
                { key: "A", value: "J", text: "按议题一条一条讨论清楚再结束" },
                { key: "B", value: "J", text: "有结论就记录，没结论就下次再议" },
                { key: "C", value: "P", text: "自由讨论，有火花就聊，灵活展开" },
                { key: "D", value: "P", text: "讨论到有新想法就停，不用纠结细节" }
            ],
            followUp: {
                text: "追问：比赛里你更依赖什么做决定？",
                options: [
                    { key: "A", value: "J", text: "赛前的战术计划，按计划执行" },
                    { key: "B", value: "J", text: "对队友的信任，让他们来判断" },
                    { key: "C", value: "P", text: "当时的具体情况，随机应变" },
                    { key: "D", value: "P", text: "当下的直觉，相信自己的感觉" }
                ],
                insight: "这揭示了你决策的「内部参考系」——计划还是感知"
            }
        },

        // ═══════════════ 第二十四题：生活方式 J/P ═══════════════
        {
            id: 24, category: "生活方式 J/P", dimension: "JP",
            text: "你更倾向于怎么安排日常训练？",
            options: [
                { key: "A", value: "J", text: "每天有固定计划，完成一项打勾一项" },
                { key: "B", value: "J", text: "按教练安排的课表走，不需要自己操心" },
                { key: "C", value: "P", text: "有个大概方向，具体看当天状态灵活调整" },
                { key: "D", value: "P", text: "跟着队伍走就行，不需要太具体" }
            ],
            followUp: {
                text: "追问：你会用哪种方式记住比赛中的关键时刻？",
                options: [
                    { key: "A", value: "J", text: "赛后整理笔记，记录每个关键回合" },
                    { key: "B", value: "J", text: "回放录像，标注时间点整理成文档" },
                    { key: "C", value: "P", text: "脑子记住就好，关键时刻不会忘" },
                    { key: "D", value: "P", text: "发个朋友圈或动态，截图留念" }
                ],
                insight: "这揭示了你对「记录」的需求——外部系统 vs 内部记忆"
            }
        },

        // ═══════════════ 第二十五题：生活方式 J/P ═══════════════
        {
            id: 25, category: "生活方式 J/P", dimension: "JP",
            text: "比赛前一小时，你的心理状态是？",
            options: [
                { key: "A", value: "J", text: "一切按计划进行，心态平稳" },
                { key: "B", value: "J", text: "默默过一遍战术，检查有没有遗漏" },
                { key: "C", value: "P", text: "有点小兴奋，已经迫不及待了" },
                { key: "D", value: "P", text: "随意就好，该准备的都准备好了" }
            ],
            followUp: {
                text: "追问：以下哪种情况最让你感到焦虑？",
                options: [
                    { key: "A", value: "J", text: "赛前突然被告知要换地图，来不及准备" },
                    { key: "B", value: "J", text: "赛前发现自己的外设出了问题" },
                    { key: "C", value: "P", text: "不知道对手是谁，没有任何信息" },
                    { key: "D", value: "P", text: "赛前才知道自己今天要打首发" }
                ],
                insight: "这揭示了你焦虑的「触发类型」——失控 vs 未知"
            }
        },

        // ═══════════════ 特异区分题 ═══════════════
        // 每道题区分一对MBTI相同但行为不同的选手
        // A/B = 左侧选手偏好，C/D = 右侧选手偏好
        // discriminatorFor[0] = 左侧，discriminatorFor[1] = 右侧
        {
            id: 26, category: "特异区分", discriminatorDimension: "AL",
            discriminatorFor: ["ropz", "Aleksib"],
            text: "比赛赢了之后，你最想做什么？",
            options: [
                { key: "A", value: "AL_left",  text: "继续训练，趁状态好多练一会（自律精进型）" },
                { key: "B", value: "AL_left",  text: "一个人安静待着，回味这份快乐（独处充电型）" },
                { key: "C", value: "AL_right", text: "拉着全队一起出去吃顿饭庆祝（团队氛围型）" },
                { key: "D", value: "AL_right", text: "开直播和粉丝们分享这份喜悦（外向表达型）" }
            ]
        },
        {
            id: 27, category: "特异区分", discriminatorDimension: "AG",
            discriminatorFor: ["YEKINDAR", "flameZ"],
            text: "你更享受哪种比赛表现？",
            options: [
                { key: "A", value: "AG_left",  text: "全场最高Rating，数据碾压（个人爆发型）" },
                { key: "B", value: "AG_left",  text: "关键1v2、1v3残局，靠个人能力翻盘（孤胆英雄型）" },
                { key: "C", value: "AG_right", text: "队友都发挥失常，但我站出来扛下整场（团队支柱型）" },
                { key: "D", value: "AG_right", text: "全队配合流畅如水，每个人都打得开心（和谐共进型）" }
            ]
        },
        {
            id: 28, category: "特异区分", discriminatorDimension: "ST",
            discriminatorFor: ["sh1ro", "Magisk"],
            text: "赛前准备时间只剩10分钟，你会？",
            options: [
                { key: "A", value: "ST_left",  text: "跟队友多聊几句，让自己放松保持手感（灵活感知型）" },
                { key: "B", value: "ST_left",  text: "相信临场感觉，不刻意去想那些条条框框（直觉判断型）" },
                { key: "C", value: "ST_right", text: "在脑子里把关键战术过一遍，确保不遗漏（计划执行型）" },
                { key: "D", value: "ST_right", text: "默默祈祷，调整呼吸，让自己进入专注状态（稳定内敛型）" }
            ]
        },
        {
            id: 29, category: "特异区分", discriminatorDimension: "EM",
            discriminatorFor: ["s1mple", "blameF"],
            text: "当你完成了一个冒险但成功的操作时，你会？",
            options: [
                { key: "A", value: "EM_left",  text: "赛后发个动态庆祝，和粉丝分享这份快乐（享受表达型）" },
                { key: "B", value: "EM_left",  text: "沉浸在刚才的操作里，忍不住回味那种快感（情感体验型）" },
                { key: "C", value: "EM_right", text: "马上分析这是不是可复制的战术，下次继续用（理性分析型）" },
                { key: "D", value: "EM_right", text: "在复盘里记录下来，这是战术库的新武器（系统积累型）" }
            ]
        }
    ],

    // ---------- 20位CS2职业选手真实数据 ----------
    players: [
        { id: 1,  name: "device",    mbti: "INTJ", team: "100 Thieves",     country: "丹麦",    role: "主狙",      traits: ["独立思考","冷静理性","战术大师","完美主义"], description: "device 以极其冷静的瞄准和精准的位置感闻名，是CS史上最成功的狙击手之一。独立思考，冷静理性，擅长制定战术体系，对技术细节极致追求。", quote: "I always try to stay one step ahead." },
        { id: 2,  name: "ropz",      mbti: "INTP", team: "Team Vitality",  country: "爱沙尼亚",role: "步枪手",    traits: ["逻辑严谨","极度自律","深度思考","低调内敛"], description: "ropz 被认为是全球最稳定的步枪手之一。逻辑清晰，善于分析局势，对游戏机制有深度理解，行事低调，不爱张扬。", quote: "Practice is everything." },
        { id: 3,  name: "NiKo",      mbti: "ENTP", team: "Team Falcons",   country: "波黑",    role: "步枪手",    traits: ["自信爆棚","敢于冒险","富有魅力","永不止步"], description: "NiKo 在多支顶级战队留下足迹，职业生涯横跨十年依旧保持顶尖水准。自信爆棚，求胜欲极强，敢于冒险出奇制胜。", quote: "Confidence is everything in this game." },
        { id: 4,  name: "karrigan",  mbti: "ENTJ", team: "FaZe Clan",     country: "丹麦",    role: "指挥(IGL)",traits:["战略视野","团队整合","果断决策","追求卓越"], description: "karrigan 拥有业界罕见的战术创新能力，一手打造 FaZe Clan 的多冠王朝。战略视野开阔，极强的团队整合能力，果断决策从不犹豫。", quote: "Every game is a new opportunity." },
        { id: 5,  name: "ZywOo",      mbti: "INFJ", team: "Team Vitality",  country: "法国",    role: "主狙",      traits: ["温和内敛","完美主义","低调谦逊","内心坚定"], description: "ZywOo 以不可思议的反应速度和决策智慧，成为 CS2 时代最令人畏惧的狙击手。温和内敛，低调谦逊，对队友极其支持。", quote: "I just want to win with my team." },
        { id: 6,  name: "Jame",       mbti: "ISTP", team: "PVISION",      country: "俄罗斯",  role: "主狙",      traits: ["极度耐心","冷静理性","经济大师","关键时刻不手软"], description: "Jame 以极其独特的比赛阅读方式著称，永远在等最优时机出手。极度耐心，经济大师，冷静理性从不冲动。", quote: "Patience is the ultimate weapon." },
        { id: 7,  name: "Aleksib",    mbti: "INTP", team: "Natus Vincere", country: "芬兰",    role: "指挥(IGL)",traits:["冷静分析","极度专注","策略为先","精神支柱"], description: "Aleksib 以战术创新闻名，将严谨的战术体系注入 NAVI。冷静分析，战术大师，极度专注和自律，以策略而非枪法取胜。", quote: "Tactics win wars." },
        { id: 8,  name: "electronic",mbti: "INFP", team: "BC.Game",       country: "乌克兰",  role: "步枪手",    traits: ["安静沉稳","内心细腻","无条件信任","重视协作"], description: "electronic 打法刚柔并济，关键局总能挺身而出。安静沉稳，内心细腻，对队友无条件信任，在压力下保持冷静。", quote: "Team comes first." },
        { id: 9,  name: "donk",       mbti: "ENFJ", team: "Team Spirit",  country: "俄罗斯",  role: "步枪手",    traits: ["激情四射","感染力强","敢于承担","技术全面"], description: "donk 17岁便在 IEM 科隆震惊世界，打法极具观赏性。激情四射，感染力强，敢于承担关键时刻，对胜利有强烈渴望。", quote: "Age is just a number." },
        { id: 10, name: "m0NESY",     mbti: "ENFP", team: "Natus Vincere", country: "俄罗斯",  role: "主狙",      traits: ["阳光自信","享受舞台","内驱成长","富有创意"], description: "m0NESY 以极具侵略性的狙击风格和乐观心态，快速成长为世界级选手。阳光自信，性格开朗，享受比赛享受聚光灯。", quote: "I play to have fun and win." },
        { id: 11, name: "flameZ",     mbti: "ESFP", team: "Team Vitality", country: "以色列",  role: "步枪手",    traits: ["年轻热血","打法爆炸","观赏性强","享受聚光灯"], description: "flameZ 爆发力和进攻意识极为出色，是新生代步枪手的标杆。年轻热血，打法爆炸，极具观赏性的激进步枪。", quote: "Young blood, big fire." },
        { id: 12, name: "Magisk",    mbti: "ISTJ", team: "Team Vitality", country: "丹麦",    role: "步枪手",    traits: ["高度稳定","极度可靠","注重流程","默默付出"], description: "Magisk 以稳定著称，无论场上场下都是队友最信赖的存在。高度稳定，极少失误，极度可靠，团队基石。", quote: "Consistency is the key." },
        { id: 13, name: "dupreeh",   mbti: "ISFJ", team: "Astralis",      country: "丹麦",    role: "步枪手",    traits: ["温和友善","照顾队友","不屈不挠","赛场经验丰富"], description: "dupreeh 史上首位 Major 四冠王，亲历了 CS:GO 多个时代。温和友善，照顾队友，服从大局忠于团队。", quote: "We fight as a team, we win as a team." },
        { id: 14, name: "blameF",    mbti: "ESTJ", team: "BIG",            country: "丹麦",    role: "步枪手",    traits: ["强势领导","纪律严明","胜负心强","执行一丝不苟"], description: "blameF 以钢铁意志和高伤害输出著称。强势领导，纪律严明，对胜负有强烈责任感，执行战术一丝不苟。", quote: "Hard work beats talent." },
        { id: 15, name: "rain",       mbti: "ESFJ", team: "100 Thieves",   country: "挪威",    role: "步枪手",    traits: ["热情开朗","善于社交","高昂斗志","团队粘合剂"], description: "rain 的打法充满激情，无论顺境逆境都能用士气感染全队。热情开朗，善于社交，是队内不可或缺的粘合剂。", quote: "We never give up." },
        { id: 16, name: "apEX",       mbti: "ESTP", team: "Team Vitality",  country: "法国",    role: "队长+指挥",traits:["极度激情","情绪化领袖","激进AWP","竞争心态"], description: "apEX 以极具感染力的领导风格和大胆的战术决策，将 Vitality 打造成 CS2 时代最具统治力的王朝战队。", quote: "We want to dominate everyone." },
        { id: 17, name: "sh1ro",     mbti: "ISTJ", team: "Natus Vincere", country: "俄罗斯",  role: "步枪手",    traits: ["冷静观察","精准反应","随机应变","低调内敛"], description: "sh1ro 凭借精准的瞄准和临场应变在 NAVI 站稳脚跟。冷静观察，精准反应，随机应变能力极强，低调内敛不善表达。", quote: "React, adapt, execute." },
        { id: 18, name: "broky",     mbti: "ISFP", team: "FaZe Clan",       country: "拉脱维亚",role: "主狙",      traits: ["随性自在","压力爆发","直觉决策","逆袭特质"], description: "broky 在 FaZe 迎来职业生涯巅峰。随性自在，压力下反而爆发，善于用直觉做决定，外表温和内心强大。", quote: "Sometimes you just feel it." },
        { id: 19, name: "s1mple",    mbti: "ESTJ", team: "BC.Game",        country: "乌克兰",  role: "主狙",      traits: ["极度自信","反应速度惊人","观赏性极强","热爱挑战"], description: "s1mple CS:GO 历史第一人，个人能力改变了整个游戏的战术生态。极度自信，敢于冒险，反应速度堪称变态。", quote: "I play every round like it is my last." },
        { id: 20, name: "YEKINDAR",  mbti: "ESFP", team: "FURIA",          country: "拉脱维亚",role: "突破手",    traits: ["充满活力","极具感染力","打法凶悍","关键时刻出手"], description: "YEKINDAR 以极快的进攻节奏和惊人的爆头率闻名。充满活力，享受表演，打法凶悍激进，关键时刻敢于出手。", quote: "Aggression wins games." }
    ]
};
