function changeImageAndPlayCreepySound() {

  if (document.getElementById("pic").src == "https://s3.us-east-1.amazonaws.com/workz-uploads-creator-us-east-01/creator/photos/cb456e33-41b7-4666-9f42-02e004268ad9.jpg?t=1549658896470") {
    var audio = new Audio('js/ghost01.mp3');
    audio.play();
    setTimeout(function() {
      audio.pause();
      alert("Audio Stop Successfully");
    }, 1000)
    document.getElementById("pic").src = "https://cdn.zoomg.ir/2018/6/f0097260-5cf5-4503-bb23-c2a897323bda.jpg";
  } else {
    document.getElementById("pic").src = "https://s3.us-east-1.amazonaws.com/workz-uploads-creator-us-east-01/creator/photos/cb456e33-41b7-4666-9f42-02e004268ad9.jpg?t=1549658896470";
  }
}
