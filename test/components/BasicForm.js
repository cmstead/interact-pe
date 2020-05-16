const BasicForm = (function () {
    function BasicForm(element) {
        Form.initializeInputs(element);
    }

    BasicForm.prototype = {};

    return Component.initialize(BasicForm);
})();