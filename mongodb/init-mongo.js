db.crateUser({
  user: "dev",
  pwd: "dev",
  roles: [
    {
      role: "readWrite",
      db: "cursoNodeJS",
    },
  ],
});
