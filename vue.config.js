module.exports = {
    pluginOptions: {

    },
    configureWebpack: {
        devtool: 'source-map',
        plugins: []
    },
    css: {
        sourceMap: true,
        extract: false,
        loaderOptions: {
            sass: {
                implementation: require('sass'), // This line must in sass option
            },
        },
    },
    devServer: {
        port: 5050,
        //  overlay: {
        //   warnings: true,
        //   errors: true
        // }
    },
    chainWebpack: (config) => {
        config.module.rules.delete('eslint'); // disable error warrning
        config.resolve.alias.set('vue', '@vue/compat')

        config.module
            .rule('vue')
            .use('vue-loader')
            .tap((options) => {
                return {
                    ...options,
                    compilerOptions: {
                        compatConfig: {
                            MODE: 2
                        }
                    }
                }
            });

        // SVG loader
        const svgRule = config.module.rule('svg');
        svgRule.uses.clear();

        // https://github.com/vuejs/vue-cli/issues/6785
        svgRule.delete('type');
        svgRule.delete('generator');

        svgRule
            // load svgs as data-urls on scss using url('/path/to/svg?dataurl')
            .oneOf('dataurl')
            .resourceQuery(/dataurl/)
            .use('svg-url-loader')
            .loader('svg-url-loader')
            .end()
            .end()
            // load svgs as vue components when importing svg files
            .oneOf('vue-component')
            .test(/.*\.svg/)
            .use('svg-vue3-loader')
            .loader('svg-vue3-loader')
            .end()
            .end();
    }
}