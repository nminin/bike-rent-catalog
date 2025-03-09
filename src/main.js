function getTelegramData() {
  if (window.Telegram) {
    // Using Telegram Web App to get user data
    const user = Telegram.WebApp.initDataUnsafe;
    document.getElementById("output").innerText = `User Data: ${JSON.stringify(user)}`;
  } else {
    document.getElementById("output").innerText = "Telegram Web App is not available.";
  }
}

function sendMessageToTelegram() {
  if (window.Telegram) {
    // Sending a message to Telegram using Web App API
    Telegram.WebApp.sendData('Hello from Web App!');
    document.getElementById("output").innerText = "Message sent to Telegram!";
  } else {
    document.getElementById("output").innerText = "Telegram Web App is not available.";
  }
}
