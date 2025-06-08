import ThemeProvider from "./theme-provider";

class Countdown {
    private intervalId: number | undefined;
    private counter: HTMLElement | null;

    constructor(
        private themeProvider: ThemeProvider,
        counterId: string = 'counter') {
        this.counter = document.getElementById(counterId);
    }

    public start(): void {
        this.updateCountdown();
        this.intervalId = window.setInterval(() => this.updateCountdown(), 1000);
    }

    private updateCountdown(): void {
        if (!this.counter) {
            return;
        }

        const now = new Date();
        const timeRemaining = this.themeProvider.getTargetDate().getTime() - now.getTime();

        if (timeRemaining <= 0) {
            this.updateCountdownElement('Zeit abgelaufen! Urlaub hat begonnen!');
            if (this.intervalId !== undefined) {
                clearInterval(this.intervalId);
            }
            return;
        }

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        const remainingTimeString = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        this.themeProvider.updatePageTitle(remainingTimeString);
        this.updateCountdownElement(remainingTimeString);
    }

    private updateCountdownElement(value: string): void {
        if (!this.counter) {
            return;
        }

        this.counter.textContent = value; 
    }
}

export default Countdown;
