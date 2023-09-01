$(document).ready(() => {
  // bxSlider

  $(".bxslider").bxSlider({
    mode: "fade",
    captions: true,
    slideWidth: 1200,
    responsive: true,
    pager: true,
    auto: true,
    autoControls: true,
    stopAutoOnClick: true,
  });

  // Posts

  let posts = [
    {
      title: "Prueba 1 Titulo",
      date: `Publicado el dia ${moment().date()} de ${moment().format(
        "MMMM"
      )} de ${moment().format("YYYY")}`,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aut nesciunt sit non, ut quam culpa voluptates assumenda suscipit. Natus impedit iusto illum perspiciatis doloremque. Recusandae delectus corporis blanditiis autem",
    },
    {
      title: "Prueba 2 Titulo",
      date: `Publicado el dia ${moment().date()} de ${moment().format(
        "MMMM"
      )} de ${moment().format("YYYY")}`,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aut nesciunt sit non, ut quam culpa voluptates assumenda suscipit. Natus impedit iusto illum perspiciatis doloremque. Recusandae delectus corporis blanditiis autem",
    },
    {
      title: "Prueba 3 Titulo",
      date: `Publicado el dia ${moment().date()} de ${moment().format(
        "MMMM"
      )} de ${moment().format("YYYY")}`,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aut nesciunt sit non, ut quam culpa voluptates assumenda suscipit. Natus impedit iusto illum perspiciatis doloremque. Recusandae delectus corporis blanditiis autem",
    },
    {
      title: "Prueba 4 Titulo",
      date: `Publicado el dia ${moment().date()} de ${moment().format(
        "MMMM"
      )} de ${moment().format("YYYY")}`,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aut nesciunt sit non, ut quam culpa voluptates assumenda suscipit. Natus impedit iusto illum perspiciatis doloremque. Recusandae delectus corporis blanditiis autem",
    },
    {
      title: "Prueba 5 Titulo",
      date: `Publicado el dia ${moment().date()} de ${moment().format(
        "MMMM"
      )} de ${moment().format("YYYY")}`,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aut nesciunt sit non, ut quam culpa voluptates assumenda suscipit. Natus impedit iusto illum perspiciatis doloremque. Recusandae delectus corporis blanditiis autem",
    },
  ];

  let post;

  posts.forEach((element) => {
    post = `<article class="post">
    <h2>${element.title}</h2>
    <span class="date">${element.date}</span>
    <p>
        ${element.content}
    </p>
    <a href="#" class="button-more">Leer más</a>
</article>`;

    $("#posts").append(post);
  });

  // Selector de tema

  let theme = $("#theme");

  $("#to-green").click(() => {
    theme.attr("href", "css/green.css");
    
  });

  $("#to-red").click(() => {
    theme.attr("href", "css/red.css");
    
  });

  $("#to-blue").click(() => {
    theme.attr("href", "css/blue.css");
  });

  // Scroll arriba de la web

  $('.subir').click((e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' });
    /*$('html', 'body').animate({
      scrollTop: 0,
    }, 500)
    return false*/
  })

  let loginBox = $('#login form')
  let submitButton = $('#login form input[type="submit"]')

  submitButton.click((e) => {
    e.preventDefault()

    let inputName = $("input[name='name']").val()
    let inputEmail = $("input[name='email'").val()
    let inputPass = $("input[name='password']").val()

    console.log(inputName)
    console.log(inputEmail)
    console.log(inputPass)

    let userData = {
      name: inputName,
      email: inputEmail,
      password: inputPass
    }

    console.log(userData)

    localStorage.setItem('userDataKey', JSON.stringify(userData))

    if(localStorage.getItem('userDataKey')){
      loginBox.fadeOut('fast')
      $('#identify').text(`Bienvenido ${userData.name}`)
      $('#login').append('<button id="close">Cerrar Sesion</button>')
    }

    let buttonClose = $('#close')
    
    buttonClose.click(() => {
      localStorage.clear()
      location.reload()
    })
  })

  


});
