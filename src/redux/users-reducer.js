
const initialState = {
  users: [
    {
      followed: true,
      avatar: 'http://www.sarkidunyasi.com/img/21/93/daft-punk-300x214.jpg',
      firstName: 'Настя',
      location: {city: 'Москва', country: 'Россия'},
      userStatus: 'всем привет'
    },
    {
      followed: true,
      avatar: 'http://www.sarkidunyasi.com/img/21/93/daft-punk-300x214.jpg',
      firstName: 'Вася',
      location: {city: 'Санкт-Петербург', country: 'Нарния'},
      userStatus: 'не беспокоить'
    },
    {
      followed: false,
      avatar: 'http://www.sarkidunyasi.com/img/21/93/daft-punk-300x214.jpg',
      firstName: 'Стеша',
      location: {city: 'Екатеринбург', country: 'Россия'},
      userStatus: 'голод'
    },
  ]
}

let usersReducer (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_MORE'
  }
}

