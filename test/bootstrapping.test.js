(function () {
    let currentIPE;
    let bootstrapFixture;

    TestSuite
        .new('InteractPE Bootstrapping')

        .setup(function bootstrapTheFixture() {
            bootstrapFixture = BootstrapFixture.new();
            bootstrapFixture.insert();

            currentIPE = InteractPE.new();
            currentIPE.bootstrap('#test-form', BasicForm);
        })

        .teardown(function () {
            bootstrapFixture.remove();
        })

        .test(
            'properly bootstraps a page element',
            function (assert) {
                const element = document.querySelector('[ipe-bootstrapped]');

                assert.ok(element.getAttribute('ipe-bootstrapped') === 'true', 'Unable to correctly locate bootstrapped element');
            }
        )

        .test(
            'removes bootstrapping from element when remove is called',
            function (assert) {
                currentIPE.remove();

                const element = document.querySelector('[ipe-bootstrapped]');

                assert.ok(element === null, 'Bootstrapping was not correctly removed');
                assert.ok(currentIPE.bootstrappedElement === null, 'Element reference was not removed');
            }
        );
})();