console.log (document.forms.calculator.elements.input.value)
const input = (num) => {
    document.forms.calculator.elements.input.value += num;
};

const clean = () => {
    return document.forms.calculator.elements.input.value = ' ';
}

const equal = () => {
    let exp = document.forms.calculator.elements.input.value;
    return document.forms.calculator.elements.input.value = eval(exp);
}

const del = () => {
    let string = document.forms.calculator.elements.input.value;
    return document.forms.calculator.elements.input.value = string.slice(0, string.length-1);
}