function computerDays(start, end) {
  start = new Date(start);
  end = new Date(end);
  let startYear = start.getFullYear();
  let endYear = end.getFullYear();

  let days = Math.ceil(Math.abs(start * 1 - end * 1) / (1000 * 60 * 60 * 24));

  let years = Math.abs(startYear - endYear);
  // 判断差值是否超过一年
  if (years > 0 && days >= 365) {
    let max = Math.max(start * 1, end * 1);
    let min = Math.min(start * 1, end * 1);
    let minDay =
      new Date(
        new Date(max).getFullYear() +
          '-' +
          (new Date(min).getMonth() + 1) +
          '-' +
          new Date(min).getDate()
      ) * 1;
    console.log(max, minDay);
    // 计算剩余的天数
    var remainingDays = Math.ceil(
      Math.abs(minDay - max) / (1000 * 60 * 60 * 24)
    );
    // 返回结果
    return remainingDays === 0 ? `${years}年` : `${years}年${remainingDays}天`;
  } else {
    // 返回差值的天数
    return days + '天';
  }
}

function getQueryString(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}
