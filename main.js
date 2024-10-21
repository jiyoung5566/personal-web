document.getElementById('time').innerHTML = new Date().toLocaleString()

// 동그라미 속 영상
function showVideo() {
  var video = document.getElementById('circle-video')
  video.style.display = 'block'
  video.play()
}

function hideVideo() {
  var video = document.getElementById('circle-video')
  video.style.display = 'none'
  video.pause()
}

function showGoal() {
  document.getElementById('goal-text').style.display = 'block'
}

function hideGoal() {
  document.getElementById('goal-text').style.display = 'none'
}

function showFuntion() {
  document.getElementById('funtion-text').style.display = 'block'
}

function hideFuntion() {
  document.getElementById('funtion-text').style.display = 'none'
}
