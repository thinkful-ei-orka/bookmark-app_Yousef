import store from './store.js'


const BASE_URL = 'https://thinkful-list-api.herokuapp.com/Yousef/bookmarks'

function createBookmark (data){
fetch (BASE_URL, {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(data)
})
.then(res => res.json())
.then(data => {
    console.log('success', data)
    store.bookmarks.push(data)
})
}

function getBookmark () {
    return fetch(`${BASE_URL}/bookmarks`)
}

function deleteBookmark (id) {
    fetch(BASE_URL, {
        method: 'DELETE'
    })
}


export default {
    createBookmark,
    deleteBookmark,
    getBookmark
}