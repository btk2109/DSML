for (let i = 1; i++ ; i < 4){
    for (let j = 1; j++ ; j < 4){
        let id = 'r' + i + 'c' + j
        console.log(id)
        // setTimeout(addClass(id),1000)
    }
}

function addClass(id) {

    document.getElementById(id).classList.add('black')

}