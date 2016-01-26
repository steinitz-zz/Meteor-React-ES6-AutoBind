// Write your package code here!

SteinitzREA = {};

SteinitzREA.getMethodsForInstance = function getMethodsForInstance (instance)
{
	var result = [];
	for (var methodName in instance)
	{
		if ("function" == typeof instance [methodName])
		{
			result.push (methodName)
		}
	}
	return result;
};

// bind all object method contexts to the instance - i.e. this = instance
SteinitzREA.AutoBind = function AutoBind (instance)
{
	methods = SteinitzREA.getMethodsForInstance (instance);
	// Object.keys (instance.constructor.prototype).forEach (
	methods.forEach (
		function (aMethod)
		{
			try
			{
				instance [aMethod] = instance.constructor.prototype [aMethod].bind (instance);
				// console.log ("DT.Autobind - binding method " + aMethod);
			}
			catch (theException)
			{
				console.log ("DT.Autobind - error binding method " + aMethod + ", error: " + theException.message);
			}
		}
	);
};