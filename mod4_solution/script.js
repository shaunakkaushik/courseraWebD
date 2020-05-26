
(function(){
var names = ["Yaakov", "John", "Jen", "jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var i=0;i<names.length;i++) {
var firstLetter = names[i].charAt(0);
firstLetter = firstLetter.toLowerCase();
if(firstLetter == 'j')
{
    byeSpeaker.speak(names[i]);
}
else{
    helloSpeaker.speak(names[i]);
}
}
})();
