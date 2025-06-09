import ElementHelper from "../helpers/element-helper";
import { Theme } from "../models/theme";

class ThemeProvider {
    // TODO: Outsource to configuration file
    private readonly themeModels: Theme[] = [
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

    private readonly theme: Theme;

    constructor() {
        const activeThemeKey = process.env.ACTIVE_THEME || 'default';
        const selectedTheme = this.themeModels.find(theme => theme.themeKey === activeThemeKey);

        this.theme = selectedTheme || this.themeModels[0];
    }

    public applyTheme(): void {
        this.configureStyleTheme();
        this.updateVacationName();
        this.updateVacationTargetDate();
    }

    public getThemeName(): string {
        return this.theme.name;
    }

    public getTargetDate(): Date {
        return this.theme.targetDate;
    }

    public updatePageTitle(remainingTimeString: string): void {
        document.title = `${remainingTimeString} - ${this.getThemeName()}`;
    }

    private configureStyleTheme(): void {
        const themeSelector = document.getElementById('main-area');

        if (!themeSelector) {
            return;
        }

        themeSelector.setAttribute('data-theme', this.theme.themeKey);
    }

    private updateVacationName(): void {
        ElementHelper.updateTextContentById(
            'vacation-name',
            this.theme.name);
    }

    private updateVacationTargetDate(): void {
        ElementHelper.updateTextContentById(
            'vacation-target-year',
            this.theme.targetDate.getFullYear().toString());
    }
}

export default ThemeProvider;
