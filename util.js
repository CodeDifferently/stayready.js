function copyToClipBoard() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  document.execCommand("copy");
  alert("" + copyText.value + "\n\nhas been copied to the clipboard!");
}
