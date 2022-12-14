function deckOfCards(arr) {
    let result = [];
    for (let cardAsString of arr) {
        const face = cardAsString.slice(0, - 1);
        const suit = cardAsString.slice(-1);
        try {
            const card = playingCards(face, suit);
            result.push(card);
        } catch (err) {
            result = ['Invalid card: ' + cardAsString];
        }
    }
    console.log(result.join(' '));
    function playingCards(face, suit) {
        const suits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        };

        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        if (faces.includes(face) === false) {
            throw new Error('Invalid face: ' + face);
        }

        if (suits[suit] === undefined) {
            throw new Error('Invalid face: ' + suit);
        }


        const result = {
            face,
            suit: suits[suit],
            toString() {
                return this.face + this.suit;
            }
        };
        return result;
    }
}