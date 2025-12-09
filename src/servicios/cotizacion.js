import axios from "axios"

class servicioCotizacion {
    #url = ''

    constructor() {
        this.#url = 'https://api.bluelytics.com.ar/v2/latest'
    }

    getCotizacionDolarOficialVendedor = async () => {
        try {
            const { data } = await axios.get(this.#url)
            return data.oficial.value_sell
        }
        catch(error) {
            console.error('Error cotización GET', error.message)
            return null
        }
    }
}

export default servicioCotizacion
