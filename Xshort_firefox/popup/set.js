var new_blocked_channels = {"banned_channels": ["aarons8675"]};
function onGot(item) {
  if(item.banned_channels == undefined){
    // set it to a null account
    new_blocked_channels.banned_channels = ["@aarons8675"];
  } else {
    new_blocked_channels.banned_channels = item.banned_channels;
    var cn = document.getElementById('cn');
    cn.innerText = new_blocked_channels.banned_channels.length;
  }
}

function onError(error) {
  console.debug(`Error: ${error}`);
}


let tmp_new_blocked_channels = browser.storage.local.get();
tmp_new_blocked_channels.then(onGot, onError);