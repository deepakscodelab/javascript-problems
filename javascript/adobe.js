let input = {
  a: "one",
  b: {
    c: "two",
    d: {
      e: "three",
    },
    f: {
      g: {
        h: "four",
      },
    },
  },
  i: "five",
};

let output = {
  a: "one",
  "b.c": "two",
  "b.d.e": "three",
  "b.f.g.h": "four",
  i: "five",
};
