var music = document.getElementById("woodMusic");
var dialog = new mdui.Dialog("#dialog");
var woodQuote = ['运动会之后，昏迷66天，15岁70斤', '得甲流后一天喷射43次，住在厕所里，每次喷射完就记一次', '#鼎立', '#坚守', '#道德高位', '#挺进', '#严肃文艺', '#思维品质', '#浩浩汤汤', '#全盘认知', '#康庄大道', '#观瞻', '#三位一体', '#对标', '#课本哪篇文章的回溯', '#大学语文', '#推进', '#思辨', '#一级思辨', '#二级思辨', '#三级思辨', '#单向思维', '#高度', '#高质量', '#高水平', '#拉整卷', '#拉模卷', '#拉高考卷', '#泰国骑大象——高位打仗', '上实田林三驾马车 朱琳 yj cjj', '上海语文教研组出一套卷子我就要看一下，不然不放心', '上实是传统物理强校', '去年的卷子难了我就很担心，明年简单了我们会考不好', '宇宙的边疆，后羿是外星人，硅基生物，本来有十个太阳，射掉九个', '紫菱洲，紫气东来，帝王气象，要么是元春，要么是探春', '张源：致仕是辞官。朱：什么辞官，做官！', '你们不要把我当说书先生，记笔记呀！！！', '61和62，平均下来60.5', '华师大的墙这么高，我连蹬六下噌就上去了', '上海市园丁奖获得者，高级教师，布尔什维克，', '他们都叫我去评特级教师，我懒得去评', '你们作文赶快交过来，我好过一会儿开会的时候批。', '开会批作文的时候被徐红点名表扬', 'yj其实很有钱，在澳大利亚有个酒庄', '我老公公司里有个女的找老公闹事，我跟他说要给个解释，然后就去散步了', '小时候我妈不让我跟一个长得像外国人的新疆人谈恋爱，我就绝食，我妈也不管我，后来我实在忍不住了，我爸就偷偷给我送吃的', '以下皆属废话', '以上皆属废话', '我看红楼梦看了两百多遍', '我倒背史记，项羽本纪倒背如流', '我女儿是生物竞赛生', '你们班怎么那么臭啊', '我现在一定要做正宫了，三年来了，没有捞到一个月的正宫（指语文老师的地位先后因生地、英语、物化考试而降低）', '时间裁缝：', '韩愈非常欣赏顾炎武的说法', '谢眺《和徐都曹》“日华川上动”化用了范仲淹的《岳阳楼记》“浮光跃金”', '让我们看看2019年模卷的作文题回溯的是课本哪篇文章', '“我想问一下作文”“你要不要刷一下语基？”', '大论证段出不来', '大论证段砸死了', '就算卖带鱼，一定要结尾点题，总论得砸死', '偏到爪哇国去了', '文言文一少一分就要做五十篇才行', '这是极端错误的。对不对呀？', '高考前一个月你还在跟我搞素质教育，你脑子坏掉了！', '考试作弊，眼睛瞎掉，肠子烂掉', '今年数学一定是很难的', '想上120的同学，必须推进大学语文', '我现在恨不得把我的脑子复制给你们', '我布尔什维克，我不能看黄历，我应该看公历', '从《庖丁解牛》看“差生文具多”'];


function unmuteAndPlay() {
    music.muted = false;
    music.play();
}

var mask = document.getElementById("mask");
var btn = document.getElementById("btn");
// 当页面加载完成后，显示遮罩层
window.onload = function () {
    mask.style.display = "block";
    document.getElementById("woodQuote").innerHTML = "<wood>木木</wood>曾经说过：" + woodQuote[Math.floor(Math.random() * woodQuote.length)];
};
// 当按钮被点击时，隐藏遮罩层
btn.onclick = function () {
    document.getElementById("woodLyric").style = "";
    document.getElementById("woodGif").style = "";
    document.getElementById("woodGif").src = "/static/wood.gif";
    mask.style.display = "none";
    unmuteAndPlay();
};

