# webpack_start
## webpack学习
    nvm是nodejs版本管理器，可以快速切换nodejs的版本。
    npm init -y 可生成package.json文件
    html-webpack-plugin快速测试框架
    webpack输出日志：
    使用哪几个文件做的编译，以及使用到的插件plugins，
    在package.json中的scripts配置属性添加快速命令,将更加复杂的命令添加在这里可以减少命令的输入
    webpack-dev-server可以自动刷新修改内容。
    devServer可以配置host端口号，延迟加载，代理等。
    eslint-loader？？
    css-loader,style-loader注意顺序，在数组中，排在后面的是最先使用的，应该先使用css-loader来处理，然后用style-loader来处理
    如果需要预处理，那么应该放在css-loader之前，也就是use数组之后来。
    
    css作用域：
    在css-loader中配置options:{modules:true},启用模块形式，可以避免样式冲突。
    css样式分离：按照优化规则，js放在最后，把css分离出来，优化性能。
    extract-text-webpack-plugin：抽取文本插件，将css文件抽取出来。
    
    webpack文件压缩：
    
    sourcemap定位js
    
    HMR 模块热替换：
    
    webpack的module:
    noParse//不去解析大型库文件
    rules:解析规则
    
    context：改变入口文件上下文，一般是指定到根目录，独立于CWD
    
    CommonsChunkPlugin用于代码分离，适合将重复的代码提取出来
    防止缓存就在output中使用[filename].[hashchunk].js来设定输出名字
    NamedModulesPlugin用于在缓存情况下，没有修改的文件不会改变名字，推荐在开发环境中使用
    HashedModuleIdsPlugin用于在生产环境中
    