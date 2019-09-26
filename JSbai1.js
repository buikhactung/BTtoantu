let inputPhysical
let inputChemistry
let inputBiological
inputPhysical = prompt('Nhap diem Vat Ly: ');
inputChemistry = prompt('Nhap diem Hoa hoc: ');
inputBiological = prompt('Nhap diem Sinh hoc: ');
let Physical = parseInt(inputPhysical)
let Chemistry = parseInt(inputChemistry)
let Biological = parseInt(inputBiological);
sum = Physical + Chemistry + Biological;

alert('Tong diem: ' + sum);
Average = alert('Dien trung binh: ' +sum/3);