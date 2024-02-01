const UTILS = {}
UTILS.repeat = function (callback, numberOfRepeats) {
  for (let i = 0; i < numberOfRepeats; i++) {
    callback()
  }
}