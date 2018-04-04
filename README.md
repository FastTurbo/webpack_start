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
    css-loader用来将预处理文件转换成css文件，style-loader将css内容注入到javascript中，使之可以作为模块引用
    css-loader,style-loader注意顺序，在数组中，排在后面的是最先使用的，应该先使用css-loader来处理，然后用style-loader来处理
    如果需要预处理，那么应该放在css-loader之前，也就是use数组之后来。
    
    css作用域：
    在css-loader中配置options:{modules:true},启用模块形式，可以避免样式冲突。
    css样式分离：按照优化规则，js放在最后，把css分离出来，优化性能。
    extract-text-webpack-plugin：抽取文本插件，将css文件抽取出来。
    option是filename:即提取生成的文件名称
    
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
    
    
    resolve配置：
    mainfields:在引入第三方库时，这里可以决定引入第三方库提供的版本，第三方库都可以提供很多个版本
    extensions：不仅仅是配置后缀，也用来让webpack有限使用类型文件，如：[.vue,.js],就会优先使用.vue文件
    modules:配置让webpack去哪些目录下寻找第三方模块，如：modules:['./src/','node_modules']
    
    devServer配置：
    histryApiFallback:要求服务器在任何命中的路由时都返回一个对应的HTML文件。
    contentBase:配置DevServer服务器的文件根目录。默认情况下为当前执行目录，通常时项目根目录所有一般情况下，你不必设置他
    除非你有额外的文件需要被DevServer服务。
    contentBase：false来关闭暴露本地文件
    port配置项用于配置Devserver服务监听的端口，默认使用8080端口
    open 用于在DevServer启动且第一次构建完成时自动用你系统上默认浏览器去打开要开发的网页。