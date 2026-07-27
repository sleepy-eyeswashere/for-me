function openLetter() {


    const intro = document.getElementById("intro");
    const letter = document.getElementById("letter");
    const flap = document.querySelector(".flap");
    const openButton = document.getElementById("openButton");



    openButton.disabled = true;



    // باز شدن در پاکت

    flap.style.transform = "rotateX(180deg)";



    setTimeout(() => {



        intro.style.opacity = "0";



        setTimeout(() => {



            intro.style.display = "none";



            // نمایش نامه

            letter.style.display = "block";



            requestAnimationFrame(() => {

                letter.classList.add("show");

            });



        },800);



    },700);



}





function goBack(){



    const intro = document.getElementById("intro");
    const letter = document.getElementById("letter");
    const flap = document.querySelector(".flap");
    const openButton = document.getElementById("openButton");



    // مخفی شدن نامه

    letter.classList.remove("show");



    setTimeout(() => {



        letter.style.display = "none";



        intro.style.display = "block";


        intro.style.opacity = "1";



        // بستن پاکت

        flap.style.transform = "rotateX(0deg)";



        openButton.disabled = false;



    },1200);



}
