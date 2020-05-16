const Form = (function () {
    function setDirtyState(element, isDirty) {
        const state = ['clean', 'dirty'];
        const classToAdd = state[Number(isDirty)];
        const classToRemove = state[Number(!isDirty)];
        const stateHasChanged = !element.className.includes(classToAdd);

        if (stateHasChanged) {
            element.classList.add(classToAdd);
            element.classList.remove(classToRemove);
        }
    }

    function updateDirtyState(originalValue) {
        return (event) =>
            setDirtyState(
                event.target,
                event.target.value !== originalValue)
    }

    function initializeInputs(formElement) {
        const requiredInputs = formElement.querySelectorAll('input');

        requiredInputs.forEach(function (element) {
            setDirtyState(element, false);

            element.addEventListener('change', updateDirtyState(element.value));
        });
    }

    return {
        initializeInputs
    };
})();