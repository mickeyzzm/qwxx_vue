const weekNumberToZhCn = (day) => {
  const zhcn = [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六",
  ];
  return zhcn[day];
};

export { weekNumberToZhCn };
