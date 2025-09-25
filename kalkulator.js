function InputAngka(value) {
  document.getElementById("inputan").value += value;
}

function Hitung() {
  let expresi = document.getElementById("inputan").value;
  try {
    let hasil = eval(expresi);
    document.getElementById("inputan").value = hasil;
  } catch (e) {
    document.getElementById("inputan").value = "error";
  }
}

function hapus() {
  document.getElementById("inputan").value = "";
}