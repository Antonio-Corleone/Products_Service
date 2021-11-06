var service = new getProductAPI();
function getELE(id) {
  return document.getElementById(id);
}

function getListProduct() {
  service
    .getProductService()
    .then(function (result) {
      console.log(result);
      renderData(result.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}
getListProduct();

function renderData(data){
  var htmls = "";
  data.forEach(function(element){
    htmls += `<tr>
      <td>${element.id}</td>
      <td>${element.tenSP}</td>
      <td>${element.gia}</td>
      <td class="text-center">
        <img src="../img/${element.hinhAnh}" alt="product ${element.id}" width="200px">
      </td>
      <td>${element.moTa}</td>
      <td>
        <button class ="btn btn-danger">Xóa</button>
        <button class ="btn btn-info">Thêm</button>
      </td>
    </tr>`
  });
  getELE("tblDanhSachSP").innerHTML = htmls;
}