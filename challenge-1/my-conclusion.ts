// Nomenclatura de variáveis

const categoriesOfUsers = [
  {
    title: 'User',
    followers: 5
  },
  {
    title: 'Friendly',
    followers: 50,
  },
  {
    title: 'Famous',
    followers: 500,
  },
  {
    title: 'Super Star',
    followers: 1000,
  },
]

export default async function getGitHubUserName(req, res) {
  const githubUserName = String(req.query.username)

  if (!githubUserName) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`
    })
  }

  const confirmUser = await fetch(`https://api.github.com/users/${githubUserName}`);

  if (confirmUser.status === 404) {
    return res.status(400).json({
      message: `User with username "${githubUserName}" not found`
    })
  }

  const nameUser = await confirmUser.json()

  const orderListUser = categoriesOfUsers.sort((a, b) =>  b.followers - a.followers); 

  const category = orderListUser.find(amountFollowers => nameUser.followers > amountFollowers.followers)

  const userAndCategory = {
    githubUserName,
    category: category.title
  }

  return userAndCategory
}

getGitHubUserName({ query: {
  username: 'josepholiveira'
}}, {})