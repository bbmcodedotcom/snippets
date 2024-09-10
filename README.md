# Snippets

A collection of snippets -- little trips, tricks, useful directives, some nice practices, you name it.

## Contribute

So you have a trick or two up your sleeve and want to share them with the world? Great! You're only a couple of steps away:

1. Make sure you have Hugo >= 0.114.0 installed. If you're on a Mac, just do a `brew install hugo` and you're good to go.
2. Fork this repo
3. Execute `hugo new posts/your-snippets.md` in your terminal. A `content/posts/your-snippets.md` file will be created with some placeholder content, like this:
  ````yaml
  ---
  title: "Your Snippets"
  date: 2024-08-11T18:50:07+07:00
  description: A short description.
  tags: [js, PHP, react]
  author:
    name: Your Name
    email: example@example.com
    homepage: https://example.com
    github: github_handle
  ---

  ```html
  <template>
  </template>

  <script>
  </script>

  <style scoped>
  </style>
  ```
  ````
4. Update the file with your snippets (and some of your details). You don't need to fill in everything -- only title, date, description, your name, and the snippets itself, are really required. The snippet can be previewed with `hugo server`.
5. Once you're happy with how it looks, commit the file and create a PR 🎉
