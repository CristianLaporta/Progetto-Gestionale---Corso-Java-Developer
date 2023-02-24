function ripristina() {
  document.getElementById("email").value = "";
  document.getElementById("tel").value = "";
  document.getElementById("name").value = "";
  document.getElementById("surname").value = "";
}
function salva() {
  const email = document.getElementById("email").value;
  const tel = document.getElementById("tel").value;
  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const imgprofile = document.getElementById("imgprofile").value;
  let modifiche = [{}];
  if (
    email.length != 0 ||
    tel.length != 0 ||
    name.length != 0 ||
    surname.length != 0
  ) {
    if (email.length != 0) {
      modifiche[0].email = email;
    }
    if (tel.length != 0) {
      modifiche[0].tel = tel;
    }
    if (name.length != 0) {
      modifiche[0].name = name;
    }
    if (surname.length != 0) {
      modifiche[0].surname = surname;
    }
    if (imgprofile.length != 0) {
      modifiche[0].imgprofile = imgprofile;
    }
    console.log(modifiche);
  }
}
