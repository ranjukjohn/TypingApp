document.getElementById('paragraph').innerHTML = localStorage.getItem("storageTypeText");
document.getElementById('time').innerHTML = localStorage.getItem("storageTimeDiff");
document.getElementById('mistakes').innerHTML = localStorage.getItem("storageTotalWrongCount");

localStorage.removeItem("storageTypeText");
localStorage.removeItem("storageTimeDiff");
localStorage.removeItem("storageTotalWrongCount");
