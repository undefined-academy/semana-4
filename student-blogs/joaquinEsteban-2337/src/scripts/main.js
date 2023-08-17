import humanize from "./utils/humanize";


const $dates = document.querySelectorAll("time"); 
$dates.forEach(humanize);

//Poner en mayuscula la primera letra
function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}


//Humanizar el nodo
function humanizeDate($date){
    const datetime = $date.getAttribute("datetime");
    const humanizeDate = humanize(datetime);
    $date.textContent = capitalize(humanizeDate);
}

function sortByDate($a, $b){
    const dateA = new date($a.querySelector("time").getAttribute("datetime"));
    const dateB = new date($b.querySelector("time").getAttribute("datetime"));
    return dateB - dateA;
}

function humanizeArticlesDates(){
    const $date = document.querySelectorAll("time");
    $date.forEach(humanizeDate);

}

function sortArticlesByDate(){
    const $cards = document.querySelectorAll(".post-list .post-list__card");
    const $cardsSorted = [...$cards].sort(sortByDate);
    const $postList = document.querySelector(".post-list");

    [...$postList.children].forEach(($child)=> $child.remove());
    $postList.append(...$cardsSorted);
}

function main(){
    humanizeArticlesDates();
    sortArticlesByDate();
}

main();