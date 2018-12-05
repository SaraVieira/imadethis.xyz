export default url => {
  const link = url.toLowerCase().trim()
  if (link.includes('twitter')) {
    return '@' + link.split('twitter.com/')[1]
  }
  if (link.includes('www')) {
    return link.split('.')[1]
  }

  if (link.includes('http')) {
    return link.split('http://')[1]
  }

  if (link.includes('https')) {
    return link.split('https://')[1]
  }
  return url.toLowerCase().trim()
}
