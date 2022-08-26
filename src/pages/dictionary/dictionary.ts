import './main.scss'
import ApiWords from "../../api/apiWords"
import { Words } from './words'
import { Pagination } from './pagination'
import ApiUsers from '../../api/apiUsers'
import ApiUsersWords from '../../api/apiUsersWords'
import ApiUsersSettings from '../../api/apiUsersSettings'
import ApiSignIn from '../../api/apiSignIn'




export enum accordance {
  A1 = '0',
  A2 = '1',
  B1 = '2',
  B2 = '3',
  C1 = '4',
  C2 = '5',
}

export class DifficultyLevels {


  // private numberOfPages: number = 30
  private levels: NodeListOf<Element>
  private apiWords: ApiWords
  private words: Words
  private pagination: Pagination

  constructor(){
    this.words = new Words()
    this.apiWords = new ApiWords()
    this.pagination = new Pagination()
    const levelsList = document.querySelectorAll('.level')
    this.levels = levelsList 
  }

  onClick(){
    this.levels.forEach(el => {
      el.addEventListener('click', async () => {
        const level = el.classList[1].split('level-')[1]
        // if(!this.words.checkLevel(level)){
        //   this.words.push(level, await this.getWordsPage(accordance[level], 1))
        // }
        // this.words.log()
        this.words.currentLevel = level
        this.pagination.currentPage = '1'
        this.pagination.reset()
        this.words.render(accordance[level], '0')
      })
    })
  }

  
}

const levels = new DifficultyLevels()
levels.onClick()
// const apiSignIn = new ApiSignIn()
// const apiUsersWords = new ApiUsersWords()
// const apiUsers = new ApiUsers()
// async function createUser(name, email, password) {
//   // const response = await apiUsers.createUser(name, email, password)
//   const signIn = await apiSignIn.signIn("pasha2@gmail.com", 'pasha11234')
//   // const newWord = await apiUsersWords.createUserWord(signIn.token, signIn.userId, "5e9f5ee35eb9e72bc21af4a0", 'easy')
//   const allWords = await apiUsersWords.getAllUserWords(signIn.token, signIn.userId)
//   console.log(signIn)
//   // console.log(newWord)
//   console.log(allWords)
// }

// createUser("pasha2", "pasha2@gmail.com", 'pasha11234')

