const store = {
    bookmarks: [],
    adding: false,
    error: null,
    filter: 0
    }


  function findById () {
    return store.bookmarks.find(bookmark => bookmark.id === id)
}

function addBookMark(bookmark) {
    store.bookmarks.push(bookmark)
}

function findAndUpdate (id, newEntry) {
    const bookmark = this.findById(id)
    Object.assign(bookmark, newEntry)
}

function findAndDelete(id) {
    store.bookmarks = this.bookmarks.filter(item => item.id !== id);
}




export default {
    store,
    findAndUpdate,
    findById,
    addBookMark,
    findAndDelete
}
