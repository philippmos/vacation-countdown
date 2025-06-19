import Countdown from './modules/countdown';
import ThemeProvider from './providers/theme-provider';
import PageLoader from './modules/page-loader';

class Startup {
    public initApp = (): void => {
        const themeProvider = new ThemeProvider();
        const countdown = new Countdown(themeProvider);

        themeProvider.applyTheme();
        countdown.start();

        new PageLoader();
    }
}

new Startup().initApp();
