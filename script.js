var addItemTextInput = document.getElementById("addItemsToTheList_textField");
var addItemButton = document.getElementById("addItem_button");
var selectUL = document.querySelector("ul");
var allListItems = document.querySelectorAll('ul>li');
var sizeOfList = allListItems.length;


function addNewItemToTheList()
{
	var newListItem = document.createElement("li");
	newListItem.appendChild(document.createTextNode(addItemTextInput.value));
	selectUL.appendChild(newListItem);
	selectUL.addEventListener("click", doneToggle);

	var newDeleteButton = document.createElement("button");
	newDeleteButton.appendChild(document.createTextNode("DELETE"));
	newListItem.appendChild(newDeleteButton);
	newDeleteButton.addEventListener("click", deleteListItem);

	newDeleteButton.className="deleteButton";
	addItemTextInput.value = "";
}


function addNewItemToTheListAfterButtonPress()
{
	if (addItemTextInput.value.length>0)
	{
		addNewItemToTheList();
		refreshListSize()	
	}
}


function addNewItemToTheListAfterReturnPress(keypress)
{
	if (addItemTextInput.value.length>0 && keypress.keyCode===13)
	{
		addNewItemToTheList();
		refreshListSize()	
	}
}

// refreshes the list size
function refreshListSize()
{	
	allListItems = document.querySelectorAll('ul>li');
	sizeOfList = allListItems.length;
}


function doneToggle() 
{
	// finds the list of classes on the clicked target and toggles the .done class
	event.target.classList.toggle("done");
}

// Function to delete li on DELETE button click
function deleteListItem()
{
	// Selects button's parent node, the li
	var liItem = event.target.parentNode;
	// Selects the li's parent node, the ul
	var liParent = liItem.parentNode;
	// Removed the ul's child node, the li
	liParent.removeChild(liItem);
}


addItemButton.addEventListener("click", addNewItemToTheListAfterButtonPress);

addItemTextInput.addEventListener("keypress", addNewItemToTheListAfterReturnPress);




























