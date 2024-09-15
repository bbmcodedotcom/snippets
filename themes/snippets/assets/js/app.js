if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(registration => {
    }, err => {
      console.log('ServiceWorker registration failed: ', err)
    })
  })
}

const resultPanel = document.getElementById('hits')

// config Algolia
const search = instantsearch({
  appId: '4UAX1KD5IL',
  apiKey: '08e55afa8e3d1d2633edd4ce2c88a2cc',
  indexName: 'prod_SNIPPETS_BBMCODE',
  routing: true,
  searchParameters: {
    hitsPerPage: 5
  },
  searchFunction (helper) {
    if (helper.state.query.trim() !== '') {
      helper.search()
    }
  }
})

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#searchBox',
    placeholder: 'Search',
    reset: false,
    autofocus: false
  })
)

const itemTemplate = `
<a class="search-result-item-{{type}} search-result-item" href="{{ relpermalink }}">
  <h3 class="title">{{#isTag}}#{{/isTag}}{{{ _highlightResult.title.value }}}</h3>
  {{#description}}
  <p class="description">{{{ _highlightResult.description.value }}}</p>
  {{/description}}
</a>
`

search.addWidget(instantsearch.widgets.hits({
  container: resultPanel,
  templates: {
    empty: '<span class="na">No results</span>',
    item: itemTemplate
  }
}))

search.start()

const searchBox = document.querySelector('#searchBox input')

const hideResultPanel = () => (resultPanel.style.display = 'none')
const showResultPanel = () => (resultPanel.style.display = 'block')

document.addEventListener('click', e => {
  if (!resultPanel.contains(e.target) && e.target !== searchBox) {
    hideResultPanel()
  }
})

searchBox.addEventListener('focus', hideResultPanel)

searchBox.addEventListener('input', e => {
  searchBox.value.trim() === '' ? hideResultPanel () : showResultPanel()
})
