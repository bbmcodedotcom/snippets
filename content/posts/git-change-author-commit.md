---
title: "Git Change Author Commit"
date: 2024-09-17T16:30:05+07:00
description: a shell function to change the author of a git commit.
tags: [script, git]
author:
  name: BBMCode
  email: bbmcode247@gmail.com
  homepage: https://bbmcode.com
  github: bbmcodedotcom
---

```sh
// add below function to ~/.zshrc (or ~/.bash_profile in Linux or older version Macos )

function commitas {
  export GIT_COMMITTER_NAME=$1
  export GIT_COMMITTER_EMAIL=$2
  git commit --author="$GIT_COMMITTER_NAME <$GIT_COMMITTER_EMAIL>" -m $3
}

// terminal
source ~/.zshrc

```

Go to folder repository, `git add` your changing.

Now simply run
```sh
commitas "BBMCode" "test@bbmcode.com" "Do something"
```
