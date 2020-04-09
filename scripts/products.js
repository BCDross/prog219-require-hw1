define(["products","securityCheck"], function (products,securitycheck) {
  console.log(securitycheck.checksecurity());
  return {
    reserveProduct: function () {
      console.log("Function : reserveProduct");

      return true;
    },
  };
});
