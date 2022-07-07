

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html" || stage === "develop-html") {
        actions.setWebpackConfig({
            module: {
                rules: [
                    {
                        test: /locomotive-scroll/,
                        use: loaders.null(),
                    },
                ],
            },
        })
    }
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html") {
        actions.setWebpackConfig({
            module: {
                rules: [
                    {
                        test: /offending-module/,
                        use: loaders.null(),
                    },
                ],
            },
        })
    }
}

