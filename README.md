#Adds a method to bind 'this' to the component

If you create your React component with React.createClass most of your methods are automatically bound (as expected) such that 'this' refers to the component itself rather than 'window'.  This package allows you to do the same for ES6 React Components, i.e. React Components created as follows:
 
    MyReactComponent = class MyReactComponent extends React.Component
    
To accomplish this automatic binding in ES6 classes, install the package, then call SteinitzREA.Autobind in your class's constructor, like this:.

    MyReactComponent = class MyReactComponent extends React.Component
    {
        constructor (props)
        {
            super (props);
            SteinitzREA.AutoBind (this);
        }
        ...
        
Note that my main purpose for releasing this package was to support my React ES6 Component package (which calls AutoBind for you in its own constructor).  But I felt that this package might be useful to someone on it's own.  Personally, I found it annoying to that 'this' pointed to 'window' in most React ES6 class methods.  And, Facebook have stated that they have no intention of changing that.
