function checkBody(body, keys) {
  let isValid = true;

  for (let field of keys) {
    console.log(field);
    if (!body[field] || body[field] === "") {
      isValid = false;
    }
  }
  return isValid;
}

module.exports = { checkBody };

// 👉  Créez à l’intérieur de ce module, une fonction checkBody() qui recevra un objet contenant le body renvoyé par les formulaires d’inputs et un tableau des champs à tester. Si chaque élément de celui-ci existe et que le nombre d’éléments est le bon, la fonction renverra true et sinon false.
