padre = {
  a: function () {
    alert(this);
  },
  b: () => {
    alert(this);
  },
};

padre.a();
padre.b();