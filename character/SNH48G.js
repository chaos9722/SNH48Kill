//48武将扩展包，适用于身份场
'use strict';
game.import('character', function (lib, game, ui, get, ai, _status) {
    return {
        name: 'SNH48G',
        connect: true,
        character: {
            //S
            SNH48Gchenguanhui: ['female', 'S', 4, ['biyue', 'guidao']],
            SNH48Gchengjue: ['female', 'S', 4, ['biyue', 'guidao']],
            SNH48Gchensi: ['female', 'S', 3, ['wushuang', 'feiying']],
            SNH48Gdaimeng: ['female', 'S', 4, ['kongcheng', 'qianxun']],
            SNH48Gjiangyun: ['female', 'S', 3, ['leiji', 'guidao']],
            SNH48Gkongxiaoyin: ['female', 'S', 4, ['lieren']],
            SNH48Glvyi: ['female', 'S', 3, ['mingce', 'longdan']],
            SNH48Gliyuqi: ['female', 'S', 3, ['mingce', 'longdan']],
            SNH48Gliuzengyan: ['female', 'S', 3, ['mingce', 'longdan']],
            SNH48Gmohan: ['female', 'S', 3, ['jizhi', 'qicai']],
            SNH48Gqianbeiting: ['female', 'S', 4, ['chongzhen', 'longdan']],
            SNH48Gqiuxinyi: ['female', 'S', 4, ['chongzhen', 'longdan']],
            SNH48Gsunrui: ['female', 'S', 4, ['tiaoxin', 'tiandu']],
            SNH48Gshaoxuecong: ['female', 'S', 4, ['tiaoxin', 'tiandu']],
            SNH48Gwenjingjie: ['female', 'S', 4, ['zaiqi']],
            SNH48Gwuzhehan: ['female', 'S', 3, ['qianxun', 'qixi']],
            SNH48Gxuchenchen: ['female', 'S', 3, ['tianlai', 'kuaihuo']],
            SNH48Gxujiaqi: ['female', 'S', 3, ['luoshen', 'biyue']],
            SNH48Gxuyiren: ['female', 'S', 3, ['luoshen', 'biyue']],
            SNH48Gxuzixuan: ['female', 'S', 4, ['jianxiong']],
            SNH48Gyuandanni: ['female', 'S', 4, ['guicai', 'yiji']],
            SNH48Gyuanyuzhen: ['female', 'S', 4, ['duanliang']],
            SNH48Gzhangyuge: ['female', 'S', 4, ['duanchang', 'weimu']],

            SNH48Gzhaojiamin: ['female', 'S', 3, ['fankui', 'tiandu']],

            //N
            SNH48Gchenjiaying: ['female', 'N', 3, ['zhiheng']],
            SNH48Gchenwenyan: ['female', 'N', 3, ['zhiheng']],
            SNH48Gfengxinduo: ['female', 'N', 3, ['zhiheng']],
            SNH48Gguoqianyun: ['female', 'N', 3, ['zhiheng']],
            SNH48Ghuangtingting: ['female', 'N', 3, ['rende', 'yingzi']],
            SNH48Ghaowanqing: ['female', 'N', 3, ['rende', 'yingzi']],
            SNH48Ghexiaoyu: ['female', 'N', 3, ['rende', 'yingzi']],
            SNH48Gjinyingyue: ['female', 'N', 3, ['rende', 'yingzi']],
            SNH48Gjiangzhenyi: ['female', 'N', 3, ['rende', 'yingzi']],
            SNH48Gliujuzi: ['female', 'N', 3, ['rende', 'yingzi']],
            SNH48Gliupeixin: ['female', 'N', 3, ['rende', 'yingzi']],
            SNH48Gluting: ['female', 'N', 3, ['biyue', 'neidou']],
            SNH48Gtaoboer: ['female', 'N', 3, ['biyue', 'neidou']],
            SNH48Gxieni: ['female', 'N', 3, ['biyue', 'neidou']],
            SNH48Gyijiaai: ['female', 'N', 3, ['duwu', 'mashu']],
            SNH48Gzhaoyue: ['female', 'N', 3, ['duwu', 'mashu']],
            SNH48Gzhangyi: ['female', 'N', 3, ['duwu', 'mashu']],
            SNH48Gzhangyuxin: ['female', 'N', 3, ['duwu', 'mashu']],

            SNH48Gjujingyi: ['female', 'N', 3, ['liuli', 'lianying']],

            //H
            SNH48Gfeiqinyuan: ['female', 'H', 4, ['jiang', 'luanji']],
            SNH48Ghongpeiyun: ['female', 'H', 4, ['jiang', 'luanji']],
            SNH48Gjiangshan: ['female', 'H', 4, ['jiang', 'luanji']],
            SNH48Gjiangshuting: ['female', 'H', 4, ['jiang', 'luanji']],
            SNH48Glijiaen: ['female', 'H', 4, ['jiang', 'luanji']],
            SNH48Glinnan: ['female', 'H', 4, ['jiang', 'biyue']],
            SNH48Glinsiyi: ['female', 'H', 3, ['luoshen', 'qingguo']],
            SNH48Gliyitong: ['female', 'H', 3, ['kurou', 'neidou']],
            SNH48Gqiyuzhu: ['female', 'H', 3, ['kurou', 'biyue']],
            SNH48Gshenmengyao: ['female', 'H', 3, ['luoshen', 'qingguo']],
            SNH48Gsongyushan: ['female', 'H', 3, ['paoxiao', 'longdan']],
            SNH48Gsunzhenni: ['female', 'H', 3, ['paoxiao', 'longdan']],
            SNH48Gwanlina: ['female', 'H', 3, ['paoxiao', 'longdan']],
            SNH48Gwangyi: ['female', 'H', 3, ['paoxiao', 'longdan']],
            SNH48Gxuhan: ['female', 'H', 3, ['paoxiao', 'longdan']],
            SNH48Gxiongqinxian: ['female', 'H', 3, ['paoxiao', 'longdan']],
            SNH48Gxuyangyuzhuo: ['female', 'H', 3, ['paoxiao', 'longdan']],
            SNH48Gyanghuiting: ['female', 'H', 3, ['paoxiao', 'longdan']],
            SNH48Gyujiayi: ['female', 'H', 3, ['paoxiao', 'longdan']],
            SNH48Gyuanyiqi: ['female', 'H', 3, ['paoxiao', 'longdan']],
            SNH48Gzhangxin: ['female', 'H', 3, ['paoxiao', 'longdan']],
            SNH48Gzengxiaowen: ['female', 'H', 3, ['paoxiao', 'longdan']],

            SNH48Gliujiongran: ['female', 'H', 3, ['luoshen', 'biyue']],
            //X
            SNH48Gchenlin: ['female', 'X', 4, ['wushuang', 'mashu']],
            SNH48Gchenyunling: ['female', 'X', 4, ['wushuang', 'mashu']],
            SNH48Gfengxiaofei: ['female', 'X', 4, ['wushuang', 'mashu']],
            SNH48Glizhao: ['female', 'X', 4, ['wushuang', 'mashu']],
            SNH48Gpanyingqi: ['female', 'X', 4, ['wushuang', 'mashu']],
            SNH48Gqijing: ['female', 'X', 4, ['wushuang', 'mashu']],
            SNH48Gsongxinran: ['female', 'X', 4, ['wushuang', 'mashu']],
            SNH48Gsunxinwen: ['female', 'X', 4, ['wushuang', 'mashu']],
            SNH48Gwangjialing: ['female', 'X', 4, ['wushuang', 'mashu']],
            SNH48Gwangshu: ['female', 'X', 4, ['wushuang', 'mashu']],
            SNH48Gwangxiaojia: ['female', 'X', 4, ['guanxing', 'danlao']],
            SNH48Gxushiqi: ['female', 'X', 4, ['wushuang', 'mashu']],
            SNH48Gxietianyi: ['female', 'X', 4, ['wushuang', 'mashu']],
            SNH48Gyangbingyi: ['female', 'X', 4, ['wushuang', 'mashu']],
            SNH48Gyangyunyu: ['female', 'X', 4, ['wushuang', 'mashu']],
            SNH48Gzhangdansan: ['female', 'X', 4, ['wushuang', 'mashu']],
            SNH48Gzhangjiayu: ['female', 'X', 4, ['wushuang', 'mashu']],

            SNH48Glijing: ['female', 'X', 4, ['guanxing', 'danlao']],



            shibing1wei: ['male', 'S', 0, [], ['unseen']],
            shibing2wei: ['female', 'S', 0, [], ['unseen']],
            shibing1shu: ['male', 'H', 0, [], ['unseen']],
            shibing2shu: ['female', 'H', 0, [], ['unseen']],
            shibing1wu: ['male', 'X', 0, [], ['unseen']],
            shibing2wu: ['female', 'X', 0, [], ['unseen']],
            shibing1qun: ['male', 'qun', 0, [], ['unseen']],
            shibing2qun: ['female', 'qun', 0, [], ['unseen']],
            shibing1ye: ['male', 'N', 0, [], ['unseen']],
            shibing2ye: ['female', 'N', 0, [], ['unseen']],
        },
        characterIntro: {
            //S
            SNH48Gchenguanhui: 'SNH48 Team SII 成员，SNH48一期生',
            SNH48Gchengjue: 'SNH48 Team SII 预备成员，SNH48六期生',
            SNH48Gchensi: 'SNH48 Team SII 成员，SNH48一期生',
            SNH48Gdaimeng: 'SNH48 Team SII 队长，SNH48一期生',
            SNH48Gjiangyun: 'SNH48 Team SII 成员，古风大佬，SNH48二期生',
            SNH48Gkongxiaoyin: 'SNH48 Team SII 性感成员，SNH48一期生',
            SNH48Glvyi: 'SNH48 Team SII 成员，SNH48七期生',
            SNH48Gliyuqi: 'SNH48 Team SII 成员，SNH48一期生',
            SNH48Gliuzengyan: 'SNH48 Team SII 成员，SNH48五期生',
            SNH48Gmohan: 'SNH48 Team SII 副队长，SNH48一期生',
            SNH48Gqianbeiting: 'SNH48 Team SII 成员，SNH48一期生',
            SNH48Gqiuxinyi: 'SNH48 Team SII 成员，SNH48一期生',
            SNH48Gsunrui: 'SNH48 Team SII 成员，生日公演专用“男”嘉宾，SNH48二期生',
            SNH48Gshaoxuecong: 'SNH48 Team SII 成员，SNH48四期生',
            SNH48Gwenjingjie: 'SNH48 Team SII 成员，SNH48二期生',
            SNH48Gwuzhehan: 'SNH48 Team SII 成员，SNH48一期生',
            SNH48Gxuchenchen: 'SNH48 Team SII 成员，SNH48一期生',
            SNH48Gxujiaqi: 'SNH48 Team SII 成员，SNH48一期生',
            SNH48Gxuyiren: 'SNH48 Team SII 成员，SNH48三期生',
            SNH48Gxuzixuan: 'SNH48 Team SII 成员，SNH48二期生',
            SNH48Gyuandanni: 'SNH48 Team SII 成员，SNH48三期生',
            SNH48Gyuanyuzhen: 'SNH48 Team SII 成员，SNH48二期生',
            SNH48Gzhangyuge: 'SNH48 Team SII 成员，SNH48一期生',

            SNH48Gzhaojiamin: 'SNH48 Team SII 成员，SNH48一期生',

            //N
            SNH48Gchenjiaying: 'SNH48 Team NII 成员，SNH48二期生',
            SNH48Gchenwenyan: 'SNH48 Team NII 成员，SNH48二期生',
            SNH48Gfengxinduo: 'SNH48 Team NII 成员，SNH48二期生',
            SNH48Gguoqianyun: 'SNH48 Team NII 成员，SNH48八期生',
            SNH48Ghuangtingting: 'SNH48 Team NII 成员，SNH48二期生',
            SNH48Ghaowanqing: 'SNH48 Team NII 成员，SNH48三期生',
            SNH48Ghexiaoyu: 'SNH48 Team NII 副队长，SNH48二期生',
            SNH48Gjinyingyue: 'SNH48 Team NII 成员，SNH48八期生',
            SNH48Gjiangzhenyi: 'SNH48 Team NII 成员，SNH48七期生',
            SNH48Gliujuzi: 'SNH48 Team NII 成员，SNH48七期生',
            SNH48Gliupeixin: 'SNH48 Team NII 成员，SNH48三期生',
            SNH48Gluting: 'SNH48 Team NII 成员，SNH48二期生',
            SNH48Gtaoboer: 'SNH48 Team NII 成员，SNH48八期生',
            SNH48Gxieni: 'SNH48 Team NII 成员，SNH48三期生',
            SNH48Gyijiaai: 'SNH48 Team NII 队长，SNH48二期生',
            SNH48Gzhaoyue: 'SNH48 Team NII 成员，SNH48二期生',
            SNH48Gzhangyi: 'SNH48 Team NII 成员，SNH48五期生',
            SNH48Gzhangyuxin: 'SNH48 Team NII 成员，SNH48三期生',

            SNH48Gjujingyi: '明星殿堂 成员，SNH48二期生',

            //H
            SNH48Gfeiqinyuan: 'SNH48 Team HII 成员，SNH48五期生',
            SNH48Ghongpeiyun: 'SNH48 Team HII 成员，SNH48五期生',
            SNH48Gjiangshan: 'SNH48 Team HII 成员，SNH48五期生',
            SNH48Gjiangshuting: 'SNH48 Team HII 成员，SNH48五期生',
            SNH48Glijiaen: 'SNH48 Team HII 成员，SNH48六期生',
            SNH48Glinnan: 'SNH48 Team HII 成员，SNH48三期生',
            SNH48Glinsiyi: 'SNH48 Team HII 成员，SNH48二期生',
            SNH48Gliyitong: 'SNH48 Team HII 成员，SNH48二期生',
            SNH48Gqiyuzhu: 'SNH48 Team HII 成员，SNH48十期生',
            SNH48Gshenmengyao: 'SNH48 Team HII 成员，SNH48三期生',
            SNH48Gsongyushan: 'SNH48 Team HII 成员，SNH48五期生',
            SNH48Gsunzhenni: 'SNH48 Team HII 成员，SNH48六期生',
            SNH48Gwanlina: 'SNH48 Team HII 成员，SNH48二期生',
            SNH48Gwangyi: 'SNH48 Team HII 成员，SNH48八期生',
            SNH48Gxuhan: 'SNH48 Team HII 成员，SNH48三期生',
            SNH48Gxiongqinxian: 'SNH48 Team HII 成员，SNH48八期生',
            SNH48Gxuyangyuzhuo: 'SNH48 Team HII 成员，SNH48三期生',
            SNH48Gyanghuiting: 'SNH48 Team HII 成员，SNH48三期生',
            SNH48Gyujiayi: 'SNH48 Team HII 成员，SNH48五期生',
            SNH48Gyuanyiqi: 'SNH48 Team HII 成员，SNH48七期生',
            SNH48Gzhangxin: 'SNH48 Team HII 副队长，SNH48三期生',
            SNH48Gzengxiaowen: 'SNH48 Team HII 成员，SNH48七期生',

            SNH48Gliujiongran: '现CKG48 Team K 成员，SNH48三期生',

            //X
            SNH48Gchenlin: 'Team X 成员，SNH48四期生',
            SNH48Gchenyunling: 'Team X 成员，SNH48五期生',
            SNH48Gfengxiaofei: 'SNH48 Team X 成员，SNH48四期生，曾经是著名SNH48黑，OLD48法人',
            SNH48Glizhao: 'Team X 队长，SNH48四期生',
            SNH48Gpanyingqi: 'Team X 成员，SNH48五期生',
            SNH48Gqijing: 'Team X 成员，SNH48七期生',
            SNH48Gsongxinran: 'Team X 成员，SNH48四期生',
            SNH48Gsunxinwen: 'Team X 成员，SNH48四期生',
            SNH48Gwangjialing: 'Team X 成员，SNH48四期生',
            SNH48Gwangshu: 'Team X 成员，SNH48四期生',
            SNH48Gwangxiaojia: 'Team X 成员，SNH48四期生',
            SNH48Gxushiqi: 'Team X 成员，SNH48七期生',
            SNH48Gxietianyi: 'Team X 成员，SNH48四期生',
            SNH48Gyangbingyi: 'Team X 副队长，SNH48四期生',
            SNH48Gyangyunyu: 'Team X 成员，SNH48四期生',
            SNH48Gzhangdansan: 'Team X 成员，SNH48四期生',
            SNH48Gzhangjiayu: 'Team X 成员，SNH48七期生',

            SNH48Glijing: 'Team X 前队长，SNH48四期生',
        },
        characterFilter: {
            SNH48G: function (mode) {
                return mode != 'SNH48G';
            }
        },
        characterIntro: {
            SNH48Gwangzijie: '王靖，上海丝芭文化传媒集团有限公司董事长。',
            SNH48Gaji: '张竞，前SNH48剧场发言人。',
        },
        skill: {
            kuaihuo: {
                audio: 2,
                trigger: { player: 'loseEnd' },
                direct: true,
                filter: function (event, player) {
                    if (player.countCards('h')) return false;
                    for (var i = 0; i < event.cards.length; i++) {
                        if (event.cards[i].original == 'h') return true;
                    }
                    return false;
                },
                content: function () {
                    "step 0"
                    var num = 0;
                    for (var i = 0; i < trigger.cards.length; i++) {
                        if (trigger.cards[i].original == 'h') num++;
                    }
                    player.chooseTarget('选择发动连营的目标', [1, num]).ai = function (target) {
                        var player = _status.event.player;
                        if (player == target) return get.attitude(player, target) + 10;
                        return get.attitude(player, target);
                    }
                    "step 1"
                    if (result.bool) {
                        player.logSkill('relianying', result.targets);
                        game.asyncDraw(result.targets);
                    }
                },
                ai: {
                    threaten: 0.8,
                    effect: {
                        target: function (card) {
                            if (card.name == 'guohe' || card.name == 'liuxinghuoyu') return 0.5;
                        }
                    },
                    noh: true,
                }
            },
            tianlai: {
                audio: 2,
                audioname: ['boss_qinglong'],
                trigger: { player: 'respond' },
                filter: function (event, player) {
                    return event.card.name == 'shan';
                },
                direct: true,
                content: function () {
                    "step 0";
                    player.chooseTarget(get.prompt('releiji')).ai = function (target) {
                        if (target.hasSkill('hongyan')) return 0;
                        return get.damageEffect(target, _status.event.player, _status.event.player, 'thunder');
                    };
                    "step 1"
                    if (result.bool) {
                        player.logSkill('releiji', result.targets, 'thunder');
                        event.target = result.targets[0];
                        event.target.judge(function (card) {
                            var suit = get.suit(card);
                            if (suit == 'spade') return -4;
                            if (suit == 'club') return -2;
                            return 0;
                        });
                    }
                    else {
                        event.finish();
                    }
                    "step 2"
                    if (result.suit == 'club') {
                        event.target.damage('thunder');
                        player.recover();
                    }
                    else if (result.suit == 'spade') {
                        event.target.damage(2, 'thunder');
                    }
                },
                ai: {
                    useShan: true,
                    effect: {
                        target: function (card, player, target, current) {
                            if (get.tag(card, 'respondShan')) {
                                var hastarget = game.hasPlayer(function (current) {
                                    return get.attitude(target, current) < 0;
                                });
                                var be = target.countCards('e', { color: 'black' });
                                if (target.countCards('h', 'shan') && be) {
                                    if (!target.hasSkill('guidao')) return 0;
                                    return [0, hastarget ? target.countCards('he') / 2 : 0];
                                }
                                if (target.countCards('h', 'shan') && target.countCards('h') > 2) {
                                    if (!target.hasSkill('guidao')) return 0;
                                    return [0, hastarget ? target.countCards('h') / 4 : 0];
                                }
                                if (target.countCards('h') > 3 || (be && target.countCards('h') >= 2)) {
                                    return [0, 0];
                                }
                                if (target.countCards('h') == 0) {
                                    return [1.5, 0];
                                }
                                if (target.countCards('h') == 1 && !be) {
                                    return [1.2, 0];
                                }
                                if (!target.hasSkill('guidao')) return [1, 0.05];
                                return [1, Math.min(0.5, (target.countCards('h') + be) / 4)];
                            }
                        }
                    }
                }
            },
        },
        translate: {
            //S
            SNH48Gchenguanhui: '陈观慧',
            SNH48Gchengjue: '成珏',
            SNH48Gchensi: '陈思',
            SNH48Gdaimeng: '戴萌',
            SNH48Gjiangyun: '蒋芸',
            SNH48Gkongxiaoyin: '孔肖吟',
            SNH48Glvyi: '吕一',
            SNH48Gliyuqi: '李宇琪',
            SNH48Gliuzengyan: '刘增艳',
            SNH48Gmohan: '莫寒',
            SNH48Gqianbeiting: '钱蓓婷',
            SNH48Gqiuxinyi: '邱欣怡',
            SNH48Gsunrui: '孙芮',
            SNH48Gshaoxuecong: '邵雪聪',
            SNH48Gwenjingjie: '温晶婕',
            SNH48Gwuzhehan: '吴哲晗',
            SNH48Gxuchenchen: '徐晨辰',
            SNH48Gxujiaqi: '许佳琪',
            SNH48Gxuyiren: '徐伊人',
            SNH48Gxuzixuan: '徐子轩',
            SNH48Gyuandanni: '袁丹妮',
            SNH48Gyuanyuzhen: '袁雨桢',
            SNH48Gzhangyuge: '张语格',

            SNH48Gzhaojiamin: '赵嘉敏',

            //N
            SNH48Gchenjiaying: '陈佳莹',
            SNH48Gchenwenyan: '陈问言',
            SNH48Gfengxinduo: '冯薪朵',
            SNH48Gguoqianyun: '郭倩云',
            SNH48Ghuangtingting: '黄婷婷',
            SNH48Ghaowanqing: '郝婉晴',
            SNH48Ghexiaoyu: '何晓玉',
            SNH48Gjinyingyue: '金莹玥',
            SNH48Gjiangzhenyi: '江真仪',
            SNH48Gliujuzi: '刘菊子',
            SNH48Gliupeixin: '刘佩鑫',
            SNH48Gluting: '陆婷',
            SNH48Gtaoboer: '陶波尔',
            SNH48Gxieni: '谢妮',
            SNH48Gyijiaai: '易嘉爱',
            SNH48Gzhaoyue: '赵粤',
            SNH48Gzhangyi: '张怡',
            SNH48Gzhangyuxin: '张雨鑫',

            SNH48Gjujingyi: '鞠婧祎',

            //H
            SNH48Gfeiqinyuan: '费沁源',
            SNH48Ghongpeiyun: '洪珮雲',
            SNH48Gjiangshan: '姜杉',
            SNH48Gjiangshuting: '蒋舒婷',
            SNH48Glijiaen: '李佳恩',
            SNH48Glinnan: '林楠',
            SNH48Glinsiyi: '林思意',
            SNH48Gliyitong: '李艺彤',
            SNH48Gqiyuzhu: '戚予珠',
            SNH48Gshenmengyao: '沈梦瑶',
            SNH48Gsongyushan: '宋雨珊',
            SNH48Gsunzhenni: '孙珍妮',
            SNH48Gwanlina: '万丽娜',
            SNH48Gwangyi: '王奕',
            SNH48Gxuhan: '徐晗',
            SNH48Gxiongqinxian: '熊沁娴',
            SNH48Gxuyangyuzhuo: '许杨玉琢',
            SNH48Gyanghuiting: '杨惠婷',
            SNH48Gyujiayi: '於佳怡',
            SNH48Gyuanyiqi: '袁一琦',
            SNH48Gzhangxin: '张盺',
            SNH48Gzengxiaowen: '曾晓雯',

            SNH48Gliujiongran: '刘炅然',

            //X
            SNH48Gchenlin: '陈琳',
            SNH48Gchenyunling: '陈韫凌',
            SNH48Gfengxiaofei: '冯晓菲',
            SNH48Glizhao: '李钊',
            SNH48Gpanyingqi: '潘瑛琦',
            SNH48Gqijing: '祁静',
            SNH48Gsongxinran: '宋昕冉',
            SNH48Gsunxinwen: '孙歆文',
            SNH48Gwangjialing: '汪佳翎',
            SNH48Gwangshu: '汪束',
            SNH48Gwangxiaojia: '王晓佳',
            SNH48Gxushiqi: '徐诗琪',
            SNH48Gxietianyi: '谢天依',
            SNH48Gyangbingyi: '杨冰怡',
            SNH48Gyangyunyu: '杨韫玉',
            SNH48Gzhangdansan: '张丹三',
            SNH48Gzhangjiayu: '张嘉予',

            SNH48Glijing: '李晶',

            //技能显示名称，技能说明文字
            tianlai: '天籁',
            tianlai_info: '每当你使用或打出一张【闪】，可令任意一名角色进行一次判定，若结果为梅花，其受到一点雷电伤害，然后你回复一点体力；若结果为黑桃，其受到两点雷电伤害',
            kuaihuo: '快活',
            kuaihuo_info: '当你失去最后的手牌时，你可以令至多X名角色各摸一张牌（X为你此次失去的手牌数）。'
        },
    };
});
