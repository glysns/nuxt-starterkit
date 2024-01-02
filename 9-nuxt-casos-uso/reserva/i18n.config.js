const datetimeFormats = {
    'en-US': {
        short: {
            year: 'numeric', month: 'numeric', day: 'numeric'
        },
        medium: {
            year: 'numeric', month: 'numeric', day: 'numeric',
            weekday: 'short', hour: 'numeric', minute: 'numeric'
        },
        long: {
            year: 'numeric', month: 'short', day: 'numeric',
            weekday: 'short', hour: 'numeric', minute: 'numeric'
        },
        time: {
            hour: 'numeric', minute: 'numeric'
        },
        dateTime: {
            year: 'numeric', month: 'numeric', day: 'numeric',
            hour: 'numeric', minute: 'numeric'
        },
    },
    'pt-BR': {
        short: {
            year: 'numeric', month: 'numeric', day: 'numeric'
        },
        medium: {
            year: 'numeric', month: 'numeric', day: 'numeric',
            weekday: 'short', hour: 'numeric', minute: 'numeric'
        },
        
        long: {
            year: 'numeric', month: 'short', day: 'numeric',
            weekday: 'short', hour: 'numeric', minute: 'numeric'
        },
        time: {
            hour: 'numeric', minute: 'numeric'
        },
        dateTime: {
            year: 'numeric', month: 'numeric', day: 'numeric',
            hour: 'numeric', minute: 'numeric'
        },
    }
}

const numberFormats = {
    'pt-BR': {
      currency: {
        style: 'currency', currency: 'BRL', notation: 'standard'
      },
      decimal: {
        style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2
      }
    },
    'en-US': {
        currency: {
          style: 'currency', currency: 'USD', notation: 'standard'
        },
        decimal: {
          style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2
        }
      }
    
  }
  
export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'pt-BR',
    fallbackLocale: 'pt-BR',
    datetimeFormats,
    numberFormats,
    messages: {
      "en": {
        welcome: 'Welcome People'
      },
      "pt-BR": {
        welcome: 'Bem-vindo'
      }
    }
  }))