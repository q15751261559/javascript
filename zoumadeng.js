/**
 * Created by wm on 2020/10/8.
 */

var msg="javascript是前端开发中应用最广泛的语言，"+
    "JS实现跑马灯效果";
var position=0;
function scroller() {
    var content=msg.substring(position,position.length)
        +"...."
        +msg.substring(0,position);
    document.getElementById('text1').value=content;
    position++;
    if(position>msg.length){
        position=0;
    }
}
