function openLetter() {


    const intro = document.getElementById("intro");
    const letter = document.getElementById("letter");
    const flap = document.querySelector(".flap");
    const openButton = document.getElementById("openButton");


    openButton.disabled = true;



    // opening envelope

    flap.style.transform = "rotateX(180deg)";



    setTimeout(() => {


        // fade intro

        intro.style.opacity = "0";



        setTimeout(() => {



            intro.style.display = "none";



            // show letter

            letter.style.display = "block";



            requestAnimationFrame(() => {


                letter.classList.add("show");


            });



        },800);



    },900);



}






function goBack(){



    const intro = document.getElementById("intro");
    const letter = document.getElementById("letter");
    const flap = document.querySelector(".flap");
    const openButton = document.getElementById("openButton");




    // hide letter

    letter.classList.remove("show");




    setTimeout(() => {



        letter.style.display = "none";



        intro.style.display = "block";



        setTimeout(() => {

            intro.style.opacity = "1";

        },50);




        // close envelope

        flap.style.transform = "rotateX(0deg)";



        openButton.disabled = false;



    },1200);



}
