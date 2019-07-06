function createBalls(n) {
    // empty array
    let ballArray = [];
    // create n balls
    for(let i=0; i < n; i++) { // let's build multiple times a singleton object
        let b = { 
            x:10/2,
            y:443/2,
            radius: 5 + 30 * Math.random(), // between 5 and 35
            speedX: -5 + 10 * Math.random(), // between -5 and + 5
            speedY: -5 + 10 * Math.random() // between -5 and + 5
        }
        // add ball b to the array
        ballArray.push(b);
    } // end of for loop
    // returns the array full of randomly created balls
    return ballArray;
}
for (i=0;i<100;i++){
    document.write("id: "+i+"&nbsp value of x: "+createBalls(100)[i].x+ "&nbsp; value of y: "+createBalls(100)[i].y+"<br/>");
}
// alert(b);