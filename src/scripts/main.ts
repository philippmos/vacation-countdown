import Countdown from './modules/countdown';
import ThemeProvider from './providers/theme-provider';

class Startup {
    public initApp = (): void => {
        const themeProvider = new ThemeProvider();
        const countdown = new Countdown(themeProvider);

        themeProvider.applyTheme();
        countdown.start();
    }
}

new Startup().initApp();
