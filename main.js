function createGame(player1, hour, player2) {
  return `
<li>
  <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
  <strong>${hour}</strong>
  <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" /> 
</li>
`
}

function createCart(date, day, game) {
  return `
  <div class="card">
  <h2>${date} <span>${day}</span></h2>
  <ul>
 ${game}
  </ul>
</div>
  `
}

document.querySelector('#app').innerHTML = `      
<header>
<img src="./assets/logo.svg" alt="Logo da NLW Copa" />
</header>
<main id="cards">
${createCart(
  '24/11',
  'quinta',
  createGame('brazil', '16:00', 'serbia') +
    createGame('portugal', '13:00', 'cameroon')
)}
${createCart(
  '28/11',
  'segunda',
  createGame('switzerland', '13:00', 'brazil') +
    createGame('portugal', '16:00', 'uruguay')
)}
${createCart('02/12', 'sexta', createGame('brazil', '16:00', 'cameroon'))}
</main>`
