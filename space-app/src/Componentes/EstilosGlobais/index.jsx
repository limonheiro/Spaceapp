import { createGlobalStyle } from 'styled-components'

import GandhiSansRegular from './fontes/GandhiSans-Regular.otf'
import GandhiSansBold from './fontes/GandhiSans-Bold.otf'


 const EstilosGlobais = createGlobalStyle`
    @font-face {
        font-family: 'GandhiSansRegular';
        src: local('Gandhi Sans Regular'), local('GandhiSansRegular'), url(${GandhiSansRegular});
    }
    @font-face {
        font-family: 'GandhiSansBold';
        src: local('Gandhi Sans Bold'), local('GandhiSansBold'), url(${GandhiSansBold});
    }

    html{
        font-family: GandhiSansRegular;
    }
 `

export default EstilosGlobais