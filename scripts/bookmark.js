'use strict';

import store from './store.js';
import api from './api.js';



//VIEWS
function condensedBookmark() {
    let bookmarks = store.bookmarks

    return `<button class='expand-bookmark-button'>${bookmarks.title}</button>
    <div class='rating-entry'>
        <p>${bookmarks.rating}</p>
    </div>`;
}

function renderBookmarks () {

}

function renderExapndedBookmark (){
    let bookmark = store.bookmarks
    let newEntry = `<button class = "expanded-bookmark"> ${bookmark.title}</button>
    <div class = "rating-expanded"> 
        <p>${bookmark.title}</p>
        <p>${bookmark.description}<p>
        <a href = "${bookmark.url}"
    </div>
        <button = "delete-bookmark">Delete</button>`
        return `<li class = "bookmark-list"> ${newEntry}</li>`
}
//
    
function editForm () {
    return `<form id="bookmark-form">
    <label for="bookmark-url">Bookmark URL:</label><br>
    <input type="text" id="bookmark-url" name="bookmark-form" placeholder="http://example.com" min = "5"><br>
    <label for="bookmark-title">Title:</label><br>
    <input type="text" id="bookmark-title" name="bookmark-form" placeholder="Title" min = "1"><br>
    <div class="rating">
      <input type="radio" id="star5" name="bookmark-rating" value="5">
      <label for="star5" title="text">5 stars</label>
      <input type="radio" id="star4" name="bookmark-rating" value="4">
      <label for="star4" title="text">4 stars</label>
      <input type="radio" id="star3" name="bookmark-rating" value="3">
      <label for="star3" title="text">3 stars</label>
      <input type="radio" id="star2" name="bookmark-rating" value="2">
      <label for="star2" title="text">2 stars</label>
      <input type="radio" id="star1" name="bookmark-rating" value="1">
      <label for="star1" title="text">1 star</label>
    </div>
    <textarea id="bookmark-description" placeholder="A description"></textarea><br>
    <div class="bottom-buttons">
      <button type="button" class="cancel-button">Cancel</button>
      <input type="submit" class="submit-button" value="Submit">
    </div>
  </form>`;
}


function renderAddOptions () {
$('.new-button').on('click', function(event){
    $('main').append(editForm())
    handleSubmit()
})
}

function getItemIdFromElement (item) {
    return $(item)
    .closest('.bookmark-entry')
    .data()
}

// function createBookmark (title, url, description, rating) {
//  let newBookmark = {
//      title,
//      url,
//      description,
//      rating
//  }
// }

function handleSubmit() {
    $('#bookmark-form').on('submit',function(e){
        e.preventDefault()
        let stores = store.bookmarks

        const url = $('#bookmark-url').val()
        const title = $('#bookmark-title').val()
        const rating = $('input[bookmark-rating]').val()
        const desc = $('#bookmark-description').val()
        // console.log(descriptionInfo)

        console.log(store)
        api.createBookmark({title, url, desc, rating})
        
    })
}

function addToEntryList () {
    $('.bookmark-entry').append(store)
}

function filterRating (num) {
    let bookmarks = store.bookmarks
    if (num === 1) {
        return bookmarks.sort((a, b) => b.rating - a.rating)
        
    } 
}



function runApp(){
renderAddOptions()
handleSubmit()
addToEntryList()
}

$(runApp)

export default {
    
}