import { Theme } from './models/theme';
import Countdown from './modules/countdown';
import ThemeProvider from './providers/theme-provider';

class Startup {
    private themeModels: Theme[] = [
        {
            themeKey: 'default',
            name: 'Default',
            targetDate: new Date('2025-12-31T23:59:59')
        },
        {
            themeKey: 'vietnam',
            name: 'Süd-Vietnam',
            targetDate: new Date('2025-03-30T08:00:00')
        },
        {
            themeKey: 'southafrica',
            name: 'Südafrika',
            targetDate: new Date('2025-10-09T21:45:00')
        },
        {
            themeKey: 'retirement',
            name: 'Pension Volker',
            targetDate: new Date('2028-03-31T23:59:59')
        }
    ];

    public initApp = (): void => {
        const activeThemeKey = process.env.ACTIVE_THEME || 'default';
        const selectedTheme = this.themeModels.find(theme => theme.themeKey === activeThemeKey);

        const themeProvider = new ThemeProvider(selectedTheme || this.themeModels[0]);

        const countdown = new Countdown(themeProvider);

        themeProvider.applyTheme();
        countdown.start();
    }
}

new Startup().initApp();
