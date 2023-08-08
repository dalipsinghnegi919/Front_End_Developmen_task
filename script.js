const radio1 = document.getElementById('box-1');
const radio2 = document.getElementById('box-2');
const radio3= document.getElementById('box-3');
const radioBtnNodes = document.querySelectorAll('.radio-select-btn');
const sizeColorsDivsNodes = document.querySelectorAll('.size-color-boxes-container');
const boxesChildNode = document.querySelectorAll('.box');
const total = document.getElementById('total');

console.log("total: ", total);
total.innerHTML = "00"

// this functions will get selected  box data and call boxvaluefetchfunction
radio1.addEventListener('click', () => {
    const radiobtn = radioBtnNodes[0]; 
    const sizeBoxContainer= sizeColorsDivsNodes[0];
    boxValueUpdatefunction(boxesChildNode, radiobtn, sizeBoxContainer, radio1);

});
radio2.addEventListener('click', () => {
    const radiobtn = radioBtnNodes[1];
    const sizeBoxContainer = sizeColorsDivsNodes[1]; 
    boxValueUpdatefunction(boxesChildNode, radiobtn, sizeBoxContainer, radio2);
});
radio3.addEventListener('click', () => {
    const radiobtn = radioBtnNodes[2];
    const sizeBoxContainer = sizeColorsDivsNodes[2]; 
    boxValueUpdatefunction(boxesChildNode, radiobtn, sizeBoxContainer, radio3);
});


// this function will update current box's code
const boxValueUpdatefunction = (nodes, radiobtn, sizeBoxContainer, box) => {

    // remove active classes
    for (let i = 0; i < nodes.length; i++) {
        radioBtnNodes[i].classList.remove('active-outline');
        radioBtnNodes[i].children[0].classList.remove('active-bg');
        nodes[i].classList.remove('active-box-style')
        nodes[i].children[1].style.display = 'none';
    }
    const totalValue = box.children[0].children[0].children[1].children[1].innerHTML;
    total.innerHTML = totalValue;
    radiobtn.classList.add('active-outline');
    radiobtn.children[0].classList.add('active-bg');
    box.classList.add('active-box-style');
    sizeBoxContainer.style.display = "block";

}
