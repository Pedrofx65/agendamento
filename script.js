function scheduleAppointment() {
  var doctor = document.getElementById("doctor").value;
  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;

  // Aqui você pode adicionar a lógica para enviar os detalhes do agendamento para o servidor
  // Por enquanto, apenas vamos exibir os detalhes no console
  console.log("Consulta agendada com sucesso!");
  console.log("Médico: " + doctor);
  console.log("Data: " + date);
  console.log("Horário: " + time);
}
