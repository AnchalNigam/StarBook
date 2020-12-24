module.exports = {
  RootQuery: {
    episodes: (parent) => { console.log(parent); return ['Anchal', 'nigam']}
  }
}