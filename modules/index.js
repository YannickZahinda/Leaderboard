const scoreList = document.querySelector('.score-list');

const scoreListArray = [
    {
        name : 'John Doe',
        Score : '100'
    },
    {
        name : 'Arie Camus',
        Score : '95'
    },
    {
        name : 'Maria PM',
        Score : '65'
    },
    {
        name : 'Aran Hilos',
        Score : '105'
    },
    {
        name : 'Anne de La Pipe',
        Score : '30'
    },
    {
        name : 'Yann Syntax',
        Score : '200'
    }
]

const renderScore = () => {
    let addScore = '';
    
    for(let i = 0; i < scoreListArray.length; i += 1){
        addScore += `<li>${scoreListArray[i].name} : ${scoreListArray[i].Score}</li>`
    }

    scoreList.innerHTML = addScore;
}

export {renderScore};