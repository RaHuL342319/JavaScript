let user = {
    name: "Rexha",
    age: 24,
    isConfirmed: true
};
for (let key in user) {
    console.log(`${key} : ${user[key]}`); // values for the keys 
}
