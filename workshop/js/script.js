//carrosel muito massa
const imgs = document.getElementById("img")
const img  = document.querySelectorAll("#img img")

let idx = 0

function carrosel(){
    idx++
    if(idx > img.length - 1){
        idx = 0
    }

    imgs.style.transform = `translateX(${-idx * 850}px)`
}

setInterval(carrosel, 2600)


//API muito show
//  const apiUrl = 'https://swapi.dev/api/people/';
//  const personagensElement = document.getElementById('personagens');

//  fetch(apiUrl)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`Erro na solicitação: ${response.status}`);
//     }
//     return response.json(); 
//   })
//   .then(data => {

//     data.forEach(item => {
//       const p = document.createElement('p');
//       p.textContent = `name: ${item.name}, age: ${item.age}`;
//       dadosElement.appendChild(p);
//     });
//   })
//   .catch(error => {
//     console.error(`Erro: ${error.message}`);
//   });

//   return (
//     <div className='App'>
//       <h2>Início</h2>
//       {dados.map((item) => (
//         <div key={item.id}>
//           <h1>{item.name}</h1>
//           <img src={item.image} alt=""/>
//           <p>{item.status}</p>
//         </div>
//       ))}
//       <Teste/>
//     </div>
//   );

const apiUrl = 'https://swapi.dev/api/people/?page=2';

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Erro na solicitação: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                document.getElementById('name').textContent = data.name;
                document.getElementById('gender').textContent = data.gender;
                document.getElementById('birth_year').textContent = data.birth_year;
            })
            .catch(error => {
                console.error(`Erro: ${error.message}`);
            });