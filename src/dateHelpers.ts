export const timeago = (seconds:number) => {
  let ago = ((new Date()).getTime() - seconds) / 1000
  let part = 0

  if (ago < 5) { return 'justo ahora' }
  if (ago < 60) { return `hace ${ago} unos segundos` }

  if (ago < 120) { return 'hace un minuto' }
  if (ago < 3600) {
    while (ago >= 60) { ago -= 60; part += 1 }
    return `hace ${part} minutos`
  }

  if (ago < 7200) { return 'hace una hora' }
  if (ago < 86400) {
    while (ago >= 3600) { ago -= 3600; part += 1 }
    return `hace ${part} horas`
  }

  if (ago < 172800) { return 'hace un dia' }
  if (ago < 604800) {
    while (ago >= 172800) { ago -= 172800; part += 1 }
    return `hace ${part} dias`
  }

  if (ago < 1209600) { return 'hace una semana' }
  if (ago < 2592000) {
    while (ago >= 604800) { ago -= 604800; part += 1 }
    return `hace ${part} semanas`
  }

  if (ago < 5184000) { return 'hace un mes' }
  if (ago < 31536000) {
    while (ago >= 2592000) { ago -= 2592000; part += 1 }
    return `hace ${part} meses`
  }

  if (ago < 1419120000) { // 45 years, approximately the epoch
    return 'más de un año'
  }

  // TODO pass in Date.now() and ms to check for 0 as never
  return 'hace mucho tiempo'
}
