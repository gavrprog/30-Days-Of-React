//1
let month = prompt('Enter a month:').toLowerCase();
month = month.charAt(0).toUpperCase() + month.slice(1);
switch (month) {
    case 'January':
    case 'March ':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
        console.log(month + ' has 31 days.');
        break;
    case 'February':
        console.log(month + ' has 28 days.');
        break;
    case 'April':
    case 'June':
    case 'September':
    case 'November':
        console.log(month + ' has 30 days.');
        break;
}
//2
month = prompt('Enter a month:').toLowerCase();
year = +prompt('Enter a yaer:');
month = month.charAt(0).toUpperCase() + month.slice(1);
if (month == 'February' && !(year % 4)) {
    month = 'leap';
}
switch (month) {
    case 'January':
    case 'March ':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
        console.log(month + ' has 31 days.');
        break;
    case 'February':
        console.log(month + ' has 28 days.');
        break;
    case 'leap':
        console.log('This year is leap and Februare has 29 days.');
        break;
    case 'April':
    case 'June':
    case 'September':
    case 'November':
        console.log(month + ' has 30 days.');
        break;
}