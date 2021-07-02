const deckURL = "https://deckofcardsapi.com/api/deck/new/shuffle/";
let deckID;
axios
    .get(deckURL)
    .then(data => {
        deckID = data.data.deck_id
    })
    .catch(err => $('body').append(err));

$('button').on('click', function() {
    axios
        .get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`)
        .then(card => $('#deck_home').append(`<img src="${card.data.cards[0].image}" alt="image drawn card"></img>`))
        .catch(err => $('body').append(err));
});
