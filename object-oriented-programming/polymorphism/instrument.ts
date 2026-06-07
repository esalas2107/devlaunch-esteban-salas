type InstrumentType = 'viento' | 'cuerda' | 'percusión'

abstract class Instrument {
    constructor(public type: InstrumentType) {

    }

    play() {}
}

class Guitar extends Instrument {
    constructor() {
        super('cuerda');
    }

    play() {
        console.log('Strum strum strum...')
    }
}

class Flute extends Instrument {
    constructor() {
        super("viento")
    }

    play() {
        console.log("Toot toot toot")
    }
}

class Drums extends Instrument {
    constructor() {
        super("percusión")
    }

    play() {
        console.log("Boom boom boom")
    }
}

class Artist {
    constructor() {

    }

    playInstrument(instrument: Instrument) {
        instrument.play();
        console.log(instrument.type);
    }
}

const guitar = new Guitar();
const flute = new Flute();
const drums = new Drums();

const artist = new Artist();

artist.playInstrument(guitar);
artist.playInstrument(flute);
artist.playInstrument(drums);