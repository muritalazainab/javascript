const  name = "zainab"
const age = 17;
const school = "Agege private school, orile";
const one  = () => {

    return` ${name} of ${age} years attented ${school}`;
}

const answer = one()
console.log(answer)

const file = () => {
    return $`{name} likes eating ${age} wraps of Semo in ${school}`
}

const sentence = file();
console.log(sentence)
// local scope
const localScope = () => {
const name = "oloye pupo";
const religion = "Muslim";
const activity = "Drinking of wine!";
return `${name} who is a ${religion} enjoys ${activity}`;


}
const oloye = localScope()
console.log(oloye)