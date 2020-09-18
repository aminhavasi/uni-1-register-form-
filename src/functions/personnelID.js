let persianDate = require('persian-date');
persianDate.toLocale('en');

const ID = () => {
    let now = new Date();
    let nn = now.getTime();
    nn = String(nn);
    const year = new persianDate().format('YY');
    let month = new persianDate().format('MM');
    month = Number(month);
    let session = '';
    if (month >= 1 && month <= 3) session = '0';
    else if (month >= 4 && month <= 6) session = '1';
    else if (month >= 7 && month <= 9) session = '2';
    else session = '3';
    let id = year + session + nn.slice(-8);

    return id;
};

module.exports = { ID };
