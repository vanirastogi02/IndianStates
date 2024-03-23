let a = document.getElementById("plus");
console.log(a);
function addFunction(){
    let b = document.getElementById("items");
    b.innerHTML++;
    if (b.innerHTML == 1)
        addedToCart();
    console.log(b);
}

function minusFunction() {
    let c = document.getElementById("items");
    if (c.innerHTML == 0) {
        console.log("Please add something before removing");
    } 
    else {
        c.innerHTML--;
        console.log(c);
    }
}
function addedToCart(){
    let d=document.getElementById("txt");
    console.log(d)
    d.style.display = "block";
    let e=document.getElementById("car");
    e.style.display = "block";  
    // After 2 seconds, hide the "Added to Cart" message
    setTimeout(function() {
        d.style.display = "none";
        e.style.display = "none";
    }, 3000); // 2000 milliseconds = 2 seconds
}
const cardInner = document.querySelectorAll('.card .inner');
console.log(cardInner);

  cardInner.forEach((element) => {
    const img = element.querySelector('img');
    console.log(img);
    const frontText = element.querySelector('.front-text');
    console.log(frontText);

    img.addEventListener('mouseenter', () => {
      element.classList.add('flip');
    });

    img.addEventListener('mouseleave', () => {
      element.classList.remove('flip');
    });

    // Prevent flip when hovering over span text
    frontText.addEventListener('mouseenter', (event) => {
      event.stopPropagation();
    });
  });
 