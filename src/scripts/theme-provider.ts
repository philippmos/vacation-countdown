import ElementHelper from "./element-helper";

class ThemeProvider {
    constructor(
        private themeName: string,
        private targetDate: Date) { }

    public applyTheme(): void {
        this.updateVacationName();
        // this.updateVacationTargetDate();
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
