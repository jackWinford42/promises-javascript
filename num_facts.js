let validURL = "http://numbersapi.com/42?json";
let futureResolvedPromise = axios.get(validURL);

futureResolvedPromise
    .then(data => $('#part_one').html(data.data.text))
    .catch(err => $('#part_one').html(err));

const multUrl = "http://numbersapi.com/1,2,3?json";
const multPromise = axios.get(multUrl)

multPromise
    .then(data => {
        $('#part_two ul').append(`<li>${data.data[1]}</li>`)
        $('#part_two ul').append(`<li>${data.data[2]}</li>`)
        $('#part_two ul').append(`<li>${data.data[3]}</li>`)
    })
    .catch(err => $('part_two').html(err));

const thirteenURL = "http://numbersapi.com/13?json";
axios
    .get(thirteenURL)
    .then(p1 => {
        $('#part_three').append(`<p>${p1.data.text}</p>`);
        return axios.get(thirteenURL);
    })
    .then(p2 => {
        $('#part_three').append(`<p>${p2.data.text}</p>`);
        return axios.get(thirteenURL);
    })
    .then(p3 => {
        $('#part_three').append(`<p>${p3.data.text}</p>`);
        return axios.get(thirteenURL);
    })
    .catch(err => $('#part_three').append(`<p>${err}</p>`));