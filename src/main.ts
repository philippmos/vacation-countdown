import Countdown from './scripts/countdown';
import ThemeProvider from './scripts/theme-provider';


const initApp = (): void => {
    const themeProvider = new ThemeProvider(
        'Südafrika',
        new Date('2025-10-09T21:45:00'));

    const countdown = new Countdown(themeProvider);

    themeProvider.applyTheme();
    countdown.start();
}

initApp();
