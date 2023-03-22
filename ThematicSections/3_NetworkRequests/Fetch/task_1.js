async function getUsers(names) {
    let jobs = [];

    for (let name of names) {
        let job = fetch(`https://api.github.com/users/${name}`).then(
            ok => {
                if (ok.status != 200) {
                    return null;
                } else {
                    return ok.json();
                }
            }
        );
        jobs.push(job);
    }

    return await Promise.all(jobs);
}

document.addEventListener("DOMContentLoaded", async function() {
    let u = await getUsers(['iliakan', 'remy', 'no.such.users']);
    alert(u[0].login)
});