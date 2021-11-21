const seneka = document.querySelector('#seneka');
const page0 = document.querySelector('#page0');
const page1 = document.querySelector('#page1');
const page2 = document.querySelector('#page2');
const page3 = document.querySelector('#page3');
const page4 = document.querySelector('#page4');

const containor_Btn_01 = document.querySelector('#containor_Btn_01');


const pageBtn1 = document.querySelector('pageBtn1');
const pageBtn2 = document.querySelector('pageBtn2');
const pageBtn3 = document.querySelector('pageBtn3');
const pageBtn4 = document.querySelector('pageBtn4');
const pageBtn0 = document.querySelector('pageBtn0');

document.getElementById("pageBtn1").addEventListener("click", moveA)
document.getElementById("pageBtn2").addEventListener("click", moveB)
document.getElementById("pageBtn3").addEventListener("click", moveC)
document.getElementById("pageBtn4").addEventListener("click", moveD)
document.getElementById("pageBtn0").addEventListener("click", moveE)

function moveA() {
    page0.style.transform = 'translate(-96%)';
    page1.style.transform = 'translate(0%)';
    page2.style.transform = 'translate(0%)';
    page3.style.transform = 'translate(0%)';

    page1.scrollTo(0,0);
    page2.scrollTo(0,0);
    page3.scrollTo(0,0);
    page4.scrollTo(0,0);

    page1.style.background= 'white';
    page2.style.background= 'white';
    page3.style.background= 'white';
    page4.style.background= 'white';
    
    containor_Btn_01.style.background= 'white';
    containor_Btn_02.style.background= 'white';
    containor_Btn_03.style.background= 'white';
    containor_Btn_04.style.background= 'white';
    
}

function moveB() {
    page0.style.transform = 'translate(-96%)';
    page1.style.transform = 'translate(-92.9%)';
    page2.style.transform = 'translate(0%)';
    page3.style.transform = 'translate(0%)';

    page1.scrollTo(0,0);
    page2.scrollTo(0,0);
    page3.scrollTo(0,0);
    page4.scrollTo(0,0);

    page1.style.background= 'white';
    page2.style.background= 'white';
    page3.style.background= 'white';
    page4.style.background= 'white';

    containor_Btn_01.style.background= 'white';
    containor_Btn_02.style.background= 'white';
    containor_Btn_03.style.background= 'white';
    containor_Btn_04.style.background= 'white';
}

function moveC() {
    page0.style.transform = 'translate(-96%)';
    page1.style.transform = 'translate(-92.9%)';
    page2.style.transform = 'translate(-90.1%)';
    page3.style.transform = 'translate(0%)';

    page1.scrollTo(0,0);
    page2.scrollTo(0,0);
    page3.scrollTo(0,0);
    page4.scrollTo(0,0);

    page1.style.background= 'white';
    page2.style.background= 'white';
    page3.style.background= 'white';
    page4.style.background= 'white';

    containor_Btn_01.style.background= 'white';
    containor_Btn_02.style.background= 'white';
    containor_Btn_03.style.background= 'white';
    containor_Btn_04.style.background= 'white';

}

function moveD() {
    page0.style.transform = 'translate(-96%)';
    page1.style.transform = 'translate(-92.9%)';
    page2.style.transform = 'translate(-90.1%)';
    page3.style.transform = 'translate(-87.4%)';

    page1.scrollTo(0,0);
    page2.scrollTo(0,0);
    page3.scrollTo(0,0);
    page4.scrollTo(0,0);

    page1.style.background= 'white';
    page2.style.background= 'white';
    page3.style.background= 'white';
    page4.style.background= 'white';

    containor_Btn_01.style.background= 'white';
    containor_Btn_02.style.background= 'white';
    containor_Btn_03.style.background= 'white';
    containor_Btn_04.style.background= 'white';
}

function moveE() {
    page0.style.transform = 'translate(0%)';
    page1.style.transform = 'translate(0%)';
    page2.style.transform = 'translate(0%)';
    page3.style.transform = 'translate(0%)';

    page1.scrollTo(0,0);
    page2.scrollTo(0,0);
    page3.scrollTo(0,0);
    page4.scrollTo(0,0);

    page1.style.background= '#D5F705';
    page2.style.background= '#D5F705';
    page3.style.background= '#D5F705';
    page4.style.background= '#D5F705';

    containor_Btn_01.style.background= '#D5F705';
    containor_Btn_02.style.background= '#D5F705';
    containor_Btn_03.style.background= '#D5F705';
    containor_Btn_04.style.background= '#D5F705';
}
