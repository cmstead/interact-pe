(function () {
    let currentIPE;
    let formFixture;

    TestSuite
        .new('Form Management')

        .setup(function () {
            currentIPE = InteractPE.new();

            formFixture = FormFixture.new();
            formFixture.insert();

            currentIPE.bootstrap('#test-form', BasicForm);
        })

        .teardown(function () {
            formFixture.remove();
        })

        .test(
            'initializes form input elements to clean state',
            function (assert) {
                const selectedInput = currentIPE.bootstrappedElement.querySelector('[name="textTest"]');

                assert.equal(selectedInput.className.includes('clean'), true);
                assert.equal(selectedInput.className.includes('dirty'), false);
            }
        )

        .test(
            'uses form component to set dirty class on change, when new value does not match original value',
            function (assert) {
                const selectedInput = currentIPE.bootstrappedElement.querySelector('[name="textTest"]');

                selectedInput.value = 'this is a test';
                testUtils.sendEvent(selectedInput, 'change');

                assert.equal(selectedInput.className.includes('dirty'), true);
                assert.equal(selectedInput.className.includes('clean'), false);
            }
        );
})();