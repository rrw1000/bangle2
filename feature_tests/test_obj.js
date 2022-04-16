// Bangle does support OO - w00t! :-)

class MyWeirdObject {
  constructor(foo) {
     this.foo = foo;
  }
  
  getFoo() { return this.foo; }
}


let obj = new MyWeirdObject("Object!");
setWatch( () => {
  E.showMessage(obj.getFoo());
  setTimeout(()=>g.clear(),1000);
}, BTN1, { repeat: true });

