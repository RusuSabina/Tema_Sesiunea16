// 3. Folosind metodele de pe obiectul Date, afișează data curentă în următorul format: HH:MM:SS
console.log("EXERCITIUL 3")

function getMinutesWithZero(date) {
    const minutes = date.getMinutes();
    if (minutes < 10) {
        return "0" + minutes;
    }
    return minutes;
}

const today = new Date();
const formatedDate = today.getHours() + ":" + getMinutesWithZero(today) + ":" + today.getSeconds()
console.log("The hour is:", formatedDate)

//Afișați ziua curentă în formatul MMMM DD YYYY, HH:MM:SS
//EX: January 21 2023, 17:03:30

const monthString = today.toLocaleString('en', {month: 'long'});
const formatedDate2 = monthString + " " + today.getDate()+ " " + today.getFullYear() + ", " + formatedDate;
console.log(formatedDate2);