'use strict'

const search = () => {
    const input = document.querySelector('.search-block > input')
    const searchBtn = document.querySelector('.search-block > button')

    searchBtn.addEventListener('click', () => {
        console.log(input.value)
    })
}

export default search