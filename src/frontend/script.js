function alertSuccess(text) {
  const alertSuccess = document.createElement('div');
  alertSuccess.className = 'alert alert-success alert-dismissible fade show';
  alertSuccess.setAttribute('role', 'alert');
  alertSuccess.innerHTML = `${text} <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`;
  document.getElementById('alertContainer').appendChild(alertSuccess);

  alertSuccess.addEventListener('click', function () {
    alertSuccess.classList.remove('show');
    setTimeout(function () {
      alertContainer.innerHTML = '';
    }, 500);
  });
}

function alertError(text) {
  const alertError = document.createElement('div');
  alertError.className = 'alert alert-danger alert-dismissible fade show';
  alertError.setAttribute('role', 'alert');
  alertError.innerHTML = `${text} <button type="button" class="btn-close btn-sm" data-bs-dismiss="alert" aria-label="Close"></button>`;
  document.getElementById('alertContainer').appendChild(alertError);

  alertError.addEventListener('click', function () {
    alertError.classList.remove('show');
    setTimeout(function () {
      alertContainer.innerHTML = '';
    }, 500);
  });
}

/**
 * YYYY-MM-DDTHH:mm:ss.SSSZ => DD/MM/YYYY HH:mm:ss
 */
function convertISOToDateTime(isoDateTime) {
  // Remover o "T" que separa a data da hora
  let dateTime = isoDateTime.replace("T", " ");

  // Substituir o separador "-" por "/" na parte da data
  dateTime = dateTime.replace(/-/g, "/");

  // Reorganizar as partes da data para "DD/MM/YYYY"
  let dateParts = dateTime.split(" ")[0].split("/");
  dateTime = dateParts[2] + "/" + dateParts[1] + "/" + dateParts[0] + " " + dateTime.split(" ")[1];

  // Remover os milissegundos da parte da hora
  dateTime = dateTime.split(".")[0];

  // Remover o "Z" que indica o fuso horário UTC
  dateTime = dateTime.replace("Z", "");

  return dateTime;
}

/**
 * Funções para permitir a ordenação dos campos de datas no formato DD/MM/YYYY HH:mm:ss no DataTable:
 */
jQuery.fn.dataTableExt.oSort['ptbr_date-asc'] = function (a, b) {
  var ptbrDatea = a.split(' ');
  var ptbrDateb = b.split(' ');

  var datePartA = ptbrDatea[0].split('/');
  var timePartA = ptbrDatea[1].split(':');

  var datePartB = ptbrDateb[0].split('/');
  var timePartB = ptbrDateb[1].split(':');

  var x = new Date(datePartA[2], datePartA[1] - 1, datePartA[0], timePartA[0], timePartA[1], timePartA[2]);
  var y = new Date(datePartB[2], datePartB[1] - 1, datePartB[0], timePartB[0], timePartB[1], timePartB[2]);

  return x - y;
};

jQuery.fn.dataTableExt.oSort['ptbr_date-desc'] = function (a, b) {
  var ptbrDatea = a.split(' ');
  var ptbrDateb = b.split(' ');

  var datePartA = ptbrDatea[0].split('/');
  var timePartA = ptbrDatea[1].split(':');

  var datePartB = ptbrDateb[0].split('/');
  var timePartB = ptbrDateb[1].split(':');

  var x = new Date(datePartA[2], datePartA[1] - 1, datePartA[0], timePartA[0], timePartA[1], timePartA[2]);
  var y = new Date(datePartB[2], datePartB[1] - 1, datePartB[0], timePartB[0], timePartB[1], timePartB[2]);

  return y - x;
};