const users = [
  {
    id: "60d21b3f67d0d8992e610c6f",
    image: "https://img.dummyapi.io/photo-1589469526983-0887ebe10072.jpg",
    publishDate: "2020-05-14T16:28:10.135Z",
    text: "Cooling off in the fountain white and black short ...",
    owner: {
      firstName: "Jan",
      lastName: "Siebert",
      picture: "https://randomuser.me/api/portraits/med/men/60.jpg",
    },
  },
  {
    id: "60d21bf567d0d8992e610e8e",
    image: "https://img.dummyapi.io/photo-1571164712078-972f26d5144d.jpg",
    publishDate: "2020-05-05T15:34:08.456Z",
    text: "grayscale photography of boy running on shore besi...",
    owner: {
      firstName: "Elliot",
      lastName: "Walker",
      picture: "https://randomuser.me/api/portraits/med/men/53.jpg",
    },
  },
  {
    id: "60d21ae567d0d8992e610b69",
    image: "https://img.dummyapi.io/photo-1505623547966-8af2af3515ac.jpg",
    publishDate: "2020-05-03T08:35:52.536Z",
    text: "My friend and I went to the local river and played...",
    owner: {
      firstName: "Kayla",
      lastName: "Bredesen",
      picture: "https://randomuser.me/api/portraits/med/women/13.jpg",
    },
  },
];

exports.getUsers = (req, res, next) => {
  res.status(200).json({
    users: users,
  });
};

exports.createUser = (req, res, next) => {
  users.push({ id: users.length + 1, ...req.body });
  res.status(400).json({ message: `New user is created.` });
};

exports.getUser = (req, res, next) => {
  console.log("fdsafsdafdasf");
  const { id } = req.params;
  if (id > users.length) {
    res.status(400).json({ message: `${req.params.id} id does not exist` });
  } else {
    res.status(200).json(users[parseInt(id) - 1]);
  }
};

exports.updateUser = (req, res, next) => {
  if (id > users.length) {
    res.status(400).json({ message: `${req.params.id} id does not exist` });
  } else {
    res
      .status(200)
      .json({ message: `User with ${req.params.id} id is updated` });
  }
};

exports.deleteUser = (req, res, next) => {
  const { id } = req.params;
  if (id > users.length) {
    res.status(400).json({ message: `${req.params.id} id does not exist` });
  } else {
    res
      .status(200)
      .json({ message: `User with ${req.params.id} id is deleted` });
  }
};
