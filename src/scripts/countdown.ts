class Countdown {
    private intervalId: number | undefined;
    private counter: HTMLElement | null;

    constructor(private targetDate: Date, counterId: string = 'counter') {
        this.counter = document.getElementById(counterId);
        if (this.counter) {
            this.start();
        }
    }

    private updateCountdown(): void {
        if (!this.counter) {
            return;
        }

        const now = new Date();
        const timeRemaining = this.targetDate.getTime() - now.getTime();

        if (timeRemaining <= 0) {
            this.counter.innerHTML = "Countdown finished!";
            if (this.intervalId !== undefined) {
                clearInterval(this.intervalId);
            }
            return;
        }

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        this.counter.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    public start(): void {
        this.updateCountdown();
        this.intervalId = window.setInterval(() => this.updateCountdown(), 1000);
    }
}

export default Countdown;