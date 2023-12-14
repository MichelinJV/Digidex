 const digimonList = document.getElementById('digimonList')
 const loadMoreButton = document.getElementById('loadMoreButton')



function convertDigimonToLi(digimon) {
    return `
        <li class="digimon ${digimon.level}">
    <span class="name">${digimon.name}</span>
            <div class="detail">                
                <ul class="level">                   
                    <li class="level ${digimon.level}">${digimon.level}</li>
                </ul>  

                <img src="${digimon.photo}"
                     alt="${digimon.name}">
            </div>
        </li>
    `;
}

function loadDigimonItens() {
    digiApi.getDigimons().then((digimons = []) => {
        const newHtml = digimons.map(convertDigimonToLi).join('');
        digimonList.innerHTML += newHtml
    });
}

loadDigimonItens()
