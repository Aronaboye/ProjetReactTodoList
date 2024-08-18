function ListItem({itemData, deleteTodo}) {
  return (
    <div>
        <li className="p-2 bg-zinc-200 mb-2 rounded flex mt-2">
            <span>{itemData.content}</span>
            <button onClick={() =>deleteTodo (itemData.id)} className="ml-auto bg-red-600 h-6 w-6 rounded text-zinc-100">X</button>
        </li>
    </div>
  )
}
export default ListItem