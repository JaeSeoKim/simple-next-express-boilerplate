export default async (req, res) => {
  const userData = {
    jaeseo: 'https://github.com/JaeSeoKim'
  }
  setTimeout(() => {
    if (userData[req.params.id] === undefined) {
      res.send('Not Found!')
    } else {
      res.send(userData[req.params.id])
    }
  }, 1000)
}
