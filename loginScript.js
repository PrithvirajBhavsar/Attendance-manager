const getCredentials = () => {
  const name = localStorage.getItem("name");
  const course = localStorage.getItem("course");

  if (name && course) {
    window.location.href = "home.html";
  }
};
