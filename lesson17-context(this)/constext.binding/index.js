const callbackPrompt = {
  message: 'Hello, nice to meet you, tell me your number',
  showPrompt() {
    const userNum = prompt(this.message);
    console.log(userNum);
  },
  showDeferredPrompt(ms) {
    setTimeout(() => this.showPrompt(), ms);
  },
};
