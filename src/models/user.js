const user = {
  userName: null,
  postTitle: null,
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

const factoryUser = (userName, postTitle, views, likes, createdAt) => (
  Object.assign(user, { userName, postTitle, views, likes, createdAt })
);

export default factoryUser;
