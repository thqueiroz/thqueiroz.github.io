<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0"/>
  <title>TH Development</title>

  <!-- CSS  -->
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link href="../css/materialize.css" type="text/css" rel="stylesheet" media="screen,projection"/>
  <link href="../css/style.css" type="text/css" rel="stylesheet" media="screen,projection"/>
</head>
<body>
  <nav class="blue lighten-4 lighten-1" role="navigation">
    <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo"></a>
      <ul class="right hide-on-med-and-down">
        <li><a href="../index.html">Home</a></li>
        <li><a href="../pages/contato.html">Contato</a></li>
      </ul>

      <ul id="nav-mobile" class="sidenav">
        <li><a href="#">Contato</a></li>
      </ul>
      <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
    </div>
  </nav>
  <div class="section no-pad-bot" id="index-banner">
    <div class="container">
      <br><br>
      <h1 class="header center orange-text">Sua Mensagem foi enviada com sucesso! Entraremos em contato em breve.</h1>
      <br><br>

    </div>
  </div>

  <?php 
    $nome = $_POST['nomeContato'];
    $emailContato = $_POST['emailContato'];
    $mensagem = $_POST['mensagem'];
  ?>

  <?php 
    $to = "tiagohenriquequeiroz@gmail.com";
    $subject = "Email de TH Development";
    $message = "<p>Ola, voce recebeu um email do seu site!</p> <br><b>Nome:</b> $nome </br> <br><b>Email:</b> $emailContato </br> <br><b>Mensagem:</b> $mensagem </br>";
    $header = "MIME-Version: 1.0 \n";
    $header .= "Content-Type: text/html; charset=iso-8859-1\n";
    $header .= "From: $emailContato\n";

    mail($to, $subject , $message, $header);
  ?>


  <!-- <footer class="page-footer orange"> -->
    <div class="footer-copyright blue lighten-4 lighten-1">
      <div class="container">
      Feito por: <a class="orange-text text-lighten-3" href="#">TH Development</a>
      </div>
    </div>
  <!-- </footer> -->

  <!--  Scripts-->
  <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
  <script src="../js/materialize.js"></script>
  <script src="../js/init.js"></script>
  <script>
    $(document).ready(function(){
      $('.carousel').carousel();
    });
  </script>
  </body>
</html>
