/* ARCHIVO EDITADO , CREADO O MEJORADO
POR EL CUERVO 
CUERVO-TEAM-SUPREME 
SE DEJAN CREDITOS PERRAS ES DE CUERVO 
USO NO PRIVADO ES PUBLICO
PERO CUERVO SE ENCARGA 
*/
const free = 25
const prem = 15

var handler = async (m, {conn, isPrems }) => {

let exp = `${pickRandom([500, 600, 700, 800, 900, 999, 1000, 1300, 1500, 1800])}` * 1
let exppremium = `${pickRandom([1000, 1500, 1800, 2100, 2500, 2900, 3300, 3600, 4000, 4500])}` * 1
let d = Math.floor(Math.random() * 30)
global.db.data.users[m.sender].coin += d
global.db.data.users[m.sender].money += d
let time = global.db.data.users[m.sender].lastclaim + 86400000 //12 Horas
if (new Date - global.db.data.users[m.sender].lastclaim < 7200000) return conn.reply(m.chat, `🕚 *Vuelve en ${msToTime(time - new Date())}*`)
global.db.data.users[m.sender].exp += exppremium ? prem : exp
conn.reply(m.chat, `✐ *Recompensa Diaria*

🜸 ${moneda} : *+${d}*`, m)

global.db.data.users[m.sender].lastclaim = new Date * 1

}
handler.help = ['daily']
handler.tags = ['rpg']
handler.command = ['daily']

handler.register = true

export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? '0' + hours : hours
minutes = (minutes < 10) ? '0' + minutes : minutes
seconds = (seconds < 10) ? '0' + seconds : seconds

return hours + ' Horas ' + minutes + ' Minutos'
}
