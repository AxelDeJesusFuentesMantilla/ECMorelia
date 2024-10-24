const data = require('../config/dataSeed.js')
const SeedService = require('../services/seedService.js')

class SeedController {
  seedService = new SeedService()

  constructor() {}

  async run() {
    await this.seedService.clearTables()
    const doctor = await this.seedService.seedData('doctor', data.doctor)
    const hospitales = await this.seedService.seedData('hospitales', data.hospitales)
    const operador = await this.seedService.seedData('operador', data.operador)
    const paramedico = await this.seedService.seedData('paramedicos', data.paramedico)

    const ambulancias = await this.seedService.seedData('ambulancias', {
      id_paramedicos: paramedico.id_paramedicos,
      id_hospitales: hospitales.id_hospitales
    })
    const ambulanciasDoctor = await this.seedService.seedData('ambulancias_doctor', {
      id_doctor: doctor.id_doctor,
      numero_placa_sm: ambulancias.numero_placa_sm,
      reporte_doctor: 'Atención a paciente en estado crítico.'
    })
    const ambulanciasHospitales = await this.seedService.seedData('ambulancias_hospitales', {
      id_hospitales: hospitales.id_hospitales,
      numero_placa_sm: ambulancias.numero_placa_sm,
      reporte_servicio: 'Servicio de emergencia realizado.'
    })
    const ambulanciasParamedicos = await this.seedService.seedData('ambulancias_paramedicos', {
      id_paramedicos: paramedico.id_paramedicos,
      numero_placa_sm: ambulancias.numero_placa_sm,
      reporte_inicial: 'Paciente con dificultad respiratoria.',
      fecha: new Date(),
      estado: 'En servicio'
    })

    return {
      doctor,
      hospitales,
      operador,
      paramedico,
      ambulancias,
      ambulanciasDoctor,
      ambulanciasHospitales,
      ambulanciasParamedicos
    }
  }
}

module.exports = SeedController
