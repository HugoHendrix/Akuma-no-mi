//// CharacterList.js

import React from 'react';

function CharacterList() {
  const characters = [
    { id: 1, name: 'Monkey D. Luffy', description:'Luffy, capitão dos Piratas do Chapéu de Palha, busca o One Piece para se tornar Rei dos Piratas. Derrotando adversários poderosos como Kaido e Barba Negra, ele lidera com determinação, alimentado por sua Akuma no Mi, Gomu Gomu no Mi, e habilidades de Haki.', image: '/src/assets/luffy.png' },
    
    { id: 2, name: 'Roronoa Zoro', description:'Zoro foi a primeira pessoa que Luffy recrutou para a sua tripulação e ele é o segundo membro mais forte do bando depois de seu capitão. Sua primeira recompensa foi de 60,000,000 de berries e ele foi o primeiro pirata do Chapéu de Palha que ganhou uma recompensa depois de Luffy.', image: '/src/assets/zoro.png' },
    
    { id: 3, name: 'Nami', description:'Nami, a navegadora do navio, prefere armas em vez de habilidades de Akuma no Mi para lutar, como Usopp. Após se juntar oficialmente ao grupo após Arlong Park, sua recompensa inicial foi de 16 milhões de berries, ganhando o apelido de "Gata Ladra".', image:'/src/assets/nami.png' },

    { id: 4, name: 'Usopp', description:'Usopp, um dos primeiros membros dos Piratas do Chapéu de Palha e amigo próximo de Luffy, é conhecido por suas histórias exageradas. Sua primeira recompensa foi de 30 milhões de berries, mas seu cartaz de procurado o identifica como Sogeking.', image: '/src/assets/usopp.png' },

    { id: 5, name: 'Brook', description:'Brook, o músico dos Piratas do Chapéu de Palha, é o membro mais velho do grupo. Anteriormente dos Piratas Rumbar, ele ressuscitou com a Yomi Yomi no Mi, mas retornou à vida como um esqueleto.', image: '/src/assets/brook.png' },

    { id: 6, name: 'Tony Tony Chopper', description:'Chopper, o médico dos Piratas do Chapéu de Palha, é essencial para o grupo, embora seja visto como o mascote. Com vasto conhecimento em medicina, ele desenvolve rapidamente remédios para doenças letais. Sua recompensa inicial foi de apenas 50 berries, já que a Marinha o subestima como um simples mascote.', image: '/src/assets/chopper.png' },

    { id: 7, name: 'Franky', description:'Franky, o carpinteiro dos Chapéus de Palha, construiu o navio Thousand Sunny após a perda do Going Merry. Após um acidente, ele se tornou um ciborgue ao reconstruir seu corpo com partes mecânicas. Ao se juntar à tripulação de Luffy, já tinha uma recompensa de 44 milhões de berries.', image: '/src/assets/franky.png' },

    { id: 8, name: 'Jinbe', description:'Jinbe, o timoneiro dos Chapéus de Palha, é o mais recente membro a se juntar ao grupo. Conhecido por sua amizade com Luffy, lutou em Marineford para salvar Ace. Após resolver questões pessoais, oficializou sua entrada na tripulação durante os eventos em Wano.', image: '/src/assets/jinbe.png' },

    { id: 9, name: 'Sanji', description:'Sanji, renomado cozinheiro dos Piratas do Chapéu de Palha, é também um dos melhores lutadores da tripulação, parte do Trio Monstro, junto com Luffy e Zoro. Sua primeira recompensa, de 77 milhões de berries, veio após a batalha em Enies Lobby.', image: '/src/assets/sanji.png' },

    { id: 10, name: 'Nico Robin', description:'Robin é a arqueóloga da tripulação e um dos membros mais valiosos já que é a única pessoa viva no mundo que sabe decifrar os Poneglyphs atualmente. Pelo fato de ser a última sobrevivente de Ohara, o Governo Mundial colocou uma recompensa de 79,000,000 em Robin, mesmo sendo uma criança, e a intitulou de “Criança Demônio”.', image: '/src/assets/robin.png' },

    { id: 11, name: 'Going Merry', description:'O Going Merry foi o primeiro navio de um tamanho normal de propriedade dos Piratas do Chapéu de Palha, uma caravela que serviu como seu principal meio de transporte através de East Blue e da Grand Line até Water 7. Muitas vezes, era carinhosamente referido simplesmente como Merry (メリー Merī) pela tripulação.', image: '/src/assets/merry.jpg' },

    { id: 12, name: 'Thousand Sunny', description:'Thousand Sunny é o segundo navio dos Chapéu de Palha, e atualmente seu principal meio de transporte após a destruição do Going Merry. O navio foi criado por Franky com madeira de uma árvore rara chamada Adam. Segundo Franky, a alma do Going Merry reside nesse navio.', image: '/src/assets/sunny.png' }


  ];

  return (
    <div className="container custom-container">
  
    <h2 className="text-center mb-4 texto-decorativo" lang="ja" title="Bando do Chapéu de Palha">Mugiwara no Ichimi</h2>


      <h3 className='text-center fs-3 border-bottom-custom'>Piratas do Chapéu de Palha: Uma Jornada Épica em Busca do One Piece</h3>
        <p className='mb-0 p-3 fs-5'>Existem inúmeras tripulações piratas em One Piece, mas nenhum grupo se destaca e cativa tantos fãs como os Piratas do Chapéu de Palha. Eles são o grupo de piratas principal do anime/mangá e são liderados por Monkey D. Luffy nessa jornada que os fãs acompanham há mais de 20 anos.
        </p>
         <p className='mb-3 p-3 fs-5'>
         No começo dessa aventura, a tripulação de Luffy era composta por apenas cinco pessoas e eles eram conhecidos como um grupo de piratas qualquer e sem relevância. Entretanto, depois de chamarem tanta atenção na Grand Line e derrotarem piratas infames como os Shichibukai e Yonkou, eles viraram uma das maiores tripulações piratas do mundo. Agora os Chapéus de Palha são compostos por 10 piratas fortes e cheios de notoriedade. Conheça cada um deles:
         </p>
      <div className="row">
        {characters.map(character => (
          <div key={character.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={character.image} className="card-img-top" alt={character.name} />
              <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <p className="card-text">{character.description}</p>
               

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CharacterList;
