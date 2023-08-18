//1
let score = prompt('Enter score:');
switch (true) {
    case score >= 90:
        console.log('A');
        break;
    case score >= 70:
        console.log('B');
        break;
    case score >= 60:
        console.log('C');
        break;
    case score >= 50:
        console.log('D');
        break;
    case score < 50:
        console.log('F')
}
//2
let season = prompt('Enter season:');
switch (season) {
    case 'September':
    case 'October':
    case 'November':
        console.log('Autumn');
        break;
    case 'December':
    case 'January':
    case 'February':
        console.log('Winter');
        break;
    case 'March':
    case 'April':
    case 'May':
        console.log('Spring');
        break;
    case 'June':
    case 'July':
    case 'August':
        console.log('Summer');
        break;
}
//3
let day = prompt('What is the day today?').toLowerCase();
day = day.charAt(0).toUpperCase() + day.slice(1);
switch (day) {
    case 'Saturday':
    case 'Sunday':
        console.log(day + ' is a Weekend');
        break;
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
    case 'Friday':
        console.log(day + ' is a working day');
        break;
}