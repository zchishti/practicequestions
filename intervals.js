const i = [[1,4],[2,6],[3,8],[2,3]];

i.sort((a,b) => {
    return a[0] - b[0];
});

console.log(i)