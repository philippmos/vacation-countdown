import Countdown from './modules/countdown';
import ThemeProvider from './providers/theme-provider';


const initApp = (): void => {
    const themeProvider = new ThemeProvider(
        'southafrica',
        'Südafrika',
        new Date('2025-10-09T21:45:00'));

    const countdown = new Countdown(themeProvider);

    themeProvider.applyTheme();
    countdown.start();
}

initApp();
