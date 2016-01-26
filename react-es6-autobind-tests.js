
Tinytest.add (
	'methodCount',
	function (test)
	{
		MyReactTestComponent = class MyReactTestComponent extends React.Component
		{
			constructor (props)
			{
				super (props);
				SteinitzREA.AutoBind (this);
			}

			customMethod ()
			{
			}
		};

		var instance 			= new MyReactTestComponent({});
		var methodCount			= SteinitzREA.getMethodsForInstance (instance).length;
		var expectedMethodCount	= 3; // customMethod, setState, forceUpdate
		test.equal (methodCount, expectedMethodCount);
	}
);

Tinytest.add (
	'bindTest',
	function (test)
	{
		MyReactTestComponent = class MyReactTestComponent extends React.Component
		{
			constructor (props)
			{
				super (props);
				this.bindTest = this.bindTest.bind ({}); 	// simulate React environment
				SteinitzREA.AutoBind (this);				// fix the above binding
				this.aValue = 'bind test';
			}

			bindTest (e)
			{
				return this.aValue;
			}
		};

		var instance 			= new MyReactTestComponent({});
		var bindTestValue		= instance.bindTest();
		var expectedMethodValue	= 'bind test'; // customMethod, setState, forceUpdate
		test.equal (bindTestValue, expectedMethodValue);
	}
);
