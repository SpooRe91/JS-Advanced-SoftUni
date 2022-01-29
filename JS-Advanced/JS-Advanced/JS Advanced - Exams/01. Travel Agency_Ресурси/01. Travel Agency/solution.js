window.addEventListener('load', solution);

function solution() {

  let name = document.getElementById("fname")
  let email = document.getElementById("email")
  let phone = document.getElementById("phone")
  let address = document.getElementById("address")
  let code = document.getElementById("code")
  let ul = document.getElementById("infoPreview")
  let submitBtn = document.getElementById("submitBTN")
  let editBtn = document.getElementById("editBTN")
  let contBtn = document.getElementById("continueBTN")

  submitBtn.addEventListener("click", submit)

  function submit() {
    if (name.value != ""  && email.value != "" ) {
      let liName = document.createElement("li")
      liName.textContent = `Full Name: ${name.value}`
      let liEmail = document.createElement("li")
      liEmail.textContent = `Email: ${email.value}`
      let liPhone = document.createElement("li")
      liPhone.textContent = `Phone Number: ${phone.value}`
      let liAddress = document.createElement("li")
      liAddress.textContent = `Address: ${address.value}`
      let liCode = document.createElement("li")
      liCode.textContent = `Postal Code: ${code.value}`



      ul.appendChild(liName)
      ul.appendChild(liEmail)
      ul.appendChild(liPhone)
      ul.appendChild(liAddress)
      ul.appendChild(liCode)

      submitBtn.disabled = true;
      editBtn.disabled = false;
      contBtn.disabled = false;

      name.value = ""
      email.value = ""
      phone.value = ""
      address.value = ""
      code.value = ""
    }
  }

  editBtn.addEventListener("click", edit);

  function edit() {
    let arr = Array.from(ul.children)
    for (let i = 0; i < arr.length; i++) {
      let value = arr[i].textContent.split(": ")[1]
      if (i == 0) {
        name.value = value
      } else if (i == 1) {
        email.value = value
      } else if (i == 2) {
        phone.value = value
      } else if (i == 3) {
        address.value = value
      } else if (i == 4) {
        code.value = value
      }

      arr[i].remove()


    }
    submitBtn.disabled = false;
    editBtn.disabled = true;
    contBtn.disabled = true;

  }

  contBtn.addEventListener("click", complete)

  function complete() {
    let main = document.getElementById("block")
    let h3 = document.createElement("h3");
    h3.textContent = "Thank you for your reservation!"
    Array.from(main.children).forEach(e => e.remove())
    main.appendChild(h3)
  }

}
