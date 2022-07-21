export function writeMessage(message, color) {
  const msg = document.getElementById('message');
  msg.innerHTML = message;
  msg.style.color = color;
}
