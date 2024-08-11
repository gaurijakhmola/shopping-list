// Function to add an item to the list
function addItem() {
    const itemName = document.getElementById('itemName').value;
    const itemQuantity = document.getElementById('itemQuantity').value;

    if (itemName && itemQuantity > 0) {
        const list = document.getElementById('shoppingList');

        const listItem = document.createElement('li');
        listItem.textContent = `${itemName} - Quantity: ${itemQuantity}`;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = function() {
            editItem(listItem, itemName, itemQuantity);
        };

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = function() {
            removeItem(listItem);
        };

        listItem.appendChild(editButton);
        listItem.appendChild(removeButton);

        list.appendChild(listItem);

        document.getElementById('itemName').value = '';
        document.getElementById('itemQuantity').value = '';
    } else {
        alert('Please enter both an item name and a valid quantity.');
    }
}

// Function to edit an item in the list
function editItem(listItem, oldName, oldQuantity) {
    const newName = prompt('Edit item name:', oldName);
    const newQuantity = prompt('Edit item quantity:', oldQuantity);

    if (newName && newQuantity > 0) {
        listItem.textContent = `${newName} - Quantity: ${newQuantity}`;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = function() {
            editItem(listItem, newName, newQuantity);
        };

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = function() {
            removeItem(listItem);
        };

        listItem.appendChild(editButton);
        listItem.appendChild(removeButton);
    } else {
        alert('Please enter both a valid item name and quantity.');
    }
}

// Function to remove an item from the list
function removeItem(listItem) {
    listItem.remove();
}
