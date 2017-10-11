let score = 0;

export const moreBeer = increment => {
    return {
        type: 'MORE_BEER',
        score: score++,
        increment
    }
}

export const lessBeer = decrement => {
    return {
        type: 'LESS_BEER',
        score: score--,
        decrement
    }
}