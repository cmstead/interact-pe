BootstrapFixture = (function () {
    const buildFixtureString = () => `<form id="test-form"></form>`;

    return {
        new: () => TestFixture.new(buildFixtureString())
    };
})();