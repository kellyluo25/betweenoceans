var main = document.getElementById('main-text');
var attr = document.getElementById('text-attr');
var title = document.getElementById('text-title');

var oceancontent = [
    {text: "We hide our emotions <br /> Under the surface and try to pretend <br /> It feels like there's oceans <br /> Between me and you once again", title: "Oceans", attr: "Seafret"}, 
    {text: "And I hear your ship is comin' in <br /> Your tears a sea for me to swim <br /> And I hear a storm is comin' in <br /> My dear, is it all we’ve ever been?", title: "Anchor", attr: "Novo Amor"},
    {text: "If you're gonna let me down, let me down gently <br /> Don't pretend that you don't want me <br /> Our love ain't water under the bridge", title: "Water Under the Bridge", attr: "Adele"},
    {text: "And the arms of the ocean are carrying me <br /> And all this devotion was rushing out of me  <br /> And the crashes are heaven, for a sinner like me  <br /> But the arms of the ocean delivered me", title: "Never Let Me Go", attr: "Florence + the Machine"},
    {text: "you broke the ocean in <br /> half to be here.<br />only to meet nothing that wants you.", title: "immigrant", attr: "Nayyirah Waheed"}
    
];

function newContent () {
    var i = (Math.random() * oceancontent.length) | 0;
    main.innerHTML = oceancontent[i].text;
    attr.innerHTML = oceancontent[i].attr;
    title.innerHTML = oceancontent[i].title;
}

newContent();

document.body.onkeyup = function(event){
    if(event.keyCode == 32){
        newContent();
    }
}