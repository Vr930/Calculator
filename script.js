const insert = (num) => {
    document.forms[0].elements.textview.value += num;
};

const clean = () => {
   return document.forms[0].elements.textview.value = " ";
};

const back = () => {
    let str = document.forms[0].elements.textview.value;
    let exp = str.toString();
    let result = ' ';
    for (let x = 0; x < exp.length - 1; x++) {
        result += exp[x];
    }
   
    document.forms[0].elements.textview.value = result;
}

const equal = () => {
    let str = document.forms[0].elements.textview.value;
    document.forms[0].elements.textview.value = eval(str);
}