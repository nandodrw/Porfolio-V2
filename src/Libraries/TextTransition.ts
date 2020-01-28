export default class TextTransition {
  Alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "i",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "~",
    "&",
    "|",
    "^",
    "ç",
    "@",
    "]",
    "[",
    "{",
    "}",
    "ù",
    "*",
    "µ",
    "¤",
    "$",
    "£",
    "€",
    "°",
    ")",
    "(",
    "+",
    "-",
    "/",
    "<",
    ">",
    "²",
    "`",
    "é",
    "è",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0"
  ];

  WordTransitionSprite(
    current: string,
    next: string,
    steps: number,
    wordSize: number
  ) {
    let sizeStart = current.length;
    let sizeEnd = next.length;
    const sprites = [];
    wordSize = current.length;

    for (let i = 0; i < Math.abs(sizeStart - sizeEnd) + steps; i++) {
      let word = "";
      for (let j = 0; j < wordSize; j++) {
        if (Math.random() > i / steps) {
          word =
            word +
            this.Alphabet[
              Math.floor(Math.random() * (this.Alphabet.length - 1))
            ];
        } else {
          word =
            word +
            (next[j]
              ? next[j]
              : this.Alphabet[
                  Math.floor(Math.random() * (this.Alphabet.length - 1))
                ]);
        }
      }
      if (i % 3 === 0) {
        wordSize = this.GetNextStepWordSize(wordSize, next.length);
      }

      sprites.push(word.replace(" ", "_"));
    }
    sprites.push(next.replace(" ", "_"));
    return sprites;
  }

  private GetNextStepWordSize(currentLength: number, objective: number) {
    if (currentLength > objective) {
      return --currentLength;
    } else if (currentLength < objective) {
      return ++currentLength;
    }
    return currentLength;
  }

  private GetIterator(transitions: string[]) {
    function* iterator(iterations: any[], current: number) {
      while (current < iterations.length) {
        yield iterations[current++];
      }
    }
    return iterator(transitions, 0);
  }

  private _Transition(
    iterator: Generator,
    callback: Function,
    total: number,
    current: number
  ) {
    setTimeout(() => {
      var skill = iterator.next().value;
      if (skill) {
        window.requestAnimationFrame(function() {
          callback(skill, false);
        });
        this._Transition(iterator, callback, total, current++);
      } else {
        callback(undefined, true);
      }
    }, 60);
    // }, 2500 * (current / total));
    // }, 10 * Math.pow(2, current));
  }

  AnimateTextTransition(
    current: string,
    next: string,
    steps: number,
    wordSize: number,
    callback: Function
  ) {
    // while (next.length < wordSize) {
    //   next = next + "_";
    // }

    wordSize = next.length;

    const transitions = this.WordTransitionSprite(
      current,
      next,
      steps,
      wordSize
    );
    this._Transition(
      this.GetIterator(transitions),
      callback,
      transitions.length,
      1
    );
  }
}
