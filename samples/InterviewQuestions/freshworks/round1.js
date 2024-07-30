const users = [
  {
    id: 1,
    name: "Abc",
  },
  {
    id: 2,
    name: "Efg",
  },
  {
    id: 3,
    name: "Hij",
  },
  {
    id: 4,
    name: "Lmn",
  },
];

const user_fb = [
  {
    id: 2,
    enabled: true,
  },
  {
    id: 4,
    enabled: false,
  },
];

const user_wa = [
  {
    id: 1,
    enabled: true,
  },
  {
    id: 2,
    enabled: false,
  },
  {
    id: 4,
    enabled: true,
  },
];

// output_arr = [
//   {
//     id: 1,
//     fb_enabled: false,
//     wa_enabled: true
//   },
//   {
//     id: 2,
//     fb_enabled: true,
//     wa_enabled: false
//   },
//   {
//     id: 3,
//     fb_enabled: false,
//     wa_enabled: false
//   },
//   {
//     id: 4,
//     fb_enabled: false,
//     wa_enabled: true
//   }
// ]

function sum() {
  return this.a + this.b;
}

let numbers = {
  a: 1,
  b: 2,
};

sum.apply(numbers);

function getUserInfo() {
  return users.map((user, idx) => {
    let fbUser = user_fb.find((fbUser) => fbUser.id === user.id);
    let waUser = user_wa.find((waUser) => waUser.id === user.id);

    return {
      id: user.id,
      fb_enabled: fbUser ? fbUser.enabled : false,
      wa_enabled: waUser ? waUser.enabled : false,
    };
  });
}

console.log(getUserInfo());

function steps(n) {
  let times = 0;

  for (let row = 0; row < n; row++) {
    let step = "";
    times++;
    for (let column = 0; column < n; column++) {
      if (column < n - times) {
        step += " ";
      } else {
        step += "#";
      }
    }
    console.log(step);
  }
}

// steps(5);
