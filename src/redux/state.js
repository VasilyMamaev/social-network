let renderEntireTree = () => {
  
}

let state = {
  dialogs: {
    dialogsElements: [
      {name: 'dima', id: '1'},
      {name: 'sema', id: '2'},
      {name: 'lucy', id: '3'},
      {name: 'kolya', id: '4'},
      {name: 'zhora', id: '5'},
    ],
    messages: [
      'Привет, есть свободные билеты в театр. Ты хотел. На Щелкунчик Лебединое озеро На Кармен',
      'Привет. Вау! Это замечательно. Спасибо большое! Моя мама хотела сходить на Лебединое озеро. Будет ли 2 билета?',
      'Да. Я постараюсь найти еще один билет для твоей мамы. Есть на 21 и 23 июня. Подскажи, когда тебе удобно?',
      '23 июня будет отлично! Спасибо!Буду ждать новостей от тебя. Хорошего дня!'
    ],
    newTextMessage: ''
  },
  profile: {
    userInfo: {
      avatar: 'https://playjoor.com/assets/img/default_avis/matthew.png',
      birth: '4 августа',
      city: 'Екатеринбург',
      education: 'УрФУ',
      web_site: 'https://github.com/VasilyMamaev'
    },
    userPosts: [
      'сходил покушац',
      'сходил покакац',
      'никуда не ходил'
    ],
    newPostText: ''
  },

  updateMessageText (text) {
    state.dialogs.newTextMessage = text
    renderEntireTree(state)
  },

  addMessage (textMessage) {
    state.dialogs.messages.push(textMessage)
    state.dialogs.newTextMessage = ''
    renderEntireTree(state)
  },

  updatePostText(text) {
    state.profile.newPostText = text
    renderEntireTree(state)
  },

  addPost (textPost) {
    state.profile.userPosts.push(textPost)
    state.profile.newPostText = ''
    renderEntireTree(state)
  }
}

export const subscribe = (observer) => {
  renderEntireTree = observer
}


export default state


