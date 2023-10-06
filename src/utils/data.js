
export const getItems = () => {
  console.log("first")
    const items = localStorage.getItem('categories');
    return items ? JSON.parse(items) : [];
  };
  export const getQuestions = (category) => {
    console.log(category)
    const items = localStorage.getItem(category);
    return items ? JSON.parse(items) : [];
  };
  
  export const addItem = (item) => {
    const items = getItems();
    items.push(item);
    localStorage.setItem('categories', JSON.stringify(items));
  };
  export const addQuation = (category,item) => {
    const items = getQuestions(category);
    console.log(items)
    items.push(item);
    localStorage.setItem(category, JSON.stringify(items));
  };
  
  export const updateItem = (id, updatedItem) => {
    const items = getItems();
    const index = items.findIndex((item) => item.id === id);
    if (index !== -1) {
      items[index] = updatedItem;
      localStorage.setItem('categories', JSON.stringify(items));
    }
  };
  
  export const deleteItem = (id) => {
    const items = getItems();
    const updatedItems = items.filter((item) => item.id !== id);
    localStorage.setItem('categories', JSON.stringify(updatedItems));
  };
  export const deleteQuation = (category,id) => {
    const items = getQuestions(category);
    const updatedItems = items.filter((item) => item.id !== id);
    localStorage.setItem(category, JSON.stringify(updatedItems));
  };
  