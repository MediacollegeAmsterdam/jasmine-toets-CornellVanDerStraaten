function WinkelWagenObject() {
    this.itemAmount = 0;
    this.items = [];

    this.addItem = function(item, color, size, storageAmount) {
        let newItem = new MakeItem(item, color, size, storageAmount);
        this.items.push(newItem);
        this.itemAmount += 1;
    }
}
function MakeItem(item, color, size, storageAmount) {
    this.itemName = item;
    this.itemColor = color;
    this.itemSize = size;
    this.itemStorageAmount = storageAmount;
};

let winkelWagen = new WinkelWagenObject();
winkelWagen.addItem('Sneakers', 'Rood', '42', '34')

