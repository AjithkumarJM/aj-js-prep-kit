const userInfo = {
  firstName: 'Ajithkumar',
  lastName: 'Moorthy'
}

const getUserName = function (city, state, country) {
  console.log(`I am ${this.firstName} ${this.lastName} from ${city}, ${state}, ${country}`);
};

// with using call/apply

Function.prototype.myBind = function (...args) {
  let method = this,
      params = args.slice(1),
      context = args[0];

  return function (...inArgs) {
    method.apply(context, [...params, ...inArgs]);
  }
};

// withoud using call/apply

Function.prototype.myBind = function (...args) {
  let method = this,
      params = args.slice(1),
      context = args[0];

  return function (...inArgs) {
    const combinedArgs = [...inArgs, ...params];
    
    // Invoke the method by directly accessing it on the context
    context.__tempMethod = method;
    const result = context.__tempMethod(...combinedArgs);
    delete context.__tempMethod;

    return result;
  };
};


getUserName.myBind(userInfo)('Madurai', 'TN', 'India');
