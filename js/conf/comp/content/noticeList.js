/**
 * Created by .
 * User: bigbone || guoqing5@staff.sina.com.cn
 * Date: 11-4-19
 */
$Import('kit.dom.parseDOM');
$Import('common.content.noticeList');
STK.register('comp.content.noticeList',function($){
	//---常量定义区----------------------------------

	//-------------------------------------------
	return function(node, opts){
		var that = {};
		//---变量定义区----------------------------------
		//----------------------------------------------
		var _this = {
			DOM:{},//节点容器
			objs:{}//组件容器
		};
		//---DOM事件绑定的回调函数定义区---------------------
		var bindDOMFuns = {
		};
		//-------------------------------------------

		//---自定义事件绑定的回调函数定义区--------------------
		var bindCustEvtFuns = {
		};
		//-------------------------------------------------

		//---广播事件绑定的回调函数定义区---------------------
		var bindListenerFuns = {
		};
		//-------------------------------------------
		//---组件的初始化方法定义区-------------------------
		/**
		 * 初始化方法
		 * @method init
		 * @private
		 */
		var init = function(){
			argsCheck();
			parseDOM();
			initPlugins();
			bindDOM();
			bindCustEvt();
			bindListener();
		};
		//-------------------------------------------

		//---参数的验证方法定义区---------------------------
		/**
		 * 参数的验证方法
		 * @method init
		 * @private
		 */
		var argsCheck = function(){
			if (!node) {
				throw 'node 没有定义';
			}
			opts = $.core.obj.parseParam({
				html: ''
			}, opts);
		};
		//-------------------------------------------

		//---Dom的获取方法定义区---------------------------
		/**
		 * Dom的获取方法
		 * @method parseDOM
		 * @private
		 */
		var parseDOM = function(){
			if(opts.html) {
				node.innerHTML = opts.html;
			}
			_this.DOM = $.kit.dom.parseDOM($.builder(node).list);
			_this.objs.noticeList = $.common.content.noticeList(_this.DOM["noticeList"]);
		};
		//-------------------------------------------

		//---模块的初始化方法定义区-------------------------
		/**
		 * 模块的初始化方法
		 * @method initPlugins
		 * @private
		 */
		var initPlugins = function(){
		};
		//-------------------------------------------

		//---DOM事件绑定方法定义区-------------------------
		/**
		 * DOM事件绑定方法
		 * @method bindDOM
		 * @private
		 */
		var bindDOM = function(){
		};
		//-------------------------------------------

		//---自定义事件绑定方法定义区------------------------
		/**
		 * 自定义事件绑定方法
		 * @method bindCustEvt
		 * @private
		 */
		var bindCustEvt = function(){
		};
		//-------------------------------------------

		//---广播事件绑定方法定义区------------------------
		var bindListener = function(){
		};
		//-------------------------------------------

		//---组件公开方法的定义区---------------------------
		/**
		 * 组件销毁方法
		 * @method destroy
		 */
		var destroy = function(){
		};
		//-------------------------------------------

		//---执行初始化---------------------------------
		init();
		//-------------------------------------------

		//---组件公开属性或方法的赋值区----------------------
		that.destroy = function(){

		};
		//-------------------------------------------

		return that;
	};
});