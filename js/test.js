var test = (function(module){
	
	module.doit = function(resultObject){
		resultObject.prepend(Date() + '<br/>');
	};
	return module;
	
}(test || {} ));
