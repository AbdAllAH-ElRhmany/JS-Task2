// var tabsBtns = document.querySelectorAll(".tab-button");
// var tabsContent = document.querySelectorAll(".content");
// tabsBtns.forEach(element => {
//     element.onclick = function(){
//         var tabNum = element.getAttribute("data-btn-num");
//         var contentNum = tabsContent[tabNum-1];
//         for(var i = 0; i< tabsBtns.length; i++){
//             element.parentNode.children[i].classList.remove("active");
//             contentNum.parentNode.children[i].classList.remove("active");
//         }
//         element.classList.add("active");
//         contentNum.classList.add("active");
//     };
// });
/////////////////////////////////////////////////////////////////////////////////////////////////

// JQuery Dynamic Tabs

$(document).ready(function(){
    $('.tab-button:first-of-type').addClass("active");
    $('.content:first-of-type').show();
    $('.tab-button').click(function () {
        let i = $(this).index();
        $('.tab-button').removeClass("active");
        $('.content').slideUp();
        $(this).addClass("active");
        $('.content').eq(i).slideDown();
    });
});




///////////////////////////////////////////////////////////////////////////////////////////////////////



var data;

// Get The Data From The Page 
let getData;
(getData = function(){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            console.log("hhhhhhhhhhhhh");
            data = JSON.parse(this.responseText);
            viewData(data);
        } else if (this.readyState ==4 && this.status== 404) {
            let err = document.getElementById("error");
            err.innerHTML = "Something Is Wrong";

        }
    };
    xhttp.open("get", "https://jsonplaceholder.typicode.com/posts", true);
    xhttp.send();
})();


// Search With Title And The Id

let searchInput = document.querySelector("#search");

searchInput.addEventListener('keyup', search);

function search(){
    let title = searchInput.value;
    let selectedData = data.filter(function(item){
        return item.title.toLowerCase().indexOf(title.toLowerCase()) !== -1 || item.id == title;
    });
    viewData(selectedData);   
}



// Display Data

function viewData(data){
    let content = document.getElementById("ajax-content");
    content.innerHTML= "";
    data.map((item) => {
        content.innerHTML += `<p class="content-item">${item.id}- ${item.title}</p>`
    });
}
