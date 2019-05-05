export default {
	assert		: function(val, msgWhenFalse){
		if(!val){
			$.error(msgWhenFalse);
		}
	},
	/**
	 * 判断一个是否是整数，不包含判断类型
	 */
	isInteger	: function(o){
		return (o | 0) == o;
	},
	/**
	 * 清除字符串前后的空格
	 */
	trim		: function(str){
		if(typeof str === 'string'){
			return str.trim();
		}
		return str;
	}
}