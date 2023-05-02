/*function letsDance(danceStyle){
    return new Promise((resolve, reject) => {
    setTimeout(()=>{
        if(danceStyle ==="polka"){
            resolve("Yes, polka is my thing!");
        }else{
            reject("Sorry, Im not interested");
        }
    },2000);
});
} 

async function dance(){
    try {
        const response = await letsDance("waltx")
        console.log(response);
    } catch (error) {
        console.error(error)
    }
}

dance(); */ 

function researchTargetAudience(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Målgruppen är undersökt");
        }, 4000);
    });
} 

function sketchOnPaper(){
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve("Skissa upp en desing på papper");
        }, 2000);
    });
} 

function makeSketch(){
    return new Promise ((resolve)=> {
        setTimeout(()=> {
            resolve("Gör skissen till pixel perfect mockup i figma");
        }, 3000);
    });
}
    
function code(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Koda")
        }, 3000);
    });
}

function stackOverflow(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Stackoverflow:a fel")
        }, 1000);
    }); 
}

function testProduct(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Testa produkten")
        }, 2000);
    });
}

function celebrate(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Fira lyckat projekt")
        }, 1000);
    });
}

researchTargetAudience()
.then((result) => {
    console.log(result);
    return sketchOnPaper();
})
.then((result) => {
    console.log (result);
    return makeSketch();
})
.then((result) => {
    console.log(result);
    return code();
})
.then((result) => {
    console.log(result);
    return stackOverflow();
})
.then((result) => {
    console.log(result);
    return testProduct();
})
.then((result) => {
    console.log(result);
    return celebrate();
})
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.error(error);
});