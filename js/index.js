function updateSubtotal(product) {
  let price = product.querySelector(".price > span");
  let quantity = product.querySelector(".quantity > input");
  let subTotal = product.querySelector(".subtotal > span");
  let subTotalValue = `${price.innerText * quantity.value}`;

  subTotal.innerText = subTotalValue;
  return Number(subTotalValue);
}

function calculateAll() {
  let total = 0;
  const products = document.querySelectorAll(".product");
  products.forEach((singleProduct) => {
    total += updateSubtotal(singleProduct);

    // let productSubtotal = singleProduct.querySelector(".subtotal > span")
    //   .innerText;
    // total += Number(productSubtotal);
  });

  const totalElement = document.querySelector("#total-value > span");
  totalElement.innerText = total;
}

function removeProduct(event) {
  const target = event.currentTarget;
  document.querySelector("tbody").removeChild(target.parentNode.parentNode);

  calculateAll();
}

function createProduct() {
  const productName = document.querySelector(".new-product-name").value;
  const productPrice = document.querySelector(".new-product-price").value;

  let newTr = `
    <td class="name">
      <span>${productName}</span>
    </td>
    <td class="price">$<span>${productPrice}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>`;

  let tr = document.createElement("tr");
  tr.classList.add("product");
  tr.innerHTML = newTr;
  document.querySelector("tbody").appendChild(tr);

  removeButton();

  document.querySelector(".new-product-name").value = "";
  document.querySelector(".new-product-price").value = "";
}

function removeButton() {
  document
    .querySelectorAll(".btn-remove")
    .forEach((item) => item.addEventListener("click", removeProduct));
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const createProductBtn = document.getElementById("create");
  createProductBtn.addEventListener("click", createProduct);

  removeButton();
});
