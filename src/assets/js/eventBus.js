export const eventBus = {
    stores: {},
    on(name, fn) {
        this.stores[name] = fn
    },
    emit(name,) {
        console.log(this.stores, name)
        this.stores[name] && this.stores[name].call()
    },
    off(name = null) {
        if (!name) {
            this.stores = {}
        } else {
            delete this.stores[name]
        }
    }
}
