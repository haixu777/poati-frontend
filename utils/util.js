const Cookie = {
  get: function (name) {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
  },
  set: function (name, value) {
    const Days = 7
    const exp = new Date()
    exp.setTime(exp.getTime() + Days*24*60*60*1000)
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString()
  },
  del: function (name) {
    const exp = new Date();
    exp.setTime(exp.getTime() - 1);
    const cval=getCookie(name);
    if(cval!=null)
    document.cookie= name + "="+cval+";expires="+exp.toGMTString();
  },
  clear: function () {
    const keys=document.cookie.match(/[^ =;]+(?=\=)/g);
    if (keys) {
      for (let i = keys.length; i--;)
        document.cookie=keys[i]+'=0;expires=' + new Date( 0).toUTCString() 
    }
  }
}

module.exports = Cookie
