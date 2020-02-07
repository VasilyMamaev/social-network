
let store = {
  _state: { 
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
  }},

  _callSubscriber () {},

  getState () {
    return this._state
  },

  updateMessageText (text) {
    this._state.dialogs.newTextMessage = text
    this._callSubscriber(this._state)
  },

  addMessage (textMessage) {
    this._state.dialogs.messages.push(textMessage)
    this._state.dialogs.newTextMessage = ''
    this._callSubscriber(this._state)
  },

  updatePostText(text) {
    this._state.profile.newPostText = text
    this._callSubscriber(this._state)
  },

  addPost (textPost) {
    this._state.profile.userPosts.push(textPost)
    this._state.profile.newPostText = ''
    this._callSubscriber(this._state)
  },

  subscriber (observer) {
    this._callSubscriber = observer
  }
  
}


export default store


