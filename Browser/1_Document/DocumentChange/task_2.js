function createList() {
    let ul = document.createElement('ul');
    document.body.append(ul);

    while (true) {
        let data = prompt('input text', '');

        if (!data) {
            break;
        }

        let li = document.createElement('li');
        li.textContent = data;
        ul.append(li);
    }
}

createList();