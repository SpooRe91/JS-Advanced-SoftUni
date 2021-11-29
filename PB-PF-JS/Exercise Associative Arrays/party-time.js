function partyTime(input) {
    let list = {
        vip : [],
        regular :[]
    };

    for(let line of input){
        //line = line.split(', ');
       
       if(line==="PARTY"){
           break;
       }else{
           let index = line[0];
           if(isNaN(index)){
               list.regular.push(line);
           }else{
               list.vip.push(line);
           }
       }
    }
    let indexOfParty = input.indexOf('PARTY')
    input = input.slice(indexOfParty+1);

    for(let guest of input){
        if(isNaN(guest[0])){
            if(list.regular.includes(guest)){
                let index1 = list.regular.indexOf(guest)
                list.regular.splice(index1,1)
            }
        }else{
            if(list.vip.includes(guest)){
                let index2 = list.vip.indexOf(guest)
                list.vip.splice(index2,1)
            }

        }
    }

    
    let length = list.regular.length + list.vip.length

console.log(length);
for(let el of list.vip){
    console.log(el);
}
for(let el of list.regular){
    console.log(el);
}



    

    
}

party(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]
)