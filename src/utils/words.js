const words = [
    "teoloji","otopark","bağlama","çaldıran","böcek"
]

const randomWord = () =>{
    const index = Math.floor(Math.random() * 5);
    console.log(index);
    return words[index]
}

export default randomWord;