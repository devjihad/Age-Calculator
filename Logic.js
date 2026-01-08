let input = document.getElementById('input')
let button = document.getElementById('button')
let Show = document.getElementById('show')
input.max = new Date().toISOString().split("T")[0];


button.addEventListener('click',()=>{
    let birthdate = new Date(input.value)

    let day1 = birthdate.getDate()
    let month1 = birthdate.getMonth()+1
    let year1 = birthdate.getFullYear()

    let today = new Date()

    let day2 = today.getDate()
    let month2 = today.getMonth()+1
    let year2 = today.getFullYear()

    let day3 ,month3 ,year3;

    year3 = year2-year1

    if(month2>month1){
        month3 = month2-month1
    }
    else{
        year3--
        month3 = 12 +month2-month1
    }

    if(day2>day1){
        day3 = day2-day1
    }
    else{
        month3--
        day3 = getdays(year1 , month1) + day2- day1

    }

    if(month3 < 0){
        year3--
        month3 =11
    }

    function getdays (year,month){
        return new Date(year,month,0).getDate()
    }

    Show.innerHTML = `You are ${year3} years ${month3} months ${day3} days Old `

    console.log(year3, month3, day3)

    input.value =''
})