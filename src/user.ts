import { renderBlock } from './lib.js'

export function renderUserBlock (username:string, favoriteItemsAmount:number, linkToAvatar:string) {
  const favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount : 'ничего нет'
  const hasFavoriteItems = favoriteItemsAmount ? true : false
  const avatarName = username ? username : 'Wade Warren'
  const avatarLink = linkToAvatar ? linkToAvatar : 'avatar.png'

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="/img/${avatarLink}" alt="${avatarName}" />
      <div class="info">
          <p class="name">${avatarName}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  )
}
