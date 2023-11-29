// TODO: 修正 ESLint 錯誤、補上分號、前輩說要改單引號 QQ
const url = 'https://hexschool.github.io/js-filter-data/data.json';
const table = document.querySelector('.table-content');
const filter = document.querySelector('.filter');
let data;
let showData = [];
let category = '';

/* global axios */
axios.get(url)
.then(function (res) {
  data = res.data.filter(a => a.作物名稱);
  table.innerHTML = renderData(data);
});

filter.addEventListener('click', filterCategory);

// TODO: 之後拆成 renderData 函式 *** OK
function renderData(data) {
  let str = '';
  data.forEach((item) => {
    // TODO: 改成 ES6 的 Template Literals (字面字串符) *** OK
    const content = `
      <tr>
        <td>${item.作物名稱}</td>
        <td>${item.市場名稱}</td>
        <td>${item.上價}</td>
        <td>${item.中價}</td>
        <td>${item.下價}</td>
        <td>${item.平均價}</td>
        <td>${item.交易量}</td>
      </tr>`;
    str += content;
  });
  return str;
}

function filterCategory(e) {
  if (e.target.nodeName == 'BUTTON') {
    category = e.target.dataset.category;
    showData = data.filter((i) => {
      return i.種類代碼 == category;
    });
    table.innerHTML = renderData(showData);
  } else {
    return;
  }
}