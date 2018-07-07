//48武将扩展包，适用于身份场
'use strict';
game.import('character', function (lib, game, ui, get, ai, _status) {
    return {
        name: 'SNH48G',
        connect: true,
        character: {
            SNH48Gchenguanhui: ['female', 'wei', 4, ['biyue', 'guidao']],
            SNH48Gchensi: ['female', 'wei', 3, ['wushuang', 'feiying']],
            SNH48Gjiangyun: ['female', 'wei', 3, ['leiji', 'hunshang']],
            SNH48Gkongxiaoyin: ['female', 'wei', 4, ['lieren']],
            SNH48Gliyuqi: ['female', 'wei', 3, ['mingce', 'longdan']],
            SNH48Gqianbeiting: ['female', 'wei', 4, ['chongzhen', 'longdan']],
            SNH48Gwenjingjie: ['female', 'wei', 4, ['zaiqi']],
            SNH48Gwuzhehan: ['female', 'wu', 3, ['qianxun', 'qixi']],
            SNH48Gyuanyuzhen: ['female', 'wei', 4, ['duanliang']],
            SNH48Gxuzixuan: ['female', 'wei', 4, ['jianxiong']],
            SNH48Gzhaojiamin: ['female', 'wu', 3, ['fankui', 'tiandu']],
            SNH48Gshenzhilin: ['female', 'wu', 4, ['guicai', 'yiji']],
            SNH48Gmohan: ['female', 'wei', 3, ['jizhi', 'qicai']],
            SNH48Gsunrui: ['female', 'wei', 4, ['tiaoxin', 'tiandu']],
            SNH48Gdaimeng: ['female', 'wei', 4, ['kongcheng', 'qianxun']],
            SNH48Gxujiaqi: ['female', 'qun', 3, ['qingcheng', 'duoshi']],
            SNH48Gzhangyuge: ['female', 'qun', 4, ['duanchang', 'weimu']],
            SNH48Gxuchenchen: ['female', 'qun', 3, ['leiji', 'lianying']],
            SNH48Gfengxiaofei: ['female', 'wu', 4, ['wushuang', 'mashu']],

            SNH48Gfengxinduo: ['female', 'qun', 3, ['zhiheng']],
            SNH48Ghuangtingting: ['female', 'qun', 3, ['rende', 'yingzi']],
            SNH48Gliyitong: ['female', 'shu', 3, ['qingcheng', 'duoshi']],
            SNH48Gluting: ['female', 'qun', 3, ['biyue', 'neidou']],
            SNH48Glinsiyi: ['female', 'shu', 3, ['qingcheng', 'duoshi']],
            SNH48Gwanlina: ['female', 'shu', 3, ['paoxiao', 'longdan']],
            SNH48Gyijiaai: ['female', 'shu', 3, ['duwu', 'mashu']],
            SNH48Gjujingyi: ['female', 'qun', 3, ['liuli', 'lianying']],
            SNH48Gwuyanwen: ['female', 'shu', 3, ['qingcheng', 'duoshi']],
            SNH48Gliujiongran: ['female', 'qun', 3, ['qingcheng', 'duoshi']],

            SNH48Gfeiqinyuan: ['female', 'shu', 4, ['jiang', 'luanji']],
            SNH48Gwangxiaojia: ['female', 'wu', 4, ['guanxing', 'danlao']],



            shibing1wei: ['male', 'wei', 0, [], ['unseen']],
            shibing2wei: ['female', 'wei', 0, [], ['unseen']],
            shibing1shu: ['male', 'shu', 0, [], ['unseen']],
            shibing2shu: ['female', 'shu', 0, [], ['unseen']],
            shibing1wu: ['male', 'wu', 0, [], ['unseen']],
            shibing2wu: ['female', 'wu', 0, [], ['unseen']],
            shibing1qun: ['male', 'qun', 0, [], ['unseen']],
            shibing2qun: ['female', 'qun', 0, [], ['unseen']],
        },
        characterIntro: {
            SNH48Gmohan: 'SNH48一期生，SNH48 TeamSII 副队长',
            SNH48Gsunrui: 'SNH48 TeamSII 成员，SNH48二期生',
            SNH48Gdaimeng: 'SNH48 TeamSII 成员，SNH48一期生',
            SNH48Gxujiaqi: 'SNH48 TeamSII 成员，SNH48一期生',
            SNH48Gzhangyuge: 'SNH48 TeamSII 成员，SNH48一期生',
            SNH48Gxuchenchen: 'SNH48 TeamSII 成员，SNH48一期生',
            SNH48Gfengxiaofei: 'SNH48 TeamX 成员，SNH48四期生，曾经是著名SNH48黑，OLD48法人',
            SNH48Gchenguanhui: 'SNH48 TeamSII 成员，SNH48一期生',
            SNH48Gchensi: 'TeamSII 成员，SNH48一期生',
            SNH48Gjiangyun: 'TeamSII 成员，SNH48二期生',
            SNH48Gkongxiaoyin: 'TeamSII 成员，SNH48一期生',
            SNH48Gliyuqi: 'TeamSII 成员，SNH48一期生',
            SNH48Gqianbeiting: 'TeamSII 成员，SNH48一期生',
            SNH48Gwenjingjie: 'TeamSII 成员，SNH48二期生',
            SNH48Gwuzhehan: 'TeamSII 成员，SNH48一期生',
            SNH48Gyuanyuzhen:'TeamSII 成员，SNH48二期生',
            SNH48Gxuzixuan: 'TeamSII 成员，SNH48二期生',
            SNH48Gzhaojiamin: 'TeamSII 成员，SNH48一期生',
            SNH48Gshenzhilin: 'TeamSII 成员，SNH48二期生',

            SNH48Gfengxinduo: 'TeamNII 成员，SNH48二期生',
            SNH48Ghuangtingting: 'TeamNII 成员，SNH48二期生',
            SNH48Gliyitong: 'TeamHII 成员，SNH48二期生',
            SNH48Gluting: 'TeamNII 成员，SNH48二期生',
            SNH48Glinsiyi: 'TeamHII 成员，SNH48二期生',
            SNH48Gwanlina: 'TeamHII 成员，SNH48二期生',
            SNH48Gyijiaai: 'TeamNII 成员，SNH48二期生',
            SNH48Gjujingyi: 'SNH48 明星殿堂 成员，SNH48二期生',
            SNH48Gwuyanwen: 'TeamHII 成员，SNH48三期生',
            SNH48Gliujiongran: 'TeamC 成员，SNH48三期生',

            SNH48Gfeiqinyuan: 'TeamHII 成员，SNH48五期生',
            SNH48Gwangxiaojia: 'TeamX 成员，SNH48四期生',
        },
        characterFilter: {
            SNH48G: function (mode) {
                return mode != 'SNH48G';
            }
        },
        card: {
            
        },
        translate: {
            SNH48Gchenguanhui: '陈观慧',
            SNH48Gchensi: '陈思',
            SNH48Gjiangyun: '蒋芸',
            SNH48Gkongxiaoyin: '孔肖吟',
            SNH48Gliyuqi: '李宇琪',
            SNH48Gqianbeiting: '钱蓓婷',
            SNH48Gwenjingjie: '温晶婕',
            SNH48Gwuzhehan: '吴哲晗',
            SNH48Gyuanyuzhen: '袁雨桢',
            SNH48Gxuzixuan: '徐子轩',
            SNH48Gzhaojiamin: '赵嘉敏',
            SNH48Gshenzhilin: '沈之琳',
            SNH48Gmohan: '莫寒',
            SNH48Gsunrui: '孙芮',
            SNH48Gdaimeng: '戴萌',
            SNH48Gxujiaqi: '许佳琪',
            SNH48Gzhangyuge: '张语格',
            SNH48Gxuchenchen: '徐晨辰',
            SNH48Gfengxiaofei: '冯晓菲',
            SNH48Gfengxinduo: '冯薪朵',
            SNH48Ghuangtingting: '黄婷婷',
            SNH48Gliyitong: '李艺彤',
            SNH48Gluting: '陆婷',
            SNH48Glinsiyi: '林思意',
            SNH48Gwanlina: '万丽娜',
            SNH48Gyijiaai: '易嘉爱',
            SNH48Gjujingyi: '鞠婧祎',
            SNH48Gwuyanwen: '吴燕文',
            SNH48Gliujiongran: '刘炅然',
            SNH48Gfeiqinyuan:'费沁源',
            SNH48Gwangxiaojia:'王晓佳'
        },
    };
});
