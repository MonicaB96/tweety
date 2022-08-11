export async function createPostComponent(post, author, HTMLElementId) {
  document.getElementById(HTMLElementId).innerHTML =
    `
    <div style="border-style: solid; border-color: green; padding: 10px; max-width: 500px; margin-bottom: 5px">
        <p>${post.text}</p>
        <div style="display: flex">
        <p>Created at: ${new Date(post.created_at).toLocaleDateString('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
        })}</p>
        &nbsp;&nbsp;&nbsp;
        <p>Created by: ${author.first_name + ' ' + author.last_name}</p>
        </div>
    </div>
    ` + document.getElementById(HTMLElementId).innerHTML;
}
