const tesseractyl = require('legacy-tesseractyl')
const tesseractyl_beta = require('../main/src/index')
const application = {
        "panelURL": "https://panel.creeper.wtf",
        "apiKey": ""
    }


tesseractyl_beta.getUser(application, 1) 