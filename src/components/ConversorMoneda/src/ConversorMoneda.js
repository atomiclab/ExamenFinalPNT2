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
  },

  watch: {

  },

  methods: {

  },

  created() {
  },
  mounted() {
  },
  unmounted() {
  },
}
