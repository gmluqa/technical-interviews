function funcion3(horasTrabajadas, tarifa) {
  let bonificaionHorasExtra = 1.5;
  let sueldo = 0;

  if (horasTrabajadas > 40) {
    let horasExtra = horasTrabajadas - 40;
    let horasNormales = horasTrabajadas - horasExtra;
    sueldo =
      horasNormales * tarifa + horasExtra * tarifa * bonificaionHorasExtra;
  } else {
    sueldo = horasTrabajadas * tarifa;
  }
  console.log(
    `El sueldo es: ${sueldo}€. No obstante, NUNCA usaria JS para el calculo de sueldos en produccion, el proximo paso seria aprender COBOL 😁.`
  );
}

// Tests
funcion3(40, 10);
funcion3(80, 10);
funcion3(120, 10);
