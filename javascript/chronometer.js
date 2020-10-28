class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(callback) {
    setInterval(() => this.currentTime++, 1000)
  }
  getMinutes() {
    const minutes = Math.floor(this.currentTime / 60)
    return minutes
  }
  getSeconds() {
    const seconds = Math.floor(this.currentTime % 60)
    return seconds
  }
  twoDigitsNumber() {
    const twoDigitsMinutes = ("0" + this.minutes).slice(-2)
    return twoDigitsMinutes
  }
  stopClick() {
    clearInterval(this.startClick)
  }
  resetClick() {
    this.currentTime = 0
  }
  splitClick() {
    let min = this.getMinutes();
    let sec = this.getSeconds();
    return ((`${0}${min}:${0}${sec}`))
  }
}
