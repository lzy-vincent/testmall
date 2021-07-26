module.exports = {
    lintOnSave: false,
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'network': '@/network',
                'components': '@/components',
            }
        }
    }
    // devServer: {
    //     overlay: {
    //         warnings: false,
    //         errors: false
    //     }
    // }
}