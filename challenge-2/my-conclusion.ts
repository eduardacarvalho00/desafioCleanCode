// Boleanos

const user = {
  name: 'Diego Fernandes',
  height: 190,
  hasTicket: true,
}

const necessaryHeight = 130
const currentHour = new Date().getHours()

const isParkOpen = currentHour > 9 && currentHour < 18
const doesEnterToy = user.height > necessaryHeight
const hasTicket = user.hasTicket



if (!isParkOpen) {
  throw new Error('O parque está fechado!')
}


if (!hasTicket) {
  throw new Error('O Diego não possui um bilhete para entrar no parque!')
}


if (!doesEnterToy) {
  throw new Error('O Diego não pode entrar no brinquedo!')
} 

console.log('O Diego se divertiu muito! :)')
