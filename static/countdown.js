var Countdown = /** @class */ (function () {
    function Countdown(targetDate, counterId) {
        if (counterId === void 0) { counterId = 'counter'; }
        this.targetDate = targetDate;
        this.counter = document.getElementById(counterId);
        if (this.counter) {
            this.start();
        }
    }
    Countdown.prototype.updateCountdown = function () {
        if (!this.counter) {
            return;
        }
        var now = new Date();
        var timeRemaining = this.targetDate.getTime() - now.getTime();
        if (timeRemaining <= 0) {
            this.counter.innerHTML = "Countdown finished!";
            if (this.intervalId !== undefined) {
                clearInterval(this.intervalId);
            }
            return;
        }
        var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        this.counter.textContent = "".concat(days, "d ").concat(hours, "h ").concat(minutes, "m ").concat(seconds, "s");
    };
    Countdown.prototype.start = function () {
        var _this = this;
        this.updateCountdown();
        this.intervalId = window.setInterval(function () { return _this.updateCountdown(); }, 1000);
    };
    return Countdown;
}());
