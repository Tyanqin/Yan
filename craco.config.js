const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        // 656565
                        modifyVars: { '@primary-color': '#F0F0F0','font-size':'10px' },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};