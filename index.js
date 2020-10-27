const linkRegex = /(https?:\/\/[^\s]+)/g;

module.exports = (string, regex = linkRegex) => {
  return string.split(regex);
};
