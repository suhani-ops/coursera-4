(function (window) {
  var byeSpeaker = {
    speak: function (name) {
      console.log(speakWord + " " + name);
    }
    
  }
  var speakWord = "Good Bye";
window.byeSpeaker = byeSpeaker;
})(window)
var speakWord = "Good Bye";
function speak(name) {
  console.log(speakWord + " " + name);
}