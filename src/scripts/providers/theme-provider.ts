import ElementHelper from "../helpers/element-helper";

class ThemeProvider {
    constructor(
        private themeKey: string,
        private themeName: string,
        private targetDate: Date) { }

    public applyTheme(): void {
        this.configureStyleTheme();
        this.updateVacationName();
        this.updateVacationTargetDate();
    }

    public getThemeName(): string {
        return this.themeName;
    }

    public getTargetDate(): Date {
        return this.targetDate;
    }

    public updatePageTitle(remainingTimeString: string): void {
        document.title = `${remainingTimeString} - ${this.getThemeName()}`;
    }

    private configureStyleTheme(): void {
        const themeSelector = document.getElementById('main-area');

        if (!themeSelector) {
            return;
        }

        themeSelector.setAttribute('data-theme', this.themeKey);
    }

    private updateVacationName(): void {
        ElementHelper.updateTextContentById(
            'vacation-name',
            this.themeName);
    }

    private updateVacationTargetDate(): void {
        ElementHelper.updateTextContentById(
            'vacation-target-year',
            this.targetDate.getFullYear().toString());
    }
}

export default ThemeProvider;
