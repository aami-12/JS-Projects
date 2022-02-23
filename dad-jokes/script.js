const joke1 =  document.getElementById('joke')
const jokebtn =  document.getElementById('jokebtn')

jokebtn.addEventListener('click',dadJokes)

dadJokes();

async function dadJokes() {
    const config = {
        headers : {
            Accept : 'application/json',        
    },
    }
    const res  = await fetch('https://icanhazdadjoke.com',config);
    const data = await res.json();
    console.log(data);

    joke1.innerHTML = data.joke;
}