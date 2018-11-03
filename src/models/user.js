const user = {
  userName: '',
  postTitle: '',
  views: null,
  likes: null,
  createdAt: null,
  toTableRow() {
    return [
      this.userName, this.postTitle, this.views, this.likes,
      `${this.createdAt.getFullYear()}-${this.createdAt.getMonth() + 1}-${this.createdAt.getDate()}`,
    ];
  },
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
