const user = {
  userName: '',
  postTitle: '',
  views: null,
  likes: null,
  createdAt: null,
};

const factoryUser = (userName, postTitle, views, likes) => (
  Object.create(user, {
    userName: {
      value: userName,
    },
    postTitle: {
      value: postTitle,
    },
    views: {
      value: views,
    },
    likes: {
      value: likes,
    },
    createdAt: {
      value: new Date(),
    },
  })
);

export default factoryUser;
