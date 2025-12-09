import servicioCotizacion from '@/servicios/cotizacion.js'
import logo from '../assets/Logo.png'

export default {
  name: 'ConversorMoneda',

  components: {

  },

  props: {
    
  },

  data() {
    return {
      montoEnPesos: null,
      cotizacionDolar: null,
      formDirty: {
        montoEnPesos: false,
        cotizacionDolar: false,
      },
      intervaloActualizacion: null,
      servicioCotizacion: new servicioCotizacion(),
      actualizacionAutomaticaHabilitada: false,
      ultimaActualizacion: null,
      logo: logo,
    }
  },

  computed: {
    errorMontoEnPesos() {
      let mensaje = ''
      let monto = this.montoEnPesos

      if (monto === null || monto === undefined || monto === '') {
        mensaje = 'El monto es requerido'
      } else if (Number.isNaN(Number(monto))) {
        mensaje = 'El monto debe ser numérico'
      } else if (monto < 0) {
        mensaje = 'El monto debe ser mayor o igual a 0'
      }

      return {
        mensaje: mensaje,
        mostrar: mensaje != '' && this.formDirty.montoEnPesos,
        ok: mensaje == '',
      }
    },
    errorCotizacionDolar() {
      let mensaje = ''
      let cotizacion = this.cotizacionDolar

      if (cotizacion === null || cotizacion === undefined || cotizacion === '') {
        mensaje = 'La cotización es requerida'
      } else if (Number.isNaN(Number(cotizacion))) {
        mensaje = 'La cotización debe ser numérica'
      } else if (cotizacion <= 0) {
        mensaje = 'La cotización debe ser mayor a 0'
      }

      return {
        mensaje: mensaje,
        mostrar: mensaje != '' && this.formDirty.cotizacionDolar,
        ok: mensaje == '',
      }
    },
    valorConvertido() {
      if (!this.errorMontoEnPesos.ok || !this.errorCotizacionDolar.ok) {
        return 0
      }
      return this.montoEnPesos / this.cotizacionDolar
    },
    valorConvertidoFormateado() {
      if (this.valorConvertido === 0) {
        return '$0.00'
      }
      return `$${this.valorConvertido.toFixed(2)}`
    },
    fechaHoraUltimaActualizacion() {
      if (!this.ultimaActualizacion) {
        return 'No hay actualizaciones aún'
      }
      const fecha = new Date(this.ultimaActualizacion)
      return fecha.toLocaleString('es-AR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    },
  },

  watch: {

  },

  methods: {
    async actualizarCotizacion() {
      const cotizacion = await this.servicioCotizacion.getCotizacionDolarOficialVendedor()
      if (cotizacion !== null) {
        this.cotizacionDolar = cotizacion
        this.formDirty.cotizacionDolar = true
        this.ultimaActualizacion = new Date()
      }
    },
    iniciarActualizacionAutomatica() {
      // Detener cualquier intervalo existente antes de crear uno nuevo
      this.detenerActualizacionAutomatica()
      // Actualizar inmediatamente
      this.actualizarCotizacion()
      // Luego actualizar cada 2 segundos
      this.intervaloActualizacion = setInterval(() => {
        this.actualizarCotizacion()
      }, 2000)
    },
    detenerActualizacionAutomatica() {
      if (this.intervaloActualizacion) {
        clearInterval(this.intervaloActualizacion)
        this.intervaloActualizacion = null
      }
    },
    toggleActualizacionAutomatica() {
      if (this.actualizacionAutomaticaHabilitada) {
        // Si se habilita, iniciar la actualización automática
        this.iniciarActualizacionAutomatica()
      } else {
        // Si se deshabilita, detener la actualización automática
        this.detenerActualizacionAutomatica()
      }
    },
  },

  created() {
  },
  mounted() {
  },
  unmounted() {
    this.detenerActualizacionAutomatica()
  },
}
