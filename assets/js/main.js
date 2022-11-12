var leftTab = document.getElementById('left-tab'),
    rightTab = document.getElementById('right-tab');

// 가비지 메서드, 메서드는 페이지가 재생될 때까지 기다려야 합니다.
// window.onload = function(){
//   btn[0].onmouseover=function() {
//     leftTab.style.display="block";
//     leftTab.setAttribute("class","rotateInUpLeft self-animated");
//   }
//   btn[0].onmouseout=function() {
//     leftTab.setAttribute("class","rotateOutDownLeft self-animated");
//     // leftTab.style.display="none";
//   }
//   btn[1].onmouseover=function() {
//     rightTab.style.display="block";
//     rightTab.setAttribute("class","rotateInUpRight self-animated");
//   }
//   btn[1].onmouseout=function() {
//     rightTab.setAttribute("class","rotateOutDownRight self-animated");
//     // leftTab.style.display="none";
//   }
//
// }

function showLeft() {
  leftTab.style.display="block";
  leftTab.setAttribute("class","rotateInUpLeft self-animated");
}

function goneLeft() {
  leftTab.setAttribute("class","rotateOutDownLeft self-animated");
}

function showRight() {
  rightTab.style.display="block";
  rightTab.setAttribute("class","rotateInUpRight self-animated");
}

function goneRight() {
  rightTab.setAttribute("class","rotateOutDownRight self-animated");
}
