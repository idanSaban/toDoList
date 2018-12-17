class List {
    constructor(renderer) {
        this._list =JSON.parse(localStorage.list||[])
        this.itemId = 0
        this.renderer = renderer
    }
    getList(){return this._list}
    start() {
        this.renderer.display(this._list)
    }
    generateItemID() {
        this.itemId++
        return this.itemId

    }
    addItem(text) {
        console.log(`new item: ${text}`)
        const newItem = new Item(this.generateItemID(), text)
        this._list.push(newItem)
        this.renderer.display(this._list)
        this.save()
    }
    removeItem(id) {
        console.log(`remove item, id: ${id}`)
        const index = this._list.findIndex(i => i.id === id)
        this._list.splice(index, 1)
        this.renderer.display(this._list)
        this.save()
    }
    toggleCompleteItem(id) {
        const item = this._list.find(i => i.id === id)
        console.log(`complete toggler: ${item.id} is ${item.complete}`)
        if (!item.complete) {
            item.complete = true
        } else {
            item.complete = false
        }
        console.log(`item id ${id} complete: ${item.complete}`)
        this.renderer.display(this._list)
        this.save()
    }
    save(){
        localStorage.setItem('list',JSON.stringify(this._list))
    }
}

class Item {
    constructor(id, text) {
        this.id = id
        this.text = text
        this.complete = false
    }
}


