const InteractPE = (function () {
    function InteractPE() {
        this.bootstrappedElement = null;
    }

    InteractPE.prototype = {
        bootstrap: function (selector, Component) {
            this.bootstrappedElement = document.querySelector(selector);

            this.bootstrappedElement.setAttribute('ipe-bootstrapped', 'true');
            const component = new Component(this.bootstrappedElement);
        },

        remove: function() {
            this.bootstrappedElement.removeAttribute('ipe-bootstrapped');
            this.bootstrappedElement = null;
        }
    };

    function getNew() {
        return new InteractPE();
    }

    return {
        new: getNew
    };
})();