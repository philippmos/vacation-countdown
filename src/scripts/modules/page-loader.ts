class PageLoader {
    private loaderElement: HTMLElement | null;


    constructor() {
        this.loaderElement = document.getElementById("page-loader");

        setTimeout(() => {
            this.hide();
        }, 250);
    }


    private hide(): void {
        this.loaderElement?.classList.add("page-loader--hidden");
    }
}

export default PageLoader;