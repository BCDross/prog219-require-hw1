define(function() {
  console.log("Function : securitycheck");

  return {
    checksecurity: function() {
      var ok = Math.random() >= 0.5;
       console.log('in checksecurity returning ' + ok)
      return ok;
    }
  }
});