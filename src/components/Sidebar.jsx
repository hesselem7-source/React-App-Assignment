import { useState, useCallback } from "react"

/**
 * Renders an array of strings passed in that can be filtered and added to as an
 * unordered list.
 * @returns Component
 */
export default function Sidebar({ initialMenuItems }) {
  let [newMenuItem, setNewMenuItem] = useState("")

  // ✅ TODO 2 COMPLETED:
  // Using a state hook, maintain the current menu items as an array state,
  // initialized from the initialMenuItems prop.
  let [menuItems, setMenuItems] = useState(initialMenuItems)

  let [filter, setFilter] = useState("")

  // ✅ TODO 3 COMPLETED:
  // Add a new menu item from the input field to the menuItems state.
  let addMenuItem = useCallback(() => {
    if (newMenuItem.trim() === "") return
    setMenuItems([newMenuItem, ...menuItems])
    setNewMenuItem("")
  }, [newMenuItem, menuItems])

  // ✅ TODO 4 COMPLETED:
  // Display ONLY the menu items that contain the filter value (case-insensitive)
  // using a regular expression. When the filter is empty, show all items.
  const filteredMenuItems = menuItems.filter((item) => {
    if (filter === "") return true
    const regex = new RegExp(filter, "i")
    return regex.test(item)
  })

  // ✅ TODO 1 COMPLETED:
  // Render an unordered list of the menu items, with each string in the array
  // rendered as its own list item.
  const renderedMenuItems = (
    <ul>
      {filteredMenuItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )

  return (
    <div>
      {renderedMenuItems}

      <input
        type="text"
        id="newMenuItemValue"
        value={newMenuItem}
        onChange={(event) => setNewMenuItem(event.target.value)}
      ></input>
      <br />
      <button onClick={addMenuItem}>Add Item</button>
      <br />
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Filter by..."
      ></input>
    </div>
  )
}
