function pie(arr,str1,str2) {
    let pieFlavours = arr;
    let target1 = str1;
    let target2 = str2;

    let index1 = pieFlavours.indexOf(target1);
    let index2 = pieFlavours.indexOf(target2);

    return pieFlavours.slice(index1, index2+1)
    //console.log(pieFlavours.slice(index1, index2+1));

}
pie(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
)