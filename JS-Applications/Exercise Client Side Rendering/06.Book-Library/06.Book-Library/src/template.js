import { html } from 'https://unpkg.com/lit-html?module'

const formTemplate = (submitText = 'Submit', title = "", author = "") => {
   return html`
      <form id=${submitText==='Submit' ? 'add-form' : 'edit-form' }>
         <h3>${submitText === 'Submit' ? 'Add book' : 'Edit book'}</h3>
         <label>TITLE</label>
         <input type="text" name="title" placeholder="Title..." .value=${title}>
         <label>AUTHOR</label>
         <input type="text" name="author" placeholder="Author..." .value=${author}>
         <input type="submit" .value=${submitText}>
      </form>`
}


const tHeadTemp = () => html`
<thead>
   <tr>
      <th>Title</th>
      <th>Author</th>
      <th>Action</th>
   </tr>
</thead>`

const tBodyTemp = (data) => html`
<tbody>
   ${data.map(book => html`
   <tr>
      <td>${book[1].title}</td>
      <td>${book[1].author}</td>
      <td data-id=${book[0]}>
         <button>Edit</button>
         <button>Delete</button>
      </td>
   </tr>`)}
</tbody>`

const buttonTemp = () => html`
<button id="loadBooks">LOAD ALL BOOKS</button>`

const tableTemp = (data, submitText = 'Submit', title = "", author = "") => html`
${buttonTemp()}
<table>
   ${tHeadTemp()}
   ${tBodyTemp(data)}
</table>
${formTemplate(submitText, title, author)}`



export { tableTemp }