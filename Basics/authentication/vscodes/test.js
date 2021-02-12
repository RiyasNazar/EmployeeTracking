async function sub() {
    return 2 - 1;
}

function sub1() {
    return 2 - 1;
}

async function samp() {
    // console.log('samp');
    const subResult = sub();
    console.log(subResult)
    return subResult;
}

const sampFunc = samp();
// console.log('Sample function', sampFunc);

function samp1() {
    // console.log('samp1');
    const subResult1 = sub1();
    console.log(subResult1);
    return subResult1;
}

const sumFunc = samp1();
// console.log('Sample function1', sumFunc);