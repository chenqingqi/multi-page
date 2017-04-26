var path = require("path");

module.exports = {

	/**
	 * 要打包的JS文件
	 */
	entry: 
	{
		'page/index/js/main': './page/index/js/main.js',
		'page/login/js/main': './page/login/js/main.js'
	},
	

	/**
	 * 导出
	 */
	output: 
	{
		path    : path.join(__dirname, './'),
		filename: '[name].min.js'
	},
	
	
//	/**
//	 * 排除打包,
//	 * require(jquery)将指向window.$
//	 * <script src="/libs/jquery.js"></script>需要在之前加载jquery
//	 */
//	externals: 
//	{
//    	'jquery':'window.$'
//  }

}