// function myFunction1(){
//     let userName = document.getElementById('textInput').value;
//     let userPass = document.getElementById('passInput').value;
//     if(userName === 'giorgi' && userPass === 'gio'){
//         document.getElementById('animation').style.display = 'block';
//         document.getElementById('spin').style.display = 'block';
//         document.getElementById('spin').style.animation = 'anim 4s linear';
//     } else {
//         alert('Wrong');
//     }
// } //animacia


let firstAlert = document.querySelector("html");

firstAlert.onload = function startAlert() {
    setUserName()
}//gaxsnisas an gadatvirtvisasa sul amoagdebs alerts, amistvis onload-s viyeneb

let myButton = document.getElementById('changeButton');
let myHeading = document.getElementById('choose');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
        sessionStorage.setItem('name', myName);//sessionStorage- aris brauzeris shidfa mexsiereba da setItem-it iq inaxav mnishvnelobas//sessionStorage-shi name paremetrs mivaniche myName mnishvneloba
        myHeading.textContent = 'Choose the Homework, ' + myName;//textContent-it kontents vanicheb, anu ra gamoitanos am tegshi imas vuwer
    }
    sessionStorage.setItem('name', myName);
    myHeading.textContent = 'Choose the Homework, ' + myName;
}

if(!sessionStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = sessionStorage.getItem('name');
    myHeading.textContent = 'Choose the Homework, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}//saxelis chaweris prompt-ia

// // function printName(user){
// //     if(user.isLoggedIn){
// //         return user.firstname + ' ' + user.lastname;
// //     }
// //     return false;
// // }
// // console.log(printName(user))// asec Seidzleba
//
function myFunction(){
    let homeW = document.getElementById('homeworkOption').value;
    if (homeW === 'homeWork11'){
        document.getElementById('homework111').style.display = 'block';
        document.getElementById('homework22').style.display = 'none';
        document.getElementById('homework33').style.display = 'none';
        document.getElementById('homework44').style.display = 'none';
        document.getElementById('homework55').style.display = 'none';
        document.getElementById('homework66').style.display = 'none';
        document.getElementById('homework77').style.display = 'none';
        document.getElementById('homework88').style.display = 'none';
        document.getElementById('homework99').style.display = 'none';
        document.getElementById('homework10').style.display = 'none';
        document.getElementById('result11').style.display = 'none';
        document.getElementById('result22').style.display = 'none';
        document.getElementById('result33').style.display = 'none';
        document.getElementById('result44').style.display = 'none';
        document.getElementById('result55').style.display = 'none';
        document.getElementById('result66').style.display = 'none';
        document.getElementById('result77').style.display = 'none';
        document.getElementById('result88').style.display = 'none';
        document.getElementById('result99').style.display = 'none';
        document.getElementById('result10').style.display = 'none';
    } else if (homeW === 'homeWork22'){
        document.getElementById('homework22').style.display = 'block';
        document.getElementById('homework111').style.display = 'none';
        document.getElementById('homework33').style.display = 'none';
        document.getElementById('homework44').style.display = 'none';
        document.getElementById('homework55').style.display = 'none';
        document.getElementById('homework66').style.display = 'none';
        document.getElementById('homework77').style.display = 'none';
        document.getElementById('homework88').style.display = 'none';
        document.getElementById('homework99').style.display = 'none';
        document.getElementById('homework10').style.display = 'none';
        document.getElementById('result11').style.display = 'none';
        document.getElementById('result22').style.display = 'none';
        document.getElementById('result33').style.display = 'none';
        document.getElementById('result44').style.display = 'none';
        document.getElementById('result55').style.display = 'none';
        document.getElementById('result66').style.display = 'none';
        document.getElementById('result77').style.display = 'none';
        document.getElementById('result88').style.display = 'none';
        document.getElementById('result99').style.display = 'none';
        document.getElementById('result10').style.display = 'none';
    } else if(homeW === 'homeWork33'){
        document.getElementById('homework22').style.display = 'none';
        document.getElementById('homework111').style.display = 'none';
        document.getElementById('homework33').style.display = 'block';
        document.getElementById('homework44').style.display = 'none';
        document.getElementById('homework55').style.display = 'none';
        document.getElementById('homework66').style.display = 'none';
        document.getElementById('homework77').style.display = 'none';
        document.getElementById('homework88').style.display = 'none';
        document.getElementById('homework99').style.display = 'none';
        document.getElementById('homework10').style.display = 'none';
        document.getElementById('result11').style.display = 'none';
        document.getElementById('result22').style.display = 'none';
        document.getElementById('result33').style.display = 'none';
        document.getElementById('result44').style.display = 'none';
        document.getElementById('result55').style.display = 'none';
        document.getElementById('result66').style.display = 'none';
        document.getElementById('result77').style.display = 'none';
        document.getElementById('result88').style.display = 'none';
        document.getElementById('result99').style.display = 'none';
        document.getElementById('result10').style.display = 'none';
    }else if(homeW === 'homeWork44'){
        document.getElementById('homework22').style.display = 'none';
        document.getElementById('homework111').style.display = 'none';
        document.getElementById('homework33').style.display = 'none';
        document.getElementById('homework44').style.display = 'block';
        document.getElementById('homework55').style.display = 'none';
        document.getElementById('homework66').style.display = 'none';
        document.getElementById('homework77').style.display = 'none';
        document.getElementById('homework88').style.display = 'none';
        document.getElementById('homework99').style.display = 'none';
        document.getElementById('homework10').style.display = 'none';
        document.getElementById('result11').style.display = 'none';
        document.getElementById('result22').style.display = 'none';
        document.getElementById('result33').style.display = 'none';
        document.getElementById('result44').style.display = 'none';
        document.getElementById('result55').style.display = 'none';
        document.getElementById('result66').style.display = 'none';
        document.getElementById('result77').style.display = 'none';
        document.getElementById('result88').style.display = 'none';
        document.getElementById('result99').style.display = 'none';
        document.getElementById('result10').style.display = 'none';
    }else if(homeW === 'homeWork55'){
        document.getElementById('homework22').style.display = 'none';
        document.getElementById('homework111').style.display = 'none';
        document.getElementById('homework33').style.display = 'none';
        document.getElementById('homework44').style.display = 'none';
        document.getElementById('homework55').style.display = 'block';
        document.getElementById('homework66').style.display = 'none';
        document.getElementById('homework77').style.display = 'none';
        document.getElementById('homework88').style.display = 'none';
        document.getElementById('homework99').style.display = 'none';
        document.getElementById('homework10').style.display = 'none';
        document.getElementById('result11').style.display = 'none';
        document.getElementById('result22').style.display = 'none';
        document.getElementById('result33').style.display = 'none';
        document.getElementById('result44').style.display = 'none';
        document.getElementById('result55').style.display = 'none';
        document.getElementById('result66').style.display = 'none';
        document.getElementById('result77').style.display = 'none';
        document.getElementById('result88').style.display = 'none';
        document.getElementById('result99').style.display = 'none';
        document.getElementById('result10').style.display = 'none';
    } else if (homeW === 'nothing1'){
        document.getElementById('homework22').style.display = 'none';
        document.getElementById('homework111').style.display = 'none';
        document.getElementById('homework33').style.display = 'none';
        document.getElementById('homework44').style.display = 'none';
        document.getElementById('homework55').style.display = 'none';
        document.getElementById('homework66').style.display = 'none';
        document.getElementById('homework77').style.display = 'none';
        document.getElementById('homework88').style.display = 'none';
        document.getElementById('homework99').style.display = 'none';
        document.getElementById('homework10').style.display = 'none';
        document.getElementById('result11').style.display = 'none';
        document.getElementById('result22').style.display = 'none';
        document.getElementById('result33').style.display = 'none';
        document.getElementById('result44').style.display = 'none';
        document.getElementById('result55').style.display = 'none';
        document.getElementById('result66').style.display = 'none';
        document.getElementById('result77').style.display = 'none';
        document.getElementById('result88').style.display = 'none';
        document.getElementById('result99').style.display = 'none';
        document.getElementById('result10').style.display = 'none';
    } else if (homeW === 'homeWork66'){
        document.getElementById('homework22').style.display = 'none';
        document.getElementById('homework111').style.display = 'none';
        document.getElementById('homework33').style.display = 'none';
        document.getElementById('homework44').style.display = 'none';
        document.getElementById('homework55').style.display = 'none';
        document.getElementById('homework66').style.display = 'block';
        document.getElementById('homework77').style.display = 'none';
        document.getElementById('homework88').style.display = 'none';
        document.getElementById('homework99').style.display = 'none';
        document.getElementById('homework10').style.display = 'none';
        document.getElementById('result11').style.display = 'none';
        document.getElementById('result22').style.display = 'none';
        document.getElementById('result33').style.display = 'none';
        document.getElementById('result44').style.display = 'none';
        document.getElementById('result55').style.display = 'none';
        document.getElementById('result66').style.display = 'none';
        document.getElementById('result77').style.display = 'none';
        document.getElementById('result88').style.display = 'none';
        document.getElementById('result99').style.display = 'none';
        document.getElementById('result10').style.display = 'none';
    } else if (homeW === 'homeWork77'){
        document.getElementById('homework22').style.display = 'none';
        document.getElementById('homework111').style.display = 'none';
        document.getElementById('homework33').style.display = 'none';
        document.getElementById('homework44').style.display = 'none';
        document.getElementById('homework55').style.display = 'none';
        document.getElementById('homework66').style.display = 'none';
        document.getElementById('homework77').style.display = 'block';
        document.getElementById('homework88').style.display = 'none';
        document.getElementById('homework99').style.display = 'none';
        document.getElementById('homework10').style.display = 'none';
        document.getElementById('result11').style.display = 'none';
        document.getElementById('result22').style.display = 'none';
        document.getElementById('result33').style.display = 'none';
        document.getElementById('result44').style.display = 'none';
        document.getElementById('result55').style.display = 'none';
        document.getElementById('result66').style.display = 'none';
        document.getElementById('result77').style.display = 'none';
        document.getElementById('result88').style.display = 'none';
        document.getElementById('result99').style.display = 'none';
        document.getElementById('result10').style.display = 'none';
    } else if (homeW === 'homeWork88'){
        document.getElementById('homework22').style.display = 'none';
        document.getElementById('homework111').style.display = 'none';
        document.getElementById('homework33').style.display = 'none';
        document.getElementById('homework44').style.display = 'none';
        document.getElementById('homework55').style.display = 'none';
        document.getElementById('homework66').style.display = 'none';
        document.getElementById('homework77').style.display = 'none';
        document.getElementById('homework88').style.display = 'block';
        document.getElementById('homework99').style.display = 'none';
        document.getElementById('homework10').style.display = 'none';
        document.getElementById('result11').style.display = 'none';
        document.getElementById('result22').style.display = 'none';
        document.getElementById('result33').style.display = 'none';
        document.getElementById('result44').style.display = 'none';
        document.getElementById('result55').style.display = 'none';
        document.getElementById('result66').style.display = 'none';
        document.getElementById('result77').style.display = 'none';
        document.getElementById('result88').style.display = 'none';
        document.getElementById('result99').style.display = 'none';
        document.getElementById('result10').style.display = 'none';
    } else if (homeW === 'homeWork99'){
        document.getElementById('homework22').style.display = 'none';
        document.getElementById('homework111').style.display = 'none';
        document.getElementById('homework33').style.display = 'none';
        document.getElementById('homework44').style.display = 'none';
        document.getElementById('homework55').style.display = 'none';
        document.getElementById('homework66').style.display = 'none';
        document.getElementById('homework77').style.display = 'none';
        document.getElementById('homework88').style.display = 'none';
        document.getElementById('homework99').style.display = 'block';
        document.getElementById('homework10').style.display = 'none';
        document.getElementById('result11').style.display = 'none';
        document.getElementById('result22').style.display = 'none';
        document.getElementById('result33').style.display = 'none';
        document.getElementById('result44').style.display = 'none';
        document.getElementById('result55').style.display = 'none';
        document.getElementById('result66').style.display = 'none';
        document.getElementById('result77').style.display = 'none';
        document.getElementById('result88').style.display = 'none';
        document.getElementById('result99').style.display = 'none';
        document.getElementById('result10').style.display = 'none';
    } else if (homeW === 'homeWork10'){
        document.getElementById('homework22').style.display = 'none';
        document.getElementById('homework111').style.display = 'none';
        document.getElementById('homework33').style.display = 'none';
        document.getElementById('homework44').style.display = 'none';
        document.getElementById('homework55').style.display = 'none';
        document.getElementById('homework66').style.display = 'none';
        document.getElementById('homework77').style.display = 'none';
        document.getElementById('homework88').style.display = 'none';
        document.getElementById('homework99').style.display = 'none';
        document.getElementById('homework10').style.display = 'block';
        document.getElementById('result11').style.display = 'none';
        document.getElementById('result22').style.display = 'none';
        document.getElementById('result33').style.display = 'none';
        document.getElementById('result44').style.display = 'none';
        document.getElementById('result55').style.display = 'none';
        document.getElementById('result66').style.display = 'none';
        document.getElementById('result77').style.display = 'none';
        document.getElementById('result88').style.display = 'none';
        document.getElementById('result99').style.display = 'none';
        document.getElementById('result10').style.display = 'none';
    }
}

function clickChange(){
    let homeW = document.getElementById('homeworkOption').value;
    if (homeW === 'homeWork11'){
        document.getElementById('result11').style.display = 'block';
        document.getElementById('result22').style.display = 'none';
        document.getElementById('result33').style.display = 'none';
        document.getElementById('result44').style.display = 'none';
        document.getElementById('result55').style.display = 'none';
        document.getElementById('result66').style.display = 'none';
        document.getElementById('result77').style.display = 'none';
        document.getElementById('result88').style.display = 'none';
        document.getElementById('result99').style.display = 'none';
        document.getElementById('result10').style.display = 'none';
    } else if(homeW === 'homeWork22'){
        document.getElementById('result11').style.display = 'none';
        document.getElementById('result22').style.display = 'block';
        document.getElementById('result33').style.display = 'none';
        document.getElementById('result44').style.display = 'none';
        document.getElementById('result55').style.display = 'none';
        document.getElementById('result66').style.display = 'none';
        document.getElementById('result77').style.display = 'none';
        document.getElementById('result88').style.display = 'none';
        document.getElementById('result99').style.display = 'none';
        document.getElementById('result10').style.display = 'none';
    } else if(homeW === 'homeWork33'){
        document.getElementById('result11').style.display = 'none';
        document.getElementById('result22').style.display = 'none';
        document.getElementById('result33').style.display = 'block';
        document.getElementById('result44').style.display = 'none';
        document.getElementById('result55').style.display = 'none';
        document.getElementById('result66').style.display = 'none';
        document.getElementById('result77').style.display = 'none';
        document.getElementById('result88').style.display = 'none';
        document.getElementById('result99').style.display = 'none';
        document.getElementById('result10').style.display = 'none';
    } else if(homeW === 'homeWork44'){
        document.getElementById('result11').style.display = 'none';
        document.getElementById('result22').style.display = 'none';
        document.getElementById('result33').style.display = 'none';
        document.getElementById('result44').style.display = 'block';
        document.getElementById('result55').style.display = 'none';
        document.getElementById('result66').style.display = 'none';
        document.getElementById('result77').style.display = 'none';
        document.getElementById('result88').style.display = 'none';
        document.getElementById('result99').style.display = 'none';
        document.getElementById('result10').style.display = 'none';
    } else if(homeW === 'homeWork55'){
        document.getElementById('result11').style.display = 'none';
        document.getElementById('result22').style.display = 'none';
        document.getElementById('result33').style.display = 'none';
        document.getElementById('result44').style.display = 'none';
        document.getElementById('result55').style.display = 'block';
        document.getElementById('result66').style.display = 'none';
        document.getElementById('result77').style.display = 'none';
        document.getElementById('result88').style.display = 'none';
        document.getElementById('result99').style.display = 'none';
        document.getElementById('result10').style.display = 'none';
    } else if(homeW === 'homeWork66'){
        document.getElementById('result11').style.display = 'none';
        document.getElementById('result22').style.display = 'none';
        document.getElementById('result33').style.display = 'none';
        document.getElementById('result44').style.display = 'none';
        document.getElementById('result55').style.display = 'none';
        document.getElementById('result66').style.display = 'block';
        document.getElementById('result77').style.display = 'none';
        document.getElementById('result88').style.display = 'none';
        document.getElementById('result99').style.display = 'none';
        document.getElementById('result10').style.display = 'none';
    } else if(homeW === 'homeWork77'){
        document.getElementById('result11').style.display = 'none';
        document.getElementById('result22').style.display = 'none';
        document.getElementById('result33').style.display = 'none';
        document.getElementById('result44').style.display = 'none';
        document.getElementById('result55').style.display = 'none';
        document.getElementById('result66').style.display = 'none';
        document.getElementById('result77').style.display = 'block';
        document.getElementById('result88').style.display = 'none';
        document.getElementById('result99').style.display = 'none';
        document.getElementById('result10').style.display = 'none';
    } else if(homeW === 'homeWork88'){
        document.getElementById('result11').style.display = 'none';
        document.getElementById('result22').style.display = 'none';
        document.getElementById('result33').style.display = 'none';
        document.getElementById('result44').style.display = 'none';
        document.getElementById('result55').style.display = 'none';
        document.getElementById('result66').style.display = 'none';
        document.getElementById('result77').style.display = 'none';
        document.getElementById('result88').style.display = 'block';
        document.getElementById('result99').style.display = 'none';
        document.getElementById('result10').style.display = 'none';
    }else if(homeW === 'homeWork99'){
        document.getElementById('result11').style.display = 'none';
        document.getElementById('result22').style.display = 'none';
        document.getElementById('result33').style.display = 'none';
        document.getElementById('result44').style.display = 'none';
        document.getElementById('result55').style.display = 'none';
        document.getElementById('result66').style.display = 'none';
        document.getElementById('result77').style.display = 'none';
        document.getElementById('result88').style.display = 'none';
        document.getElementById('result99').style.display = 'block';
        document.getElementById('result10').style.display = 'none';
    } else if(homeW === 'homeWork10'){
        document.getElementById('result11').style.display = 'none';
        document.getElementById('result22').style.display = 'none';
        document.getElementById('result33').style.display = 'none';
        document.getElementById('result44').style.display = 'none';
        document.getElementById('result55').style.display = 'none';
        document.getElementById('result66').style.display = 'none';
        document.getElementById('result77').style.display = 'none';
        document.getElementById('result88').style.display = 'none';
        document.getElementById('result99').style.display = 'none';
        document.getElementById('result10').style.display = 'block';
    }
}

// davalebebi N1:
// დავალება 1
// let arr = ['javascript', 'php', 'c#', 'python', 'c++', 'kotlin', 'c', 'swift'];
//
// for (let x = 0; x < arr.length; x++){
//     if(arr[x].length>=5){
//         console.log(arr[x]) } }//es mqonda me
//
//meore versia
//
// let arr = ['javascript', 'php', 'c#', 'python', 'c++', 'kotlin', 'c', 'swift'];
//
// for (let x = 0; x<arr.length; x++){
//     const item = arr[x];
//     if(item.length>=5){
//         continue
//     }
//     console.log(item)
// }//es aris ufro swori
//
//
// //დავალება 2
//
// let arr2 = [2, -3, 5, 11, 1, -30, -11, 100, -1, -3, -4];
//
// for (let x = 0; x<arr2.length; x++){
//     if(arr2[x]>0){
//         console.log(arr2[x])
//     }
// }
//
// //დავალება 3
// let arr3 = [[2, -3, 5, 11], [1, -30, -11, 100], [-1, -3, -4]];
//
// for (let x in arr3){
//     for(let y in arr3[x]){
//         if(arr3[x][y]>0){
//             console.log(arr3[x][y])
//         }
//     }
// }
//
//დავალება 4
// let arr4 = [1, 15, 6, "giorgi", 70, 30, 809, 25];
//
// function getMax(numbers){
//     let max = 0
//     for (let i = 0; i < numbers.length; i++){
//         if (numbers[i]> max){
//             max = numbers[i];
//         }
//     }
//     return max;
// }
// console.log(getMax(arr4));//swori gadawyveta aris es
//
// let arr4 = [1, 15, 6, "giorgi", 70, 30, 25];
//
// let getMaximum = function (arr){
//     arr.sort(function (a,b){
//         return a-b;
//     })
//     console.log(arr[arr.length - 1]);
// }
//
// getMaximum(arr4);//esec swori gadawyvetaa
//
// function getMax(x){
//     console.log(Math.max(..x));
// }
// getMax([1,15,6,70,30,25]); ar imuSava
// let arr4 = [1, 15, 6, 70, 30, 25];
// console.log(Math.max(...arr4));//es arasworia, radgan cifrebze muSaobs math
//
//დავალება 5
// let user = {
//     firstname: 'giorgi',
//     lastname: 'saakadze',
//     age: 32,
//     isLoggedIn: true
// }
//
// function printName(x){
//     if(x.isLoggedIn === true){
//         console.log(x.firstname + ' ' + x.lastname)
//     }else {
//         console.log('false')
//     }
// }
// printName(user)

// mtvleli
// let x = 0;
// let buttonClick = document.querySelector("button")
//
// buttonClick.onclick = function (){
//     document.querySelector("p").innerHTML = x++;
// }//mtvleli
//
// let clear = document.getElementById('clear');
// let show = document.querySelector('h1');
// clear.onclick = function (){
//     let container = [x];
//     sessionStorage.setItem('x', container);
//     show.textContent = container;
//     document.querySelector("p").innerHTML = x = null;
//}//mtvleli wamshleli gilakit
//
// let timer = new Date("00, 00:00:00:00").getTime();
//
// let y = setInterval(function (){
//     let startTimer = timer+1;
//     let days = Math.floor(startTimer / (1000 * 60 * 60 * 24));
//     let hours = Math.floor((startTimer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     let minutes = Math.floor((startTimer % (1000 * 60 * 60)) / (1000 * 60));
//     let seconds = Math.floor((startTimer % (1000 * 60)) / 1000);
//     document.querySelector('h2').innerHTML = days + "d " + hours + "h "
//         + minutes + "m " + seconds + "s ";
// },1000);

// let x = [1, 2, 3, 4];
// let y = 0;//Semgrovebeli cvladi unda Sevqmna
// for (let i in x){
//     y += x[i];//ase Sevkreb x-is elementebs
//     // console.log(x[i] + x[i]);//TiToeuli elementi gavamravle orze, anu sakuTari Tavi davumate da ise davbechde
// }
// console.log(y);//dabechdavs jams

// karuseli
// let source = document.getElementById('pic');
//
// function carChanger (){
//     let source1 = source.getAttribute('src');
//     if (source1 === '10best-cars-group-cropped-1542126037.jpg'){
//        source.setAttribute('src', '2022-chevrolet-corvette-z06-1607016574.jpg');
//     }else if(source1 === '2022-chevrolet-corvette-z06-1607016574.jpg') {
//         source.setAttribute('src', 'Screenshot-2020-05-12-at-15.10.34.png');
//     }else {
//         source.setAttribute('src', '10best-cars-group-cropped-1542126037.jpg');
//     }
// }
// Cermi gakeTebuli daklikebadi karuseli, fotoebis mcvleli.

//leqcia 3
//funqciis deklaracia qvia aset nawers:
//function test(){}
//xolo funqciis expression qvia asets:
//let test = function(){}//rodesac cvladad vaqcev funqcias, gansxvaveba isaa, rom deklracia shemiZlia jer gamoviZaxo
//da shemdeg davwero funqcia, xolo expression-is shemtxvevashi jer funqcias vwer da mere viZaxeb
//arsebobs errow funqciebi, rommlebic gamosaxulebis gamo iwodeba arrow-t, ase gamoisaxeba:
//let test = (a, b) => {}; shignit shegvizlia function sirtyva ar gamoviyenot.
//
//
//funqciashi sheiZleba ramdenime parametri mqondes gawerili da Tan romdeniime matgans defoltad mivanicho mnishvneloba. mag:
//let test = function test (a, b) {
// return a + b;}
//let result = test (1, 3)//aq a da b parametrebi ganvsazgvre qvemot, anu bolos shemovitane, magram shemedzlo mxolod a shemometana da b-ze tavidanve gamewere mnishvneloba:
//let test = function test (a, b = 3) {
// return a + b;}
//let result = test (1);//ase b-s tavidanve mivaniche mnishvneloba.
//
//
//rodesac expression funqciashi mxolod erti martivi piroba gvaqvs magalitad return, anu aseti martivi funqcia tu gvaqvs:
// let test = (a, b)=>{
// return a+b;
// };
// let result = test(1, 3);
// shegviZlia aseti gamosaxulebiT chavwerot:
//let test = (a, b) => a + b;//anu figuruli frCxilebi ar gamoviyenoT
//rodesac ertze meti moqmedebaa funqciaSi masin frCxilebis gamoyeneba mogviwevs.
//rom shevajamot:
//function test (a, b) {
// return a + b;}
//
//let test = function test (a, b) {
// return a + b;}
//
// let test = (a, b) => a + b;
// es samive funqcia aris ertidaigive, ubralod pirveli dawerrilia function declaration, meore function expression, mesame aris mokle
//chanaweri.
//rekomentebuli ar aris funqcias Zalian bevri parametri gaeweros, jobs, rom ramdenime funqcia shevqmnat vidre bevri parametri gavwero.
//
//
//sheidzleba winaswar ar vicodet funqciis parametrebis raodenoba, anu ragac cvladi parametrebi sheidzleba gvqondes
//magalitad:
//let test = function test () {
// }
//test ('giorgi', 'naniko','marina')//anu test funqciashi tavidan ar maaqvs gansazRrvuli parametrebi da boloshi gadaveci ramenime
//aset dros arsebobs funqciis shida cvladi arguments, romelic mimartavs yvela parametrs rac ki funqcias gadaecema
//magalitad, Tu shven am funqciashi davlogavt arguments ase:
//let test = function test () {
// console. log(arguments);
// }
//test ('giorgi', 'naniko','marina')//es dabechdavs obieqtisa da masivis nazav rames, sadac parametrebis indeqsebsac da mat mnishvnelobasac gamoians anu:
//[arguments] {'0':'giorgi','1':'naniko','2':'marina'} aset rames dabechdavs da am arguments shegvidzlia moveqcet rogorc masivs, anu gamoviZaxot indeqsebi,
//gamoviyenot slaisebi pushebi da ase shemdeg, ase magalitad, Tu gvinda pirveli parametris dabechdva da ar vicit pirveli ra iqneba winaswar anu, bolos vusazRvravt funqcias parametrebs, rogorc zemot davwereT
//vwert ase:
//let test = function test () {
// console. log(arguments[0]);
// }
//test ('giorgi', 'naniko','marina');//dabechdavs giorgi .
//anu roca ragac fuqncia shevqmeni da minda rom is mushaobdes, ogond winaswar ar vici ramdeni an da ra parametri
//meqneba da ragac moqmedeba minda shevasrulo funqciashi am parametrebze, am drtos idealuria am arguments-is gamoyeneba.
//am arguments-is daweris axali sintqqsi aris aseti:
//function test (...args) {//es sami wertili nishnavs, rom am funqcias ramdeni parametric ar unda gadaeces, uyvelas sheitans wertilebis shemdeg daweril cvladshi, am shemtxvevashi args-shi
//
// }
//test ('giorgi', 'naniko','marina');//anu es samive dagrovdeba args-shi masivad, anu mivigebt amas ra:
//let args = ['giorgi', 'naniko','marina']//manipulaciac am args cvladze moxdeba ise rogorc masivze. es chanawere aris ufro axali da jobs ase vimushavot arguments-tan.
//axla ukve tu davwert:
//function test (...args) {
//  console. log(args);
// }
//test ('giorgi', 'naniko','marina');//dabechdavs mtliad args masivad, amas:['giorgi', 'naniko','marina']. anu rodesac funqcias gadaecema bevri parametri da es parametrebi gvinda ert cvladshi davichirot amistvis viyenebt sam wertils.
//e chven ar gvzgudavs imashi, rom funqcias sxva parametrebic gavuwerot, anu magalitad, tu gvaqvs ori winaswar nobili parametri
//da danarcheni shemdeg gadaecema, bunebrtivia pirveli ori gautoldeba gadacemultagan pirvelor parametrs, xolo danarcheni sami wertiulis
// gamoyenebit gadava cvladshi, anu:
//function test (x, y, ...args) {
//  console. log(args);
// }
//test ('1', '2','3', '4', '5');//es nishnavs rom pirveli ori, anu x da y gautoldeba 1 da 2-s, anu x=1 y=2, xolo
// 3, 4 da 5 gaertiandeba mesame parametrei args-shi, romelic sami wertilis gamoyenebit samives gaaertianebs masivshi.
//ase magalitad tu gvsurs rom jami gavaketot:
//function sum (x, y, ...args) {
//  let result = x + y;//pirvel or parametrs vkreb, anu 1+2
//  for (let i = 0; i < args.length; i++){//args-ze vqmni loop-s da veubnebo, rom gadauaros yvela elements args-shi
//     let n = args[i]//n gautole argsi yovel elements
//     result += n;//da es args-is yvela elementio daumate zeda results, anu 1+2+args[i]
//  }
//  return result;//daabrune result cvladi
// }
//sum ('1', '2','3', '4', '5');// gadaveci parametrebi da es funqcia mogvcems am cifrebis jams.
//am arguments da sami wertilis cvladebis gamoyenebas qvia destruqturizacia.
//
//arsebobs aseti sintaqsic:
//[a, b, ...rest] = [1,2,3,4,5,6,7];// es nishnavs shemdegs: marcxena mxares arsebuli cvladebi igeben monacemebs marjvena mxares arsebuli monacemebidan.
//anu a = 1; b = 2; da rest = [3,4,5,6,7]; aset shedegs mivigebt. esec destruqturizaciis sintaqsia. es sam wertiliani cvladi sul bolos unda eweros.
//
//
//Tu obieqtis elementebistvis gvinda calke cvladebis sheqmna mag:
//let user = {
//    username: 'test';//dabvushvat gvinda, rom usernames mnishvneloba calke cvladshi shevinaxot
//    age: 32;
//    gender: 'male';
//}
//vwert let {username} = user; //es nishnavs, rom user obieqtshi ipovos key username da misi mnishvneloba sheitanos cvladshi, anu test gautolebs cvlads
//rom davlogot console.log(username), mivigebt test-s. aseti daweris shemtxvevashi cvladis saxels mnishvneloba aqvs
//anu cvladis saxelis property/key aucileblad unda iyos obieqtshi.
//ase shegviZlia ramdenime cvladi shevqmna am obieqtidan mag: let {username, age} = user;//amoviget usernames da age-s  mnishvneloba
//igive shegviZlia funqciazec, rodesac fuqnciidan obieqti brundewba mag:
//funqction getUser(){
//return{
//    username: 'test';
//    age: 32;
//    gender: 'male';
// }
//}
//let {username, age} = getUser();//igivea ogond amjerad funqciashi veZebt username da age parametrebs
//asec shemidzlia: let username = getUser().username;// ubralod roca sxvadasxva propertis cvladshi gadatana minda arakomfortulia. calcake unda wero mashin, age-ze calke unda gawero.
//aseve shemidzlia cvlads saxeli gadavarqva:
//vwert let {username: username1} = getUser();//es chnaweri nishnavs, rom funqcia getuser-dan igebs propertiu username-s da shehyavs cvladshi, ogond am cvlad arqmevs username1-s
//
//
//მასივის ფუნქციები: yoveli funqcia qmnis funqcias, romelic moqmedebes titoeul elementze
//
// Foreach: kodis Sesruleba ereis TiToeyuli elementesTvis
// let number = [1,3,5];
// numbers.foreach(//gadaecema parametri, rimelic aqedan aris funqcia//(n//es eni aris numbers-is elementis mnishvneloba, romelzec sruldeba funqcia) =>{
// console.log(n)
// }//aqamde) //anu ra xdeba axla aq, numbers-is foreach-s parametrad gadaeca funqcia, romelic ambobs, rom misi titoeuli elementi dalogos
//anu am funqciis gamoZaxeba moxdeba samjer da pirveli gamodzaxebisas eni iqneba 1, meored 3 da mesamed 5, anu foreach-it numbers-is titoeul elements vidzaxebt da masze vaketebt raRac funqcias,
//am shemtxvevashi ubralod logavs.
//numbers.foreach((n, i//es i aris elementis indeqsi//anu pirveli parametri aris mnishvneloba da meore elementis indeqsi, i iqnmeba tu be ar aqvs mnishvvneloba, mtavaria davimaxsovrot, rom pirveli parametri aris elementis value da meore elementis indeqsi) =>{
// Console.log(n)
// }.
//foreach funqcias aqsv sami parametri value indeqsi da tviton array. chven shegviZlia shevqmnat ragac funqcia da foreachit gamoviyenot is, mag:
//let numbers = ['test','test2','test3'];
//function toUpper(value, index, array) {
//       console.log(value.toUpperCase())
//}
// numbers.foreach(toUpper)//es aris foreach-is uketesi varianti, roca fubnqcia calkea da ara parametrad gadacemuli//anu shevqmeni funqcia, romelic gamoviZaxe foreach-it, numbers-is yovel elementze. funqciashi
//gavwere, rom yoveli value iyos didi asoti.
//
//
//
// Map: ereis TiToeuli elementis transformacia masivshi. qmnis axal masivs sadac transformirebulia titoeuli elementi da masivad ayalibebs
//let numbers2  = [2,5,20];
// let newArray = numbers2.map((value//anu numbers2-is titoeuli elementis mnisgvneloba) => {
//     return value * value;
// })
// console.log(newArray)
//aqac sami parametri aqvs rogorc foreach-s, gansxvaveba is aris, rom foreach-s masivad ar gamoaqvs, calke gamoaqvs titoeuli elementi.
//anu mapi cvlis elementebs da axal masivshi gadaaqvs, ase:
// let numbers2  = [2,5,20];
// let newArray = numbers2.map((value) => {
//     return value * value;
// })
// console.log(newArray)// mivigebt masivs let newArray = [4,25,400];//dabechdavs [4,25,400]
//map-is gamoyenebas azri ar aqvs tu ar gvinda, rom axal masvad chamoyalibdes. map-s aqvs return-i magram foreach-s ar aqvs return
//
//
//
// Filter: agenerirebs axal masivs, idzaxebs ragac funqcias masivis yvela elementisTvis, ubralod filter abrunebs true an false-s. mag:
// let numbers2  = [-4, -6, 2, -10, 5, 20];
//  let newArray = numbers2.filter((value) => {
//     return value >= 0;
//  })
//  console.log(newArray)//anu veubnebiT rom numbers2-shi ipovos 0ze meti ricxvebi da tu ipovis(tu true aris) chaagdos axal masivshi.
//chven shegviZlia es funqciebi ertad gamoviyenoT, magalitad:
//let numbers2  = [-4, -6, 2, -10, 5, 20];
//  let newArray = numbers2
//  .filter((value) => value >= 0)//figuruli frCxilis gareshec sheiZleba ase daiweros funqcia.
//  .map(x => x * x);
//  console.log(newArray);//aq xdeba shemdegi ram: jer varchevt dadebiT ricxvebs da shemdeg agvyavs kvadratshi
//
//
// Reduce: aucilebeli ar aris axal masivs agenerirebdes, man sheidzleba erti konkretuli mnishvneloba dasvas
//isic funqcias amoqmedebs yvela elementze ubralod reduse-is parametrebi ar aris parametrebi, misi parametrebia
// Accumulator, current value, current index, source array
// Accumulatori aris damgrovebeli, anu masvis elements agrovebs, igivea rac Semgrovebeli cvladi, funqciaSi. Magalitad:
// const array1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
//accumulator tu gansazgvruli ar aris misi mnishvneloba defoltad aris 0.
//let numbers2  = [-4, -6, 2, -10, 5, 20];
//  let newArray = numbers2
//  .filter((value) => value >= 0)//figuruli frCxilis gareshec sheiZleba ase daiweros funqcia.
//  .reduce((acc, cur)=> acc += cur,0);//0 sadac weria es aris argumentis adgili//es 0 aris accumulatoris gansazRgvruli mniSvneloba, romelic aris nuli, anu Semgrovebeli cvladi udris 0-s funqciis gashvebamde
//  console.log(newArray);//es kodi shekrebs dadebit ricxvebs da cvladad gamoitans ert konkretul mnishvnelobas, am shemtxvevashi jams, dabechdavs 27-s.
//
//let numbers2  = ['lorem', 'ipsum', 'dolor'];
//  let newArray = numbers2
//  .reduce((acc, cur)=> acc += ' ' + cur,''//stringi davwere);//anu accumulatoris tavdapirveli mnishvneloba aris carieli stringi
//  console.log(newArray);// es dabechdavs winadadebas lorem ipsum dolor
// let concat = [[0,1],[2,3],[4,5]].reduce(
//     function (accumulator, currentValue){
//         return accumulator.concat(currentValue)
//     },
//     []//aqac acumulators cariel masivad ganvsazgvrav
// )//es masivebis conkatenacias moaxdens anu gaaertianebs masivebs ert masivshi. amis mokle chanaweria:
// let concat = [[0,1],[2,3],[4,5]].reduce((accumulator, currentValue) => accumulator.concat(currentValue),[])
// console.log(concat)
//
// let numbers2  = [-4, -6, 2, -10, 5, 20];
//  let newArray = numbers2
//      .reduce((acc, cur)=>{
//          if (cur > 0){
//              acc += cur;
//          }
//          return acc
//      },0);
//  console.log(newArray);//es kodic shekrebs dadebit ricxvebs, gansxvaveba isaa, rom filtri filter funqciad ar gamoviyenet da reduce-shi gavweret if funqcia
//shemiZlia ramdenime reduce-is gamoyeneba shezguduli ar var, magalitad jer gavaertiano masivebi da shemdeg isini shevkribo:
// let concat = [[0,1],[2,3],[4,5]]
//     .reduce((accumulator, currentValue) =>
//         accumulator.concat(currentValue),
//             []
//     )//gavaertiane
//     .reduce((acc, cur)=> acc += cur,0);//shevkribe gaertianebuli
// console.log(concat)//dabechdavs 15-s

//davalebebi N2
//davaleba 1:
//
// let words = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit.', 'Nullam', 'lectus', 'quam']
//
// let result = words.reduce((acc, cur, index)=>{
//     if (index % 2 === 1){
//         acc = acc + cur.toUpperCase() + ' ';
//     } else{
//         acc= acc + cur + ' ';
//     }
//     return acc
// },'')
// console.log(result)
//
// //davaleba 2:
// let words1 = ['Madrid', 'Rome', 'Berlin', 'Barcelona', 'Milan', 'Batumi']
//
// let result1 = words1.filter((value)=>{
//     if (value.includes('m')){
//         return value
//     } else if (value.includes('M')){
//         return value
//     }
// })
// console.log(result1)
//
// //davaleba 3:
// let words2 = ['Madrid', 'Rome', 'Berlin', 'Barcelona', 'Milan', 'Batumi'].filter((value)=> value.includes('m') || value.includes('M'));
// console.log(words2)
//
// //davaleba 4:
// let items = [12, 'Google', 32, null, undefined, 'yahoo', 0, 'bing']
//
// let result2 = items.map((value)=>{
//     if(typeof value === "number"){
//        return value * value
//     }else if (typeof value === "string"){
//         return value.toUpperCase()
//     }
//     return value
// })
// console.log(result2)
//
// //davaleba 5:
// let users = [
//     {name: 'giorgi', age: 16},
//     {name: 'levani', age: 90},
//     {name: 'nino', age: 30},
//     {name: 'otari', age: 11},
//     {name: 'mari', age: 28}
// ]
//
// let result3 = users.filter((value)=>{
//     if (value.age >= 18){
//         return value
//     }
// })
//     .map((value) => {
//         return value.name
//     })
//
// console.log(result3.join(' '))

//leqcia 4
/*html Tan manipulacia
* saitebTan muSaobisas Ziritadad frimvorkebs gamoiyeneben, zogavs developeris dros
*
* tegebTan moqmedebis funqciebi: html elementze manipulaciisas jer unda movZebnot elementi, amistvis
* html-shi elements vuwerT atributs id-is da js kodshi get.elementbyid-it vidzaxebt. aseve shegvizlia tegit gamovidzaxot
* queryselectorit js kodSi.
* document.getElementById('id');
* document.querySelector('tegi');
*
* stilis shecvlac shegvidzlia js-it, amistvis elementis id kods wertilit vuwert.style da shemdeg konkretuli css kodi.
* document.getElementById('id').style.width = '200px';
* ubralod css stilshi rac iwereba tireti aq unda gawero camelcase-it: mag: background-color
* document.getElementById('id').style.backgroundColor = 'green';
*
* getElementById-is ufro naklebad iyeneben, uketesia querySelector-it modzebno,radgan seleqtorit yvela atributit shegizlia mozebno, klasitac da
* id-itac da tegitac, ubralod css stilshi rogorc vwert ise: mag clasit modzebna:
* querySelector('.class') an id-it querySelector('#id') da ase shemdeg. amitom querySelector jobs
*
* queryseleqtor da queryseleqtorall-s shoris is gansxvavebaa, rom queryseleqtor-it gamodzaxebuli idzaxebs im elements romelsac ipovis htmlshi
* da queryseleqtorall-i masivad abrunebs da stilis an manipulaciis dros masivis konkretul elements unda mivmarto, mag:
* querySelectorAll('.class')[0].style. width = '200px';
*
* tu ramdenime elementze minda manipulacia ertdroulad amisTvis mdzimit gamovyob titoeuls, mag:
* querySelector('.class, .class1');
*
* querySelector-it tu minda konkretuli ielementis archeva da elementis tegi bevri maqvs html-shi
* magalitad input, rac aqvs am inputebs ganmasxvavebeli imit unda gamovidzaxo, magalitad atributi yvelastan ertida igive maqvs,
* magram atributebis mnishvnelobaa gansxvavebuli, magalitad atributi name maqvs gawerili, magram minda is inputi, romlis
* name aris input1, amistvis:
* querySelector('input[name = "input1"]'); ase shemidzlia konkretuli atributit gamovidzaxo elementi.
* aseve shemidzlia ufro davakonkreto elementis misamarti, mag:
* querySelector('form.addname input[name = "input1"]'); //aq weria, rom is inpoti wamoiRe, romlis name aris input1 da tan es inputi aris im formashi, romlis klasic aris addname.
*
* shemidzlia elements mivanicho css-shi gawerili stili, amistvis js kodshi vwer element.classList.add('clasis stilis saxeli');
* add-is garda aris remove, romelic aclis class da toggle tu minichebuli aqvs unda moxsna da tu ar aqvs daemateba.
*
* arsebobs aseve setAtribute(), es tegs adzlevs atributs, magalitad shemidzlia title gavuwero tegs:
* setAtribute('title', 'test');//tets aris title-is mnishvneloba, anu vuwert title = 'test'; igivea.
*
* shegvidzlia wavsalot elementi amistvis remove-s viyeneb:
* elementCvladi.remove();ogond tu waishala waishleba sul. es shlis elements html kodidan
*
* chven aseve shegvidzlia elementis sheqmnac: magalitad add gilakebi rom gvxvdeba saitebze, amistvis:
* createElement()-s viyeneb, magalitad:
* let ul = createElement('tegi, romelic gvinda rom shevqmnad, mag: ul');ase sheiqmneba ul listi htmlshi
* amis shemdeg unda vutxrat brauzers tu sad chajdes es ul teqi, anu romel tegshi, romel mshobelshi, amistvis:
* mshbeliElementi(romelic query-it gamovidzaxe).appendChild(ul); anu jer vmni elements da mere vutiteb mshobels.
* davushvat li teqgi gvinda amjerad am ulshi movaqciot, romelic tavis mxriv mshobel elementshia, amistvis:
* let li = document.createElement('li'); ul.appendChild('li');
* tu gvsurs rom sheqmnil elementshi teqsti shevitanot, anu content teqsti mivutot vwert: li.textContent = 'php';
*
* mag:*/
//  let mainElement = document.querySelector('.main');
//
//  let names = ['php','javascript', 'c#'];
//  let ul = document.createElement('ul');
//  names.forEach(name => {
//      let li = document.createElement('li');
//      li.textContent = name;
//      ul.append.appendChild(li);
//  })
// console.log(names);

/*aseve shemidzlia elements mivanicho css-shi shemnili klasi, amistvis elementis cvlads vuwer .classList.add('');
* class-is wasashlelad viyenebt .classList.remove(''); */

// html-is js-it awyoba let body = document.querySelector('body');
//
// let button = document.querySelector('.buttonClass');
//
// let innerButton = document.createElement('button');
//
// innerButton.classList.add('button');
// innerButton.setAttribute('id', 'changeButton');
// innerButton.textContent = 'Change Name';
//
// button.appendChild(innerButton);
//
// let form = document.createElement('form');
// form.classList.add('forma');
// body.appendChild(form);
//
// let label = document.createElement('label');
// label.classList.add('Choose');
// label.setAttribute('id','choose');
// form.appendChild(label);
//
// let select = document.createElement('select');
// select.classList.add('HomeWork');
// select.setAttribute('name, id', 'Hopmework, homeworkOption');
// form.appendChild(select);


// html kodi
// <form className="forma">
//     <label className="Choose" id="choose">
//     </label>
//     <select className="HomeWork" name="Homework" id="homeworkOption" onChange="myFunction()">
//         <option value="nothing"></option>
//         <option value="homeWork1">დავალება 1 - სიმბოლო = 5 და მეტს</option>
//         <option value="homeWork2">დავალება 2 - დადებითი რიცხვები</option>
//         <option value="homeWork3">დავალება 3 - დადებითი რიცხვები მასივის მასივიდან</option>
//         <option value="homeWork4">დავალება 4 - getMax</option>
//         <option value="homeWork5">დავალება 5 - printName</option>
//     </select>
// </form>
// <div className="results">
//     <b style="margin-left: 25px">Results:</b>
//     <div className="homeworkCont">
//         <label className="jsCode">
//             JS Code:
//         </label>
//         <div className="codeWritten1" id="homework11">
//             <p>
//                 "let arr = ['javascript', 'php', 'c#', 'python', 'c++', 'kotlin', 'c', 'swift'];<br><br>
//                 for (let x = 0; x < arr.length; x++){
//                 <br>
//                     if(arr[x].length>=5){<br>
//                     console.log(arr[x])
//                     }
//                     }"
//                 </p>
//                     </div>
//                     <div class="codeWritten2" id="homework2">
//                     <p>
//                     let arr2 = [2, -3, 5, 11, 1, -30, -11, 100, -1, -3, -4];<br>
//                     for (let x = 0; x< arr.length; x++){<br>
//                     if(arr[x]>0){<br>
//                     console.log(arr2[x])
//                     }
//                     }
//                     </p>
//                     </div>
//                     <div class="codeWritten3" id="homework3">
//                     <p>
//                     let arr3 = [[2, -3, 5, 11], [1, -30, -11, 100], [-1, -3, -4]];<br>
//                     for (let x in arr3){<br>
//                     for(let y in arr3[x]){<br>
//                     if(arr3[x][y]>0){<br>
//                     console.log(arr3[x][y])
//                     }
//                     }
//                     }
//                     </p>
//                     </div>
//                     <div class="codeWritten4" id="homework4">
//                     <p>
//                     let arr4 = [1, 15, 6, 30];<br>
//                     console.log(Math.max(...arr4));
//
//                     </p>
//                     </div>
//                     <div class="codeWritten5" id="homework5">
//                     <p>
//                     let user = {<br>
//                     firstname: 'giorgi',<br>
//                     lastname: 'saakadze',<br>
//                     age: 32,<br>
//                     isLoggedIn: true<br>
//                     }<br>
//
//                     function printName(x){<br>
//                     if(x.isLoggedIn === true){<br>
//                     console.log(x.firstname + ' ' + x.lastname)
//                     }<br>else {<br>
//                     console.log('false')
//                     }
//                     }<br>
//                     printName(user)
//                     </p>
//                     </div>
//                     <button class="runner" id="codeRunner" onclick="clickChange()">Run code</button>
//                     </div>
//                     <div class="result">
//                     Result:
//                     <div class="Result1" id="result1">
//                     javascript<br>
//                     python<br>
//                     kotlin<br>
//                     swift<br>
//                     </div>
//                     <div class="Result2" id="result2">
//                     2<br>
//                     5<br>
//                     11<br>
//                     1<br>
//                     100
//                     </div>
//                     <div class="Result3" id="result3">
//                     2<br>
//                     5<br>
//                     11<br>
//                     1<br>
//                     100
//                     </div>
//                     <div class="Result4" id="result4">
//                     30
//                     </div>
//                     <div class="Result5" id="result5">
//                     giorgi saakadze
//                     </div>
//                     </div>
//                     </div>

//leqcia 5

//rogor movusminoT momxmareblis mxridan wamosul eventebs, anu momxmareblis moqmedebebze movaxdinot Sesabamisi reagireba.
//html-shi romel elementzec gvinda, rom vusminot, jer is elementi unda gamovidzaxot js-shi(jobs es const cvladshi shevitanot),
//rata shemdeg gavuwerot eventListener, mag:
//const addItem = document.querySelector('elementi rac gvinda');
//addItem.addEventListener('click', function(){});
//addEventListener-s gadaecema ori properti, pirveli aris moqmedeba, am shemtxvevashi click,
//es gulisxmobs, rom daklikebaze unda moxdes ragac, da es ragac iwereba meore propertad,
//aq gawerili gvaqvs funqcia, da meore propertad yoveltvis iwereba funqcia,
//bunebrivia funqciis expression-it, anu cvladshi tu movatavsebt manamde funqcias, uketesi iqneba, rom es
//kodi mokle da gasagebi iyos. click-is garda aris sxva moqmedebebic, magaliTad orjer daklikeba, an xangrZlivi kliki
//da ase shemde, es sheiZleba mdn-Si davserCot. bunbebrivia funqciaSi nebismieri kodi SeiZleba shesruldes.
// mag:
// const button = document.querySelector('.button');
//
// let myFunction = function (){
//     alert('hi there');
// };
//
// button.addEventListener('click', myFunction );
//
//aseve unda davimaxsovrot shemdegi, funqcias, romelic listenershi iwereba,
//pirvel parametrad gadaecema properti, romelsac event propertis edzaxian,
//es gvexmareba gavigot ra moqmedebaze sruldeba es fuqncia, SeiZleba es funqcia bevr rameze gvqondes gamoyenebuli da Cven gvindoda,
//sxvadasxva moqmedebaze sxvadasxva reagireba gvindodes, da am event propertid amovicnobt da gavuwert sxvadasxva moqmedebas, mag:
//button.addEventListener('click', function(event//aq chawerili pirveli properti (saxels mnishvneloba ar aqvs) aris event properti)){
// });
//button.addEventListener('click', function(event){
//   event.type//amoagdebs click-s anu gvetyvvis, rom es funqcia sruldeba am elementsi clizk-ze.
// });
// tu am kods davlogavt vnaxavt, rom didi obieqti daibechdeba, am obieqtshi type-is garda,
//aseve mnishvnelovania target-i, mas uweria, is elementi, romel elementze amoqmedda es funqcia.
//ratom gvchirdeba es? dziritadad chven bibliotekebtan mushaobisas an mza html-kodtan mushaobisas, sheiZleba konkretuli elementi ar gvqondes,
//anu xelmisawvdomi ar iyos chventvis, rom is gamovidzaxot cvladshi, shesabamisad, chvens shegvidzlia event.target
//gamoviyenot finqciashi, rata shesruldes chventvis sasurveli moqmdeba.
//mag:
//davushvad maqvs ori gilaki da matze daklikebisas ertidaigive ragac minda shesruldes,
//magalitad gaiweros klasi.
// const button = document.querySelector('.button');
// const button2 = document.querySelector('.button2');
//
// let myFunction = function (event){
//     event.target.classList.add('test')
//     alert('hi there');
// };
//
// button.addEventListener('click', myFunction );
// button2.addEventListener('click', myFunction );
//aq gvaqvs, shemdegi, chven erti funqcia gavuweret or gilaks, da am gilakebze daklikebisas avamoqmedet alerti da
//class-is damateba. chven es shegviZlia meore nairad:
// const button2 = document.querySelector('.button2');
//
// let myFunction = function (event){
//     button2.classList.add('test')
//     alert('hi there');
// };
//
// button.addEventListener('click', myFunction );
// magram gansxvaveba is aris, rom sheiZleba es buttpn2 ar vicodet, amitom iwereba event.target da shemdeg
//ra elementzec gavwer am funqcias, miuxedavad am elementis codnisa, im elementze amoqmeddeba. universaluri funqcia
//gamodis da ar aris damokidebuli imaze, tu romeli elementis handler iqmneba, anu,
//romel elementze iqneba amoqmedebuli/gamodzaxebuli eventlistenerze.
//tu vicit, rom es moqmedeba am elementze daklik,ebit, sxva elementze unda amoqmeddes, mashin event.target ar gamogvadgeba,
//radgan es ushualod im elementze amushavdeba, romelzec gvaqvs gawerili listener-si
//.onclick funqcias es jobs, radgan shegidzlia bevr elements gauwero martivad da ert elements sxvadasxva funqcia gauwero.
//addeventlistener-it aseve shemidzlia rame event-is washlac, mag:
//addEventListener.remove('click', function(){});//klikze, ragac gawerili funqcia waeshleba, agar imoqmedebs.
//
//
//funqciashi shemidzlia ramdenime gawerili funqcia gamovidzaxo, mag:
// function test1(){};
// function test2(){};
// function (){
//     test1();
//     test2();
//};
//
//
//event-it  chven shegvidzlia html-is default funqciebi gavacheriot, mag default-ia a tegis
//href-si ra linkic weria imaze avtomatorad, rom gadadis daklikebisas, an formis teg form-shi
// action atributshi '/submit', rom asabmitebs avtomaturad.
//amis gasachereblad chveulebrivad dusment formas, anu formis tegs da funqciashi vuwert event.preventDefault().
// mag:
// const forma = document.querySelector('form');
//forma.addEventListener('submit', function(event){//aq aucileblad prpertid eventi unda gveweros, rom
//         event.preventDefault();//aq gamovidzaxot, eventi erqmeva tu pavle mnishvneloba ar aqvs.
// })
//
//
//.onload -is gamoyeneba masin aris sacjhiro, roca js script tegi html-shi giweria head-shi, tumca tu
//bodis damxurav tegtan giweria, pirdapir shegidzlia gawero funqcia. mag:
//const addNameForm = document.querySelector('.addName');
//const nameInput = document.querySelector('input[name = "username"]');
//nameInput.focus()// ai es focus funqcia pirdapir miweria onloadis gareshe, focus-it igives vaketeb rac html-shi dafokuseba,
//anu magalitad daklikebul inputs qvia focused, da iq sabechdi cimcima cimcimebs, roca aris focused,
//shesabamisad js kodshi veubnebi rom  gverdis chatvirtvisas egreve dafokusdes.
//
//
//me shemidzlia garkveuli tegebis tipebic ganvsazrgvro js kodit, mag:
//const input = document.createElement('input');//shevqmeni inputi
//input.type = 'checkbox';//es inputi vaqcie checkboxad, anu inputis type, aris checkbox.
//
//
//aseve zogjer mchirdeba mivmarto mshobels amistvis viyeneb parentNode-s, mag:
//input.addEventListener('change', function(event){
//     const parent = event.target.parentNode;//anu input elementis mshobels mivmarte
//
// })
//
//
//aseve chven event,target-it shegvidzlia gavigot amoqmedebulia gilaki Tu ara, magalitad checkboxi
//monishnulia tu ara, mag:
// if(event.target.checked){//es cheked nisnavs monishnuls, am targetit vxvdevbit am elementze amoqmedda tu ara eventa da checked-it vxvdebiT monishnulia tu ara.
//     alert('hi')
// }

// magaliti tvalsachiunoebistvis:
// const addNameForm = document.querySelector('.addName');
// const nameInput = document.querySelector('input[name = "username"]');
// nameInput.focus();
//
// addNameForm.addEventListener('submit', function(event){
//       event.preventDefault();//gavacheret formis submit action-i, click-is nacvlad sabmit magito weria
//       const value = nameInput.value;
//
//       const li = document.createElement('li');
//       const input = document.createElement('input');
//       input.type = 'checkbox';//ganvsazgvre input tegis type
//       input.addEventListener('change',/*es nishnavs shecvlas, anu kliki aucileblad mausis daklikebas gulisxmobs da tu vicit, rom daklikebis shedegi, magalitad tabit shemidzlia mivigo, jobs change gamoviyeno*/ function(event){
//       const parent = event.target.parentNode;//listenershi shemovitane mshobeli
//       if(event.target.checked){
//             parent.classList.add('completed');
//       } else {
//             parent.classList.remove('completed');
//       }
//       });
//       const span = document.createElement('span');
//       span.textContent = value;
//       li.appendChild(input);//amis
//       li.appendChild(span);//da amis adgilis shecvla sakmarisia imistvis, rom ganisazgvros, romeli gamoCndeba xazze pirveli
//
//       document.querySelector('.names').appendChild(li);//names clasis tegshi chavsvi li cvladi, rmelic aris spani da input-is value
//
//       nameInput.value = '';
//       nameInput.focus();
// });
//მაგალითი 2
// const ul = document.querySelector('ul');
// const input = document.querySelector('input');
// const button = document.querySelector('button');
// const form = document.querySelector('form');
//
// form.addEventListener('submit', (e) => {
//       e.preventDefault();
//
//       let myItem = input.value;
//
//       ul.style.listStyleType = 'none';
//
//       const listItem = document.createElement('li');
//       const checkInput = document.createElement('input');
//       checkInput.type = 'checkbox';
//       const listText = document.createElement('span');
//       const deleteBtn = document.createElement('button');
//
//       listItem.appendChild(checkInput);
//       listItem.appendChild(listText);
//       listText.textContent = myItem;
//       listItem.appendChild(deleteBtn);
//       deleteBtn.textContent = 'Delete';
//       ul.appendChild(listItem);
//
//       checkInput.addEventListener('change', function (event){
//             if (event.target.checked){
//                   listText.style.textDecoration = 'line-through';
//             }else {
//                   listText.style.textDecoration = 'none';
//             }
//       });
//
//       deleteBtn.addEventListener('click', () => {
//             ul.removeChild(listItem);
//       });
//
//       input.value = '';
//       input.focus();
// })
//
//
// aseve shemidzlia eventlisteneri wvshalo, amistvis viyeneb removeEventListener-s
//form.removeEventListener('submit', (e) => {//ubralod mteli funqcia, rom ar gavweroT aq, amisTvis, es funqcia shegvidzlia cvlads gavutolot jer
//       e.preventDefault();
// })
//asetnairad
//let remove = (e) => {
//        e.preventDefault();
// }
//da shemdeg
// form.removeEventListener('submit', remove)//aq chavsvi eg cvladi funqciis adgilas da mokle kodi gamovida.
//magaliti:
// const ul = document.querySelector('ul');
// const input = document.querySelector('input');
// const button = document.querySelector('button');
// const form = document.querySelector('form');
//
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//
//     let myItem = input.value;
//
//
//     ul.style.listStyleType = 'none';
//
//     const listItem = document.createElement('li');
//     const checkInput = document.createElement('input');
//     checkInput.type = 'checkbox';
//     const listText = document.createElement('span');
//     const deleteBtn = document.createElement('button');
//
//     listItem.appendChild(checkInput);
//     listItem.appendChild(listText);
//     listText.textContent = myItem;
//     listItem.appendChild(deleteBtn);
//     deleteBtn.textContent = 'Delete';
//     ul.appendChild(listItem);
//
//     checkInput.addEventListener('change', (event) => {
//         if (event.target.checked){
//             listText.style.textDecoration = 'line-through';
//         }else {
//             listText.style.textDecoration = 'none';
//         }
//     });
//
//     deleteBtn.addEventListener('click', () => {
//         ul.removeChild(listItem);
//     });
//
//     input.value = '';
//     input.focus();
// })

//leqcia 6
//zeda funqciebi aris Dom funqciebi, romlebitac htmltan vurtiertobt, magram json-Tan urtiertobistvis es ar gamogvadgeb
//sxvagvarad davwert kods.
//
//
//serveridan informaciis gamoZaxeba, damushaveba da htmlshi gamochena.
//elementis wamosagebad serveridan, unda vicodet linki, serveris
//json aris informaciis gacvlis ert-erti standarti, bevri programirebis ena iyenebs amas
//json-is formati dzalian gavs javascriptis obieqts, magram mtlad obieqti araa.
//jsonshi propertebi iwereba ormag brWyalebshi "". aseve yvela propertis mere mxolod mZime unda iyos.
//
//
// javascriotshi kodi sruldeba sinqronulad da xazebis mixedvit sruldeba
//magalitad, sheidzleba gvqondes erti funqcia, romlis qvemotac aris kidev erti damoukiedebeli funqcia,
//es qvedea funqcia elodeba pirveli funqciis Sesruleba, es sheidzleba xelisshelmleli agmochndes,
//amistvis serveridan informaciis gamodzaxebisas, viyenebt asinqronul kods, ordesac erti kodi meores ar elodeba,
//tu masze damokidebuyli ar aris.
//
//fetch()//fetchi aris asinqronuli funqcia.fetchs parametrad gadaecema linki, saidanac gvinda informaciis wamoReba
//am funqcias ver gavutoleb cvlads, Cveulebrivi funqciisgan gansxvavebit.
//radgan es piroba ar abrunebs konkretul shedegs aramed abrunebs promise-s, anu piurobas, rom odesgac pasuxs daabrunebs.
//am funqciis dasruleba damokidebulia, ramdenad swrafad daabrunebs es llinki pasuxs
// es ki ramdenime faqtorzea damokidebuli: internetis sichqare, linkis misamartis sichqare da a.sh.
//fetchis funqcia abrunebs promise-s obieqts.
//
// fetch('https://us-central1-js04-b4877.cloudfunctions.net/tasks')
//     .then(function (){//tu es linki warmatebulad wamoigebs promiss mashin sruldeba es funqcia
//         console.log('success');//aq shegvidzlia domis elementebis dagenerireba
//     })
//     .catch(function (){//tu internetis an sxva rame problema iqneba, mashin sruldeba es funqcia
//         console.log('error');
//     });
//
// console.log('test');//es da fetch funqcia shesruldeba sinqronulad, jer fetch da mere es da amati dasrulebis shemdeg shesruldeba then da catch,
//radgan es then da catch kodi aris asinqronuli nawili.
//
// fetch('https://us-central1-js04-b4877.cloudfunctions.net/tasks')
//     .then(function (response){//aq funqsias gadaecema erti parametri response-i, am response-shi aris, zeda linkidan wamogebuli informacia
//         console.log('success');
//     .catch(function (){
//         console.log('error');
//     });
//fetchit faqtiurad vaketebt asinqronul zapross serverze arsebul informaciaze, bibliotekis gareshe.
//
//
//json-i tavidan modis rogoc chveulebrivi stringi da imistvis rom es json gadaviyvanot javascriptis obieqtad,
// viyenebt gaparsvis funqcias, anu parse. amistvis:
// let response = '[
// {
//     "id":1,
//     "body": "some comment",
//     "postId": 1
// }
// {
//     "id":2,
//     "body": "some comment1",
//     "postId": 1
// }
// {
//     "id":3,
//     "body": "some comment2",
//     "postId": 1
// }
// {
//     "id":4,
//     "body": "some comment3",
//     "postId": 1
// }
// {
//     "id":5,
//     "body": "some comment4",
//     "postId": 1
// }
// ]';
//ase gamoiyureba json-i, anu stringad aris mocemuli, rodesac modis serveridan, imistvis rom es gadaviyvanot masivada, sadac aris obieqtebi da moveqcet, rogorc masivs obieqts,
//amistvis:
// let data = JSON.parse(response);//anu parse-it gadavaqciet obieqtad
//
// data[0].body//daabrunebs masivis pirvel masivs sadac id1 aris,da am jgufidan amoigebs body-s, anu daabrunebs some comment.
//
//shesadzloa piriqitac damchirdes, anu masivi vaqcio json standartad daweril stringad, amistvis:
//JSON.stringify(response);//es ukve json formatshi gadaiyvans.
//roca raime informacias vinaxav, anu es bazashi chawera iqneba tu rame sxva, jobs rom shebvinaxo am json standartis mixedviT, anu gadaviyvano json-shi.
//tumca tu gaqvs api misamarti sadac vgzavni am informacia, mashin xelit infos json formatshi konvertireba Seidzleba ar iyos sachiro.
//

//magaliti fetch-it:
const ul1 = document.querySelector('ul');
const input = document.querySelector('input');
const form = document.getElementById('formSecond');



form.addEventListener('submit', (e) => {
    e.preventDefault();

    let myItem = input.value;

    ul1.style.listStyleType = 'none';


    const ul = document.getElementById('tasks');
    const url = 'https://us-central1-js04-b4877.cloudfunctions.net/tasks';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            let informations = data.data;
            return informations.map(function (information){

                const listItem1 = document.createElement('li');
                const checkInput = document.createElement('input');
                checkInput.type = 'checkbox';
                const listText = document.createElement('span');
                const deleteBtn1 = document.createElement('button');

                listItem1.appendChild(checkInput);
                listItem1.appendChild(listText);
                listItem1.appendChild(deleteBtn1);
                deleteBtn1.textContent = 'Delete';
                ul.appendChild(listItem1);

                checkInput.addEventListener('change', (event) => {
                    if (event.target.checked) {
                        listText.style.textDecoration = 'line-through';
                    } else {
                        listText.style.textDecoration = 'none';
                    }
                });

                deleteBtn1.addEventListener('click', () => {
                    ul.removeChild(listItem1);
                });

                listText.innerHTML = information.text;
            })
        })

        .catch(error => {
            console.log(error);
        });

    const listItem = document.createElement('li');
    const checkInput = document.createElement('input');
    checkInput.type = 'checkbox';
    const listText = document.createElement('span');
    const deleteBtn2 = document.createElement('button');

    listItem.appendChild(checkInput);
    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(deleteBtn2);
    deleteBtn2.textContent = 'Delete';
    ul1.appendChild(listItem);

    checkInput.addEventListener('change', (event) => {
        if (event.target.checked) {
            listText.style.textDecoration = 'line-through';
        } else {
            listText.style.textDecoration = 'none';
        }
    });

    deleteBtn2.addEventListener('click', () => {
        ul1.removeChild(listItem);
    });

    input.value = '';
    input.focus();
});

//leqcia 7 -
// //asinqronuli funqciis gamartivebuli chanaweri
// //vicit, rom fetch-s cvlads ver gavutolebt, magram shegvidzlia chavwerot ase
// let result = await fetch('https://us-central1-js04-b4877.cloudfunctions.net/tasks')
// //en nishnavs, imas rom then da catch-is gamoyeneba ar gviwevs, tan shegvidzlia es await gamoviyeno

//slaideri musha kodi
const slidesContainer = document.querySelector('.slidesContainer');
const navigation = document.querySelectorAll('.navigation');

fetch('https://us-central1-js04-b4877.cloudfunctions.net/api/slides')
    .then (response => response.json())
    .then((data) =>{
        const slides = data;
        return slides.map(function (slide){
            const slide1 = document.createElement('div');

            const title1 = document.createElement('span');

            slide1.appendChild(title1);
            slide1.classList.add('slide');
            slidesContainer.appendChild(slide1);

            slide1.innerHTML = `<h3 class="title">${slide.title}</h3> <img alt="pic" style="width: 500px" src="${slide.image}">`;

            let currentSlide = 0;
            const slidecount = slides.length;

            navigation.forEach(button => {
                button.addEventListener('click', (event)=>{
                    if (event.target.classList.contains('navigation-prev')){
                        currentSlide -= 1;

                        if (currentSlide < 0){
                            currentSlide = slidecount - 1;
                        }
                    } else {
                        currentSlide += 1;

                        if (currentSlide > slidecount - 1){
                            currentSlide = 0;
                        }
                    }
                    slidesContainer.style.left = '-' + (currentSlide * 500) + 'px';
                })
            });
        })
    })
    .catch(error => {
        console.log(error);
    })

//ar imushava 404 async function getImage() {
//     let response = await fetch('https://us-central1-js04-b4877.cloudfunctions.net/api/slides');
//     let content = await response.json();
//
//     let slidesContainer = document.querySelector('.slidesContainer');
//
//     let key;
//
//     for (key in content) {
//         slidesContainer.innerHTML += content[key].image;
//     }
// }
// getImage();//??? ver imushava, statusi 404


//rodesac mza masivi gvaqvs
// const slidesContainer = document.querySelector('.slidesContainer');
// const navigation = document.querySelectorAll('.navigation');
//
// const slides = [
//     {title: 'Slide 1', image: 'http://...'},
//     {title: 'Slide 2', image: 'http://...'},
//     {title: 'Slide 3', image: 'http://...'},
// ];
//
// let currentSlide = 0;
// const slideCount = slides.length;
//
// navigation.forEach(button => {
//     button.addEventListener('click', (event) => {
//         if (event.target.classList.contains('navigation-prev')) {
//             currentSlide -= 1;
//
//             if (currentSlide < 0) {
//                 currentSlide = slideCount - 1;
//             }
//         } else {
//             currentSlide += 1;
//
//             if (currentSlide > slideCount - 1) {
//                 currentSlide = 0;
//             }
//         }
//
//         slidesContainer.style.left = '-' + (currentSlide * 500) + 'px';
//     })
// });

//drois dayeneba setInterval(() => {
//   // document.querySelector('.navigation-next').click();
//   currentSlide += 1;
//   if (currentSlide > slideCount - 1) {
//     currentSlide = 0;
//   }
//   slidesContainer.style.left = '-' + (currentSlide * 500) + 'px';
// }, 1000)//gilakze dacheris gareshe intervalis dayeneba


//leqcia 8 node js
//node js unda davaintaliuro
//sheidzleba gvqondes moduli, anu calke js failebi, romelic sxvadasxva miznistvis
//aris gankutvnili, magalitad erti matematikuri formulebistvis erti funqciebisTvis da a.sh.
//es modulebi shegvidzlia gavaertianot obieqtebad da sxvebistvis martivad gamosayenebeli iqneba
//rekomendebulia js kodi patarpartara kdebad davwerot da modulebshi gvqondes, vidre yvela kodi erti js failshi iyos.
// chven shegvidzlia eti cvladi ert failshi shevqmnat da mere is sxvagan gamovidzaxot, sxva ragacaebzec asea, amistvis:
//im failshi sadac gviweria kodi, romelic gvinda, rom meore failshi shevitano, anu ert failshi agwerili funqcia rom meore failshi shevitano, amistvis:
//kods vuwer export, win da im failshi sadac gvinda shevitanot, vwert:
//import {sum//bevri funqcia tu aris mdzimit gamoyof} from './math.js';//sum aris funqciis saxeli, matrh js failis saxeli sadac es funqcia weria,
//xolo ./ aris misamarti, anu ragac foldershi rom mqondes es math.js, mashin ewereboda './folder/math.js'
//importdeba obieqti, romlis properti da valuec aris funqciis saxeli.
//roca bevri funqcia maqv, shemidzlia ert obieqtshi gavaertiano am funqciebis saxelebi da
//win davuwero export default da importis failshi pirdapir frchxilis gareshe shemidzlia gamovidzaxo, tan aq ukve saxel sar aqvs mnishvneloba, anu:
//
// function sum (x,y){
//     return x + y;
// }
//
// function devide (x,y){
//     return x / y;
// }
//
// export default {
//     sum,
//     devide
// }
//
// import nebismieriSaxeli from './math.js';//funqciebs aset dros agar uwer am exportebs da importshi frchxilebshi ar chamotvli mat
//
//es import da export mushaobs mashin, roca node js aris chawerili.
//node-ze rom shegvedzlos mati gamoyeneba, amistvis mtavar foldershi unda iyos faili, saxelad package.json, sadac unda eweros
//{"type":"module"}//sxvagvarad ar imushavebs.
//
//
//npm aris modulebis dasainstalirebeli da mati gamoyenebistvis sachiro programa
//roca bibliotekidan mogvaqvs informacia.
//
//githubze atvirtvisdasa roca gvinda, rom bibliotekis folderi ar aiitanos
//amistvis proeqtshi vqmnit fails saxels vawert .gitignore da shignit vwert im folderis saxelebs, romelic gvinda, rom daignordes.
//
//
//bibliotekidan kodis gamosayeneblad import kodshi folderis misamartis adgilas, vwert bibliotekis saxels da figurul frchxilebshi vwert funqciis saxels.
//

//leqcia 9 debugging
//martivi da primitiuli metodi debagingisTvis aris console log. tu consolshi ar brundebaswori parametrebi mashiun kodshi aris shecdoma.
//ufro martivad shegvidzlia debugger gamoviyenot redaqtoris,es aqvs vs code-sac da webstorm-sac.
//debugger sashualebas idzleba kodi xazebis mixedviT SevamowmoT sad iZleva shecdeomas.
//aseve shesadzlebelia qromis debuggeri gamoviyenot, amistvis unda shevidet gverdis inspectshi da source-shi gadavidet, danarCeni igivea.
