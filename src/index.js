'use strict'

import opensans from 'typeface-open-sans'
import css from './styles.scss'

// FONT AWESOME
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faPhone, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter, faWhatsapp, faTelegram, faLinkedin } from '@fortawesome/free-brands-svg-icons'


library.add(
    faEnvelope,
    faPhone,
    faGlobe,
    faGithub,
    faTwitter,
    faWhatsapp,
    faTelegram,
    faLinkedin
)
// This will look continously to convert i-fa to svg
// dom.watch()

import  resume from './resume.json'
const {Elm} = require('./Main')

// const storageKey = 'store'
// const flags = localStorage.getItem(storageKey)
let app = Elm.Main.init({
  flags: resume,
  node: document.getElementById('app')
})

// Batch convert all <i> tags to svg icons
dom.i2svg()
