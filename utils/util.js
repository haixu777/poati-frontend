const Cookie = {
  get: function (name) {
    var match = document.cookie.match(new RegExp(name + '=([^;]+)'));
    if (match) return match[1];
  },
  set: function (name, value) {
    const Days = 7
    const exp = new Date()
    exp.setTime(exp.getTime() + Days*24*60*60*1000)
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString()
  },
  del: function (name) {
    const exp = new Date()
    exp.setTime(exp.getTime() - 1)
    const cval=this.get(name)
    if(cval!=null)
    document.cookie= name + "="+cval+";expires="+exp.toGMTString()
  },
  clear: function () {
    const keys=document.cookie.match(/[^ =;]+(?=\=)/g)
    if (keys) {
      for (var i = keys.length; i--;)
        document.cookie=keys[i]+'=0;expires=' + new Date( 0).toUTCString()
    }
  }
}

function cutString (str, len) {
  if (str.length*2 <= len) {
    return str
  }
  var strlen = 0
  var s = ''
  for (var i=0; i<str.length; i++) {
    s = s + str.charAt(i)
    if (str.charCodeAt(i) > 128) {
      strlen = strlen + 2
      if (strlen >= len) {
        return s.substring(0, s.length-1) + '...'
      }
    } else {
      strlen = strlen + 1
      if (strlen >= len) {
        return s.substring(0, s.length-2) + '...'
      }
    }
  }
  return s
}

function generateNewsList () {
    return [{
      label: '2017',
      children: [
        {
          label: '一月',
          value: 1,
          children: []
        },
        {
          label: '二月',
          value: 2,
          children: []
        },
        {
          label: '三月',
          value: 3,
          children: []
        },
        {
          label: '四月',
          value: 4,
          children: []
        },
        {
          label: '五月',
          value: 5,
          children: []
        },
        {
          label: '六月',
          value: 6,
          children: []
        },
        {
          label: '七月',
          value: 7,
          children: []
        },
        {
          label: '八月',
          value: 8,
          children: []
        },
        {
          label: '九月',
          value: 9,
          children: []
        },
        {
          label: '十月',
          value: 10,
          children: []
        },
        {
          label: '十一月',
          value: 11,
          children: []
        },
        {
          label: '十二月',
          value: 12,
          children: []
        }
      ]
    }, {
      label: '2016',
      children: [
        {
          label: '一月',
          value: 1,
          children: []
        },
        {
          label: '二月',
          value: 2,
          children: []
        },
        {
          label: '三月',
          value: 3,
          children: []
        },
        {
          label: '四月',
          value: 4,
          children: []
        },
        {
          label: '五月',
          value: 5,
          children: []
        },
        {
          label: '六月',
          value: 6,
          children: []
        },
        {
          label: '七月',
          value: 7,
          children: []
        },
        {
          label: '八月',
          value: 8,
          children: []
        },
        {
          label: '九月',
          value: 9,
          children: []
        },
        {
          label: '十月',
          value: 10,
          children: []
        },
        {
          label: '十一月',
          value: 11,
          children: []
        },
        {
          label: '十二月',
          value: 12,
          children: []
        }
      ]
    }]
}

function formatTime (data, needTime) {
  needTime = needTime || true
  var time = new Date(data)
  // if (needTime) {
  //   return time.getFullYear()+'年'+(Number(time.getMonth())+1)+'月'+time.getDate()+'日 '+time.getHours()+':'+time.getMinutes()+':'+time.getSeconds()+' '
  // } else {
  //   return time.getFullYear()+'年'+(Number(time.getMonth())+1)+'月'+time.getDate()+'日 '
  // }
    return time.getFullYear()+'年'+(Number(time.getMonth())+1)+'月'+time.getDate()+'日 '
}

function formatNewsList (newsList) {
  var initNewsList = generateNewsList()
  newsList.forEach(function (item) {
    var date = new Date(Number(item.time))
    initNewsList.forEach(function(resultItem){
      if (resultItem.label == date.getFullYear()) {
        resultItem.children.forEach(function(childrenItem) {
          if (childrenItem.value == (date.getMonth()+1)) {
            childrenItem.children.push({
              label: item.title,
              title: item.title,
              id: item.id,
              desc: item.desc,
              author: item.author,
              time: item.time,
              text: item.text
            })
          }
        })
      }
    })
  })
  return initNewsList
}

function contestDownload (contest, contestList) {
  for (var i=0; i<contestList.length; i++) {
    if (contest == contestList[i]) {
      return true
    }
  }
  return false
}

function isEmptyObject (obj) {
  for (var prop in obj) {
    return false
  }
  return true
}

export { Cookie, formatNewsList, formatTime, cutString, contestDownload, isEmptyObject }
