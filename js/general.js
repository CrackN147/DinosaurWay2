let formState = false;
let postsContainer = document.getElementById('postsContainer');
const toggleForm = () => {
  let formElement = document.getElementById('createFormContainer');
  let buttonElement = document.getElementById('openFormButton');
  if (!formState) {
    formElement.style.display = 'flex';
    buttonElement.innerText = 'ფორმის დახურვა';
    formState = true;
  } else {
    formElement.style.display = 'none';
    buttonElement.innerText = 'ფორმის გახსნა';
    formState = false;
  }
}

const getBlogPosts = () => {
  let data = [];
  if (exists('blog')) {
    data = JSON.parse(get('blog'));
  }
  return data;
}

const toggleNoPosts = (toggle = false) => {
  let noPostsElement = document.getElementById('noPosts');
  if (toggle) {
    noPostsElement.style.display = 'none';
  } else {
    noPostsElement.style.display = 'block';
  }
  
}

const createNewPost = () => {
  let titleValue = document.getElementById('title');
  let textValue = document.getElementById('text');
  // if (titleValue.value === '' || textValue.value === '') {
  //   alert('შეავსეთ ყველა ველი');
  //   return;
  // }
  let posts = getBlogPosts();
  let postData = {
    id: posts.length + 1,
    title: titleValue.value,
    text: textValue.value
  }
  posts.push(postData);
  set('blog', JSON.stringify(posts));
  createNewPostElement(postData)
  toggleNoPosts(true);
  titleValue.value = '';
  textValue.value = '';
  toggleForm();
}

const createNewPostElement = (data) => {
  let newPostContainer = document.createElement('div');
  let newPostTitle = document.createElement('h3');
  let newPostText = document.createElement('p');
  newPostTitle.innerText = data.title;
  newPostTitle.setAttribute('onclick', `showInnerText(${data.id})`);
  newPostText.innerText = data.text;
  newPostText.setAttribute('id', `post-text-${data.id}`);
  newPostContainer.appendChild(newPostTitle);
  newPostContainer.appendChild(newPostText);
  postsContainer.appendChild(newPostContainer);
}

const showInnerText = (id) => {
  let postTextElement = document.getElementById(`post-text-${id}`);
  if (
    postTextElement.style.display === 'none' || 
    postTextElement.style.display === ''
  ) {
    postTextElement.style.display = 'block';
  } else {
    postTextElement.style.display = 'none';
  }
}

window.onload = () => {
  let data = getBlogPosts();
  if (data.length === 0) {
    toggleNoPosts()
    return;
  }
  for (let i = 0; i < data.length; i++) {
    createNewPostElement(data[i]);
  }
}