let allLi = document.querySelectorAll('li');

for (let li of allLi) {
    let textInLi = li.firstChild.data;
    let count = li.getElementsByTagName('li').length;
    alert(textInLi);
    alert(count);
}