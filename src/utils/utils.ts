// 事件的节流方法
// fn是我们需要包装的事件回调
export function throttle(fn: Function, delay: number) {
  // last为上一次触发回调的时间，timer是定时器
  let last = 0,
      timer: any = null;
  delay = delay || 500;
  // 将throttle处理结果当做函数返回
  return function() {
    // 保留调用时的this上下文
    let context = this;
    // 保留调用时传入的参数
    let args = arguments;
    // 记录本次触发回调的时间
    let now = +new Date();

    // 判断上次触发的时间和本次触发的时间差是否小于时间间隔的阈值
    if (now - last < delay) {
      // 如果时间间隔小于我们设定的时间间隔阈值，则为本次触发操作设立一个新的定时器
      clearTimeout(timer);
      timer = setTimeout(() => {
        last = now;
        fn.apply(context, args);
      }, delay);
    } else {
      // 如果时间间隔超出了我们设定的时间间隔阈值，那就不等了，无论如何都要反馈给用户一次相应
      last = now;
      fn.apply(context, args);
    }
  };
}

// 事件的防抖方法
export function debounce(fn: Function, delay: number) {
  delay = delay || 500;
  let timer: any = null;
  // 将debounce处理结果当做函数返回
  return function() {
    // 保留调用时的this上下文
    let context = this;
    // 保留调用时传入的参数
    let args = arguments;
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() =>{
      timer = null;
      fn.apply(context, args);
    }, delay);
  };
}

// localStorage和cookie的区别在于，cookie保留的信息在浏览器关闭之后就会被销毁，但是localStorage里面的数据不会，其为永久性存储
// 保留信息到cookie里面
export function setCookie(cName: string, value: any, expiredays: any) {
  if (expiredays > 0 && expiredays !== "100") {
    let exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = cName + "=" + escape(value) + (expiredays == null ? "" : ";expires=" + exdate.toUTCString());
  }
  if (expiredays === "100") {
    let exdate = new Date("2119-01-01 00:00:00");
    document.cookie = cName + "=" + escape(value) + (expiredays == null ? "" : ";expires=" + exdate.toUTCString());
  }
}

// 读取信息
export function getCookie(cName: string) {
  if (document.cookie.length > 0) {
    let cStart = document.cookie.indexOf(cName + "=");
    if (cStart !== -1) {
      cStart = cStart + cName.length + 1;
      let cEnd = document.cookie.indexOf(";", cStart);
      if (cEnd === -1) cEnd = document.cookie.length;
      return unescape(document.cookie.substring(cStart, cEnd));
    }
  }
  return "";
}

// 删除某一个cookie
export function delCookie(cName: string) {
  let exp = new Date();
  exp.setTime(exp.getTime() - 1);
  let cval = getCookie(cName);
  if (cval !== null) {
    document.cookie = cName + "=" + cval + ";expires=" + exp.toUTCString();
  }
}

// 清除所有cookie
export function clearCookie(cName: string) {
  setCookie(cName, "", -1);
}

// 时间戳转换为 2019-01-01 00:00:00的形式
/*
timestamp: 时间戳
dayMinSecFlag： 是否只要显示年月日
 */
export function timestampToTime(timestamp: any, dayMinSecFlag: boolean) {
  const date = new Date(timestamp);
  const Y = date.getFullYear() + "-";
  const M = (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) + "-";
  const D = date.getDate() < 10 ? "0" + date.getDate() + " " : date.getDate() + " ";
  const h = date.getHours() < 10 ? "0" + date.getHours() + ":" : date.getHours() + ":";
  const m = date.getMinutes() < 10 ? "0" + date.getMinutes() + ":" : date.getMinutes() + ":";
  const s = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  if (!dayMinSecFlag) {
    return Y + M + D;
  } else {
    return Y + M + D + h + m + s;
  }
}
