const linkRegex = /(https?:\/\/[^\s]+)/g;

module.exports = (string) => {
  return string.split(linkRegex);
};
