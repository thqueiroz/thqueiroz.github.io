(function(){
    try {
      (window.localStorage.getItem) 
    } catch(e){
      return; 
    }
    var name = document.querySelector('#nome');
    var area = document.querySelector('#textArea');
    if (!area.value) {
      area.value = window.localStorage.getItem('value');
    }
    updateLog(false);
    document.querySelector('#buttonSalvar').addEventListener('click', function () {
      window.localStorage.setItem('name', name.value);
      window.localStorage.setItem('value', area.value);
      window.localStorage.setItem('timestamp', (new Date()).getTime());
      updateLog(true);
    }, false);
    function updateLog(new_save) {
      var log = document.querySelector("#tempo");
      var nome = document.querySelector("#nome");
      var tmp = 0;
      if (window.localStorage.getItem('value')) {
        tmp = ((new Date()).getTime() - (new Date()).setTime(window.localStorage.getItem('timestamp'))) / 1000;
        if (new_save) {
          log.textContent = 'salvo com sucesso!.';
          setTimeout(function() {
            log.textContent = '';
          }, 3000);
        } else {
          nome.textContent = 'Últimotexto: ' + window.localStorage.getItem('name');
          log.textContent = 'Último acesso: ' + tmp + 's atrás';
        }
      }
    }
  })();  