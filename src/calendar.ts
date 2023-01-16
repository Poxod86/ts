


export function formatDate(date: Date) {
  const YYYY = date.getFullYear()
  const MM = date.getMonth() + 1
  const DD = date.getDate()
  return (
    [
      YYYY,
      MM < 10 ?  '0' +  MM : MM,
      DD < 10 ? '0' + DD :  DD,
    ].join('-')
  )
}

export const firstDate = formatDate(new Date());

let date = new Date()

date.setDate(date.getDate()+1)
export const inDefDate = formatDate(date)


date.setDate(date.getDate()+2)
export const outDefDate = formatDate(date)


date.setMonth(date.getMonth() + 2)
date.setDate(0)
export const lastDate = formatDate(date);









