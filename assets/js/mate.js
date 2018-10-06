function populate_scale(){
  var vw = document.documentElement.clientWidth;
  var scale_needle_container=document.getElementById('scale_needle_container');
  var needle_dst = Math.floor(vw / 7);
  for (var i = 0; i < needle_dst; i++) {
    var already_needle=scale_needle_container.innerHTML;
    if (i % 2 === 0) {
      scale_needle_container.innerHTML=already_needle+'<span class="needle med"></span>';
    }
    else if (i % 4 === 1) {
      scale_needle_container.innerHTML=already_needle+'<span class="needle big"></span>';
    }
    else {
      scale_needle_container.innerHTML=already_needle+'<span class="needle"></span>';
    }
  }
}
function track_mouse(e){
  var mx = e.clientX;
  var my = e.clientY;
  console.log(mx+','+my);
  document.getElementById("upper_scale_pointer").style.left=mx+'px';
}
document.onmousemove = function(event) {track_mouse(event)};
populate_scale();
