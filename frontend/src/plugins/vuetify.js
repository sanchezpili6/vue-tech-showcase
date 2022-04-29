// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

const myCustomLightTheme = {
    dark: false,
    colors: {
        background: '#FFF',
        primary: '#758E4F',
        accent: '#C73E1D',
        text: '#5C5D67',
        error: '#F45D01',
        info: '#BAD7F2',
    }
}

export default createVuetify({
    theme: {
        defaultTheme: 'myCustomLightTheme',
        themes: {
            myCustomLightTheme,
        }
    }
})