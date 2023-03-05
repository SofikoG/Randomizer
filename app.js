const celinders = document.querySelectorAll('.celinder')
let isGame = true
let numRandom = getRandomInt(0, 3)
const countText = document.querySelector('.count')
let count = 0
let totalCount = 0

celinders.forEach((item, index) => {
    const img = document.createElement('img')
    img.src = 'images/Грусныш.png'
    img.classList.add('image')
    if (index == numRandom) {
        img.src = 'images/Улыбака.png'
    }
    item.parentNode.append(img)
    item.addEventListener('click', () => {
        if (isGame) {
            item.classList.add('active')
            if (index == numRandom) {
                count++
            }
            totalCount++
            countText.innerHTML = `${count}/${totalCount}`
            setTimeout(() => {
                celinders.forEach(elem => {
                    elem.classList.add('active')
                })
                countText.classList.add('fly')
                setTimeout(() => {
                    celinders.forEach(elem => {
                        elem.classList.remove('active')
                    })
                    numRandom = getRandomInt(0, 3)
                    document
                        .querySelectorAll('.image')
                        .forEach((item, newIndex) => {
                            item.src = 'images/Грусныш.png'

                            if (newIndex == numRandom) {
                                item.src = 'images/Улыбака.png'
                            }
                        })
                    isGame = true
                    countText.classList.remove('fly')
                }, 1500)
            }, 700)
        }
        isGame = false
    })
})

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
}
