import { v4 as uuidv4 } from 'uuid';
// console.log("hi")
const list = document.querySelector<HTMLUListElement>('#list');
const form = document.getElementById('#formx') as HTMLFormElement | null;
const input = document.querySelector<HTMLInputElement>('#the-input');

type Task={
    id: string;
    title: string;
    completed: boolean;
    createdAt: Date;
  }

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(e)

  
  //optional chaining
  if (input?.value == '' || input?.value == null) return;

  const newTask: Task = {
    id: "uuidv4()",
    title: input.value,
    completed: false,
    createdAt: new Date(),
  };
  addNewList(newTask)
  // addListItems
});

function addNewList(task:Task){
    const item=document.createElement("li");

    const label=document.createElement("label")
    const checkbox=document.createElement("input")

    checkbox.type="checkbox";

    label.append(checkbox, task.title)
    item.append(label)
    list?.append(item)
}
