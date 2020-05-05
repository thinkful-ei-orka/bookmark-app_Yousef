# bookmark-app_Yousef


<!--INDEX
    api.obtainBookmark() {
        .then(items) =>
        items.forEach((item) => store.addBookMark(item))
        bookmark.render();
    }
    bookmark.run()
    bookmark.render()

-->

<!--API
function apiFetch (...args) {
    let error;
    return fetch(...args)
      .then(res => {
        if (!res.ok) {
          error = { code: res.status};
        }
        return res.json();
      })
      .then(data => {
        if (error) {
          error.message = data.message;
          return Promise.reject(error);
        }
        return data;
      });
  };

function createBookMark (item) {
const newBookmark = JSON.stringify(item)
const methods = {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: newBookmark
};
return apiFetch(`${BASE_URL}/bookmarks`, methods)
};

function updateBookmark (id, newData) {
    const newData = JSON.stringify(newData)
    const methods = {
        method: 'PATCH',
        headers: {'content-type':'application/json'},
        body: newData
    };
    return apiFetch(`${BASE_URL}-bookmarks-${id}`, methods)
}

function deleteBookmark(id) {
    const methods = {
        method: 'DELETE'
    }
    return apiFetch(`${BASE_URL}/bookmarks/${id}`, methods);
}

function obtainBookmark() {
    return apiFetch(`${BASE_URL}/bookmarks`);
}
-->