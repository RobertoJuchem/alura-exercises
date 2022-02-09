export function domInjector(selector) {
    return function (target, propertKey) {
        let elemento;
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(selector);
            }
            return elemento;
        };
        Object.defineProperty(target, propertKey, {
            get: getter
        });
    };
}
