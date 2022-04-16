class JSDef {
    constructor(defines) {
        this.defs = defines
    }

    JD(key) {
        return this.defs[`${key}`]
    }

    def(key, value) {
        const To = { [key]: value, }
        this.defs = Object.assign(To)
    }

    defMany(maps) {
        this.defs = Object.assign(maps)
    }

    all() {
        return this.defs
    }
}

export {
    JSDef
}