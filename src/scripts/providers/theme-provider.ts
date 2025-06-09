import ElementHelper from "../helpers/element-helper";
import { Theme } from "../models/theme";

class ThemeProvider {
    constructor(
        private readonly theme: Theme) { }

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
