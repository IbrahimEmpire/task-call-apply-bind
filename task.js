

// call method
  var object1={
    number: 37,
  }
  var object2={
    f1:function(a,b){
        console.log(this.number+a);
    }
  };
  object2.f1.call(object1,2,"happy");

  //apply method
  var object1={
    number: 37,
  }
  var object2={
    f1:function(a,b,c){
        console.log(this.number+a+b+c);
    }
  };
  object2.f1.apply(object1,[40,"hello","happy"]);

  //bind method
  var object1={
    number: 73,
  }
  var object2={
    f1:function(a,b,c){
        console.log(this.number+a+b+c);
    }
  };
 var b= object2.f1.bind(object1,2,"happy","indipendent","day");
b();


