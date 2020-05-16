FormFixture = (function () {
    const defaultValues = {
        textTest: {
            value: ''
        },
    };

    const buildFixtureString = (formValues) =>
        `<form id="test-form">
            <input
                type="text"
                name="textTest"
                value="${formValues.textTest.value}"
                pattern=".+"
                required>
        </form>`

    return {
        new: (formValues = {}) => {
            const finalFormValues = {
                ...defaultValues,
                ...formValues
            };
            return TestFixture.new(buildFixtureString(finalFormValues));
        }
    }
})();