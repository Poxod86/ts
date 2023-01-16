import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'
import { firstDate, inDefDate, lastDate, outDefDate } from './calendar.js'




window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock('Sergey',1,'result-1.png')
  renderSearchFormBlock(firstDate, lastDate, inDefDate, outDefDate)
  renderSearchStubBlock()
  renderToast(
    {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
    {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
})
