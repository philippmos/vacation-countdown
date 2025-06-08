class ElementHelper {
    public static updateTextContentById(elementId: string, value: string): void {
        const element = document.getElementById(elementId);

        if (!element) {
            return;
        }
        
        element.textContent = value;
    }
}

export default ElementHelper;
