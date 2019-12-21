const {
  find,
  insert
} = require("./db");

(async () => {
  await insert("good",
    [{
        "gid": "1",
        "url": "https://img.yzcdn.cn/upload_files/2018/12/11/FkP-IKPH9a73cuCuMc2LwuKd4lIp.png!middle.png",
        "title": "牛奶绒秋冬新品暖绒系列",
        "title2": "高支高密纯棉夏凉被 超透气 三倍柔软 可机洗 有学生宿舍和家用尺寸可选",
        "price": "269.00 ",
        "soldout": "4 ",
        "kucun": "30 "
      },
      {
        "gid": "2",
        "url": "https://img.yzcdn.cn/upload_files/2018/10/17/FrRFUCJg1igxlDdAaaFV5jJxIMIn.jpg!middle.jpg",
        "title": "羊羔绒毯",
        "title2": "超温暖",
        "price": "69.00 ",
        "soldout": "6 ",
        "kucun": "40 "
      },
      {
        "gid": "3",
        "url": "https://img.yzcdn.cn/upload_files/2018/10/12/FmDp9d12sns8kv7zWGDk8mNMNNPU.jpg!middle.jpg",
        "title": "异形带扣卡通羊羔绒毯",
        "title2": "高支高密度学生专属纯棉三件套，双十一大促！",
        "price": "69.00 ",
        "soldout": "8 ",
        "kucun": "60 "
      },
      {
        "gid": "4",
        "url": "https://img.yzcdn.cn/upload_files/2019/07/18/FkOv5ruS4buT42xbC0-LQSTvfepa.jpg!middle.jpg",
        "title": "学生专属60s长绒棉高级三件套",
        "title2": "【生如夏花】学生专属全棉三件套",
        "price": "349.00 ",
        "soldout": "1 ",
        "kucun": "73 "
      },
      {
        "gid": "5",
        "url": "https://img.yzcdn.cn/upload_files/2019/07/18/FrgTemBI3eAsoZwoM1czc_Xx-J-V.jpg!middle.jpg",
        "title": "镂空星星防尘顶蚊帐纱一体床帘",
        "title2": "学生专属60s长绒棉高级三件套",
        "price": "191.00 ",
        "soldout": "7 ",
        "kucun": "88 "
      },
      {
        "gid": "6",
        "url": "https://img.yzcdn.cn/upload_files/2019/07/18/FrEaBYVBSxeWydXNrKfQnwxjmpVl.jpg!middle.jpg",
        "title": "学生专属全棉水洗棉高级九件套",
        "title2": "【海阔天空】纯棉三件套",
        "price": "1029.00 ",
        "soldout": "8 ",
        "kucun": "103 "
      },
      {
        "gid": "7",
        "url": "https://img.yzcdn.cn/upload_files/2019/08/19/FgOEiyHzPMpRNu8ePNwzxi-qIQ_R.jpg!middle.jpg",
        "title": "数码印花防蚊遮光一体帘",
        "title2": "学生专属全棉水洗棉高级三件套",
        "price": "139.00 ",
        "soldout": "5 ",
        "kucun": "118 "
      },
      {
        "gid": "8",
        "url": "https://img.yzcdn.cn/upload_files/2019/06/05/FmPYc5f6G3e8PXdT0uBp4qRphKUC.jpg!middle.jpg",
        "title": "清新北欧风床帘",
        "title2": "【斑马时光】学生专属全棉三件套",
        "price": "39.80 ",
        "soldout": "6 ",
        "kucun": "133 "
      },
      {
        "gid": "9",
        "url": "https://img.yzcdn.cn/upload_files/2019/07/09/Fl70zXwrTqgUCt7bQHtwa2i3yk6o.jpg!middle.jpg",
        "title": "【甜甜的】限量版五件套",
        "title2": "【我的秘密 — 黄】学生专属全棉三件套",
        "price": "399.00 ",
        "soldout": "6 ",
        "kucun": "148 "
      },
      {
        "gid": "10",
        "url": "https://img.yzcdn.cn/upload_files/2019/05/21/FiEd8MDn7XSIzj71mJWYOxhGllob.jpg!middle.jpg",
        "title": "可爱猪猪冰丝、全棉水洗棉球球、流苏靠垫靠背床靠；抱枕系列",
        "title2": "【匆匆那年】学生专属全棉三件套",
        "price": "38.00 ",
        "soldout": "5 ",
        "kucun": "163 "
      },
      {
        "gid": "11",
        "url": "https://img.yzcdn.cn/upload_files/2019/06/13/Fno0xfgpAMI78CiZNqy4ncwNPLVA.jpg!middle.jpg",
        "title": "泰国天然乳胶枕系列",
        "title2": "【真的爱你】学生专属全棉三件套",
        "price": "158.00 ",
        "soldout": "60 ",
        "kucun": "178 "
      },
      {
        "gid": "12",
        "url": "https://img.yzcdn.cn/upload_files/2019/07/09/FmRxPm_18w3nUgF5ydyvuiAxgwMB.jpg!middle.jpg",
        "title": "【我的秘密-黄】五件套",
        "title2": "100% 纯棉",
        "price": "349.00 ",
        "soldout": "88 ",
        "kucun": "193 "
      },
      {
        "gid": "13",
        "url": "https://img.yzcdn.cn/upload_files/2019/04/05/FvK_WpU__bbDSux7G9XfeIW9tyZd.jpg!middle.jpg",
        "title": "全竹青碳化学生凉席",
        "title2": "【年少有你】学生专属全棉三件套",
        "price": "69.00 ",
        "soldout": "77 ",
        "kucun": "208 "
      },
      {
        "gid": "14",
        "url": "https://img.yzcdn.cn/upload_files/2019/05/08/FhPl8pQwqHVOM9XOpPE2-1TE3s5Y.jpg!middle.jpg",
        "title": "提花凉感学生冰丝席凉席",
        "title2": "【甜甜的】限量版 学生专属全棉三件套",
        "price": "78.00 ",
        "soldout": "66 ",
        "kucun": "223 "
      },
      {
        "gid": "15",
        "url": "https://img.yzcdn.cn/upload_files/2019/06/05/FvT7n_V0Lc2ogDE9KP7SPQlSiVOB.jpg!middle.jpg",
        "title": "空气凉感学生专属冰丝凉席",
        "title2": "【乔木之思】学生专属全棉三件套",
        "price": "99.00 ",
        "soldout": "0 ",
        "kucun": "238 "
      },
      {
        "gid": "16",
        "url": "https://img.yzcdn.cn/upload_files/2017/07/12/FkX3LyrUf6r5zU_qwk4yqAqAG1gB.jpg!middle.jpg",
        "title": "加密正开门拉链防尘清新蚊帐",
        "title2": "纯棉三件套 = 枕套+被套+床单",
        "price": "29.00 ",
        "soldout": "5 ",
        "kucun": "253 "
      },
      {
        "gid": "17",
        "url": "https://img.yzcdn.cn/upload_files/2019/04/09/FjB685duHc7rqrXf_kcASwl6CHWD.jpg!middle.jpg",
        "title": "多尺寸全冰丝凉席、家用冰丝席",
        "title2": "【纸短情长】学生专属三件套",
        "price": "79.00 ",
        "soldout": "6 ",
        "kucun": "268 "
      },
      {
        "gid": "18",
        "url": "https://img.yzcdn.cn/upload_files/2019/06/05/FsO4tdggil7dDTvNxn6b6pYJ83cb.jpg!middle.jpg",
        "title": "格子条纹床帘系列",
        "title2": "【风华正茂】限量款学生专属三件套",
        "price": "39.80 ",
        "soldout": "3 ",
        "kucun": "283 "
      },
      {
        "gid": "19",
        "url": "https://img.yzcdn.cn/upload_files/2019/06/05/FjoLMwpRNyoLlnrdzpNxHTD613JO.jpg!middle.jpg",
        "title": "星球床帘系列",
        "title2": "【向往生活 — 蓝】学生专属全棉三件套",
        "price": "39.80 ",
        "soldout": "5 ",
        "kucun": "298 "
      },
      {
        "gid": "20",
        "url": "https://img.yzcdn.cn/upload_files/2019/05/09/Fn98UmYCOHgeRCd6yAg9qVV7lbYY.png!middle.png",
        "title": "床帘可伸缩全框支架",
        "title2": "【向往生活 — 灰 】学生专属六件套",
        "price": "69.00 ",
        "soldout": "2 ",
        "kucun": "313 "
      },
      {
        "gid": "21",
        "url": "https://img.yzcdn.cn/upload_files/2019/01/22/FgADDFO53n774_TRxKE_ojYMLCeu.jpg!middle.jpg",
        "title": "中空棉毛巾 1条装 特惠3条装 特惠5条装",
        "title2": "【别具一格】学生专属全棉三件套",
        "price": "22.00 ",
        "soldout": "1 ",
        "kucun": "328 "
      },
      {
        "gid": "22",
        "url": "https://img.yzcdn.cn/upload_files/2019/07/26/Fp9IL81jkrEWxMEst2dtc1IE2ps2.jpg!middle.jpg",
        "title": "静好数码印花防蚊遮光一体帘",
        "title2": "【印象北欧】学生专属全棉三件套",
        "price": "149.00 ",
        "soldout": "0 ",
        "kucun": "343 "
      },
      {
        "gid": "23",
        "url": "https://img.yzcdn.cn/upload_files/2019/07/20/Fi9hz78nqWaWwhX_v4CPRGQ02nkd.jpg!middle.jpg",
        "title": "泰国进口天然乳胶床垫",
        "title2": "【我的秘密 —紫】学生专属六件套",
        "price": "699.00 ",
        "soldout": "90 ",
        "kucun": "358 "
      },
      {
        "gid": "24",
        "url": "https://img.yzcdn.cn/upload_files/2019/07/26/FubEHbz4se4T9-yv3U7nRrJx2I1D.jpg!middle.jpg",
        "title": "绿色镂空星星防尘顶蚊帐纱一体床帘",
        "title2": "【校园时代】限量款学生专属三件套",
        "price": "191.00 ",
        "soldout": "5 ",
        "kucun": "373 "
      },
      {
        "gid": "25",
        "url": "https://img.yzcdn.cn/upload_files/2019/07/26/Fu-H-yHFScSDcWI7IX8AsOjsr9hY.jpg!middle.jpg",
        "title": "灰色镂空星星防尘顶蚊帐纱一体床帘",
        "title2": "精湛的蝴蝶结拼色设计工艺，立体绒感字母设计，个性时尚。。。。。。",
        "price": "206.00 ",
        "soldout": "4 ",
        "kucun": "388 "
      },
      {
        "gid": "26",
        "url": "https://img.yzcdn.cn/upload_files/2019/03/30/FlB4h9nBDoT3hRFVQ-wB88U3dGzg.jpg!middle.jpg",
        "title": "舒适纯棉高密度夏凉被空调被系列系列",
        "title2": "100%全棉",
        "price": "139.00 ",
        "soldout": "6 ",
        "kucun": "403 "
      },
      {
        "gid": "27",
        "url": "https://img.yzcdn.cn/upload_files/2018/07/13/FoEkCUkpn9I2nbBW9K6BAVn1bhTG.jpg!middle.jpg",
        "title": "全棉夏凉被空调被系列",
        "title2": "【年少有你】学生专属五件套",
        "price": "128.00 ",
        "soldout": "5 ",
        "kucun": "418 "
      },
      {
        "gid": "28",
        "url": "https://img.yzcdn.cn/upload_files/2019/10/15/FglJjkLoLpaOobjZyamhBngeyl3D.jpg!middle.jpg",
        "title": "治愈系加厚秋冬棉绒宿舍三件套 标准/加大家用四件套",
        "title2": "【甜甜的】限量版学生专属五件套",
        "price": "129.00 ",
        "soldout": "2 ",
        "kucun": "433 "
      },
      {
        "gid": "29",
        "url": "https://img.yzcdn.cn/upload_files/2019/07/11/FiKT_eHs7NZRNlYC6C4JVO-wXU3P.jpg!middle.jpg",
        "title": "本屋创品学生专属纯棉三件套",
        "title2": "100%全棉",
        "price": "179.00 ",
        "soldout": "5 ",
        "kucun": "448 "
      },
      {
        "gid": "30",
        "url": "https://img.yzcdn.cn/upload_files/2019/07/10/FmgK_7nhsdkoVx_gENn8fWktg53C.jpg!middle.jpg",
        "title": "【生如夏花】三件套",
        "title2": "【生如夏花】学生专属五件套",
        "price": "179.00 ",
        "soldout": "7 ",
        "kucun": "463 "
      },
      {
        "gid": "31",
        "url": "https://img.yzcdn.cn/upload_files/2019/07/18/FkOv5ruS4buT42xbC0-LQSTvfepa.jpg!middle.jpg",
        "title": "学生专属60s长绒棉高级三件套",
        "title2": "100%全棉",
        "price": "349.00 ",
        "soldout": "1 ",
        "kucun": "478 "
      },
      {
        "gid": "32",
        "url": "https://img.yzcdn.cn/upload_files/2019/07/10/FiKmGRAYVb6jk2midzbu4m1SmwVX.jpg!middle.jpg",
        "title": "【海阔天空】三件套",
        "title2": "【我的秘密-黄】学生专属五件套",
        "price": "179.00 ",
        "soldout": "6 ",
        "kucun": "493 "
      },
      {
        "gid": "33",
        "url": "https://img.yzcdn.cn/upload_files/2019/07/18/FvnyoWxsSuzXIPlJLZQ3EB9OOKze.jpg!middle.jpg",
        "title": "学生专属全棉水洗棉高级三件套",
        "title2": "【纸短情长】学生专属五件套",
        "price": "269.00 ",
        "soldout": "6 ",
        "kucun": "508 "
      },
      {
        "gid": "34",
        "url": "https://img.yzcdn.cn/upload_files/2018/07/17/FstOsABZXAeV8ZpShVaFyF-JAWhf.jpg!middle.jpg",
        "title": "【斑马时光】三件套",
        "title2": "【真的爱你】学生专属五件套",
        "price": "179.00 ",
        "soldout": "9 ",
        "kucun": "523 "
      },
      {
        "gid": "35",
        "url": "https://img.yzcdn.cn/upload_files/2019/07/09/FmRxPm_18w3nUgF5ydyvuiAxgwMB.jpg!middle.jpg",
        "title": "【我的秘密 — 黄】三件套",
        "title2": "100%全棉",
        "price": "179.00 ",
        "soldout": "10 ",
        "kucun": "538 "
      },
      {
        "gid": "36",
        "url": "https://img.yzcdn.cn/upload_files/2019/07/10/FlUOP-zvpN7R25yD8UKQ1HtUeiTM.jpg!middle.jpg",
        "title": "【匆匆那年】三件套",
        "title2": "【印象北欧】学生专属五件套",
        "price": "179.00 ",
        "soldout": "5 ",
        "kucun": "553 "
      },
      {
        "gid": "37",
        "url": "https://img.yzcdn.cn/upload_files/2019/07/09/FuoAzbmbp4r1cX0aqYczdHHr9uhp.jpg!middle.jpg",
        "title": "【真的爱你】三件套",
        "title2": "【风华正茂】限量款学生专属五件套",
        "price": "179.00 ",
        "soldout": "6 ",
        "kucun": "568 "
      },
      {
        "gid": "38",
        "url": "https://img.yzcdn.cn/upload_files/2019/07/10/FkC5m3zq3CMJGhzltqHuRKTrDcnw.jpg!middle.jpg",
        "title": "【光辉岁月】三件套",
        "title2": "【向往生活-蓝】学生专属五件套",
        "price": "179.00 ",
        "soldout": "2 ",
        "kucun": "583 "
      },
      {
        "gid": "39",
        "url": "https://img.yzcdn.cn/upload_files/2019/07/09/FqF_pNuPRLP7CwhgXntOCiKMdmoQ.jpg!middle.jpg",
        "title": "【年少有你】三件套",
        "title2": "【乔木之思】学生专属五件套",
        "price": "179.00 ",
        "soldout": "6 ",
        "kucun": "598 "
      },
      {
        "gid": "40",
        "url": "https://img.yzcdn.cn/upload_files/2019/07/09/Fl70zXwrTqgUCt7bQHtwa2i3yk6o.jpg!middle.jpg",
        "title": "【甜甜的】限量版 三件套",
        "title2": "【向往生活-灰】学生专属五件套",
        "price": "219.00 ",
        "soldout": "8 ",
        "kucun": "613 "
      },
      {
        "gid": "41",
        "url": "https://img.yzcdn.cn/upload_files/2019/07/10/FnJJqHAlpzbXErYryBvnMD3pdf7J.jpg!middle.jpg",
        "title": "【乔木之思】三件套",
        "title2": "100%全棉",
        "price": "179.00 ",
        "soldout": "69 ",
        "kucun": "628 "
      },
      {
        "gid": "42",
        "url": "https://img.yzcdn.cn/upload_files/2019/07/08/FvpzN-K671QkxWEPyYHulNzJOihs.jpg!middle.jpg",
        "title": "【青出于蓝】三件套",
        "title2": "【我的秘密-紫】学生专属五件套",
        "price": "179.00 ",
        "soldout": "22 ",
        "kucun": "643 "
      },
      {
        "gid": "43",
        "url": "https://img.yzcdn.cn/upload_files/2019/07/10/Fs1lUsp5mEjXCsOnEeO35dhZ7UK6.jpg!middle.jpg",
        "title": "【纸短情长】三件套",
        "title2": "【青出于蓝】学生专属五件套",
        "price": "179.00 ",
        "soldout": "149 ",
        "kucun": "658 "
      },
      {
        "gid": "44",
        "url": "https://img.yzcdn.cn/upload_files/2019/07/11/FpATcsKN-PYMT2OPwGe7V3mawnfK.jpg!middle.jpg",
        "title": "【风华正茂】限量款三件套",
        "title2": "【别具一格】学生专属五件套",
        "price": "219.00 ",
        "soldout": "699 ",
        "kucun": "673 "
      },
      {
        "gid": "45",
        "url": "https://img.yzcdn.cn/upload_files/2019/07/08/FhKrpaXhuh8DCnufJTFthoc3Jvke.jpg!middle.jpg",
        "title": "【向往生活 — 蓝】三件套",
        "title2": "【年少有你】学生专属五件套",
        "price": "179.00 ",
        "soldout": "191 ",
        "kucun": "688 "
      },
      {
        "gid": "46",
        "url": "https://img.yzcdn.cn/upload_files/2019/07/08/FkvAw1SzjDB4OJBZT1R-xeQWu9Oq.jpg!middle.jpg",
        "title": "【向往生活 — 灰 】三件套",
        "title2": "【甜甜的】限量版学生专属五件套",
        "price": "179.00 ",
        "soldout": "206 ",
        "kucun": "703 "
      },
      {
        "gid": "47",
        "url": "https://img.yzcdn.cn/upload_files/2019/07/10/FnyRLH3F4TTM1KjzJtQRtJATB9Jh.jpg!middle.jpg",
        "title": "【别具一格】三件套",
        "title2": "100%全棉",
        "price": "179.00 ",
        "soldout": "139 ",
        "kucun": "718 "
      },
      {
        "gid": "48",
        "url": "https://img.yzcdn.cn/upload_files/2019/07/09/FscKzq66UgT0MQNnqU9QUKWXpnC3.jpg!middle.jpg",
        "title": "【印象北欧】三件套",
        "title2": "【生如夏花】学生专属五件套",
        "price": "179.00 ",
        "soldout": "128 ",
        "kucun": "733 "
      },
      {
        "gid": "49",
        "url": "https://img.yzcdn.cn/upload_files/2019/07/11/Fo3FglNVGRj2HRWar2t_ZqFkSaJQ.jpg!middle.jpg",
        "title": "【逢考必过】三件套",
        "title2": "100%全棉",
        "price": "179.00 ",
        "soldout": "129 ",
        "kucun": "748 "
      },
      {
        "gid": "50",
        "url": "https://img.yzcdn.cn/upload_files/2019/07/09/FrHRo0OfGSPuH2kV7uZhv-8q4khA.jpg!middle.jpg",
        "title": "【我的秘密 — 紫】三件套",
        "title2": "【我的秘密-黄】学生专属五件套",
        "price": "179.00 ",
        "soldout": "179 ",
        "kucun": "763 "
      },
      {
        "gid": "51",
        "url": "https://img.yzcdn.cn/upload_files/2019/07/11/FhBm49Qo4TJ4i6OiQnT4v1HWo932.jpg!middle.jpg",
        "title": "【校园时代】限量款三件套",
        "title2": "【纸短情长】学生专属五件套",
        "price": "219.00 ",
        "soldout": "179 ",
        "kucun": "778 "
      },
      {
        "gid": "52",
        "url": "https://img.yzcdn.cn/upload_files/2018/07/27/FrY7cqCckq7jcRTnI99q_b42En4m.jpg!middle.jpg",
        "title": "文艺清新蝴蝶结拼色系列四件套",
        "title2": "【真的爱你】学生专属五件套",
        "price": "389.00 ",
        "soldout": "349 ",
        "kucun": "793 "
      },
      {
        "gid": "53",
        "url": "https://img.yzcdn.cn/upload_files/2017/07/07/Fh7fkA9lIyiIP91s1b8FiyRc76z0.jpg!middle.jpg",
        "title": "混搭安德鲁全棉家用四件套",
        "title2": "100%全棉",
        "price": "288.00 ",
        "soldout": "179 ",
        "kucun": "808 "
      },
      {
        "gid": "54",
        "url": "https://img.yzcdn.cn/upload_files/2019/07/10/FiKmGRAYVb6jk2midzbu4m1SmwVX.jpg!middle.jpg",
        "title": "【海阔天空】五件套",
        "title2": "【印象北欧】学生专属五件套",
        "price": "349.00 ",
        "soldout": "269 ",
        "kucun": "823 "
      },
      {
        "gid": "55",
        "url": "https://img.yzcdn.cn/upload_files/2019/07/09/Fpe3WtOgCSu4yt63htExyz7TlqCT.jpg!middle.jpg",
        "title": "【年少有你】五件套",
        "title2": "【风华正茂】限量款学生专属五件套",
        "price": "349.00 ",
        "soldout": "179 ",
        "kucun": "838 "
      },
      {
        "gid": "56",
        "url": "https://img.yzcdn.cn/upload_files/2019/07/09/Fl70zXwrTqgUCt7bQHtwa2i3yk6o.jpg!middle.jpg",
        "title": "【甜甜的】限量版五件套",
        "title2": "【向往生活-蓝】学生专属五件套",
        "price": "399.00 ",
        "soldout": "179 ",
        "kucun": "853 "
      },
      {
        "gid": "57",
        "url": "https://img.yzcdn.cn/upload_files/2019/07/10/FkC5m3zq3CMJGhzltqHuRKTrDcnw.jpg!middle.jpg",
        "title": "【光辉岁月】五件套",
        "title2": "【乔木之思】学生专属五件套",
        "price": "349.00 ",
        "soldout": "179 ",
        "kucun": "868 "
      },
      {
        "gid": "58",
        "url": "https://img.yzcdn.cn/upload_files/2019/07/10/FmgK_7nhsdkoVx_gENn8fWktg53C.jpg!middle.jpg",
        "title": "【生如夏花】五件套",
        "title2": "【向往生活-灰】学生专属五件套",
        "price": "349.00 ",
        "soldout": "179 ",
        "kucun": "883 "
      },
      {
        "gid": "59",
        "url": "https://img.yzcdn.cn/upload_files/2019/07/10/Fst0r4vuGMhOLIA_2D5JC7RjrNbx.jpg!middle.jpg",
        "title": "【匆匆那年】五件套",
        "title2": "100%全棉",
        "price": "349.00 ",
        "soldout": "179 ",
        "kucun": "898 "
      },
      {
        "gid": "60",
        "url": "https://img.yzcdn.cn/upload_files/2019/07/09/FmRxPm_18w3nUgF5ydyvuiAxgwMB.jpg!middle.jpg",
        "title": "【我的秘密-黄】五件套",
        "title2": "【我的秘密-紫】学生专属五件套",
        "price": "349.00 ",
        "soldout": "90 ",
        "kucun": "913 "
      },
      {
        "gid": "61",
        "url": "https://img.yzcdn.cn/upload_files/2019/07/10/Fs1lUsp5mEjXCsOnEeO35dhZ7UK6.jpg!middle.jpg",
        "title": "【纸短情长】五件套",
        "title2": "【青出于蓝】学生专属五件套",
        "price": "349.00 ",
        "soldout": "5 ",
        "kucun": "928 "
      },
      {
        "gid": "62",
        "url": "https://img.yzcdn.cn/upload_files/2019/07/09/FnVMjhl-c-b5pwp-TbHYtdO1tWtU.jpg!middle.jpg",
        "title": "【真的爱你】五件套",
        "title2": "【别具一格】学生专属五件套",
        "price": "349.00 ",
        "soldout": "4 ",
        "kucun": "943 "
      },
      {
        "gid": "63",
        "url": "https://img.yzcdn.cn/upload_files/2018/07/17/FstOsABZXAeV8ZpShVaFyF-JAWhf.jpg!middle.jpg",
        "title": "【斑马时光】五件套",
        "title2": "【年少有你】学生专属五件套",
        "price": "349.00 ",
        "soldout": "6 ",
        "kucun": "958 "
      },
      {
        "gid": "64",
        "url": "https://img.yzcdn.cn/upload_files/2019/07/09/FscKzq66UgT0MQNnqU9QUKWXpnC3.jpg!middle.jpg",
        "title": "【印象北欧】五件套",
        "title2": "【甜甜的】限量版学生专属五件套",
        "price": "349.00 ",
        "soldout": "5 ",
        "kucun": "973 "
      },
      {
        "gid": "65",
        "url": "https://img.yzcdn.cn/upload_files/2018/07/17/FtBfPGegB4C0nT6XuSeD4wxKEfK-.jpg!middle.jpg",
        "title": "【风华正茂】限量款五件套",
        "title2": "100%全棉",
        "price": "399.00 ",
        "soldout": "2 ",
        "kucun": "988 "
      },
      {
        "gid": "66",
        "url": "https://img.yzcdn.cn/upload_files/2019/07/08/Fshqw3W8wgHKoSz41UoLeWH-9Bgy.jpg!middle.jpg",
        "title": "【向往生活 — 蓝】五件套",
        "title2": "【生如夏花】学生专属五件套",
        "price": "349.00 ",
        "soldout": "5 ",
        "kucun": "1003 "
      },
      {
        "gid": "67",
        "url": "https://img.yzcdn.cn/upload_files/2019/07/10/FnJJqHAlpzbXErYryBvnMD3pdf7J.jpg!middle.jpg",
        "title": "【乔木之思】五件套",
        "title2": "100%全棉",
        "price": "349.00 ",
        "soldout": "7 ",
        "kucun": "1018 "
      },
      {
        "gid": "68",
        "url": "https://img.yzcdn.cn/upload_files/2019/07/08/Fp2wF7G6psjv1L-xHF_wlGSIfXTq.jpg!middle.jpg",
        "title": "【向往生活 — 灰】五件套",
        "title2": "【我的秘密-黄】学生专属五件套",
        "price": "349.00 ",
        "soldout": "1 ",
        "kucun": "1033 "
      },
      {
        "gid": "69",
        "url": "https://img.yzcdn.cn/upload_files/2019/07/11/FhBm49Qo4TJ4i6OiQnT4v1HWo932.jpg!middle.jpg",
        "title": "【校园时代】限量款五件套",
        "title2": "【纸短情长】学生专属五件套",
        "price": "399.00 ",
        "soldout": "6 ",
        "kucun": "1048 "
      },
      {
        "gid": "70",
        "url": "https://img.yzcdn.cn/upload_files/2019/07/09/FrHRo0OfGSPuH2kV7uZhv-8q4khA.jpg!middle.jpg",
        "title": "【我的秘密 — 紫】五件套",
        "title2": "【真的爱你】学生专属五件套",
        "price": "349.00 ",
        "soldout": "6 ",
        "kucun": "1063 "
      },
      {
        "gid": "71",
        "url": "https://img.yzcdn.cn/upload_files/2019/07/08/FvpzN-K671QkxWEPyYHulNzJOihs.jpg!middle.jpg",
        "title": "【青出于蓝】五件套",
        "title2": "100%全棉",
        "price": "349.00 ",
        "soldout": "9 ",
        "kucun": "1078 "
      },
      {
        "gid": "72",
        "url": "https://img.yzcdn.cn/upload_files/2019/07/11/Fo3FglNVGRj2HRWar2t_ZqFkSaJQ.jpg!middle.jpg",
        "title": "【逢考必过】五件套",
        "title2": "【印象北欧】学生专属五件套",
        "price": "349.00 ",
        "soldout": "10 ",
        "kucun": "1093 "
      },
      {
        "gid": "73",
        "url": "https://img.yzcdn.cn/upload_files/2019/07/10/FnyRLH3F4TTM1KjzJtQRtJATB9Jh.jpg!middle.jpg",
        "title": "【别具一格-】五件套",
        "title2": "【风华正茂】限量款学生专属五件套",
        "price": "349.00 ",
        "soldout": "5 ",
        "kucun": "1108 "
      }

    ])

  let data = await find("tushu");
  console.log(data);
})();