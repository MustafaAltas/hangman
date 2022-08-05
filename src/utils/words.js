const words = [
    "teoloji","otopark","bağlama","çaldıran","böcek","vahdet","camgöz","zeybek","tanzim","karakol","kimyon","iskoç","şeker","hamam","gece","egzoz","temiz","soğan","sarımsak","apartman","ankara","dağ",
    "hain","ipek","müzmin","takdim","hüzün","orman","ağaç","azot","radyolojik","bağımsız"
]

const randomWord = () =>{
    const index = Math.floor(Math.random() * words.length);
    console.log(index);
    return words[index]
}

export default randomWord;