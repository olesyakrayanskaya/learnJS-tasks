let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printList(list) {
    let tmp = list;

    while (tmp) {
        console.log(tmp.value);
        tmp = tmp.next;
    }

}

function printListRec(list) {

    console.log(list.value);

    if (list.next) {
        printList(list.next);
    }

}

printList(list);
printListRec(list);
