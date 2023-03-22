function f() {
    try {
        console.log('начало');
        return "result";
    } catch (e) {
    } finally {
        console.log('очистка!');
    }
}

f();